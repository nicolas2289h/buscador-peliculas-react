import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import ItemMovie from "./ItemMovie";

const Movies = () => {
    const { isLoading, data } = useContext(DataContext);

    return ( 
        <div className="movies-content d-flex flex-wrap gap-5 justify-content-center pb-4">
            {
                !isLoading ?
                    data.map(item => (
                        <ItemMovie 
                        key={item.imdbID} 
                        id={item.imdbID} 
                        type={item.Type} 
                        title={item.Title} 
                        poster={item.Poster} 
                        year={item.Year}
                        />
                    ))
                : <div className="text-white text-center">Loading...</div>
            }
        </div>
    );
}
 
export default Movies;