import axios from "axios";

const request = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params:{
        api_key:"d3a6cf8bd2ac1f2be73c791ce02bf2a4",
        language:"ko-KR"
    }
});

export const movieApi = {
    nowPlaying: () => request.get("/movie/now_playing"),
    popular : () => request.get("/movie/popular"),
    upComing: () => request.get("/movie/upcoming"),
    movieDetail: (id) => request.get(`/movie/${id}`,{
        params: {append_to_response : "videos"},
    }),
    search: (keyword) => request.get("/search/movie",{
        params:{
            query: keyword,
        }
    })
}