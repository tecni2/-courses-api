const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/init.models");
const usersRouter = require("./routes/users.routes");
const coursesRouter = require("./routes/courses.routes");
const videosRouter = require("./routes/videos.routes");
const categoriesRouter = require("./routes/categories.routes");

const app = express();

const PORT = 8000;

app.use(express.json());

db.authenticate()
  .then(() => console.log("DB autenticada"))
  .catch(error => console.log(error));

initModels();

db.sync({ force: false })
  .then("DB sincronizada")
  .catch(error => console.log(error));

app.use("/api/v1", usersRouter);
app.use("/api/v1", coursesRouter);
app.use("/api/v1", videosRouter);
app.use("/api/v1", categoriesRouter);

app.listen(PORT, () => console.log("Servidor escuchando"));