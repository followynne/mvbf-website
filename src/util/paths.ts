import { basename } from '../routing';

const prefix = basename ? `/${basename}/` : '/';
export const getAssetPath = (aPath: string) => `${prefix}${aPath}`;
