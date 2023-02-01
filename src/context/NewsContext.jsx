import axios from "axios";
import { createContext, useState, useEffect} from "react";



export const NewsContext = createContext()

const NewsContextProvider = ({ children }) => {

    const [allNews, setallNews] = useState([])

    useEffect(() => {
      axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=41d6a5347a1f449490560ba2fbea6d1b')
      .then((response)=>setallNews(response.data.articles))

    }, [])
    
    /* console.log(allNews) */

    const value = {
        allNews,

    }

    return(
        <NewsContext.Provider value={value}>
         {children}   
        </NewsContext.Provider>
    )
}

export default NewsContextProvider