import { useState } from "react";

const useLogin = (validateInfo) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  // state with errors
  const [errors, setErrors] = useState({});
  //const [isSubmitting, setIsSubmitting] = useState(false);

  // handle form change function (after a user introduce details)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validateInfo(values));
    // setIsSubmitting(true);
  };
  return { handleChange, values, handleSubmit, errors };
};

export default useLogin;
