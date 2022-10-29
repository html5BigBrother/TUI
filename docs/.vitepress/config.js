import themeConfig from './themeConfig'
module.exports = (ctx) => {
  return {
    title: "TUI",
    description: "Just playing around.",
    base: ctx.mode === "development" ? "" : "/TUI/",
    themeConfig
  };
};
