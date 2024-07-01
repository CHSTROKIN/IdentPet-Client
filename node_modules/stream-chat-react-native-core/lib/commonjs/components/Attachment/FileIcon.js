var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _Audio = require("../../icons/Audio");
var _CSV = require("../../icons/CSV");
var _DOC = require("../../icons/DOC");
var _DOCX = require("../../icons/DOCX");
var _GenericFile = require("../../icons/GenericFile");
var _HTML = require("../../icons/HTML");
var _MD = require("../../icons/MD");
var _ODT = require("../../icons/ODT");
var _PDF = require("../../icons/PDF");
var _PPT = require("../../icons/PPT");
var _PPTX = require("../../icons/PPTX");
var _RAR = require("../../icons/RAR");
var _RTF = require("../../icons/RTF");
var _SEVEN_Z = require("../../icons/SEVEN_Z");
var _TAR = require("../../icons/TAR");
var _TXT = require("../../icons/TXT");
var _Video = require("../../icons/Video");
var _XLS = require("../../icons/XLS");
var _XLSX = require("../../icons/XLSX");
var _ZIP = require("../../icons/ZIP");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Attachment/FileIcon.tsx";
var audioFileTypes = ['audio/1d-interleaved-parityfec', 'audio/32kadpcm', 'audio/3gpp', 'audio/3gpp2', 'audio/aac', 'audio/ac3', 'audio/AMR', 'audio/AMR-WB', 'audio/amr-wb+', 'audio/aptx', 'audio/asc', 'audio/ATRAC-ADVANCED-LOSSLESS', 'audio/ATRAC-X', 'audio/ATRAC3', 'audio/basic', 'audio/BV16', 'audio/BV32', 'audio/clearmode', 'audio/CN', 'audio/DAT12', 'audio/dls', 'audio/dsr-es201108', 'audio/dsr-es202050', 'audio/dsr-es202211', 'audio/dsr-es202212', 'audio/DV', 'audio/DVI4', 'audio/eac3', 'audio/encaprtp', 'audio/EVRC', 'audio/EVRC-QCP', 'audio/EVRC0', 'audio/EVRC1', 'audio/EVRCB', 'audio/EVRCB0', 'audio/EVRCB1', 'audio/EVRCNW', 'audio/EVRCNW0', 'audio/EVRCNW1', 'audio/EVRCWB', 'audio/EVRCWB0', 'audio/EVRCWB1', 'audio/EVS', 'audio/example', 'audio/flexfec', 'audio/fwdred', 'audio/G711-0', 'audio/G719', 'audio/G7221', 'audio/G722', 'audio/G723', 'audio/G726-16', 'audio/G726-24', 'audio/G726-32', 'audio/G726-40', 'audio/G728', 'audio/G729', 'audio/G7291', 'audio/G729D', 'audio/G729E', 'audio/GSM', 'audio/GSM-EFR', 'audio/GSM-HR-08', 'audio/iLBC', 'audio/ip-mr_v2.5', 'audio/L8', 'audio/L16', 'audio/L20', 'audio/L24', 'audio/LPC', 'audio/MELP', 'audio/MELP600', 'audio/MELP1200', 'audio/MELP2400', 'audio/mhas', 'audio/mobile-xmf', 'audio/MPA', 'audio/mp4', 'audio/MP4A-LATM', 'audio/mpa-robust', 'audio/mpeg', 'audio/mpeg4-generic', 'audio/ogg', 'audio/opus', 'audio/parityfec', 'audio/PCMA', 'audio/PCMA-WB', 'audio/PCMU', 'audio/PCMU-WB', 'audio/prs.sid', 'audio/raptorfec', 'audio/RED', 'audio/rtp-enc-aescm128', 'audio/rtploopback', 'audio/rtp-midi', 'audio/rtx', 'audio/SMV', 'audio/SMV0', 'audio/SMV-QCP', 'audio/sofa', 'audio/sp-midi', 'audio/speex', 'audio/t140c', 'audio/t38', 'audio/telephone-event', 'audio/TETRA_ACELP', 'audio/TETRA_ACELP_BB', 'audio/tone', 'audio/TSVCIS', 'audio/UEMCLIP', 'audio/ulpfec', 'audio/usac', 'audio/VDVI', 'audio/VMR-WB', 'audio/vnd.3gpp.iufp', 'audio/vnd.4SB', 'audio/vnd.audiokoz', 'audio/vnd.CELP', 'audio/vnd.cisco.nse', 'audio/vnd.cmles.radio-events', 'audio/vnd.cns.anp1', 'audio/vnd.cns.inf1', 'audio/vnd.dece.audio', 'audio/vnd.digital-winds', 'audio/vnd.dlna.adts', 'audio/vnd.dolby.heaac.1', 'audio/vnd.dolby.heaac.2', 'audio/vnd.dolby.mlp', 'audio/vnd.dolby.mps', 'audio/vnd.dolby.pl2', 'audio/vnd.dolby.pl2x', 'audio/vnd.dolby.pl2z', 'audio/vnd.dolby.pulse.1', 'audio/vnd.dra', 'audio/vnd.dts', 'audio/vnd.dts.hd', 'audio/vnd.dts.uhd', 'audio/vnd.dvb.file', 'audio/vnd.everad.plj', 'audio/vnd.hns.audio', 'audio/vnd.lucent.voice', 'audio/vnd.ms-playready.media.pya', 'audio/vnd.nokia.mobile-xmf', 'audio/vnd.nortel.vbk', 'audio/vnd.nuera.ecelp4800', 'audio/vnd.nuera.ecelp7470', 'audio/vnd.nuera.ecelp9600', 'audio/vnd.octel.sbc', 'audio/vnd.presonus.multitrack', 'audio/vnd.qcelp', 'audio/vnd.rhetorex.32kadpcm', 'audio/vnd.rip', 'audio/vnd.sealedmedia.softseal.mpeg', 'audio/vnd.vmx.cvsd', 'audio/vorbis', 'audio/vorbis-config'];
var docMimeTypes = ['application/msword', 'application/msword-template', 'application/vnd.oasis.opendocument.text', 'application/vnd.oasis.opendocument.text-template', 'application/vnd.oasis.opendocument.text-flat-xml'];
var docXMimeTypes = ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.wordprocessingml.template', 'application/vnd.ms-word.document.macroEnabled.12', 'application/vnd.ms-word.template.macroEnabled.12'];
var excelMimeTypes = ['application/vnd.ms-excel', 'application/vnd.oasis.opendocument.spreadsheet', 'application/vnd.oasis.opendocument.spreadsheet-template', 'application/vnd.oasis.opendocument.spreadsheet-flat-xml'];
var excelXMimeTypes = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.spreadsheetml.template', 'application/vnd.ms-excel.sheet.macroEnabled.12', 'application/vnd.ms-excel.template.macroEnabled.12', 'application/vnd.ms-excel.addin.macroEnabled.12', 'application/vnd.ms-excel.addin.macroEnabled.12'];
var odtMimeTypes = ['application/vnd.oasis.opendocument.text', 'application/vnd.oasis.opendocument.text-template', 'application/vnd.oasis.opendocument.text-flat-xml'];
var powerpointMimeTypes = ['application/vnd.ms-powerpoint', 'application/vnd.oasis.opendocument.presentation', 'application/vnd.oasis.opendocument.presentation-template', 'application/vnd.oasis.opendocument.presentation-flat-xml'];
var powerpointXMimeTypes = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.presentationml.template', 'application/vnd.openxmlformats-officedocument.presentationml.slideshow', 'application/vnd.ms-powerpoint.addin.macroEnabled.12', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12', 'application/vnd.ms-powerpoint.template.macroEnabled.12', 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'];
var tarFileTypes = ['application/x-archive', 'application/x-tar', 'application/gzip', 'application/x-compress', 'application/x-bzip', 'application/x-lzip', 'application/x-lz4', 'application/x-lzma', 'application/x-lzop', 'application/x-xz', 'application/x-webarchive'];
var zipFileTypes = ['application/gzip', 'application/zip'];
var videoFileTypes = ['video/3g2', 'video/3gp', 'video/aaf', 'video/asf', 'video/avchd', 'video/avi', 'video/drc', 'video/flv', 'video/m2v', 'video/m3u8', 'video/m4p', 'video/m4v', 'video/mkv', 'video/mng', 'video/mov', 'video/mp2', 'video/mp4', 'video/mpe', 'video/mpeg', 'video/mpg', 'video/mpv', 'video/mxf', 'video/nsv', 'video/ogg', 'video/ogv', 'video/qt', 'video/rm', 'video/rmvb', 'video/roq', 'video/svi', 'video/vob', 'video/webm', 'video/wmv', 'video/yuv', 'video/quicktime', 'video/webm', 'video/x-flv'];
var mimeTypeToIconMap = {
  'application/pdf': _PDF.PDF,
  'application/rtf': _RTF.RTF,
  'application/vnd.rar': _RAR.RAR,
  'application/x-7z-compressed': _SEVEN_Z.SEVEN_Z,
  'text/csv': _CSV.CSV,
  'text/html': _HTML.HTML,
  'text/markdown': _MD.MD,
  'text/plain': _TXT.TXT
};
for (var _i = 0, _audioFileTypes = audioFileTypes; _i < _audioFileTypes.length; _i++) {
  var type = _audioFileTypes[_i];
  mimeTypeToIconMap[type] = _Audio.Audio;
}
for (var _i2 = 0, _docMimeTypes = docMimeTypes; _i2 < _docMimeTypes.length; _i2++) {
  var _type = _docMimeTypes[_i2];
  mimeTypeToIconMap[_type] = _DOC.DOC;
}
for (var _i3 = 0, _docXMimeTypes = docXMimeTypes; _i3 < _docXMimeTypes.length; _i3++) {
  var _type2 = _docXMimeTypes[_i3];
  mimeTypeToIconMap[_type2] = _DOCX.DOCX;
}
for (var _i4 = 0, _excelMimeTypes = excelMimeTypes; _i4 < _excelMimeTypes.length; _i4++) {
  var _type3 = _excelMimeTypes[_i4];
  mimeTypeToIconMap[_type3] = _XLS.XLS;
}
for (var _i5 = 0, _excelXMimeTypes = excelXMimeTypes; _i5 < _excelXMimeTypes.length; _i5++) {
  var _type4 = _excelXMimeTypes[_i5];
  mimeTypeToIconMap[_type4] = _XLSX.XLSX;
}
for (var _i6 = 0, _odtMimeTypes = odtMimeTypes; _i6 < _odtMimeTypes.length; _i6++) {
  var _type5 = _odtMimeTypes[_i6];
  mimeTypeToIconMap[_type5] = _ODT.ODT;
}
for (var _i7 = 0, _powerpointMimeTypes = powerpointMimeTypes; _i7 < _powerpointMimeTypes.length; _i7++) {
  var _type6 = _powerpointMimeTypes[_i7];
  mimeTypeToIconMap[_type6] = _PPT.PPT;
}
for (var _i8 = 0, _powerpointXMimeTypes = powerpointXMimeTypes; _i8 < _powerpointXMimeTypes.length; _i8++) {
  var _type7 = _powerpointXMimeTypes[_i8];
  mimeTypeToIconMap[_type7] = _PPTX.PPTX;
}
for (var _i9 = 0, _tarFileTypes = tarFileTypes; _i9 < _tarFileTypes.length; _i9++) {
  var _type8 = _tarFileTypes[_i9];
  mimeTypeToIconMap[_type8] = _TAR.TAR;
}
for (var _i10 = 0, _zipFileTypes = zipFileTypes; _i10 < _zipFileTypes.length; _i10++) {
  var _type9 = _zipFileTypes[_i10];
  mimeTypeToIconMap[_type9] = _ZIP.ZIP;
}
for (var _i11 = 0, _videoFileTypes = videoFileTypes; _i11 < _videoFileTypes.length; _i11++) {
  var _type10 = _videoFileTypes[_i11];
  mimeTypeToIconMap[_type10] = _Video.Video;
}
function mimeTypeToIcon(mimeType) {
  if (!mimeType) return _GenericFile.GenericFile;
  var Icon = mimeTypeToIconMap[mimeType];
  if (Icon) return Icon;
  return _GenericFile.GenericFile;
}
var FileIcon = function FileIcon(_ref) {
  var mimeType = _ref.mimeType,
    size = _ref.size;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    icon = _useTheme.theme.messageSimple.file.icon;
  var Icon = mimeTypeToIcon(mimeType);
  return (0, _jsxRuntime.jsx)(Icon, Object.assign({}, size ? {
    height: size,
    width: size
  } : {}, icon));
};
exports.FileIcon = FileIcon;
FileIcon.displayName = 'FileIcon{messageSimple{file{icon}}}';
//# sourceMappingURL=FileIcon.js.map