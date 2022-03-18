import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="user-dashboard">
      <h1>Hello, Ashish Kumar</h1>
      <div className="row_dbHome">
        <div className="col-xs-12 gutter widthAdjust">
          <div className="welcome-text">
            <div className="text-justify">
              <h2>
                Note: Since we allow only college registration, so you're
                supposed to register for IIT. In case you want someone else to
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
                You've registered for 32 events. Click{' '}
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
