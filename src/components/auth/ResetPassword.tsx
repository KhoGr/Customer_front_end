import { Form, Input, Button, Alert } from 'antd';
import { resetPasswordRequest, NewPasswordFormProps } from 'src/types/User';

const NewPasswordForm: React.FC<NewPasswordFormProps> = ({ onSubmit, loading, error }) => {
  const [form] = Form.useForm();
  const handlePostNewPassword = (values: resetPasswordRequest) => {
    onSubmit(values);
    form.resetFields();
  };
  return (
    <div className="w-full max-w-md p-6 bg-gray rounded-lg shadow">
      <h2 className="text-2xl font-semibold text-center text-gray-700"></h2>
      {error && <Alert message={error} type="error" className="mb-4" showIcon />}
    <Form form={form} layout='horizontal'onFinish={handlePostNewPassword} >
        <Form.Item label="new-password" name="newPassword"
        rules={[
            {required:true,message:"vui lòng nhập mật khẩu mới"},
            { type: "email", message: "mật khẩu  không hợp lệ" },

        ]}
        >
          <Input placeholder="*******" autoComplete="newPassword" />

        </Form.Item>
        <Button type="primary" disabled={loading} htmlType="submit" block loading={loading}>
          Gửi
        </Button>
    </Form>
    </div>
  );
};
export default NewPasswordForm;
