'use client'

import 'normalize.css'

import { redirect, usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'
import localStorageHelper from 'src/helpers/LocalStorageHelper'
import { User } from 'src/types'

import { appRoutes } from './routes'

type GlobalLayoutProps = {
    children: ReactNode
}

const GlobalLayout = (props: GlobalLayoutProps) => {
    const { children } = props
    const pathname = usePathname()

    const userList: User[] = localStorageHelper.getUserList()
    const user: User = localStorageHelper.getUserInfo()

    if (!userList) {
        localStorageHelper.setUserList([])
    }

    if (!user) {
        localStorageHelper.setUserInfo({
            firstName: '',
            emailAddress: '',
            password: ''
        })
    }

    const ALL_ROUTES: string[] = [
        appRoutes.HOME,
        appRoutes.BROWSE,
        appRoutes.SIGN_IN,
        appRoutes.SIGN_UP,
        appRoutes.FILMS,
        appRoutes.SERIES
    ]

    const PROTECTED_ROUTES: string[] = [
        appRoutes.BROWSE,
        appRoutes.FILMS,
        appRoutes.SERIES
    ]

    const AUTH_ROUTES: string[] = [
        appRoutes.HOME,
        appRoutes.SIGN_IN,
        appRoutes.SIGN_UP
    ]

    const currentRoute: string = ALL_ROUTES.find((route) =>
        route.includes(pathname)
    )

    // not login and on protected routes
    if (!user?.emailAddress && PROTECTED_ROUTES.includes(currentRoute)) {
        return redirect(appRoutes.HOME)
    }

    // logged-in but in auth routes
    if (user?.emailAddress && AUTH_ROUTES.includes(currentRoute)) {
        return redirect(appRoutes.BROWSE)
    }

    return <div id='global-layout'>{children}</div>
}

export default GlobalLayout
