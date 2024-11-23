// interfaces
interface IProps {
  rows: number;
  name: string;
  value: string;
  required: boolean;
  maxLength: number;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Input = ({
  rows,
  name,
  value,
  required,
  maxLength,
  placeholder,
  onChange = () => {},
}: IProps): JSX.Element => (
  <textarea
    rows={rows}
    name={name}
    id={name}
    className='input'
    placeholder={placeholder}
    required={required}
    maxLength={maxLength}
    value={value}
    autoComplete='off'
    onChange={onChange}
  />
);

export default Input;
