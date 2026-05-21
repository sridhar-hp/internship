function Sidebar({ files, selectedFile, setSelectedFile }) {

  return (
    <div className="p-3">

      <h4 className="mb-4">Files</h4>

      {
        files.map((file, index) => (
          <div
            key={index}
            className={`p-2 mb-2 border rounded ${
              selectedFile.name === file.name ? "bg-dark text-white" : ""
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => setSelectedFile(file)}
          >
            {file.name}
          </div>
        ))
      }

    </div>
  );
}

export default Sidebar;