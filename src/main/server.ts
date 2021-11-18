import express, { Request, Response, json } from 'express'
import { CreateFileXml } from '../application/create-file-xml'
import { AddFileController } from '../controller/add-file-controller'
import { ConverterXML } from '../infra/converter-xml'
import { RepositoryImageApi } from '../infra/repository-image-api'

const app = express()
app.use(json())

app.post('/token', (req: Request, res: Response) => {
  console.log('token')
  res.send(null)
})

app.post('/put', async (req: Request, res: Response, next: any) => {
  try {
    console.log('Route Loaded')
    const body = req.body
    const converter = new ConverterXML()
    const create = new CreateFileXml()
    const repo = new RepositoryImageApi()
    const controller = new AddFileController(converter, create, repo)
    const response = await controller.handle(body)
    return res.send(response)
  } catch (err) {
    console.log(err)
  }
})
const port = 5050
app.listen(port, () => console.log(`API is running on http://127.0.0.1:${port}`))
