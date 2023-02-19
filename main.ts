import express from "express";
import { brandsRouter } from "./routers/brands.router";
import { itemsRouter } from "./routers/items.router";
import { itemsViewRouter } from "./routers/items_view.router";
import { ordersRouter } from "./routers/orders.router";
import { ordersViewRouter } from "./routers/orders_view.router";
import { usersRouter } from "./routers/users.router";
const app = express();

// use json and urlencoded responses
app.use(express.json(), express.urlencoded({ extended: false }));

// set all routes to routers
app.use("/brands", brandsRouter);
app.use("/users", usersRouter);
app.use("/items", itemsRouter);
app.use("/itemsview", itemsViewRouter);
app.use("/orders", ordersRouter);
app.use("/ordersview", ordersViewRouter);

// set port
const PORT = 3000;

// run server
app.listen(PORT, () => {
	console.log("Running on http://localhost:" + PORT);
});
