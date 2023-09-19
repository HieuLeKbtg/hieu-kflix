import { appRoutes } from 'app/routes'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import React from 'react'
import { MainFooter } from 'src'

import PublicHeader from '@/containers/header/publicHeader'

import SignInForm from './Form'

export default async function SignIn() {
    const session = await getServerSession()

    if (session?.user) {
        redirect(appRoutes.BROWSE)
    }

    return (
        <>
            <PublicHeader>
                <SignInForm />
            </PublicHeader>
            <MainFooter />
        </>
    )
}
