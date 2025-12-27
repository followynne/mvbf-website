import { basename } from '../routing';

export const getAssetPath = (aPath: string) => `${basename}/${aPath}`;
