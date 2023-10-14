
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { getRandomNumber } from './utils/random'
import Location from './components/Location';
import ResidentList from './components/ResidentList';

function App() {

  const [location, setLocation] = useState(null);

  useEffect(()=>{
    axios.get(`https://rickandmortyapi.com/api/location/${getRandomNumber(126)}`)
    .then(({data}) => setLocation(data))
    .catch((err) => console.log(err))

  },[])
  

  return (
    <main className='px-4 h-screen bg-black text-white grid gap-20 bg-[url("/fondofondo.jpg")] bg-cover bg-center overflow-y-auto'>
       
      <Location location={location} setLocation={setLocation}/>
      <ResidentList residents={location?.residents ?? []}/>
    </main>
  )
}

export default App
