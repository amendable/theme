import { AmendableProvider } from '@amendable/core'
import { Provider } from '../Context';
import defaultTheme from './lib/defaultTheme';
import defaultResolvers from './lib/defaultResolvers';

export default ({ theme = defaultTheme, resolvers = defaultResolvers(theme) }) => (
  <Provider value={{ theme }}>
    <AmendableProvider resolvers={resolvers}>
      {children}
    </AmendableProvider>
  </Provider>
)
