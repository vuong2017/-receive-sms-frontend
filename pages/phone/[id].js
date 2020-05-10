import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actionTypes, getDataMessageByPhone } from '@/actions/phone';
import { LayoutHome } from "@/components/Layout";
import SideBar from "@/partials/home/SideBar";
import Toolbar from "@/partials/home/Toolbar";
import Content from "@/partials/home/Content";
import AuthHelper from "@/utils/AuthHelper";
import { setCookies } from "@/utils/Cookie";

class Message extends React.Component {

  static async getInitialProps(pageProps) {
    const authHelper = new AuthHelper();
    const { ctx } = pageProps;
    const { store } = ctx;
    const id = ctx.query.id;
    const getDataMessageByPhone = () => {
      store.dispatch({
        type: actionTypes.GET_DATA_MESSAGE_BY_PHONE,
        payload: {
          idParams: {
            id
          }
        }
      });
    }
    if (typeof window === 'undefined') {
      const auth = authHelper.checkRedirectLoginSSR(ctx);
      setCookies(auth);
      store.dispatch({ type: actionTypes.GET_DATA_PHONE });
      getDataMessageByPhone();
      return {
        query: ctx.query
      };
    }
    getDataMessageByPhone();
    authHelper.checkRedirectLoginCSR();
    return {
      query: ctx.query
    };
  }

  getDataMessage = () => {
    const { id } = this.props.query;
    this.props.getDataMessageByPhone({
      idParams: {
        id
      }
    });
  }

  render() {
    const { dataPhones, dataMessageByPhone } = this.props;
    return (
      <LayoutHome>
        <div id="main">
          <div className="main-view responsive-enabled">
            <div className="container flex-col" id="appContainer">
              <div className="flex-row flex-fill">
                <div id="contentContainer" className="flex-fill flex-col">
                  <div id="chatContainer">
                    <SideBar dataPhones={dataPhones} />
                    <div className="content">
                      <div className="chat section">
                        {/* <Toolbar /> */}
                        <Content dataMessageByPhone={dataMessageByPhone} onClickRefresh={this.getDataMessage} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutHome>
    );
  }
}

function mapStateToProps(state) {
  const { phone } = state

  return {
    dataPhones: phone.dataPhones,
    dataMessageByPhone: phone.dataMessageByPhone
  }
}

const mapDispatchToprops = (dispatch) => {
  return bindActionCreators({ getDataMessageByPhone }, dispatch)
}



export default connect(mapStateToProps, mapDispatchToprops)(Message);
