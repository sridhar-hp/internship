import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import Sidebar from './components/Sidebar';
import CodeEditor from './components/CodeEditor';
import Preview from './components/Preview';

function App() {

  const [files, setFiles] = useState([
    {
      name: "index.html",
      language: "html",
      content: "<h1>Hello CodeSpark</h1>"
    },
    {
      name: "style.css",
      language: "css",
      content: "h1 { color: red; }"
    },
    {
      name: "script.js",
      language: "javascript",
      content: "console.log('Hello');"
    }
  ]);

  const [selectedFile, setSelectedFile] = useState(files[0]);

  return (
    <div className="d-flex vh-100">

      <div className="border-end" style={{ width: "20%" }}>
        <Sidebar
          files={files}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          setFiles={setFiles}
        />
      </div>

      <div className="border-end" style={{ width: "50%" }}>
        <CodeEditor selectedFile={selectedFile} files={files}
          setFiles={setFiles} />
      </div>

      <div style={{ width: "30%" }}>
        <Preview files={files} />
      </div>

    </div>
  );
}

export default App;