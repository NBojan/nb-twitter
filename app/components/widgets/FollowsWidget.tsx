import axios from "axios";
import { FollowsContainer } from "..";
import { userApi } from "@/app/utils/helpingHand";

export interface followSuggestElement {
    name: {
        first: string;
        last: string;
    },
    login: {
        username: string;
    },
    picture: {
        thumbnail: string;
    }
}

const getSuggests = async () => {
    const response = await axios(userApi)
    .catch(err => console.log(err.response, "userApiError"));

    if(response && response.data) return response.data.results as followSuggestElement[];
    else return []
}

const FollowsWidget = async () => {
    const follows = await getSuggests();
    
    return (
      <div className="bg-widget py-4 rounded-xl sticky top-[80px]">
        <h4 className="px-4 font-semibold mb-6 theme-gray700-white">Who to follow?</h4>
        
        {follows.length > 0 ? (
          <FollowsContainer follows={follows} />
        ) : (
          <p className="px-4 theme-gray700-gray400">Sorry, couldn't find the suggestions.</p>
        )}
      </div>
    );
}
 
export default FollowsWidget;