import type { FileUploadConfig } from 'stream-chat';
import { Asset, File } from '../../../types/types';
export declare const MAX_FILE_SIZE_TO_UPLOAD: number;
type CheckUploadPermissionsParams = {
    config: FileUploadConfig;
    file: File | Partial<Asset>;
};
/**
 * This utility function checks if the file upload is allowed based on the file upload config.
 * @param Object File upload config and file to check
 * @returns
 */
export declare const isUploadAllowed: ({ config, file }: CheckUploadPermissionsParams) => boolean;
/**
 * This utility function prettifies the file size.
 * @param bytes The bytes of the file
 * @param precision The precision to which the file size should be rounded
 * @returns
 */
export declare function prettifyFileSize(bytes: number, precision?: number): string;
export {};
//# sourceMappingURL=utils.d.ts.map