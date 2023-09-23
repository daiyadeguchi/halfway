import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

 const SidebarSearchField = () => {
  const { id } = useParams();
  let users = new Array();

  useEffect(() => {
    axios
      .get("http://localhost:13000/space/" + id)
      .then(({ data }) => {
        for(let i = 0; i < data.length; i++) {
          users.push(data[i].username);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
        <form>
          <div className="row align-items-center justify-content-center mb-3">
            <input type="text" className="col-md-8 col-sm-8 rounded" />
          </div>
          <div className="row align-items-center justify-content-center">
            <input type="submit" value="FIND" className="col-md-6 col-sm-6 rounded" />
          </div>
        </form>
    </div>
  )
};

export default SidebarSearchField;