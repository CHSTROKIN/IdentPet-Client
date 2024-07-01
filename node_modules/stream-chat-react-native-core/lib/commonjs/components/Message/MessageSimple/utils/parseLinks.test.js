var _parseLinks = require("./parseLinks");
describe('parseLinksFromText', function () {
  it.each([['https://www.getstream.io', 'https://www.getstream.io'], ['https://getstream.io', 'https://getstream.io'], ['scrn://team-chat', undefined], ['https://localhost', 'https://localhost'], ['https://localhost/with/path?and=query&multiple=params', 'https://localhost/with/path?and=query&multiple=params'], ['https://localhost/with/path?and=query#fragment', 'https://localhost/with/path?and=query#fragment'], ['reactnative.dev', 'http://reactnative.dev'], ['hinge.health/schedule-with-a-coach', 'http://hinge.health/schedule-with-a-coach'], ['https://zh.wikipedia.org/wiki/挪威牛油危機', 'https://zh.wikipedia.org/wiki/挪威牛油危機'], ['https://getstream.io/chat/docs/react-native/?language=javascript', 'https://getstream.io/chat/docs/react-native/?language=javascript'], ['127.0.0.1/local_(development)_server', undefined], ['https://a.co:8999/ab.php?p=12', 'https://a.co:8999/ab.php?p=12'], ['https://help.apple.com/xcode/mac/current/#/devba7f53ad4', 'https://help.apple.com/xcode/mac/current/#/devba7f53ad4'], ['[google.com](https://www.google.com)', undefined], ['[https://www.google.com](https://www.google.com)', undefined], ['[abc]()', undefined], ['[](https://www.google.com)', undefined]])('Returns the encoded value of %p as %p', function (link, expected) {
    var _result$;
    var result = (0, _parseLinks.parseLinksFromText)(link);
    expect((_result$ = result[0]) == null ? void 0 : _result$.url).toBe(expected);
  });
  it('parses fqdn', function () {
    var input = "We have put the apim bol,\n  temporarily so :sj: we can later put the monitors on my grasp\n  on reality right now is\n  https://www.contrived-example.com:8080/sub/page.php?p1=1\uD83C\uDDF3\uD83C\uDDF4&p2=2#fragment-identifier\n  :)";
    var result = (0, _parseLinks.parseLinksFromText)(input);
    expect(result).toEqual([{
      raw: 'https://www.contrived-example.com:8080/sub/page.php?p1=1🇳🇴&p2=2#fragment-identifier',
      url: 'https://www.contrived-example.com:8080/sub/page.php?p1=1🇳🇴&p2=2#fragment-identifier'
    }]);
  });
  it.each([['support+rn@getstream.io'], ['support.rn@getstream.io'], ['support-rn@getstream.io'], ['support_rn@getstream.io']])('Can parse the email address %p', function (email) {
    var result = (0, _parseLinks.parseLinksFromText)(email);
    expect(result[0].url).toBe('mailto:' + email);
    expect(result[0].raw).toBe(email);
  });
  it("doesn't double the mailto prefix", function () {
    var input = 'mailto:support@getstream.io';
    var result = (0, _parseLinks.parseLinksFromText)(input);
    expect(result[0]).toEqual({
      raw: input,
      url: input
    });
  });
  it('Does not falsely parse LINKs from text content', function () {
    var input = "#This string exists to test that we don't produce false positives\n  Existing links:\n  [already a parsed link](https://getstream.io/blog/react-native-how-to-build-bidirectional-infinite-scroll/)\n  [even a bogus one]( should not match )\n  ## These should, however, be parsed:\n  www.getstream.io\n  getstream.io\n  ";
    var result = (0, _parseLinks.parseLinksFromText)(input);
    expect(result).toHaveLength(2);
  });
  it('Encodes incomplete emoji unicode', function () {
    var input = 'https://getstream.io/�';
    var result = (0, _parseLinks.parseLinksFromText)(input);
    expect(result[0]).toEqual({
      raw: input,
      url: 'https://getstream.io/�'
    });
  });
});
//# sourceMappingURL=parseLinks.test.js.map