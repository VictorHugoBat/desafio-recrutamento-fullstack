# Estágio 1: Build com Node 20
FROM node:20-alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --configuration=production

# Estágio 2: Servir com Nginx
FROM nginx:alpine
# Nota: No Angular 17/18 o caminho padrão é dist/NOME_DO_PROJETO/browser
COPY --from=build /app/dist/recrutamento-web/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]