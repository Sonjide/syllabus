(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{227:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(244)),l={id:"cyf-hotel",title:"CYF Hotel Workshop",sidebar_label:"CYF Hotel Workshop"},b={id:"node/workshops/cyf-hotel",title:"CYF Hotel Workshop",description:"Contents",source:"@site/docs\\node\\workshops\\cyf-hotel.md",permalink:"/Syllabus-V2/docs/node/workshops/cyf-hotel",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/node/workshops/cyf-hotel.md",sidebar_label:"CYF Hotel Workshop",sidebar:"Node",previous:{title:"Express Workshop",permalink:"/Syllabus-V2/docs/node/workshops/workshop"}},i=[{value:"Contents",id:"contents",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Problem Statement",id:"problem-statement",children:[]},{value:"User Journeys",id:"user-journeys",children:[]},{value:"Team Work",id:"team-work",children:[]},{value:"Learning Outcomes",id:"learning-outcomes",children:[]}],c={rightToc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"contents"},"Contents"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#introduction"}),"Introduction")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#problem-statement"}),"Problem Statement")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#user-journeys"}),"User Journeys")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#team-work"}),"Team Work")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#learning-outcomes"}),"Learning Outcomes"))),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Brief"),": Designing a hotel website"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Client"),": CYF Hotels Ltd"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Date"),": 28 January 2018"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Facilitators"),": CYF Mentors"),Object(o.b)("p",null,"Now that you are almost a full-stack developer, we would like you to make us a website for our imaginary hotel."),Object(o.b)("p",null,"Since you have a limited time, there is already an empty boilerplate project for you to take and build on top of."),Object(o.b)("p",null,"In keeping with times, we are using the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Lean_services"}),"Lean model")," and only developing features that we see necessary for the ",Object(o.b)("em",{parentName:"p"},"Minimum Viable Product (MVP)"),"."),Object(o.b)("h2",{id:"problem-statement"},"Problem Statement"),Object(o.b)("p",null,"Currently hotel website is a little empty. Although some raw data is available from recording things on a computer, ",Object(o.b)("strong",{parentName:"p"},"Hotel Manager")," and ",Object(o.b)("strong",{parentName:"p"},"Receptionists")," do not have ways to view them in a useful way."),Object(o.b)("p",null,"Similarly the hotel ",Object(o.b)("strong",{parentName:"p"},"Customers")," cannnot get a link to their invoices online to view or pint them, so they are also unhappy."),Object(o.b)("h2",{id:"user-journeys"},"User Journeys"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"../assets/persona.png",alt:"Personas"}))),Object(o.b)("p",null,"We are looking at three personas today:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Hotel Customer"),Object(o.b)("li",{parentName:"ul"},"Hotel Receptionist"),Object(o.b)("li",{parentName:"ul"},"Hotel Manager")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"As a < type of user >, I want < some goal > so that < some reason >.")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"As a ",Object(o.b)("em",{parentName:"p"},"Hotel Manager"),", I want to ",Object(o.b)("strong",{parentName:"p"},"view a list of all customers"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"As a ",Object(o.b)("em",{parentName:"p"},"Hotel Manager"),", I want to ",Object(o.b)("strong",{parentName:"p"},"view a customers details by their customer account ID"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"As a ",Object(o.b)("em",{parentName:"p"},"Hotel Manager"),", I want to ",Object(o.b)("strong",{parentName:"p"},"view a list of all invoice"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"As a ",Object(o.b)("em",{parentName:"p"},"Hotel Manager"),", I want to ",Object(o.b)("strong",{parentName:"p"},"view a an invoice by it's Invoice ID"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"As a ",Object(o.b)("em",{parentName:"p"},"Hotel Receptionist"),", I want to ",Object(o.b)("strong",{parentName:"p"},"list of all reservations"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"AS a ",Object(o.b)("em",{parentName:"p"},"Hotel Receptionist"),", I want to ",Object(o.b)("strong",{parentName:"p"},"view a reservation by it's reservation ID"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"As a ",Object(o.b)("em",{parentName:"p"},"Hotel Customer"),", I want to ",Object(o.b)("strong",{parentName:"p"},"view my invoice page")))),Object(o.b)("h2",{id:"team-work"},"Team Work"),Object(o.b)("p",null,"We need you to work in a team by dividing up the work"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Role"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Responsibility"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Backend"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"API, data")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Frontend"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"HTML/CSS/Templates (Handlebars)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"PM/User Experience"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"User journeys, tickets")))),Object(o.b)("p",null,"As a student you can have multiple roles."),Object(o.b)("p",null,"Get a mentor to help provide direction/focus for your team."),Object(o.b)("p",null,"The PM creates tickets on Trello and assigns them between the team members"),Object(o.b)("h2",{id:"learning-outcomes"},"Learning Outcomes"),Object(o.b)("p",null,"The important concepts for this workshop is learning how to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Work in a team"),Object(o.b)("li",{parentName:"ul"},"Plan"),Object(o.b)("li",{parentName:"ul"},"Consider user journey"),Object(o.b)("li",{parentName:"ul"},"Consider your data structures"),Object(o.b)("li",{parentName:"ul"},"Deliver a solution, no matter how minimal it may be"),Object(o.b)("li",{parentName:"ul"},"Present your experience: your challenges")),Object(o.b)("p",null,"Also see deliverables in the repository ",Object(o.b)("inlineCode",{parentName:"p"},"README.md"),"."))}p.isMDXComponent=!0},244:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,O=s["".concat(l,".").concat(m)]||s[m]||u[m]||o;return n?r.a.createElement(O,b(b({ref:t},c),{},{components:n})):r.a.createElement(O,b({ref:t},c))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var c=2;c<o;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);