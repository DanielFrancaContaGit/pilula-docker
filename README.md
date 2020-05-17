Language: [English](README.md) | [Português](translation/pt-BR/README.md) 

## Wat you ned to run the project:

You nead to have [docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/) and [heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) to run and deploy the project:

 - [doker install gide](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
 - [Heroku CLI install gide](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

## After making the installations use these commands to run the project:

### `sudo docker build -t pilula/docker:1.0 .`

Create a dockerr image locally

### `sudo docker run -p 3000:3000 -d pilula/docker:1.0`

Create a docker container from the image previously created

### `sudo docker ps`

shows the containers that are running

## Container deployment on heroku

### `heroku login`

log in to your heroku account

### `sudo docker ps`

It is important to use this command again to make sure that there is a container running

### `sudo heroku container:login`

Will prepare the container to be deployed on heroku

### `heroku create` or `heroku create -a <app name>`

create a new app on heroku it is important to pay attention to the name of the app that heroko will create because we will need for the next step.

with the -a tag you specify which app name you want without it heroku creates a random name 

![Alt text](src/captura.png?raw=true "Optional Title")

In the Image case the app name is blooming-hollows-42380


### `sudo heroku container:push web -a <app name>`

this command pushes the container that is on your machine to the heroku app

### `sudo heroku container:release web -a <app name>`

this command releases the container for the heroku app

### `heroku open`

will direct to the site already deployed


