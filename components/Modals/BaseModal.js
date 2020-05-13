import { Modal } from 'antd';

const BaseModal = (props) => {
    const { width, title, visible, onCancel, footer, children } = props;
    return <>
        <Modal
            width={width}
            title={title}
            visible={visible}
            onCancel={onCancel}
            footer={footer}
        >
            {children}
        </Modal>
    </>
}

export default BaseModal;