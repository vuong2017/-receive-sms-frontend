import Layout from "@/components/layout/Layout";
import SideBar from "@/partials/home/SideBar";
import Content from "@/partials/home/Content";

const Home = () => (
  <Layout>
    <div id="main">
      <div className="main-view responsive-enabled">
        <div className="container flex-col" id="appContainer">
          <div className="flex-row flex-fill">
            <div id="contentContainer" className="flex-fill flex-col">
              <div id="chatContainer">
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

export default Home;
