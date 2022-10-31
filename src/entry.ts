import { App, Directive } from 'vue'
import * as components from './components/components'
import * as directives from './directives/directives'

export default {
  install: (app: App) => {
    if (Object.keys(components)) {
      Object.entries(components).forEach(([componentName, component]) => {
        app.component(componentName, component)
      })
    }

    if (Object.keys(directives)) {
      Object.entries(directives).forEach(([directiveName, directive]) => {
        app.directive(directiveName.toLowerCase(), directive as Directive)
      })
    }
  },
}

export * from './components/components'
export * from './directives/directives'
