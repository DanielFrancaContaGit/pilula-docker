## Wat you ned to run the project:

You nead to have [docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/) and [heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) to run and deploy the project:

 - [doker install gide](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
 - [Heroku CLI install gide](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

## After making the installations use these commands to run the project:

### `sudo docker -t pilula/doker:1.0 .`

Create a dockerr image locally

### `sudo docker -p 3000:3000 -p pilula/docker:1.0`

Create a docker container from the image previously created

### `sudo docker ps`

shows the containers that are running

## Container deployment on heroku

### `heroku login`

log in to your heroku account

### `sudo docker ps`

It is important to use this command again to make sure that there is a container running

### `sudo heroku conatiner:login`

Will prepare the container to be deployed on heroku

### `heroku create`

create a new app on heroku it is important to pay attention to the name of the app that heroko will create because we will need depe for the next step example:

![Alt text](/../maste/src/captura.png?raw=true "Optional Title")


### `sudo heroku container:push web -a <app name>`

this command pushes the container that is on your machine to the heroku app

### `sudo heroku container:release web -a <app name>`

this command releases the container for the heroku app

### `heroku open`

will direct to the site already deployed


