# Stage 0, "build-stage", based on Node.js, to build and compile Angular

FROM node:14.12.0-alpine as build-stage

WORKDIR app

# copy package.json and package-lock.json into workdir /app
COPY package*.json ./

RUN npm install

USER root

RUN npm install -g @angular/cli@11.2.10 @angular-devkit/build-angular@0.1102.10

# copy all files from workspace into workdir /app
COPY . .

ARG configuration

# run the build inside workdir /app with output path /app/dist
#RUN npm run build -- --outputPath=./dist --configuration=${configuration}
RUN npm run build:ssr

# Stage 2, based on NodeJS, to have only the compiled app, ready for production with SSR

FROM node:14.12.0-alpine as serve-stage

WORKDIR app

# copy dependency definitions
COPY --from=build-stage /app/package.json ./

# copy (build-stage)/app/dist in /app
COPY --from=build-stage /app/dist ./dist

# Expose the port the app runs in
EXPOSE 4000

# Serve the app
CMD npm run serve:ssr

## Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
#
#FROM nginx:1.19.2-alpine
#
#WORKDIR app
#
## copy (build-stage)/app/dist in /app
#COPY --from=build-stage /app/dist/ ./
#
## overwrite default.confjson with nginx-custom.conf
#COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
