import React, { useState } from "react";

const SidebarSearchField = () => {
  const [postal, setPostal] = useState("");

  const handleSubmit = (event) => {
    console.log(`${postal}`);
  }

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