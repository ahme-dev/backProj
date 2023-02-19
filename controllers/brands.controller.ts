export async function getAllBrands(req, res) {
	res.send("getallBrands");
}

export async function addBrand(req, res) {
	res.send("AddBrand");
}

export async function updateBrand(req, res) {
	res.json("updateBrand");
}

export async function deleteBrand(req, res) {
	res.send("deleteBrand");
}
