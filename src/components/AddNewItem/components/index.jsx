import React from "react";
import { Form, Input, Button } from "antd";

const AddNewItem = ({
  values,
  handleChange,
  handleSubmit
}) => (
  <>
    <h1>Добавить новый товар</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Item label="Название">
        <Input name="title" onChange={handleChange} value={values.title} />
      </Form.Item>
      <Form.Item label="Количество">
        <Input
          name="count"
          onChange={handleChange}
          value={values.count}
          type="number"
        />
      </Form.Item>
      <Form.Item label="Цена">
        <Input
          name="cost"
          onChange={handleChange}
          value={values.cost}
          type="number"
        />
      </Form.Item>
      <Form.Item label="Изображение (ссылка)">
        <Input name="src" onChange={handleChange} value={values.src} />
      </Form.Item>
      <Button htmlType="submit">Добавить</Button>
    </Form>
  </>
);

export default AddNewItem;
