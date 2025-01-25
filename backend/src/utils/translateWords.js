import puppeteer from "puppeteer";

export const translateWordsPortuguese = async (texto) => {
    try{

        //await browser.close();  
        console.log("Iniciando o Puppeteer...");
        const browser = await puppeteer.launch({
            headless: true, // Modo sem interface gráfica
            args: ['--no-sandbox', '--disable-setuid-sandbox'], // Necessário em alguns servidores
        });

        console.log("Browser iniciado com sucesso.");

        const page = await browser.newPage()

        await page.goto("https://translate.google.com.br/?sl=en&tl=pt&op=translate")
        
        console.log("Nova página criada.");

  // Aguarde o seletor
        await page.waitForSelector('#yDmH0d > c-wiz > div > div.ToWKne > c-wiz > div.OlSOob > c-wiz > div.ccvoYb > div.AxqVh > div.OPPzxe > div > c-wiz > span > span > div > textarea'); 

  // Insira o texto a ser traduzido

        await page.type('#yDmH0d > c-wiz > div > div.ToWKne > c-wiz > div.OlSOob > c-wiz > div.ccvoYb > div.AxqVh > div.OPPzxe > div > c-wiz > span > span > div > textarea', texto);

  // Aguarde a tradução acontecer

        await page.waitForSelector('#yDmH0d > c-wiz > div > div.ToWKne > c-wiz > div.OlSOob > c-wiz > div.ccvoYb > div.AxqVh > div.OPPzxe > c-wiz > div.QcsUad.BDJ8fb.sMVRZe.hCXDsb.wneUed > div.usGWQd > div > div.lRu31 > span.HwtZe > span > span');

  // Pega o texto traduzido
        const tradution = await page.evaluate(() => {
            return document.querySelector('#yDmH0d > c-wiz > div > div.ToWKne > c-wiz > div.OlSOob > c-wiz > div.ccvoYb > div.AxqVh > div.OPPzxe > c-wiz > div.QcsUad.BDJ8fb.sMVRZe.hCXDsb.wneUed > div.usGWQd > div > div.lRu31 > span.HwtZe > span > span').textContent;
        });


        console.log(`Texto original: ${texto}`);
        console.log(`Texto traduzido: ${tradution}`);

        await browser.close();  

        return tradution

    } catch (error) {
        return `erro ao traduzir`
    }

}

