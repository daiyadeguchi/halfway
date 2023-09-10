import React, { useState } from "react";

const SidebarSearchField = () => {
  const [postal, setPostal] = useState("");

  const handleSubmit = (event) => {
    console.log(`${postal}`);
  }

  return (
    <div>
        <form onSubmit={handleSubmit} className="d-flex align-items-center justify-content-center">
          <input type="text" />
          <input type="submit" value="FIND" />
        </form>
    </div>
  )
};

export default SidebarSearchField;