import express from 'express';
import { controllers } from "../controllers/controller.js";


const router = express.Router();

router.get("/", controllers.home);

router.get("/joyas", controllers.getJoyas);

router.get("/joyas/filtros", controllers.getJoyasPorFiltros);

export default router;
