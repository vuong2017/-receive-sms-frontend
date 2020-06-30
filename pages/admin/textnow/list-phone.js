
import { Table, Button, Card } from 'antd';
import { connect } from "react-redux";
import { useState, useEffect, useRef } from 'react';
import { bindActionCreators } from 'redux';
import { handleErrorServer } from "@/utils/helpers";

import LayoutAdmin from "@/components/Layout/LayoutAdmin";
import AuthHelper from "@/utils/AuthHelper";
import PhoneAction from '@/actions/admin/phone';
import PhoneMessageAction from "@/actions/admin/phone-message";
import { setCookies } from "@/utils/Cookie";
import { formatDate } from "@/utils/filter";
import ModalAddTextNow from "@/partials/admin/list-account-textnow/ModalAddTextNow"
import ModalUpdateTextNow from "@/partials/admin/list-account-textnow/ModalUpdateTextNow"
import ModalConfirm from "@/components/Modals/ModalConfirm"
import ModalListMessageByPhone from "@/partials/admin/list-phone/ModalListMessageByPhone"

const phoneAction = new PhoneAction()
const phoneMessageAction = new PhoneMessageAction()

const ListPhone = (props) => {
    const {
        pagination,
        isCreateData,
        isUpdateData,
        isDeleteData,
        dataPhones,
        dataMessageByPhone,
        createData,
        updatePagination,
        deleteData,
        getData,
        updateData,
        getDataMessageByPhone
    } = props;
    const firstUpdate = useRef(true);

    const [isShowAdd, setShowAdd] = useState(false)
    const [isShowUpdate, setShowUpdate] = useState(false)
    const [isShowDelete, setShowDelete] = useState(false)
    const [isShowListMessageByPhone, setShowListMessageByPhone] = useState(false)
    const [textNowItemEdit, setTextNowItemEdit] = useState({
        user_name_textnow: "",
        cookie: "",
        login_by: null,
        phone_number: null,
        phone_country_id: null
    })
    const [textnowId, setTextNowId] = useState(null);

    const [columns,] = useState([
        {
            title: 'Username ',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Phone Country',
            dataIndex: 'phone_country_id',
            key: 'phone_country_id',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phone_number',
            key: 'phone_number',
        },
        {
            title: 'Message',
            key: 'message',
            dataIndex: 'message',
            render: (_, row) => {
                return <div>
                    <Button className="mr-2" onClick={() => showModalListMessageByPhone(row.id)}>Open Message</Button>
                </div>
            }
        },
        {
            title: 'Create At',
            key: 'created_at',
            dataIndex: 'created_at',
            render: (text) => {
                return <span>{formatDate(text)}</span>
            }
        },
        {
            title: 'Update At',
            key: 'updated_at',
            dataIndex: 'updated_at',
            render: (text) => {
                return <span>{formatDate(text)}</span>
            }
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, row) => (
                <div>
                    <Button type="danger" className="mr-2" onClick={() => showModalDelete(row.id)}>Delete</Button>
                    <Button type="primary" onClick={() => showModalUpdate(row)}>Update</Button>
                </div>
            ),
        },
    ])



    const handleTableChange = (pagination) => {
        updatePagination(pagination);
    }

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        const data = {
            params: {
                page: pagination.current
            }
        }
        getData(data, () => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        });

    }, [pagination.current])

    const showModalUpdate = (item) => {
        setTextNowId(item.id);
        setTextNowItemEdit({
            user_name_textnow: item.user_name_textnow,
            cookie: item.cookie,
            login_by: item.login_by,
            phone_number: item.phones ? item.phones[0].phone_number : null,
            phone_country_id: item.phone_country_id
        })
        setShowUpdate(true);
    };

    const showModalListMessageByPhone = (id) => {
        setTextNowId(id);
        getDataMessageByPhone({
            idParams: {
                id
            }
        });
        setShowListMessageByPhone(true);
    }

    const showModalDelete = (id) => {
        setTextNowId(id);
        setShowDelete(true);
    }

    const handleCreate = (values, resetFields) => {
        createData(values, (err) => {
            if (err) {
                handleErrorServer(err)
                return;
            }
            setShowAdd(false);
            resetFields();
        });
    }

    const handleUpdate = (values, resetFields) => {
        updateData(textnowId, values, (err) => {
            if (err) {
                handleErrorServer(err)
                return;
            }
            setShowUpdate(false);
            resetFields();
        });
    }

    const handleDelete = () => {
        deleteData(textnowId, (err, result) => {
            if (err) {
                handleErrorServer(err)
                return;
            }
            setShowDelete(false);
        });
    }

    return (
        <LayoutAdmin>
            <Card title="List Account TextNow">
                <div className="mb-2 text-right" >
                    <Button type="primary" onClick={() => setShowAdd(true)}>
                        Add new
                    </Button>
                </div>
                <ModalAddTextNow
                    isShowAdd={isShowAdd}
                    handleClose={() => setShowAdd(false)}
                    handleClickButtonOk={handleCreate}
                    isLoadingButtonOk={isCreateData}
                />
                <ModalUpdateTextNow
                    isShowUpdate={isShowUpdate}
                    initialValues={textNowItemEdit}
                    handleClose={() => setShowUpdate(false)}
                    handleClickButtonOk={handleUpdate}
                    isLoadingButtonOk={isUpdateData}
                />
                <ModalConfirm
                    width={500}
                    title="Confirm Delete"
                    visible={isShowDelete}
                    handleCancel={() => setShowDelete(false)}
                    handleClickButtonOk={handleDelete}
                    titleOK="Delete"
                    contentMessage="Do you want to delete?"
                    isLoadingButtonOk={isDeleteData}
                />
                <ModalListMessageByPhone
                    width={900}
                    title="List Message"
                    visible={isShowListMessageByPhone}
                    dataListMessage={dataMessageByPhone}
                    handleCancel={() => setShowListMessageByPhone(false)}
                    handleClickButtonOk={() => setShowListMessageByPhone(false)}
                    titleOK="Cancel"
                />
                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={dataPhones}
                    pagination={pagination}
                    onChange={handleTableChange}
                />
            </Card>
        </LayoutAdmin>
    )
}

ListPhone.getInitialProps = (pageProps) => {
    const authHelper = new AuthHelper();
    const { ctx } = pageProps;
    const { store } = ctx;
    const getDataRequest = () => {
        store.dispatch(phoneAction.getData());
    }
    if (typeof window === 'undefined') {
        const auth = authHelper.checkRedirectLoginSSR(ctx);
        setCookies(auth);
        getDataRequest();
        return {};
    }
    authHelper.checkRedirectLoginCSR();
    getDataRequest();
    return {};
}

function mapStateToProps(state) {
    const { phone, phoneMessage } = state


    return {
        pagination: phone.pagination,
        dataPhones: phone.dataPhones,
        isCreateData: phone.isCreateData,
        isUpdateData: phone.isUpdateData,
        isDeleteData: phone.isDeleteData,
        dataMessageByPhone: phoneMessage.dataMessageByPhone
    }
}

const mapDispatchToprops = (dispatch) => {
    return bindActionCreators({
        updatePagination: phoneAction.updatePagination,
        getData: phoneAction.getData,
        createData: phoneAction.createData,
        updateData: phoneAction.updateData,
        deleteData: phoneAction.deleteData,
        getDataMessageByPhone: phoneMessageAction.getData
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToprops)(ListPhone);

