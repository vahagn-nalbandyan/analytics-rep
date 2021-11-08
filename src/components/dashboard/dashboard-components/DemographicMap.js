/* eslint-disable */
import React, { useEffect, useState } from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';

import * as mapMarkersData from '../../../data/markersData.json';

  let ratesArr = [];
  let highest;  
  
  mapMarkersData.features.map(marker => {          
    return ratesArr.push(+(marker.properties.DESCRIPTIO[0]))      
  });
  
  highest = ratesArr.sort((a,b)=>a-b).reverse()[0];    

function Map() {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [highestRate, setHighestRate] = useState(null);
  const [markerSize, setMarkerSize] = useState(40)

  useEffect(() => {
    setHighestRate(highest);
  },[])

  return(
    <GoogleMap 
      defaultZoom={7}
      defaultCenter={{lat: 40.069099, lng: 45.038189}}
    >
      {mapMarkersData.features.map(marker => { 
         marker.properties.mSize = +(marker.properties.DESCRIPTIO[0]) * markerSize / highest;      
        return <Marker         
          key={marker.properties.PARK_ID} 
          position={{
            lat: marker.geometry.coordinates[0], 
            lng: marker.geometry.coordinates[1]
          }} 
          onClick={() => {
            setSelectedMarker(marker);     
          }}
          icon={{
            url: '/circle-svgrepo-com.svg',
            scaledSize: new window.google.maps.Size(marker.properties.mSize, marker.properties.mSize)                  
          }}
        />
      }
      )}      

      {selectedMarker && (
        <InfoWindow
        position={{
          lat: selectedMarker.geometry.coordinates[0], 
          lng: selectedMarker.geometry.coordinates[1]
        }} 
        onCloseClick={() => {
          setSelectedMarker(null);
        }}
        >
          <div>
            <h3>{selectedMarker.properties.NAME}</h3>
            <h4>{selectedMarker.properties.DESCRIPTIO}</h4>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>  
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const DemographicMap = () => {  
  return (
      <div className='demographic-map-wrapper'>
        <WrappedMap 
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCmw_45dX2j97LxzzSk8m1qYl02C4rPeEk"
          loadingElement={<div style={{height: '100%'}} />}
          containerElement={<div style={{height: '270px'}} />}
          mapElement={<div style={{height: '100%'}} />}
        />
        
      </div>
  );
};

export default DemographicMap;

//AIzaSyCmw_45dX2j97LxzzSk8m1qYl02C4rPeEk
