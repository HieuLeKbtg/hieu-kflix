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

export default function SignUp() {
    const router = useRouter()
    const { firebase } = useContext(FirebaseContext)

    const [firstName, setFirstName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const isInvalid = firstName === '' || password === '' || emailAddress === ''

    const handleSignup = (event) => {
        event.preventDefault()

        return firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) =>
                result.user
                    .updateProfile({
                        displayName: firstName,
                        photoURL: Math.floor(Math.random() * 5) + 1
                    })
                    .then(() => {
                        router.push(appRoutes.HOME)
                    })
            )
            .catch((error) => {
                setFirstName('')
                setEmailAddress('')
                setPassword('')
                setError(error.message)
            })
    }

    return (
        <>
            <HeaderContainer>
                <FormContainer>
                    <FormTitle>Sign Up</FormTitle>
                    {error && <FormError>{error}</FormError>}

                    <FormBase onSubmit={handleSignup} method='POST'>
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
                        <FormSubmit
                            disabled={isInvalid}
                            type='submit'
                            data-testid='sign-up'
                        >
                            Sign Up
                        </FormSubmit>
                    </FormBase>

                    <FormText>
                        Already a user?{' '}
                        <FormLink href='/signin'>Sign in now</FormLink>
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
