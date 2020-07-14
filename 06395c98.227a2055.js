(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return c}));var n=a(2),o=a(6),r=(a(0),a(244)),l={id:"lesson",title:"Node - 2",sidebar_label:"Lesson"},s={id:"node/week-2/lesson",title:"Node - 2",description:"Learning Objectives",source:"@site/docs\\node\\week-2\\lesson.md",permalink:"/Syllabus-V2/docs/node/week-2/lesson",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/node/week-2/lesson.md",sidebar_label:"Lesson",sidebar:"Node",previous:{title:"Mentor's Notes",permalink:"/Syllabus-V2/docs/node/week-1/mentors"},next:{title:"Homework",permalink:"/Syllabus-V2/docs/node/week-2/homework"}},b=[{value:"Learning Objectives",id:"learning-objectives",children:[]},{value:"CRUD",id:"crud",children:[]},{value:"(1) Get Exercise",id:"1-get-exercise",children:[{value:"Objective",id:"objective",children:[]}]},{value:"(2) Post Exercise",id:"2-post-exercise",children:[]},{value:"Objective",id:"objective-1",children:[]},{value:"(3) Delete Exercise",id:"3-delete-exercise",children:[]},{value:"Objective",id:"objective-2",children:[]},{value:"Objective",id:"objective-3",children:[]},{value:"GET /Albums",id:"get-albums",children:[]},{value:"Step 7.1 - Install nodemon",id:"step-71---install-nodemon",children:[]},{value:"Step 9: Delete an album",id:"step-9-delete-an-album",children:[]}],i={rightToc:b};function c(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(r.b)("p",null,"By the end of this lesson students should be able to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Define what each part of CRUD is and what it does"),Object(r.b)("li",{parentName:"ul"},"Process a GET request using Express and Node to retrieve data from memory"),Object(r.b)("li",{parentName:"ul"},"Process a POST request using Express and Node and store data in memory"),Object(r.b)("li",{parentName:"ul"},"Process a DELETE request using Express and Node to remove data from memory"),Object(r.b)("li",{parentName:"ul"},"Install a third party library using ",Object(r.b)("inlineCode",{parentName:"li"},"npm"))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"crud"},"CRUD"),Object(r.b)("p",null,"So what will we build? we will build a ",Object(r.b)("strong",{parentName:"p"},"CRUD")," API. CRUD stands for Create, Retrieve, Update, Delete. If you think about it, this is what most applications do:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'Create some "resources"'),Object(r.b)("li",{parentName:"ul"},"Retrieve them (GET them)"),Object(r.b)("li",{parentName:"ul"},"Update them"),Object(r.b)("li",{parentName:"ul"},"Delete them")),Object(r.b)("p",null,"Below are three in-class exercises which can be used to demonstrate parts of the API workshop below."),Object(r.b)("h2",{id:"1-get-exercise"},"(1) Get Exercise"),Object(r.b)("p",null,"This is an Teacher led exercise which can be used to show how we might retrieve an element by ID using a GET request."),Object(r.b)("h3",{id:"objective"},"Objective"),Object(r.b)("p",null,"Change a quote API server to allow GETting a quote according to the given ID."),Object(r.b)("p",null,"The id should be given in the URL structure like this:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"/quotes/2")),Object(r.b)("p",null,"You should use the starting project: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://glitch.com/~cyf-quotes-id-start"}),"cyf-quotes-id-start"),". This is because this project has quotes with IDs."),Object(r.b)("p",null,"When you remix the starting project, immediately rename it as your own."),Object(r.b)("h2",{id:"2-post-exercise"},"(2) Post Exercise"),Object(r.b)("p",null,"This is an Teacher led exercise which can be used to show how we might add an element to an array"),Object(r.b)("h2",{id:"objective-1"},"Objective"),Object(r.b)("p",null,"Change a quote API server to allow POSTs of new quotes."),Object(r.b)("p",null,"The new quotes should be added to your quotes list, which is just an array in memory."),Object(r.b)("p",null,"You can assume the POSTed quotes are all in the correct JSON format."),Object(r.b)("p",null,"The route should use the HTTP method POST and should use the URL:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"/quotes")),Object(r.b)("p",null,"You should use the starting project: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://glitch.com/~cyf-quotes-post-start"}),"cyf-quotes-post-start"),", NOT your own existing quote server. This is because our project has an HTML form for creating new quotes."),Object(r.b)("p",null,"When you remix our starting project, immediately rename it."),Object(r.b)("p",null,"Then you can visit / and submit the form there, when you are ready to try to submit new quotes!"),Object(r.b)("h2",{id:"3-delete-exercise"},"(3) Delete Exercise"),Object(r.b)("p",null,"This is an Teacher led exercise which can be used to show how we might remove an element to an array"),Object(r.b)("h2",{id:"objective-2"},"Objective"),Object(r.b)("p",null,"Change a quote API server to allow updating a quote according to the given ID."),Object(r.b)("p",null,"The id should be given in the URL structure like this:"),Object(r.b)("p",null,"/quotes/2"),Object(r.b)("p",null,"You should use the ",Object(r.b)("inlineCode",{parentName:"p"},"delete")," HTTP method"),Object(r.b)("p",null,"You should use this starting project: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://glitch.com/~cyf-quotes-id-start"}),"cyf-quotes-id-start"),", NOT your own existing quote server. This is because this project has quotes with IDs."),Object(r.b)("p",null,"When you remix the starting project, immediately rename it as your own."),Object(r.b)("h1",{id:"workshop---lets-build-an-api"},"Workshop - Let's build an API"),Object(r.b)("p",null,"You can use this ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/nbogie/express-notes/blob/master/express-cheatsheet.md"}),"Express Cheatsheet")," to help you."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"API")," stands for Application Programming Interface."),Object(r.b)("p",null,"Read this description of what an API from ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.howtogeek.com/343877/what-is-an-api/"}),"How To Geek"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Think of an API like a menu in a restaurant. The menu provides a list of dishes you can order, along with a description of each dish. When you specify what menu items you want, the restaurant\u2019s kitchen does the work and provides you with some finished dishes. You don\u2019t know exactly how the restaurant prepares that food, and you don\u2019t really need to.\nSimilarly, an API lists a bunch of operations that developers can use, along with a description of what they do. The developer doesn\u2019t necessarily need to know how, for example, an operating system builds and presents a \u201cSave As\u201d dialog box. They just need to know that it\u2019s available for use in their app.")),Object(r.b)("p",null,"An API does not have to be web-based. But in our work, since we are doing web development, we will work only with web based APIs, so you might as well hear the word ",Object(r.b)("strong",{parentName:"p"},"Web Service"),", and we will communicate with those services using the protocol for Web: ",Object(r.b)("strong",{parentName:"p"},"HTTP"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Checkpoint:")," Let us recap what we know about HTTP before continuing.")),Object(r.b)("h2",{id:"objective-3"},"Objective"),Object(r.b)("p",null,"Our ",Object(r.b)("strong",{parentName:"p"},"API")," will manage Beyonc\xe9 albums:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create a new album,"),Object(r.b)("li",{parentName:"ul"},"Retrieve a list of albums or a single album,"),Object(r.b)("li",{parentName:"ul"},"Update an existing album's information"),Object(r.b)("li",{parentName:"ul"},"Delete an album")),Object(r.b)("p",null,"We will build these endpoints:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"GET /albums")," should return all the albums\n",Object(r.b)("inlineCode",{parentName:"p"},"GET /albums/:albumId")," should return a single album (that matches the passed albumId)\n",Object(r.b)("inlineCode",{parentName:"p"},"POST /albums")," should save a new album\n",Object(r.b)("inlineCode",{parentName:"p"},"PUT /albums/:albumId")," should update the album (that matches the passed albumId)\n",Object(r.b)("inlineCode",{parentName:"p"},"DELETE /albums/:albumId")," should delete the album (that matches the passed albumId)"),Object(r.b)("h2",{id:"get-albums"},"GET /Albums"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"In ",Object(r.b)("inlineCode",{parentName:"li"},"server.js")," Add the endpoint for ",Object(r.b)("inlineCode",{parentName:"li"},"GET /albums"),".")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const albumsData = [\n  {\n    albumId: "10",\n    artistName: "Beyonc\xe9",\n    collectionName: "Lemonade",\n    artworkUrl100:\n      "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",\n    releaseDate: "2016-04-25T07:00:00Z",\n    primaryGenreName: "Pop",\n    url:\n      "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0",\n  },\n  {\n    albumId: "11",\n    artistName: "Beyonc\xe9",\n    collectionName: "Dangerously In Love",\n    artworkUrl100:\n      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",\n    releaseDate: "2003-06-24T07:00:00Z",\n    primaryGenreName: "Pop",\n    url:\n      "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",\n  },\n];\n\napp.get("/albums", function (req, res) {\n  res.send(albumsData);\n});\n')),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Test the endpoint with Postman. ",Object(r.b)("inlineCode",{parentName:"p"},"GET /songs")," should return a JSON reply with the array we specified.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Add another item to the array and test that the ",Object(r.b)("inlineCode",{parentName:"p"},"GET /songs")," returns three items. (Remember you need to close the server ",Object(r.b)("inlineCode",{parentName:"p"},"ctrl+c")," and run it again ",Object(r.b)("inlineCode",{parentName:"p"},"node server.js"),")"))),Object(r.b)("h1",{id:"step-7-get-albumsalbumid"},"Step 7: GET /albums/:albumId"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Complete in-class (1) GET Exercise at this point")),Object(r.b)("p",null,"Sometimes, we do not want to ",Object(r.b)("em",{parentName:"p"},"list")," all the information in one request, maybe we only want to get the information related to a single album. Imagine if we have a page to display the details of one album, we could call the server and get all albums then filter the one we need ",Object(r.b)("em",{parentName:"p"},"client-side"),", but would it not be more effective to tell the server to just return the one album we are interested in?"),Object(r.b)("p",null,"Let us add a new endpoint to return only a single album ",Object(r.b)("inlineCode",{parentName:"p"},"GET /albums/:albumId"),". In this case, ",Object(r.b)("em",{parentName:"p"},"albumId")," will tell us what album we can return so the call will be something like ",Object(r.b)("inlineCode",{parentName:"p"},"GET /albums/10")," and that will return the album with that has ",Object(r.b)("em",{parentName:"p"},"albumId")," 10 ()"),Object(r.b)("p",null,"This endpoint has something different. The endpoint ",Object(r.b)("inlineCode",{parentName:"p"},"/albums/:albumId")," has a ",Object(r.b)("em",{parentName:"p"},"dynamic")," part, the ",Object(r.b)("em",{parentName:"p"},"albumId")," will vary depending on what the client send. If we call ",Object(r.b)("inlineCode",{parentName:"p"},"/albums/12")," then albumId is 12, if we call ",Object(r.b)("inlineCode",{parentName:"p"},"/albums/10")," then we will return the album with albumId 10 and so on."),Object(r.b)("p",null,"How can we achieve that using ",Object(r.b)("inlineCode",{parentName:"p"},"express")," - ",Object(r.b)("inlineCode",{parentName:"p"},"req.params")," will have the value of"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'app.get("/albums/:albumId", function (req, res) {\n  // req.params.albumId will match the value in the url after /albums/\n  console.log(req.params.albumId);\n  // now we can use the value for req.params.albumId to find the album requested\n  // how do we "find" something in an array\n\n  // finish the code yourself - it should end with res.send(album) where album is the single album you found  based on the id\n});\n')),Object(r.b)("h2",{id:"step-71---install-nodemon"},"Step 7.1 - Install nodemon"),Object(r.b)("p",null,"It is a bit annoying that we have to ",Object(r.b)("em",{parentName:"p"},"kill")," and ",Object(r.b)("em",{parentName:"p"},"restart")," our server every time we want to test our changes. There is a handy ",Object(r.b)("strong",{parentName:"p"},"npm package")," that can help us with that task."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"npm install --save-dev nodemon")),Object(r.b)("p",null,"Make sure the package is added to your ",Object(r.b)("em",{parentName:"p"},"package.json"),", add this line to the script:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"scripts: {\n  start: \"node server.js\",\n  dev: 'nodemon server.js'\n}\n")),Object(r.b)("p",null,"now from your terminal, use the command ",Object(r.b)("inlineCode",{parentName:"p"},"npm run dev")," and that will run the ",Object(r.b)("em",{parentName:"p"},"server")," with ",Object(r.b)("inlineCode",{parentName:"p"},"nodemon")," which is a package that makes the server listen to code changes and automatically restart."),Object(r.b)("h1",{id:"step-8-add-a-new-album"},"Step 8: Add a new album"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Complete in-class (2) Post Exercise at this point")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Our analogy with the Restaurant menu is somewhat incomplete. In a restaurant, we only GET items from the menu. In the world of APIs, we also have the possibility to create items, we can provide ",Object(r.b)("em",{parentName:"p"},"ingredients")," to create a new dish. In this case, we provide some data (a payload) and we use a different verb ",Object(r.b)("strong",{parentName:"p"},"POST")," (Create) as opposed to GET.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"POST /albums")," should save a new album and return ",Object(r.b)("inlineCode",{parentName:"p"},"200")," with JSON ",Object(r.b)("inlineCode",{parentName:"p"},"{ success: true }")," to the user."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'// notice .post (not .get)\napp.post("/albums", function (req, res) {\n  console.log("POST /albums route");\n});\n')),Object(r.b)("p",null,"Let's start by testing using Postman. Do a ",Object(r.b)("inlineCode",{parentName:"p"},"POST")," request to the endpoint and make sure it prints the console.log message we have added."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"In Postman, change the request ",Object(r.b)("inlineCode",{parentName:"p"},"method")," to ",Object(r.b)("inlineCode",{parentName:"p"},"POST")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"GET")," and test our endpoint. It should log the message to the terminal but the request will hang because we did not end it, i.e. we did not say ",Object(r.b)("inlineCode",{parentName:"p"},"res.send(something)")," > ",Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"../assets/postman-post-method.png",alt:null})))),Object(r.b)("p",null,"So what format does the client send the data with? It is up to us, but since we already are familiar with ",Object(r.b)("inlineCode",{parentName:"p"},"json"),", let us use it."),Object(r.b)("p",null,"In order for our ",Object(r.b)("em",{parentName:"p"},"server-side")," to receive and use the data sent by the client. We will need to install and use a ",Object(r.b)("strong",{parentName:"p"},"middleware"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Middleware: We will cover middleware in more details in the next class. For now, imagine them piece of code that process a request and pass them to the next middleware until one of them returns a response (with ",Object(r.b)("inlineCode",{parentName:"p"},"res.send")," for example)")),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/expressjs/body-parser#examples"}),"Express Body Parser")," makes it easier for our ",Object(r.b)("em",{parentName:"p"},"endpoints")," to receive and understand different formats of data."),Object(r.b)("p",null,"First install the package: ",Object(r.b)("inlineCode",{parentName:"p"},"npm install body-parser --save")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const bodyParser = require("body-parser");\n\napp.use(bodyParser.json()); // before our routes definition\n')),Object(r.b)("p",null,"Now we will receive the data as ",Object(r.b)("inlineCode",{parentName:"p"},"req.body"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'app.post("/albums", function (req, res) {\n  console.log("POST /albums route");\n  console.log(req.body);\n});\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Exercise: Use Postman to ",Object(r.b)("inlineCode",{parentName:"p"},"POST")," this data to ",Object(r.b)("inlineCode",{parentName:"p"},"/albums")," endpoint.")),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"../assets/postman-post.png",alt:null}))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "albumId": "13",\n  "artistName": "Beyonc\xe9",\n  "collectionName": "B\'Day (Deluxe Edition)",\n  "artworkUrl100": "http://is5.mzstatic.com/image/thumb/Music/v4/6c/fc/6a/6cfc6a13-0633-f96b-9d72-cf56774beb4b/source/100x100bb.jpg",\n  "releaseDate": "2007-05-29T07:00:00Z",\n  "primaryGenreName": "Pop",\n  "url": "https://www.youtube.com/embed/RQ9BWndKEgs?rel=0&amp;controls=0&amp;showinfo=0"\n}\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Finish the code for the route ",Object(r.b)("inlineCode",{parentName:"p"},"POST /albums")," to add the album data to the albums list (how to amend to an array?)")),Object(r.b)("h2",{id:"step-9-delete-an-album"},"Step 9: Delete an album"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Complete in-class (3) DELETE Exercise at this point")),Object(r.b)("p",null,"Lets look back at our original objectives."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("inlineCode",{parentName:"p"},"DELETE /albums/:albumId")," should delete the album (that matches the passed albumId)")),Object(r.b)("p",null,"This means that ",Object(r.b)("inlineCode",{parentName:"p"},"DELETE /albums/2")," should delete an album with the id ",Object(r.b)("inlineCode",{parentName:"p"},"2")," and return ",Object(r.b)("inlineCode",{parentName:"p"},"200")," with JSON ",Object(r.b)("inlineCode",{parentName:"p"},"{ success: true }")," to the user."),Object(r.b)("p",null,"The code will look like this"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'// notice .delete\napp.delete("/albums/:albumID", function (req, res) {\n  console.log("DELETE /albums route");\n});\n')),Object(r.b)("p",null,"Can you work out how to remove an album using this code?"))}c.isMDXComponent=!0},244:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=o.a.createContext({}),c=function(e){var t=o.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,d=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return a?o.a.createElement(d,s(s({ref:t},i),{},{components:a})):o.a.createElement(d,s({ref:t},i))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var s={};for(var b in t)hasOwnProperty.call(t,b)&&(s[b]=t[b]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var i=2;i<r;i++)l[i]=a[i];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);