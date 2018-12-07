import {ServerApplication} from './application';
import {ApplicationConfig} from '@loopback/core';
import {createDB, updateDB} from "./dbGenerator";

const datasourceCloudant = require('./datasources/cloudant.datasource.json');
const cfenv = require('cfenv');
const appEnv = cfenv.getAppEnv();

export {ServerApplication};

export async function main(options: ApplicationConfig = {}) {

  if (!options.rest) { options.rest = {}; }
  options.rest.port = appEnv.isLocal ? options.rest.port : appEnv.port;
  options.rest.host = appEnv.isLocal ? options.rest.host : appEnv.host;

  const app = new ServerApplication(options);

  if (!appEnv.isLocal) {
    const updatedDatasourceDB = Object.assign({}, datasourceCloudant, {
      url: appEnv.getServiceURL('Database'),
    });
    app.bind('datasources.config.cloudant').to(updatedDatasourceDB);
  }


  await app.boot();
  await app.start();

  //await createDB(app);

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);

  return app;
}
