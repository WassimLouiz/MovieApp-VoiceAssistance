import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from '../../components/SingleContent/SingleContent'
import './Trending.css'
import CustomPagination from "../../components/Pagination/Pagination";
import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';


const Trending = () => {

    const [page , setPage] = useState(1);
    const [content , setContent] = useState([]);

    const fetchTrending = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
    
        setContent(data.results);
    }
    
    useEffect(() => {
        fetchTrending();
        // eslint-disable-next-line
    },[page]);

    
	useEffect(() => {
		alanBtn({
			key: '5f178a875de9c3d87075930ffcbdfd682e956eca572e1d8b807a3e2338fdd0dc/stage',
			onCommand:function (commandData)  {
			 window.dispatchEvent( new CustomEvent(commandData.command , {detail: commandData.data}));
			}
		});
	  }, []);

    return (
        <div>
            <div className = 'trending'>
                {
                    content && content.map((c) => (<SingleContent key={c.id} id ={c.id} poster={c.poster_path} title = {c.title || c.name } date = {c.first_air_date || c.release_date} media_type = {c.media_type} vote_average = {c.vote_average} />))
                }
            </div>
            <CustomPagination setPage={setPage}/>
        </div>
    )
}

export default Trending;