import * as React from 'react';
import { EpisodeDetailed, LocationDetailed, Result } from '../types';
const ANIMATION_URL="https://assets7.lottiefiles.com/packages/lf20_WXXDFD.json"
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
       



  return (
    <div key={item.id} className="cardContainer">
          <div className="cardImage">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="cardContent">
            <div className="section">
           
                <h2>{item.name}</h2>
              
              <span className="status">
                <span className="status__icon"></span> {item.species}
              </span>
            </div>
            {loading?<div>loading....</div>:[<div className="section">
              <span className="text-gray">Last known location:</span>
          {detailedData?.location.name}- {detailedData?.location.type}
          
            </div>,
            <div className="section">
              <span className="text-gray">First seen in:</span>
              {detailedData?.episode.episode}-{detailedData?.episode.name}
              
            </div>]}
          </div>
        </div>
  );
}
