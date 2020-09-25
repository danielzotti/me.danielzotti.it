# base image
FROM node:10.16.3-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@8.0.6

# add app
COPY . /app

# start app
CMD ng serve --host 0.0.0.0
# CMD npm run build-serve:ssr --host 0.0.0.0