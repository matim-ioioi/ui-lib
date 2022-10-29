import path from 'path'
import esbuildConfig from '@root/config/esbuild.config'
import { BuildOptions } from 'esbuild'

const config: BuildOptions = {
  ...esbuildConfig,
  outdir: path.resolve('..', '.dist/esm'),
  entryPoints: [path.resolve('..', 'src', 'entry', 'index.ts')],
  // outfile: "dist/cjs/index.cjs.js",
  platform: "node",
  target: ["Node16"],
}

export default config
