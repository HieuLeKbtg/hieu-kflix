import React from 'react'
import {
    AccordionBody,
    AccordionContainer,
    AccordionFrame,
    AccordionHeader,
    AccordionItem,
    AccordionTitle
} from 'src/components/accordion'
import {
    OptFormBreak,
    OptFormButton,
    OptFormContainer,
    OptFormInput,
    OptFormText
} from 'src/components/opt-form'
import { faqData } from 'src/fixtures'

export default function FaqsContainer() {
    return (
        <AccordionContainer>
            <AccordionTitle>Frequently Asked Questions</AccordionTitle>
            <AccordionFrame>
                {faqData.map((item) => (
                    <AccordionItem key={item.id}>
                        <AccordionHeader>{item.header}</AccordionHeader>
                        <AccordionBody>{item.body}</AccordionBody>
                    </AccordionItem>
                ))}
            </AccordionFrame>

            <OptFormContainer>
                <OptFormInput placeholder='Email address' />
                <OptFormButton>Try it now</OptFormButton>
                <OptFormBreak />
                <OptFormText>
                    Ready to watch? Enter your email to create or restart your
                    membership
                </OptFormText>
            </OptFormContainer>
        </AccordionContainer>
    )
}
