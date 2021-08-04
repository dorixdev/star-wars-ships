interface Props {
  label: string;
  text: string | string[] | number;
}

const toString = (value: string | number | string[]): string => {
  switch (typeof value) {
    case 'number':
      return value.toString();
    case 'string':
      return value;
    default:
      return value?.join(', ');
  }
};

export const FavoriteGridInfo = ({ label, text }: Props) => {
  return (
    <div className="text-info">
      <b className="text-uppercase">{label}: </b>
      <span className="ms-3">{text ? toString(text) : 'unknow'}</span>
    </div>
  );
};
