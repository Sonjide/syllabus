(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),o=n(6),r=(n(0),n(244)),i={id:"challenges",title:"Khan Academy challenges with objects and arrays",sidebar_label:"Challenges"},l={id:"fundamentals/other-resources/challenges",title:"Khan Academy challenges with objects and arrays",description:"Challenge: Make it rain... objects!",source:"@site/docs\\fundamentals\\other-resources\\post-khan-academy-challenges.md",permalink:"/Syllabus-V2/docs/fundamentals/other-resources/challenges",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/fundamentals/other-resources/post-khan-academy-challenges.md",sidebar_label:"Challenges",sidebar:"Fundamentals",previous:{title:"Migrating from Processing.js to p5.js",permalink:"/Syllabus-V2/docs/fundamentals/after-the-course/processing-migrating"}},c=[{value:"Challenge: Make it rain... objects!",id:"challenge-make-it-rain-objects",children:[]},{value:"Challenge: Fishtank v2 - using objects",id:"challenge-fishtank-v2---using-objects",children:[{value:"Advanced challenge 1",id:"advanced-challenge-1",children:[]},{value:"Advanced challenge 2",id:"advanced-challenge-2",children:[]}]},{value:"Challenge: many snowmen, with objects!",id:"challenge-many-snowmen-with-objects",children:[]},{value:"Challenge: shooting stars, with objects",id:"challenge-shooting-stars-with-objects",children:[]},{value:"p5.js Challenge - font outline",id:"p5js-challenge---font-outline",children:[]}],b={rightToc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"challenge-make-it-rain-objects"},"Challenge: Make it rain... objects!"),Object(r.b)("p",null,"Make a spin-off of your ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.khanacademy.org/computing/computer-programming/programming/arrays/pp/project-make-it-rain"}),'"Make it rain" project'),", and change it to use 1 array of ",Object(r.b)("strong",{parentName:"p"},"objects")," instead of many arrays. So instead of ",Object(r.b)("inlineCode",{parentName:"p"},"xPositions"),", ",Object(r.b)("inlineCode",{parentName:"p"},"yPositions"),", ",Object(r.b)("inlineCode",{parentName:"p"},"speeds"),", etc arrays you'll simply have 1 ",Object(r.b)("inlineCode",{parentName:"p"},"raindrops")," array, and each raindrop will have:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An ",Object(r.b)("inlineCode",{parentName:"li"},"x")," property"),Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("inlineCode",{parentName:"li"},"y")," property"),Object(r.b)("li",{parentName:"ul"},"...")),Object(r.b)("p",null,"More ideas:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Try adding more properties to each object:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("inlineCode",{parentName:"li"},"speed")," property"),Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("inlineCode",{parentName:"li"},"size")," property to each object and randomise it at the start."),Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("inlineCode",{parentName:"li"},"color")," property to each object - you can make a random colour like this: ",Object(r.b)("inlineCode",{parentName:"li"},"color(random(255), random(255), random(255))")))),Object(r.b)("li",{parentName:"ul"},"Try using squares or rectangles instead of ellipses"),Object(r.b)("li",{parentName:"ul"},"Try using images instead of ellipses")),Object(r.b)("h2",{id:"challenge-fishtank-v2---using-objects"},"Challenge: Fishtank v2 - using objects"),Object(r.b)("p",null,"Go back to your ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/CodeYourFuture/intro-to-programming-module/tree/444e160bfd54fc9fe6a786b5b7643c30f0694c76/Fish%20tank%20project/README.md"}),"https://www.khanacademy.org/computing/computer-programming/programming/functions/pp/project-fish-tank"),", and make a spin-off."),Object(r.b)("p",null,"In the spin-off, change your code so that each fish is represented by an object. Fish objects might have these properties:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"x")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"y")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"speed")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"colour")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"size"))),Object(r.b)("p",null,"Add bubbles ","(","if you have not already",")",". Make these bubbles objects, too, with these properties:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"x")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"y")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"size")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"speed")," ","(","if you want some to move at different speeds",")")),Object(r.b)("p",null,"Add a sea-bed with pebbles which could be objects too. What properties do you think the pebble objects should have?"),Object(r.b)("p",null,"Add some ",Object(r.b)("em",{parentName:"p"},"seaweed"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Try to use the ",Object(r.b)("inlineCode",{parentName:"li"},"random()")," function for the x position, but with a fixed y position"),Object(r.b)("li",{parentName:"ul"},"Try to make the height random"),Object(r.b)("li",{parentName:"ul"},"Try a random color ",Object(r.b)("em",{parentName:"li"},"variation"))),Object(r.b)("h3",{id:"advanced-challenge-1"},"Advanced challenge 1"),Object(r.b)("p",null,"Make each bubble clickable - when you click it it changes in colour. To track which bubbles have been clicked, you should add a ",Object(r.b)("inlineCode",{parentName:"p"},"clicked")," property to each bubble object."),Object(r.b)("p",null,"Use the function ",Object(r.b)("inlineCode",{parentName:"p"},"dist(x1, x2, x2, y2)")," to find the distance between two points."),Object(r.b)("h3",{id:"advanced-challenge-2"},"Advanced challenge 2"),Object(r.b)("p",null,"Try to make the fish swim the other way."),Object(r.b)("h2",{id:"challenge-many-snowmen-with-objects"},"Challenge: many snowmen, with objects!"),Object(r.b)("p",null,"Go back to the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.khanacademy.org/computing/computer-programming/programming/drawing-basics/pc/challenge-simple-snowman"}),'"Simple snowman" challenge')," and make a spin-off."),Object(r.b)("p",null,"You don't need to animate this one, so you don't need a ",Object(r.b)("inlineCode",{parentName:"p"},"draw()")," function."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Change the code so that you draw 100 snowmen in random places"),Object(r.b)("li",{parentName:"ul"},"Use an object to keep track of the position of each snowman"),Object(r.b)("li",{parentName:"ul"},"Optional: try to have each snowman be a different size"),Object(r.b)("li",{parentName:"ul"},"Optional ","(","very advanced",")",": can you have each snowman choose from 3 different faces? One way to do this would be to have three functions: ",Object(r.b)("inlineCode",{parentName:"li"},"drawFace1(x, y, size)"),", ",Object(r.b)("inlineCode",{parentName:"li"},"drawFace2(x, y, size)"),", ",Object(r.b)("inlineCode",{parentName:"li"},"drawFace3(x, y, size)")," and somehow choose between them for each snowman/snow-woman"),Object(r.b)("li",{parentName:"ul"},"Optional: it would be nice to give the snow-people a colourful hat and scarf")),Object(r.b)("h2",{id:"challenge-shooting-stars-with-objects"},"Challenge: shooting stars, with objects"),Object(r.b)("p",null,"Go back to the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.khanacademy.org/computing/computer-programming/programming/animation-basics/pp/project-shooting-star"}),'"Shooting stars" project')," and make a spin-off."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Change your code so that shooting stars are represented by objects. Each star would have an ",Object(r.b)("inlineCode",{parentName:"li"},"x")," and ",Object(r.b)("inlineCode",{parentName:"li"},"y")," property, and a ",Object(r.b)("inlineCode",{parentName:"li"},"xSpeed")," and ",Object(r.b)("inlineCode",{parentName:"li"},"ySpeed")," property. ","(","To move the star increment ",Object(r.b)("inlineCode",{parentName:"li"},"x")," by ",Object(r.b)("inlineCode",{parentName:"li"},"xSpeed"),", and ",Object(r.b)("inlineCode",{parentName:"li"},"y")," by ",Object(r.b)("inlineCode",{parentName:"li"},"ySpeed"),")"),Object(r.b)("li",{parentName:"ul"},"If you didn't already, add some buildings for a skyline",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Each building should be an object with x, y, and height"),Object(r.b)("li",{parentName:"ul"},"You don't need to draw the windows if you haven't already done that")))),Object(r.b)("h2",{id:"p5js-challenge---font-outline"},"p5.js Challenge - font outline"),Object(r.b)("p",null,"Only attempt this challenge if you've seen and understand p5.js and OpenProcessing before."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Fork ","(","spin-off",")"," ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.openprocessing.org/sketch/812356"}),'this "Font as points" challenge project')),Object(r.b)("li",{parentName:"ul"},"Read the code comments for details"),Object(r.b)("li",{parentName:"ul"},"Essentially, you are provided with an array of points on the outline of some text, and you must draw a circle at each point.")))}s.isMDXComponent=!0},244:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||r;return n?o.a.createElement(m,l(l({ref:t},b),{},{components:n})):o.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var b=2;b<r;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);