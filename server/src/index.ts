import {ServerApplication} from './application';
import {ApplicationConfig} from '@loopback/core';
import {createDB, updateDB} from "./dbGenerator";

export {ServerApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new ServerApplication(options);
  await app.boot();
  await app.start();


//  await createDB(app);
  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
