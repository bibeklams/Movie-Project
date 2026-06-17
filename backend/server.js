import app from "./app.js";
import mongoDb from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3000;

mongoDb();

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
