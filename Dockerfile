FROM node:16-alpine as build

WORKDIR /app

RUN apk add -U tzdata
RUN apk add --no-cache icu-libs
RUN apk add --no-cache icu-data-full
ENV TZ=America/Sao_Paulo
RUN cp /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime

RUN rm -rf node_modules
RUN rm -rf build
COPY . /app

RUN npm install 
RUN npm run build

FROM nginx:1.23.0-alpine

COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
