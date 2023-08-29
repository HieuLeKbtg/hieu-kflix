'use client'

import { appRoutes } from 'app/routes'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'
import { Form } from 'src/components'
import { FooterContainer } from 'src/containers/footer'
import { HeaderContainer } from 'src/containers/header'
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
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && (
                        <Form.Error data-testid='error'>{error}</Form.Error>
                    )}

                    <Form.Base onSubmit={handleSignin} method='POST'>
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
                            data-testid='sign-in'
                        >
                            Sign In
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        New to Netflix?{' '}
                        <Form.Link href='/signup'>Sign up now.</Form.Link>
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
