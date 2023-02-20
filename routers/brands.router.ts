import { Router } from "express";
import {
	insertBrand,
	deleteBrand,
	getAllBrands,
	updateBrand,
} from "../controllers/brands.controller";

export const brandsRouter = Router();

brandsRouter.get("/", getAllBrands);
brandsRouter.post("/", insertBrand);
brandsRouter.patch("/:brandId", updateBrand);
brandsRouter.delete("/:brandId", deleteBrand);
