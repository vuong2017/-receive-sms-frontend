import LayoutAdmin from "@/components/Layout/LayoutAdmin";
import AuthHelper from "@/utils/AuthHelper";


const ListPhone = () => {
    return (
        <LayoutAdmin>
            <h1>ListPhone</h1>
        </LayoutAdmin>
    )
}

ListPhone.getInitialProps = (pageProps) => {
    const authHelper = new AuthHelper();
    const { ctx } = pageProps;
    if (typeof window === 'undefined') {
        authHelper.checkRedirectLoginSSR(ctx);
        return {};
    }
    authHelper.checkRedirectLoginCSR();
    return {};
}

export default ListPhone;
