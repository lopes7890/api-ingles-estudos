import { generate } from "random-words";
import { translateWords} from "../utils/translateWords.js";

export const generateWordPortuguese = async () => {
    try{
        // gerar palavra em inglês
        const word = generate()
        console.log(word)

        // gerar a tradução
        const translate = await translateWords(word)

        if (translate == "Erro ao buscar tradução"){
            return {message: "Erro ao buscar tradução"}
        }

        return {Word: word, Translate: translate}

    } catch (error) {
        return {message: "erro ao gerar palavra", error}
    }

}

