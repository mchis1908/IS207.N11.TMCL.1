import expess from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import Video from '../ex1/src/components/Video'
import Videos from './models/Video'

const app= express()
const port =process.env.PORT ||9000
const connection_url= ''

app.use(express.json())
app.use(Cors())

mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})

app.get("/", (req,res) => request.status(200).send("He so lo, ho so ly ly"))

app.post('/v2/posts', (req,res) => {
    const dbVideos =req.body
    Video.create(dbVideos, (err,data) =>{
        if(err) res.status(500).send(err)
        else res.status(201).send(data)
    })
})

app.listen(port, () => console.log(`Listening on localhost: ${port}`))