import React, {useState,useEffect} from "react";


const UserLocation = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  const getLocation = async () => {
    try {
      const postiion = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });


      setLocation({
        latitude: postiion.coords.latitude,
        longitude: postiion.coords.longitude,
      });
    } catch (error) {
      console.error("Error getting user location", error);
    }
  };

useEffect(()=>{
  if (navigator.geolocation) {
    getLocation();
  } else {
    alert('Geolocation is not supported by this browser')
  }
}, []);

return (
  <span>
    {location.latitude && location.longitude ? (
      <span  className="mx-2 fs-6 text-body-secondary ">
        {location.latitude}, {location.longitude}
      </span>
    ):(
      <span className="mx-4 fs-6">Loading location...</span>
    )}
  </span>
);
};

export default UserLocation;
