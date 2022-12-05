import React from 'react'
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/core";

export default function Signup() {
  const handleSubmit = ({ formData }) => {
    console.log("formData", formData)
  }

  const schema = {
    title: 'Registration Form',
    type: 'object',
    properties: {
      Name: {
        type: 'string',
        title: 'Name',
      },
      mobile: {
        type: 'string',
        title: 'Mobile',
      },
      email: {
        type: 'string',
        title: 'email',
      }
    }
  }

  return (
    <div>
      <Form
        validator={validator}
        schema={schema}
        onSubmit={handleSubmit}
      >
      </Form>
    </div >
  )
}
