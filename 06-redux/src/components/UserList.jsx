import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <div>
      <ul>
        {users.map((i) => (
          <li key={i.id}>
            <Link to={`/users/${i.id}`}>{i.name}</Link>
            {/* <Link to={"/users/" + i.id}>{i.name}</Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
