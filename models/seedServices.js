const {Service} = require('../models');
const qtyLimit = 50;

Service.find().then((list)=>{
  if(list.length >= 1) {
    console.log("Resetting service list...");
    Service.deleteMany({}, function(e) {console.log(e);}).then(()=> {makenBreak()});
  } else {
    makenBreak();
  }
});

function makenBreak() {
  Service.create(
    {
      name: "Window Washing",
      desc: "Price is per pane, discounts on orders of 10+ window panes",
      img: '/assets/services/window-washing.jpg',
      qtyLimit: qtyLimit,
      prices: [/*{
        amount: 10,
        for: 'one-side'
      },{
        amount: 15,
        for: 'two-side'
      }, */{
        amount: 5,
        for: 'one-side (DEAL thru 09/22/2022)'
      }, {
        amount: 7.5,
        for: 'two-side (DEAL thru 09/22/2022)'
      }]
    },{
      name: "Moving",
      desc: "",
      dcm: 1.5,
      img: '/assets/services/moving.jpg',
      qtyLimit: qtyLimit,
      prices: [{
        amount: 65,
        for: '1 bed 1 bath'
      },{
        amount: 85,
        for: '1 bed 2 bath'
      }, {
        amount: 90,
        for: '2 bed 1 bath'
      }, {
        amount: 100,
        for: '2 bed 2 bath'
      },{
        amount: 140,
        for: '3 bed 2 bath'
      },{
        amount: 150,
        for: '4 bed 2 bath'
      }]
    },{
      name: "Flex Clean",
      desc: "A flexible option to let you choose individual things you want cleaned!",
      img: '/assets/services/flexclean.jpg',
      qtyLimit: qtyLimit,
      prices: [{
        amount: 20,
        for: 'Oven'
      },{
        amount: 20,
        for: 'Cabinet Interior'
      }, {
        amount: 30,
        for: 'Fixtures'
      }, {
        amount: 20,
        for: 'Refrigerator'
      }, {
        amount: 50,
        for: 'Windows'
      }, {
        amount: 0.3,
        for: 'Per Sq. Ft. of Carpet'
      }, {
        amount: 20,
        for: 'Dryer Vent & Hose Cleaning (per)'
      }]
    },{
      name: "Commercial Cleaning",
      desc: "",
      img: '/assets/services/commercial.jpg',
      qtyLimit: 20000,
      prices: [{
        amount: 70,
        for: '0-1,000 sqft.'
      },{
        amount: 140,
        for: '1,000-5,000 sqft.'
      }, {
        amount: 200,
        for: '5,000-10,000sqft.'
      }, {
        amount: 300,
        for: '10,000-20,000 sqft.'
      }]
    },{
      name: "Hoarding Removal",
      desc: "",
      img: '/assets/services/hoardremoval.jpg',
      qtyLimit: qtyLimit,
      prices: [{
        amount: 0,
        for: "Call for Pricing and Appointment!"
      }]
    },{
      name: "Biohazard Cleanup",
      desc: "",
      img: '/assets/services/biohazard.jpg',
      qtyLimit: qtyLimit,
      prices: [{
        amount: 0,
        for: "Call for Pricing and Appointment!"
      }]
    },{
      name: "HVAC",
      desc: "A whole slew of HVAC tools for your HVAC needs",
      img: "/assets/services/hvac.jpg",
      qtyLimit: qtyLimit,
      prices: [
        {
          amount: 20,
          for: "Dryer Vent & Hose Cleaning (per)"
        }
      ]
    },{
      name: "Power Washing",
      desc: "Powerful Power Washer gets any set of gutter grime, house dirt, or driveway rubber off in minutes!",
      img: "/assets/services/power-washing.jpg",
      qtyLimit: 10000,
      prices: [
        {
          amount: 0.25,
          for: "Per Sq. Ft. Power Washed"
        }
      ]
    }
  ).then(()=>{process.exit();});
}