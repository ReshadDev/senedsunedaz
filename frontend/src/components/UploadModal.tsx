import React, { useState } from "react";
import { Modal, Form, Input, Select, Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

interface UploadModalProps {
  visible: boolean;
  onClose: () => void;
}

const UploadModal: React.FC<UploadModalProps> = ({ visible, onClose }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = () => {
    // Handle the form submission logic here
    setLoading(true);
    // Simulate an API call or any async operation
    setTimeout(() => {
      setLoading(false);
      message.success("File uploaded successfully!");
      onClose();
    }, 1500);
  };

  const onCancel = () => {
    form.resetFields();
    onClose();
  };

  const normFile = () => {};

  return (
    <Modal
      title="Ərizə yüklə"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Form form={form} onFinish={onFinish}>
        <Form.Item
          name="name"
          label="Ərizə adını yazın"
          rules={[{ required: true, message: "Bu xana doldurulmalıdır" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="category"
          label="Kateqoriya seçin"
          rules={[{ required: true, message: "Bu xana doldurulmalıdır" }]}
        >
          <Select>
            <Option value="category1">Category 1</Option>
            <Option value="category2">Category 2</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="file"
          label="File"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: true, message: "Bu xana doldurulmalıdır" }]}
        >
          <Upload
            beforeUpload={() => false} // Prevent actual file upload for this example
            maxCount={1}
            listType="text"
            accept=".pdf, .doc, .docx"
          >
            <Button icon={<UploadOutlined />}>Sənəd seç</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Ərizəni yüklə
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UploadModal;
