import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import UserList from "./UserList";

 const SidebarSearchField = () => {
  const { id } = useParams();
  let allUsers = new Array();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:13000/space/" + id)
      .then(({ data }) => {
        allUsers.push(data);
        setUsers(allUsers[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  return (
    <div>
        <form>
          <div className="mb-3">
            <UserList users={users}/> 
          </div>
          <div className="row align-items-center justify-content-center">
            <Link 
              className="col-md-6 col-sm-6 btn btn-info"
              to={"/add-user/" + id}>
              Add User
            </Link>
          </div>
        </form>
    </div>
  )
};

export default SidebarSearchField;