import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import UserRouter from "./UserRouter"
function App() {
  return (
    <BrowserRouter>
      {/* <TopHeaderNavigator cart={cart}/> */}
      <UserRouter/>
     
    </BrowserRouter>
  );
}

export default App;
