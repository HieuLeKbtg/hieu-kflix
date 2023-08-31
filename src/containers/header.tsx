import { appRoutes } from 'app/routes'
import React, { ReactNode } from 'react'
import {
    Header,
    HeaderButtonLink,
    HeaderFrame,
    HeaderLogo
} from 'src/components/header'

export default function HeaderContainer({ children }: { children: ReactNode }) {
    return (
        <Header>
            <HeaderFrame>
                <HeaderLogo
                    to={appRoutes.HOME}
                    src='/images/icons/logo.svg'
                    alt='Netflix'
                />
                <HeaderButtonLink href={appRoutes.SIGN_IN}>
                    Sign In
                </HeaderButtonLink>
            </HeaderFrame>
            {children}
        </Header>
    )
}
