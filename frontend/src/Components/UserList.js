const UserList = (props) => {
  let users = props.users
  if(users.length > 0) {
    const userItem = users[0]
    const userItems = userItem.map((user) =>
      <tr>
        <td key={user._id} className="mb-3 text-white">{user.username}</td>
        <td key={user._id} className="mb-3 text-white">{user.location}</td>
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