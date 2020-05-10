const Toolbar = () => {
    return <div className="profile-toolbar">
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
}

export default Toolbar;