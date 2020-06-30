import LayoutAdmin from "@/components/Layout/LayoutAdmin";
import AuthHelper from "@/utils/AuthHelper";


const DashBoard = () => {
    return (
        <LayoutAdmin>
            <h1>DashBoard</h1>
        </LayoutAdmin>
    )
}

DashBoard.getInitialProps = (pageProps) => {
    const authHelper = new AuthHelper();
    const { ctx } = pageProps;
    if (typeof window === 'undefined') {
        authHelper.checkRedirectLoginSSR(ctx);
        return {};
    }
    authHelper.checkRedirectLoginCSR();
    return {};
}

export default DashBoard;