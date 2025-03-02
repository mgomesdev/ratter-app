import { http, HttpResponse } from 'msw';
import { MovieResponseSchema } from '../schemas/MovieSchema';

const resp: MovieResponseSchema = {
    page: 1,
    results: [
        {
            adult: false,
            gender: 2,
            id: 1190668,
            known_for_department: 'Acting',
            name: 'Timothée Chalamet',
            original_name: 'Timothée Chalamet',
            popularity: 202.966,
            profile_path: '/BE2sdjpgsa2rNTFa66f7upkaOP.jpg',
            known_for: [
                {
                    backdrop_path: '/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg',
                    id: 438631,
                    title: 'Duna',
                    original_title: 'Dune',
                    overview:
                        'Em um futuro distante, planetas são comandados por casas nobres que fazem parte de um império feudal intergalático. Paul Atreides é um jovem cuja família toma o controle do planeta deserto Arrakis, também conhecido como Duna. A única fonte da especiaria Melange, a substância mais importante do cosmos, Arrakis se mostra ser um planeta nem um pouco fácil de governar.',
                    poster_path: '/obhGsx4PE9OzsVGtIfoLAIIWGNb.jpg',
                    media_type: 'movie',
                    adult: false,
                    original_language: 'en',
                    genre_ids: [878, 12],
                    popularity: 148.86,
                    release_date: '2021-09-15',
                    video: false,
                    vote_average: 7.783,
                    vote_count: 13237,
                },
                {
                    backdrop_path: '/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg',
                    id: 693134,
                    title: 'Duna: Parte Dois',
                    original_title: 'Dune: Part Two',
                    overview:
                        "A jornada de Paul Atreides continua. Ele está determinado a buscar vingança contra aqueles que destruíram sua família e seu lar. Com a ajuda de Chani e dos Fremen, ele embarca em uma jornada espiritual, mística e marcial. Se torna Muad'Dib, o líder messiânico dos Fremen, enquanto luta para evitar um futuro sombrio que ele testemunhou em visões. No entanto, suas ações inadvertidamente desencadeiam uma Guerra Santa em seu nome, que se espalha pelo universo conhecido. Enquanto enfrenta escolhas difíceis entre o amor por Chani e o destino de seu povo, Paul precisa usar suas habilidades e conhecimentos para evitar o terrível futuro que previu.",
                    poster_path: '/8LJJjLjAzAwXS40S5mx79PJ2jSs.jpg',
                    media_type: 'movie',
                    adult: false,
                    original_language: 'en',
                    genre_ids: [878, 12],
                    popularity: 204.453,
                    release_date: '2024-02-27',
                    video: false,
                    vote_average: 8.149,
                    vote_count: 6337,
                },
                {
                    backdrop_path: '/zvOJawrnmgK0sL293mOXOdLvTXQ.jpg',
                    id: 398818,
                    title: 'Me Chame Pelo Seu Nome',
                    original_title: 'Call Me by Your Name',
                    overview:
                        'O sensível e único filho da família americana com ascendência italiana e francesa Perlman, Elio está enfrentando outro verão preguiçoso na casa de seus pais na bela e lânguida paisagem italiana quando Oliver, um acadêmico que veio ajudar a pesquisa de seu pai, chega.',
                    poster_path: '/qnf5Onsk236CdE5Lff93IX69gHf.jpg',
                    media_type: 'movie',
                    adult: false,
                    original_language: 'en',
                    genre_ids: [10749, 18],
                    popularity: 68.889,
                    release_date: '2017-07-28',
                    video: false,
                    vote_average: 8.1,
                    vote_count: 12209,
                },
            ],
        },
    ],
    total_pages: 195197,
    total_results: 3903924,
};

export const handlers = [
    http.get(`${process.env.REACT_APP_TMDB_API_URL}/movie/popular`, ({ request }) => {
        const url = new URL(request.url);
        const language = url.searchParams.get('language');
        const page = url.searchParams.get('page');

        console.log(`interceptando: ${language} ${page}`);
        return HttpResponse.json<MovieResponseSchema>(resp);
    }),
];

export {};
