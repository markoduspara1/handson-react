import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import {
  Form,
  FormRow,
  Field,
  Select,
  Option,
  ErrorMessage,
} from "../../lib/style/generalStyles";
import { Formik } from "formik";
import * as Yup from "yup";

const Register = () => {
  return (
    <>
      <Header isSecondary />
      <Section title={"Register"} isMainSection isCentered>
        <Formik
          initialValue={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirmed: "",
            githubUsername: "",
            zeplinUsername: "",
            activeFaculyYear: "",
            isAdmin: false,
          }}
          validationschema={Yup.object({
            firstName: Yup.string().required("First name is required"),
            lastName: Yup.string().required("Last name is required"),
            email: Yup.string()
              .email("Invalid email adress")
              .required("Email is required"),
            password: Yup.string().min(
              8,
              "Password must be at least 8 characters long"
            ),
            passwordConfirmed: Yup.string().test(
              "password-match",
              "Password must match",
              function (value) {
                return this.parent.password === value;
              }
            ),
            githubUsername: Yup.string().required(
              "Github username is required"
            ),
            zeplinUsername: Yup.string().required(
              "Zeplin username is required"
            ),
            activeFaculyYear: Yup.string().required(
              "Active facultacy year is required"
            ),
          })}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
              actions.resetForm({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                passwordConfirmed: "",
                githubUsername: "",
                zeplinUsername: "",
                activeFaculyYear: "",
                isAdmin: false,
              });
            }, 1000);
          }}
        >
          {formik => (
            <Form>
              <FormRow>
                <Field
                  placeholder="First name ..."
                  name="firstName"
                  type="text"
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage name="firstName" component={"div"} />
              </FormRow>
              <FormRow>
                <Field
                  placeholder="Last name ..."
                  name="lastName"
                  type="text"
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage name="lastName" component={"div"} />
              </FormRow>
              <FormRow>
                <Field
                  placeholder="Email ..."
                  name="email"
                  type="email"
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage name="email" component={"div"} />
              </FormRow>
              <FormRow>
                <Field
                  placeholder="Password..."
                  name="password"
                  type="password"
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage name="password" component={"div"} />
              </FormRow>
              <FormRow>
                <Field
                  placeholder="PasswordConfirmed..."
                  name="passwordConfirmed"
                  type="password"
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage name="passwordConfirmed" component={"div"} />
              </FormRow>
              <FormRow>
                <Field
                  placeholder="Password..."
                  name="password"
                  type="password"
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage name="password" component={"div"} />
              </FormRow>
            </Form>
          )}
        </Formik>
      </Section>
    </>
  );
};
export default Register;
