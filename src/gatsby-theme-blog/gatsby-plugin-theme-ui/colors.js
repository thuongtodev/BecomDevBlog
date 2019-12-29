import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"
const darkBackground = `#282B35`
const darkPrimary = `#F9A6C4`
const lightBackground = `#FFFFFF`
const lightPrimary = `#D23669`
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
