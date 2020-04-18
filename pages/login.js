import { useState } from "react";
import { LayoutAuthentication } from "@/components/Layout";
import { capitalizeFirstLetter, validateEmail, cloneDeep } from "@/utils/helpers";
const Login = () => {
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
    const validate = validateForm({[name]: value});
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
      if(field === 'email') {
        if(!validateEmail(data.email)) {
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
      if(field === 'password') {
        if(data.password.length < 5) {
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

    if(Object.keys(result.errors).length) {
      result.isValid = true;
    }

    return result;
  }

  function login(event) {
    event.preventDefault();
    const validate = validateForm(dataForm);
    if (!validate.isValid) {
      setErrors(cloneDeep(defaultErrors));
    } else {
      setErrors({
        ...errors,
        ...validate.errors
      });
    }
  }

  return (
    <LayoutAuthentication>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form className="login100-form validate-form" onSubmit={login}>
              <span className="login100-form-title p-b-26">Text Now</span>
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

export default Login;
