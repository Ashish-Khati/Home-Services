import { FaUser } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { MdUnsubscribe } from "react-icons/md";
const homeData=[
    {
    id:1,
     icon:<FaUser/>,
     title:"Users",
     count:450
    },
    {
        id:2,
     icon:<FaUserTie/>,
     title:"Providers",
     count:140
    },
    {
        id:3,
     icon:<MdHomeRepairService/>,
     title:"Services",
     count:100
    },
    {
        id:4,
     icon:<MdUnsubscribe/>,
     title:"Subscription",
     count:122029
    },
]

const recentBookingColumn=[
  {
    Header:"Customer",
    accessor:'customer'
  },
  {
    Header:"Email",
    accessor:'email'
  },
  {
    Header:"Date",
    accessor:'date'
  },
  {
    Header:"Service",
    accessor:'service'
  },
  {
    Header:"Status",
    accessor:'status'
  },
  {
    Header:"Price",
    accessor:'price'
  },
]

const recentBooking=[{
    "id": 1,
    "customer": "Em Ellacott",
    "email": "eellacott0@dagondesign.com",
    "date": "03/10/2023",
    "service": "Buzzshare",
    "status": true,
    "price": "$4.82"
  }, {
    "id": 2,
    "customer": "Hobard Becom",
    "email": "hbecom1@hc360.com",
    "date": "06/23/2023",
    "service": "Fivechat",
    "status": true,
    "price": "$1.97"
  }, {
    "id": 3,
    "customer": "Boris Eltun",
    "email": "beltun2@com.com",
    "date": "10/23/2023",
    "service": "Riffpath",
    "status": true,
    "price": "$6.73"
  }, {
    "id": 4,
    "customer": "Jeremie Sabin",
    "email": "jsabin3@sina.com.cn",
    "date": "08/08/2023",
    "service": "Brainbox",
    "status": false,
    "price": "$4.40"
  }, {
    "id": 5,
    "customer": "Nara Pottle",
    "email": "npottle4@a8.net",
    "date": "03/06/2023",
    "service": "Riffwire",
    "status": true,
    "price": "$7.99"
  }, {
    "id": 6,
    "customer": "Donalt Bentson",
    "email": "dbentson5@rambler.ru",
    "date": "12/08/2023",
    "service": "Flashpoint",
    "status": false,
    "price": "$2.84"
  }, {
    "id": 7,
    "customer": "Beaufort Ruddy",
    "email": "bruddy6@barnesandnoble.com",
    "date": "05/24/2023",
    "service": "Wikizz",
    "status": false,
    "price": "$8.14"
  }, {
    "id": 8,
    "customer": "Carolann Pyle",
    "email": "cpyle7@usgs.gov",
    "date": "08/17/2023",
    "service": "Rhynoodle",
    "status": false,
    "price": "$5.25"
  }, {
    "id": 9,
    "customer": "Joachim Powderham",
    "email": "jpowderham8@canalblog.com",
    "date": "10/31/2023",
    "service": "Vimbo",
    "status": true,
    "price": "$3.51"
  }, {
    "id": 10,
    "customer": "Wilhelmine Boate",
    "email": "wboate9@istockphoto.com",
    "date": "07/26/2023",
    "service": "Vinder",
    "status": false,
    "price": "$5.69"
  }, {
    "id": 11,
    "customer": "Deonne Ricardon",
    "email": "dricardona@ftc.gov",
    "date": "10/12/2023",
    "service": "Brainverse",
    "status": false,
    "price": "$5.05"
  }, {
    "id": 12,
    "customer": "Martha Spyby",
    "email": "mspybyb@ihg.com",
    "date": "08/31/2023",
    "service": "Realpoint",
    "status": false,
    "price": "$1.14"
  }, {
    "id": 13,
    "customer": "Hobey Blumer",
    "email": "hblumerc@auda.org.au",
    "date": "04/24/2023",
    "service": "Vitz",
    "status": true,
    "price": "$7.32"
  }, {
    "id": 14,
    "customer": "Laureen Sadlier",
    "email": "lsadlierd@ucla.edu",
    "date": "03/07/2023",
    "service": "Gigabox",
    "status": false,
    "price": "$8.34"
  }, {
    "id": 15,
    "customer": "Corbie Peche",
    "email": "cpechee@imgur.com",
    "date": "02/22/2023",
    "service": "Eadel",
    "status": true,
    "price": "$3.30"
  }, {
    "id": 16,
    "customer": "Theodora Hadlow",
    "email": "thadlowf@npr.org",
    "date": "11/24/2023",
    "service": "Rhyloo",
    "status": true,
    "price": "$2.54"
  }, {
    "id": 17,
    "customer": "Claudius Whittington",
    "email": "cwhittingtong@cafepress.com",
    "date": "05/09/2023",
    "service": "Cogidoo",
    "status": false,
    "price": "$9.11"
  }, {
    "id": 18,
    "customer": "Angeline Von Salzberg",
    "email": "avonh@gov.uk",
    "date": "02/11/2023",
    "service": "Skipstorm",
    "status": true,
    "price": "$2.03"
  }, {
    "id": 19,
    "customer": "Erda De Bruijn",
    "email": "edei@illinois.edu",
    "date": "05/05/2023",
    "service": "Aibox",
    "status": true,
    "price": "$7.62"
  }, {
    "id": 20,
    "customer": "Ranice Sparshett",
    "email": "rsparshettj@feedburner.com",
    "date": "01/20/2024",
    "service": "Kazio",
    "status": false,
    "price": "$6.38"
  }, {
    "id": 21,
    "customer": "Clari Trank",
    "email": "ctrankk@imgur.com",
    "date": "01/03/2024",
    "service": "Centidel",
    "status": false,
    "price": "$4.35"
  }, {
    "id": 22,
    "customer": "Tito Chantler",
    "email": "tchantlerl@unicef.org",
    "date": "05/24/2023",
    "service": "Feedfish",
    "status": false,
    "price": "$6.87"
  }, {
    "id": 23,
    "customer": "Hercule Benge",
    "email": "hbengem@reddit.com",
    "date": "03/10/2023",
    "service": "Twitterwire",
    "status": true,
    "price": "$2.68"
  }, {
    "id": 24,
    "customer": "Gil Ivanchenkov",
    "email": "givanchenkovn@tinypic.com",
    "date": "09/15/2023",
    "service": "Yadel",
    "status": true,
    "price": "$9.76"
  }, {
    "id": 25,
    "customer": "Charmion Probyn",
    "email": "cprobyno@abc.net.au",
    "date": "10/26/2023",
    "service": "Oyope",
    "status": false,
    "price": "$1.10"
  }, {
    "id": 26,
    "customer": "Abba Mikalski",
    "email": "amikalskip@techcrunch.com",
    "date": "11/20/2023",
    "service": "Leenti",
    "status": true,
    "price": "$7.03"
  }, {
    "id": 27,
    "customer": "Virgina Haton",
    "email": "vhatonq@jimdo.com",
    "date": "10/01/2023",
    "service": "Gigashots",
    "status": false,
    "price": "$9.70"
  }, {
    "id": 28,
    "customer": "Grady Tanner",
    "email": "gtannerr@wordpress.org",
    "date": "09/28/2023",
    "service": "Topicblab",
    "status": false,
    "price": "$9.37"
  }, {
    "id": 29,
    "customer": "May MacKaig",
    "email": "mmackaigs@youku.com",
    "date": "12/14/2023",
    "service": "Quimba",
    "status": false,
    "price": "$1.63"
  }, {
    "id": 30,
    "customer": "Anabella Mallord",
    "email": "amallordt@unc.edu",
    "date": "07/28/2023",
    "service": "Youspan",
    "status": false,
    "price": "$6.30"
  }, {
    "id": 31,
    "customer": "Eleonore MacIlraith",
    "email": "emacilraithu@un.org",
    "date": "01/01/2024",
    "service": "Edgewire",
    "status": false,
    "price": "$9.27"
  }, {
    "id": 32,
    "customer": "Roberta Camois",
    "email": "rcamoisv@theglobeandmail.com",
    "date": "03/05/2023",
    "service": "Yombu",
    "status": false,
    "price": "$8.59"
  }, {
    "id": 33,
    "customer": "Hobart Syplus",
    "email": "hsyplusw@aol.com",
    "date": "08/15/2023",
    "service": "Skyvu",
    "status": true,
    "price": "$6.13"
  }, {
    "id": 34,
    "customer": "Ches Bullier",
    "email": "cbullierx@fastcompany.com",
    "date": "10/24/2023",
    "service": "Mydo",
    "status": false,
    "price": "$8.61"
  }, {
    "id": 35,
    "customer": "Karlik Croneen",
    "email": "kcroneeny@miibeian.gov.cn",
    "date": "10/18/2023",
    "service": "JumpXS",
    "status": true,
    "price": "$9.04"
  }, {
    "id": 36,
    "customer": "Bridget Armfirld",
    "email": "barmfirldz@ihg.com",
    "date": "12/27/2023",
    "service": "Ntags",
    "status": false,
    "price": "$2.83"
  }, {
    "id": 37,
    "customer": "Riobard Eliassen",
    "email": "reliassen10@nymag.com",
    "date": "02/19/2023",
    "service": "Zava",
    "status": true,
    "price": "$8.15"
  }, {
    "id": 38,
    "customer": "Adelind Huffer",
    "email": "ahuffer11@samsung.com",
    "date": "04/08/2023",
    "service": "Dabvine",
    "status": false,
    "price": "$4.91"
  }, {
    "id": 39,
    "customer": "Gordie Pollie",
    "email": "gpollie12@latimes.com",
    "date": "11/26/2023",
    "service": "Meetz",
    "status": false,
    "price": "$7.72"
  }, {
    "id": 40,
    "customer": "Lita Elstone",
    "email": "lelstone13@china.com.cn",
    "date": "03/28/2023",
    "service": "Minyx",
    "status": false,
    "price": "$3.81"
  }, {
    "id": 41,
    "customer": "Carlin Ollerearnshaw",
    "email": "collerearnshaw14@vinaora.com",
    "date": "06/02/2023",
    "service": "Bubblebox",
    "status": false,
    "price": "$2.93"
  }, {
    "id": 42,
    "customer": "Brand Wooles",
    "email": "bwooles15@tumblr.com",
    "date": "05/14/2023",
    "service": "Zoovu",
    "status": false,
    "price": "$9.63"
  }, {
    "id": 43,
    "customer": "Shaylyn Deeney",
    "email": "sdeeney16@princeton.edu",
    "date": "09/29/2023",
    "service": "Blogpad",
    "status": false,
    "price": "$1.54"
  }, {
    "id": 44,
    "customer": "Willi Scutcheon",
    "email": "wscutcheon17@ed.gov",
    "date": "09/04/2023",
    "service": "Quatz",
    "status": false,
    "price": "$3.96"
  }, {
    "id": 45,
    "customer": "Ignazio Dimmack",
    "email": "idimmack18@yelp.com",
    "date": "02/28/2023",
    "service": "Meetz",
    "status": true,
    "price": "$5.47"
  }, {
    "id": 46,
    "customer": "Gustave Childerhouse",
    "email": "gchilderhouse19@deviantart.com",
    "date": "07/19/2023",
    "service": "Avamm",
    "status": false,
    "price": "$1.20"
  }, {
    "id": 47,
    "customer": "Prentice Justis",
    "email": "pjustis1a@soundcloud.com",
    "date": "09/29/2023",
    "service": "Reallinks",
    "status": false,
    "price": "$6.25"
  }, {
    "id": 48,
    "customer": "Christina Pope",
    "email": "cpope1b@mayoclinic.com",
    "date": "08/23/2023",
    "service": "Brightdog",
    "status": true,
    "price": "$6.45"
  }, {
    "id": 49,
    "customer": "Lyn Collingdon",
    "email": "lcollingdon1c@hc360.com",
    "date": "07/02/2023",
    "service": "Devpulse",
    "status": false,
    "price": "$5.32"
  }, {
    "id": 50,
    "customer": "Lil Bottom",
    "email": "lbottom1d@cdbaby.com",
    "date": "04/26/2023",
    "service": "Eare",
    "status": false,
    "price": "$3.35"
  }]
export {homeData,recentBooking,recentBookingColumn}