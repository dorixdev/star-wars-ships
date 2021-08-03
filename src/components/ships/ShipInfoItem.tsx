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

export const ShipInfoItem = ({ label, text }: Props) => {
  return (
    <li className="list-group-item text-info bg-black">
      <b className="text-uppercase">{label}: </b>
      <span className="ms-3">{text ? toString(text) : 'unknow'}</span>
    </li>
  );
};
