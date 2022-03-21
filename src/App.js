import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,

} from "react-router-dom";
import BehaviourA from './components/BehaviourA';
import BehaviourB from './components/BehaviourB';
import BehaviourC from './components/BehaviourC';
import BehaviourE from './components/BehaviourE';
import BehaviourD from './components/BehaviourD';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Eating" element={<BehaviourA />} />
          <Route path="/Talking" element={<BehaviourB />} />
          <Route path="/Thinking" element={<BehaviourC />} />
          <Route path="/Listening" element={<BehaviourD />} />
          <Route path="/Reading" element={<BehaviourE />} />
          <Route path="/auth" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
