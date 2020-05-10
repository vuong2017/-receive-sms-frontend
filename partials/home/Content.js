import { CardBorderMessage } from "@/components/Cards";
import { Timestamp } from "@/components/Times";
import RefreshMessage from "@/partials/home/RefreshMessage";

const Content = (props) => {
  const { dataMessageByPhone, onClickRefresh } = props;
  return (

    <div className="view-with-context-view chat__content">
      <div className="view-with-context__main-view">
        <div className="view-with-fixed-footer-view dz-clickable">
          <div className="view-with-fixed-footer-view__main-view">
            <div id="messageView" className="messages">
              <ul className="chat-list">
                {/* <Timestamp time="Today 3:24 AM"/> */}
                {dataMessageByPhone.map(x => {
                  return (
                    <div key={x.id}>
                      <CardBorderMessage message={x.message} />
                      <div className="message-interval-spacing"></div>
                    </div>
                  )
                })}
                <RefreshMessage onClickRefresh={onClickRefresh} />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="view-with-context__context-view js-context-view-container"></div>
    </div>
  );
};

export default Content;
