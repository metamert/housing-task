import * as React from 'react';
import { EpisodeDetailed, LocationDetailed, Result } from '../types';


export interface ICardProps {
    item: Result
}

export interface CardState {
    location: LocationDetailed,
    episode: EpisodeDetailed
}



async function http<T>(
    request: RequestInfo
  ): Promise<T> {
    const response = await fetch(request);
    const body = await response.json();
    return body;
  }
  


export default function App (props: ICardProps) {
    const [detailedData ,setDetailedData ] = React.useState<CardState>()
    const [loading,setLoading]=React.useState<Boolean>(true)
    const {item}=props
   



    React.useEffect(() => {
      FetchData()
       }, [])
       
       
       const FetchData = async () => {
       
       try {
             
         const locationData = await http<LocationDetailed>(
            item?.location.url
          );
          const episodeData =  await http<EpisodeDetailed>(
             item?.episode[0]
           );
         
       setDetailedData({location:locationData,episode:episodeData})
       } catch (error) {
           
           console.log(error)
       }finally{
           setLoading(false)
       }
       }
       

const {name,species}=item
//amount of recidence detailedData?.location.residents.length
//episode name

//name speices location name dimension amount of recidence
//name chapters


  return (
    <div className="cardContainer">
   
    <img src={item.image} alt="" className="cardMedia" />
      <div className="cardBody">
        
        <span className="cardAuthor subtle">{species}</span>
        <h2 className="cardTitle">{name}</h2>
        <span className="cardDescription subtle">Amount of recidence : {detailedData?.location.residents.length} <br/>
         Location : {detailedData?.location.name}   

        
        </span>
     
        <div className="cardRead">{detailedData?.episode.episode}</div>
     
      </div>
     
    
    <div className="cardShadow"></div>
  </div>
  );
}


