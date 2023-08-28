import { FirebaseContext } from '@/context/firebase'
import { ReactNode } from 'react'
import { GlobalStyles } from 'src/global-styles'
// import { FirebaseContext } from '@/src'
// import { GlobalStyles } from '@/src/global-styles'
// import { firebase } from '@/lib'
import { firebaseProd } from '@/lib/firebase.prod'

type RootLayoutProps = {
  children: ReactNode
}
const RootLayout = (props: RootLayoutProps) => {
  const { children } = props
  return (
    <FirebaseContext.Provider value={{ firebaseProd }}>
      <GlobalStyles />
      {children}
    </FirebaseContext.Provider>
  )
}

export default RootLayout
