#!/usr/bin/env bash
# Instala as dependências necessárias para o Puppeteer
apt-get update
apt-get install -y wget gnupg
wget -qO- https://deb.nodesource.com/setup_16.x | bash -
apt-get install -y libnss3 libatk-bridge2.0-0 libxcomposite1 libxdamage1 libxrandr2 libasound2 libpangocairo-1.0-0 libcups2 libxshmfence1 libgbm1
