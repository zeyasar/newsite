import axios from "axios";
import { createContext, useState, useEffect} from "react";



export const NewsContext = createContext()
const apiKey = process.env.REACT_APP_apiKey

const NewsContextProvider = ({ children }) => {

    const [allNews, setAllNews] = useState([])
    const [categoryData, setCategoryData] = useState([])
    

    const getAllNews = async () => {
        const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=tr&apiKey=${apiKey}`);
        setAllNews(data.articles);
    }
    useEffect(() => {
      getAllNews()
    }, [])
    
    /* console.log(allNews) */

    function getCategoryNews(category) {
        axios.get(`https://newsapi.org/v2/top-headlines?country=tr&apiKey=${apiKey}&category=${category}`)
        .then((response)=>setCategoryData(response.data.articles))
        .catch((error)=>console.log(error)) 
    }

    const value = {
        allNews,
        getCategoryNews,
        categoryData,
    }

    return(
        <NewsContext.Provider value={value}>
         {children}   
        </NewsContext.Provider>
    )
}

export default NewsContextProvider