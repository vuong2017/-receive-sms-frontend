const CardBorderMessage = (props) => {
  return (
    <li className="chat-item incoming">
      <div className="uikit-chat-item vertical-container  shouldAnimate ">
        <div className="message ">
          <div className="message-container">
            <div className="message-item  uikit-chat-item__bubble uikit-chat-item__bubble--incoming  ">
              <div className="message-content">
                <span className="message-text ">
                  <span className="uikit-chat-item__bubble-text">
                    {props.message}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="uikit-chat-item__timestamp uikit-chat-item__timestamp--message">
          3:34 CH
        </div>
      </div>
    </li>
  );
};

export default CardBorderMessage;
