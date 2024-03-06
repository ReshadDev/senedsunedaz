import React from "react";
import { Modal, Form, Input, Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useMutation } from "react-query";

interface UploadModalProps {
  visible: boolean;
  onClose: () => void;
}

interface FormData {
  docName: string;
  link: string;
  docFile: File;
  imageFile: File;
}

const postFormData = async (formData: FormData) => {
  const apiUrl = "http://localhost:8080/api/application/upload/1";

  try {
    const body = new FormData();
    body.append("docName", formData.docName);
    body.append("link", formData.link);
    body.append("docFile", formData.docFile);
    body.append("imageFile", formData.imageFile);

    const response = await fetch(apiUrl, {
      method: "POST",
      body,
    });

    if (!response.ok) {
      throw new Error("Error uploading files");
    }

    return response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

const UploadModal: React.FC<UploadModalProps> = ({ visible, onClose }) => {
  const [form] = Form.useForm();

  const mutation = useMutation(
    ({ formData }: { formData: FormData }) => postFormData(formData),
    {
      onSuccess: () => {
        message.success("File uploaded successfully!");
        onClose();
        form.resetFields();
      },
      onError: (error) => {
        console.error("Error:", error);
        message.error("An error occurred. Please try again.");
      },
    }
  );

  const onFinish = async (values: FormData) => {
    try {
      mutation.mutate({ formData: values });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const onCancel = () => {
    form.resetFields();
    onClose();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const normFile = (e: any): File[] => {
    if (Array.isArray(e)) {
      return e;
    }

    if (e && e.fileList) {
      return e.fileList.map(
        (file: { originFileObj: File }) => file.originFileObj
      );
    }

    return [];
  };

  return (
    <Modal
      title="Ərizə yüklə"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Form form={form} onFinish={onFinish}>
        <Form.Item
          name="docName"
          label="Ərizə adını yazın"
          rules={[{ required: true, message: "Bu xana doldurulmalıdır" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="link"
          label="Link"
          rules={[{ required: true, message: "Bu xana doldurulmalıdır" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="docFile"
          label="Document"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload
            beforeUpload={() => false}
            maxCount={1}
            listType="text"
            accept=".pdf, .doc, .docx"
          >
            <Button icon={<UploadOutlined />}>Select Document</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="imageFile"
          label="Image"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload
            beforeUpload={() => false}
            maxCount={1}
            listType="picture"
            accept=".jpeg, .jpg"
          >
            <Button>Select Image</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={mutation.isLoading}>
            Ərizəni yüklə
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UploadModal;
