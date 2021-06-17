const path = require("path");
module.exports = {
  publicPath: "",
  productionSourceMap: false,
  configureWebpack: {
    devtool:
      process.env.NODE_ENV === "development"
        ? "source-map"
        : "nosources-source-map",
  },
  chainWebpack: (config) => {
    const oneOfSMap = config.module.rule("scss").oneOfs.store;
    oneOfSMap.forEach((item) => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          resources: ["src/assets/scss/partials/_variables.scss"],
        })
        .end();
    });
    config.resolve.alias.set("@", path.join(__dirname, "src"));
  },
};
