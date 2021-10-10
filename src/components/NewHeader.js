import { Link } from 'react-router-dom';
import './Header.css'
import logo from './logo.png';
import { getAuth, signOut } from "firebase/auth";


function NewHeader(props) {
   const title = 'الركشة عليك و الفيلم علينا';

  function SigningOut() {
        const auth = getAuth();
        signOut(auth).then(() => {
          console.log("Signed Out");
          
    }).catch((error) => {
     // An error happened.
   });}

   return  (
   <div className='lmj-banner'>
     <div onClick={() => window.scroll(0,0)} > <img src={logo} alt='الركشة عليك و الفيلم علينا' className='lmj-logo' /> </div> 
     <div onClick={() => window.scroll(0,0)}> <h1 className='lmg-title'>{title} </h1></div>
     
     <div className="sign-in-up">
        <Link to='/' onClick={SigningOut, ()=>{props.onConnected(false)}}>LogOut</Link> 
     </div>
   </div>
   );
}
export default NewHeader;