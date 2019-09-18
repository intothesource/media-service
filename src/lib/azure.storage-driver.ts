import { IStorageDriver } from "../meta/storage-driver";
import { NotImplementedError } from "./not-implemented.error";

export class AzureStorageDriver
    implements IStorageDriver {

    constructor() {
        // Do something to setup azure client here
    }

    public async init() {
        throw new NotImplementedError();
    }

    public fileExists() {
        throw new NotImplementedError();
    }

    public upload() {
        throw new NotImplementedError();
    }

    public download() {
        throw new NotImplementedError();
    }

    public createReadStream() {
        throw new NotImplementedError();
    }

    public createWriteStream() {
        throw new NotImplementedError();
    }

}
