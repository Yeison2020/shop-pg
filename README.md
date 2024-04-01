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
docker-compose up or docker-compose up -d to run containers in the background.

```

5. [Add tracing library](https://docs.datadoghq.com/tracing/trace_collection/automatic_instrumentation/dd_libraries/nodejs/)
6. [Configure tracer](https://docs.datadoghq.com/tracing/trace_collection/library_config/nodejs/#instrumentation) - Find folder tracer/tracer.ts in the root directoy of the app with th following:

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

## NPM not found

```
source ~/.bashrc

```
