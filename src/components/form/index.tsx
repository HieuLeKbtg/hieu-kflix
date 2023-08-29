import { LinkProps } from 'next/link'
import React, { HTMLAttributes, ReactNode } from 'react'

import {
    Base,
    Container,
    Error,
    Input,
    Submit,
    Text,
    TextSmall,
    Title
} from './styles/form'

type FormProps<T> = T & { children?: ReactNode | ReactNode[] }
export default function Form({
    children,
    ...restProps
}: FormProps<HTMLAttributes<HTMLDivElement>>) {
    return <Container {...restProps}>{children}</Container>
}

Form.Error = function FormError({
    children,
    ...restProps
}: FormProps<HTMLAttributes<HTMLDivElement>>) {
    return <Error {...restProps}>{children}</Error>
}

Form.Base = function FormBase({
    children,
    ...restProps
}: FormProps<HTMLAttributes<HTMLFormElement> & { method: string }>) {
    return <Base {...restProps}>{children}</Base>
}

Form.Title = function FormTitle({
    children,
    ...restProps
}: FormProps<HTMLAttributes<HTMLHeadingElement>>) {
    return <Title {...restProps}>{children}</Title>
}

Form.Text = function FormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Form.TextSmall = function FormTextSmall({
    children,
    ...restProps
}: FormProps<HTMLAttributes<HTMLParagraphElement>>) {
    return <TextSmall {...restProps}>{children}</TextSmall>
}

Form.Link = function FormLink({
    children,
    ...restProps
}: FormProps<LinkProps>) {
    return <FormLink {...restProps}>{children}</FormLink>
}

Form.Input = function FormInput({
    children,
    ...restProps
}: FormProps<
    HTMLAttributes<HTMLInputElement> & {
        value: string
        type?: string
        autoComplete?: string
    }
>) {
    return <Input {...restProps}>{children}</Input>
}

Form.Submit = function FormSubmit({
    children,
    ...restProps
}: FormProps<
    HTMLAttributes<HTMLButtonElement> & {
        disabled: boolean
        type: 'button' | 'submit' | 'reset'
    }
>) {
    return <Submit {...restProps}>{children}</Submit>
}
