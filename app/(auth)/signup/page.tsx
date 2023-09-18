'use client'

import { appRoutes } from 'app/routes'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { signIn } from 'next-auth/react'
import React, { useState } from 'react'
import { auth } from 'src'
import {
    FormBase,
    FormContainer,
    FormError,
    FormInput,
    FormLink,
    FormSubmit,
    FormText,
    FormTextSmall,
    FormTitle
} from 'src/components'
import MainFooter from 'src/containers/footer'

import PublicHeader from '@/containers/header/publicHeader'

export default function SignUp() {
    const [firstName, setFirstName] = useState<string>('')
    const [emailAddress, setEmailAddress] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')

    const isInvalid = firstName === '' || password === '' || emailAddress === ''

    const handleSignup = async () => {
        if (isInvalid) return

        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                emailAddress,
                password
            )
            await updateProfile(user.user, { displayName: firstName })
            signIn('credentials', {
                email: emailAddress,
                password,
                redirect: true,
                callbackUrl: appRoutes.HOME
            })
        } catch (error) {
            setError((error as Error).message)
        }
    }

    // TODO: check is sign in and redirect to browse

    return (
        <>
            <PublicHeader>
                <FormContainer>
                    <FormTitle>Sign Up</FormTitle>
                    {error && <FormError>{error}</FormError>}

                    <FormBase>
                        <FormInput
                            placeholder='First name'
                            value={firstName}
                            onChange={({ target }) =>
                                setFirstName((target as HTMLInputElement).value)
                            }
                        />
                        <FormInput
                            placeholder='Email address'
                            value={emailAddress}
                            onChange={({ target }) =>
                                setEmailAddress(
                                    (target as HTMLInputElement).value
                                )
                            }
                        />
                        <FormInput
                            type='password'
                            value={password}
                            autoComplete='off'
                            placeholder='Password'
                            onChange={({ target }) =>
                                setPassword((target as HTMLInputElement).value)
                            }
                        />
                    </FormBase>
                    <FormSubmit
                        disabled={isInvalid}
                        data-testid='sign-up'
                        onClick={handleSignup}
                    >
                        Sign Up
                    </FormSubmit>

                    <FormText>
                        Already a user?{' '}
                        <FormLink href='/signin'>Sign in now</FormLink>
                    </FormText>
                    <FormTextSmall>
                        This page is protected by Google reCAPTCHA to ensure
                        you're not a bot Learn more
                    </FormTextSmall>
                </FormContainer>
            </PublicHeader>
            <MainFooter />
        </>
    )
}
