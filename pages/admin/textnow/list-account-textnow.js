
import { Table, Button, Card, Modal } from 'antd';
import { connect } from "react-redux";
import { useState, useEffect, useRef } from 'react';
import { bindActionCreators } from 'redux';

import LayoutAdmin from "@/components/Layout/LayoutAdmin";
import AuthHelper from "@/utils/AuthHelper";
import { getDataTextnow, updatePaginationTextnow, createDataTextnow } from '@/actions/admin/textnow';
import { setCookies } from "@/utils/Cookie";
import { formatDate } from "@/utils/filter";
import FormCreate from "@/partials/admin/list-account-textnow/FormCreate"

const ListAccountTextNow = (props) => {
    const { pagination, isCreateData, dataTextnows, updatePaginationTextnow, getDataTextnow, createDataTextnow } = props;
    const firstUpdate = useRef(true);

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
            render: () => (
                <div>
                    <Button type="danger" className="mr-2">Delete</Button>
                    <Button type="primary">Update</Button>
                </div>
            ),
        },
    ])

    const [visible, setVisible] = useState(false)

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

    const showModal = () => {
        setVisible(true)
    };

    const handleCancel = e => {
        setVisible(false)
    };

    const handleCreate = (values) => {
        createDataTextnow(values, (err, result) => {
            if(err) {
                console.log("co loi nay", err.response.data);
                return;
            }
            setVisible(false);
        });
    }

    return (
        <LayoutAdmin>
            <Card title="List Account TextNow">
                <Modal
                    width={700}
                    title="Create Account Textnow"
                    visible={visible}
                    onCancel={handleCancel}
                    footer={[
                        <Button form="myForm" key="submit" htmlType="submit" type="primary" loading={isCreateData}>
                            Submit
                        </Button>
                    ]}
                >
                    <FormCreate onFinish={handleCreate} />
                </Modal>
                <div className="mb-2 text-right" >
                    <Button type="primary" onClick={showModal}>
                        Add new
                    </Button>
                </div>
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
        isCreateData: textnow.isCreateData
    }
}

const mapDispatchToprops = (dispatch) => {
    return bindActionCreators({ 
        updatePaginationTextnow,
        getDataTextnow, 
        createDataTextnow 
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToprops)(ListAccountTextNow);

