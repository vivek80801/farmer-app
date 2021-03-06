import { app } from "./src/app";
import { connectDB } from "./src/controller/services/microservices/db";

const port = process.env.PORT || 5000;

connectDB();

app.listen(port, () =>
  console.log(`server is runing on http://localhost:${port}`)
);
