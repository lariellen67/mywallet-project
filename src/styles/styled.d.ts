import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      PRIMARY: string,
      SECONDARY: string,
      TERTIARY: string,

      WHITE: string,
      BLACK: string,
      GRAY: string,

      SUCCESS: string,
      INFO: string,
      WARNING: string,
    },
  }
}
