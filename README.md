# GTravel - Back

## Prerequisites

1. Instal docker

2. Instal Node js

3. Install NestJs with command in your cmd terminal

```bash
npm i -g @nestjs/cli
```

4. install yarn

5. add gtravel-back/.env file and add data from env.example

6. To install js libraries run following command from gtravel-back/ folder.

```bash
yarn
```

## Database Initialization

1. Create postgres docker container.

```bash
docker-compose up -d
```

2. Build temi cloud back project.

```bash
yarn build
```

3. Sync typeorm to create DB tables.

```bash
yarn typeorm schema:sync
```

4. Add data to database

```bash
yarn nuke
```

P.S you can diff databases between local entities and postgres with

```bash
yarn typeorm schema:log
```

and you can drop database with

```bash
yarn typeorm schema:drop
```

<!-- TODO: add dummy data initialized instruction -->

## Getting Started

run temi cloud back project

```bash
yarn start:dev
```

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.

P.S created with `Nest.js`
