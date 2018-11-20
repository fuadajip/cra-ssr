// an express middleware which will render our html
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

// import APP
import App from "../src/app/App";

const path = require("path");
const fs = require("fs");

export default (req, res, next) => {
  const context = {};
  // console.log(req.url);

  // point builded html from build dir
  const filePath = path.resolve(__dirname, "../build/index.html");
  fs.readFile(filePath, "utf8", (err, htmlData) => {
    if (err) {
      console.error(`Error rendering the page:\n ${err}`);
      return res.status(404).end();
    }

    // render the app as html string
    const html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );

    // console.log(context.url);

    if (context.status === 404) {
      res.status(404);
    }

    if (context.url) {
      return res.redirect(301, context.url);
    }

    // get HTML headers
    const helmet = Helmet.renderStatic();
    // inject  the rendered app into html
    return res.send(
      htmlData
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
        .replace(
          "<title></title>",
          helmet.title.toString() + helmet.meta.toString()
        )
    );
  });
};
