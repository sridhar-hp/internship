function Sidebar({
    files,
    selectedFile,
    setSelectedFile,
    setFiles
}) {

    const handleNewFile = () => {

        const fileName = prompt("Enter file name");

        if (!fileName) return;

        let language = "javascript";

        if (fileName.endsWith(".html")) {
            language = "html";
        }
        else if (fileName.endsWith(".css")) {
            language = "css";
        }
        else if (fileName.endsWith(".js")) {
            language = "javascript";
        }

        const newFile = {
            name: fileName,
            language,
            content: ""
        };

        setFiles([...files, newFile]);

        setSelectedFile(newFile);
    };

    return (
        <div className="p-3">

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h4>Files</h4>

                <button
                    className="btn btn-sm btn-dark"
                    onClick={handleNewFile}
                >
                    +
                </button>

            </div>
            {
                files.map((file) => (
                    <div
                        key={file.name}
                        className={`p-2 mb-2 border rounded d-flex justify-content-between align-items-center ${selectedFile.name === file.name
                                ? "bg-dark text-white"
                                : ""
                            }`}
                        style={{ cursor: "pointer" }}
                        onClick={() => setSelectedFile(file)}
                    >

                        <span>{file.name}</span>

                        <button
                            className="btn btn-sm btn-danger"
                            onClick={(e) => {

                                e.stopPropagation();

                                const updatedFiles = files.filter(
                                    (f) => f.name !== file.name
                                );

                                setFiles(updatedFiles);

                                if (
                                    selectedFile.name === file.name &&
                                    updatedFiles.length > 0
                                ) {
                                    setSelectedFile(updatedFiles[0]);
                                }

                            }}
                        >
                            X
                        </button>

                    </div>
                ))
            }

        </div>
    );
}

export default Sidebar;