import { useContext, useEffect } from "react";
import Weathercontext from "../weathercontent";
function select() {
  const { city, setCity, setInfo } = useContext(Weathercontext);
  const sehirUrl = "http://api.openweathermap.org/data/2.5/forecast?q=";
  const key = "eb1c4fa90f6e14c70fde2d8f5ac98ccb";
  let query;
  let date;
  let day;
  const citys = [
    "Adana",
    "Adıyaman",
    "Afyon",
    "Ağrı",
    "Amasya",
    "Ankara",
    "Antalya",
    "Artvin",
    "Aydın",
    "Balıkesir",
    "Bilecik",
    "Bingöl",
    "Bitlis",
    "Bolu",
    "Burdur",
    "Bursa",
    "Çanakkale",
    "Çankırı",
    "Çorum",
    "Denizli",
    "Diyarbakır",
    "Edirne",
    "Elazığ",
    "Erzincan",
    "Erzurum ",
    "Eskişehir",
    "Gaziantep",
    "Giresun",
    "Gümüşhane",
    "Hakkari",
    "Hatay",
    "Isparta",
    "Mersin",
    "İstanbul",
    "İzmir",
    "Kars",
    "Kastamonu",
    "Kayseri",
    "Kırklareli",
    "Kırşehir",
    "Kocaeli",
    "Konya",
    "Kütahya ",
    "Malatya",
    "Manisa",
    "Kahramanmaraş",
    "Mardin",
    "Muğla",
    "Muş",
    "Nevşehir",
    "Niğde",
    "Ordu",
    "Rize",
    "Sakarya",
    "Samsun",
    "Siirt",
    "Sinop",
    "Sivas",
    "Tekirdağ",
    "Tokat",
    "Trabzon  ",
    "Tunceli",
    "Şanlıurfa",
    "Uşak",
    "Van",
    "Yozgat",
    "Zonguldak",
    "Aksaray",
    "Bayburt ",
    "Karaman",
    "Kırıkkale",
    "Batman",
    "Şırnak",
    "Bartın",
    "Ardahan",
    "Iğdır",
    "Yalova",
    "Karabük ",
    "Kilis",
    "Osmaniye ",
    "Düzce",
  ];
  useEffect(() => {
    setInfo([]);
  }, [city]);
  function weather(cty) {
    query = `${sehirUrl}${cty}&appid=${key}&units=metric&lang=tr`;
    fetch(query)
      .then((data) => data.json())
      .then((data) => viewWeather(data));
  }
  function changecity(e) {
    setCity(e.target.value);
    weather(e.target.value);
  }
  function viewWeather(data) {
    data.list.map((item) => {
      date = new Date(item.dt * 1000);
      day = date.getDay();
      if (item.dt_txt.split(" ")[1] === "00:00:00") {
        setInfo((prevState) => [
          ...prevState,
          [
            `${data.city.name}-${data.city.country}`,
            `${Math.round(item.main.temp)}°C`,
            item.weather[0].description,
            item.dt_txt.split(" ")[0],
          ],
        ]);
      }
    });
  }
  return (
    <div className="selectbar">
      <select name="sehir" id="sehir" className="select" onChange={changecity}>
        {citys.map((item, key) => (
          <option key={key} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default select;
