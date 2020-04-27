
const map = {
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
}
const $browserContext = 16;

const mediaGrid = (type) => () => `@media (max-width: ${map[type] - 1}px)`
const rem = ($pixels, $context = $browserContext) => `${(+$pixels / $context) * 1}em`
const em = ($pixels, $context = $browserContext) => `${(+$pixels / $context) * 1}em`



export {
  mediaGrid,
  rem,
  em
}