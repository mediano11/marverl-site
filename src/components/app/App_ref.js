import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const useInputWithValidate = (inititalValue) => {
  const [value, setValue] = useState(inititalValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const validateInput = () => value.search(/\d/) >= 0;

  return { value, onChange, validateInput };
};
const Form = () => {
  const input = useInputWithValidate("");
  const textArea = useInputWithValidate("");

  const color = input.validateInput() ? "text-danger" : null;

  return (
    <Container>
      <form className="w-50 border mt-5 p-3 m-auto">
        <div className="mb-3">
          <input
            value={`${input.value} / ${textArea.value}`}
            type="text"
            className="form-control"
            readOnly
          />
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Email address
          </label>
          <input
            onChange={input.onChange}
            value={input.value}
            type="email"
            className={`form-control ${color}`}
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            onChange={textArea.onChange}
            values={textArea.value}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </form>
    </Container>
  );
};

function App() {
  return <Form />;
}

export default App;
