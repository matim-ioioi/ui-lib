import ESBuild from 'esbuild'
import minimist from 'minimist'
import esbuildEsmConfig from '@root/config/esbuild.esm.config'
import esbuildCjsConfig from '@root/config/esbuild.cjs.config'

const argv = minimist(process.argv.slice(2))

/** ES Module */
if (!argv.format || argv.format === 'es') {
  ESBuild.build(esbuildEsmConfig)
}

/** CommonJS Module */
if (!argv.format || argv.format === 'cjs') {
  ESBuild.build(esbuildCjsConfig)
}


