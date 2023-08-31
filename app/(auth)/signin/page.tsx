'use client'

import { appRoutes } from 'app/routes'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'
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
import HeaderContainer from 'src/containers/header'
import { FirebaseContext } from 'src/context'

export default function SignIn() {
    const router = useRouter()
    const { firebase } = useContext(FirebaseContext)

    const [emailAddress, setEmailAddress] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')

    const isInvalid = password === '' || emailAddress === ''

    const handleSignin = (event) => {
        event.preventDefault()

        return firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                router.push(appRoutes.BROWSE)
            })
            .catch((error) => {
                setEmailAddress('')
                setPassword('')
                setError(error.message)
            })
    }

    return (
        <>
            <HeaderContainer>
                <FormContainer>
                    <FormTitle>Sign In</FormTitle>
                    {error && (
                        <FormError data-testid='error'>{error}</FormError>
                    )}

                    <FormBase onSubmit={handleSignin} method='POST'>
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
                        <FormSubmit
                            disabled={isInvalid}
                            type='submit'
                            data-testid='sign-in'
                        >
                            Sign In
                        </FormSubmit>
                    </FormBase>

                    <FormText>
                        New to Netflix?{' '}
                        <FormLink href='/signup'>Sign up now</FormLink>
                    </FormText>
                    <FormTextSmall>
                        This page is protected by Google reCAPTCHA to ensure
                        you're not a bot Learn more
                    </FormTextSmall>
                </FormContainer>
            </HeaderContainer>
            <MainFooter />
        </>
    )
}
