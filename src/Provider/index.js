import { AmendableProvider } from '@amendable/core'
import defaultTheme from './lib/defaultTheme';
import defaultResolvers from './lib/defaultResolvers';

export default ({ theme = defaultTheme, resolvers = defaultResolvers(theme) }) => (
  <AmendableProvider resolvers={resolvers}>
    {children}
  </AmendableProvider>
)
