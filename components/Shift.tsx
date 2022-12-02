import React, { useState, useEffect } from "react";

const Shift = () => {
  // State to track the current state of the button
  const [isPressed, setIsPressed] = useState(false);

  // Shift all characters on the site by one
  function shiftChars(direction: "left" | "right") {
    const elements = document.querySelectorAll("body *");

    // Loop through all elements on the page
    elements.forEach(element => {
      if (element.childNodes.length === 0) {
        return;
      }

      // Loop through all text nodes in the element
      element.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          // Get the current text content of the node
          let text = node.textContent;

          // Shift the characters in the text by one
          if (direction === "left") {
            text = text
              .split("")
              .map(char => String.fromCharCode(char.charCodeAt(0) + 10))
              .join("");
          } else {
            text = text
              .split("")
              .map(char => String.fromCharCode(char.charCodeAt(0) - 10))
              .join("");
          }

          // Update the text content of the node
          node.textContent = text;
        }
      });
    });
  }

  // Use the useEffect hook to shift the characters when the button is pressed
  useEffect(() => {
    if (isPressed) {
      shiftChars(isPressed);
    }
  }, [isPressed]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid black",
          borderRadius: "4px",
          color: "black",
          padding: "8px 12px",
          margin: "35px auto"
        }}
        className="shift-button"
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onTouchStart={() => setIsPressed(true)}
        onTouchEnd={() => setIsPressed(false)}
      >
        Shift Chars
      </button>
    </div>
  );
};

export default Shift;
