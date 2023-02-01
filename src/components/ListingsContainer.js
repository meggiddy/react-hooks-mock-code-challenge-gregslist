import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ handleDelete, listings }) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => {
          return (
            <ListingCard
              key={listing.id}
              description={listing.description}
              image={listing.image}
              location={listing.location}
              handleDelete={()=>{handleDelete(listing.id)}}
            ></ListingCard>
          );
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
