import './App.css';
import {Route , Routes , BrowserRouter} from "react-router-dom"
import Accueil from './routes/accueil/accueil';
import Solution from './routes/solution/solution';
import Vote from './routes/vote/vote';
import Apropos from './routes/apropos/apropos';
import SignUP from './routes/signUP/signUP';
import SignIn from './routes/signIn/singIn';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Accueil/>} path='/'/>
          <Route element={<Solution/>} path='/Solution'/>
          <Route element={<Vote/>} path='/vote'/>
          <Route element={<Apropos/>} path='/apropos'/>
          <Route element={<SignUP/>} path='/signUp'/>
          <Route element={<SignIn/>} path='/signIn'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
