import { Button } from 'antd';
import FormTextNow from "@/partials/admin/list-account-textnow/FormTextNow"
import BaseModal from "@/components/Modals/BaseModal";

const ModalFormTextNow = (props) => {

    const {
        visible,
        handleCancel,
        isLoading,
        handleSubmit,
        initialValues,
        titleOK,
        width,
        title,
        formFields,
        idForm
    } = props;
    return (
        <BaseModal
            width={width}
            title={title}
            visible={visible}
            onCancel={handleCancel}
            footer={[
                <Button form={idForm} key="submit" htmlType="submit" type="primary" loading={isLoading}>
                    {titleOK}
                </Button>
            ]}
        >
            <FormTextNow
                idForm={idForm}
                formFields={formFields}
                onFinish={handleSubmit}
                initialValues={initialValues}
            />
        </BaseModal>
    )
}

export default ModalFormTextNow;