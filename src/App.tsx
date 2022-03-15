import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Result, RootObject } from './types';
import CardList from './components/cardList';
 const ANIMATION_URL="https://embed.lottiefiles.com/animation/9916"



function App() {
const [state,setState]=React.useState<Array<Result>>([])
const [loading,setLoading]=React.useState<Boolean>(true)






async function http<T>(
  request: RequestInfo
): Promise<T> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}


useEffect(() => {
 FetchData()
}, [])


const FetchData = async () => {
try {
  
  const data = await http<RootObject>(
    "https://rickandmortyapi.com/api/character/"
  );
console.log(data.results)
  setState(data.results)
} catch (error) {
  
}finally{
  setLoading(false)
}
  
}


  return (
    <div className="App container">
     {loading?<div >loading...</div>:<CardList datas={state} />}
    </div>
  );
}

export default App;
