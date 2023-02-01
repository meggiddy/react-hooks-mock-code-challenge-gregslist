import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/listings")
      .then((response) => response.json())
      .then((data) => setListings(data));
  }, []);
  const handleDelete = (listingId) => {
    const filteredList = listings.filter((listing) => {
      if (listing.id !== listingId) {
        return true;
      }
      return false;
    });
    setListings(filteredList);
  };
  return (
    <div className="app">
      <Header />
      <ListingsContainer handleDelete={handleDelete} listings={listings} />
    </div>
  );
}

export default App;
