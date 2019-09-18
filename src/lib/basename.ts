import { basename as $basename } from 'path';

export function basename(input: string, ext?: string) {
    const basename = $basename(input, ext);
    return basename;
}
