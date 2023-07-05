import express from "express";
import { perfil, registrar, confirmar, autenticar } from "../controllers/VeterinarioController.js";
import checkAuth from "../middleware/authMiddleware.js";


const router = express.Router()

// Area Publica
router.post("/", registrar)
router.get("/confirmar/:token", confirmar)
router.post("/login", autenticar)

//Area Privada

router.get("/perfil", checkAuth, perfil)

export default router;