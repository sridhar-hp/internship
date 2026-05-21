import Editor from "@monaco-editor/react";

function CodeEditor({ selectedFile }) {

  return (
    <div style={{ height: "100vh" }}>

      <Editor
        height="100%"
        language={selectedFile.language}
        value={selectedFile.content}
        theme="vs-dark"
      />

    </div>
  );
}

export default CodeEditor;