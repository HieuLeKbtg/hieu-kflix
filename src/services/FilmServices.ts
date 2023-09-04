// import 'server-only'

import { ResponseFilms, ResponseVideo } from 'src/types'

import { BaseServices } from './BaseServices'

class FilmServices extends BaseServices {
    public async getPopularFilms(): Promise<ResponseFilms> {
        return this.getRequest({
            api: `movie/popular?page=1&append_to_response=videos`
        })
    }

    public async getFilmKey(filmId: number): Promise<ResponseVideo> {
        return this.getRequest({
            api: `movie/${filmId}/videos`
        })
    }
}

export const filmServices: FilmServices = new FilmServices()
