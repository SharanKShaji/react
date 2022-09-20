import { Route, Switch, BrowserRouter} from "react-router-dom";
import { AuthProvider } from "./components/auth";
// import { Login } from "./components/Login/Login";
import { RequireAuth } from "./components/RequireAuth";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/signup";



const App = () => {
  return (
    <Provider store={store}>
      
    <AuthProvider>
      <BrowserRouter>
        <div>
          <Switch>
          <Route exact path='/signin'>
              <Signup></Signup>
            </Route>
            <Route exact path='/'>
              <Login></Login>
            </Route>
            <Route  path='/home'>
            <RequireAuth><Home></Home></RequireAuth> 
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </AuthProvider>
    </Provider>
  );
};
export default App;
