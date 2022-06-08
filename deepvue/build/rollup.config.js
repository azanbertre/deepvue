import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from "rollup-plugin-typescript2";
import scss from 'rollup-plugin-scss'
import sass from 'sass';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'esm',
        file: 'dist/deepvue.mjs'
      },
      {
        format: 'cjs',
        file: 'dist/deepvue.js'
      }
    ],
    plugins: [
      peerDepsExternal(), vue(), scss({
        output: 'dist/deepvue.css',
        runtime: sass,
        failOnError: false
      }), typescript()
    ]
  }
]
