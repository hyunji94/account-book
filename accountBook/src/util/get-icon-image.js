import iconTravel from "./../assets/icon_travel.png";
import iconShopping from "./../assets/icon_shopping.png";
import iconMart from "./../assets/icon_mart.png";
import iconHospital from "./../assets/icon_hospital.png";
import iconHair from "./../assets/icon_hair.png";
import iconFood from "./../assets/icon_food.png";
import iconCalender from "./../assets/icon_calender.png";
import iconCafe from "./../assets/icon_cafe.png";

export function getIconImage(iconId) {
  switch (iconId) {
    case 1:
      return iconCafe;
    case 2:
      return iconCalender;
    case 3:
      return iconFood;
    case 4:
      return iconHair;
    case 5:
      return iconHospital;
    case 6:
      return iconMart;
    case 7:
      return iconShopping;
    case 8:
      return iconTravel;
    default:
      return null;
  }
}
