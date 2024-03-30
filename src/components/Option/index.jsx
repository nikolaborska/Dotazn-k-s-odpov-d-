import { Icon } from '../Icon/index';
import './style.css';

export const Option = ({type, text, onSelected}) => {
  const handleClick = () => {
    onSelected(type);
  };
  return (
    <div onClick={handleClick} className="option">
      <Icon type={type} />
      <div>{text}</div>
    </div>
  );
};