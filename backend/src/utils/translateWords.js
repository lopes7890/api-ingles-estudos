import puppeteer from "puppeteer";
/* import dotenv from "dotenv";
dotenv.config() */
let browser; // Reutilizar a instância do browser
  
export const translateWords = async (texto) => {
    //console.log(process.env.PUPPETEER_EXECUTABLE_PATH)
    try {
        if (!browser) {
            browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
            executablePath: '/usr/bin/chromium-browser',
            });
        }
      const page = await browser.newPage();
  
      // Bloqueia imagens e scripts
      await page.setRequestInterception(true);
      page.on('request', (req) => {
        if (["image", "stylesheet", "font"].includes(req.resourceType())) {
          req.abort();
        } else {
          req.continue();
        }
      });
  
      await page.goto("https://translate.google.com.br/?sl=en&tl=pt&op=translate");
  
      // Digita o texto e pega a tradução
      await page.type("#yDmH0d > c-wiz > div > div.ToWKne > c-wiz > div.OlSOob > c-wiz > div.ccvoYb > div.AxqVh > div.OPPzxe > div > c-wiz > span > span > div > textarea", texto);
      await page.waitForSelector("#yDmH0d > c-wiz > div > div.ToWKne > c-wiz > div.OlSOob > c-wiz > div.ccvoYb > div.AxqVh > div.OPPzxe > c-wiz > div.QcsUad.BDJ8fb.sMVRZe.hCXDsb.wneUed > div.usGWQd > div > div.lRu31 > span.HwtZe > span > span"); // Seletor da tradução
      const translation = await page.$eval("#yDmH0d > c-wiz > div > div.ToWKne > c-wiz > div.OlSOob > c-wiz > div.ccvoYb > div.AxqVh > div.OPPzxe > c-wiz > div.QcsUad.BDJ8fb.sMVRZe.hCXDsb.wneUed > div.usGWQd > div > div.lRu31 > span.HwtZe > span > span", (el) => el.textContent);
  
      console.log(`Texto original: ${texto}`);
      console.log(`Texto traduzido: ${translation}`);
  
      await page.close(); 
  
      return translation;
    } catch (error) {
      console.error("Erro ao traduzir:", error);
      return "Erro ao traduzir o texto.";
    }
};
process.on('exit', async () => {
    if (browser) await browser.close();
});
  