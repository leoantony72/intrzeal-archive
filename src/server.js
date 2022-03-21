import makeApp from "./app.js";
import { prisma } from "../client.js";
const app = makeApp(prisma);

//listen on port PORT
const PORT = process.env.PORT || 1500;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
