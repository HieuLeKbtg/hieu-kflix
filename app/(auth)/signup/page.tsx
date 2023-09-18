import { appRoutes } from 'app/routes'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import React from 'react'
import MainFooter from 'src/containers/footer'

import PublicHeader from '@/containers/header/publicHeader'

import SignUpForm from './Form'

export default async function SignUp() {
    const session = await getServerSession()

    if (session?.user) {
        redirect(appRoutes.BROWSE)
    }

    return (
        <>
            <PublicHeader>
                <SignUpForm />
            </PublicHeader>
            <MainFooter />
        </>
    )
}
