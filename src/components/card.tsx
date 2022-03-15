import * as React from 'react';
import { Result } from '../types';

export interface ICardProps {
    item: Result
}

export default function App (props: ICardProps) {
    const {item}=props
  return (
    <div key={item.id} className="cardContainer">
          <div className="cardImage">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="cardContent">
            <div className="section">
           
                <h2>{item.name}</h2>
              
              <span className="status">
                <span className="status__icon"></span> Dead - Human
              </span>
            </div>
            <div className="section">
              <span className="text-gray">Last known location:</span>
             
                Citadel of Ricks
          
            </div>
            <div className="section">
              <span className="text-gray">First seen in:</span>
              
                The Ricklantis Mixup
              
            </div>
          </div>
        </div>
  );
}
