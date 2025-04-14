import { Form, Input, Button, Alert } from 'antd';
import { requestPasswordReset, resetPasswordFormProps } from 'src/types/User';

const ResetPasswordForm: React.FC<resetPasswordFormProps> = ({ onSubmit, loading, error }) => {
  const [form] = Form.useForm();
  const handlePostMail = (values: requestPasswordReset) => {
    onSubmit(values);
    form.resetFields();
  };
  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-ma">
      <h2 className="text-2xl font-semibold text-center text-blue-400"></h2>
      {error && <Alert message={error} type="error" className="mb-4" showIcon />}
      <Form form={form} layout="horizontal" onFinish={handlePostMail}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Vui lòng nhập email' },
            { type: 'email', message: 'Email không hợp lệ' },
          ]}
        >
          <Input placeholder="abc@gmail.com" autoComplete="email" />
        </Form.Item>
        <Button type="primary" disabled={loading} htmlType="submit" block loading={loading}>
          Gửi về mail
        </Button>
      </Form>
    </div>
  );
};
export default ResetPasswordForm;
