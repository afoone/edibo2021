import React from "react";

const UserDetail = (props) => {
  const user = props.user;
  return (
    <div>
      <div>username: {user.username}</div>
      <div>Name: {user.name}</div>
      <div>email: {user.email}</div>
    </div>
  );
};

export default UserDetail;
