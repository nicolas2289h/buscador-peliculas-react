import React from 'react'
import FormSearch from './FormSearch'
import Movies from './Movies'

const MainPage = () => {
    return (
        <div className='container text-center'>
            <FormSearch />
            <Movies />
        </div>
    )
}

export default MainPage