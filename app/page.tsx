import React from 'react'
import {
    FeatureContainer,
    FeatureSubTitle,
    FeatureTitle,
    OptFormBreak,
    OptFormButton,
    OptFormContainer,
    OptFormInput,
    OptFormText
} from 'src/components'
import FaqsContainer from 'src/containers/faqs'
import MainFooter from 'src/containers/footer'
import HeaderContainer from 'src/containers/header'
import MainJumbotron from 'src/containers/jumbotron'

export default function Homepage() {
    return (
        <>
            <HeaderContainer>
                <FeatureContainer>
                    <FeatureTitle>
                        Unlimited films, TV programmes and more
                    </FeatureTitle>
                    <FeatureSubTitle>
                        Watch anywhere Cancel at any time
                    </FeatureSubTitle>
                    <OptFormContainer>
                        <OptFormInput placeholder='Email address' />
                        <OptFormButton>Try it now</OptFormButton>
                        <OptFormBreak />
                        <OptFormText>
                            Ready to watch? Enter your email to create or
                            restart your membership
                        </OptFormText>
                    </OptFormContainer>
                </FeatureContainer>
            </HeaderContainer>

            <MainJumbotron />
            <FaqsContainer />
            <MainFooter />
        </>
    )
}
