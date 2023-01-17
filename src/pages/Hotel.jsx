import hotel from "../assets/hotel.png";
import LayoutCenter from "../components/LayoutCenter";
import { links } from '../constants/hotels';
import Vector from "../assets/logo/hotel/Vector.png";

const Hotel = () => {
  return (
    <LayoutCenter 
      title="Hotel"
      image={hotel}
      btnTitle="Hotels & Inns around"
      vector={Vector}
      links={links}
    />
  )
}

export default Hotel;