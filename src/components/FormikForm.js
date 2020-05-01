import React from "react";
import { Formik } from "formik";

import * as Yup from "yup";
import axios from "axios";

import Error from "./Error";
import Modal from "./modal";

Yup.setLocale({
  mixed: {
    default: "No valido",
    required: "Campo Requerido",
  },
});

const phoneRegExp = /^\+?([0-9]{1,2})\)?[-. ]?([0-9]{2,4})[-. ]?([0-9]{3,4})[-. ]?([0-9]{3,4})$/;

const ValidationSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, "el nombre debe contener al menos 2 caracteres")
    .max(50, "debe contener maximo 50 caracteres")
    .required(),
  last_name: Yup.string()
    .min(2, "el Apellido debe contener al menos 2 caracteres")
    .max(50, "debe contener maximo 50 caracteres")
    .required(),
  email: Yup.string()
    .email("no es un Email")
    .max(50, "debe contener maximo 50 caracteres")
    .required(),
  phone: Yup.string()
    .required()
    .matches(phoneRegExp, "Numero de Telefono no valido"),
  question: Yup.string().min(5, "Escribe un poco mas....").required(),
});

export default function FormikForm(props) {
  return (
    <Formik
      className="Form"
      initialValues={{
        first_name: "",
        last_name: "",
        email: "",
        phone: "+54-911-2762-5417",
        question: "",
      }}
      validationSchema={ValidationSchema}
      validate={(values) => {
        let errors = {};
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        axios.post(
          "https://emmahavokoficial-client-api.herokuapp.com/api/client",
          {
            first_name: values.first_name,
            last_name: values.last_name,
            phone: values.phone,
            email: values.email,
            question: values.question,
          }
        );
        setTimeout(() => {
          props.onOpenModal();
          resetForm();
          setSubmitting(false);
        }, 500);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue,
      }) => (
        <form onSubmit={handleSubmit} className="Form-Group">
          <h1 className="mb-3">Deja tus preguntas</h1>

          <div>
            {/* <label>Nombre</label> */}
            <input
              type="text"
              name="first_name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.first_name}
              placeholder="Nombre"
              className="form-control"
            />
            <Error touched={touched.first_name} message={errors.first_name} />
          </div>

          <div>
            {/* <label>Apellido</label> */}
            <input
              type="text"
              name="last_name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.last_name}
              placeholder="Apellido"
              className="form-control"
            />
            <Error touched={touched.last_name} message={errors.last_name} />
          </div>

          <div>
            {/* <label>Email</label> */}
            <input
              type="text"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Email"
              className="form-control"
            />
            <Error touched={touched.email} message={errors.email} />
          </div>

          <div>
            {/* <label>phoneNumber</label> */}
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              placeholder="Telefono"
              className="form-control"
            />
            <Error touched={touched.phone} message={errors.phone} />
          </div>

          <div>
            {/* <label>Message</label> */}
            <textarea
              name="question"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.question}
              placeholder="Preguntas..."
              className="form-control"
              rows="5"
            />
            <Error touched={touched.question} message={errors.question} />
          </div>

          <div>
            <button
              className="btn btn-primary btn-lg btn-block"
              type="submit"
              disabled={isSubmitting}
            >
              Enviar Mensaje
            </button>
            <Modal isOpen={props.modalIsOpen} onClose={props.onCloseModal}>
              <h1>Mensaje Enviado!</h1>
            </Modal>
          </div>
        </form>
      )}
    </Formik>
  );
}
