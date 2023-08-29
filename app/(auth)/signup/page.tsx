'use client'

import { appRoutes } from 'app/routes'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'
import { Form } from 'src/components'
import { FooterContainer } from 'src/containers/footer'
import { HeaderContainer } from 'src/containers/header'
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
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignup} method='POST'>
                        <Form.Input
                            placeholder='First name'
                            value={firstName}
                            onChange={({ target }) =>
                                setFirstName((target as HTMLInputElement).value)
                            }
                        />
                        <Form.Input
                            placeholder='Email address'
                            value={emailAddress}
                            onChange={({ target }) =>
                                setEmailAddress(
                                    (target as HTMLInputElement).value
                                )
                            }
                        />
                        <Form.Input
                            type='password'
                            value={password}
                            autoComplete='off'
                            placeholder='Password'
                            onChange={({ target }) =>
                                setPassword((target as HTMLInputElement).value)
                            }
                        />
                        <Form.Submit
                            disabled={isInvalid}
                            type='submit'
                            data-testid='sign-up'
                        >
                            Sign Up
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        Already a user?{' '}
                        <Form.Link to='/signin'>Sign in now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure
                        you're not a bot. Learn more.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}
