import app from "./app.js";
// const app = makeApp();

//listen on port PORT
const PORT = process.env.PORT || 1500;

async function startServer() {
  app.listen(PORT, (err) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log(`🥙Server started at ${PORT} !`);
  });
}

// Run the async function to start our server
startServer();
