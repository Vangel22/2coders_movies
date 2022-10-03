import { useEffect, useState } from "react";
import axios from "axios";
import env from "react-dotenv";


import { Movies } from "../models/movies";

const useMovies = () => {
    
    const [data, setData] = useState<Movies>();

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