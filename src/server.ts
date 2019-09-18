import { createServer } from 'http';
import { extname } from './lib/extname';
import { mimetypeFromExtname } from './lib/mimetype-from-extname';

/**
 * @todo respond to errors with an image if the accept header accepts images/anything
 */
const createApp = async () => {

    // TODO: Init Storage Driver

    const server = createServer((request, response) => {

        switch (request.method) {
            case 'HEAD':
            case 'GET':
                break;
            default:
                response.statusCode = 405;
                response.end('Method Not Allowed');
                return;
        }

        if (!request.url || request.url === '/') {
            response.statusCode = 403;
            response.end();
            return;
        }

        const ext = extname(request.url);

        if (!ext) {
            response.statusCode = 400;
            response.end(`Missing extname`);
            return;
        }

        const mime = mimetypeFromExtname(ext);

        if (mime) {
            response.setHeader('Content-Type', mime);
        }

        // If this is a HEAD request then we will only have to check if the optimized
        // version exists

        // Check if optimized exists

        // Given when optimized exists
        // AND this is a HEAD request
        // THEN return headers and stop here

        // AND this is a GET request
        // THEN return the optimized file

        // If the optimized version does not exist, then we'll return the optimizer
        // pipeline.


        // console.log(`method = ${request.method}`);
        // console.log(`path = ${request.url}`);
        // console.log(`ext = ${ext}`);
        // console.log(`mime = ${mime}`);

        response.end('Hello World!');

    })

    return {
        server
    }
};

export { createApp };
