# My (OLD) personal website <3

> If you want to browse the repo of the NEW website go [here](https://github.com/danielzotti/new.danielzotti.it).

## NB: In order to visit the old website on [old.danielzotti.it](http://old.danielzotti.it) use the following credentials:
- username: **guest** 
- password: **guest**

___

Inspired by [this article](https://dev.to/victoria/be-brave-and-build-in-public-5afg) written by Victoria Drake, I decided to share my personal website's code.

![Website preview](https://raw.githubusercontent.com/danielzotti/me.danielzotti.it/master/daniel-zotti-website-preview.png)

## DISCLAIMER

The website itself (the Angular code) is really stupid, and I haven't spent too much time on that. I develop Angular code better than that, I swear! :D

I also use this website for testing and trying new technologies (which can be found in the next chapter).

***Please don't try to hack my website <3***

## The technologies I've used:

- Angular 11
- SSR
- PWA + offline status detection
- Docker
- GitHub Actions
- GitLab CI

# TL;DR

- Local development (**without docker**) with "classic" Angular CLI
  - `npm run start` aka `ng serve`
- Local development: one every change to code, it refreshes
  - `npm run docker:start:local`

## Configuration files

### nginx

Always return the index.html file (for SPA): `nginx-custom.conf`

```
server {
  listen 80;
  location / {
    root /usr/share/nginx/html;
    index index.html index.htm;
    try_files $uri $uri/ /index.html =404;
  }
}
```

### Docker

#### `.dockerignore`

```
.env
.git
.gitignore
.github
dist
node_modules
```

#### `Dockerfile.local` (local development use)

```
FROM node:14.12.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli
COPY . .
EXPOSE 4201
CMD ng serve --host 0.0.0.0 --port 4201
# NB: --disableHostCheck option doesn't work!
```

#### `Dockerfile` (deploy on server)

```
# Stage 0, "build-stage", based on Node.js, to build and compile Angular
FROM node:14.12.0-alpine as build-stage
WORKDIR app
COPY package*.json /app/
RUN npm install
RUN npm install -g @angular/cli @angular-devkit/build-angular
COPY . .
ARG configuration=production
RUN npm run build -- --outputPath=/app/dist --configuration=${configuration}

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.19.2-alpine
COPY --from=build-stage /app/dist/ /usr/share/nginx/html/
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
```

#### `docker-compose.local.yml`

```
version: '3'

services:
  angular:
    build:
      context: .
      dockerfile: Dockerfile.local
    container_name: danielzottit_local
    image: dz/danielzotti_local
    ports:
      - "4201:4201"
    restart: unless-stopped
    volumes:
      - .:/app
      - /app/node_modules
```

#### `docker-compose.deploy.yml`

```
version: '3'

services:
  angular:
    build:
      context: .
      dockerfile: Dockerfile
      args:
        - configuration=${CONFIGURATION}
    container_name: danielzotti
    image: dz/danielzotti
    ports:
      - "${PORT}:80"
    restart: unless-stopped
```

## Docker `permission denied` error

For Linux console:

```
sudo groupadd docker
sudo usermod -aG docker ${USER}
newgrp docker
su - ${USER}
```

# Easter Egg

There is an Easter egg that you can discover simply reading the code or browsing the website at a certain time (08:
30-09:00, 11:00-11:20, 16:00-16:20).

# Thanks to

- [Angular in Docker with Nginx, supporting configurations / environments, built with multi-stage Docker builds and testing with Chrome Headless](https://medium.com/@tiangolo/angular-in-docker-with-nginx-supporting-environments-built-with-multi-stage-docker-builds-bb9f1724e984)
- [Angular — Local Development With Docker-Compose](https://medium.com/bb-tutorials-and-thoughts/angular-local-development-with-docker-compose-13719b998e424)
- [Docker ARG, ENV and .env - a Complete Guide](https://vsupalov.com/docker-arg-env-variable-guide)
- [Create a MEAN APP with Angular 7, Nginx and Docker Compose](https://www.linkedin.com/pulse/create-mean-app-angular-7-nginx-docker-compose-radhouen-assakra/)
