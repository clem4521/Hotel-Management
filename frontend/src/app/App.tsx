import {BrowserRouter,Routes,Route} from "react-router";
import DashBoardPage from "../pages/DashboardPage";
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<DashBoardPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
