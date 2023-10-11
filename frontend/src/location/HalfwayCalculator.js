const calculateHalfway = (users) => {
  let addedLat = 0.0;
  let addedLng = 0.0;
  for (let i = 0; i < users.length; i++) {
    addedLat += parseFloat(users[i].lat);
    addedLng += parseFloat(users[i].lng);
  }
  const lat = addedLat/users.length;
  const lng = addedLng/users.length;
  return [lat, lng]
}

export default calculateHalfway;