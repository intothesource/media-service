// export function mimetypeFromExtname(extname: '.jpg' | '.jpeg'): 'image/jpeg';
// export function mimetypeFromExtname(extname: '.png'): 'image/png';
// export function mimetypeFromExtname(extname: '.webp'): 'image/webp';
// export function mimetypeFromExtname(extname: '.svg'): 'image/svg+xml';
// export function mimetypeFromExtname(extname: string): 'image/jpeg' | 'image/webp' | 'image/png' | 'image/svg+xml';

export function mimetypeFromExtname(extname: string) {

    switch (extname) {

        case '.jpg':
        case '.jpeg':
            return 'image/jpeg';

        case '.png':
            return 'image/png';

        case '.webp':
            return 'image/webp';

        case '.svg':
            return 'image/svg+xml';
    }

}
