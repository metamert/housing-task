import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Result, RootObject } from './types';
import CardList from './components/cardList';




function App() {
const [state,setState]=React.useState<Array<Result>>([])






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

  
  const data = await http<RootObject>(
    "https://rickandmortyapi.com/api/character/?limit=10"
  );

  setState(data.results)
}


  return (
    <div className="App container">
     <CardList datas={state} />
    </div>
  );
}

export default App;
