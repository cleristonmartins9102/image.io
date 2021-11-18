"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConverterXML = void 0;
const fs_1 = __importDefault(require("fs"));
const xml2json_1 = __importDefault(require("xml2json"));
const jsontoxml_1 = __importDefault(require("jsontoxml"));
class ConverterXML {
    async getJson() {
        return new Promise((resolve, reject) => {
            fs_1.default.readFile('src/public/xml/structureFile.xml', (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(JSON.parse(xml2json_1.default.toJson(data, { reversible: true })));
                }
            });
        });
    }
    toXml(file) {
        return (0, jsontoxml_1.default)({
            Records: [
                {
                    name: 'Fields', children: { Title: file.Records.ImagenRecord.Fields.Title, Summary: file.Records.ImagenRecord.Fields.Summary }
                },
                {
                    name: 'MediaObject',
                    attrs: { Version: 3, ID: -1, MediaType: 'image' },
                    children: [
                        {
                            name: 'MediaElement',
                            attrs: { MediaType: 'image' },
                            children: {
                                OriginalFile: file.Records.ImagenRecord.MediaObject.MediaElement.OriginalFile
                            }
                        }
                    ]
                }
            ]
        });
    }
}
exports.ConverterXML = ConverterXML;
//# sourceMappingURL=converter-xml.js.map