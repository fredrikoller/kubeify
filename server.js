import express from "express";
import dotenv from "dotenv";
import sequelize from "./src/config/db.js";
import routes from "./src/routes/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use("/api", routes);

sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Unable to sync the database:", error);
  });
