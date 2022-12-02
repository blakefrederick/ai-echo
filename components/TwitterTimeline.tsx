import React, { useState, useEffect } from 'react';

const TwitterTimeline = () => {
  // State for storing the generated unicode characters
  const [unicodeChars, setUnicodeChars] = useState('');

  // Generate the random unicode characters when the component is mounted
  useEffect(() => {
    generateUnicodeChars();
  }, []);

  // Function to generate the random unicode characters
  const generateUnicodeChars = () => {
    // Generate a random number between 32 and 126 (inclusive),
    // which corresponds to the range of printable ASCII characters
    const charCode = Math.floor(Math.random() * (126 - 32 + 1)) + 32;

    // Convert the ASCII character code to a Unicode character and add it to the state
    setUnicodeChars(unicodeChars + String.fromCharCode(charCode));
  };

  // Event handler for keyboard and mouse events
  const handleKeyboardMouseEvent = (event) => {
    // Allow the user to use control keys to navigate away from the page, reload, etc.
    if (event.ctrlKey || event.metaKey) {
      return;
    }

    // Generate the random unicode characters
    generateUnicodeChars();
  };

  return (
    <div
      // Add event listeners for keyboard and mouse events
      onKeyDown={handleKeyboardMouseEvent}
      onClick={handleKeyboardMouseEvent}
      tabIndex={0} // Make the div focusable
      style={{
        // Twitter timeline styles
        backgroundColor: '#ffffff',
        border: '1px solid #e1e8ed',
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 16,
        lineHeight: 1.5,
        padding: 20,
      }}
    >
      {unicodeChars}
    </div>
  );
};

export default TwitterTimeline