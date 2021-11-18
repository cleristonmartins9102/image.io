"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const create_file_xml_1 = require("../application/create-file-xml");
const add_file_controller_1 = require("../controller/add-file-controller");
const converter_xml_1 = require("../infra/converter-xml");
const repository_image_api_1 = require("../infra/repository-image-api");
const app = (0, express_1.default)();
app.use((0, express_1.json)());
app.post('/token', (req, res) => {
    console.log('token');
    res.send(null);
});
app.post('/put', async (req, res, next) => {
    try {
        console.log('Route Loaded');
        const body = req.body;
        const converter = new converter_xml_1.ConverterXML();
        const create = new create_file_xml_1.CreateFileXml();
        const repo = new repository_image_api_1.RepositoryImageApi();
        const controller = new add_file_controller_1.AddFileController(converter, create, repo);
        const response = await controller.handle(body);
        return res.send(response);
    }
    catch (err) {
        console.log(err);
    }
});
const port = 5050;
app.listen(port, () => console.log(`API is running on http://127.0.0.1:${port}`));
//# sourceMappingURL=server.js.map