'use client'

import { appRoutes } from 'app/routes'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
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
import localStorageHelper from 'src/helpers/LocalStorageHelper'
import { User } from 'src/types'

import { EMAIL_EXISTED } from '../constants'

export default function SignUp() {
    const router = useRouter()
    const userList: User[] = localStorageHelper.getUserList()

    const [firstName, setFirstName] = useState<string>('')
    const [emailAddress, setEmailAddress] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')

    const isInvalid = firstName === '' || password === '' || emailAddress === ''

    const handleSignup = () => {
        if (isInvalid) return

        const isUserExist: boolean = !!(
            userList &&
            userList.find((user: User) => user.emailAddress === emailAddress)
        )
        if (isUserExist) {
            setError(EMAIL_EXISTED)
            return
        }

        localStorageHelper.setUserList([
            ...userList,
            { firstName, emailAddress, password }
        ])
        return router.push(appRoutes.SIGN_IN)
    }

    return (
        <>
            <HeaderContainer>
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
            </HeaderContainer>
            <MainFooter />
        </>
    )
}
