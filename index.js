import "dotenv/config";
import express from "express";
import goalRoutes from "./routes/goalRoutes.js";
import { errorHandler } from "./middleware/errorMiddleWare.js";

const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(errorHandler);

app.listen(port, () => {
  console.log(`server live on port ${port}`);
});

app.use("/api/goal", goalRoutes);
