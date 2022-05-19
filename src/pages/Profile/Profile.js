import React from "react";

import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";

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

const Profile = () => {
  return (
    <>
      <Header isSecondary />
      <Section
        title={"My profile"}
        buttonProps={{
          buttonText: "Edit",
          buttonStyle: ["heading", "outline"],
        }}
        isMainSection
      >
        <Formik
          initialValues={{
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
          validationSchema={Yup.object({
            firstName: Yup.string().required("First name is required"),
            lastName: Yup.string().required("Last name is required"),
            email: Yup.string()
              .email("Invalid email adress")
              .required("Email is required"),
            password: Yup.string()
              .min(8, "Password must be at least 8 characters long")
              .required("Password is required"),
            passwordConfirmed: Yup.string()
              .test("password-match", "Password must match", function (value) {
                return this.parent.password === value;
              })
              .required("Password is required"),
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
            <Form isCentered>
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
                  placeholder="Confirm password..."
                  name="passwordConfirmed"
                  type="password"
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage name="passwordConfirmed" component={"div"} />
              </FormRow>
              <FormRow>
                <Field
                  placeholder="Github username..."
                  name="githubUsername"
                  type="text"
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage name="githubUsername" component={"div"} />
              </FormRow>
              <FormRow>
                <Field
                  placeholder="Zeplin username..."
                  name="zeplinUsername"
                  type="text"
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage name="zeplinUsername" component={"div"} />
              </FormRow>
              <FormRow>
                <Select
                  id="activeFaculyYear"
                  {...formik.getFieldProps("activeFacultyYear")}
                >
                  <Option value="" disabled hidden>
                    Choose an active faculty year
                  </Option>
                  <Option value="0">Not a student</Option>
                  <Option value="1">1st faculty year</Option>
                  <Option value="2">2nd faculty year</Option>
                  <Option value="3">3rd faculty year</Option>
                  <Option value="4">4th faculty year</Option>
                  <Option value="5">5th faculty year</Option>
                </Select>
                <ErrorMessage name="activeFacultyYear" component={"div"} />
              </FormRow>
              <FormRow>
                <Button
                  type="submit"
                  disabled={formik.isSubmitting}
                  buttonStyle={["form", "outline"]}
                >
                  {formik.isSubmitting ? "Processing..." : "Register"}
                </Button>
              </FormRow>
            </Form>
          )}
        </Formik>
      </Section>
    </>
  );
};
export default Profile;
