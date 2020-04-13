const RefreshMessage = () => {
  return (
    <div>
      <div className="report_spam">
        <div className="uikit-chatview__timestamp--divider spamLine1">
          <div>Refresh to receive messages</div>
        </div>
        <div className="uikit-chatview__timestamp--divider spamLine2">
          <div id="report" className="uikit-link uikit-link--primary">
            Refresh
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefreshMessage;
