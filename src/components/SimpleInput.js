import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInput = useRef();
  const [enteredName, setEnteredName] = useState("");
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);
    const enteredValue = nameInput.current.value;
    console.log(enteredValue);
    // nameInput.current.value = ""; NOT IDEAL, MANIPULATING THE DOM
    setEnteredName("");
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          ref={nameInput}
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
