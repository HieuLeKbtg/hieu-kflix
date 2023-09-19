import React from 'react'
import {
    configServices,
    filmServices,
    FilmStates,
    genreServices,
    ResponseConfiguration,
    ResponseGenres,
    searchServices,
    SearchStates,
    seriesServices,
    SeriesStates
} from 'src'

import { MainFooter } from '@/containers/footer'
import AuthHeader from '@/containers/header/authHeader'
import { SlideRows } from '@/containers/SlideRows'

type BrowseContainerProps = {
    searchParams: Record<PropertyKey, string>
}

const BrowseContainer = async (props: BrowseContainerProps) => {
    const { searchParams } = props

    const genreResult: ResponseGenres = await genreServices.getGenreTvList()
    const seriesList: SeriesStates[] = await seriesServices.getPopularSeries(
        genreResult.genres
    )

    const filmList: FilmStates[] = await filmServices.getPopularFilms(
        genreResult.genres
    )

    const searchedMultiList: SearchStates[] = await searchServices.searchMulti(
        searchParams?.search ?? '',
        genreResult.genres
    )

    const configResult: ResponseConfiguration = await configServices.getDetail()

    return (
        <>
            <AuthHeader />

            {searchedMultiList.length ? (
                <SlideRows
                    category='multi'
                    imageConfigs={configResult.images}
                    dataOnBrowse={searchedMultiList}
                />
            ) : (
                <>
                    <h1 style={{ color: '#fff', paddingLeft: '36px' }}>
                        Series List
                    </h1>
                    <SlideRows
                        category='series'
                        imageConfigs={configResult.images}
                        data={seriesList.filter((item, index) => index <= 15)}
                    />

                    <h1 style={{ color: '#fff', paddingLeft: '36px' }}>
                        Tv List
                    </h1>
                    <SlideRows
                        category='films'
                        imageConfigs={configResult.images}
                        data={filmList.filter((item, index) => index <= 15)}
                    />
                </>
            )}

            <MainFooter />
        </>
    )
}

export default BrowseContainer
