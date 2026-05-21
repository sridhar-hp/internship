import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import CodeEditor from './components/CodeEditor';
import Preview from './components/Preview';

function App() {
  return (
    <div className="d-flex vh-100">

      <div className="border-end" style={{ width: "20%" }}>
        <Sidebar />
      </div>

      <div className="border-end" style={{ width: "50%" }}>
        <CodeEditor />
      </div>

      <div style={{ width: "30%" }}>
        <Preview />
      </div>

    </div>
  );
}

export default App;