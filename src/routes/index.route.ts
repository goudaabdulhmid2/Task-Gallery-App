import { Router } from "express";
import { Photo } from "../models/photo.model";
import multer from "multer";
const router = Router();

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `./src/assets/photos`);
  },
  filename: (req, file, cb) => {
    const ext: string = file.mimetype.split("/")[1];
    cb(null, `photos-${Date.now()}.${ext}`);
  },
});

const upload = multer({
  storage: multerStorage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only JPG, PNG, and GIF are allowed."));
    }
  },
});

router.get("/", async (req, res, next) => {
  try {
    const photos = await Photo.find();
    res.render("index", { photos });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post("/", upload.single("path"), async (req, res, next) => {
  try {
    if (req.file) {
      await Photo.create({ path: req.file.filename });
      res.redirect("/");
    } else {
      throw new Error("some thing went wrong");
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
});

export default router;
