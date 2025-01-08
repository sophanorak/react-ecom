import React from "react";

function MyComponent() {
  const handleClick = () => {
    alert("I am an alert box!");
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

export default MyComponent;