import { Router } from "express";
import {
	addBrand,
	deleteBrand,
	getAllBrands,
	updateBrand,
} from "../controllers/brands.controller";

export const brandsRouter = Router();

brandsRouter.get("/", getAllBrands);
brandsRouter.post("/", addBrand);
brandsRouter.patch("/:brandId", updateBrand);
brandsRouter.delete("/:brandId", deleteBrand);
