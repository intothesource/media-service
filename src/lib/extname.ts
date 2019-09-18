import { extname as $extname } from 'path';

export function extname(input: string) {
    const extname = $extname(input);
    return extname;
}
