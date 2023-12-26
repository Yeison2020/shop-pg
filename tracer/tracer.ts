// tracer.ts
import tracer from 'dd-trace';
tracer.init({
  env: 'dev',
  service: 'shop-app',
  serviceMapping: {
    "postgres:'shop-app-postgres": 'shop-app',
  },
  ingestion: {
    sampleRate: 1,
  },
});

export default tracer;
