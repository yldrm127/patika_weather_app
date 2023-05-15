import {
  WiDayCloudy,
  WiCloudy,
  WiDaySunny,
  WiRain,
  WiSnow,
  WiNightSnowThunderstorm,
  WiDayRain,
  WiNightPartlyCloudy,
} from "react-icons/wi";
export const icons = (item) => {
  switch (item) {
    case "parçalı bulutlu":
      return <WiNightPartlyCloudy className="icons" />;
    case "kapalı":
      return <WiCloudy className="icons" />;
    case "güneşli":
      return <WiDaySunny className="icons" />;
    case "yağmurlu":
      return <WiRain className="icons" />;
    case "karlı":
      return <WiSnow className="icons" />;
    case "parçalı az bulutlu":
      return <WiDayCloudy className="icons" />;
    case "hafif kar yağışlı":
      return <WiSnow className="icons" />;
    case "kar yağışlı":
      return <WiNightSnowThunderstorm className="icons" />;
    case "açık":
      return <WiDaySunny className="icons" />;
    case "hafif yağmur":
      return <WiDayRain className="icons" />;
    default:
      return <WiCloudy className="icons" />;
  }
};
