module.exports = {
  allowJs: true,
  compilerOptions: {
    baseUrl: ".",
    paths: { "@/*": ["./src/*"] },
  },
  include: ["src/**/*"],
  exclude: ["node_modules"],
};
