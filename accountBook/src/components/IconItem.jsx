import "./IconItem.css";
import { getIconImage } from "../util/get-icon-image";

const IconItem = ({ iconId, iconName, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`IconItem ${isSelected ? `IconItem_on_${iconId}` : ""}`}
    >
      <img className="icon_img" src={getIconImage(iconId)} />
      <div className="icon_name">{iconName}</div>
    </div>
  );
};

export default IconItem;
