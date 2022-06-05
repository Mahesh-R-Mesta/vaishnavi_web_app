import React from "react";
import AdminMain from "./main";
import ThemeProvider from "../../ThemeProvider/themeProvider";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ApiRequest from "../../config/apiRequest";
import URL from '../../utils/urls';
import LoaderScreen from './../../utils/loadingScreen';
import { Navigate } from "react-router-dom";
const inits = {
  type: "rocket",
  value: "sdfsf",
};

const fun = (s = inits, a) => {
  if (a.type === "drawer") {
    console.log(`drawer log ${a.value} `);
  }
  return a;
};
const store = createStore(fun);
class AdminScreen extends React.Component {
  constructor(props){
    super(props);
   
    this.isValidAip = this.isValidAip.bind(this);
  }

  isValidAip = async() =>{
    const response = await ApiRequest.call('GET',URL.isLogin);
    console.log(response);
    if(response.data.isLoggedIn){
      this.setState({...this.state, isValid: true})
    } else {
      this.setState({...this.state,isLoaded: true})
    }
   
  }

  state ={isValid:false, isLoaded: false};

  componentDidMount(){
    this.isValidAip();
  }

  render() {
    return this.state.isValid ? (
      <Provider store={store}>
        <ThemeProvider>
          <AdminMain />
        </ThemeProvider>
      </Provider>
    ) : this.state.isLoaded ? (<Navigate to='/login' replace={true}/>) : (<LoaderScreen/>)  ;
  }
}

export default AdminScreen;
