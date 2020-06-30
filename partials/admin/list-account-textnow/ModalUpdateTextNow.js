import ModalFormTextNow from "@/partials/admin/list-account-textnow/ModalFormTextNow"

const ModalUpdateTextNow = (props) => {
    const { handleClickButtonOk, isLoadingButtonOk, isShowUpdate, handleClose, initialValues } = props;


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

    const formUpdate = [
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

    ]

    return (
        <>
            <ModalFormTextNow
                idForm="formUpdate"
                key="modalUpdate"
                formFields={formUpdate}
                width={700}
                title="Update Account Textnow"
                visible={isShowUpdate}
                isLoading={isLoadingButtonOk}
                handleCancel={handleClose}
                handleSubmit={handleClickButtonOk}
                titleOK="Update"
                initialValues={initialValues}
            />
        </>
    )

}

export default ModalUpdateTextNow;