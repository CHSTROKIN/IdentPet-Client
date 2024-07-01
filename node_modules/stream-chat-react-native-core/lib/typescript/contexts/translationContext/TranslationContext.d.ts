import React from 'react';
import Dayjs from 'dayjs';
import type { TFunction } from 'i18next';
import type { Moment } from 'moment';
import type { TranslationLanguages } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../types/types';
export declare const DEFAULT_USER_LANGUAGE: TranslationLanguages;
export declare const isDayOrMoment: (output: TDateTimeParserOutput) => output is Dayjs.Dayjs | Moment;
export type TDateTimeParserInput = string | number | Date;
export type TDateTimeParserOutput = string | number | Date | Dayjs.Dayjs | Moment;
export type TDateTimeParser = (input?: TDateTimeParserInput) => TDateTimeParserOutput;
export type TranslatorFunctions = {
    t: TFunction | ((key: string) => string);
    tDateTimeParser: TDateTimeParser;
};
export type TranslationContextValue = TranslatorFunctions & {
    userLanguage: TranslationLanguages;
};
export declare const TranslationContext: React.Context<TranslationContextValue>;
type Props = React.PropsWithChildren<{
    value: TranslationContextValue;
}>;
export declare const TranslationProvider: ({ children, value }: Props) => React.JSX.Element;
export declare const useTranslationContext: () => TranslationContextValue;
/**
 * @deprecated
 *
 * This will be removed in the next major version.
 *
 * Typescript currently does not support partial inference so if ChatContext
 * typing is desired while using the HOC withTranslationContext the Props for the
 * wrapped component must be provided as the first generic.
 */
export declare const withTranslationContext: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(Component: React.ComponentType<StreamChatGenerics>) => React.ComponentType<Omit<StreamChatGenerics, "userLanguage" | keyof TranslatorFunctions>>;
export {};
//# sourceMappingURL=TranslationContext.d.ts.map