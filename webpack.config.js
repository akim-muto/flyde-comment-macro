const path = require("path");

const pairs = [
   {
    entry: "./src/Macro.tsx",
    name: "Macro",
  },
  {
    entry: "./src/Macro2.tsx",
    name: "Macro2",
  },
  {
    entry: "./src/simpleselect.tsx",
    name: "simpleselect",
  },
  {
    entry: "./src/CodeExpression2.tsx",
    name: "simpleselect",
  },
/*  {
    entry: "./src/lib/Value/InlineValue.tsx",
    name: "InlineValue",
  },
  {
    entry: "./src/lib/Value/simpleselect.tsx",
    name: "simpleselect",
  }, */
/*   {
    entry: "./src/lib/Value/simpleTable.tsx",
    name: "simpleTable",
  }, */
/*   {
    entry: "./test/test.ts",
    name: "test",
  }, */
/*   {
    entry: "./test/test2.ts",
    name: "test2",
  }, */
];

module.exports = pairs.map(({ entry, name }) => ({
  entry,
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist", "ui"),
    filename: name + ".js",
    library: {
      name: "__MacroNode__" + name,
      type: "window",
    },
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      // CSS Loader
      {
        test: /\.css$/,
        use: [
          "style-loader", // Injects styles into the DOM.
          "css-loader", // Interprets `@import` and `url()` like `import/require()`
        ],
      },
    ],
  },
/*   externals: {
    // Do not bundle React and ReactDOM, assume they're available externally
    react: "React",
    "react-dom": "ReactDOM",
    "@blueprintjs/core": "Blueprint",
    "@blueprintjs/select": "BlueprintSelect",
  }, */
}));
