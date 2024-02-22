import { ReactNode, createContext, useContext } from 'react';

const CommerceContext = createContext({});

export const CommerceProvider = ({children}: {children: ReactNode}) =>  {

  const values = {

  }

  return (
    <CommerceContext.Provider value={values}>
      {children}
    </CommerceContext.Provider>
  )
}

export default function useCommerce() {
  try {
    return useContext(CommerceContext);
  } catch (err) {
    console.error(err)
  }
}