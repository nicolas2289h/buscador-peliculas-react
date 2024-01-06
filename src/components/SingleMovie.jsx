import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom'
import { useEffect } from "react";

import noimage from "../assets/noimage.jpg"

const SingleMovie = () => {
    const { id } = useParams();
    const { isLoading, error, data } = useFetch(`&i=${id}`);

    if (isLoading) {
        return <div className="text-white text-center">Loading...</div>
    }

    const { Poster, Title, Plot, Year, Country, Director, Released, Runtime } = data;
    let image = Poster === "N/A" ? noimage : Poster;

    return (
        !isLoading ?
            <div className="text-center">
                <div className="single-movie d-flex gap-5 justify-content-center">
                    <img src={image} alt={Title} />
                    <div className="single-info text-white w-25">
                        <h2>{Title}</h2>
                        <p> {Plot}</p>
                        <p><strong>Country: </strong>{Country}</p>
                        <p><strong>Director: </strong>{Director}</p>
                        <p><strong>Released: </strong>{Released}</p>
                        <p><strong>Runtime: </strong>{Runtime}</p>
                        <p><strong>Year: </strong>{Year}</p>
                    </div>
                </div>
                <Link to='/'>
                    <button className="btn btn-primary mt-5">Back</button>
                </Link>
            </div>
            : ''
    );
}

export default SingleMovie;