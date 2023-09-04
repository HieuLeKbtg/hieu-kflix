import 'server-only'

import { ResponseFilms } from 'src/types/films'

import { BaseServices } from './BaseServices'

// Search API: `https://api.themoviedb.org/3/search/multi?api_key=""&query=""`

class FilmServices extends BaseServices {
    // public async getFilms() {
    //     return this.getRequest({
    //         api: `movie/changes?page=1`
    //     })
    // }

    public async getPopularFilms(): Promise<ResponseFilms> {
        return this.getRequest({
            api: `movie/popular?page=1`
        })
    }
}

export const filmServices: FilmServices = new FilmServices()
