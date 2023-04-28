#!/bin/bash

# ejecutar run build
cd ~/Desarrollo/nueva-otm-web
npm run build
echo "========== Build ==========="

# limpiar la carpeta build
cd ~/Desarrollo/OTM_Web_Build_Production
find . -path './.git' -prune -o -mindepth 1 ! -name '.*' -delete

echo "========== Clean ==========="

# copiar archivos
cp -r ~/Desarrollo/nueva-otm-web/build/* ~/Desarrollo/OTM_Web_Build_Production
cp -r ~/Desarrollo/nueva-otm-web/SEO/* ~/Desarrollo/OTM_Web_Build_Production
echo "========== Copy ==========="

# pushear archivos
cd ~/Desarrollo/OTM_Web_Build_Production
git add .
git commit -m "Build"
git push origin master
echo "========== Push ==========="

read -n 1 -s -r -p "Presione cualquier tecla para salir..."