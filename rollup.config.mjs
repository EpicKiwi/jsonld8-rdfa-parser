import nodeResolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import pkg from './package.json' assert { type: 'json' };

export default [
  // Nodejs config
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/index.esm.js',
        format: 'esm'
      },
      {
        file: 'dist/index.js',
        format: 'cjs'
      },
    ],
    external: Object.keys(pkg.dependencies),
    plugins: [
      babel({ babelHelpers: "bundled"})
    ]
  },
  // Browser config
  {
    input: 'src/index.js',
    output: [{
      file: 'dist/browser/index.esm.js',
      format: 'esm'
    },
    {
      file: 'dist/browser/index.esm.min.js',
      format: 'esm',
      plugins: [terser()]
    }],
    plugins: [
      alias({
        entries: [
          { find: 'jsdom', replacement: './browser/jsdom.js' },
          { find: 'xmldom', replacement: './browser/xmldom.js' }
        ]
      }),
      commonjs(),
      babel({ babelHelpers: "bundled"}),
      nodeResolve()
    ]
  },
];
