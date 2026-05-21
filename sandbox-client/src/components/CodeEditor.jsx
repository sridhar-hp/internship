import React from 'react';
import Editor from "@monaco-editor/react";

function CodeEditor({ selectedFile, files, setFiles }) {

  const handleEditorChange = (value) => {

    const updatedFiles = files.map((file) => {

      if (file.name === selectedFile.name) {
        return {
          ...file,
          content: value || ""
        };
      }

      return file;
    });

    setFiles(updatedFiles);
  };

  return (
    <div style={{ height: "100vh" }}>

      <Editor
        height="100%"
        language={selectedFile.language}
        value={selectedFile.content}
        onChange={handleEditorChange}
        theme="vs-dark"
      />

    </div>
  );
}

export default CodeEditor;