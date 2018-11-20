import express from "express";

import renderer from "./renderer";
const path = require("path");
const prerender = require("prerender-node");

const PORT = process.env.PORT || 3030;
const app = express();
const router = express.Router();

// root (/) should always serve our server rendered page
router.use("^/$", renderer);

// Set up route handling, include static assets and an optional API
router.use(
  express.static(path.resolve(__dirname, "../build"), { maxAge: "1d" })
);

// any other route should be handled by react-router, so serve the index page
router.use("*", renderer);

app.use(prerender);
app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

app.on("error", error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof PORT === "string" ? "Pipe " + PORT : "Port " + PORT;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
});
