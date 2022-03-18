import React,{ useState,useEffect} from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Home = () => {
  const token = localStorage.getItem('token');
  console.log('token',token);
  const baseUrl = "https://api.spardha.co.in";

  const [user,setUser] = useState('');
  const [numevents,setNumEvents] = useState('10');

  useEffect(() => {
    axios.get(`${baseUrl}/auth/update/`,{
      headers: {
        'Authorization': `Token ${token}`
      }
    }).then(res => {
      console.log("user data=",res.data);
      setUser(res.data);
      console.log('user',user);
    }).catch(err => {
      console.log("error=",err);
    })
    
    axios.get(`${baseUrl}/teams/`,{
      headers: {
        'Authorization': `Token ${token}`
      }
    }).then(res => {
      // console.log("numevents data=",res.data);
      setNumEvents(res.data.length);
      // console.log('numevents',numevents);
    }).catch(err => {
      console.log("error=",err);
    })
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  const a=user["email"];
  console.log('a=',a);
  localStorage.setItem('College_Rep',a);


  return (
    <div className="user-dashboard">
      <h1>Hello, {user.name}</h1>
      <div className="row_dbHome">
        <div className="col-xs-12 gutter widthAdjust">
          <div className="welcome-text">
            <div className="text-justify">
              <h2>
                Note: Since we allow only college registration, so you're
                supposed to register for {user.institution}. In case you want someone else to
                register for your college, you need to first delete your account
                in{' '}
                <u>
                  <a href="/dashboard/profile">User Profile</a>
                </u>{' '}
                section, before another user can create an account with same
                college name.
              </h2>
            </div>
          </div>
        </div>
        <div className="col-xs-12 gutter widthAdjust">
          <div className="welcome-text">
            <div className="text-justify">
              <h2>
                You've registered for {numevents} events. Click{' '}
                <u>
                  <a href="/dashboard/registration">here</a>
                </u>{' '}
                to modify or add events.
              </h2>
            </div>
          </div>
        </div>
        <div className="col-xs-12 gutter widthAdjust">
          <div className="welcome-text">
            <div className="text-justify">
              <h2>
                Please read the{' '}
                <u>
                  <a href="/pdf/RuleBook.pdf" target="_blank">
                    Rule Book
                  </a>
                </u>{' '}
                before registering for events.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
