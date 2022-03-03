import React, {useState,useEffect} from "react";
import Preloader from "../Preloader/Preloader";

const About = () => {
  const [checkabout,setCheckabout] = useState(true);

    useEffect(()=>{
        // console.log("Sponsors");
        setTimeout(()=>{
            setCheckabout(false)
        },2000)
    },[])

  return (
    <>
    {checkabout ? <Preloader/> :
    <div>
      <h1>About</h1>
    </div>
  }
    </>
  );
};

export default About;
