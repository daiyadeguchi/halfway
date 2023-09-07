import React, { useState } from "react";

const SidebarSearchField = () => {
  const [postal, setPostal] = useState("");

  const handleSubmit = (event) => {
    console.log("${postal}");
  }

  return (
    <div className="sidebar">
        <form onSubmit={handleSubmit}>
          <input type="text" value={postal} />
          <input type="submit" value="FIND" />
        </form>
    </div>
  )
};

export default SidebarSearchField;