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

2. Build GTravel back project.

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

## Connect Docker Container to DataGrip

1. Add new database and select PostgreSql in Data Source.

2. Insert 35000 port instead of default 5432

3. Insert Correct User and Password

4. Click on apply

```bash
docker-compose up -d
```

P.S choose to see All Databases in database properties

## Database tricks

```bash
yarn typeorm schema:log
```

and you can drop database with

```bash
yarn typeorm schema:drop
```

## Getting Started

run GTravel back project

```bash
yarn start:dev
```

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.

P.S created with `Nest.js`
