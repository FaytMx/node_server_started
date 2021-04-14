import express = require("express");
import { createContainer, asClass } from "awilix";
import { scopePerRequest } from "awilix-express";
import { TestService } from "./services/test.service";


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (app: express.Application) => {
  const container = createContainer({
    injectionMode: "CLASSIC",
  });

  container.register({
    //repositories


    //services
    testService: asClass(TestService).scoped(),
  });

  app.use(scopePerRequest(container));
};
