import { SetStateAction, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchStart } from '../app/services/ui/actions';

interface UseLoginForm {
  form: LoginState;
  setForm: React.Dispatch<SetStateAction<LoginState>>;
  handleInputChange: any;
  toggleCheck: () => void;
  reset: () => void;
}

interface UseForm {
  form: any;
  setForm: React.Dispatch<SetStateAction<any>>;
  handleInputChange: any;
  reset: () => void;
}

export const useForm = (initialState: any): UseForm => {
  // const { search } = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    dispatch(searchStart(form.search));
  }, [dispatch, form.search]);

  const handleInputChange = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const reset = () => {
    setForm(initialState);
  };
  return { form, setForm, handleInputChange, reset };
};

export const useLoginForm = (initialState: LoginState): UseLoginForm => {
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
