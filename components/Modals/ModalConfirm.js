import { Button } from "antd";
import BaseModal from "./BaseModal";

const ModalConfirm = (props) => {

    const { width, title, visible, handleCancel, titleOK, contentMessage, isLoadingButtonOk, handleClickButtonOk } = props;

    return <BaseModal
        width={width}
        title={title}
        visible={visible}
        onCancel={handleCancel}
        footer={[
            <Button key="submit" htmlType="submit" type="primary" onClick={handleClickButtonOk} loading={isLoadingButtonOk}>
                {titleOK}
            </Button>
        ]}
    >
        <div>{contentMessage}</div>
    </BaseModal>
}

export default ModalConfirm;