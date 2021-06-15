import Router from "next/router";


export const Users = (props) => {
  return (
    <div>
      {props.users.map((user) => (
        <ul>
          <li 
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" key={user.id}
          onClick={()=> Router.push('/users/[id])',`/users/${user.id}`)}
          >
            <div>
              <h5>
                {" "}
                {user.first_name} {user.last_name}{" "}
              </h5>
              <p>Email: {user.email}</p>
            </div>
            <img
              src={user.avatar}
              alt={user.last_name}
              style={{ borderRadius: "50%" }}
            />
          </li>
        </ul>
      ))}
    </div>
  );
};
