export default function About(props) {
  const lightMode = {
    backgroundColor: "white",
    color: "black",
  };
  const darkMode = {
    backgroundColor: "black",
    color: "white",
  };
  return (
    <>
      <h2 style={{ color: props.mode === "light" ? "black" : "white" }}>
        About {props.title}
      </h2>
      <div className="my-3">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={props.mode === "light" ? lightMode : darkMode}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Text Conversion & Transformation
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={props.mode === "light" ? lightMode : darkMode}
              >
                <strong>
                  Allows users to toggle text between uppercase, lowercase, and
                  title case.
                </strong>{" "}
                Provides a "Mirror" function to mirror the original text. Users
                can also copy the transformed text to the clipboard with a
                single click.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={props.mode === "light" ? lightMode : darkMode}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Text Analysis & Count
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={props.mode === "light" ? lightMode : darkMode}
              >
                <strong>
                  Displays real-time statistics of the entered text, including
                  the number of characters, words, spaces, and special
                  characters.
                </strong>{" "}
                Updates dynamically as the user types or makes changes, giving
                instant feedback on text metrics.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={props.mode === "light" ? lightMode : darkMode}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Live Preview Panel
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={props.mode === "light" ? lightMode : darkMode}
              >
                <strong>
                  Shows a preview of the transformed text as changes are made,
                  making it easy to review and verify formatting and
                  transformations.
                </strong>{" "}
                Supports an expandable view for large text inputs, allowing
                users to focus on detailed text sections in real-time.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
