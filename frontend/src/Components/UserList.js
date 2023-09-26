import { Button } from "react-bootstrap"

const UserList = (props) => {
  let users = props.users
  const onSubmit = () => {
    console.log("henlo")
  }
  if(users.length > 0) {
    const userItem = users[0]
    const userItems = userItem.map((user) =>
      <tr>
        <td key={user._id + user.username} className="mb-3 text-white">{user.username}</td>
        <td key={user._id + user.location} className="mb-3 text-white">{user.location}</td>
        <td key={user._id} className="mb-3">
          <Button variant="outline-danger" size="sm" block="block" type="submit">X</Button>
        </td>
      </tr>
    )

    return (
      <table>
        {userItems}
      </table>
    )
  }
}

export default UserList;