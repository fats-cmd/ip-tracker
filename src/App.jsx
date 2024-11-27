import React, { useState } from 'react'
import './App.css';
import imageBackground from './assets/images/bg-earth.jpg'
import { FaChevronRight } from "react-icons/fa6"
import DataTab from './components/DataTab'
import Map from './components/Map'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [ipAddress, setIpAddress] = useState('')
  const [location, setLocation] = useState({ lat: 51.505, lng: -0.09 })
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value)
  };

  const handleSearch = (event) => {
    event.preventDefault()
    if (searchQuery) {
      setIpAddress(searchQuery)
    } else {
      setIpAddress('41.184.188.19')
    }
  }

  return (
    <div className="w-full">
      <header
        className="relative"
        style={{
          backgroundImage: `url(${imageBackground})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100vw',
          height: '250px',
        }}
      >
        <div className="flex justify-center items-center flex-col py-4">
          <h1 className="text-3xl font-[rubik] font-bold text-white capitalize mb-4">IP Address Tracker</h1>
          <div className="search flex">
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchInputChange}
                placeholder="Enter IP address"
                className="p-3 border border-gray-300 rounded-l-md w-72"
              />
              <button
                type="submit"
                className="p-3 bg-blue-500 text-white rounded-r-md flex items-center justify-center"
              >
                <FaChevronRight />
              </button>
            </form>
          </div>
        </div>
        <DataTab ipAddress={ipAddress} onLocationUpdate={setLocation} />
      </header>
      <Map location={location} />
    </div>
  );
}

export default App;
