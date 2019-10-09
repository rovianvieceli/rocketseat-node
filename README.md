# MongoDB

### Install via Docker
```
$ docker pull mongo
```

### Rodando Imagem
```
$ docker run --name mongodb -p 27017:27017 -d mongo
```
* --name = nome do container
* -p 27017:27017 = redirecionar porta "local":"container"
* -d mongo = imagem a rodar em background "-d mongo"

### Rodando Imagens pausadas (exited)
```
$ docker start mongodb
```

### Verificando imagem se está rodando
```
$ docker ps

CONTAINER ID    IMAGE   COMMAND                  CREATED              STATUS              PORTS                     NAMES
a9f87b5ca6c4    mongo   "docker-entrypoint.s…"   About a minute ago   Up About a minute   0.0.0.0:27017->27017/tcp  mongodb
```


### Robo 3T - acessar mongodb via app
https://robomongo.org/

### Insomnia - Rest Client
https://insomnia.rest/
