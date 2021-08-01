import { SetStateAction, useState } from 'react';

interface UseForm {
  form: LoginState;
  setForm: React.Dispatch<SetStateAction<LoginState>>;
  handleInputChange: any;
  toggleCheck: () => void;
  reset: () => void;
}

export const useForm = (initialState: LoginState): UseForm => {
  const [form, setForm] = useState<LoginState>(initialState);

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
    setForm,
    handleInputChange,
    toggleCheck,
    reset,
  };
};
