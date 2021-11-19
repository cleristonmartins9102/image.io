import { FileModel } from '../../domain/file-model'

export interface Controller {
  handle (file?: FileModel): Promise<any>
}
