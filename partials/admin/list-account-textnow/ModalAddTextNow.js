import ModalFormTextNow from "@/partials/admin/list-account-textnow/ModalFormTextNow"

const ModalAddTextNow = (props) => {
    const { isLoadingButtonOk, isShowAdd, handleClose, handleClickButtonOk } = props;


    const phoneCountry = [
        {
            value: 1,
            label: "USA"
        },
    ]

    const loginBy = [
        {
            value: 1,
            label: "Facebook"
        },
        {
            value: 2,
            label: "Google"
        },
    ]

    const formCreate = [
        {
            label: "User Name Textnow",
            name: "user_name_textnow",
            rules: [{ required: true, message: 'Please input your user name textnow!' }],
            type: "input"
        },
        {
            label: "Cookie",
            name: "cookie",
            rules: [{ required: true, message: 'Please input your cookie!' }],
            type: "input.textarea"
        },
        {
            label: "Login By",
            name: "login_by",
            rules: [{ required: true, message: 'Please input your login by!' }],
            type: "select",
            listOptions: loginBy
        },
        {
            label: "Phone Number",
            name: "phone_number",
            rules: [{ required: true, message: 'Please input your phone number!' }],
            type: "input.number"
        },
        {
            label: "Phone Country",
            name: "phone_country_id",
            rules: [{ required: true, message: 'Please input your phone country!' }],
            type: "select",
            listOptions: phoneCountry
        },
    ]

    return (
        <>
            <ModalFormTextNow
                idForm="formAdd"
                key="modalAdd"
                formFields={formCreate}
                width={700}
                title="Create Account Textnow"
                visible={isShowAdd}
                isLoading={isLoadingButtonOk}
                handleCancel={handleClose}
                handleSubmit={handleClickButtonOk}
                titleOK="Create"
                initialValues={{
                    user_name_textnow: "",
                    cookie: "",
                    login_by: null,
                    phone_number: null,
                    phone_country_id: null
                }}
            />
        </>
    )

}

export default ModalAddTextNow;