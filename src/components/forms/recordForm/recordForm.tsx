import React from 'react';
import { Button, Form } from 'antd';
import TextArea from "antd/es/input/TextArea";

type Props = {
  onSubmit: (record: IRecord) => void,
  action: string,
  initialData?: IRecord,
}

export const RecordForm: React.FC<Props> = ({ onSubmit, initialData, action}) => {
  return (
      <Form
          name={'record-form'}
          initialValues={initialData}
          onFinish={onSubmit}
      >
        <Form.Item
            label={'Description'}
            name={'description'}
            initialValue={initialData?.description}
            required
            rules={[{ required: true, message: 'Please fill description' }]}
        >
          <TextArea />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {action}
          </Button>
        </Form.Item>
      </Form>
  )
};

export default RecordForm;
