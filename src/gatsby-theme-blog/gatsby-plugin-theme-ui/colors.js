import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"
const darkBackground = `#282B35`
const darkPrimary = `#8FD694`
const lightBackground = `#FFFFFF`
const lightPrimary = `#72AA78`
export default merge(defaultThemeColors, {
  primary: lightPrimary,
  lightBackground: lightBackground,
  modes: {
    dark: {
      background: darkBackground,
      primary: darkPrimary,
    },
  },
})
