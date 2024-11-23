// interfaces
interface IProps {
  text: string;
  icon?: string;
  color: string;
}

const Badge = ({ text, icon, color }: IProps): JSX.Element => (
  <div className={`badge no-select flex flex-v-center flex-gap-small ${color}`}>
    {icon && <span className='material-symbols-outlined'>{icon}</span>}
    <em>{text}</em>
  </div>
);

export default Badge;
