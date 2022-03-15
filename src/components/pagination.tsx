import * as React from "react";
import { Info } from "../types";

export interface IProps {
  info: Info;
  pageNumber: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export interface CheckPageNumber {
  lastPage: Boolean;
  lastPageArea: Boolean;
  firstPageArea: Boolean;
  firstPage: Boolean;
}

export default function App(props: IProps) {
  const checkNumber = (): CheckPageNumber => {
    return {
      lastPageArea: pageNumber === info.pages - 1,
      firstPageArea: pageNumber === 2,
      firstPage: pageNumber === 1,
      lastPage: pageNumber === info.pages,
    };
  };

  const { info, pageNumber, setPage } = props;

  const { firstPage, firstPageArea, lastPage, lastPageArea } = checkNumber();
  console.log(lastPageArea);
  console.log(pageNumber);
  return (
    <div>
      <div className="pagination:container">
        {!firstPage && (
          <div
            className="pagination:number"
            onClick={() => setPage(pageNumber - 1)}
          >
            previous
          </div>
        )}

        {!(firstPageArea || firstPage) && (
          <div
            className="pagination:number"
            onClick={() => setPage(pageNumber - 1)}
          >
            {pageNumber - 1}
          </div>
        )}

        <div className="pagination:number active">{pageNumber}</div>

        {!(lastPageArea || lastPage) && (
          <div
            className="pagination:number"
            onClick={() => setPage(pageNumber + 1)}
          >
            {pageNumber + 1}
          </div>
        )}
        {!lastPage && (
          <div
            className="pagination:number"
            onClick={() => setPage(info.pages)}
          >
            {info.pages}
          </div>
        )}
        {!lastPage && (
          <div
            className="pagination:number "
            onClick={() => setPage(pageNumber + 1)}
          >
            next
          </div>
        )}
      </div>
    </div>
  );
}
