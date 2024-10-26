export default function Alert(props) {
  const setMessageType = (messageType) => {
    let str = messageType.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.MessageType} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{setMessageType(props.alert.MessageType)}: </strong>{" "}
          {props.alert.Message}
        </div>
      )}
    </div>
  );
}
