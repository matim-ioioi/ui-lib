import path from 'path'

export default {
  entryPoints: [path.resolve('..', 'src', 'entry', 'index.ts')],
  bundle: true,
  sourcemap: true,
  minify: true,
}
