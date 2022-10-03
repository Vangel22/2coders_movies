import { useEffect, useState } from "react";
import axios from "axios";
import env from "react-dotenv";
import { MovieOrganizer } from "../models/movie-organizer";

const useMovies = () => {
    
    const [data, setData] = useState<MovieOrganizer>();

    async function fetchPopularMovies () {
       const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${env.API_KEY}`); 
       return res.data;
    }

    useEffect(() => {
        fetchPopularMovies().then((res) => {
            setData(res);
        })
    },[]);

    return data;
}

export { useMovies };