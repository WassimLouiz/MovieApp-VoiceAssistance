import {img_300, unavailable} from "../../Config/Config";
import './SingleContent.css';
import {Badge} from "@material-ui/core";
import TransitionsModal from "../Modal/Model";


const SingleContent = ({
    id,
    poster, 
    title,
    date,
    media_type,
    vote_average,
}) => {
    return (
    <TransitionsModal media_type={media_type} id={id}>
        <Badge badgeContent={vote_average} color={vote_average>6? "primary":"secondary"} />
        <img className ="poster" src={ poster? `${img_300}/${poster}` : unavailable} alt = {title} />
        <b className="title">{title}</b>
        <span lassName="subTitle">{media_type ==="tv" ? "TV Series" :  "Movie"} :    {date} </span>
        
    </TransitionsModal> )
};
export default SingleContent;