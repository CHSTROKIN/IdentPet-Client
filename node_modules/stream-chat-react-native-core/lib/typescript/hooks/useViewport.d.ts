/**
 * A custom hook that provides functions to calculate dimensions based on
 * a percentage of the viewport height (vh) and viewport width (vw). It
 * dynamically updates dimensions on changes in device orientation.
 *
 * @returns {Object} An object containing functions vh and vw.
 */
export declare const useViewport: (rounded?: boolean) => {
    vh: (percentageHeight: number) => number;
    vw: (percentageWidth: number) => number;
};
//# sourceMappingURL=useViewport.d.ts.map