import React, { useState, useEffect } from "react";
import GithubUsers from "./GithubUsers";
import Loading from "./Loading";

const Main = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      const url = `https://api.github.com/${process.env.REACT_APP_API_KEY}`;
      const response = await fetch(url);
      setLoading(false);
      setUsers(await response.json());
    } catch (ex) {
      setLoading(false);
      console.log(ex);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <GithubUsers users={users} />
    </>
  );
};

export default Main;
