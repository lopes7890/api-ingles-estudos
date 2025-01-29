import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { generateWordPortuguese } from "./services/generatorWords.js";
import { verifyWords } from "./services/verifyWords.js";

dotenv.config();

const port = process.env.PORT || 3000
const app = express();
app.use(cors({
    origin: "https://frontend-ingles-estudos.vercel.app/",
    methods: ['GET', 'POST']
}));
app.use(express.json());


// Rota para gerar a palavra e sua tradução
app.get('/generate', async function(req, res){
    try{
        const result = await generateWordPortuguese()
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message: "erro ao gerar palavra", error})
    }
})


// Rota para verificar a resposta do usuário
app.post('/verify', async function(req, res){
    const { word, responseUser } = req.body
    
    if(!word || !responseUser){
        return res.status(400).json({message: "todos os campos devem estar preenchidos!"})
    }

    try{
        verifyWords(word, responseUser, res)
    } catch (error){
        res.status(500).json({message: "erro ao enviar resposta", error})
    }
})

app.listen(port, () => {
    console.log('Servidor rodando em: ', port);
});
