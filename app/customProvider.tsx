'use client'

import 'normalize.css'

import isPropValid from '@emotion/is-prop-valid'
import { ReactNode } from 'react'
// import { firebaseProd } from 'src/lib'
// import { FirebaseContext } from 'src/context'
import StyledComponentsRegistry from 'src/lib/styledComponentRegistry'
import { StyleSheetManager } from 'styled-components'

import GlobalStyles from './globalStyles'

type CustomProviderProps = {
    children: ReactNode
}

const CustomProvider = (props: CustomProviderProps) => {
    const { children } = props
    return (
        // <FirebaseContext.Provider value={{ firebaseProd }}>
        <StyleSheetManager shouldForwardProp={isPropValid}>
            <StyledComponentsRegistry>
                <GlobalStyles />
                {children}
            </StyledComponentsRegistry>
        </StyleSheetManager>
        // </FirebaseContext.Provider>
    )
}

export default CustomProvider
