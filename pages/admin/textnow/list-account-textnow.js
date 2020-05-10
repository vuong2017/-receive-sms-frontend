import LayoutAdmin from "@/components/Layout/LayoutAdmin";
import AuthHelper from "@/utils/AuthHelper";


const ListAccountTextNow = () => {
    return (
        <LayoutAdmin>
            <h1>ListAccountTextNow</h1>
        </LayoutAdmin>
    )
}

ListAccountTextNow.getInitialProps = (pageProps) => {
    const authHelper = new AuthHelper();
    const { ctx } = pageProps;
    if (typeof window === 'undefined') {
        authHelper.checkRedirectLoginSSR(ctx);
        return {};
    }
    authHelper.checkRedirectLoginCSR();
    return {};
}

export default ListAccountTextNow;
