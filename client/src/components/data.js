import l1 from '../assets/l1.png'
import l2 from '../assets/l2.png'
import l3 from '../assets/l3.png'
import l4 from '../assets/l4.png'
import l5 from '../assets/l5.png'
import l6 from '../assets/l6.png'
import l7 from '../assets/l7.png'
import l8 from '../assets/l8.png'
import l9 from '../assets/l9.png'
import l10 from'../assets/l10.png'
import l11 from'../assets/l11.png'
import l12 from'../assets/l12.png'
import v1 from '../assets/2.jpg'
import v2 from '../assets/3.jpg'
import v3 from '../assets/v1.jpg'
import v4 from '../assets/v2.jpg'
import t1 from '../assets/tst1.jpg'
import t2 from '../assets/tst2.jpg'
import t3 from '../assets/tst3.jpg'
import t4 from '../assets/tst4.jpg'
import Services from './Services'
const data=[
    {
        logo:l7,
        work:'Cab Services',
        provider:4
    },
    {
        logo:l4,
        work:'Servicing',
        provider:4
    },
    {
        logo:l8,
        work:'Child Care',
        provider:4
    },
    {
        logo:l4,
        work:'Pediatrician',
        provider:4
    },
    {
        logo:l5,
        work:'Home Cleaning',
        provider:4
    },
    {
        logo:l6,
        work:'Laundary',
        provider:4
    },
    {
        logo:l7,
        work:'Carpainter',
        provider:4
    },
    {
        logo:l8,
        work:'Electrician',
        provider:4
    },
    {
        logo:l9,
        work:'Plumber',
        provider:4
    },
    {
        logo:l11,
        work:'Yoga',
        provider:4
    },
    {
        logo:l9,
        work:'Tution',
        provider:4
    },
    {
        logo:l12,
        work:'Gardening',
        provider:4
    },
]


const vendorData=[
    {
        name:'Mohan Rawat',
        address:"Delhi",
        imgUrl:t2,
        title:'loremifuoeifwoiefawif jewfhrwjehkjqehqjh',
    },
    {
        name:'Aman ',
        address:"uttarakhand",
        imgUrl:t1,
        title:'loremifuoeifwoiefawif ',
    },
    {
        name:'Gaurav',
        address:"Rishikesh",
        imgUrl:v3,
        title:'loremifuoeifwoiefawif ',
    },
    {
        name:'Ajay',
        address:"Dehradun",
        imgUrl:v4,
        title:'loremifuoeifwoiefawif dfjsh dfhsjdluy fdjshfkjdfkjdkj dfjdk ',
    },
    {
        name:'Sohan',
        address:"Mumbai",
        imgUrl:v4,
        title:'loremifuoeifwoiefawif ',
    },
]

const testimonialData=[
    {
        imgUrl:t1,
        name:'Ava Johnson',
        work:'web developer',
        title:'A business absolutely devoted to service will have only one worry about profits. They will be embarrassingly large.'
    },
    {
        imgUrl:t2,
        name:'Adam Jampa',
        work:'Software Developer',
        title:'If you don’t take care of your customer, your competitor will.'
    },
    {
        imgUrl:t3,
        name:'Sara Taylor',
        work:'Business',
        title:'The human brain starts working the moment you are born and never stops until you stand up to speak in public.'
    },
    {
        imgUrl:t4,
        name:'John',
        work:'web developer',
        title:'loremk fj the quick brown jfox jumps ofver the lazy dog.'
    },
    {
        imgUrl:t2,
        name:'John',
        work:'web developer',
        title:'loremk fj the quick brown jfox jumps ofver the lazy dog.'
    },
]


const providerData=[
    {
        name:"John Sena",
        email:"john123@gmail.com",
        phone:5783483478,
        rating:3,
        work:'Carpainter',
        title:"The human brain starts working the moment you are born and never stops until you stand up to speak in public.",
        location:'Delhi',
        imgUrl:v1,
       price:1000,
        available:true
    },
    {
        name:"Sara Taylor",
        email:"sara@gmail.com",
        phone:5783483478,
        rating:3,
        work:'Plumber',
        title:"Any fool can criticize, condemn and complain – and most fools do.",
        location:'Mumbai',
        imgUrl:v2,
       price:1000,
        available:true
    },
    {
        name:"Steve Jobs",
        email:"stevejobs@gmail.com",
        phone:5783483478,
        rating:3,
        work:'Carpainter',
        title:"There are no traffic jams along the extra mile.",
        location:'Delhi',
        imgUrl:v3,
       price:1000,
        available:true
    },
    {
        name:"Phyllis Diller",
        email:"dillar123@gmail.com",
        phone:5783483478,
        rating:3,
        work:'Yoga',
        title:"A smile is a curve that sets things straight.",
        location:'Delhi',
        imgUrl:v4,
       price:1000,
        available:true
    },
    {
        name:"Benjamin Franklin",
        email:"benfrank321@gmail.com",
        phone:5783483478,
        rating:3,
        work:'Teacher',
        title:"Any fool can criticize, condemn and complain – and most fools do",
        location:'Delhi',
        imgUrl:t1,
       price:1000,
        available:true
    },
    {
        name:"William J. Brennan",
        email:"will567@gmail.com",
        phone:5783483478,
        rating:3,
        work:'Carpainter',
        title:"There are no menial jobs, only menial attitudes.",
        location:'Delhi',
        imgUrl:t2,
       price:1000,
        available:true
    },
    {
        name:"John Sharma",
        email:"jsharma@gmail.com",
        phone:5783483478,
        rating:3,
        work:'Gardner',
        title:"Right or wrong, the customer is always right.",
        location:'Delhi',
        imgUrl:t3,
       price:1000,
        available:true
    },
    {
        name:"Kate Zabriskie",
        email:"kat231@gmail.com",
        phone:5783483478,
        rating:3,
        work:'Child Care',
        title:"Right or wrong, the customer is always right.",
        location:'Delhi',
        imgUrl:t4,
       price:1000,
        available:true
    },
    {
        name:"John Doe",
        email:"john@gmail.com",
        phone:5783483478,
        rating:3,
        work:'Carpainter',
        title:"If you don’t take care of your customer, your competitor will.",
        location:'Delhi',
        imgUrl:v1,
       price:1000,
        available:true
    },
    {
        name:"Bob Hooey",
        email:"bob@gmail.com",
        phone:5783483478,
        rating:3,
        work:'Yoga',
        title:"If you don’t take care of your customer, your competitor will.",
        location:'Delhi',
        imgUrl:t1,
       price:1000,
        available:true
    },

]
const categoryData=[
   { work:"Cab Services"},
    {work:"Car  care  and Servicing"},
    {work:"Child Care"},
    {work:"Pediatrician"},
    {work:"Home Cleaning"},
    {work:"Landscaping"},
    {work:"Laundary"},
    {work:"Carpainter"},
    {work:"Electrician"},
    {work:"Plumber"},
    {work:"Yoga"},
    {work:"Gym Trainer"},

]



export {data,categoryData, vendorData, testimonialData,providerData}