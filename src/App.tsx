import React, { useEffect, useState } from "react";
import logo from "./logo.svg";

import { Info, Result, RootObject } from "./types";
import CardList from "./components/cardList";
import Pagination from "./components/pagination";

const ANIMATION_URL = "https://embed.lottiefiles.com/animation/9916";

function App() {
  const [state, setState] = useState<Array<Result>>([]);
  const [page, setPage] = useState<number>(1);
  const [info, setInfo] = useState<Info>({
    count: 0,
    pages: 48,
    next: "",
    prev: "",
  });
  const [loading, setLoading] = useState<Boolean>(true);

  async function http<T>(request: RequestInfo): Promise<T> {
    const response = await fetch(request);
    const body = await response.json();
    return body;
  }

  useEffect(() => {
    FetchData();
  }, [page]);

  const FetchData = async () => {
    try {
      const data = await http<RootObject>(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      setInfo(data.info);
      setState(data.results);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App container">
      <Pagination info={info} pageNumber={page} setPage={setPage}/>
      {loading ? <div>loading...</div> : <CardList datas={state} />}
    </div>
  );
}

export default App;
