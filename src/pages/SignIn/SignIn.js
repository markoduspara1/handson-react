import React, { useState } from "react";
import { getAllUser, loginUser } from "../../api/users";

import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";

import {
  Form,
  FormRow,
  Field,
  ErrorMessage,
  FormSuccessMessage,
} from "../../lib/style/generalStyles";

import { Formik } from "formik";
import * as Yup from "yup";

const Signin = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  return (
    <>
      <Header isSecondary />
      <Section title={"Sign in"} isMainSection isCentered>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email adress")
              .required("Email is required"),
            password: Yup.string().required("Password is required"),
          })}
          onSubmit={async (values, actions) => {
            try {
              const res = await loginUser(values);
              const users = await getAllUser(res.access_Token);
              const user = users.find(user => user.email === values.email);

              localStorage.setItem("accessToken", res.access_Token);

              actions.setSubmitting(false);
              actions.resetForm({
                email: "",
                password: "",
              });

              setSuccessMessage({
                error: false,
                message: `Hi ${
                  user.first_name + " " + user.last_name
                }, login was successfull.`,
              });

              setTimeout(() => {
                setSuccessMessage(null);
              }, 3000);
            } catch (err) {
              setSuccessMessage({
                error: true,
                message: "User registration unsuccessfull",
              });

              actions.setSubmitting(false);
            }
          }}
        >
          {formik => (
            <Form>
              {successMessage && (
                <FormRow>
                  <FormSuccessMessage isError={successMessage.error}>
                    {successMessage.error}
                  </FormSuccessMessage>
                </FormRow>
              )}
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
                <Button
                  type="submit"
                  disabled={formik.isSubmitting}
                  buttonStyle={["form", "outline"]}
                >
                  {formik.isSubmitting ? "Processing..." : "Sign in"}
                </Button>
              </FormRow>
            </Form>
          )}
        </Formik>
      </Section>
    </>
  );
};
export default Signin;
