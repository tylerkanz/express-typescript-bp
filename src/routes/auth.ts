import { Router } from "express";
import logger from "../utils/logger.util";

const router = Router();

router.get('/api/getAuth', (request, response) => {
    response.send('Hello world!');
});

export default router;