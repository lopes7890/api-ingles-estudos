import { db } from "../database/db.js";
import { generateWordPortuguese } from "./generatorWords.js";

export const addWordFromDb = async (wordsObj) => {

    try{

        if(!wordsObj.Translate || !wordsObj.Word){
            console.log("todas os campos devem estar preenchidos")
            generateWordPortuguese()
        }

        const [verify] = await db.query("SELECT * FROM palavras WHERE portugues = ? OR ingles = ?", 
            [wordsObj.Translate, wordsObj.Word])
        
        if(verify.length === 1){
            console.log("palavra já existe...")
            generateWordPortuguese()
        }

        await db.query("INSERT INTO palavras (portugues, ingles) VALUES (?, ?)", 
        [wordsObj.Translate, wordsObj.Word]); 

        console.log("palavra inserida com sucesso!")
        generateWordPortuguese()

    } catch (error) {
        console.log("erro de processamento...")
        generateWordPortuguese()
    }
    
}