import { ResponseListType } from './general'
import { Genres } from './genres'

export type Series = {
    backdrop_path: string
    first_air_date: string
    genre_ids: number[]
    id: number
    name: string
    origin_country: string[]
    original_language: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
}

export type SeriesStates = {
    id: number
    title: string
    description: string
    backdrop_path: string
    poster_path: string
    genres: Genres[]
}

export type ResponseSeries = ResponseListType<Series>
