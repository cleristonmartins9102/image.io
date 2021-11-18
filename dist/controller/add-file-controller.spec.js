"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repository_image_api_1 = require("../infra/repository-image-api");
const add_file_controller_1 = require("./add-file-controller");
class ConverterXML {
    getJson() { }
    toXml(file) { }
}
class CreateFileXml {
    async create(xmlStructure, file) {
        return xmlStructure;
    }
}
// class RepositoryImageAPI implements RepositoryAPI {
//   send (file: any): any {}
// }
const file = {
    title: 'DBZ',
    summary: 'Dragon Ball Z',
    address: 'https://cleriston-images.s3.amazonaws.com/dbz.jpeg'
};
describe('Controller', () => {
    test('Ensure calls Converter getJson', async () => {
        const converter = new ConverterXML();
        const createFile = new CreateFileXml();
        const repository = new repository_image_api_1.RepositoryImageApi();
        const sut = new add_file_controller_1.AddFileController(converter, createFile, repository);
        const getJsonSpy = jest.spyOn(converter, 'getJson');
        await sut.handle(file);
        expect(getJsonSpy).toBeCalled();
    });
    test('Ensure calls CreateFile', async () => {
        const converter = new ConverterXML();
        const createFile = new CreateFileXml();
        const repository = new repository_image_api_1.RepositoryImageApi();
        const sut = new add_file_controller_1.AddFileController(converter, createFile, repository);
        const createFileSpy = jest.spyOn(createFile, 'create');
        await sut.handle(file);
        expect(createFileSpy).toBeCalled();
    });
    test('Ensure calls Converter toXML', async () => {
        const converter = new ConverterXML();
        const createFile = new CreateFileXml();
        const repository = new repository_image_api_1.RepositoryImageApi();
        const sut = new add_file_controller_1.AddFileController(converter, createFile, repository);
        const toXmlSpy = jest.spyOn(converter, 'toXml');
        await sut.handle(file);
        expect(toXmlSpy).toBeCalled();
    });
    test('Ensure calls Repository', async () => {
        const converter = new ConverterXML();
        const createFile = new CreateFileXml();
        const repository = new repository_image_api_1.RepositoryImageApi();
        const sut = new add_file_controller_1.AddFileController(converter, createFile, repository);
        jest.spyOn(converter, 'toXml').mockReturnValueOnce('any_xml');
        const repositorySpy = jest.spyOn(repository, 'send');
        await sut.handle(file);
        expect(repositorySpy).toBeCalled();
    });
});
//# sourceMappingURL=add-file-controller.spec.js.map