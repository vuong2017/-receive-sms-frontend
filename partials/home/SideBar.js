import CardMessage from "@/components/cards/CardMessage";

const SideBar = () => {
  return (
    <div id="sidebar" className="side">
      <div className="top section">
        <div>
          <div id="recent-header" className="new-header">
            <div className="account-details">
              <div className="phoneNumber ">Hello Vuong Phan</div>
              {/* <div className="name">Vuong Phan</div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="middle section" style={{ boxSizing: "border-box" }}>
        <div
          className="chat-preview-wrapper uikit-chatlist"
          style={{ display: "block" }}
        >
          <div id="chat-preview-list">
            <ul className="chat-preview-list">
              <CardMessage
                avatarColor="#FD685A"
                messageTitle="22222"
                active={true}
                messageContent="G-948346 is your Google verification code."
                messageTime="3:34 CH"
              />
              <CardMessage
                avatarColor="#37A182"
                messageTitle="63906"
                messageContent="Trump 2020 Silver Bank Note is back in stock and already
                going fast. We may sell out again today. Get yours for
                just $1.99 =&gt; bit.ly/3b4qhGO txt stop 2 stop"
                messageTime="1:20 CH"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
