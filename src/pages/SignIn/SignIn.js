import React from "react";

import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";

import {
  Form,
  FormRow,
  Field,
  ErrorMessage,
} from "../../lib/style/generalStyles";

import { Formik } from "formik";
import * as Yup from "yup";

const Signin = () => {
  return (
    <>
      <Header isSecondary />
      <Section title={"Sign in"} isMainSection isCentered>
        <Formik
          initialValues={{
            email: "",
            password: "",
            isAdmin: false,
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email adress")
              .required("Email is required"),
            password: Yup.string().required("Password is required"),
          })}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
              actions.resetForm({
                email: "",
                password: "",
                isAdmin: false,
              });
            }, 1000);
          }}
        >
          {formik => (
            <Form>
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
