import express from "express";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3200, () => {
  console.log(`Server is running in http://localhost:3200`);
});
