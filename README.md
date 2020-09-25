# DanielZotti

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.6.

# Docker

## dev (ng serve)

```bash
sudo docker-compose -p danielzotti_dev up -d
```

## local

```bash
sudo VIRTUAL_HOST=www.danielzotti.dev.local docker-compose -f docker-compose__deploy.yml -p danielzotti_local up -d
```

## prod

```bash
sudo VIRTUAL_HOST=www.danielzotti.it docker-compose -f docker-compose__deploy.yml -p danielzotti up -d
```
