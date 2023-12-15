import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";

import {
  increaseCounter,
  decreaseCounter,
} from "./action/actions";

import { useSelector, useDispatch } from "react-redux";

import axios from 'axios';
import { useEffect } from 'react';
function App(props) {
  //state redux
  const dispatch = useDispatch();
  const newCount = useSelector((state) => { return state.counter.count });
  const handleIncrease = () => {
    //props.increaseCounter();
    dispatch(increaseCounter());
  }
  const fetchAllData = async () => {
    const res = await axios.get("http://localhost:8080/users/all");
    const data = res && res.data ? res.data : []
    console.log("check res", data);

  }
  useEffect(() => {
    fetchAllData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and Hoi Dan IT!</h1>

        <div>Count: {newCount}</div>

        <button onClick={() => handleIncrease()}>Increase Count</button>

        <button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button>
      </header>
    </div>
  );
}
//map state redux store to prop react
// const mapStateToProps = state => {
//   return {

//     //init name: count
//     //state redux
//     count: state.counter.count,
//   }
// }

// map dispatch redux to props react
// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(App)

export default (App);
