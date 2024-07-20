import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";
import { useHttpClient } from "../../shared/components/hooks/http-hook";

const UserPlaces = () => {
  const { userId } = useParams();
  const [loadedPlaces, setLoadedPlaces] = useState();
  const { sendRequest } = useHttpClient();

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const responseData = await sendRequest(
          `http://3.83.241.237:8000/api/places/user/${userId}`
        );
        console.log(responseData);
        setLoadedPlaces(responseData);
      } catch (err) {}
    };
    fetchPlaces();
  }, [sendRequest, userId]);

  const placeDeletedHanlder = (deletedPlaceId) => {
    setLoadedPlaces(prevPlaces  => prevPlaces.filter(place => place.id !== deletedPlaceId))
  }

  return (
    <React.Fragment>
      {loadedPlaces && <PlaceList items={loadedPlaces} onDeletePlace = {placeDeletedHanlder} />}
    </React.Fragment>
  );
};
export default UserPlaces;
