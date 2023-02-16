import { app } from "./server/app";
import { config } from "dotenv";

config();

const PORT = process.env.EXPRESS_PORT || 3050;

const main = () => {
  app.listen(PORT, () => {
    console.log("Server is listening on port: ", PORT);
  });
};

main();
