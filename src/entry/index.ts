import { App } from 'vue'
import * as components from '@/components/index'
import * as directives from '@/directives/index'

export default {
    install: (app: App) => {
        Object.entries(components).forEach(([componentName, component]) => {
            app.component(componentName, component)
        })

        Object.entries(directives).forEach(([directiveName, directive]) => {
            // @ts-ignore
            app.directive(directiveName.toLowerCase(), directive)
        })
    },
}
