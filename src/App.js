import "./App.css";

const fileUrl = "http://localhost:3000/EsraaElhabash.pdf";
//const fileUrl = "https://1drv.ms/b/s!Agl28UHhij4vg1MdU5_IFVhFkCYG?e=CuOENq";
function App() {
  const downloadFileUrl = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <div className="App">
      <button
        onClick={() => {
          downloadFileUrl(fileUrl);
        }}
      >
        File Download
      </button>
    </div>
  );
}

export default App;
