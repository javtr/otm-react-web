#!/bin/bash

# ejecutar run build
cd /home/javier/Desarrollo/otm-react-web
npm run build
echo "========== Build ==========="

# limpiar la carpeta build
cd /home/javier/Desarrollo/otm-web-prod
find . -mindepth 1 -name '.git' -prune -o ! -name '.*' -exec rm -rf {} +

echo "========== Clean ==========="

# copiar archivos
cp -r /home/javier/Desarrollo/otm-react-web/build/* /home/javier/Desarrollo/otm-web-prod
cp -r /home/javier/Desarrollo/otm-react-web/SEO/* /home/javier/Desarrollo/otm-web-prod

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
cd /home/javier/Desarrollo/otm-web-prod
git add .
git commit -m "Build"
git push origin main
echo "========== Push ==========="
