<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Shop PG API

1. Clone project
2. Set execute permission for run.sh

```bash

chmod +x run.sh

sh run.sh

```

3. `yarn install`

4. Spin up the DB container

```
docker-compose up or docker-compose up -d
```

5. [Add tracing library](https://docs.datadoghq.com/tracing/trace_collection/automatic_instrumentation/dd_libraries/nodejs/)
6. [Configure tracer](https://docs.datadoghq.com/tracing/trace_collection/library_config/nodejs/#instrumentation) - Edit folder tracer/tracer.ts in the root directoy and addin the followig:

```
// tracer.ts
import tracer from 'dd-trace';
tracer.init({
  env: 'dev',
  service: 'shop-app',
  port:'<APM agent port>'
});

export default tracer;
```

7. Start app: `yarn start`

# Endpoints

1. Get all products

```
curl http://localhost:3000/api/products
```

3. Get products by id

```
curl http://localhost:3000/api/products
```

4. Delete a products

```
curl  -X DELETE http://localhost:3000/api/products/<id>
```

5. Create a product

http://localhost:3000/api/products

```bash
{
 "title": "Full-Zip Hoodie",
 "sizes":["MD", "LG", "XLG", "XXLG"],
 "gender": "men",
 "price": 32.00,
 "slug": "A classic full-zip hoodie with elevated comfort"
}

```

## Yarn not found

```
source ~/.bashrc

```

## Stack

- MongoDB v5
- Pg v10.0.2
- NestJS v8.11.3
- Express v4.17.13
- Nodejs v18.15.11
