import axios from "axios";

const Registar = () => {
  const onSubmit = (space) => {
    axios
      .post('http://localhost:13000/space/create-space', space)
      .then(res => {
        if (res.status === 200) alert('Space successfully created');
        else Promise.reject();
      })
      .catch (err => alert("Something went wrong"));
  };

  return (
    <div className="registar d-flex flex-fill align-items-center justify-content-center bg-dark">
      <form onSubmit={onSubmit}>
        <div className="flex-row justify-content-center mb-3">
          <input type="text" name="username" className="rounded" placeholder="Enter your username"/>
        </div>
        <div className="flex-row justify-content-center mb-3">
          <input type="text" name="location" className="rounded" placeholder="Enter your location"/>
        </div>
        <div className="flex-row justify-content-center">
          <input type="submit" value="Registar" className="rounded" />
        </div>
      </form>
    </div>
  )
}

export default Registar;