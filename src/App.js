import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Sample from './components/sample';
import ClippedDrawer from './components/dashboard/sidebar';
import { WeatherReport } from './components/dashboard/weatherReport';
import DateRangeCalendarCalendarsProp from './components/dashboard/calendar';
import { Game } from './components/game/Game';
import { Login } from './components/login';

function App() {
  return (
    <div className="App">
      {/* <Sample></Sample> */}
      
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sidebar' element={<ClippedDrawer/>}/>
        <Route path='/weather' element={<WeatherReport/>}/>
        <Route path='/calendar' element={<DateRangeCalendarCalendarsProp/>}/>
        <Route path='/game' element={<Game/>}/>
      </Routes>
    </div>
  );
}

export default App;
