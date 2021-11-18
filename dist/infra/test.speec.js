"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const xml2json_1 = __importDefault(require("xml2json"));
const jsontoxml_1 = __importDefault(require("jsontoxml"));
describe('Test', () => {
    test('any', async () => {
        const promise = new Promise((resolve, reject) => {
            fs_1.default.readFile('src/public/xml/structureFile.xml', (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(JSON.parse(xml2json_1.default.toJson(data, { reversible: true })));
                }
            });
        });
        const response = await promise;
        const xml = (0, jsontoxml_1.default)(response);
        console.log(xml);
        // await expect(response).rejects.toThrow()
    });
});
//# sourceMappingURL=test.speec.js.map