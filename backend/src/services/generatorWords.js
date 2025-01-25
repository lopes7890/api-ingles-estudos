//import { db } from "../db";
import { generate } from "random-words";
import { translateWordsPortuguese } from "../utils/translateWords.js";

export const generateWordPortuguese = async () => {
    try{

      // gerar palavra em inglês
        const word = generate()
        console.log(word)

      // gerar a tradução da palavra para português
        const translate = await translateWordsPortuguese(word)

        if (translate == "erro ao traduzir") {
            return {message: "erro na tradução"}
        }

        return {Word: word, Translate: translate }     
    } catch (error) {
        return {message: "erro ao gerar palavra", error}
    }

}

