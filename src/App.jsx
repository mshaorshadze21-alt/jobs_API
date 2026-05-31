
import { useEffect, useState } from "react"
import Jobs from "./components/Jobs"


function App() {

  const [data, setData] = useState(null)

  const [selectedCard, setSelectedCard] = useState(null)
   
  useEffect(()=>{
    async function fetching (){
      const response = await fetch('https://www.arbeitnow.com/api/job-board-api')
      const data = await response.json();
      
      setData(data.data)

      console.log(data.data[0])


    }

   fetching();
  }
  ,[])
  
  return (
    <div className="m-10">
      <ul className="grid grid-cols-3 gap-10">
      {data && data.map((job, i)=>{
        
        /*<li><Jobs key={i} data={job}/></li>*/

          if(selectedCard !== null && selectedCard !== i) {
            return (null);
          }
              return (
              <div className="flex flex-col gap-4">
                <li key={i} onClick={() => setSelectedCard(i)}>
                  <Jobs data={job} />
                </li>

                {selectedCard !==null && <button className="w-fit h-fit px-4 xy-2 bg-linear-to-br from-blue-600 to-blue-100 font-bold text-md rounded-md"
                onClick={()=>setSelectedCard(null)}
                >
                  GO BACK
                </button>   }

                

              </div>
            );
          }
        
        
        )}



      </ul>

    </div>
  )
}

export default App
