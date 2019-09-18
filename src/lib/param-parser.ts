import { extname as getExtname, basename } from 'path';
import sharp from 'sharp';

import { clamp } from './clamp';
import { mimetypeFromExtname } from './mimetype-from-extname';

interface Params {
    quality?: number;
    resize?: sharp.ResizeOptions;
    extract?: sharp.Region;
    scale?: number;
}

export class ParamParser {

    id!: string;
    extname!: string;
    paramsRaw!: string;
    params!: Params;

    static parse(hash: string) {
        return new this(hash);
    }

    constructor(private hash: string) {

        // given the following:
        // [248c99...1804a24329]_[Q50XT100XL100XW100XH100W500H500][.png]
        //         id                          params               ext

        // Get the extension from the filename
        const extname = getExtname(hash).split('.').pop();

        // The the rest params and chop off the extension so we get the params
        const hashWithoutExtname = basename(hash, extname ? `.${extname}` : undefined);

        // Split the id and the rest of the parameters
        const [id, ...rest] = hashWithoutExtname.split('_');

        // Bring all the parameter together, in case there's any _ in there
        const paramsRaw = rest.join('');

        // Save parsed info to class instance
        this.id = id;
        this.extname = extname;
        this.paramsRaw = paramsRaw;

        // Split each parameter on [AA,00,AA,00] and make [AA,00],[AA,00] pairs
        // Then map / reduce it down to a single object with parameters
        const params = paramsRaw.split(/([A-Z]+[0-9]+)/).filter(p => p !== '')
            .map(p => p.split(/([A-Z]+)/).filter(x => x !== ''))
            .reduce((acc, [key, $val]) => {
                const { resize } = acc;
                const { extract } = acc;
                const val = Number($val);

                switch (key) {
                    case 'Q': return { ...acc, quality: val };
                    case 'X': return { ...acc, scale: val };
                    case 'W': return { ...acc, resize: { ...resize, width: val } };
                    case 'H': return { ...acc, resize: { ...resize, height: val } };
                    case 'XT': return { ...acc, extract: { ...extract, top: val } };
                    case 'XL': return { ...acc, extract: { ...extract, left: val } };
                    case 'XW': return { ...acc, extract: { ...extract, width: val } };
                    case 'XH': return { ...acc, extract: { ...extract, height: val } };
                    default: return { ...acc, [key]: val };
                }
            }, {} as Params);

        this.params = params;

    }

    /**
     * Normalized quality property
     */
    get quality() {
        const { quality = 80 } = this.params;
        return clamp(quality, 1, 100);
    }

    get mimetype() {
        const { extname } = this;
        return mimetypeFromExtname(extname as any);
    }

    get scale() {
        const { scale = 1 } = this.params;
        return clamp(scale, 1, 4);
    }

    get resize() {
        const { scale } = this;
        const { resize = {} } = this.params;
        const { width, height } = resize;

        const computedWidth = width ? width * scale : undefined;
        const computedHeight = height ? height * scale : undefined;

        const resizeParams = {
            ...this.params.resize,
            width: computedWidth,
            height: computedHeight,
        };

        return resizeParams;
    }

}
