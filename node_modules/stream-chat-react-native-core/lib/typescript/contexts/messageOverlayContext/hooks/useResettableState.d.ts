/// <reference types="react" />
/**
 * Wrapper around useState that provides a `reset`
 * function to reset the state to its initial value.
 *
 * Will not set state after being unmounted.
 * */
export declare const useResettableState: <T>(values: T) => {
    data: T;
    reset: () => void;
    setData: import("react").Dispatch<import("react").SetStateAction<T>>;
};
//# sourceMappingURL=useResettableState.d.ts.map