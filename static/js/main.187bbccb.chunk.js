(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(31)},29:function(e,t,a){},30:function(e,t){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),l=a.n(r),s=a(7),o=a(6);var i={borderRadius:"60px",height:"100px",width:"100px",margin:"1em"},m=function(e){var t=e.user,a=t.login,n=t.avatar_url;return c.a.createElement("div",{className:"card my-3 ",style:{width:"18rem"}},c.a.createElement("img",{src:n,style:i,alt:"user",className:"card-img-top mx-auto img"}),c.a.createElement("div",{className:"card-body bg-light"},c.a.createElement("p",{className:"card-text"},a),c.a.createElement(o.b,{to:"/user/".concat(a),className:"btn btn-primary"},"Profile")))},u=Object(n.createContext)();var d,E,p=function(){var e=Object(n.useContext)(u);return c.a.createElement("div",{className:"row"},e.users.map(function(e){return c.a.createElement("div",{className:"col-4",key:e.id},c.a.createElement(m,{user:e}))}))},b=a(9),g=function(e,t){switch(t.type){case"GET_LOADING":return Object(b.a)({},e,{loading:!0});case"SEARCH_USERS":return Object(b.a)({},e,{users:t.payload,loading:!1});case"CLEAR_USERS":return Object(b.a)({},e,{users:[],loading:!1});case"GET_USER":return Object(b.a)({},e,{user:t.payload,loading:!1});case"GET_REPOS":return Object(b.a)({},e,{repos:t.payload,loading:!1});default:return e}};d="cea40ce2479db0bc895c",E="9ca9ab5e1030e94ab3ff7c63ded6cd2dcfc7cb7d";var h=function(e){Object(n.useEffect)(function(){o(),fetch("https://api.github.com/users?client_id = ".concat("cea40ce2479db0bc895c","&\nclient_secret=").concat("9ca9ab5e1030e94ab3ff7c63ded6cd2dcfc7cb7d")).then(function(e){return e.json()}).then(function(e){l({type:"SEARCH_USERS",payload:e})})},[]);var t=Object(n.useReducer)(g,{users:[],repos:[],user:{},loading:!1}),a=Object(s.a)(t,2),r=a[0],l=a[1],o=function(){return l({type:"GET_LOADING"})};return c.a.createElement(u.Provider,{value:{users:r.users,user:r.user,repos:r.repos,loading:r.loading,searchUsers:function(e){o(),fetch("https://api.github.com/search/users?q=".concat(e,"&client_id=").concat(d,"&\n    client_secret=").concat(E)).then(function(e){e.json().then(function(e){l({type:"SEARCH_USERS",payload:e.items})})}).catch(function(e){console.log(e)})},clearUsers:function(){return l({type:"CLEAR_USERS"})},getSingleUser:function(e){o(),fetch("https://api.github.com/users/".concat(e,"?client_id=").concat(d,"&\n  client_secret=").concat(E)).then(function(e){e.json().then(function(e){l({type:"GET_USER",payload:e})})}).catch(function(e){console.log(e)})},getUserRepos:function(e){o(),fetch("https://api.github.com/users/".concat(e,"/repos?per_page=5&sort=created:asc&client_id=").concat(d,"&\n  client_secret=").concat(E)).then(function(e){e.json().then(function(e){l({type:"GET_REPOS",payload:e})})}).catch(function(e){console.log(e)})}}},e.children)};a(29);var f=function(){return c.a.createElement("nav",{className:"navbar navbar-exapnds-lg bg-light mb-3"},c.a.createElement("a",{className:"navbar-brand text-dark",href:"#"},"Welcome ",c.a.createElement("i",{className:"fab fa-github"})),c.a.createElement("ul",{className:"nav justify-content-end"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.b,{className:"nav-link active",to:"/"},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.b,{className:"nav-link",to:"/about"},"About"))))},v={width:"100%"},N=function(e){var t=e.showAlert,a=Object(n.useContext)(u),r=Object(n.useState)(" "),l=Object(s.a)(r,2),o=l[0],i=l[1];return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""===o||" "===o?t("Please input something...","danger"):a.searchUsers(o)}},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",name:"text",className:"form-control",placeholder:"Search User...",value:o,onChange:function(e){return i(e.target.value)}}),c.a.createElement("input",{type:"submit",className:"btn btn-sm btn-dark d-inline-block",value:"Search"}))),a.users.length>0&&c.a.createElement("button",{style:v,className:"btn btn-light d-block mx-auto",onClick:a.clearUsers},"Clear"))};var y=function(e){var t=e.alert;return null!==t&&c.a.createElement("div",{className:"alert alert-".concat(t.type)},c.a.createElement("p",{className:"lead"},t.msg))},S=a(5),x=function(){return c.a.createElement(n.Fragment,null,c.a.createElement("h1",null,"This is the about page "),c.a.createElement("p",null,"Web application to search github users using the github API"))};function _(e){var t=e.repo,a=t.name.charAt(0).toUpperCase()+t.name.slice(1);return c.a.createElement(n.Fragment,null,c.a.createElement("li",{className:"list-group-item"},c.a.createElement("a",{href:t.html_url},t.description||a)))}var j=function(e){var t=e.repos;return c.a.createElement("ul",{className:"list-group"},t.map(function(e){return c.a.createElement(_,{repo:e,key:e.id})}))},w=function(e){var t=e.match,a=Object(n.useContext)(u),r=a.user,l=a.getSingleUser,s=a.getUserRepos,o=a.repos;Object(n.useEffect)(function(){l(t.params.login),s(t.params.login)},[]);var i=r.bio,m=r.html_url,d=r.avatar_url,E=r.followers,p=r.following,b=r.name,g=r.hireable,h=r.company,f=r.location,v=r.login;return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"row bg-light"},c.a.createElement("div",{className:"col-6 mt-3"},c.a.createElement("img",{src:d,alt:"user",className:"rounded mx-auto d-block",height:"200",width:"200"}),c.a.createElement("h3",{className:"text-center"},b),c.a.createElement("p",{className:"text-center"},c.a.createElement("strong",null,"Location:"),f),c.a.createElement("div",{className:"text-center mb-3"},c.a.createElement("a",{href:m,className:"btn btn-md btn-dark text-white"},"Visit Profile"))),c.a.createElement("div",{className:"col-6 mt-3"},c.a.createElement("ul",{style:{listStyle:"none",padding:"0px"}},c.a.createElement("li",null,c.a.createElement("strong",null,"Username: "),v),c.a.createElement("li",null,c.a.createElement("strong",null,"Company/School: "),h),c.a.createElement("li",null,c.a.createElement("strong",null,"Hireable: "),g?c.a.createElement("i",{className:"fas fa-check text-success"}):c.a.createElement("i",{className:"fas fa-times-circle text-danger"}))),c.a.createElement("div",null,i&&c.a.createElement(n.Fragment,null,c.a.createElement("h4",null,"Bio:"),c.a.createElement("p",null,i))),c.a.createElement("span",{className:"badge badge-pill badge-primary m-1"},"Followers:",E),c.a.createElement("span",{className:"badge badge-pill badge-secondary m-1"},"Following:",p))),c.a.createElement("div",{className:"row bg-light py-2"},c.a.createElement("h2",{style:{paddingLeft:"15px"}},"Repositories"),c.a.createElement("div",{className:"col-12"},c.a.createElement(j,{repos:o}))))},O=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],r=t[1],l=function(e,t){r({msg:e,type:t}),setTimeout(function(){return r(null)},5e3)};return c.a.createElement(h,null,c.a.createElement(o.a,{basename:"/"},c.a.createElement("div",{className:"App"},c.a.createElement(f,null),c.a.createElement("div",{className:"container"},c.a.createElement(y,{alert:a}),c.a.createElement(S.c,null,c.a.createElement(S.a,{path:"".concat("/githubAPI","/"),render:function(e){return c.a.createElement(n.Fragment,null,c.a.createElement(N,{showAlert:l}),c.a.createElement(p,null))}}),c.a.createElement(S.a,{path:"/about",component:x}),c.a.createElement(S.a,{path:"/user/:login",component:w}))))))};a(30);l.a.render(c.a.createElement(O,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.187bbccb.chunk.js.map