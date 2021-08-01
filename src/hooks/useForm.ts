import { useEffect, useState } from 'react';

interface UseForm {
  form: LoginState;
  handleInputChange: any;
  toggleCheck: () => void;
  reset: () => void;
}

export const useForm = (initialState: LoginState): UseForm => {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    const email = localStorage.getItem('email');
    email && setForm((form) => ({ ...form, email, remember: true }));
  }, []);

  const toggleCheck = (): void => {
    setForm({ ...form, remember: !form.remember });
  };

  const handleInputChange = (evt: InputEvent | any) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    });
  };

  const reset = () => {
    setForm(initialState);
  };

  return {
    form,
    handleInputChange,
    toggleCheck,
    reset,
  };
};
