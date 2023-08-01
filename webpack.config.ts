import path from "path";
import { Configuration } from "webpack";

const config: Configuration = {
  entry: "./src/index.jsx",
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        test: /\.[tj]sx?$/,
        loader: "babel-loader",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
  },
  plugins: [],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};

export default config;
