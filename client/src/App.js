import './App.css';
import Login from './login'
import Dashboard from './dashboard';

const code = new URLSearchParams(window.location.search).get("code")

function App() {
  return code ? <Dashboard code ={code}/> :<Login/>

  // return <Login/>
}

export default App;
