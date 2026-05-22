import React from 'react';
import { useEffect, useRef } from "react";

function Preview({ files }) {

  const iframeRef = useRef();

  useEffect(() => {

    const htmlFile = files.find(
      (file) => file.name === "index.html"
    );

    const cssFile = files.find(
      (file) => file.name === "style.css"
    );

    const jsFile = files.find(
      (file) => file.name === "script.js"
    );

    const html = htmlFile ? htmlFile.content : "";
    const css = cssFile ? cssFile.content : "";
    const js = jsFile ? jsFile.content : "";

    const previewContent = `
      <html>
        <head>
          <style>${css}</style>
        </head>

        <body>
          ${html}

          <script>
            ${js}
          <\/script>
        </body>
      </html>
    `;

    iframeRef.current.srcdoc = previewContent;

  }, [files]);

  return (
  <div className="preview-container">

    <div className="preview-header">
      🌐 Live Preview
    </div>

    <iframe
      ref={iframeRef}
      sandbox="allow-scripts"
      title="preview"
      style={{
        width: "100%",
        height: "95%",
        border: "none"
      }}
    />

  </div>
);
}

export default Preview;