import Header from "../Layouts/Header";

export default function Template1() {
  return (
    <div className="Template-Container">
      <Header />
      <div className="Template-Container-1">
        <div className="Template-Container-2">
          <div
            className="d-flex"
            style={{ width: "50%", height: "50%", backgroundColor: "green" }}
          ></div>
          <div
            style={{ width: "50%", height: "50%", backgroundColor: "yellow" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
