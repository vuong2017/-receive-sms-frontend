
import { Table, Button, Card, Modal } from 'antd';
import { connect } from "react-redux";
import { useState, useEffect, useRef } from 'react';
import { bindActionCreators } from 'redux';

import LayoutAdmin from "@/components/Layout/LayoutAdmin";
import AuthHelper from "@/utils/AuthHelper";
import { getDataTextnow, updatePaginationTextnow, createDataTextnow, updateDataTextnow } from '@/actions/admin/textnow';
import { setCookies } from "@/utils/Cookie";
import { formatDate } from "@/utils/filter";
import ModalAddTextNow from "@/partials/admin/list-account-textnow/ModalAddTextNow"
import ModalUpdateTextNow from "@/partials/admin/list-account-textnow/ModalUpdateTextNow"

const ListAccountTextNow = (props) => {
    const { 
        pagination, 
        isCreateData, 
        isUpdateData, 
        dataTextnows, 
        updatePaginationTextnow, 
        getDataTextnow, 
        updateDataTextnow 
    } = props;
    const firstUpdate = useRef(true);

    const [isShowAdd, setShowAdd] = useState(false)
    const [isShowUpdate, setShowUpdate] = useState(false)
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
            title: 'Login By',
            dataIndex: 'login_by',
            key: 'login_by',
        },
        {
            title: 'Cookie',
            dataIndex: 'cookie',
            key: 'cookie',
        },
        {
            title: 'User Name',
            dataIndex: 'user_name_textnow',
            key: 'user_name_textnow',
        },
        {
            title: 'Create By',
            key: 'create_by',
            dataIndex: 'create_by',
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
                    <Button type="danger" className="mr-2">Delete</Button>
                    <Button type="primary" onClick={() => showModalUpdate(row)}>Update</Button>
                </div>
            ),
        },
    ])



    const handleTableChange = (pagination) => {
        updatePaginationTextnow(pagination);
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
        getDataTextnow(data);
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
        setShowUpdate(true)
    };

    const handleCreate = (values) => {
        createDataTextnow(values, (err) => {
            if (err) {
                console.log("co loi nay", err.response.data);
                return;
            }
            setShowAdd(false);
        });
    }

    const handleUpdate = (values) => {
        updateDataTextnow(textnowId, values, (err) => {
            if (err) {
                console.log("co loi nay", err.response.data);
                return;
            }
            setShowUpdate(false);
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
                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={dataTextnows}
                    pagination={pagination}
                    onChange={handleTableChange}
                />
            </Card>
        </LayoutAdmin>
    )
}

ListAccountTextNow.getInitialProps = (pageProps) => {
    const authHelper = new AuthHelper();
    const { ctx } = pageProps;
    const { store } = ctx;
    const getDataTextnowRequest = () => {
        store.dispatch(getDataTextnow());
    }
    if (typeof window === 'undefined') {
        const auth = authHelper.checkRedirectLoginSSR(ctx);
        setCookies(auth);
        getDataTextnowRequest();
        return {};
    }
    authHelper.checkRedirectLoginCSR();
    return {};
}

function mapStateToProps(state) {
    const { textnow } = state

    return {
        pagination: textnow.pagination,
        dataTextnows: textnow.dataTextnows,
        isCreateData: textnow.isCreateData,
        isUpdateData: textnow.isUpdateData,
    }
}

const mapDispatchToprops = (dispatch) => {
    return bindActionCreators({
        updatePaginationTextnow,
        getDataTextnow,
        createDataTextnow,
        updateDataTextnow
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToprops)(ListAccountTextNow);

