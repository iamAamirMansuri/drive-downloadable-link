const path = require("path");

module.exports = {
  entry: "./src/util.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    library: "getDownloadableLink",
    libraryTarget: "umd",
  },
};
