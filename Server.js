const express = require ("express")
const cors = require ("cors")
const bodyParser = require("body-parser")

require("dotenv").config();

const{OpenAI}=require("openai")

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.post("/chat", async(req,res) =>{
    const {prompt} = req.body

    const chatCompletion = await openai.chat.completions.create({
        model: "text-davinci-003",
        max_tokens: 512,
        temperature: 0,
        prompt: prompt
    });
    res.send(chatCompletion.choices[0].text);
})

const PORT = 8020;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})
