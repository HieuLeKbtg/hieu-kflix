'use client'

import 'normalize.css'

import { ReactNode } from 'react'
import { FirebaseContext } from 'src/context'
import { GlobalStyles } from 'src/global-styles'
import { firebaseProd } from 'src/lib'
import StyledComponentsRegistry from 'src/lib/styledComponentRegistry'

type CustomProviderProps = {
    children: ReactNode
}

const CustomProvider = (props: CustomProviderProps) => {
    const { children } = props
    return (
        <FirebaseContext.Provider value={{ firebaseProd }}>
            <StyledComponentsRegistry>
                <GlobalStyles />
                {children}
            </StyledComponentsRegistry>
        </FirebaseContext.Provider>
    )
}

export default CustomProvider
