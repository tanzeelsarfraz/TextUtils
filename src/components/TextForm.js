import { useState } from "react";
import PropTypes from "prop-types";
export default function TextForm(props) {
  const [text, setText] = useState("");
  const [showTextDetails, setShowTextDetails] = useState(false);
  const [previewText, setPreviewText] = useState(false);
  const handleTextChange = (event) => {
    let countCharcters = "";
    if (event.target.value.length > props.maxLength - 1) {
      for (let i = 0; i < props.maxLength - 1; i++) {
        countCharcters += event.target.value[i];
      }
      setText(countCharcters);
    } else {
      setText(event.target.value);
      if (event.target.value.length === 0) {
        setPreviewText(false);
        setShowTextDetails(false);
      }
    }
  };
  const countSpaces = (text) => {
    return (text.match(/ /g) || []).length;
  };
  const countSpecialCharacters = (text) => {
    const specialChars = text.match(/[^a-zA-Z0-9\s]/g);
    return specialChars ? specialChars.length : 0;
  };
  const handleShowTextDetails = () => {
    setPreviewText(false);
    setShowTextDetails(true);
  };
  const handlePreviewText = () => {
    setShowTextDetails(false);
    setPreviewText(true);
    props.showAlert("primary", "Previewing Text!");
  };
  const handleUpperCase = () => {
    setText(text.toUpperCase());
    props.showAlert("success", "Text Converted to Upper Case Successfully!");
  };
  const handleLowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert("success", "Text Converted to Lower Case Successfully!");
  };
  const handleClearText = () => {
    setText("");
    setPreviewText(false);
    setShowTextDetails(false);
    props.showAlert("danger", "Text Cleared Successfully!");
  };
  const handleMirrorText = () => {
    let str = "";
    for (let i = text.length - 1; i >= 0; i--) str += text[i];
    setText(str);
    props.showAlert("success", "Text Reverted Successfully!");
  };
  const handleCopyText = () => {
    let copyText = document.getElementById("textArea");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("success", "Text Copied Successfully!");
  };
  return (
    <>
      <h2
        style={{
          color: props.mode.toLowerCase() === "light" ? "black" : "white",
        }}
      >
        Enter Text to Analyze
      </h2>
      <div className="mb-3">
        <textarea
          style={{
            backgroundColor:
              props.mode.toLowerCase() === "light" ? "white" : "black",
            color: props.mode.toLowerCase() === "light" ? "black" : "white",
          }}
          className="form-control"
          id="textArea"
          rows="10"
          value={text}
          onChange={handleTextChange}
          placeholder="Enter Text here"
        ></textarea>
        <div
          className="text-sm-end fs-10 fw-lighter"
          style={{
            color: props.mode.toLowerCase() === "light" ? "black" : "white",
          }}
        >
          {text.length} / {props.maxLength - 1}
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary btn-sm mx-1 my-1"
        disabled={text.length === 0}
        onClick={handleUpperCase}
      >
        Convert To Upper Case
      </button>
      <button
        type="button"
        className="btn btn-secondary btn-sm mx-1 my-1"
        disabled={text.length === 0}
        onClick={handleLowerCase}
      >
        Convert To Lower Case
      </button>
      <button
        type="button"
        className="btn btn-warning btn-sm mx-1 my-1"
        disabled={text.length === 0}
        onClick={handleMirrorText}
      >
        Mirror Text
      </button>
      <button
        type="button"
        className="btn btn-success btn-sm mx-1 my-1"
        disabled={text.length === 0}
        onClick={handleCopyText}
      >
        Copy Text
      </button>
      <button
        type="button"
        className="btn btn-danger btn-sm mx-1 my-1"
        disabled={text.length === 0}
        onClick={handleClearText}
      >
        Clear Text
      </button>
      <button
        type="button"
        className="btn btn-info btn-sm mx-1 my-1"
        disabled={text.length === 0}
        onClick={handlePreviewText}
      >
        Preview Text
      </button>
      <button
        type="button"
        className="btn btn btn-outline-info btn-sm mx-1 my-1"
        onClick={handleShowTextDetails}
        disabled={text.length === 0}
      >
        Show Text Details
      </button>

      <div
        className="my-3 mx-1"
        style={{
          color: props.mode.toLowerCase() === "light" ? "black" : "white",
        }}
      >
        {showTextDetails && (
          <div>
            <h3>Your Text Summary</h3>
            <p>
              Number of Words: {text.split(/\s+/).filter((x) => x !== "").length}
            </p>
            <p>Number of Spaces: {countSpaces(text)}</p>
            <p>Number of Special Charaters: {countSpecialCharacters(text)}</p>
          </div>
        )}
        {previewText && (
          <div>
            <h3>Preview Text</h3>
            <p>{text}</p>
          </div>
        )}
      </div>
    </>
  );
}

TextForm.defaultProps = {
  maxLength: 65536,
};
TextForm.propTypes = {
  maxLength: PropTypes.number.isRequired,
};
