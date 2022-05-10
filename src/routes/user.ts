import { Router } from "express";
import { userInfo } from "os";
import logger from "../utils/logger.util";
import { User } from "../models/user.model"
const router = Router();

router.get('/api/getUser', (request, response) => {
  response.send('Hello world!');
});

router.post('/api/createUser', async (request, response) => {
  console.log('Request: ', request.body)
  response.send('Hello world!');
});

export default router;