'use client'

import 'normalize.css'

import React, { ReactNode } from 'react'


type GlobalLayoutProps = {
    children: ReactNode
}

const GlobalLayout = (props: GlobalLayoutProps) => {
    const { children } = props
    // const pathname = usePathname()

    // if (!userList) {
    //     localStorageHelper.setUserList([])
    // }

    // if (!isLoggedIn) {
    //     localStorageHelper.setUserInfo(DEFAULT_USER)
    // }

    // const ALL_ROUTES: string[] = [
    //     appRoutes.HOME,
    //     appRoutes.BROWSE,
    //     appRoutes.SIGN_IN,
    //     appRoutes.SIGN_UP,
    //     appRoutes.FILMS,
    //     appRoutes.SERIES
    // ]

    // const PROTECTED_ROUTES: string[] = [
    //     appRoutes.BROWSE,
    //     appRoutes.FILMS,
    //     appRoutes.SERIES
    // ]

    // const AUTH_ROUTES: string[] = [
    //     appRoutes.HOME,
    //     appRoutes.SIGN_IN,
    //     appRoutes.SIGN_UP
    // ]

    // const currentRoute: string = ALL_ROUTES.find((route) =>
    //     route.includes(pathname)
    // )

    // not login and on protected routes
    // if (!isLoggedIn && PROTECTED_ROUTES.includes(currentRoute)) {
    //     return redirect(appRoutes.HOME)
    // }

    // // logged-in but in auth routes
    // if (isLoggedIn && AUTH_ROUTES.includes(currentRoute)) {
    //     return redirect(appRoutes.BROWSE)
    // }

    return <div id='global-layout'>{children}</div>
}

export default GlobalLayout
