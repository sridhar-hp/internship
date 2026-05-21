import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect,useState } from 'react';
import axios from 'axios';
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
  useEffect(() => {

  const loadProject = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/project/load"
      );

      if (
        response.data.success &&
        response.data.project
      ) {

        setFiles(response.data.project.files);

        setSelectedFile(
          response.data.project.files[0]
        );

      }

    } catch (error) {

      console.log(error);

    }

  };

  loadProject();

}, []);

useEffect(() => {

  const timeout = setTimeout(async () => {

    try {

      await axios.post(
        "http://localhost:5000/api/project/save",
        { files }
      );

      console.log("Project Saved");

    } catch (error) {

      console.log(error);

    }

  }, 1000);

  return () => clearTimeout(timeout);

}, [files]);

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