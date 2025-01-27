//import { db } from "../db";
import { generate } from "random-words";
import { translateWords} from "../utils/translateWords.js";
/* import { configBrowser } from "lib-config-browser";
import { otimizedBrowser } from "lib-otimized-browser" */

export const generateWordPortuguese = async () => {
    try{
      // gerar palavra em inglês
        const word = generate()
        console.log(word)

      // gerar a tradução da palavra para português
/*         const config = await configBrowser()
        console.log(config)
        const otimized = await otimizedBrowser(...config)
        console.log(otimized) */
        const translate = await translateWords(word)

        if (translate == "erro ao traduzir") {
            return {message: "erro na tradução"}
        }

        return {Word: word, Translate: translate }     
    } catch (error) {
        return {message: "erro ao gerar palavra", error}
    }

}

