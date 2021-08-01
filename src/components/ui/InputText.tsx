import { ChangeEventHandler } from 'react';

interface Props {
  icon: string;
  value: string;
  name: string;
  type: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const InputText = ({
  icon,
  value,
  name,
  type,
  placeholder,
  onChange,
}: Props) => {
  return (
    <div className="form-container">
      <i className={`fas fa-${icon}`} />
      <input
        className="form-input"
        required
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
