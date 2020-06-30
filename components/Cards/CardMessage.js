import { ContactAvatar } from "../Avatars";

const CardMessage = (props) => {
  return (
    <li
      className={`uikit-summary-list__cell ${
        props.active ? "uikit-summary-list__cell--active" : ""
      }`}
    >
      <div className="uikit-summary-list__cell-content">
        <div className="js-contact-avatar">
          <div>
            <ContactAvatar avatarColor={props.avatarColor}/>
          </div>
        </div>
      </div>
      <div className="uikit-summary-list__cell-content uikit-summary-list__cell-content--fill">
        <div className="chat-preview__contact-name">
          <span className=" js-conversation-name">
            <div>{props.messageTitle}</div>
          </span>
        </div>

        <div className="">
          <span className="uikit-text uikit-text--muted">
            {props.messageContent}
          </span>
        </div>

        <div className="uikit-summary-list__cell-text1 preview-timestamp">
          <div className="timestamp">
            <div>{props.messageTime}</div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardMessage;
