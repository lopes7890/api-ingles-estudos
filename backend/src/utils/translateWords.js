import { db } from "../database/db.js";


export const translateWords = async (text) => {
    try {

      const [verify] = await db.query("SELECT * FROM palavras WHERE ingles = ?", 
        [text])

      const wordAndTranslate = verify[0]

      //console.log(wordAndTranslate.portugues)

      if (verify.length > 0) {
          return wordAndTranslate.portugues
      }

      return "Erro ao buscar tradução"

    } catch (error) {
      console.error("Erro ao traduzir:", error);
      return "Erro ao traduzir o texto.";
    }
};

  