import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { login } from '@/actions/auth'
import { LayoutAuthentication } from "@/components/Layout";
import { Alert } from "@/components/Alerts";
import { capitalizeFirstLetter, validateEmail, cloneDeep } from "@/utils/helpers";
import AuthHelper from "@/utils/AuthHelper";

const Login = (props) => {
  const { errorsMessage, loginFail } = props;

  const defaultErrors = {
    email: {
      valid: false,
      message: "",
    },
    password: {
      valid: false,
      message: "",
    },
  };

  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState(cloneDeep(defaultErrors));

  function onChangeInput(name, value) {
    const data = {
      ...dataForm,
      [name]: value,
    };
    setDataForm(data);
    const validate = validateForm({ [name]: value });
    if (validate.isValid) {
      setErrors({
        ...errors,
        ...validate.errors
      });

    } else {

      setErrors({
        ...errors,
        [name]: {
          valid: false,
          message: ""
        },
      });
    }
  }

  function validateForm(data) {
    const result = {
      isValid: false,
      errors: {}
    };
    Object.keys(data).forEach((field) => {
      // validate all field required
      if (!data[field]) {
        result.errors = {
          ...result.errors,
          [field]: {
            valid: true,
            message: capitalizeFirstLetter(`${field} is required!`)
          }
        }
        return;
      }
      if (field === 'email') {
        if (!validateEmail(data.email)) {
          result.errors = {
            ...result.errors,
            [field]: {
              valid: true,
              message: 'Valid email is: a@b.c!'
            }
          }
          return;
        }
      }
      if (field === 'password') {
        if (data.password.length < 5) {
          result.errors = {
            ...result.errors,
            [field]: {
              valid: true,
              message: 'Password must be greater than 5 characters!'
            }
          }
          return;
        }
      }
    });

    if (Object.keys(result.errors).length) {
      result.isValid = true;
    }

    return result;
  }

  function submit(event) {
    event.preventDefault();
    const validate = validateForm(dataForm);
    if (!validate.isValid) {
      setErrors(cloneDeep(defaultErrors));
      props.login(dataForm);
    } else {
      setErrors({
        ...errors,
        ...validate.errors
      });
    }
  }

  function handleError() {

    let errors = [];
    if (Array.isArray(props.errorsMessage.errors)) {
      errors = Object.keys(props.errorsMessage.errors).map(key => {
        return props.errorsMessage.errors[key]
      })
    } else {
      errors = [[props.errorsMessage.errors]]
    }
    return (
      <Alert bgColor="alert-danger">
        {errors.map((x, index) => <p key={index}>{x.join(",")}</p>)}
      </Alert>
    )
  }

  return (
    <LayoutAuthentication>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form className="login100-form validate-form" onSubmit={submit}>
              <span className="login100-form-title p-b-26">Text Now</span>
              <div className="mb-4">
                {
                  loginFail ? handleError() : ''
                }
              </div>
              <div
                className={`wrap-input100 validate-input ${
                  errors.email.valid ? "alert-validate" : ""
                  }`}
                data-validate={errors.email.message}
              >
                <input
                  className="input100"
                  type="text"
                  name="email"
                  value={dataForm.email}
                  onChange={(event) =>
                    onChangeInput("email", event.target.value)
                  }
                />
                <span
                  className="focus-input100"
                  data-placeholder="Email"
                ></span>
              </div>
              <div
                className={`wrap-input100 validate-input ${
                  errors.password.valid ? "alert-validate" : ""
                  }`}
                data-validate={errors.password.message}
              >
                <span className="btn-show-pass">
                  <i className="zmdi zmdi-eye"></i>
                </span>
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  value={dataForm.password}
                  onChange={(event) =>
                    onChangeInput("password", event.target.value)
                  }
                />
                <span
                  className="focus-input100"
                  data-placeholder="Password"
                ></span>
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

Login.getInitialProps = async pageProps => {
  const authHelper = new AuthHelper();
  if (typeof window === 'undefined') {
    return authHelper.checkRedirectHomeSSR(pageProps.ctx);
  }
  return authHelper.checkRedirectHomeCSR();
}

function mapStateToProps({ auth }) {
  const { userLogin, errorsMessage, loginFail } = auth;
  return {
    userLogin,
    errorsMessage,
    loginFail
  };
}

const mapDispatchToprops = (dispatch) => {
  return bindActionCreators({ login }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToprops)(Login);

