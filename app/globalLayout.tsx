import { ReactNode } from 'react'
import { FirebaseContext } from '@/src/context'
import { GlobalStyles } from '@/src/global-styles';

type RootLayoutProps = {
  children: ReactNode
}
const RootLayout = (props: RootLayoutProps) => {
  const { children } = props
  return (
    <FirebaseContext.Provider value={null}>
      <GlobalStyles />
      {children}
    </FirebaseContext.Provider>
  )
}

export default RootLayout
