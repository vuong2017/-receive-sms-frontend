import { connect } from "react-redux";
import { loadData, startClock, tickClock } from '@/actions/example'

import Layout from "@/components/layout/Layout";
import SideBar from "@/partials/home/SideBar";
import Content from "@/partials/home/Content";

class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadData())
  }

  render() {
    return (
      <Layout>
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
      </Layout>
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
