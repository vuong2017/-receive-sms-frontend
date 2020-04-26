import { connect } from "react-redux";
import { loadData, startClock, tickClock } from '@/actions/example'

import { LayoutHome } from "@/components/Layout";
import SideBar from "@/partials/home/SideBar";
import Content from "@/partials/home/Content";
import AuthHelper from "@/utils/AuthHelper";

class Home extends React.Component {

  static async getInitialProps(pageProps) {
    const authHelper = new AuthHelper();
    if (typeof window === 'undefined') {
      return authHelper.checkRedirectLoginSSR(pageProps.ctx);
    }
    return authHelper.checkRedirectLoginCSR();
  }

  componentDidMount() {
    this.props.dispatch(loadData())
  }

  render() {
    return (
      <LayoutHome>
        <div id="main">
          <div className="main-view responsive-enabled">
            <div className="container flex-col" id="appContainer">
              <div className="flex-row flex-fill">
                <div id="contentContainer" className="flex-fill flex-col">
                  <div id="chatContainer">
                    {/* <h1>{this.props.placeholderData}</h1> */}
                    <SideBar />
                    <Content />
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
  const { placeholderData } = state
  return { 
    placeholderData
   }
}


export default connect(mapStateToProps)(Home);
