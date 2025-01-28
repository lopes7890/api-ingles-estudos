FROM node:20.15.0

# Instala o Chromium e dependências necessárias
RUN apt-get update && apt-get install -y --no-install-recommends \
    chromium \
    fonts-ipafont-gothic \
    fonts-wqy-zenhei \
    fonts-thai-tlwg \
    fonts-kacst \
    fonts-freefont-ttf \
    libxss1 && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Define o diretório de trabalho
WORKDIR /app

# Copia apenas os arquivos de dependências (para aproveitar o cache)
COPY package.json package-lock.json ./

# Instala dependências do Node.js
RUN npm install

# Copia o restante do código (invalida o cache apenas quando o código mudar)
COPY . .

# Expõe a porta
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]
