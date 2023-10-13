import { useState, useEffect } from "react";
import { Button } from "react-bootstrap"

const UserList = (props) => {
  const [users, setUsers] = useState([])
  const [isTheLastUser, setIsTheLastUser] = useState(false)
  useEffect(() => {
    setUsers(props.users)
    if(users.length === 1) {
      setIsTheLastUser(true)
    }
  })

  if(users.length > 0) {
    const userItems = users.map((user) =>
      <tbody key={user._id}>
        <tr>
          <td className="text-white">{user.username}: </td>
          <td className="text-white">{user.location}</td>
          <td>
            <Button variant="outline-danger" size="sm" block="block" type="submit" id={user._id} hidden={isTheLastUser}>X</Button>
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