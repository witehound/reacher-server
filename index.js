import "dotenv/config";
import express from "express";
import goalRoutes from "./routes/goalRoutes.js";

const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`server live on port ${port}`);
});

app.use("/api/goal", goalRoutes);
