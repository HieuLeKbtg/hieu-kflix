import { ReactNode } from 'react'
import { FirebaseContext } from 'src/context'
import { GlobalStyles } from 'src/global-styles'
import {firebaseProd} from 'src/lib'

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
