import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import './styles/home.scss'

function Home(props) {

    const [user,setUser] = useState('');
    
    useEffect(()=>{
       if(props.location.state && props.location.state.user){
           setUser(props.location.state.user)
       }
    },[])

    return (<div id='home'>
        {user ?
        <>
            <div style={{display:'flex',flexDirection:'column' ,justifyContent:'center',alignItems:'center',height:'300px'}}>
                <h2>Welcome! {user.email}</h2>
            </div>
        </> : 
        <>
            <div style={{display:'flex',flexDirection:'column' ,justifyContent:'center',alignItems:'center',height:'300px'}}>
                <h2>Welcome!</h2>  
                <Link to='/login'>
                    Click here to Login!
                </Link>
          </div>
        </>}
    </div>);
}

export default Home;
