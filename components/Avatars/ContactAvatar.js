const ContactAvatar = (props) => {
  return (
    <div className="uikit-avatar" style={{ background: props.avatarColor }}>
      <span className="uikit-avatar__ico-contact"></span>
    </div>
  );
};

export default ContactAvatar;
