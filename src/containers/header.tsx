'use client'

import { appRoutes } from 'app/routes'
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'
import {
    Header,
    HeaderButtonLink,
    HeaderFrame,
    HeaderLogo
} from 'src/components/header'

export default function HeaderContainer({ children }: { children: ReactNode }) {
    const pathname = usePathname()
    const isOnSigninPage = pathname === appRoutes.SIGN_IN
    return (
        <Header>
            <>
                <HeaderFrame>
                    <HeaderLogo
                        to={appRoutes.HOME}
                        src='/images/icons/logo.svg'
                        alt='Netflix'
                    />
                    <HeaderButtonLink
                        href={
                            isOnSigninPage
                                ? appRoutes.SIGN_UP
                                : appRoutes.SIGN_IN
                        }
                    >
                        {isOnSigninPage ? 'Sign Up' : 'Sign In'}
                    </HeaderButtonLink>
                </HeaderFrame>
                {children}
            </>
        </Header>
    )
}
