# Heroku SE Toolkit

This application is designed for inclusion into the SDO and is basically a shell for delivering content to the SE community. 
Not something I imagine is too useful for external to Salesforce users..

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

If you want to deploy this as a Docker container, steps described [here](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/) [here](https://devcenter.heroku.com/articles/container-registry-and-runtime) will explain what was changed for this app to work in Heroku. 

When running locally using Docker 

```
$ docker build -t <your username>/heroku-se-toolkit
```
Your image will now be listed in Docker

```
$ docker images
```

You can run the image

```
$ docker run -p 8080:3000 -d <your username>/heroku-se-toolkit
```

Monitor logs to see it working
```
$ docker ps
CONTAINER ID        IMAGE                    COMMAND             CREATED             STATUS              PORTS                              NAMES
71725a98fe34        troy/heroku-se-toolkit   "npm start"         3 seconds ago       Up 1 second         8080/tcp, 0.0.0.0:8080->3000/tcp   affectionate_aryabhata

$ docker logs -f affectionate_aryabhata
npm info it worked if it ends with ok
npm info using npm@3.10.10
npm info using node@v6.11.0
npm info lifecycle sdoHerokuApp@0.0.1~prestart: sdoHerokuApp@0.0.1
npm info lifecycle sdoHerokuApp@0.0.1~start: sdoHerokuApp@0.0.1

> sdoHerokuApp@0.0.1 start /usr/src/app
> node ./bin/www

Starting server on port 3000
```
