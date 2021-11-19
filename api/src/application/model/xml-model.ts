type ImagenRecord = {
  Fields: {
    Title: string
    Summary: string
  }
  MediaObject: {
    MediaElement: {
      OriginalFile: string
    }
  }
}
export interface XMLModel {
  Records: {
    ImagenRecord: ImagenRecord
  }
}
