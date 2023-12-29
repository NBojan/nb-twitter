import axios from "axios";
import { NewsContainer } from "..";
import { newsApi } from "@/app/utils/helpingHand";

export interface newsElement {
    url: string;
    urlToImage: string;
    title: string;
    source: {
        name: string;
    }
}

const getNews = async () => {
    const response = await axios(newsApi)
    .catch(err => console.log(err.response, "newsApiError"));

    if(response && response.data) return response.data.articles as newsElement[]
    else return []
}

const NewsWidget = async () => {
    const news = await getNews();
    
    return (
      <div className="bg-widget py-4 rounded-xl mb-6">
        <h4 className="px-4 mb-6 font-semibold theme-gray700-white">What's happening?</h4>
        
        {news.length > 0 ? (
          <NewsContainer news={news} />
        ) : (
          <p className="px-4 theme-gray700-gray400">Sorry, couldn't find the news.</p>
        )}
      </div>
    );
}
 
export default NewsWidget;