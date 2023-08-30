'use client'
import React, { createContext, useContext, useState } from 'react'
import styled from 'styled-components/macro'

export const CardTitle = styled.p`
    font-size: 24px;
    color: #e5e5e5;
    font-weight: bold;
    margin-left: 56px;
    margin-right: 56px;
    margin-top: 0;
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;

    > ${CardTitle} {
        @media (max-width: 1000px) {
            margin-left: 30px;
        }
    }

    &:last-of-type {
        margin-bottom: 0;
    }
`

export const CardGroup = styled.div<{
    flexDirection?: string
    alignItems?: string
    margin?: string
}>`
    display: flex;
    flex-direction: ${({ flexDirection }) =>
        flexDirection === 'row' ? 'row' : 'column'};
    ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
    ${({ margin }) => margin && `margin: ${margin}`};

    > ${CardContainer}:first-of-type {
        @media (min-width: 1100px) {
            margin-top: -100px;
        }
    }
`

export const CardSubTitle = styled.p`
    font-size: 12px;
    color: #fff;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;
    user-select: none;
    display: none;
`

export const CardText = styled.p`
    margin-top: 5px;
    font-size: 10px;
    color: #fff;
    margin-bottom: 0;
    user-select: none;
    display: none;
    line-height: normal;
`

export const CardEntities = styled.div`
    display: flex;
    flex-direction: row;
`

export const CardMeta = styled.div`
    display: none;
    position: absolute;
    bottom: 0;
    padding: 10px;
    background-color: #0000008f;
`

export const CardImage = styled.img`
    border: 0;
    width: 100%;
    max-width: 305px;
    cursor: pointer;
    height: auto;
    padding: 0;
    margin: 0;
`

export const CardItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 5px;
    position: relative;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.3);
        z-index: 99;
    }

    @media (min-width: 1200px) {
        &:hover ${CardMeta}, &:hover ${CardText}, &:hover ${CardSubTitle} {
            display: block;
            z-index: 100;
        }
    }

    &:first-of-type {
        margin-left: 56px;

        @media (max-width: 1000px) {
            margin-left: 30px;
        }
    }

    &:last-of-type {
        margin-right: 56px;

        @media (max-width: 1000px) {
            margin-right: 30px;
        }
    }
`

export const CardFeatureText = styled.p<{ fontWeight?: string }>`
    font-size: 18px;
    color: white;
    font-weight: ${({ fontWeight }) =>
        fontWeight === 'bold' ? 'bold' : 'normal'};
    margin: 0;

    @media (max-width: 600px) {
        line-height: 22px;
    }
`

export const CardFeature = styled.div<{ src: string }>`
    display: flex;
    flex-direction: row;
    background: url(${({ src }) => src});
    background-size: contain;
    position: relative;
    height: 360px;
    background-position-x: right;
    background-repeat: no-repeat;
    background-color: black;

    @media (max-width: 1000px) {
        height: auto;
        background-size: auto;

        ${CardTitle} {
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 10px;
        }
        ${CardFeatureText} {
            font-size: 14px;
        }
    }
`

export const CardFeatureTitle = styled(CardTitle)`
    margin-left: 0;
`

export const CardFeatureClose = styled.button`
    color: white;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    background-color: transparent;
    border: 0;

    img {
        filter: brightness(0) invert(1);
        width: 24px;
    }
`

export const CardContent = styled.div`
    margin: 56px;
    max-width: 500px;
    line-height: normal;

    @media (max-width: 1000px) {
        margin: 30px;
        max-width: none;
    }
`

export const CardMaturity = styled.div<{ rating: number }>`
    background-color: ${({ rating }) => (rating >= 15 ? '#f44336' : '#2f9600')};
    border-radius: 15px;
    width: 28px;
    line-height: 28px;
    text-align: center;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin-right: 10px;
    font-size: 12px;
`

const FeatureContext = createContext(null)

export function Card({ children, ...restProps }) {
    const [showFeature, setShowFeature] = useState(false)
    const [itemFeature, setItemFeature] = useState({})

    return (
        <FeatureContext.Provider
            value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
        >
            <CardContainer {...restProps}>{children}</CardContainer>
        </FeatureContext.Provider>
    )
}

export const MainCardItem = ({ item, children, ...restProps }) => {
    const { setShowFeature, setItemFeature } = useContext(FeatureContext)

    return (
        <CardItem
            onClick={() => {
                setItemFeature(item)
                setShowFeature(true)
            }}
            {...restProps}
        >
            {children}
        </CardItem>
    )
}

export const MainCardFeature = ({ children, category, ...restProps }) => {
    const { showFeature, itemFeature, setShowFeature } =
        useContext(FeatureContext)

    return showFeature ? (
        <CardFeature
            {...restProps}
            src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
        >
            <CardContent>
                <CardFeatureTitle>{itemFeature.title}</CardFeatureTitle>
                <CardFeatureText>{itemFeature.description}</CardFeatureText>
                <CardFeatureClose onClick={() => setShowFeature(false)}>
                    <img src='/images/icons/close.png' alt='Close' />
                </CardFeatureClose>

                <CardGroup
                    margin='30px 0'
                    flexDirection='row'
                    alignItems='center'
                >
                    <CardMaturity rating={itemFeature.maturity}>
                        {itemFeature.maturity < 12
                            ? 'PG'
                            : itemFeature.maturity}
                    </CardMaturity>
                    <CardFeatureText fontWeight='bold'>
                        {itemFeature.genre.charAt(0).toUpperCase() +
                            itemFeature.genre.slice(1)}
                    </CardFeatureText>
                </CardGroup>

                {children}
            </CardContent>
        </CardFeature>
    ) : null
}
