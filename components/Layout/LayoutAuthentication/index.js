import Head from "./Head";

const Layout = (props) => {
  return (
    <div>
      <Head />
      {props.children}
      <script src="vendor/jquery/jquery-3.2.1.min.js"></script>
      <script src="js/main.js"></script>
    </div>
  );
};

export default Layout;
