import { client } from "@/sanity/lib/client"
import { STARTUPS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries"
import StartupCard, { StartupCardType } from "./StartupCard"

const UserStartups = async ({id} : {id: string}) => {

    const startups = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, {id})
    console.log(startups)
  return (
    <>
        {startups.length > 0 ? (startups.map((startups: StartupCardType) =>(
            <StartupCard key={startups._id} post={startups}/> 
        ))): 
        (
            <p className="no-result">No post yet</p>
        )
        }
    </>
  )
}
export default UserStartups