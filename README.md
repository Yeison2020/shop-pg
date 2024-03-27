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
4. Optional - add db credentials within `.env`
5. Start DB container

```
docker-compose up -d
```

6. [Add tracing library](https://docs.datadoghq.com/tracing/trace_collection/automatic_instrumentation/dd_libraries/nodejs/)
7. [Configure tracer](https://docs.datadoghq.com/tracing/trace_collection/library_config/nodejs/#instrumentation) - Create a folder tracer/tracer.ts in the root directoy of the app with th following:

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

# shop-pg-apm
