export const verifyWords = async (word, responseUser, res) => {
    try{
        
        let result = ""

        if (responseUser.toLowerCase().trim() !== word.toLowerCase()) {
            result = {message: "resposta errada!", correct: word}
        } else {
            result = {message: "resposta certa!", correct: word}
        }

        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: "erro ao analisar resposta", error})
    }
}