const Jobs = ({data}) => {

  return (
    <div>
        <h1>{data.company_name}</h1>
        <p>{data.created_at}</p>


    </div>
  )
}

export default Jobs