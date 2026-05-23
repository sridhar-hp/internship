import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
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
  const [runFiles, setRunFiles] = useState(files);
  const [selectedFile, setSelectedFile] = useState(files[0]);
  const [activePreviewFile, setActivePreviewFile] =
    useState("index.html");

  useEffect(() => {

    const loadProject = async () => {

      try {

        const response = await axios.get(
          "https://internship-bzsh.onrender.com/api/project/load"
        );

        if (
          response.data.success &&
          response.data.project
        ) {

          setFiles(response.data.project.files);
          setRunFiles(response.data.project.files);
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
          "https://internship-bzsh.onrender.com/api/project/save",
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

      <div className="border-end" style={{ width: "18%" }}>
        <Sidebar
          files={files}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          setFiles={setFiles}
        />
      </div>

      <div
        className="border-end d-flex flex-column"
        style={{ width: "52%" }}
      >

        <div
          className="d-flex justify-content-end p-2 border-bottom"
          style={{ background: "#1e1e1e" }}
        >

          <button
            className="btn btn-success btn-sm"
            onClick={() => {

              setRunFiles([...files]);

              if (selectedFile.language === "html") {

                setActivePreviewFile(selectedFile.name);

              }

            }}          >
            ▶ Run
          </button>

        </div>

        <div style={{ flex: 1 }}>

          <CodeEditor
            selectedFile={selectedFile}
            files={files}
            setFiles={setFiles}
          />

        </div>

      </div>

      <div style={{ width: "30%" }}>
        <Preview
          files={runFiles}
          activePreviewFile={activePreviewFile}
        />      </div>

    </div>
  );
}

export default App;