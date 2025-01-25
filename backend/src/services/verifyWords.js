export const verifyWords = async (word, responseUser, res) => {
    try{
        
        let result = ""

        if (responseUser !== word) {
            result = {message: "resposta errada!"}
        } else {
            result = {message: "resposta certa!"}
        }

        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: "erro ao analisar resposta", error})
    }
}