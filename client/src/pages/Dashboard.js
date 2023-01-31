import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import TinderCard from 'react-tinder-card';
import ChatContainer from '../components/ChatContainer';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [lastDirection, setLastDirection] = useState();

  const userId = cookies.userId;

  const getUser = async () => {
    try {
      const response = await axios.get('http://localhost:8000/user', {
        params: { userId },
      });
      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!');
  };

  return (
    <>
      {user && (
        <div className="dashboard">
          <ChatContainer user={user} />
          <div className="swipe-container">
            <div className="card-container">
              {/* {characters.map((character) => (
            <TinderCard
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div
                style={{ backgroundImage: 'url(' + character.url + ')' }}
                className="card"
              >
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))} */}
              <div className="swipe-info">
                {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
