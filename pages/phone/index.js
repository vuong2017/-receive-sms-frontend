import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Router from 'next/router'

import { actionTypes, getDataPhone } from '@/actions/phone';
import AuthHelper from "@/utils/AuthHelper";
import { setCookies } from "@/utils/Cookie";

class HomePhone extends React.Component {

    static async getInitialProps(pageProps) {
        const authHelper = new AuthHelper();
        if (typeof window === 'undefined') {
            const auth = authHelper.checkRedirectLoginSSR(pageProps.ctx);
            setCookies(auth);
            pageProps.ctx.store.dispatch({ type: actionTypes.GET_DATA_PHONE });
            return {
                isServer: true,
                res: pageProps.ctx.res,
            };
        }
        authHelper.checkRedirectLoginCSR();
        return {
            isServer: false
        }
    }

    redirectFirstMessageSSR = (res, id) => {
        res.writeHead(301, { Location: `phone/${id}`, 'Cache-Control': 'no-cache' })
        res.end();
    }

    render() {
        if (this.props.dataPhones.length) {
            const id = this.props.dataPhones[0].id;
            if (this.props.isServer) {
                this.redirectFirstMessageSSR(this.props.res, id);
            } else {
                Router.push(`phone/${id}`);
            }
        }
        return <h1></h1>;
    }
}

function mapStateToProps(state) {
    const { phone } = state

    return {
        dataPhones: phone.dataPhones,
    }
}

const mapDispatchToprops = (dispatch) => {
    return bindActionCreators({ getDataPhone }, dispatch)
}



export default connect(mapStateToProps, mapDispatchToprops)(HomePhone);
