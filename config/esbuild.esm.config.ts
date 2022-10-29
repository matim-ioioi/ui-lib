import path from 'path'
import esbuildConfig from '@root/config/esbuild.config'
import { BuildOptions } from 'esbuild'

const config: BuildOptions = {
  ...esbuildConfig,
  outdir: path.resolve('..', '.dist/esm'),
  entryPoints: [path.resolve('..', 'src', 'entry', 'index.ts')],
  splitting: true,
  format: "esm",
  define: { global: "window" },
  target: ["ESNext"],
}

export default config
