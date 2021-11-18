type ImageRecord = {
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
  Records: ImageRecord
}
