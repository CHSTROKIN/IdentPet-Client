/// <reference types="react" />
/**
 * Returns mount status of component. This hook can be used for purpose of avoiding any
 * setState calls (within async operation) after component gets unmounted.
 *
 * @example
 * ```
 * const isMounted = useIsMountedRef();
 * const [dummyValue, setDummyValue] = useState(false);
 *
 * useEffect(() => {
 *  someAsyncOperation().then(() => {
 *    if (isMounted.current) setDummyValue(true);
 *  })
 * })
 * ```
 *
 * @returns isMounted {Object} Mount status ref for the component.
 */
export declare const useIsMountedRef: () => import("react").MutableRefObject<boolean>;
//# sourceMappingURL=useIsMountedRef.d.ts.map