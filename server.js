const express = require("express");
const PORT = process.env.PORT || 7000;
const app = express();
const routes = require("./controllers/burgerController.js");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.engine("handlebars", require("express-handlebars")({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, () => console.log(`started on http://localhost:${PORT}/`));