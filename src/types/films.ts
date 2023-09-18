import { ResponseListType } from './general'
import { Genres } from './genres'

export type Film = {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export type FilmStates = {
    id: number
    title: string
    description: string
    backdrop_path: string
    poster_path: string
    genres: Genres[]
}

export type ResponseFilms = ResponseListType<Film>
