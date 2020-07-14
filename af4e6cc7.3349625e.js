(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{195:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(2),o=a(6),r=(a(0),a(244)),c={id:"lesson",title:"HTML/CSS - 1",sidebar_label:"Lesson"},s={id:"html-css/week-1/lesson",title:"HTML/CSS - 1",description:"Contents",source:"@site/docs\\html-css\\week-1\\lesson.md",permalink:"/Syllabus-V2/docs/html-css/week-1/lesson",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/html-css/week-1/lesson.md",sidebar_label:"Lesson",sidebar:"HTMLCSS",previous:{title:"Learning Objectives",permalink:"/Syllabus-V2/docs/html-css/week-1/learning-objectives"},next:{title:"Homework",permalink:"/Syllabus-V2/docs/html-css/week-1/homework"}},l=[{value:"Contents",id:"contents",children:[]},{value:"Learning Objectives",id:"learning-objectives",children:[]},{value:"What makes a web page?",id:"what-makes-a-web-page",children:[]},{value:"HTML Syntax",id:"html-syntax",children:[]},{value:"Example HTML/CSS Project",id:"example-htmlcss-project",children:[]},{value:"Semantic HTML",id:"semantic-html",children:[]},{value:"CSS Selectors",id:"css-selectors",children:[]},{value:"Pseudo Classes",id:"pseudo-classes",children:[]},{value:"Box Model",id:"box-model",children:[]},{value:"Git Conflicts",id:"git-conflicts",children:[]}],i={rightToc:l};function b(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},i,c,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"contents"},"Contents"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#html-syntax"}),"Semantic HTML tags")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#css-selectors"}),"CSS selectors, CSS cascade, Pseudo-classes such as ",Object(r.b)("inlineCode",{parentName:"a"},":hover"),"/",Object(r.b)("inlineCode",{parentName:"a"},":focus"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#box-model"}),"Box model: ",Object(r.b)("inlineCode",{parentName:"a"},"margin"),"/",Object(r.b)("inlineCode",{parentName:"a"},"padding"),"/",Object(r.b)("inlineCode",{parentName:"a"},"border")," etc..."))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(r.b)("p",null,"Learning objectives for this lesson can be found ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/Syllabus-V2/docs/html-css/week-1/learning-objectives"}),"here")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"what-makes-a-web-page"},"What makes a web page?"),Object(r.b)("img",{src:a(291).default}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Separation of Concerns:")," In computer science, separation of concerns (SoC) is a design principle for separating a computer program into distinct sections, such that each section addresses a separate concern. (Wikipedia)"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Principles")," - During the course, we will highlight principles that apply to the specific topic but also to Computer Science and Programming in general. It is important to understand these principles, terms and apply them to your thinking in general.")),Object(r.b)("h2",{id:"html-syntax"},"HTML Syntax"),Object(r.b)("p",null,"You're already familiar with HTML code from your application process. If you want to refresh your memory, read this ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://marksheet.io/html-syntax.html"}),"quick guide to the HTML syntax"),"."),Object(r.b)("p",null,"All together, let's review the basic syntax in the following example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<article>\n  <h1>Learning HTML</h1>\n  <p>Get to know the HTML basics.</p>\n  <a href="http://html5rocks.com">Read Article</a>\n</article>\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Exercise")," Which parts are the ",Object(r.b)("strong",{parentName:"p"},"Tags")," and which parts are the ",Object(r.b)("strong",{parentName:"p"},"Attributes"),".")),Object(r.b)("p",null,'HTML tags are arranged in a hierarchy. This is sometimes called "nesting" tags or creating an HTML "tree". Between the opening ',Object(r.b)("inlineCode",{parentName:"p"},"<article>")," tag and the closing ",Object(r.b)("inlineCode",{parentName:"p"},"</article>"),' tag there are three other tags. We call these "child" tags, because they have a parent-child relationship.'),Object(r.b)("img",{src:a(292).default}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Exercise")," As a group, let's try to name all of the parent and child tags in the following example.")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<article>\n  <h1>Learning HTML</h1>\n  <p>\n    <span class="author">Author:</span>\n    <a href="http://codeyourfuture.io">Code Your Future</a>\n  </p>\n  <p>Get to know the HTML basics.</p>\n  <a href="http://html5rocks.com">Read Article</a>\n</article>\n')),Object(r.b)("h2",{id:"example-htmlcss-project"},"Example HTML/CSS Project"),Object(r.b)("p",null,"In today's class, we will begin adapting styles on this example website. We'll review some of the HTML/CSS basics you already encountered during your application process and learn some new techniques. By the end of the third lesson, we will have worked together to improve the example site on the left so that it looks like the screenshot on the right."),Object(r.b)("a",{href:"../assets/screenshot-start.png",target:"blank"},Object(r.b)("img",{src:a(293).default})),Object(r.b)("a",{href:"../assets/screenshot-complete.png",target:"blank"},Object(r.b)("img",{src:a(294).default})),Object(r.b)("p",null,"The example website you'll begin working with is available on this Code Your Future GitHub repository -\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/CodeYourFuture/bikes-for-refugees"}),"Bikes for Refugees"),". Fork the repository to your personal account and use the following terminal commands to download the files to your projects folder."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"cd ~")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"cd <your-project-directory>")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"git clone git@github.com:<your_username>/bikes-for-refugees.git"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Exercise"),": Spend a few minutes exploring the ",Object(r.b)("inlineCode",{parentName:"p"},".html")," and ",Object(r.b)("inlineCode",{parentName:"p"},".css")," files for this page. Why don't we put everything in one file?")),Object(r.b)("h2",{id:"semantic-html"},"Semantic HTML"),Object(r.b)("p",null,"When writing HTML code, you can use different tags to describe the content. Is it a navigation menu, a paragraph of text, or an article? By using the correct tag, you help search engines like Google or screen readers for the visually impaired."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Semantic HTML is the use of HTML markup to reinforce the semantics, or ",Object(r.b)("strong",{parentName:"p"},"meaning"),", of the information in webpages and web applications rather than merely to define its presentation or look. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Semantic_HTML"}),"Wikipedia"))),Object(r.b)("p",null,"We'll cover the following semantic tags:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<header>")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<footer>")),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},'role="main"')," attribute"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<nav>")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<article>")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'<aside role="complementary">'))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Exercise (pair programming):"),' Work in pairs to determine where to place these new Tags and Attributes in the index.html file. Who benefits when we write "semantic" HTML?')),Object(r.b)("h2",{id:"css-selectors"},"CSS Selectors"),Object(r.b)("p",null,"During your application process, you became familiar with CSS selectors. We'll review the basic selectors and then practice combining these to modify our button styles."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If you want to review the selectors, read the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://learn.shayhowe.com/advanced-html-css/complex-selectors/"}),"Common Selectors section")," of this page.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Exercise (pair programming):")," Work in pairs to make the blue buttons on the page red (",Object(r.b)("inlineCode",{parentName:"p"},"#ce5f31"),'). The white button, which says "Volunteer", should remain white but the text should change to red.')),Object(r.b)("h2",{id:"pseudo-classes"},"Pseudo Classes"),Object(r.b)("p",null,"You can assign CSS rules to a class like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),".btn {\n  background: #ce5f31;\n}\n")),Object(r.b)("p",null,'There are also things called "pseudo" classes. In this section, we\'ll introduce you to the common pseudo classes for assigning styles to interactions, such as moving your mouse over a link.'),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},'"pseudo" is a fancy word for "fake". We call them "pseudo" classes because they\'re not really there in the HTML, but the browser knows what to do with them.')),Object(r.b)("p",null,"Here's an example of a pseudo class which changes the color of a link when the mouse moves over it."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),".btn:hover {\n  background: #ef7f52;\n}\n")),Object(r.b)("p",null,"Not everyone uses a mouse. Some users will prefer a keyboard, where they can hit ",Object(r.b)("inlineCode",{parentName:"p"},"tab")," to move between links on a page. So that they can see where they are, you should add effects to the ",Object(r.b)("inlineCode",{parentName:"p"},":focus")," pseudo class too."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),".btn:hover,\n.btn:focus {\n  background: #ef7f52;\n}\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Exercise:"),' Work in pairs and use the pseudo classes to make the background color of the red buttons change when in a "hover" or "focus" state. See if you can make the white "Volunteer" button change to a different background without effecting the red buttons.')),Object(r.b)("h2",{id:"box-model"},"Box Model"),Object(r.b)("p",null,"In CSS, everything is a box. An image is a box. A link is a box. The area around this box can be modified with properites that we call margins, borders and padding. Here's a diagram showing what the box looks like."),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://mdn.mozillademos.org/files/13647/box-model-standard-small.png",alt:"Box Model. Source: MDN"}))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Exercise:")," Work in pairs and use the ",Object(r.b)("inlineCode",{parentName:"p"},"margin")," and ",Object(r.b)("inlineCode",{parentName:"p"},"padding")," rules to spread your navigation links out a bit wider. There should be a small gap between them and enough padding so that the border is not too tight on the text.")),Object(r.b)("p",null,"You may have noticed that the border you added to the navigation links causes the links to jump around when you move your mouse over them. That's because the border is adding to the width of the box model, pushing the others to the side."),Object(r.b)("p",null,"You can also set a transparent border, so that it takes up the space without showing a visible border."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),".navlink {\n  border: 1px solid transparent;\n}\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Exercise:")," Use a transparent border so that the width of each navigation menu item stays the same even when it is hovered or focused.")),Object(r.b)("h2",{id:"git-conflicts"},"Git Conflicts"),Object(r.b)("p",null,"As a professional, you'll usually need to work alongside other coders to build an app or website. We use version control to coordinate changes and manage any conflicts that arise. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://git-scm.com/"}),"Git")," is a version control system which helps us merge code that we've been working on separately into one common codebase."),Object(r.b)("p",null,"To manage conflicts, we will need a common code base in which all changes are coordinated. When working on our own, we'll make our changes in ",Object(r.b)("inlineCode",{parentName:"p"},"branches")," to keep the code separate. Then we'll learn how to refresh your individual ",Object(r.b)("inlineCode",{parentName:"p"},"branch")," with the common code base, and prepare your changes to be merged."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},'Exercise: Get together in pairs and select a "leader". The leader should fork ',Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/CodeYourFuture/first-git-conflict"}),"this repository")," to their GitHub account. The other person should then fork the leader's repository. Both students should then clone their own personal forks locally.")),Object(r.b)("p",null,"Now that you have the project set up on your computer, you need a place to safely make changes without effecting the common code base. To do this, we'll navigate to our project in the Terminal and create a new branch:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd <your-project-directory>\ngit checkout -b my-first-branch\n")),Object(r.b)("p",null,"When you commit changes on this branch, your changes will be saved separately from the common code base. This way both team members can make changes at the same time."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Exercise: Add your name and a sentence about yourself to the ",Object(r.b)("inlineCode",{parentName:"p"},"index.html")," file. Then ",Object(r.b)("inlineCode",{parentName:"p"},"git add")," and ",Object(r.b)("inlineCode",{parentName:"p"},"git commit")," to commit to your personal branch.")),Object(r.b)("p",null,"Now you have two branches: ",Object(r.b)("inlineCode",{parentName:"p"},"master")," and ",Object(r.b)("inlineCode",{parentName:"p"},"my-first-branch"),". These branches have ",Object(r.b)("em",{parentName:"p"},"diverged"),", which means you have changes in one that don't appear in the other. You can check this by running ",Object(r.b)("inlineCode",{parentName:"p"},"git checkout master"),", then looking at your ",Object(r.b)("inlineCode",{parentName:"p"},"index.html")," file."),Object(r.b)("p",null,"When you're done, run ",Object(r.b)("inlineCode",{parentName:"p"},"git checkout my-first-branch"),' to go back to the branch with your changes. Git saves your changes in both branches and lets you switch between them. That\'s why we call it "version control". It saves different versions so you can switch between them.'),Object(r.b)("p",null,"Right now, your new branch only exists on your computer. Let's push it up to GitHub so you can see it in your profile."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git checkout my-first-branch\ngit push -u origin my-first-branch\n")),Object(r.b)("p",null,'Now both students in each pair, the "leader" and the other student, should have branches with changes. Now let\'s try to merge these changes together into the "leader\'s" master branch.'),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},'Exercise: Browse to the "leader\'s" GitHub repository and open a new Pull Request. The Pull Request should ask to merge your ',Object(r.b)("inlineCode",{parentName:"p"},"my-first-branch"),' branch into the "leader\'s" ',Object(r.b)("inlineCode",{parentName:"p"},"master")," branch. Ask a mentor for help if you have trouble figuring out how to issue a Pull Request. When both students have issued a Pull Request to the correct place, merge ",Object(r.b)("em",{parentName:"p"},"one")," of them but not the other.")),Object(r.b)("p",null,"Congrats, you've merged one student's changes with the common code base in the ",Object(r.b)("inlineCode",{parentName:"p"},"master")," branch. If you check the other Pull Request, you'll see you have a problem. It can't be merged automatically because there's a conflict. Why?"),Object(r.b)("p",null,"Conflicts emerge whenever the same file has been edited, and git can't determine what changes should be kept and what changes should be discarded. A human -- that's you -- needs to step in and sort it out. To help us, git writes into our code so we can see where it is confused. Here's an example of a merge conflict in our code:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-diff"}),"<<<<<<<  HEAD\n+   <h2>Mozafar</h2>\n+   <p>I am a mentor at CodeYourFuture.</p>\n=======\n-   <h2>Daniel</h2>\n-   <p>I like to ride bikes</p>\n>>>>>>> my-first-branch\n")),Object(r.b)("p",null,"To resolve a conflict, we decide which lines to keep and which lines to remove. When we're done, we remove the extra lines that git added (",Object(r.b)("inlineCode",{parentName:"p"},"<<<<< HEAD"),", ",Object(r.b)("inlineCode",{parentName:"p"},"========")," and ",Object(r.b)("inlineCode",{parentName:"p"},">>>>>>>"),")."),Object(r.b)("p",null,"Let's see how we can resolve this conflict with your branches. First we need to fetch the latest changes from the leader's ",Object(r.b)("inlineCode",{parentName:"p"},"master")," branch. If you're the ",Object(r.b)("strong",{parentName:"p"},"leader"),", just do:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git checkout master\ngit pull\n")),Object(r.b)("p",null,"If you're the ",Object(r.b)("strong",{parentName:"p"},"other student"),", you need to set up the remote and pull from that master:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git checkout master\ngit remote add upstream <your-leaders-git-repository-url>\ngit pull upstream master\n")),Object(r.b)("p",null,"Now everyone's ",Object(r.b)("inlineCode",{parentName:"p"},"master")," branch should include the Pull Request that was merged. Whichever student still needs to get their Pull Request merged can bring those changes into their branch like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git checkout my-first-branch\ngit merge master\n")),Object(r.b)("p",null,"You probably received a ",Object(r.b)("strong",{parentName:"p"},"merge conflict"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Exercise: Follow the steps we discussed before about how to resolve a merge conflict by editing the file. Make sure both students changes are included in the final version. When you're done, use ",Object(r.b)("inlineCode",{parentName:"p"},"git add"),", ",Object(r.b)("inlineCode",{parentName:"p"},"git commit")," and ",Object(r.b)("inlineCode",{parentName:"p"},"git push")," to share your changes with GitHub. If everything has gone correctly, you can now merge the Pull Request.")),Object(r.b)("p",null,"Now everyone can sync their changes. If you're the ",Object(r.b)("strong",{parentName:"p"},"leader"),", just do:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git checkout master\ngit pull\n")),Object(r.b)("p",null,"If you're the ",Object(r.b)("strong",{parentName:"p"},"other student"),", do this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git checkout master\ngit pull upstream master\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Exercise: As a group, discuss why the ",Object(r.b)("inlineCode",{parentName:"p"},"git pull")," command is different for the ",Object(r.b)("strong",{parentName:"p"},"leader")," and the ",Object(r.b)("strong",{parentName:"p"},"other student"),".")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Exercise: Try to do the pull requests again, but this time switch the pull requests so that the other student must manage the merge conflict.")),Object(r.b)("p",null,"If you're feeling confused, don't worry. Version control is one of the most difficult things you'll learn and we'll be going over it again and again and again."),Object(r.b)("h1",{id:"resources"},"Resources"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en/docs/Web/Guide/HTML/HTML5"}),"HTML5 - semantic elements")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"}),"CSS Selectors - MDN")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade"}),"The Cascade - MDN")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model"}),"Box Model - MDN")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://css-tricks.com/international-box-sizing-awareness-day/"}),"Box Model, box-sizing: border-box - CSS Tricks")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en/docs/Web/CSS/Specificity"}),"CSS specificity - MDN")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes"}),"Pseudo classes - MDN"))),Object(r.b)("p",null,'{% include "./homework.md" %}'))}b.isMDXComponent=!0},244:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=o.a.createContext({}),b=function(e){var t=o.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=b(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,d=p["".concat(c,".").concat(u)]||p[u]||h[u]||r;return a?o.a.createElement(d,s(s({ref:t},i),{},{components:a})):o.a.createElement(d,s({ref:t},i))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var i=2;i<r;i++)c[i]=a[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},291:function(e,t,a){"use strict";a.r(t),t.default=a.p+"5c7ddb38b3644454100d4e2694059608.png"},292:function(e,t,a){"use strict";a.r(t),t.default=a.p+"36e13d8f97cba7546adc8e372e79a4ee.png"},293:function(e,t,a){"use strict";a.r(t),t.default=a.p+"a211e5d6e105145aeef98824782c9343.png"},294:function(e,t,a){"use strict";a.r(t),t.default=a.p+"bb8af09e693084af1a6b65977cadbb5e.png"}}]);