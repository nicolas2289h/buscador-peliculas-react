import { useContext } from "react";
import { useState } from "react";
import { DataContext } from "../context/DataContext";

const FormSearch = () => {
    const [title, setTitle] = useState("")
    const {setQuery, error} = useContext(DataContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('title: ', title);
        setQuery(title); 
    }

    return ( 
        <div className="form-search form-control">
            <h2>Movie Search</h2>
            <form onSubmit={ handleSubmit } className="d-flex justify-content-center">
                <input type="text" placeholder="Title..." onChange={e=>setTitle(e.target.value)} className="p-1 me-2"/>
                <input type="submit" value="Search" className="btn btn-primary" />
            </form>
            { error && <p className="error">The Movies doesn't exist! </p> }
        </div>
    );
}
 
export default FormSearch;