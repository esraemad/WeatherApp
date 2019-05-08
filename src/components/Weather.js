import React from 'react';

const Weather = (props) => 
{
        return(
            <div className="info">
             {
                 props.temperature && 
                 <p className="infokey">Temperature:
                 <span className="infovalue">{props.temperature}</span>
                 </p>
             }
             {
                 props.temperature && 
                 <p className="infokey">City  : 
                 <span className="infovalue">{props.city}</span>
                 </p>
             }
             {
                 props.temperature && 
                 <p className="infokey">Country  :
                 <span className="infovalue">{props.country}</span>
                 </p>
             }
             {
                 props.temperature && 
                 <p className="infokey">Humidity :
                 <span className="infovalue">{props.humidity}</span>
                 </p>
             }
             {
                 props.temperature && 
                 <p className="infokey">Description :
                 <span className="infovalue">{props.description}</span>
                 </p>
             }
             {/* {
                 props.temperature && 
                 <p className="infokey">Error : 
                 <span className="infovalue">{props.error}</span>
                 </p>
             } */}
            
                
            </div>
        )

}
export default Weather;
