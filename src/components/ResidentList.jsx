import { useEffect, useState } from "react"
import ResidentCard from "./ResidentCard"
import { paginationLogic } from "../constans/pagination"

const ResidentList = ({residents}) => {

  const [currentPage, setCurrentPage] = useState(1)

  const {pages, residentsInPage} = paginationLogic(currentPage, residents)

  useEffect(()=>{
    setCurrentPage(1)

  }, [residents])


  return (
   <section>
    <section className="grid grid-cols-[repeat(auto-fit,_280px)] justify-center gap-6 max-w-[300px] sm:max-w-[600px] mx-auto py-10">
       {
        residentsInPage.map((resident)=> <ResidentCard key={resident} residentEndpoint={resident}/>)
       }
    </section>

    {/* proceso para cada pagina */}
    <ul className="text-lg flex gap-3 justify-center flex-wrap pb-10" >
      {
        pages.map((page)=> (
          <li key={page}>
            <button className={`bg-black/20 text-green-500 p-3 hover:bg-black hover:rounded ${page === currentPage && "border-solid border-2 border-green-500"}`} onClick={()=> setCurrentPage(page)}>
              {page}
            </button>
          </li>
        ))
      }
    </ul>
   </section>
  )
}
export default ResidentList