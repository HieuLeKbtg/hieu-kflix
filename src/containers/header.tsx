import { appRoutes } from 'app/routes'
import React, { ReactNode } from 'react'
import {
    Header,
    HeaderButtonLink,
    HeaderFrame,
    HeaderLogo
} from 'src/components/header'

import logo from '../logo.svg'

export default function HeaderContainer({ children }: { children: ReactNode }) {
    return (
        <Header>
            <HeaderFrame>
                <HeaderLogo to={appRoutes.HOME} src={logo} alt='Netflix' />
                <HeaderButtonLink href={appRoutes.SIGN_IN}>
                    Sign In
                </HeaderButtonLink>
            </HeaderFrame>
            {children}
        </Header>
    )
}
