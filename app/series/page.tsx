import MainFooter from 'src/containers/footer'
import SlideRows from 'src/containers/SlideRows'
import { configServices, genreServices, seriesServices } from 'src/services'
import {
    ResponseConfiguration,
    ResponseGenres,
    ResponseSeries
} from 'src/types'

import AuthHeader from '@/containers/header/authHeader'

const Series = async () => {
    const responseSeriesResult: ResponseSeries =
        await seriesServices.getPopularSeries()
    const genreResult: ResponseGenres = await genreServices.getGenreTvList()

    const configResult: ResponseConfiguration = await configServices.getDetail()

    const seriesList = responseSeriesResult?.results?.map((film) => {
        return {
            id: film.id,
            title: film.name,
            description: film.overview,
            backdrop_path: film.backdrop_path,
            poster_path: film.poster_path,
            genres: genreResult.genres.filter((item) =>
                film.genre_ids.includes(item.id)
            )
        }
    })

    return (
        <>
            <AuthHeader />

            <SlideRows
                category='series'
                imageConfigs={configResult.images}
                data={seriesList}
            />
            <MainFooter />
        </>
    )
}

export default Series
