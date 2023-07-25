const express = require("express");
const router = express.Router();
const uploadMiddleware = require("./uploadMiddleware");
const PictureController = require("./controllers/pictureController");

// Rota de upload de imagem
router.post("/", uploadMiddleware.upload.single("imagem"), uploadMiddleware.uploadToStorage, PictureController.create);

router.get("/", PictureController.findAll)

router.delete("/:id", PictureController.remove);

module.exports = router;
