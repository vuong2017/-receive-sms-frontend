import { CardMessage } from "@/components/Cards";
import Link from 'next/link'

const SideBar = (props) => {
  const { dataPhones } = props;
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
              {
                dataPhones.map(x => {
                  return (
                    <Link key={x.id} href="/phone/[id]" as={`/phone/${x.id}`}>
                      <a>
                        <CardMessage
                          avatarColor="#FD685A"
                          messageTitle={x.phone_number}
                          active={true}
                          messageTime={x.created_at}
                        />
                      </a>
                    </Link>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
