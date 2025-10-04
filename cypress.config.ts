import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    specPattern: ["**/__tests__/**/?(*.)component.?([mc])[jt]s?(x)"],
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
