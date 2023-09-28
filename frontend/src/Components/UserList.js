import { Button, FormGroup } from "react-bootstrap"
import axios from "axios";

const UserList = (props) => {
  let users = props.users
  const onSubmit = (user) => {
    axios
      .delete("http://localhost:13000/space/delete-user/" + user._id)
      .then((res) => {
        if (res.status === 200) {
          window.location.reload();
        } else Promise.reject()
      })
      .catch((error) => alert("Something went wrong"))
  }

  if(users.length > 0) {
    const userItems = users.map((user) =>
      <tbody>
        <tr>
          <td className="mb-3 text-white">{user.username}</td>
          <td className="mb-3 text-white">{user.location}</td>
          <td className="mb-3">
            <Button variant="outline-danger" size="sm" block="block" type="submit" onSubmit={onSubmit}>X</Button>
          </td>
        </tr>
      </tbody>
    ) 
    return (
      <table>
        {userItems}
      </table>
    )
  }
}

export default UserList;