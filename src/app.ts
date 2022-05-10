import express from "express";
import dotenv from "dotenv";
import path from "path";
import router from "./routes/index";
import logger from "./utils/logger.util";
import mongoose from "mongoose";
import * as bodyParser from 'body-parser';

// initialize configuration
dotenv.config();

class App {
    public app: express.Application;

    constructor() {
      this.app = express();
      this.connectToTheDatabase();
      this.initializeRoutes();
    }

    public listen() {
      this.app.listen(process.env.SERVER_PORT, () => {
        logger.info(`App listening on the port ${process.env.SERVER_PORT}`);
      });
    }

    public getServer() {
      return this.app;
    }

    public initializeRoutes() {
        this.app.use('/', router);
    }

    private connectToTheDatabase() {
      const {
        MONGO_USER,
        MONGO_PASSWORD,
        MONGO_PATH,
      } = process.env;
      logger.info(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_PATH}`)
      mongoose.connect(`mongodb://${MONGO_PATH}`);
    }
  }

  export default App;

