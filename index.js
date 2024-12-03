import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("type markdown here");

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  const reverseSentence = (sentence) => {
    const reversed = sentence.split(' ').reverse().join(' ');
    return reversed.charAt(0).toUpperCase() + reversed.slice(1);
  };

  // Example usage:
  const inputSentence = "hello world";
  const reversedSentence = reverseSentence(inputSentence);
  console.log(reversedSentence); // Output: "World hello"

  const extractNames = (data) => {
    return data.map(item => item.name);
  };

  // Example usage:
  const data = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
  ];
  const names = extractNames(data);
  console.log(names); // Output: ["Alice", "Bob", "Charlie"]

  const extractNamesFromNestedArray = (nestedData) => {
    return nestedData.flatMap(innerArray => innerArray.map(item => item.name));
  };

  // Example usage:
  const nestedData = [
    [{ name: "John", age: 20 }, { name: "Jane", age: 22 }],
    [{ name: "Bob", age: 25 }]
  ];
  const nestedNames = extractNamesFromNestedArray(nestedData);
  console.log(nestedNames); // Output: ["John", "Jane", "Bob"]

  return (
    <div>
      <textarea
        value={markdown}
        onChange={handleChange}
        rows="10"
        cols="50"
      />
      <div>
        <h2>Preview</h2>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
