import "dotenv/config";
import express from "express";

const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`serevr live on por ${port}`);
});
