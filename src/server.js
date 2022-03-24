import app from "./app.js";
// const app = makeApp();

//listen on port PORT
const PORT = process.env.PORT || 1500;

app.listen(PORT, () => {
  console.log(`🥙Listening on port ${PORT}`);
});
