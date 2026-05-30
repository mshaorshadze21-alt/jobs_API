
import { useEffect, useState } from "react"
import Jobs from "./components/Jobs"


function App() {

  const [data, setData] = useState(null)
   
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
    <div>
      {data && data.map((job, i)=><Jobs key={i} data={job}/>)}

    </div>
  )
}

export default App
