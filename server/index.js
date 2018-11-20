// Ignore those pesky styles
require("ignore-styles");

// Set up babel to do its thing... env for the latest toys, react-app for CRA
require("@babel/register")({
  ignore: ["build", "node_modules"],
  presets: ["@babel/preset-env", "@babel/preset-react"]
});

require("./server");
