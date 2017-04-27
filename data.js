var users = [
    {
      name: 'Arcot',
      paid: 0,
      key: 'arcot'
    },
    {
      name: 'Bugga',
      paid: 0,
      key: 'bugga'
    },
    {
      name: 'Harsh',
      paid: 0,
      key: 'harsh'
    },
    {
      name: 'Khushboo',
      paid: 350,
      key: 'khushboo'
    },
    {
      name: 'Lakku',
      paid: 500,
      key: 'lakku'
    },
    {
      name: 'Raghu',
      paid: 0,
      key: 'raghu'
    },
    {
      name: 'Ramesh',
      paid: 0,
      key: 'ramesh'
    },
    {
      name: 'Sai',
      paid: 0,
      key: 'sai'
    },
    {
      name: 'Siva',
      paid: 200,
      key: 'siva'
    }
  ]

var data = [
  {
    "match": ["SRH", "RCB"],
    "location": "Hyderabad",
    "date": "04-05-2017",
    "time": "8:00PM",
    "result": "SRH",
      "lakku": "SRH",
      "raghu": "SRH",
      "siva": "SRH",
      "bugga": "SRH",
      "arcot": "RCB",
      "ramesh": "RCB",
      "harsh": "SRH",
      "sai":"RCB",
      "khushboo": "RCB"
  },
  {
    "match": ["RPS", "MI"],
    "location": "Pune",
    "date": "04-06-2017",
    "time": "8:00PM",
    "result": "RPS",
      "lakku": "MI",
      "raghu": "RPS",
      "siva": "RPS",
      "bugga": "MI",
      "arcot": "RPS",
      "ramesh": "MI",
      "harsh": "MI",
      "sai":"MI",
      "khushboo": "RPS"
  },
  {
    "match": ["GL", "KKR"],
    "location": "Rajkot",
    "date": "04-07-2017",
    "time": "8:00PM",
    "result": "KKR",
      "lakku": "GL",
      "raghu": "KKR",
      "siva": "GL",
      "bugga": "GL",
      "arcot": "GL",
      "ramesh": "GL",
      "harsh": "GL",
      "sai":"KKR",
      "khushboo": "GL"
  },
  {
    "match": ["KXIP", "RPS"],
    "location": "Indore",
    "date": "04-08-2017",
    "time": "4:00PM",
    "result": "KXIP",
      "lakku": "RPS",
      "raghu": "RPS",
      "siva": "RPS",
      "bugga": "RPS",
      "arcot": "KXIP",
      "ramesh": "RPS",
      "harsh": "X",
      "sai":"RPS",
      "khushboo": "RPS"
  },
  {
    "match": ["RCB", "DD"],
    "location": "Bengaluru",
    "date": "04-09-2017",
    "time": "8:00PM",
    "result": "RCB",
      "lakku": "DD",
      "raghu": "RCB",
      "siva": "RCB",
      "bugga": "RCB",
      "arcot": "RCB",
      "ramesh": "RCB",
      "harsh": "X",
      "sai":"DD",
      "khushboo": "RCB"
  },
  {
    "match": ["SRH", "GL"],
    "location": "Hyderabad",
    "date": "04-09-2017",
    "time": "4:00PM",
    "result": "SRH",
      "lakku": "SRH",
      "raghu": "SRH",
      "siva": "SRH",
      "bugga": "GL",
      "arcot": "GL",
      "ramesh": "SRH",
      "harsh": "SRH",
      "sai":"SRH",
      "khushboo": "SRH"
  },
  {
    "match": ["MI", "KKR"],
    "location": "Mumbai",
    "date": "04-09-2017",
    "time": "8:00PM",
    "result": "MI",
      "lakku": "KKR",
      "raghu": "MI",
      "siva": "MI",
      "bugga": "MI",
      "arcot": "MI",
      "ramesh": "MI",
      "harsh": "X",
      "sai":"KKR",
      "khushboo": "MI"
  },
  {
    "match": ["KXIP", "RCB"],
    "location": "Indore",
    "date": "04-10-2017",
    "time": "8:00PM",
    "result": "KXIP",
      "lakku": "KXIP",
      "raghu": "RCB",
      "siva": "KXIP",
      "bugga": "KXIP",
      "arcot": "KXIP",
      "ramesh": "RCB",
      "harsh": "RCB",
      "sai":"X",
      "khushboo": "RCB"
  },
  {
    "match": ["RPS", "DD"],
    "location": "Pune",
    "date": "04-11-2017",
    "time": "8:00PM",
    "result": "DD",
      "lakku": "DD",
      "raghu": "X",
      "siva": "RPS",
      "bugga": "RPS",
      "arcot": "DD",
      "ramesh": "DD",
      "harsh": "X",
      "sai":"X",
      "khushboo": "RPS"
  },
  {
    "match": ["MI", "SRH"],
    "location": "Mumbai",
    "date": "04-12-2017",
    "time": "8:00PM",
    "result": "MI",
      "lakku": "SRH",
      "raghu": "SRH",
      "siva": "MI",
      "bugga": "MI",
      "arcot": "SRH",
      "ramesh": "MI",
      "harsh": "SRH",
      "sai":"SRH",
      "khushboo": "X"
  },
  {
    "match": ["KKR", "KXIP"],
    "location": "Kolkata",
    "date": "04-13-2017",
    "time": "8:00PM",
    "result": "KKR",
      "lakku": "KXIP",
      "raghu": "KKR",
      "siva": "KKR",
      "bugga": "KKR",
      "arcot": "KXIP",
      "ramesh": "KKR",
      "harsh": "KXIP",
      "sai":"KKR",
      "khushboo": "KXIP"
  },
  {
    "match": ["RCB", "MI"],
    "location": "Bengaluru",
    "date": "04-14-2017",
    "time": "4:00PM",
    "result": "MI",
      "lakku": "RCB",
      "raghu": "MI",
      "siva": "RCB",
      "bugga": "RCB",
      "arcot": "MI",
      "ramesh": "RCB",
      "harsh": "RCB",
      "sai":"MI",
      "khushboo": "RCB"
  },
  {
    "match": ["GL", "RPS"],
    "location": "Rajkot",
    "date": "04-14-2017",
    "time": "8:00PM",
    "result": "GL",
      "lakku": "GL",
      "raghu": "RPS",
      "siva": "GL",
      "bugga": "RPS",
      "arcot": "RPS",
      "ramesh": "GL",
      "harsh": "GL",
      "sai":"GL",
      "khushboo": "GL"
  },
  {
    "match": ["KKR", "SRH"],
    "location": "Kolkata",
    "date": "04-15-2017",
    "time": "4:00PM",
    "result": "KKR",
      "lakku": "SRH",
      "raghu": "KKR",
      "siva": "X",
      "bugga": "KKR",
      "arcot": "SRH",
      "ramesh": "KKR",
      "harsh": "SRH",
      "sai":"KKR",
      "khushboo": "KKR"
  },
  {
    "match": ["DD", "KXIP"],
    "location": "Delhi",
    "date": "04-15-2017",
    "time": "8:00PM",
    "result": "DD",
      "lakku": "DD",
      "raghu": "KXIP",
      "siva": "KXIP",
      "bugga": "KXIP",
      "arcot": "KXIP",
      "ramesh": "DD",
      "harsh": "DD",
      "sai":"KXIP",
      "khushboo": "DD"
  },
  {
    "match": ["MI", "GL"],
    "location": "Mumbai",
    "date": "04-16-2017",
    "time": "4:00PM",
    "result": "MI",
      "lakku": "MI",
      "raghu": "MI",
      "siva": "MI",
      "bugga": "MI",
      "arcot": "MI",
      "ramesh": "MI",
      "harsh": "MI",
      "sai":"MI",
      "khushboo": "MI"
  },
  {
    "match": ["RCB", "RPS"],
    "location": "Bengaluru",
    "date": "04-16-2017",
    "time": "8:00PM",
    "result": "RPS",
      "lakku": "RCB",
      "raghu": "RCB",
      "siva": "RCB",
      "bugga": "RCB",
      "arcot": "RPS",
      "ramesh": "RCB",
      "harsh": "RPS",
      "sai":"RCB",
      "khushboo": "RCB"
  },
  {
    "match": ["DD", "KKR"],
    "location": "Delhi",
    "date": "04-17-2017",
    "time": "4:00PM",
    "result": "KKR",
      "lakku": "DD",
      "raghu": "DD",
      "siva": "DD",
      "bugga": "KKR",
      "arcot": "DD",
      "ramesh": "DD",
      "harsh": "KKR",
      "sai":"KKR",
      "khushboo": "DD"
  },
  {
    "match": ["SRH", "KXIP"],
    "location": "Delhi",
    "date": "04-17-2017",
    "time": "8:00PM",
    "result": "SRH",
      "lakku": "SRH",
      "raghu": "SRH",
      "siva": "SRH",
      "bugga": "SRH",
      "arcot": "KXIP",
      "ramesh": "SRH",
      "harsh": "SRH",
      "sai":"KXIP",
      "khushboo": "SRH"
  },
  {
    "match": ["GL", "RCB"],
    "location": "Rajkot",
    "date": "04-18-2017",
    "time": "8:00PM",
    "result": "RCB",
      "lakku": "RCB",
      "raghu": "RCB",
      "siva": "RCB",
      "bugga": "RCB",
      "arcot": "GL",
      "ramesh": "RCB",
      "harsh": "GL",
      "sai":"GL",
      "khushboo": "GL"
  },
  {
    "match": ["SRH", "DD"],
    "location": "Hyderabad",
    "date": "04-19-2017",
    "time": "8:00PM",
    "result": "SRH",
      "lakku": "SRH",
      "raghu": "DD",
      "siva": "DD",
      "bugga": "DD",
      "arcot": "SRH",
      "ramesh": "SRH",
      "harsh": "SRH",
      "sai":"DD",
      "khushboo": "SRH"
  },
  {
    "match": ["KXIP", "MI"],
    "location": "Indore",
    "date": "04-20-2017",
    "time": "8:00PM",
    "result": "MI",
      "lakku": "KXIP",
      "raghu": "MI",
      "siva": "MI",
      "bugga": "MI",
      "arcot": "KXIP",
      "ramesh": "MI",
      "harsh": "KXIP",
      "sai":"MI",
      "khushboo": "MI"
  },
  {
    "match": ["KKR", "GL"],
    "location": "Kolkata",
    "date": "04-21-2017",
    "time": "8:00PM",
    "result": "GL",
      "lakku": "KKR",
      "raghu": "KKR",
      "siva": "KKR",
      "bugga": "KKR",
      "arcot": "KKR",
      "ramesh": "GL",
      "harsh": "GL",
      "sai":"KKR",
      "khushboo": "KKR"
  },
  {
    "match": ["RPS", "SRH"],
    "location": "Pune",
    "date": "04-22-2017",
    "time": "4:00PM",
    "result": "RPS",
      "lakku": "SRH",
      "raghu": "X",
      "siva": "RPS",
      "bugga": "RPS",
      "arcot": "RPS",
      "ramesh": "SRH",
      "harsh": "SRH",
      "sai":"SRH",
      "khushboo": "RPS"
  },
  {
    "match": ["MI", "DD"],
    "location": "Mumbai",
    "date": "04-22-2017",
    "time": "8:00PM",
    "result": "MI",
      "lakku": "MI",
      "raghu": "MI",
      "siva": "MI",
      "bugga": "MI",
      "arcot": "DD",
       "ramesh": "MI",
      "harsh": "MI",
      "sai":"DD",
      "khushboo": "MI"
  },
  {
    "match": ["GL", "KXIP"],
    "location": "Rajkot",
    "date": "04-23-2017",
    "time": "4:00PM",
    "result": "KXIP",
      "lakku": "GL",
      "raghu": "KXIP",
      "siva": "GL",
      "bugga": "KXIP",
      "arcot": "KXIP",
      "ramesh": "KXIP",
      "harsh": "GL",
      "sai":"GL",
      "khushboo": "GL"
  },
  {
    "match": ["KKR", "RCB"],
    "location": "Kolkata",
    "date": "04-23-2017",
    "time": "8:00PM",
    "result": "KKR",
      "lakku": "KKR",
      "raghu": "RCB",
      "siva": "RCB",
      "bugga": "RCB",
      "arcot": "KKR",
      "ramesh": "RCB",
      "harsh": "KKR",
      "sai":"KKR",
      "khushboo": "RCB"
  },
  {
    "match": ["MI", "RPS"],
    "location": "Mumbai",
    "date": "04-24-2017",
    "time": "8:00PM",
    "result": "RPS",
      "lakku": "MI",
      "raghu": "MI",
      "siva": "MI",
      "bugga": "MI",
      "arcot": "RPS",
      "ramesh": "MI",
      "harsh": "MI",
      "sai":"MI",
      "khushboo": "RPS"
  },
  {
    "match": ["RCB", "SRH"],
    "location": "Bengaluru",
    "date": "04-25-2017",
    "time": "8:00PM",
    "result": "",
      "lakku": "SRH",
      "raghu": "RCB",
      "siva": "SRH",
      "bugga": "RCB",
      "arcot": "RCB",
      "ramesh": "RCB",
      "harsh": "RCB",
      "sai":"RCB",
      "khushboo": "RCB"
  },
  {
    "match": ["RPS", "KKR"],
    "location": "Pune",
    "date": "04-26-2017",
    "time": "8:00PM",
    "result": "KKR",
      "lakku": "KKR",
      "raghu": "RPS",
      "siva": "RPS",
      "bugga": "KKR",
      "arcot": "KKR",
      "ramesh": "KKR",
      "harsh": "RPS",
      "sai":"KKR",
      "khushboo": "RPS"
  },
  {
    "match": ["RCB", "GL"],
    "location": "Bengaluru",
    "date": "04-27-2017",
    "time": "8:00PM",
    "result": "",
      "lakku": "",
      "raghu": "",
      "siva": "",
      "bugga": "",
      "arcot": "",
      "ramesh": "",
      "harsh": "",
      "sai":"",
      "khushboo": ""
  }
  ]