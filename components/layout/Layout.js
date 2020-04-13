import Header from "./Header";

const Layout = (props) => {
  return (
    <div id="app" className="messaging-v2">
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
