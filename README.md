# GTravel - Back

`Nest.js` Backend

To install js libraries run following command from gtravel-back/ folder.

```bash
yarn
```

## Database Initialization

1. Create postgres docker container.

```bash
docker-compose up -d postgres
```

2. Build temi cloud back project.

```bash
yarn build
```

3. Sync typeorm to create DB tables.

```bash
yarn typeorm schema:sync
```

<!-- TODO: add dummy data initialized instruction -->

## Getting Started

run temi cloud back project

```bash
yarn start:dev
```

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.
