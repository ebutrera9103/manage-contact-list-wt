# NestJS Prisma Docker

### Develop the Nest application

```bash server
npm install

npx prisma generate

npm run start:dev

Running: localhost:4000

```

```bash client
npm install

npm run start

Running: localhost:3000
```
 ## API Documentation

 localhost:4000/api

## Docker File

### Get started by running

```bash
cd client
docker build -f Dockerfile -t client .
docker run -it -p 3000:80 client

You can see the client running: localhost:3000

cd server
docker build -f Dockerfile -t server .
docker run -it -p 4001:4000 server

You can see the server running:  
curl localhost:4000

Result:
Welcome :)

```

## Docker Compose

```bash
docker-compose up --build
# or detached
docker-compose up -d
```
## Test
### Backend
npm run test

### Client
npm run cypress


