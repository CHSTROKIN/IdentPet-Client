export declare const resampleWaveformData: (waveformData: number[], amplitudesCount: number) => number[];
/**
 * The downSample function uses the Largest-Triangle-Three-Buckets (LTTB) algorithm.
 * See the thesis Downsampling Time Series for Visual Representation by Sveinn Steinarsson for more (https://skemman.is/bitstream/1946/15343/3/SS_MSthesis.pdf)
 * @param data
 * @param targetOutputSize
 */
export declare function downSample(data: number[], targetOutputSize: number): number[];
export declare const divMod: (num: number, divisor: number) => number[];
export declare const upSample: (values: number[], targetSize: number) => number[];
//# sourceMappingURL=audioSampling.d.ts.map