import { withFormik } from "formik";
import { post } from "axios";
import { message, notification } from "antd";

export default withFormik({
  mapPropsToValues: () => ({
    title: "",
    src: "",
    count: 0,
    cost: 0
  }),
  handleSubmit: async (values, { props }) => {
    try {
      const res = await post("http://localhost:3001/vendingList", values);
      debugger
      props.addItem(res.data);
      message.success("Успешно добавлено");
      props.history.push("/list");
    } catch (e) {
      debugger
      notification(JSON.stringify(e));
    }
  }
});
