import 'styled-components'
import guiaTheme from './theme'

export type Theme = typeof guiaTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {

  }
}
