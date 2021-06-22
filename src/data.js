export const about = {
  description:
    "I'm currently pursuing a Master's degree in Web Development at East Carolina University and I am working at Cisco as a Technical Marketing Engineer for the Cisco Validated Design team.  I am the go to for technical information and to create new scripts or apps for the team.  I develop full stack applications to assist engineers with solving problems and to present data/trends that could be useful in the long run.",
  extraInfo:
    'Before where I am today, I was a student at the Rochester Institute of Technology.  I graduated with a degree in System Security and Network Exploration.  I went full time at Cisco directly after as a Technical Consulting Engineer on the Firepower security TAC team.  I quickly moved on to become a tech lead and team lead after a year.  In this new position I drove reolustion of hundreds of cases by assisting and troubleshooting issues my colleagues may have.  ',
  ciscoDevInfo:
    'While I was a tech lead I learned web development and started creatinng plugins and full stack applications using MongoDB, CSS, HTML, Python and vanilla JavaScript.  AS time went on I learned about the library React and started learning it to make my development faster and more reusable.',
  freeTime:
    "In my free time, I now work on learning React in depth so i can build amazing web apps.  When I'm not doing that I enjoy spending time with my fiance and multitude of pets.",
};

export const positions = [
  {
    title: 'Technical Marketing Engineer',
    where: 'Cisco',
    timePeriod: 'Jan 2021 - Present',
    description:
      'Provide direct support to clients seeking computer, networking and software consulting services. Uses software tools to track service requests, create and modify computer accounts and assist in resolving client problems. Analyze and resolve computer problems. Help spot and report trends in computer problems. Make initial analysis of complex service requests. Provide solutions, documentation and referrals to professional staff. Determine criticality of service requests; escalates mission critical problems. Provide effective, courteous, timely response to service requests. Advise clients on ITS policies and procedures. Maintain security of Institute computers systems by strict adherence to procedures and policies. Interact with clients from all levels of the Institute.',
    responsibilities: [
      'Trained new hires on tools and processes and mentor to make sure they succeed',
      'Resolves network, account, and computer issues',
    ],
  },
  {
    title: 'Technical Consulting Engineer (Tech Lead)',
    where: 'Cisco',
    timePeriod: 'Jul 2018 - Jan 2021',
    description:
      'Provide direct support to clients seeking computer, networking and software consulting services. Uses software tools to track service requests, create and modify computer accounts and assist in resolving client problems. Analyze and resolve computer problems. Help spot and report trends in computer problems. Make initial analysis of complex service requests. Provide solutions, documentation and referrals to professional staff. Determine criticality of service requests; escalates mission critical problems. Provide effective, courteous, timely response to service requests. Advise clients on ITS policies and procedures. Maintain security of Institute computers systems by strict adherence to procedures and policies. Interact with clients from all levels of the Institute.',
    responsibilities: [
      'Trained new hires on tools and processes and mentor to make sure they succeed',
      'Resolves network, account, and computer issues',
    ],
  },
  {
    title: 'ITS Service Desk Represntative',
    where: 'Rochester Institute of Technology',
    timePeriod: 'Oct 2013 - Jun 2018',
    description:
      'Provide direct support to clients seeking computer, networking and software consulting services. Uses software tools to track service requests, create and modify computer accounts and assist in resolving client problems. Analyze and resolve computer problems. Help spot and report trends in computer problems. Make initial analysis of complex service requests. Provide solutions, documentation and referrals to professional staff. Determine criticality of service requests; escalates mission critical problems. Provide effective, courteous, timely response to service requests. Advise clients on ITS policies and procedures. Maintain security of Institute computers systems by strict adherence to procedures and policies. Interact with clients from all levels of the Institute.',
    responsibilities: [
      'Trained new hires on tools and processes and mentor to make sure they succeed',
      'Resolves network, account, and computer issues',
    ],
  },
];

export const skills = {
  soft: [],
  web: [],
};

export const portfolio = [
  {
    name: 'This Site!',
    about: {
      blurb: '',
      description: '',
      frontEnd: '',
      backend: '',
    },
    toolsUsed: [],
    internal: false,
  },
  {
    name: 'Bugs Fixed',
    about: {
      blurb:
        'This App was made to query and sort a prefilled MongoDb of bugs and display if they are fixed in between two selected software versions.',
      description:
        'This App was made to query and sort a prefilled MongoDb of bugs and display if they are fixed in between two selected software versions.',
      frontEnd:
        'The app had a simple UI with two dropdowns, a loading icon for when queries were made, and a table that was filled after the versions were selected. To get the versions in the drop downs, it would make an initial call to the python backend to get all unique versions from the MongoDB. During this time it would set the loading icon to in progress and animate loading dots.  Once the versions were returned, it would fill the dropdowns with those versions. After the dropdowns were filled, the loading indicator would go green and stop animating.  If it could not get them, it would turn red and say to contact an admin.  A similar process was applied to when the start and end versions were selected.  Onclicking the get button, it would take the two versions, convert them to a long form that the DB used to sort and compare the bugs, and then query the python backend.  Once the python backend returned the data, the data was added as rows into the table and the tables was converted into a datatable using DataTables.js.',
      backend:
        'The backend consisted of a python script that is used to fill the mongoDb, and a python api server that queried the MondoDb for the frontend.  The mpython script that filled the DB, queried a bug database for specific products.  The script would receive the data back in the form of json and it would then use multiprocessing to process more entries as once.  During the processing, it would convert the versions to a long form that could be more easily compared.  An example would be to convert 4.1.0.7 to 400100000700.  This same process occurs once a day to update the DB with any new data that has come about. The python API server would listen to requests and query the mongoDB based on what variables were passed to it.  On the initial page load, the JS script would send a request with the dropdown variable.  This told the python script to query the DB for all uniq versions, sort them, and then pass them back.  If it received two long form versions, it would then query the DB using a selector that got all the bugs in between the two selected versions and included the end version. The same query would sort them too.  Then the server would pass back the results to the frontend.',
    },
    toolsUsed: [
      'HTML',
      'CSS',
      'Python',
      'Cisco UI kit',
      'DataTables',
      'AJAX',
      'MongoDB',
    ],
    internal: true,
  },
  {
    name: 'Backlog by Type',
    about: {
      blurb: '',
      description: '',
      frontEnd: '',
      backend: '',
    },
    toolsUsed: [],
    internal: true,
  },
];
