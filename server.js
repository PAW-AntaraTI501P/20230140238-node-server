const express = require("express");
const app = express();
const cors = require("cors");
//const port = 3001;
require("dotenv").config();
const port = process.env.PORT;

const todoRoutes = require("./routes/todo.js");
const { todos } = require("./routes/todo.js");

app.use(express.json());
app.use("/todos", todoRoutes);

// atur EJS sebagai view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index"); // render file index.ejs
});

app.get("/contact", (req, res) => {
res.render("contact");
});

//endpoint untuk mendapatkan data todos
app.get("/todos-data", (res, req) =>{
  res.json(todos); // mengembalikan data todos dalam format json
})

app.get("/todos-list", (res, req) => {
  res.render("todos-pages", { todos: todos }); // merender todos
})

//middleware
app.use((req, res) => {
res.status(404).send("404 - page not found");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});