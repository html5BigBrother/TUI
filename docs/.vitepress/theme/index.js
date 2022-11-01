import DefaultTheme from 'vitepress/theme'
import { Button } from 'TUI'
// import { Button } from '../../../packages/components/index'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Button', Button)
  }
}
