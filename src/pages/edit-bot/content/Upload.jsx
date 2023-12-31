import { PlusCircleOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import Icon from "@cobalt/react-icon";
const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};
const App = () => (
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <Icon name={"upload"} size="xlarge" color={"#AEB3B8"} />
    </p>
    <p className="ant-upload-text">Drag & Drop here</p>
    <p className="ant-upload-hint" style={{ color: "#3E048B" }}>
      <PlusCircleOutlined />
      <span style={{ paddingLeft: "4px" }}> Choose a PDF file to upload</span>
    </p>
  </Dragger>
);
export default App;
