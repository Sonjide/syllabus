(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(244)),l={id:"learning-objectives",title:"Learning Objectives",sidebar_label:"Learning Objectives"},c={id:"react/week-2/learning-objectives",title:"Learning Objectives",description:"React Week 2",source:"@site/docs\\react\\week-2\\learning-objectives.md",permalink:"/Syllabus-V2/docs/react/week-2/learning-objectives",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/react/week-2/learning-objectives.md",sidebar_label:"Learning Objectives",sidebar:"React",previous:{title:"Mentor Notes",permalink:"/Syllabus-V2/docs/react/week-1/mentors"},next:{title:"React - Week 2",permalink:"/Syllabus-V2/docs/react/week-2/lesson"}},o=[{value:"React Week 2",id:"react-week-2",children:[{value:"Event Handlers",id:"event-handlers",children:[]},{value:"State",id:"state",children:[]},{value:"Data fetching",id:"data-fetching",children:[]}]}],b={rightToc:o};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"react-week-2"},"React Week 2"),Object(i.b)("h3",{id:"event-handlers"},"Event Handlers"),Object(i.b)("p",null,"React to user interaction via events."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Be able to pass functions to event handlers",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Log to the console when a button is clicked")))),Object(i.b)("h3",{id:"state"},"State"),Object(i.b)("p",null,"Create a simple counter component, demonstrating knowledge of React state."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Be able to use state variables",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Initialise with a value with ",Object(i.b)("inlineCode",{parentName:"li"},"useState(initialValue)")),Object(i.b)("li",{parentName:"ul"},"Destructure state variable into ",Object(i.b)("inlineCode",{parentName:"li"},"[stateValue, setStateValue]")),Object(i.b)("li",{parentName:"ul"},"Render state variables to the view"),Object(i.b)("li",{parentName:"ul"},"Update with a new value with ",Object(i.b)("inlineCode",{parentName:"li"},"setStateValue(newValue)")))),Object(i.b)("li",{parentName:"ul"},"Identify when to use props or state")),Object(i.b)("h3",{id:"data-fetching"},"Data fetching"),Object(i.b)("p",null,"Show some data from an API in a component."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Can explain why a loading state is necessary when fetching data as the result is not available on the initial render"),Object(i.b)("li",{parentName:"ul"},"Be able to trigger ",Object(i.b)("inlineCode",{parentName:"li"},"fetch()")," using the ",Object(i.b)("inlineCode",{parentName:"li"},"useEffect()")," callback",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Be able to an empty array (",Object(i.b)("inlineCode",{parentName:"li"},"[]"),") as the 2nd dependencies argument"),Object(i.b)("li",{parentName:"ul"},"Understand that this will be explained further in week 3"))),Object(i.b)("li",{parentName:"ul"},"Be able to store data from a successful API call in state",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"And be able to explain that this causes a re-render"))),Object(i.b)("li",{parentName:"ul"},"Be able to catch an unsuccessful API call, store the error in state and render an error message")))}u.isMDXComponent=!0},244:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,m=s["".concat(l,".").concat(d)]||s[d]||p[d]||i;return n?r.a.createElement(m,c(c({ref:t},b),{},{components:n})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var b=2;b<i;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);