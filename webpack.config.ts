import KumaUIWebpackPlugin from "@kuma-ui/webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import { Configuration } from "webpack";

const isDev = process.env.NODE_ENV === "development";

const common: Configuration = {
  mode: isDev ? "development" : "production",
  externals: {
    fsevents: "fsevents",
    // keep better-sqlite3 as an external module
    // this allows for storage to be able to resolve
    // it
    "better-sqlite3": "commonjs better-sqlite3",
  },
  output: {
    publicPath: "./",
    filename: "[name].js",
    assetModuleFilename: "assets/[name][ext]",
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
    alias: {
      "@/": path.resolve(__dirname),
      "@src": path.resolve(__dirname, "src/"),
      "@shared": path.resolve(__dirname, "src/shared/"),
      "@components": path.resolve(__dirname, "src/web/components/"),
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@pages": path.resolve(__dirname, "src/web/pages"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(ico|png|svg|eot|ttf|woff?2?)$/,
        type: "asset/resource",
      },
    ],
  },
  watch: isDev,
  devtool: isDev ? "source-map" : undefined,
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "node_modules/better-sqlite3/",
          to: "node_modules/better-sqlite3/",
        },
      ],
    }),
  ],
};

const main: Configuration = {
  ...common,
  target: "electron-main",
  entry: {
    main: "./src/main.ts",
  },
};

const preload: Configuration = {
  ...common,
  target: "electron-preload",
  entry: {
    preload: "./src/preload.ts",
  },
};

const renderer: Configuration = {
  ...common,
  target: "web",
  entry: {
    app: "./src/web/index.tsx",
  },
  plugins: [
        new KumaUIWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      inject: "body",
      template: "./src/web/index.html",
    }),
  ],
};

export default [main, preload, renderer];
