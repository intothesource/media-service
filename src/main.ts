import { createApp } from './server'

const HOST: string = process.env.HOST || '0.0.0.0';
const PORT: number = Number(process.env.PORT || 3000);

void (async function main() {

    const app = await createApp()

    app.server.listen(PORT, HOST, () => {
        console.log(`starting server at port http://${HOST}:${PORT}`);
    });

})();
