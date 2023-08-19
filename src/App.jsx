import axios from 'axios';
import './App.css'
import Navbar from './components/Navbar';
import {useDispatch, useSelector} from 'react-redux';
import  addData  from "./reducers/phoneReducer";
import Data from "./pages/Data";
import { useEffect } from "react";
import { getMobileList } from './services/mobileAction';

function App() {
 const dispatch = useDispatch();
 const apiData = useSelector((state) => state.phoneReducer.phoneList);
  // async function getApi(){
  //   const res = await  axios.get('https://dummyjson.com/products');
  //   const data =  await res.data.products;
  //   dispatch(addData(data))
  // }
 console.log(apiData, 'Api called');
useEffect(() => {
  console.log('use Effect called');
   dispatch( getMobileList())
},[])
  return (
    <div className="App">
        <Navbar />
        <Data apiData = {apiData} />
  </div>
  )
}

export default App