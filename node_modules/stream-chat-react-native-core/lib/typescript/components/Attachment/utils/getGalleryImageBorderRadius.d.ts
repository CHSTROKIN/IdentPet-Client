import type { GallerySizeConfig } from './buildGallery/types';
import type { MessageContextValue } from '../../../contexts/messageContext/MessageContext';
type Params = {
    colIndex: number;
    numOfColumns: number;
    numOfRows: number;
    rowIndex: number;
    sizeConfig: GallerySizeConfig;
    hasThreadReplies?: boolean;
    height?: number;
    invertedDirections?: boolean;
    messageText?: string;
    threadList?: boolean;
    width?: number;
} & Pick<MessageContextValue, 'groupStyles' | 'alignment'>;
export declare function getGalleryImageBorderRadius({ alignment, colIndex, groupStyles, hasThreadReplies, height, invertedDirections, messageText, numOfColumns, numOfRows, rowIndex, sizeConfig, threadList, width, }: Params): {
    borderBottomLeftRadius: number;
    borderBottomRightRadius: number;
    borderTopLeftRadius: number;
    borderTopRightRadius: number;
};
export {};
//# sourceMappingURL=getGalleryImageBorderRadius.d.ts.map