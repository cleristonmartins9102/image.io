import express, { Request, Response, json } from 'express'
import { CreateFileXml } from '../application/create-file-xml'
import { AddFileController } from '../controller/add-file-controller'
import { PullImageController } from '../controller/pull-image-controller'
import { ConverterXML } from '../infra/converter-xml'
import { RepositoryImageApi } from '../infra/repository-image-api'
import { cors } from './config/setup-cors'

const app = express()
app.use(json())
app.use(cors)

app.post('/api/token', (req: Request, res: Response) => {
  res.send(null)
})

app.post('/api/put', async (req: Request, res: Response, next: any) => {
  try {
    const body = req.body
    const converter = new ConverterXML()
    const create = new CreateFileXml()
    const repo = new RepositoryImageApi()
    const controller = new AddFileController(converter, create, repo)
    const response = await controller.handle(body)
    return res.send(response)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ msg: err.message }).send()
  }
})

app.post('/api/pull', async (req: Request, res: Response) => {
  try {
    const repo = new RepositoryImageApi()
    const controller = new PullImageController(repo)
    const images = await controller.handle()
    res.setHeader('content-type', 'application/xml')
    return res.send(images)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ msg: err.message }).send()
  }
})

const port = 5050
app.listen(port, () => console.log(`API is running on http://127.0.0.1:${port}`))
