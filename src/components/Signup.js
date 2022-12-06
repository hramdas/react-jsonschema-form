import React from 'react'
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/mui";
import styles from "../styles/Form.module.css"

export default function Signup() {
  const handleSubmit = ({ formData }) => {
    console.log("formData", formData)
  }

  const schema = {
    title: 'Registration Form',
    description: 'Form description',
    type: 'object',
    properties: {
      name: {
        type: 'string',
        title: 'Name',
      },
      mobile: {
        type: 'number',
        title: 'Mobile',
      },
      email: {
        type: 'string',
        title: 'Email',
      }
    }
  }
  const uiSchema = {

  };

  return (
    <div className={styles.formContainer}>
      <Form
        validator={validator}
        schema={schema}
        onSubmit={handleSubmit}
        uiSchema={uiSchema}
      >
      </Form>
    </div >
  )
}
