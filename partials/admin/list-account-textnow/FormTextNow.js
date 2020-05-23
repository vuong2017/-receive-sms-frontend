import { Form, Input, Select } from 'antd';

const FormTextNow = (props) => {
    const { onFinish, initialValues, formFields, idForm } = props;
    const [form] = Form.useForm();

    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 16 },
    };

    const resetFields = () => form.resetFields()

    const handelOnFinish = (values) => {
        onFinish(values, resetFields)
    }

    return (
        <Form
            form={form}
            id={idForm}
            {...layout}
            name="basic"
            initialValues={initialValues}
            onFinish={handelOnFinish}
        >
            {
                formFields.map(item => {
                    const genNodeInput = (type) => {
                        let node = null;
                        if (type === "input") {
                            node = <Input />
                        }
                        if (type === "input.textarea") {
                            node = <Input.TextArea />
                        }
                        if (type === "select") {
                            node = <Select
                                placeholder="Select..."
                                allowClear
                            >
                                {item.listOptions.map(x => {
                                    return <Option key={x.value} value={x.value}>{x.label}</Option>
                                })}
                            </Select>
                        }
                        if (type === "input.number") {
                            node = <Input type="number" />
                        }
                        return node;
                    }
                    return <Form.Item
                        key={item.name}
                        label={item.label}
                        name={item.name}
                        rules={item.rules}
                    >
                        {genNodeInput(item.type)}
                    </Form.Item>
                })
            }
        </Form>
    )
}

export default FormTextNow;