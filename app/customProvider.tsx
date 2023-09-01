'use client'

import 'normalize.css'

import { ReactNode } from 'react'
// import { firebaseProd } from 'src/lib'
// import { FirebaseContext } from 'src/context'
import StyledComponentsRegistry from 'src/lib/styledComponentRegistry'

import GlobalStyles from './globalStyles'

type CustomProviderProps = {
    children: ReactNode
}

const CustomProvider = (props: CustomProviderProps) => {
    const { children } = props
    return (
        // <FirebaseContext.Provider value={{ firebaseProd }}>
        <StyledComponentsRegistry>
            <GlobalStyles />
            {children}
        </StyledComponentsRegistry>
        // </FirebaseContext.Provider>
    )
}

export default CustomProvider
