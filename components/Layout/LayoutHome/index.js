import Head from "./Head";

const LayoutHome = (props) => {
  return (
    <div id="app" className="messaging-v2">
      <Head />
      {props.children}
    </div>
  );
};

export default LayoutHome;
