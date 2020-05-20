import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace"
import typescript from "rollup-plugin-typescript2";

export default {
  input: ["./client/index.tsx"],

  output: {
    file: "./public/dist/bundle.js",
    name: "App",
    format: "iife",
    sourcemap: true,
  },

  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'development' )
    }),

    resolve({
      browser: true
    }),

    commonjs({
      include: ["node_modules/**"],
      exclude: [],
      sourceMap: true,
      ignoreGlobal: true,
    }),

    babel({
      babelHelpers: 'bundled',
      exclude: "node_modules/**"
    }),

    typescript(),
  ],
};
