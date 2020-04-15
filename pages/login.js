import { LayoutAuthentication } from "@/components/Layout";

const Login = () => {
  return (
    <LayoutAuthentication>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-26">Text Now</span>
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is: a@b.c"
              >
                <input className="input100" type="text" name="email" />
                <span className="focus-input100" data-placeholder="Email"></span>
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Enter password"
              >
                <span className="btn-show-pass">
                  <i className="zmdi zmdi-eye"></i>
                </span>
                <input className="input100" type="password" name="pass" />
                <span className="focus-input100" data-placeholder="Password"></span>
              </div>

              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn"></div>
                  <button className="login100-form-btn">Login</button>
                </div>
              </div>

              <div className="text-center p-t-115">
                <span className="txt1">Don’t have an account?</span>

                <a className="txt2" href="#">
                  Sign Up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LayoutAuthentication>
  );
};

export default Login;
