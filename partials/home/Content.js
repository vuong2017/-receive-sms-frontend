import CardBorderMessage from "@/components/cards/CardBorderMessage";
import Timestamp from "@/components/times/Timestamp";
import RefreshMessage from "@/partials/home/RefreshMessage";

const Content = () => {
  return (
    <div className="content">
      <div className="chat section">
        <div className="profile-toolbar">
          <div>
            <div className="new-header">
              <div className="conv-header-container">
                <div className="flex-fill contact-name">
                  <span className="flex-fill-content js-conversation-name">
                    <div>22000</div>
                  </span>
                </div>
                <div className="profile-menus">
                  <div className="js-more menu-button">Action</div>
                  <div className="tooltip more-items-tooltip">More Items</div>
                  <ul className="more-menu">
                    <li className="edit">Edit Contact Name</li>

                    <li className="block " id="block">
                      Block Number
                    </li>

                    <li className="remove ">Delete Conversation</li>
                  </ul>
                </div>
              </div>
              <div className="in-call-view-container"></div>
            </div>
          </div>
        </div>
        <div className="view-with-context-view chat__content">
          <div className="view-with-context__main-view">
            <div className="view-with-fixed-footer-view dz-clickable">
              <div className="hover-view">
                <span className="uikit-heading2 photo-icon">
                  Drop Files Here
                </span>
              </div>
              <div className="view-with-fixed-footer-view__main-view">
                <div id="messageView" className="messages">
                  <ul className="chat-list">
                    <Timestamp time="Today 3:24 AM"/>
                    <CardBorderMessage message="G-329268 is your Google verification code."/>
                    <div className="message-interval-spacing"></div>
                    <CardBorderMessage message="G-948346 is your Google verification code."/>
                    <RefreshMessage />
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="view-with-context__context-view js-context-view-container"></div>
        </div>
      </div>
    </div>
  );
};

export default Content;
