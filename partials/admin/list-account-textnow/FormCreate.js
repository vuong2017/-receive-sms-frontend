import { Form, Input, Select } from 'antd';

const FormCreate = (props) => {
    const { onFinish } = props;
    
    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 16 },
    };

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

    const phoneCountry = [
        {
            value: 1,
            label: "USA"
        },
    ]

    return (
        <Form
            id="myForm"
            {...layout}
            name="basic"
            initialValues={{ user_name_textnow: "", cookie: "", login_by: null, phone_number: null, phone_country_id: null }}
            onFinish={onFinish}
        >
            <Form.Item
                label="User Name Textnow"
                name="user_name_textnow"
                rules={[{ required: true, message: 'Please input your user name textnow!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Cookie"
                name="cookie"
                rules={[{ required: true, message: 'Please input your cookie!' }]}
            >
                <Input.TextArea />
            </Form.Item>

            <Form.Item
                name="login_by"
                label="Login By" rules={[{ required: true, message: 'Please input your login by!' }]}
            >
                <Select
                    placeholder="Select..."
                    allowClear
                >
                    {loginBy.map(x => {
                        return <Option value={x.value}>{x.label}</Option>
                    })}
                </Select>
            </Form.Item>

            <Form.Item
                label="Phone Number"
                name="phone_number"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
                <Input type="number" />
            </Form.Item>

            <Form.Item
                name="phone_country_id"
                label="Phone Country" rules={[{ required: true, message: 'Please input your phone country!' }]}
            >
                <Select
                    placeholder="Select..."
                    allowClear
                >
                    {phoneCountry.map(x => {
                        return <Option value={x.value}>{x.label}</Option>
                    })}
                </Select>
            </Form.Item>
        </Form>
    )
}

export default FormCreate;