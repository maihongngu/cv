(this.webpackJsonpcv=this.webpackJsonpcv||[]).push([[4],{46:function(e){e.exports=JSON.parse('{"basics":{"name":"Mai H\u1ed3ng Ng\u1ef1","label":"Software Engineer","picture":"images/clooneymai.JPG","cv":"/","x_title":"Hey There! Glad you\'re here","summary":"Currently I\u2019m working as an Junior Web developer and exploring VueJS and ReactJS. I\u2019m interested in service management and developing front-end and back-end applications.","location":{"country":"Vietnam","countryCode":"VIE","region":"Ho Chi Minh City"},"profiles":[{"socialmedia":"LinkedIn","urlSocialMedia":"https://www.linkedin.com/in/ng%E1%BB%B1-mai-h%E1%BB%93ng-09bb71156/","x_icon":"fab fa-2x fa-linkedin"},{"socialmedia":"Facebook","urlSocialMedia":"https://www.facebook.com/chlove3004","x_icon":"fab fa-2x fa-facebook"},{"socialmedia":"Instagram","urlSocialMedia":"https://www.instagram.com/_tesoroo/","x_icon":"fab fa-2x fa-instagram"}]},"interests":[{"name":"Travel","x_icon":"fa-globe-africa"},{"name":"Cat lover","x_icon":"fa-cat"},{"name":"Waffle","x_icon":"fa-utensils"},{"name":"Boulevardier","x_icon":"fa-cocktail"},{"name":"Corpse Reviver No.2","x_icon":"fa-cocktail"}],"skills":[{"name":"HTML5 / CSS3","level":90,"keywords":["Front End"]},{"name":"React / Redux / Saga","level":90,"keywords":["Front End"]},{"name":"Vue 3 / Composition API","level":90,"keywords":["Front End"]},{"name":"SCSS / jQuery / Responsive Web","level":85,"keywords":["Front End"]},{"name":"Typescript / Javascript / ES6","level":85,"keywords":["Front End"]},{"name":"SQL","level":80,"keywords":["Back End"]},{"name":"PHP / Laravel","level":85,"keywords":["Back End"]},{"name":"Git / TFS","level":75,"keywords":["Other Skills"]},{"name":"Linux","level":75,"keywords":["Other Skills"]}],"work":[{"company":"CNV Loyalty","position":"","website":"https://cnvloyalty.com/","startDate":"2020-12-10","summary":"","highlights":[],"img":"https://cnvloyalty.com/storage/logo-cnv-loyalty.png"},{"company":"IMT Solutions","position":"","website":"https://www.imt-soft.com/","startDate":"2019-09-24","endDate":"2020-02-04","summary":"Joined the PO Tool Project","highlights":[],"img":"https://www.imt-soft.com/Cms_Data/Sites/IMT_Website/Themes/IMT_Theme/img/logo.png"}],"languages":[{"language":"English","fluency":"Fluent speaker","ielts":"6.5"},{"language":"Vietnamese","fluency":"Native speaker"}],"projects":[{"title":"News App","Description":"This app helps you to know all the news about the all part of the World","repository":"https://github.com/ngumh/newswebapp_NET"},{"title":"Get Image by Tag, Username","Description":"This app helps you download all the image by tags on Instagram","repository":"https://github.com/ngumh/ImgInstagram"},{"title":"Book Store Web with PHP","Description":"This website will help people find and buy books","repository":"https://github.com/ngumh/bookstorephp"}]}')},47:function(e,a,t){"use strict";var c=t(3),l=t(48),s=t(49),m=t(54),r=t(51),n=t(50),i=t(53),o=t(0),_=t.n(o);var d=function(e){return _.a.createElement("a",{href:e.href,className:"navbar-item is-unselectable "+e.color},e.text)},f=t(46),E=t(52);function v(){var e=Object(c.a)(["background: transparent"]);return v=function(){return e},e}var N=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(m.a)(this,Object(r.a)(a).call(this,e))).state={showMenu:!1,setColor:!0},t.handleMenuClick=t.handleMenuClick.bind(Object(n.a)(t)),t}return Object(i.a)(a,e),Object(s.a)(a,[{key:"handleMenuClick",value:function(e){var a=this.state.showMenu;this.setState({showMenu:!a})}},{key:"render",value:function(){return _.a.createElement("nav",{className:"navbar is-transparent ".concat(Object(E.a)(v()))},_.a.createElement("div",{className:"container"},_.a.createElement("div",{className:"navbar-brand"},_.a.createElement("a",{href:"/cv",className:"navbar-item is-unselectable has-text-white"},f.basics.name),_.a.createElement("span",{className:"navbar-burger burger has-text-white",onClick:this.handleMenuClick},_.a.createElement("span",null),_.a.createElement("span",null),_.a.createElement("span",null))),_.a.createElement("div",{className:" navbar-menu nav-menu "+(this.state.showMenu?"is-active":null)},_.a.createElement("div",{className:"navbar-end ",onClick:this.handleMenuClick},_.a.createElement(d,{text:"About Me",href:"#aboutMe",color:this.state.showMenu?"has-text-black":"has-text-white"}),_.a.createElement(d,{text:"Skills",href:"#skills",color:this.state.showMenu?"has-text-black":"has-text-white"}),_.a.createElement(d,{text:"Experience",href:"#experience",color:this.state.showMenu?"has-text-black":"has-text-white"})))))}}]),a}(_.a.Component);a.a=N},55:function(e,a,t){},56:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var c=t(0),l=t.n(c);var s=function(e){var a="fas fa-1x "+e.faIcon;return l.a.createElement("div",{className:"control"},l.a.createElement("div",{className:"tags has-addons"},l.a.createElement("span",{className:"tag is-dark"},e.text),l.a.createElement("span",{className:"tag is-success"},l.a.createElement("i",{className:a}))))};function m(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var t=[],c=!0,l=!1,s=void 0;try{for(var m,r=e[Symbol.iterator]();!(c=(m=r.next()).done)&&(t.push(m.value),!a||t.length!==a);c=!0);}catch(n){l=!0,s=n}finally{try{c||null==r.return||r.return()}finally{if(l)throw s}}return t}}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var r=function(e){var a="fas fa-1x "+e.faIcon,t=m(l.a.useState({width:window.innerWidth}),2),c=t[0],s=t[1];return l.a.useEffect((function(){function e(){s({width:window.innerWidth})}return window.addEventListener("resize",e),function(a){window.removeEventListener("resize",e)}})),l.a.createElement("div",{className:"control"},l.a.createElement("a",{href:e.url,target:"blank",className:"is-hovered",title:e.text},l.a.createElement("div",{className:"tags has-addons"},c.width>417?l.a.createElement("span",{className:"tag is-dark"},e.text):"",l.a.createElement("span",{className:"tag"},l.a.createElement("i",{className:a})))))},n=t(46);var i=function(){return l.a.createElement("section",{className:"section",id:"aboutMe"},l.a.createElement("div",{className:"container has-text-centered"},l.a.createElement("p",{className:"subtitle is-4 has-text-white has-text-weight-bold"},n.basics.x_title),l.a.createElement("figure",{className:"image container is-128x128",style:{marginBottom:"10px"}},l.a.createElement("img",{src:n.basics.picture,alt:n.basics.name,className:"is-rounded"})),l.a.createElement("div",{className:"container interests"},l.a.createElement("div",{className:"field is-grouped is-grouped-multiline has-text-centered socialMedia"},n.basics.profiles.map((function(e,a){return l.a.createElement(r,{key:a,text:e.socialmedia,url:e.urlSocialMedia,faIcon:e.x_icon})})))),l.a.createElement("p",{className:"subtitle is-5 has-text-white has-text-weight-light summary-text"},n.basics.summary),l.a.createElement("div",{className:"container interests"},l.a.createElement("div",{className:"field is-grouped is-grouped-multiline has-text-centered"},n.interests.map((function(e,a){return l.a.createElement(s,{key:a,text:e.name,faIcon:e.x_icon})}))))))};var o=function(e){return l.a.createElement("div",null,l.a.createElement("span",{className:" is-5 has-text-white"},e.text),l.a.createElement("span",{className:"subtitle is-6 has-text-white skill-percentage"},e.percentage,"%"),l.a.createElement("progress",{className:"progress is-small is-success",value:e.percentage,max:"100"},e.percentage,"%"))};var _=function(e){var a=e.skills;return l.a.createElement("ul",{className:"skill-list"},function(e){var a=[],t=0;return Object.entries(e).forEach((function(e){var c=m(e,2),s=c[0],r=c[1];a.push(l.a.createElement("li",{key:t},l.a.createElement(o,{key:t,text:s,percentage:r}))),t++})),a}(a))};var d=function(){return l.a.createElement("section",{className:"section ",id:"skills"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"title has-text-white"},"Skills"),l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-6"},l.a.createElement("div",{className:"has-text-centered"},l.a.createElement("span",{className:"icon has-text-white"},l.a.createElement("i",{className:"fas fa-3x fa-code"})),l.a.createElement("h2",{className:"title is-5 has-text-white"},"Front End")),l.a.createElement(_,{skills:n.skills.filter((function(e){return e.keywords.includes("Front End")})).reduce((function(e,a){return e[a.name]=a.level,e}),{})})),l.a.createElement("div",{className:"column is-6"},l.a.createElement("div",{className:"has-text-centered"},l.a.createElement("span",{className:"icon has-text-white"},l.a.createElement("i",{className:"fas fa-3x fa-laptop-code"})),l.a.createElement("h2",{className:"title is-5 has-text-white"},"Back End")),l.a.createElement(_,{skills:n.skills.filter((function(e){return e.keywords.includes("Back End")})).reduce((function(e,a){return e[a.name]=a.level,e}),{})}))),l.a.createElement("hr",null),l.a.createElement("div",{className:"column is-12"},l.a.createElement("div",{className:"has-text-centered"},l.a.createElement("h2",{className:"title is-5 has-text-white"},"Orther Skills")),l.a.createElement(_,{skills:n.skills.filter((function(e){return e.keywords.includes("Other Skills")})).reduce((function(e,a){return e[a.name]=a.level,e}),{})}))))};var f=function(e){return l.a.createElement("div",{className:"timeline-item is-success"},l.a.createElement("div",{className:"timeline-marker is-image is-32x32"},l.a.createElement("img",{src:"",alt:""})),l.a.createElement("div",{className:"timeline-content"},l.a.createElement("p",{className:"heading"},e.date),l.a.createElement("p",{className:"heading"},e.position),l.a.createElement("h1",{className:"title is-4 has-text-white"},l.a.createElement("a",{href:e.website,className:"has-text-white"},e.company)),l.a.createElement("p",{style:{maxWidth:"25em"}},e.summary)))};var E=function(){return l.a.createElement("div",{className:"timeline is-centered"},l.a.createElement("header",{className:"timeline-header"},l.a.createElement("span",{className:"tag is-medium is-dark"},(new Date).getFullYear())),l.a.createElement("div",{className:"timeline-item"},l.a.createElement("div",{className:"timeline-marker is-success"}),l.a.createElement("div",{className:"timeline-content"})),n.work.map((function(e){return new Date(e.startDate).getFullYear()})).map((function(e,a){var t=[];return t.push(l.a.createElement("header",{key:a,className:"timeline-header"},l.a.createElement("span",{className:"tag is-success"},e))),t.push(n.work.filter((function(a){return new Date(a.startDate).getFullYear()===e})).map((function(e,a){return l.a.createElement(f,{key:a,date:new Date(e.startDate).toLocaleString("en-UK",{month:"long",year:"numeric"}),position:e.position,company:e.company,summary:e.summary,website:e.website})}))),t})))};var v=function(){return l.a.createElement("section",{className:"section ",id:"experience"},l.a.createElement("div",{className:"container has-text-white"},l.a.createElement("h1",{className:"title has-text-white"},"Experiences"),l.a.createElement(E,null)))};var N=function(e){return l.a.createElement("li",null,e.lang," : ",e.fluency," ",l.a.createElement("br",null),e.ielts?"IELTS : "+e.ielts:"",l.a.createElement("hr",null))};var b=function(){return l.a.createElement("section",{className:"section"},l.a.createElement("div",{className:"container has-text-white"},l.a.createElement("h1",{className:"title has-text-white"},"Foreign Language"),l.a.createElement("ul",null,n.languages.map((function(e,a){return l.a.createElement(N,{key:a,lang:e.language,fluency:e.fluency,ielts:e.ielts})})))))};var u=t(3);t(55);function h(){return l.a.createElement("div",{className:"house",style:{position:"relative"},id:"h"},l.a.createElement("div",{className:"h-lights"},l.a.createElement("div",{className:"h-light"}),l.a.createElement("div",{className:"h-light"}),l.a.createElement("div",{className:"h-light"}),l.a.createElement("div",{className:"h-light"}),l.a.createElement("div",{className:"h-light"}),l.a.createElement("div",{className:"h-light"})),l.a.createElement("div",{className:"h-shadow"}),l.a.createElement("div",{className:"alt"},l.a.createElement("div",{className:"alt__front face"}," "),l.a.createElement("div",{className:"alt__back face"}," "),l.a.createElement("div",{className:"alt__right face"}," "),l.a.createElement("div",{className:"alt__left face"}," "),l.a.createElement("div",{className:"alt__top face"},l.a.createElement("div",{className:"light"}),l.a.createElement("div",{className:"light"}),l.a.createElement("div",{className:"light"}),l.a.createElement("div",{className:"light"}),l.a.createElement("div",{className:"light"}),l.a.createElement("div",{className:"light"}),l.a.createElement("div",{className:"light"}),l.a.createElement("div",{className:"light"}),l.a.createElement("div",{className:"light"})),l.a.createElement("div",{className:"alt__bottom face"}," ")),l.a.createElement("div",{className:"alb"},l.a.createElement("div",{className:"alb__front face"}," "),l.a.createElement("div",{className:"alb__back face"}," "),l.a.createElement("div",{className:"alb__right face"}," "),l.a.createElement("div",{className:"alb__left face"}," "),l.a.createElement("div",{className:"alb__top face"}," "),l.a.createElement("div",{className:"alb__bottom face"}," ")),l.a.createElement("div",{className:"arb"},l.a.createElement("div",{className:"arb__front face"}," "),l.a.createElement("div",{className:"arb__back face"}," "),l.a.createElement("div",{className:"arb__right face"}," "),l.a.createElement("div",{className:"arb__left face"}," "),l.a.createElement("div",{className:"arb__top face"}," "),l.a.createElement("div",{className:"arb__bottom face"}," ")),l.a.createElement("div",{className:"blt"},l.a.createElement("div",{className:"blt__front face"}," "),l.a.createElement("div",{className:"blt__back face"}," "),l.a.createElement("div",{className:"blt__right face"}," "),l.a.createElement("div",{className:"blt__left face"}," "),l.a.createElement("div",{className:"blt__top face"}," "),l.a.createElement("div",{className:"blt__bottom face"}," ")),l.a.createElement("div",{className:"blt2"},l.a.createElement("div",{className:"blt2__front face"}," "),l.a.createElement("div",{className:"blt2__back face"}," "),l.a.createElement("div",{className:"blt2__right face"}," "),l.a.createElement("div",{className:"blt2__left face"}," "),l.a.createElement("div",{className:"blt2__top face"}," "),l.a.createElement("div",{className:"blt2__bottom face"}," ")),l.a.createElement("div",{className:"blb"},l.a.createElement("div",{className:"blb__front face"}," "),l.a.createElement("div",{className:"blb__back face"}," "),l.a.createElement("div",{className:"blb__right face"}," "),l.a.createElement("div",{className:"blb__left face"}," "),l.a.createElement("div",{className:"blb__top face"}," "),l.a.createElement("div",{className:"blb__bottom face"}," ")),l.a.createElement("div",{className:"blb2"},l.a.createElement("div",{className:"blb2__front face"}," "),l.a.createElement("div",{className:"blb2__back face"}," "),l.a.createElement("div",{className:"blb2__right face"}," "),l.a.createElement("div",{className:"blb2__left face"}," "),l.a.createElement("div",{className:"blb2__top face"}," "),l.a.createElement("div",{className:"blb2__bottom face"}," ")),l.a.createElement("div",{className:"puerta-c"},l.a.createElement("div",{className:"puerta"},l.a.createElement("div",{className:"puerta__front face"}," "),l.a.createElement("div",{className:"puerta__back face"}," "),l.a.createElement("div",{className:"puerta__right face"}," "),l.a.createElement("div",{className:"puerta__left face"}," "),l.a.createElement("div",{className:"puerta__top face"}," "),l.a.createElement("div",{className:"puerta__bottom face"}," ")),l.a.createElement("div",{className:"puerta-l"},l.a.createElement("div",{className:"puerta-l__front face"}," "),l.a.createElement("div",{className:"puerta-l__back face"}," "),l.a.createElement("div",{className:"puerta-l__right face"}," "),l.a.createElement("div",{className:"puerta-l__left face"}," "),l.a.createElement("div",{className:"puerta-l__top face"}," "),l.a.createElement("div",{className:"puerta-l__bottom face"}," ")),l.a.createElement("div",{className:"puerta-r"},l.a.createElement("div",{className:"puerta-r__front face"}," "),l.a.createElement("div",{className:"puerta-r__back face"}," "),l.a.createElement("div",{className:"puerta-r__right face"}," "),l.a.createElement("div",{className:"puerta-r__left face"}," "),l.a.createElement("div",{className:"puerta-r__top face"}," "),l.a.createElement("div",{className:"puerta-r__bottom face"}," ")),l.a.createElement("div",{className:"puerta-t"},l.a.createElement("div",{className:"puerta-t__front face"}," "),l.a.createElement("div",{className:"puerta-t__back face"}," "),l.a.createElement("div",{className:"puerta-t__right face"}," "),l.a.createElement("div",{className:"puerta-t__left face"}," "),l.a.createElement("div",{className:"puerta-t__top face"}," "),l.a.createElement("div",{className:"puerta-t__bottom face"}," "))),l.a.createElement("div",{className:"cuadro-l"},l.a.createElement("div",{className:"cuadro-l__front face"}," "),l.a.createElement("div",{className:"cuadro-l__back face"}," "),l.a.createElement("div",{className:"cuadro-l__right face"}," "),l.a.createElement("div",{className:"cuadro-l__left face"}," "),l.a.createElement("div",{className:"cuadro-l__top face"}," "),l.a.createElement("div",{className:"cuadro-l__bottom face"}," ")),l.a.createElement("div",{className:"cuadro-r"},l.a.createElement("div",{className:"cuadro-r__front face"}," "),l.a.createElement("div",{className:"cuadro-r__back face"}," "),l.a.createElement("div",{className:"cuadro-r__right face"}," "),l.a.createElement("div",{className:"cuadro-r__left face"}," "),l.a.createElement("div",{className:"cuadro-r__top face"}," "),l.a.createElement("div",{className:"cuadro-r__bottom face"}," ")),l.a.createElement("div",{className:"librero"},l.a.createElement("div",{className:"librero__front face"}," "),l.a.createElement("div",{className:"librero__back face"}," "),l.a.createElement("div",{className:"librero__right face"}," "),l.a.createElement("div",{className:"librero__left face"}," "),l.a.createElement("div",{className:"librero__top face"}," "),l.a.createElement("div",{className:"librero__bottom face"}," ")),l.a.createElement("div",{className:"libros"},l.a.createElement("div",{className:"libro"},l.a.createElement("div",{className:"libro__front face"}," "),l.a.createElement("div",{className:"libro__back face"}," "),l.a.createElement("div",{className:"libro__right face"}," "),l.a.createElement("div",{className:"libro__left face"}," "),l.a.createElement("div",{className:"libro__top face"}," "),l.a.createElement("div",{className:"libro__bottom face"}," ")),l.a.createElement("div",{className:"libro"},l.a.createElement("div",{className:"libro__front face"}," "),l.a.createElement("div",{className:"libro__back face"}," "),l.a.createElement("div",{className:"libro__right face"}," "),l.a.createElement("div",{className:"libro__left face"}," "),l.a.createElement("div",{className:"libro__top face"}," "),l.a.createElement("div",{className:"libro__bottom face"}," ")),l.a.createElement("div",{className:"libro"},l.a.createElement("div",{className:"libro__front face"}," "),l.a.createElement("div",{className:"libro__back face"}," "),l.a.createElement("div",{className:"libro__right face"}," "),l.a.createElement("div",{className:"libro__left face"}," "),l.a.createElement("div",{className:"libro__top face"}," "),l.a.createElement("div",{className:"libro__bottom face"}," ")),l.a.createElement("div",{className:"libro"},l.a.createElement("div",{className:"libro__front face"}," "),l.a.createElement("div",{className:"libro__back face"}," "),l.a.createElement("div",{className:"libro__right face"}," "),l.a.createElement("div",{className:"libro__left face"}," "),l.a.createElement("div",{className:"libro__top face"}," "),l.a.createElement("div",{className:"libro__bottom face"}," ")),l.a.createElement("div",{className:"libro"},l.a.createElement("div",{className:"libro__front face"}," "),l.a.createElement("div",{className:"libro__back face"}," "),l.a.createElement("div",{className:"libro__right face"}," "),l.a.createElement("div",{className:"libro__left face"}," "),l.a.createElement("div",{className:"libro__top face"}," "),l.a.createElement("div",{className:"libro__bottom face"}," ")),l.a.createElement("div",{className:"libro"},l.a.createElement("div",{className:"libro__front face"}," "),l.a.createElement("div",{className:"libro__back face"}," "),l.a.createElement("div",{className:"libro__right face"}," "),l.a.createElement("div",{className:"libro__left face"}," "),l.a.createElement("div",{className:"libro__top face"}," "),l.a.createElement("div",{className:"libro__bottom face"}," "))),l.a.createElement("div",{className:"fotos"},l.a.createElement("div",{className:"foto"},l.a.createElement("div",{className:"foto__front face"}," "),l.a.createElement("div",{className:"foto__back face"}," "),l.a.createElement("div",{className:"foto__right face"}," "),l.a.createElement("div",{className:"foto__left face"}," "),l.a.createElement("div",{className:"foto__top face"}," "),l.a.createElement("div",{className:"foto__bottom face"}," ")),l.a.createElement("div",{className:"foto"},l.a.createElement("div",{className:"foto__front face"}," "),l.a.createElement("div",{className:"foto__back face"}," "),l.a.createElement("div",{className:"foto__right face"}," "),l.a.createElement("div",{className:"foto__left face"}," "),l.a.createElement("div",{className:"foto__top face"}," "),l.a.createElement("div",{className:"foto__bottom face"}," "))),l.a.createElement("div",{className:"cajas"},l.a.createElement("div",{className:"caja"},l.a.createElement("div",{className:"caja__front face"}," "),l.a.createElement("div",{className:"caja__back face"}," "),l.a.createElement("div",{className:"caja__right face"}," "),l.a.createElement("div",{className:"caja__left face"}," "),l.a.createElement("div",{className:"caja__top face"}," "),l.a.createElement("div",{className:"caja__bottom face"}," ")),l.a.createElement("div",{className:"caja"},l.a.createElement("div",{className:"caja__front face"}," "),l.a.createElement("div",{className:"caja__back face"}," "),l.a.createElement("div",{className:"caja__right face"}," "),l.a.createElement("div",{className:"caja__left face"}," "),l.a.createElement("div",{className:"caja__top face"}," "),l.a.createElement("div",{className:"caja__bottom face"}," ")),l.a.createElement("div",{className:"caja"},l.a.createElement("div",{className:"caja__front face"}," "),l.a.createElement("div",{className:"caja__back face"}," "),l.a.createElement("div",{className:"caja__right face"}," "),l.a.createElement("div",{className:"caja__left face"}," "),l.a.createElement("div",{className:"caja__top face"}," "),l.a.createElement("div",{className:"caja__bottom face"}," "))),l.a.createElement("div",{className:"tv"},l.a.createElement("div",{className:"tv__front face"}," "),l.a.createElement("div",{className:"tv__back face"}," "),l.a.createElement("div",{className:"tv__right face"}," "),l.a.createElement("div",{className:"tv__left face"}," "),l.a.createElement("div",{className:"tv__top face"}," "),l.a.createElement("div",{className:"tv__bottom face"}," ")),l.a.createElement("div",{className:"repisa-t"},l.a.createElement("div",{className:"repisa-t__front face"}," "),l.a.createElement("div",{className:"repisa-t__back face"}," "),l.a.createElement("div",{className:"repisa-t__right face"}," "),l.a.createElement("div",{className:"repisa-t__left face"}," "),l.a.createElement("div",{className:"repisa-t__top face"}," "),l.a.createElement("div",{className:"repisa-t__bottom face"}," ")),l.a.createElement("div",{className:"repisa-b"},l.a.createElement("div",{className:"repisa-b__front face"}," "),l.a.createElement("div",{className:"repisa-b__back face"}," "),l.a.createElement("div",{className:"repisa-b__right face"}," "),l.a.createElement("div",{className:"repisa-b__left face"}," "),l.a.createElement("div",{className:"repisa-b__top face"}," "),l.a.createElement("div",{className:"repisa-b__bottom face"}," ")),l.a.createElement("div",{className:"bocina-l"},l.a.createElement("div",{className:"bocina-l__front face"}," "),l.a.createElement("div",{className:"bocina-l__back face"}," "),l.a.createElement("div",{className:"bocina-l__right face"}," "),l.a.createElement("div",{className:"bocina-l__left face"}," "),l.a.createElement("div",{className:"bocina-l__top face"}," "),l.a.createElement("div",{className:"bocina-l__bottom face"}," ")),l.a.createElement("div",{className:"bocina-r"},l.a.createElement("div",{className:"bocina-r__front face"}," "),l.a.createElement("div",{className:"bocina-r__back face"}," "),l.a.createElement("div",{className:"bocina-r__right face"}," "),l.a.createElement("div",{className:"bocina-r__left face"}," "),l.a.createElement("div",{className:"bocina-r__top face"}," "),l.a.createElement("div",{className:"bocina-r__bottom face"}," ")),l.a.createElement("div",{className:"muro"},l.a.createElement("div",{className:"muro__front face"}," "),l.a.createElement("div",{className:"muro__back face"}," "),l.a.createElement("div",{className:"muro__right face"}," "),l.a.createElement("div",{className:"muro__left face"}," "),l.a.createElement("div",{className:"muro__top face"}," "),l.a.createElement("div",{className:"muro__bottom face"}," ")),l.a.createElement("div",{className:"sillon-c"},l.a.createElement("div",{className:"sillon-b"},l.a.createElement("div",{className:"sillon-b__front face"}," "),l.a.createElement("div",{className:"sillon-b__back face"}," "),l.a.createElement("div",{className:"sillon-b__right face"}," "),l.a.createElement("div",{className:"sillon-b__left face"}," "),l.a.createElement("div",{className:"sillon-b__top face"}," "),l.a.createElement("div",{className:"sillon-b__bottom face"}," ")),l.a.createElement("div",{className:"sillon-t"},l.a.createElement("div",{className:"sillon-t__front face"}," "),l.a.createElement("div",{className:"sillon-t__back face"}," "),l.a.createElement("div",{className:"sillon-t__right face"}," "),l.a.createElement("div",{className:"sillon-t__left face"}," "),l.a.createElement("div",{className:"sillon-t__top face"}," "),l.a.createElement("div",{className:"sillon-t__bottom face"}," ")),l.a.createElement("div",{className:"sillon-l"},l.a.createElement("div",{className:"sillon-l__front face"}," "),l.a.createElement("div",{className:"sillon-l__back face"}," "),l.a.createElement("div",{className:"sillon-l__right face"}," "),l.a.createElement("div",{className:"sillon-l__left face"}," "),l.a.createElement("div",{className:"sillon-l__top face"}," "),l.a.createElement("div",{className:"sillon-l__bottom face"}," ")),l.a.createElement("div",{className:"sillon-r"},l.a.createElement("div",{className:"sillon-r__front face"}," "),l.a.createElement("div",{className:"sillon-r__back face"}," "),l.a.createElement("div",{className:"sillon-r__right face"}," "),l.a.createElement("div",{className:"sillon-r__left face"}," "),l.a.createElement("div",{className:"sillon-r__top face"}," "),l.a.createElement("div",{className:"sillon-r__bottom face"}," "))),l.a.createElement("div",{className:"mesa-c"},l.a.createElement("div",{className:"mesa"},l.a.createElement("div",{className:"mesa__front face"}," "),l.a.createElement("div",{className:"mesa__back face"}," "),l.a.createElement("div",{className:"mesa__right face"}," "),l.a.createElement("div",{className:"mesa__left face"}," "),l.a.createElement("div",{className:"mesa__top face"}," "),l.a.createElement("div",{className:"mesa__bottom face"}," ")),l.a.createElement("div",{className:"mesa-p"},l.a.createElement("div",{className:"mesa-p__front face"}," "),l.a.createElement("div",{className:"mesa-p__back face"}," "),l.a.createElement("div",{className:"mesa-p__right face"}," "),l.a.createElement("div",{className:"mesa-p__left face"}," "),l.a.createElement("div",{className:"mesa-p__top face"}," "),l.a.createElement("div",{className:"mesa-p__bottom face"}," ")),l.a.createElement("div",{className:"mesa-p"},l.a.createElement("div",{className:"mesa-p__front face"}," "),l.a.createElement("div",{className:"mesa-p__back face"}," "),l.a.createElement("div",{className:"mesa-p__right face"}," "),l.a.createElement("div",{className:"mesa-p__left face"}," "),l.a.createElement("div",{className:"mesa-p__top face"}," "),l.a.createElement("div",{className:"mesa-p__bottom face"}," ")),l.a.createElement("div",{className:"mesa-p"},l.a.createElement("div",{className:"mesa-p__front face"}," "),l.a.createElement("div",{className:"mesa-p__back face"}," "),l.a.createElement("div",{className:"mesa-p__right face"}," "),l.a.createElement("div",{className:"mesa-p__left face"}," "),l.a.createElement("div",{className:"mesa-p__top face"}," "),l.a.createElement("div",{className:"mesa-p__bottom face"}," ")),l.a.createElement("div",{className:"mesa-p"},l.a.createElement("div",{className:"mesa-p__front face"}," "),l.a.createElement("div",{className:"mesa-p__back face"}," "),l.a.createElement("div",{className:"mesa-p__right face"}," "),l.a.createElement("div",{className:"mesa-p__left face"}," "),l.a.createElement("div",{className:"mesa-p__top face"}," "),l.a.createElement("div",{className:"mesa-p__bottom face"}," ")),l.a.createElement("div",{className:"mesa-shadow"})),l.a.createElement("div",{className:"tablet"},l.a.createElement("div",{className:"tablet__front face"}," "),l.a.createElement("div",{className:"tablet__back face"}," "),l.a.createElement("div",{className:"tablet__right face"}," "),l.a.createElement("div",{className:"tablet__left face"}," "),l.a.createElement("div",{className:"tablet__top face"}," "),l.a.createElement("div",{className:"tablet__bottom face"})))}var p=t(52),g=t(47);function k(){var e=Object(u.a)(["\n        margin-top: 5rem;\n        margin-bottom: 5rem;\n      "]);return k=function(){return e},e}var w=function(){return l.a.createElement("section",{className:Object(p.a)(k()),id:"box-decoration"},l.a.createElement("div",{className:"container is-flex ",style:{justifyContent:"space-around"}},l.a.createElement("div",null,l.a.createElement("div",{className:"hero-body"},l.a.createElement("div",{className:"container"},l.a.createElement("p",{className:"subtitle is-5 has-text-white"},"I'm a"),l.a.createElement("h1",{className:"title has-text-white"},n.basics.label),l.a.createElement("h2",{className:"subtitle has-text-white"},n.basics.location.region,","," ",n.basics.location.country),l.a.createElement("a",{href:n.basics.cv},l.a.createElement("button",{className:"btn btn-5 btn-5a icon-cart"},l.a.createElement("span",null,"Download")))))),l.a.createElement(h,null)))},x=t(48),y=t(49),j=t(54),S=t(51),M=t(53);t(56),l.a.Component;a.default=function(){return l.a.createElement("main",null,l.a.createElement(g.a,null),l.a.createElement(w,null),l.a.createElement(i,null),l.a.createElement(d,null),l.a.createElement(b,null),l.a.createElement(v,null))}}}]);
//# sourceMappingURL=4.5f073984.chunk.js.map