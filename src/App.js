import Carousel from './components/Carousel/Carousel';
import LoginBackground from './components/LoginBackground/LoginBackground';
import Navbar from './components/Navbar/Navbar';
import LoginCard from './components/LoginCard/LoginCard';
// import OtpCard from './components/OtpCard/OtpCard.jsx';
import HomePage from './components/HomePage/HomePage';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <LoginBackground>
                <LoginCard />
                {/* <OtpCard /> */}
              </LoginBackground>
            }
          />
          <Route
            path='home'
            element={
              <HomePage>
                <Carousel />
                <Navbar />
              </HomePage>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
