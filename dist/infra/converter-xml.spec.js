"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const converter_xml_1 = require("./converter-xml");
const file = {
    title: 'DBZ',
    summary: 'Dragon Ball Z',
    address: 'https://cleriston-images.s3.amazonaws.com/dbz.jpeg'
};
const fileChanged = {
    Records: {
        ImagenRecord: {
            Fields: {
                Title: 'any_title',
                Summary: 'any_summary'
            },
            MediaObject: {
                MediaElement: {
                    OriginalFile: 'http://any_address'
                }
            }
        }
    }
};
describe('ConverterXML', () => {
    test('Ensure getJson is ok', async () => {
        const sut = new converter_xml_1.ConverterXML();
        const json = await sut.getJson();
        expect(json).toBeTruthy();
    });
    test('Ensure toXml is ok', () => {
        const sut = new converter_xml_1.ConverterXML();
        const xml = sut.toXml(fileChanged);
        expect(xml).toBeTruthy();
    });
});
//# sourceMappingURL=converter-xml.spec.js.map