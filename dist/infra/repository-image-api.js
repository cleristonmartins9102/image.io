"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryImageApi = void 0;
const axios_1 = __importDefault(require("axios"));
class RepositoryImageApi {
    constructor() {
        this.config = {
            headers: {
                'X-Imagen-API-Key': 'AKKG0uTc3YbFr2AEAVp9',
                Authorization: 'Bearer mWMZQx3nipzip3jclQUfIMXhVC7wUQgnPViiJ9Sg',
                'Content-Type': 'application/xml'
            }
        };
    }
    async send(file) {
        return await axios_1.default.put('https://hiringtestmcc.imagencloud.com:83/imcc/v1/import/record/file', file, this.config);
    }
    async pull() {
        return await axios_1.default.get('https://developers.imagen.io/mcc/import/mappings_GET/', this.config);
    }
}
exports.RepositoryImageApi = RepositoryImageApi;
//# sourceMappingURL=repository-image-api.js.map