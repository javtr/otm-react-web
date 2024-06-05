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

HTACCESS_PATH="$HOME/Desarrollo/otm-web-prod/.htaccess"

HTACCESS_CONTENT='RewriteEngine On  
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
RewriteRule ^ - [L]
RewriteRule ^ /index.html [L]
  
Redirect 301 /order https://www.otmtrading.com'

echo "$HTACCESS_CONTENT" > "$HTACCESS_PATH"

# Confirmar que el archivo ha sido creado
echo "Archivo .htaccess creado en $HTACCESS_PATH"




echo "========== Copy ==========="

# pushear archivos
cd ~/Desarrollo/OTM_Web_Build_Production
git add .
git commit -m "Build"
git push origin master
echo "========== Push ==========="
