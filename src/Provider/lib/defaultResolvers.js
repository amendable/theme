import colorsResolver from '@amendable/colors-polished'
import inlinePropsCssResolver from '@amendable/inline-props-css';
import scaleResolver from '@amendable/scale';
import spacingAliasesResolver from '@amendable/spacing-aliases'
import expandStyleShorthandsResolver from '@amendable/expand-style-shorthands';

const boxShadowsResolver = () => ({
  match: 'boxShadow',
  resolve: ({ key, value }) => ({
    [key]: boxShadows[value] || value,
  }),
})


export default (theme) => [
  expandStyleShorthandsResolver(),
  colorsResolver({ colors: theme.colors }),
  boxShadowsResolver(),
  spacingAliasesResolver(),
  scaleResolver({ base: 16 }),
  inlinePropsCssResolver(),
]
