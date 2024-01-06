import { useContext } from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainPage from './components/MainPage'
import SingleMovie from './components/SingleMovie'

function App() {

  const urlSearch = 'https://www.omdbapi.com/?apikey=312d64ca&s=matrix'
  const urlID = 'https://www.omdbapi.com/?apikey=312d64ca&i=tt0133093'

  // const { data } = useContext(DataContext)

  return (
    <div className='app'>
      <BrowserRouter> {/* ENVUELVO SOLO A LO QUE QUIERO QUE TENGA ENLACES (ROUTES)*/}
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/movies/:id' element={<SingleMovie />} /> {/* PASA UN ID COMO PARAMETRO se accede como /movies/2323 */}
        </Routes>
      </BrowserRouter>

    </div>

  )
}

export default App
