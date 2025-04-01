import express from "express";
import morgan from 'morgan'
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import assetRoutes from "./routes/asset.routes.js";

import { createDefaultAdmin } from "./utils/initAdmin.js";

(async () => {
  await createDefaultAdmin();
})();


const app = express();

app.use(express.static("public"));
app.use(morgan("dev"))
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", assetRoutes);

export default app;
