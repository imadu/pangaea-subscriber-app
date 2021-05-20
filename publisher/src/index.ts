import mongoose from 'mongoose'
import  {app} from './app'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 9000
const mongoURL: string = process.env.MONGO_URL || ''

mongoose.connect(mongoURL, {useCreateIndex: true})

export const server = app.listen(port, ()=> console.log(`publisher app running on port ${port}`))