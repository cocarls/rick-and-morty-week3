import { IconSearch } from "@tabler/icons-react"
import axios from "axios";

const Location = ({location, setLocation}) => {
 
 const handleSubmit = (e) => {
   e.preventDefault()
   const idLocation = e.target.idLocation.value

   axios
     .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
     .then(({data})=> setLocation(data))
     .catch((err)=> console.log(err))
 }   
   
  return (
   <section className="grid justify-center">

     {/* <div className="overflow-hidden">
      <img src="" alt="" />
     </div> */}
      <div className='grid justify-center items-center relative mb-16'>
        <img className='w-80 ' src="/rodar.png" alt="" />
        <img  className='w-96 absolute left-1/2 -translate-x-1/2' src="/logorick.png" alt="" />
      </div>
      
    <div className="grid justify-center">
    <form onSubmit={handleSubmit} className="flex mb-10  border-solid border-2 border-green-500 justify-center w-[320px] max-sm:w-[280px] ">
       <input placeholder="Type a location Id..." name="idLocation" className="text- bg-black/10 flex p-2" type="number" required/>
       <button type="submit" className="flex gap-2 items-center"> 
       <IconSearch className="" size={18}/> </button>
    </form>
    </div>

    <div className=" text-green-500 font-serif sm:hidden grid justify-center">
      <span>!Wellcome to the crazy universe!</span>
    </div>

    {/* location info */}

    
    <section className="max-sm:hidden border-solid border-2 border-green-500 p-5 grid gap-3 ">
           <div className="flex justify-center">
              <h3 className="font-serif text-[#8EFF8B]" > !welcome to {location?.name}!</h3>
           </div>
       
        
        <ul className=" ">
          <div className="flex gap-5">
            <li className="font-serif text-[#938686]">Type: {location?.type}</li>
            <li className="font-serif text-[#938686]">Dimension: {location?.dimension}</li>
            <li className="font-serif text-[#938686]">Population: {location?.residents.length}</li>
          </div>
            
        </ul>
        
        
    </section>
   </section>
  )
}
export default Location