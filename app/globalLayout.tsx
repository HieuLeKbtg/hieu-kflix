'use client'

import 'normalize.css'

import { redirect, usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'

import { appRoutes } from './routes'

type GlobalLayoutProps = {
    children: ReactNode
}

const GlobalLayout = (props: GlobalLayoutProps) => {
    const { children } = props
    const pathname = usePathname()

    // TODO: add user here
    const user = {}

    const ALL_ROUTES: string[] = [
        appRoutes.HOME,
        appRoutes.BROWSE,
        appRoutes.SIGN_IN,
        appRoutes.SIGN_UP
    ]

    const PROTECTED_ROUTES: string[] = [appRoutes.BROWSE]
    const AUTH_ROUTES: string[] = [appRoutes.SIGN_IN, appRoutes.SIGN_UP]

    const currentRoute: string = ALL_ROUTES.find((route) =>
        route.includes(pathname)
    )

    if (!user && PROTECTED_ROUTES.includes(currentRoute)) {
        return redirect(appRoutes.SIGN_IN)
    }

    if (user && AUTH_ROUTES.includes(currentRoute)) {
        return redirect(appRoutes.BROWSE)
    }

    return <div id='global-layout'>{children}</div>
}

export default GlobalLayout
