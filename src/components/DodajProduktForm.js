import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../style.css';

const DodajProduktForm = ({ onDodajProdukt }) => {
  const initialValues = {
    nazwa: '',
    marka: '',
    model: '',
    cena: '',
    dostepnosc: false,
  };

  const validationSchema = Yup.object({
    nazwa: Yup.string().required('Pole wymagane'),
    marka: Yup.string().required('Pole wymagane'),
    model: Yup.string().required('Pole wymagane'),
    cena: Yup.number().typeError('Wprowadź liczbę').required('Pole wymagane'),
  });

  const onSubmit = (values, { resetForm }) => {
    onDodajProdukt(values);
    resetForm();
  };

  const handleDostepnoscChange = (e) => {
    const { checked } = e.target;
    setDostepnosc(checked);
  };

  const [dostepnosc, setDostepnosc] = useState(initialValues.dostepnosc);

  return (
    <div className="dodaj-produkt-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label>
              Nazwa:
              <Field type="text" name="nazwa" />
              <ErrorMessage name="nazwa" component="div" className="error" />
            </label>
          </div>
          <div>
            <label>
              Marka:
              <Field type="text" name="marka" />
              <ErrorMessage name="marka" component="div" className="error" />
            </label>
          </div>
          <div>
            <label>
              Model:
              <Field type="text" name="model" />
              <ErrorMessage name="model" component="div" className="error" />
            </label>
          </div>
          <div>
            <label>
              Cena:
              <Field type="text" name="cena" />
              <ErrorMessage name="cena" component="div" className="error" />
            </label>
          </div>
          <div>
            <label>
              Dostępność:
              <input
                type="checkbox"
                name="dostepnosc"
                checked={dostepnosc}
                onChange={handleDostepnoscChange}
              />
            </label>
          </div>
          <button type="submit">Dodaj produkt</button>
        </Form>
      </Formik>
    </div>
  );
};

export default DodajProduktForm;
