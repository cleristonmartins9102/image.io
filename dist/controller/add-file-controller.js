"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddFileController = void 0;
class AddFileController {
    constructor(converter, createFile, repository) {
        this.converter = converter;
        this.createFile = createFile;
        this.repository = repository;
    }
    async handle(file) {
        try {
            const jsonStructure = await this.converter.getJson();
            const json = await this.createFile.create(jsonStructure, file);
            const xml = this.converter.toXml(json);
            if (xml) {
                await this.repository.send(xml);
            }
            return null;
        }
        catch (err) {
            return err;
        }
    }
}
exports.AddFileController = AddFileController;
//# sourceMappingURL=add-file-controller.js.map