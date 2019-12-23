import { createContext } from 'react';

const defaultContext = {
  theme: {},
};

const Context = createContext(defaultContext);

export const { Consumer, Provider } = Context;
export default Context;
