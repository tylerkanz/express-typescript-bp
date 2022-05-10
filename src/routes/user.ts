import { Router } from "express";

const router = Router();

router.get('/getUser', (request, response) => {
  response.send('Hello world!');
});

export default router;