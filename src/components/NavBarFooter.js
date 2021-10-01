import React ,{useEffect} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MovieIcon from '@mui/icons-material/Movie';
import SeriesIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import './NavBarFooter.css'
import { useHistory } from 'react-router';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const history = useHistory();

    useEffect(() => {
        if (value ===0) history.push("/");
        if (value ===1) history.push("/Movies");
        if (value ===2) history.push("/Series");
        if (value ===3) history.push("/Search");

    },[value,history]);

  return (
    <Box sx={{  
        width:'100%',
        position:'fixed',
        bottom:0,
        zIndex: 100}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction style={{color:"black"}} label="Trending" icon={<WhatshotIcon />}/>
        <BottomNavigationAction style={{color:"black"}} label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction style={{color:"black"}} label="TV Series" icon={<SeriesIcon />} />
        <BottomNavigationAction style={{color:"black"}} label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}