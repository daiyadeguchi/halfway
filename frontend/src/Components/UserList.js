const UserList = (props) => {
  let users = props.users
  if(users.length > 0) {
    const userItem = users[0]
    const userItems = userItem.map((user) =>
      <li key={user._id} className="mb-3 text-white">{user.username}</li>
    )
    return (
      <ul>{userItems}</ul>
    )
  }
}

export default UserList;