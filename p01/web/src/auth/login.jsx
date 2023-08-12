import { Form, Field } from "react-final-form";

const Login = () => {
  const onSubmit = async (values) => {
    console.log("🚀 ~ file: login.jsx:5 ~ onSubmit ~ values:", values);
  };

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        initialValues={{ username: "sampleusername" }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onS ubmit={handleSubmit}>
            <div>
              <label>User Name</label>
              <Field
                name="username"
                component="input"
                type="text"
                placeholder="Username"
              />
            </div>

            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </div>
  );
};

export default Login;
