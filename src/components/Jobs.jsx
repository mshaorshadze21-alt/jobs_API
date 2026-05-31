import { useState } from "react"

const Jobs = ({data, selectedCard}) => {

  const [showMore, setShowMore] = useState (false);

  const shortDescription = data.description.length > 200 ? data.description.slice (0, 200) + "..." : data.description

  return (
    <div className="bg-linear-to-br from-blue-600 to-blue-100 w-100 h-fit p-4 rounded-2xl flex flex-col items-start gap-2">
        <h1 className="text-xl font-bold">{data.company_name}</h1>
        <h2>{data.title}</h2>
        <p>{data.remote? "Remote job" : "On-site job"}</p>
        {/* <p className="font-sm text-gray-700">see the link below</p> */}
        

        <div className="w-full h-fit">
          <p className="font-medium text-lg">Description</p>
          <div dangerouslySetInnerHTML={{ __html: showMore? data.description : shortDescription }} />

          <button onClick={()=> setShowMore(!showMore)}>
            {showMore? "See Less" : "See More"}
           
          </button>
        </div>
        {/* {showMore && <a href="{data.url}"></a>} */}

        <a href={data.url} target="_blank">Find Jobs in Germany on Arbeitnow</a>

        {/* {selectedCard == null && setShowMore(false)}
         */}

    </div>
  )
}

export default Jobs