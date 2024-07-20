import React, { useState, useEffect } from "react";
import UsersList from "../components/UsersList";
import { useHttpClient } from "../../shared/components/hooks/http-hook";

const User = () => {
  const {  sendRequest } = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          'http://3.83.241.237:8000/api/users/'
        );
        console.log(responseData);
        setLoadedUsers(responseData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUsers();
  }, [sendRequest]);

  return (
    <React.Fragment>
      {loadedUsers && <UsersList items={loadedUsers} />}
    </React.Fragment>
  );
};

export default User;
