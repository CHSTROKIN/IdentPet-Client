import React, { PropsWithChildren } from 'react';
import { Theme } from './utils/theme';
export type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};
export type ThemeProviderInputValue = {
    mergedStyle?: Theme;
    style?: DeepPartial<Theme>;
};
export type MergedThemesParams = {
    style?: DeepPartial<Theme>;
    theme?: Theme;
};
export type ThemeContextValue = {
    theme: Theme;
};
export declare const mergeThemes: (params: MergedThemesParams) => Theme;
export declare const ThemeContext: React.Context<Theme>;
export declare const ThemeProvider: (props: PropsWithChildren<ThemeProviderInputValue & Partial<ThemeContextValue>>) => React.JSX.Element;
export declare const useTheme: () => {
    theme: Theme;
};
//# sourceMappingURL=ThemeContext.d.ts.map