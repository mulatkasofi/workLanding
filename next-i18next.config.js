const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["ru", "en"],
  },
  localePath: path.resolve("./public/locales"),
};
