'use client'
import { ReactNode } from 'react'
import { FirebaseContext } from 'src/context'
import { GlobalStyles } from 'src/global-styles'
import { firebaseProd } from 'src/lib'
import StyledComponentsRegistry from 'src/lib/styledComponentRegistry'

type GlobalLayoutProps = {
    children: ReactNode
}

const GlobalLayout = (props: GlobalLayoutProps) => {
    const { children } = props
    return (
        <StyledComponentsRegistry>
            <FirebaseContext.Provider value={{ firebaseProd }}>
                <GlobalStyles />
                {children}
            </FirebaseContext.Provider>
        </StyledComponentsRegistry>
    )
}

export default GlobalLayout
