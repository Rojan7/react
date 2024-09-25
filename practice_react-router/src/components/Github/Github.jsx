
import { useLoaderData } from 'react-router-dom'

 function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect (()=>{
    //     fetch('https://api.github.com/users/Rojan7')
    //     .then(res => res.json())
    //     .then (data =>{setData(data)})


    // },[])
    

    return (
        <>
         <div>followers:{data.followers}</div>
         <img src={data.avatar_url} alt="" width={300} />
            
        </>
    )
}
export default Github

export const githubInfoLoader = async ()=>
{
 const response = await fetch ('https://api.github.com/users/Rojan7')
 return response.json()
}




