import { Input, Select } from "antd";

export default function ContactUs(props) {
  const { Option } = Select;
  const { TextArea } = Input;
  return (
    <div className="ContactUs" ref={props.scroll}>
      <div className="container1">
        <div className="container2">
          <div className="AboutUs-Container">
            <h1>Contact Us</h1>
            <div>
              <p>
                Thank you for your interest in Construction Company. For
                inquiries, provide your information below.
              </p>
              <label>First Name</label>
              <Input className="Input"></Input>
              <label>Last Name</label>
              <Input className="Input"></Input>
              <label>Email Address</label>
              <Input className="Input"></Input>
              <label>Location(City, State/Province)</label>
              <Input className="Input"></Input>
              <label>Organization</label>
              <Input className="Input"></Input>
              <label>Inquiry Type</label>
              <Select style={{ width: "100%" }}>
                <Option>Enq 1</Option>
                <Option>Enq 2</Option>
                <Option>Enq 3</Option>
              </Select>
              <label>Message</label>
              <TextArea style={{ height: "5rem" }}></TextArea>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
