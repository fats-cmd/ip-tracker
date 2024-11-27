import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataTab = ({ ipAddress, onLocationUpdate }) => {
  const [geoData, setGeoData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!ipAddress) return;

    const fetchGeoData = async () => {
      setLoading(true);
      setError(null);

      try {
        const API_KEY = "at_kw2XoVBrXgFYkcsG2gYkj46YNBSOl";
        const URL = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${API_KEY}&ipAddress=${ipAddress}`
        const response = await axios.get(URL);

        setGeoData(response.data);
        // Update location for the map
        onLocationUpdate({
          lat: response.data.location.lat,
          lng: response.data.location.lng,
        });
      } catch (err) {
        setError('Failed to fetch data. Please check the IP address.');
        onLocationUpdate(null);
      } finally {
        setLoading(false);
      }
      // console.log(geoData)
    };

    fetchGeoData();
  }, [ipAddress, onLocationUpdate]);

  if (loading) {
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-6xl w-full h-[150px] rounded-xl bg-zinc-50 flex justify-center items-center shadow-md z-10">
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto h-[150px] rounded-xl bg-zinc-50 flex justify-center items-center my-5">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return geoData ? (
    <div className="absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-6xl w-full h-[150px] rounded-xl bg-zinc-50 flex justify-center items-center shadow-md z-[999999]">

      <div className="p-4 w-full flex">
        <span className="w-[25%] border-r border-gray-300 p-4 text-center">
          <h3 className="text-gray-500 text-lg">IP Address</h3>
          <p className="text-xl font-semibold">{geoData.ip}</p>
        </span>
        <span className="w-[25%] border-r border-gray-300 p-4 text-center">
          <h3 className="text-gray-500 text-lg">Location</h3>
          <p className="text-xl font-semibold">
            {geoData.location.city},  {geoData.location.region}, {geoData.location.country}
          </p>
        </span>
        <span className="w-[25%] border-r border-gray-300 p-4 text-center">
          <h3 className="text-gray-500 text-lg">Timezone</h3>
          <p className="text-xl font-semibold">UTC {geoData.location.timezone}</p>
        </span>
        <span className="w-[25%] border-r border-gray-300 p-4 text-center">
          <h3 className="text-gray-500 text-lg">Postal Code</h3>
          <p className="text-xl font-semibold">{geoData.location?.postalCode ? geoData.location.postaLCode : 'Not Available'}
          </p>
        </span>
        <span className="w-[25%] border-r border-gray-300 p-4 text-center">
          <h3 className="text-gray-500 text-lg">Proxy</h3>
          <p className="text-xl font-semibold">{geoData.proxy?.vpn === false ? 'No VPN' : geoData.proxy?.vpn}
          </p>
        </span>
        <span className="w-[25%] p-4 text-center">
          <h3 className="text-gray-500 text-lg">ISP</h3>
          <p className="text-xl font-semibold">{geoData.isp}</p>
        </span>
      </div>
    </div>
  ) : (
    <p className="text-center text-gray-400">Input an IP address</p>
  );
};

export default DataTab;
