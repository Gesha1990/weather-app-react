(this["webpackJsonptime-tracker"]=this["webpackJsonptime-tracker"]||[]).push([[0],{38:function(a,e,n){a.exports={loader:"Loader_loader__13ZeK"}},48:function(a,e,n){},70:function(a,e,n){},88:function(a,e,n){},89:function(a,e,n){"use strict";n.r(e);var t=n(2),l=n(0),r=n.n(l),o=n(9),c=n.n(o),i=(n(48),n(34)),u=n(35),b=n(42),s=n(41),y=n(3),d=n(16),h=n(13),m=n(37),g="866bb374234f58496d65f3240bbc1a0d",p="metric",j=m.create({baseURL:"https://api.openweathermap.org/data/2.5",headers:{"Content-Type":"application/json"}}),w=function(a){try{return j.get("weather?q=".concat(a,"&APPID=").concat(g,"&units=").concat(p)).then((function(a){return a}))}catch(e){console.log(e)}},f=function(a,e){try{return j.get("weather?lat=".concat(a,"&lon=").concat(e,"&APPID=").concat(g,"&units=").concat(p)).then((function(a){return a}))}catch(n){console.log(n)}},O="ADD-WEATHER-DATA",S={weather_data:null,isLoaded:!1},k=function(a){return{type:O,weather:a,isLoaded:!0}},C=function(a){return function(e){w(a).then((function(a){e(k(a.data))}))}},v=function(a,e){return function(n){f(a,e).then((function(a){n(k(a.data))}))}},B=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O:return{weather_data:e.weather,isLoaded:e.isLoaded};default:return a}},M=n(38),x=n.n(M),N=n.p+"static/media/Spinner-1s-200px.f9664c63.svg",A=function(){return Object(t.jsx)("div",{children:Object(t.jsx)("img",{src:N,alt:"louder",className:x.a.loader})})},P=n(40),T=[{country:"Afghanistan",label:"Kabul"},{country:"Albania",label:"Tirana"},{country:"Algeria",label:"Alger"},{country:"American Samoa",label:"Fagatogo"},{country:"Andorra",label:"Andorra la Vella"},{country:"Angola",label:"Luanda"},{country:"Anguilla",label:"The Valley"},{country:"Antigua and Barbuda",label:"Saint John's"},{country:"Argentina",label:"Buenos Aires"},{country:"Armenia",label:"Yerevan"},{country:"Aruba",label:"Oranjestad"},{country:"Australia",label:"Canberra"},{country:"Austria",label:"Wien"},{country:"Azerbaijan",label:"Baku"},{country:"Bahamas",label:"Nassau"},{country:"Bahrain",label:"al-Manama"},{country:"Bangladesh",label:"Dhaka"},{country:"Barbados",label:"Bridgetown"},{country:"Belarus",label:"Minsk"},{country:"Belgium",label:"Bruxelles [Brussel]"},{country:"Belize",label:"Belmopan"},{country:"Benin",label:"Porto-Novo"},{country:"Bermuda",label:"Hamilton"},{country:"Bhutan",label:"Thimphu"},{country:"Bolivia",label:"La Paz"},{country:"Bosnia and Herzegovina",label:"Sarajevo"},{country:"Botswana",label:"Gaborone"},{country:"Brazil",label:"Bras\xedlia"},{country:"Brunei",label:"Bandar Seri Begawan"},{country:"Bulgaria",label:"Sofia"},{country:"Burkina Faso",label:"Ouagadougou"},{country:"Burundi",label:"Bujumbura"},{country:"Cambodia",label:"Phnom Penh"},{country:"Cameroon",label:"Yaound"},{country:"Canada",label:"Ottawa"},{country:"Cape Verde",label:"Praia"},{country:"Cayman Islands",label:"George Town"},{country:"Central African Republic",label:"Bangui"},{country:"Chad",label:"N'Djam"},{country:"Chile",label:"Santiago de Chile"},{country:"China",label:"Peking"},{country:"Christmas Island",label:"Flying Fish Cove"},{country:"Cocos (Keeling) Islands",label:"West Island"},{country:"Colombia",label:"Santaf"},{country:"Comoros",label:"Moroni"},{country:"Congo",label:"Brazzaville"},{country:"Cook Islands",label:"Avarua"},{country:"Costa Rica",label:"San Jos"},{country:"Croatia",label:"Zagreb"},{country:"Cuba",label:"La Habana"},{country:"Cyprus",label:"Nicosia"},{country:"Czech Republic",label:"Praha"},{country:"Denmark",label:"Copenhagen"},{country:"Djibouti",label:"Djibouti"},{country:"Dominica",label:"Roseau"},{country:"Dominican Republic",label:"Santo Domingo de Guzm"},{country:"East Timor",label:"Dili"},{country:"Ecuador",label:"Quito"},{country:"Egypt",label:"Cairo"},{country:"El Salvador",label:"San Salvador"},{country:"England",label:"London"},{country:"Equatorial Guinea",label:"Malabo"},{country:"Eritrea",label:"Asmara"},{country:"Estonia",label:"Tallinn"},{country:"Ethiopia",label:"Addis Abeba"},{country:"Falkland Islands",label:"Stanley"},{country:"Faroe Islands",label:"T\xf3rshavn"},{country:"Fiji Islands",label:"Suva"},{country:"Finland",label:"Helsinki [Helsingfors]"},{country:"France",label:"Paris"},{country:"French Guiana",label:"Cayenne"},{country:"French Polynesia",label:"Papeete"},{country:"Gabon",label:"Libreville"},{country:"Gambia",label:"Banjul"},{country:"Georgia",label:"Tbilisi"},{country:"Germany",label:"Berlin"},{country:"Ghana",label:"Accra"},{country:"Gibraltar",label:"Gibraltar"},{country:"Greece",label:"Athenai"},{country:"Greenland",label:"Nuuk"},{country:"Grenada",label:"Saint George's"},{country:"Guadeloupe",label:"Basse-Terre"},{country:"Guam",label:"Aga"},{country:"Guatemala",label:"Ciudad de Guatemala"},{country:"Guinea",label:"Conakry"},{country:"Guinea-Bissau",label:"Bissau"},{country:"Guyana",label:"Georgetown"},{country:"Haiti",label:"Port-au-Prince"},{country:"Holy See (Vatican label State)",label:"Citt"},{country:"Honduras",label:"Tegucigalpa"},{country:"Hong Kong",label:"Victoria"},{country:"Hungary",label:"Budapest"},{country:"Iceland",label:"Reykjav"},{country:"India",label:"New Delhi"},{country:"Indonesia",label:"Jakarta"},{country:"Iran",label:"Tehran"},{country:"Iraq",label:"Baghdad"},{country:"Ireland",label:"Dublin"},{country:"Israel",label:"Jerusalem"},{country:"Italy",label:"Roma"},{country:"Ivory Coast",label:"Yamoussoukro"},{country:"Jamaica",label:"Kingston"},{country:"Japan",label:"Tokyo"},{country:"Jordan",label:"Amman"},{country:"Kazakhstan",label:"Astana"},{country:"Kenya",label:"Nairobi"},{country:"Kiribati",label:"Bairiki"},{country:"Kuwait",label:"Kuwait"},{country:"Kyrgyzstan",label:"Bishkek"},{country:"Laos",label:"Vientiane"},{country:"Latvia",label:"Riga"},{country:"Lebanon",label:"Beirut"},{country:"Lesotho",label:"Maseru"},{country:"Liberia",label:"Monrovia"},{country:"Libyan Arab Jamahiriya",label:"Tripoli"},{country:"Liechtenstein",label:"Vaduz"},{country:"Lithuania",label:"Vilnius"},{country:"Luxembourg",label:"Luxembourg [Luxemburg/L"},{country:"Macao",label:"Macao"},{country:"North Macedonia",label:"Skopje"},{country:"Madagascar",label:"Antananarivo"},{country:"Malawi",label:"Lilongwe"},{country:"Malaysia",label:"Kuala Lumpur"},{country:"Maldives",label:"Male"},{country:"Mali",label:"Bamako"},{country:"Malta",label:"Valletta"},{country:"Marshall Islands",label:"Dalap-Uliga-Darrit"},{country:"Martinique",label:"Fort-de-France"},{country:"Mauritania",label:"Nouakchott"},{country:"Mauritius",label:"Port-Louis"},{country:"Mayotte",label:"Mamoutzou"},{country:"Mexico",label:"Ciudad de M"},{country:"Micronesia, Federated States of",label:"Palikir"},{country:"Moldova",label:"Chisinau"},{country:"Monaco",label:"Monaco-Ville"},{country:"Mongolia",label:"Ulan Bator"},{country:"Montenegro",label:"Podgorica"},{country:"Montserrat",label:"Plymouth"},{country:"Morocco",label:"Rabat"},{country:"Mozambique",label:"Maputo"},{country:"Myanmar",label:"Rangoon (Yangon)"},{country:"Namibia",label:"Windhoek"},{country:"Nauru",label:"Yaren"},{country:"Nepal",label:"Kathmandu"},{country:"Netherlands",label:"Amsterdam"},{country:"Netherlands Antilles",label:"Willemstad"},{country:"New Caledonia",label:"Noum"},{country:"New Zealand",label:"Wellington"},{country:"Nicaragua",label:"Managua"},{country:"Niger",label:"Niamey"},{country:"Nigeria",label:"Abuja"},{country:"Niue",label:"Alofi"},{country:"Norfolk Island",label:"Kingston"},{country:"North Korea",label:"Pyongyang"},{country:"Northern Ireland",label:"Belfast"},{country:"Northern Mariana Islands",label:"Garapan"},{country:"Norway",label:"Oslo"},{country:"Oman",label:"Masqat"},{country:"Pakistan",label:"Islamabad"},{country:"Palau",label:"Koror"},{country:"Palestine",label:"Gaza"},{country:"Panama",label:"Ciudad de Panam"},{country:"Papua New Guinea",label:"Port Moresby"},{country:"Paraguay",label:"Asunci"},{country:"Peru",label:"Lima"},{country:"Philippines",label:"Manila"},{country:"Pitcairn",label:"Adamstown"},{country:"Poland",label:"Warszawa"},{country:"Portugal",label:"Lisboa"},{country:"Puerto Rico",label:"San Juan"},{country:"Qatar",label:"Doha"},{country:"Reunion",label:"Saint-Denis"},{country:"Romania",label:"Bucuresti"},{country:"Russian Federation",label:"Moscow"},{country:"Rwanda",label:"Kigali"},{country:"Saint Helena",label:"Jamestown"},{country:"Saint Kitts and Nevis",label:"Basseterre"},{country:"Saint Lucia",label:"Castries"},{country:"Saint Pierre and Miquelon",label:"Saint-Pierre"},{country:"Saint Vincent and the Grenadines",label:"Kingstown"},{country:"Samoa",label:"Apia"},{country:"San Marino",label:"San Marino"},{country:"Sao Tome and Principe",label:"S"},{country:"Saudi Arabia",label:"Riyadh"},{country:"Scotland",label:"Edinburgh"},{country:"Senegal",label:"Dakar"},{country:"Serbia",label:"Belgrade"},{country:"Seychelles",label:"Victoria"},{country:"Sierra Leone",label:"Freetown"},{country:"Singapore",label:"Singapore"},{country:"Slovakia",label:"Bratislava"},{country:"Slovenia",label:"Ljubljana"},{country:"Solomon Islands",label:"Honiara"},{country:"Somalia",label:"Mogadishu"},{country:"South Africa",label:"Pretoria"},{country:"South Korea",label:"Seoul"},{country:"South Sudan",label:"Juba"},{country:"Spain",label:"Madrid"},{country:"Sudan",label:"Khartum"},{country:"Suriname",label:"Paramaribo"},{country:"Svalbard and Jan Mayen",label:"Longyearbyen"},{country:"Swaziland",label:"Mbabane"},{country:"Sweden",label:"Stockholm"},{country:"Switzerland",label:"Bern"},{country:"Syria",label:"Damascus"},{country:"Tajikistan",label:"Dushanbe"},{country:"Tanzania",label:"Dodoma"},{country:"Thailand",label:"Bangkok"},{country:"The Democratic Republic of Congo",label:"Kinshasa"},{country:"Togo",label:"Lom"},{country:"Tokelau",label:"Fakaofo"},{country:"Tonga",label:"Nuku'alofa"},{country:"Trinidad and Tobago",label:"Port-of-Spain"},{country:"Tunisia",label:"Tunis"},{country:"Turkey",label:"Ankara"},{country:"Turkmenistan",label:"Ashgabat"},{country:"Turks and Caicos Islands",label:"Cockburn Town"},{country:"Tuvalu",label:"Funafuti"},{country:"Uganda",label:"Kampala"},{country:"Ukraine",label:"Kyiv"},{country:"United Arab Emirates",label:"Abu Dhabi"},{country:"United Kingdom",label:"London"},{country:"United States",label:"Washington"},{country:"Uruguay",label:"Montevideo"},{country:"Uzbekistan",label:"Toskent"},{country:"Vanuatu",label:"Port-Vila"},{country:"Venezuela",label:"Caracas"},{country:"Vietnam",label:"Hanoi"},{country:"Virgin Islands, British",label:"Road Town"},{country:"Virgin Islands, U.S.",label:"Charlotte Amalie"},{country:"Wales",label:"Cardiff"},{country:"Wallis and Futuna",label:"Mata-Utu"},{country:"Western Sahara",label:"El-Aai"},{country:"Yemen",label:"Sanaa"},{country:"Zambia",label:"Lusaka"},{country:"Zimbabwe",label:"Harare"}],_=(n(70),n.p+"static/media/default.13fca221.jpg"),L=n.p+"static/media/storm.21f7a6f4.jpg",I=n.p+"static/media/snow.d4e780e7.jpg",D=n.p+"static/media/rain.c89759d8.jpg",G=n.p+"static/media/clear.fbc6f205.jpg",z=n.p+"static/media/cloudy.319f9a93.jpg";var K=Object(y.f)(Object(h.b)((function(a){return{weather_data:a.weatherPage.weather_data,isLoaded:a.weatherPage.isLoaded}}),{getWeatherByCityThunkCreator:C,getWeatherByCoordinateThunkCreator:v})((function(a){var e=a.weather_data,n=a.isLoaded,r=(a.getWeatherByCityThunkCreator,a.getWeatherByCoordinateThunkCreator),o=a.history,c=Object(l.useState)(_),i=Object(d.a)(c,2),u=i[0],b=i[1];return Object(l.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(a){r(a.coords.latitude,a.coords.longitude)}))}),[]),Object(l.useEffect)((function(){if(n)switch(e.weather[0].main){case"Clouds":b(z);break;case"Thunderstorm":b(L);break;case"Drizzle":case"Rain":b(D);break;case"Clear":b(G);break;case"Snow":b(I)}}),[e]),Object(t.jsx)("div",{className:"weather-app",children:n?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("img",{className:"weather-app__background-img",src:u,alt:""}),Object(t.jsx)(P.a,{className:"weather-app__capitals-dropdown",options:T,onChange:function(a){o.push("".concat(a.label))}}),Object(t.jsx)("div",{className:"weather-app__container",children:Object(t.jsxs)("div",{className:"weather-app__container-description",children:[Object(t.jsx)("h1",{className:"weather-app__container-description-city",children:e.name}),Object(t.jsxs)("div",{className:"weather-app__container-main",children:[Object(t.jsxs)("div",{className:"temperature",children:["".concat(e.main.temp," ","\xb0"),"C"]}),Object(t.jsxs)("div",{className:"weather-app__container-main-description",children:[Object(t.jsx)("div",{children:e.weather[0].description}),Object(t.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,".png"),id:"documentIconImg"})]})]}),Object(t.jsx)("div",{children:"Winds at: ".concat(e.wind.speed,"  m/s")}),Object(t.jsx)("div",{children:"Humidity levels at: ".concat(e.main.humidity," %")})]})})]}):Object(t.jsx)(A,{})})}))),E=n(12),R=(n(88),n.p+"static/media/home.b5626aba.svg");var F=Object(y.f)(Object(h.b)((function(a){return{weather_data:a.weatherPage.weather_data,isLoaded:a.weatherPage.isLoaded}}),{getWeatherByCityThunkCreator:C,getWeatherByCoordinateThunkCreator:v})((function(a){var e=a.weather_data,n=a.isLoaded,r=a.getWeatherByCityThunkCreator,o=(a.getWeatherByCoordinateThunkCreator,a.history,a.match),c=Object(l.useState)(_),i=Object(d.a)(c,2),u=i[0],b=i[1];return Object(l.useEffect)((function(){r(o.params.city)}),[]),Object(l.useEffect)((function(){if(n)switch(e.weather[0].main){case"Clouds":b(z);break;case"Thunderstorm":b(L);break;case"Drizzle":case"Rain":b(D);break;case"Clear":b(G);break;case"Snow":b(I)}}),[e]),Object(t.jsx)("div",{className:"weather-app",children:n?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("img",{className:"weather-app__background-img",src:u,alt:"background"}),Object(t.jsx)(E.b,{to:"/weather-app-react",className:"weather-app__home-page",children:Object(t.jsx)("img",{src:R,alt:"home"})}),Object(t.jsx)("div",{className:"weather-app__container",children:Object(t.jsxs)("div",{className:"weather-app__container-description",children:[Object(t.jsx)("h1",{className:"weather-app__container-description-city",children:e.name}),Object(t.jsxs)("div",{className:"weather-app__container-main",children:[Object(t.jsxs)("div",{className:"temperature",children:["".concat(e.main.temp," ","\xb0"),"C"]}),Object(t.jsxs)("div",{className:"weather-app__container-main-description",children:[Object(t.jsx)("div",{children:e.weather[0].description}),Object(t.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,".png"),id:"documentIconImg"})]})]}),Object(t.jsx)("div",{children:"Winds at: ".concat(e.wind.speed,"  m/s")}),Object(t.jsx)("div",{children:"Humidity levels at: ".concat(e.main.humidity," %")})]})})]}):Object(t.jsx)(A,{})})}))),W=function(a){Object(b.a)(n,a);var e=Object(s.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(t.jsxs)(y.c,{children:[Object(t.jsx)(y.a,{exact:!0,path:"/",children:Object(t.jsx)(K,{})}),Object(t.jsx)(y.a,{exact:!0,path:"/:city",children:Object(t.jsx)(F,{})})]})}}]),n}(l.Component),V=Object(y.f)(W),H=n(11),J=n(39),U=Object(H.c)({weatherPage:B}),q=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||H.d,Object(H.e)(U,Object(H.a)(J.a)));c.a.render(Object(t.jsx)(r.a.StrictMode,{children:Object(t.jsx)(h.a,{store:q,children:Object(t.jsx)(E.a,{children:Object(t.jsx)(V,{})})})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.4955cd8e.chunk.js.map