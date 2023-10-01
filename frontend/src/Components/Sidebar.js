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

  const onSubmit = (user) => {
    user.preventDefault()
    axios
      .delete("http://localhost:13000/space/delete-user/" + user.nativeEvent.submitter.id)
      .then((res) => {
        if (res.status === 200) {
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"))
  }
  
  return (
    <div>
      <div className="mb-3">
        <form onSubmit={onSubmit}>
          <UserList users={users}/> 
        </form>
      </div>
      <div className="row align-items-center justify-content-center">
        <Link 
          className="col-md-6 col-sm-6 btn btn-info"
          to={"/add-user/" + id}>
          Add User
        </Link>
      </div>
    </div>
  )
};

export default SidebarSearchField;