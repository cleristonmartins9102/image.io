"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_file_xml_1 = require("./create-file-xml");
const fakeXmlStructure = () => ({
    Records: {
        ImagenRecord: {
            Fields: {
                Title: '',
                Summary: ''
            },
            MediaObject: {
                MediaElement: {
                    OriginalFile: ''
                }
            }
        }
    }
});
describe('Create File', () => {
    test('Ensure ', async () => {
        const file = {
            title: 'DBZ',
            summary: 'Dragon Ball Z',
            address: 'https://cleriston-images.s3.amazonaws.com/dbz.jpeg'
        };
        const fakeStructure = fakeXmlStructure();
        const compare = fakeXmlStructure();
        compare.Records.ImagenRecord.Fields.Summary = file.summary;
        compare.Records.ImagenRecord.Fields.Title = file.title;
        compare.Records.ImagenRecord.MediaObject.MediaElement.OriginalFile = file.address;
        const sut = new create_file_xml_1.CreateFileXml();
        const xml = await sut.create(fakeStructure, file);
        expect(xml).toEqual(compare);
    });
});
//# sourceMappingURL=create-file-xml.spec.js.map