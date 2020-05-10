import Head from "./Head";
import SideBar from "./SideBar";
import Toolbar from "./Toolbar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div>
      <Head />
      <div id="wrapper">

        <SideBar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Toolbar />
            <div className="container-fluid">
              {props.children}
            </div>

          </div>

          <Footer />

        </div>

      </div>

      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>

      <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
              <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div className="modal-footer">
              <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
              <a className="btn btn-primary" href="login.html">Logout</a>
            </div>
          </div>
        </div>
      </div>

      <script src="/admin/vendor/jquery/jquery.min.js"></script>
      <script src="/admin/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="/admin/js/sb-admin-2.min.js"></script>
    </div>
  );
};

export default Layout;
