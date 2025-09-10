import express from 'express'
import 'dotenv/config'
import { Request, Response } from 'express'
import { MongoClient } from 'mongodb'

const client = new MongoClient(process.env.MONGO_URI!)
await client.connect()
const db = client.db(process.env.MONGO_DB!)

const app = express()
app.use(express.json()) 
//Esse middleware habilita o express para receber json no body

//Criando rota para acesso pelo navegador
app.get("/produtos", async (req:Request, res:Response) => {
    const produtos = await db.collection("produtos").find().toArray()
    res.json(produtos)
})


app.listen(8000, () => {
    console.log("Server is running on port: 8000")
})