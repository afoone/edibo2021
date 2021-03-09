import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import axios from "axios";
import UserDetail from "../components/UserDetail";
import { Link } from "react-router-dom";

const UserDetailPage = (props) => {
  const [user, setUser] = useState({});

  const { id } = props.match.params;

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + id)
      .then((res) => setUser(res.data));
  }, [id]);

  return (
    <div>
      <Link to="/users">Atrás</Link>
      <UserDetail user={user} />
    </div>
  );
};

export default withRouter(UserDetailPage);

//  Higher Order Component (HOC)
// ES un componente que admite como parámetro  un componente y te devuelve otro componente
