import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";
import { useHttpClient } from "../../shared/components/hooks/http-hook";

const UserPlaces = () => {
  const { userId } = useParams();
  console.log(userId);
  const [loadedPlaces, setLoadedPlaces] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:8000/api/places/user/${userId}`
        );
        console.log(responseData);
        setLoadedPlaces(responseData);
      } catch (err) {}
    };
    fetchPlaces();
  }, [sendRequest, userId]);

  return (
    <React.Fragment>
      {loadedPlaces && <PlaceList items={loadedPlaces} />}
    </React.Fragment>
  );
};
export default UserPlaces;
