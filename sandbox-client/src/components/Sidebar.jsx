import React from 'react';

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
            content: "/* Start coding... */"
        };

        setFiles([...files, newFile]);

        setSelectedFile(newFile);
    };

    return (
        <div className="sidebar p-3">

            <div className="sidebar-header d-flex justify-content-between align-items-center mb-4">

                <h5 className="m-0 fw-bold">
                    📁 Explorer
                </h5>

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
                        className={`file-item p-2 mb-2 rounded d-flex justify-content-between align-items-center ${selectedFile.name === file.name
                            ? "active-file"
                            : ""
                            }`}
                        style={{ cursor: "pointer" }}
                        onClick={() => setSelectedFile(file)}
                    >

                       <div className="d-flex align-items-center justify-content-between w-100">

    <span>

        {
            file.language === "html"
                ? "🌐 "
                : file.language === "css"
                    ? "🎨 "
                    : "⚡ "
        }

        {file.name}

    </span>

    <div className="d-flex align-items-center gap-2">

        <button
            className="icon-btn"
                            onClick={(e) => {

                                e.stopPropagation();

                                const newName = prompt(
                                    "Enter new file name",
                                    file.name
                                );

                                if (!newName) return;

                                const updatedFiles = files.map((f) => {

                                    if (f.name === file.name) {

                                        return {
                                            ...f,
                                            name: newName
                                        };

                                    }

                                    return f;

                                });

                                setFiles(updatedFiles);

                                if (selectedFile.name === file.name) {

                                    const updatedSelectedFile = updatedFiles.find(
                                        (f) => f.name === newName
                                    );

                                    setSelectedFile(updatedSelectedFile);

                                }

                            }}
                        >
                            ✏️
                        </button>

                        <button
                            className="icon-btn"
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
                            🗑️
                        </button>

                    </div>
                    </div>

</div>
                ))
            }

        </div>
    );
}

export default Sidebar;