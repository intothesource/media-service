export interface IStorageDriver {
    init: () => Promise<void>;
    fileExists: () => any;
    upload: () => any;
    download: () => any;
    createReadStream: () => any;
    createWriteStream: () => any;
}
