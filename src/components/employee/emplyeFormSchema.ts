import * as yup from "yup";

export type EmployeeSchemaType = {
  first_name: string;
  last_name: string;
  email: string;
  number: string;
  photo?: string;
  gender: string;
};

const employeeSchema = yup.object<EmployeeSchemaType>().shape({
  first_name: yup
    .string()
    .required("First Name is required")
    .min(6, "Min 6 characters")
    .max(10, "Max 10 characters ")
    .matches(/^[a-zA-Z]*$/, "Is not in correct format"),
  last_name: yup
    .string()
    .required("Last Name is required")
    .min(6, "Min 6 characters")
    .max(10, "Max 10 character")
    .matches(/^[a-zA-Z]*$/, "Is not in correct format"),
  email: yup.string().required("Email is required").email(),
  number: yup
    .string()
    .required("Contact number is required")
    .matches(/^(?:0|(?:\+94))[0-9]{9}$/, "Is not in LK phone number "),
  photo: yup.string().optional(),
  gender: yup.string().required("Gender is required"),
});

export default employeeSchema;
