```bash
docker login
```

```bash
docker tag kubiefy:latest fredrikoller/contaier-repo:latest
```

```bash
docker push fredrikoller/contaier-repo:latest
```

```bash
# create an instance of postgresql in docker
docker run --name postgresql -e POSTGRES_PASSWORD=your password -d -p 5432:5432 postgres

# access the db in the container
docker exec -it postgresql bash

# login as user
psql -U fredrikdev

# list all databases
\l

# create database
CREATE DATABASE kubiefy;
```

(Guide on how to setup postgres in docker)[https://betterprogramming.pub/connect-from-local-machine-to-postgresql-docker-container-f785f00461a7]

(Node and keycloak)[https://medium.com/@erinlim555/simple-keycloak-rbac-with-node-js-express-js-bc9031c9f1ba]
