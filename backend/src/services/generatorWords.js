import { generate } from "random-words";
import { translateWords} from "../utils/translateWords.js";
//import { translateWords} from "lib-translate";
import { addWordFromDb } from "./addWordDb.js";

export const generateWordPortuguese = async () => {
    try{
      // gerar palavra em inglês
        const word = generate()
        console.log(word)

      // gerar a tradução da palavra para português
        const translate = await translateWords(word)

        if (translate == "Erro ao traduzir o texto.") {
            console.log("erro na tradução")
            generateWordPortuguese()
        }
        
        addWordFromDb({Word: word, Translate: translate })

    } catch (error) {
        return {message: "erro ao gerar palavra", error}
    }

}

