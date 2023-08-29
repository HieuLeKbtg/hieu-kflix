import { appRoutes } from 'app/routes'
import React from 'react'

import { Header } from '../components'
import logo from '../logo.svg'

export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={appRoutes.HOME} src={logo} alt='Netflix' />
                <Header.ButtonLink to={appRoutes.SIGN_IN}>
                    Sign In
                </Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}
