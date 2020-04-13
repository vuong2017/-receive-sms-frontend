const Timestamp = (props) => {
  return (
    <div className="timestamp">
      <div className="uikit-chatview__timestamp uikit-chatview__timestamp--divider">
        {props.time}
      </div>
    </div>
  );
};

export default Timestamp;