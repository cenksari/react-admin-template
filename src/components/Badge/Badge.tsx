// interfaces
interface IProps {
  text: string;
  icon?: string;
  color: string;
}

const Badge: React.FC<IProps> = ({ text, icon, color }) => (
  <div className={`badge no-select flex flex-v-center flex-gap-small ${color}`}>
    {icon && <span className='material-symbols-outlined'>{icon}</span>}
    <em>{text}</em>
  </div>
);

export default Badge;
