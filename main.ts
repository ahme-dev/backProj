import express from "express";
const app = express();

app.get("/", function (req, res) {
	res.send("Hello World");
});

let PORT = 3000;

app.listen(PORT, () => {
	console.log("Running on http://localhost:" + PORT);
});
