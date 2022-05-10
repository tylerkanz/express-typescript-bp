import { Router, Request, Response } from "express";
import auth from "./auth";
import user from "./user";

const routes = Router();

routes.use("/", auth);
routes.use("/", user);

routes.get('/', (request, response) => {
    response.send('Hello world!');
  });

export default routes;