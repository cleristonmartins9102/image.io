"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFileXml = void 0;
class CreateFileXml {
    async create(xmlStructure, file) {
        xmlStructure.Records.ImagenRecord.Fields.Summary = file.summary;
        xmlStructure.Records.ImagenRecord.Fields.Title = file.title;
        xmlStructure.Records.ImagenRecord.MediaObject.MediaElement.OriginalFile = file.address;
        return xmlStructure;
    }
}
exports.CreateFileXml = CreateFileXml;
//# sourceMappingURL=create-file-xml.js.map