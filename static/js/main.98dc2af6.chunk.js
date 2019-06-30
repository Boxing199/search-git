(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,r){e.exports=r(46)},43:function(e,t,r){},44:function(e,t,r){},45:function(e,t,r){},46:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(21),s=r.n(c),l=r(2),o=r(3),u=r(18),i=r(4),m=r.n(i),p=r(17),f=function(e){return{type:"GET_CURRENT_USER",currentUser:e}},g="https://api.github.com/",h=function(e){return function(){var t=Object(p.a)(m.a.mark(function t(r){var n,a,c;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="".concat(g,"users/").concat(e),t.next=4,fetch(n);case 4:return a=t.sent,t.next=7,a.json();case 7:c=t.sent,r({type:"ADD_USER_INFO",currentUserInfo:c}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("ERROR!");case 14:case"end":return t.stop()}},t,null,[[0,11]])}));return function(e){return t.apply(this,arguments)}}()},E=r(5),O=r(6),b=r(8),v=r(7),N=r(9),w=function(e){function t(){var e,r;Object(E.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(r=Object(b.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(a)))).state={orgsname:""},r}return Object(N.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"search-inner"},a.a.createElement("h1",{className:"main-title"},"Github organisations search"),a.a.createElement("div",{className:"search-input-wrap"},a.a.createElement("input",{className:"search-input",type:"text",value:this.state.orgsname,onChange:function(t){return e.setState({orgsname:t.target.value})},placeholder:"Github organisations..."}),a.a.createElement("button",{className:"search-btn",onClick:function(){return e.props.getOrgs(e.state.orgsname)}},"search")),a.a.createElement("ul",{className:"search-results-list"},this.props.orgs.map(function(t,r){return a.a.createElement("li",{className:"search-result-item",key:r,onClick:function(){e.props.getCurrentOrg(t.login)}},a.a.createElement(o.b,{to:"/org/".concat(t.login),className:"search-result-link"},t.login))})),a.a.createElement("p",null,this.props.org))}}]),t}(a.a.Component),R={getOrgs:function(e){return function(){var t=Object(p.a)(m.a.mark(function t(r){var n,a,c;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="".concat(g,"search/users?q=").concat(e,"+type:org"),t.next=4,fetch(n);case 4:return a=t.sent,t.next=7,a.json();case 7:c=t.sent,r({type:"ADD_RESULT",result:c}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("ERROR!");case 14:case"end":return t.stop()}},t,null,[[0,11]])}));return function(e){return t.apply(this,arguments)}}()},getCurrentOrg:function(e){return{type:"GET_CURRENT_ORG",currentOrg:e}}},U=Object(l.b)(function(e){return{orgs:e.orgs,currentOrg:e.currentOrg}},R)(w),d=function(e){function t(){return Object(E.a)(this,t),Object(b.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props.org;return a.a.createElement("div",{className:"info-wrap"},a.a.createElement("div",{className:"logo"},a.a.createElement("img",{src:e.avatar_url,alt:"".concat(e.name," avatar")})),a.a.createElement("div",{className:"info"},a.a.createElement("div",{className:"title-wrap"},a.a.createElement("h2",{className:"title"},null==e.name?e.login:e.name),null!==e.description?a.a.createElement("p",{className:"desc"},e.description):null),a.a.createElement("ul",{className:"info-list"},null!==e.location?a.a.createElement("li",{className:"info-item"},e.location):null,null!==e.blog?a.a.createElement("li",{className:"info-item"},e.blog):null,null!==e.email?a.a.createElement("li",{className:"info-item"},e.email):null,!0===e.is_verified?a.a.createElement("li",{className:"verifed"},"verifed"):null)))}}]),t}(a.a.Component),j=Object(l.b)(function(e){return{org:e.currentOrgInfo}},{})(d),k=function(e){function t(){return Object(E.a)(this,t),Object(b.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){this.props.getOrg(this.props.currentOrg),this.props.getOrgMembers(this.props.currentOrg),this.props.getOrgRepos(this.props.currentOrg)}},{key:"render",value:function(){var e=this,t=this.props.currentOrgMembers.slice(0,5),r=this.props.org;return a.a.createElement("div",{className:"page-inner"},a.a.createElement(j,null),a.a.createElement("div",{className:"members-wrap"},a.a.createElement("h2",{className:"title"},"Members"),a.a.createElement("ul",{className:"users-list"},t.map(function(t,r){return a.a.createElement("li",{className:"user-item",key:r,onClick:function(){e.props.getCurrentUser(t.login)}},a.a.createElement("img",{src:t.avatar_url,alt:"".concat(t.login," avatar"),className:"user-avatar"}),a.a.createElement("div",{className:"user-info"},a.a.createElement(o.b,{to:"/users/".concat(t.login)},a.a.createElement("h2",{className:"user-title"},t.login)),a.a.createElement(o.b,{className:"user-link",to:"/users/".concat(t.login,"/followers")},"followers"),a.a.createElement(o.b,{className:"user-link",to:"/users/".concat(t.login,"/following")},"following")))})),a.a.createElement("div",{className:"view-all-wrap"},this.props.currentOrgMembers.length>5?a.a.createElement(o.b,{to:"/org/".concat(r.login,"/members"),className:"user-link"},"View all members"):null)),a.a.createElement("div",{className:"repos-wrap"},a.a.createElement("h2",{className:"title"},"Repos"),a.a.createElement("ul",{className:"repos-list"},this.props.currentOrgRepos.map(function(e,t){return a.a.createElement("li",{className:"repos-item",key:t},a.a.createElement("a",{className:"repos-item-link",href:e.html_url,target:"_blank",rel:"noopener noreferrer",title:"watch on GitHub"},e.name))}))))}}]),t}(a.a.Component),y={getOrg:function(e){return function(){var t=Object(p.a)(m.a.mark(function t(r){var n,a,c;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="".concat(g,"orgs/").concat(e),t.next=4,fetch(n);case 4:return a=t.sent,t.next=7,a.json();case 7:c=t.sent,r({type:"ADD_ORG_INFO",info:c}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("ERROR!");case 14:case"end":return t.stop()}},t,null,[[0,11]])}));return function(e){return t.apply(this,arguments)}}()},getOrgMembers:function(e){return function(){var t=Object(p.a)(m.a.mark(function t(r){var n,a,c;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="".concat(g,"orgs/").concat(e,"/members"),t.next=4,fetch(n);case 4:return a=t.sent,t.next=7,a.json();case 7:c=t.sent,r({type:"ADD_ORG_MEMBERS",orgMembers:c}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("ERROR!");case 14:case"end":return t.stop()}},t,null,[[0,11]])}));return function(e){return t.apply(this,arguments)}}()},getCurrentUser:f,getOrgRepos:function(e){return function(){var t=Object(p.a)(m.a.mark(function t(r){var n,a,c;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="".concat(g,"orgs/").concat(e,"/repos"),t.next=4,fetch(n);case 4:return a=t.sent,t.next=7,a.json();case 7:c=t.sent,r({type:"ADD_ORG_REPOS",orgRepos:c}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("ERROR!");case 14:case"end":return t.stop()}},t,null,[[0,11]])}));return function(e){return t.apply(this,arguments)}}()}},_=Object(l.b)(function(e){return{currentOrg:e.currentOrg,org:e.currentOrgInfo,currentOrgMembers:e.currentOrgMembers,currentOrgRepos:e.currentOrgRepos,currentUser:e.currentUser}},y)(k),x=function(e){function t(){return Object(E.a)(this,t),Object(b.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"page-inner"},a.a.createElement("div",{className:"org-members-wrap"},a.a.createElement(j,null),a.a.createElement("div",{className:"user-title-wrap"},a.a.createElement("h2",{className:"title"},"Members")),a.a.createElement("ul",{className:"users-list"},this.props.currentOrgMembers.map(function(t,r){return a.a.createElement("li",{className:"user-item",key:r,onClick:function(){e.props.getCurrentUser(t.login)}},a.a.createElement("img",{src:t.avatar_url,alt:"".concat(t.login," avatar"),className:"user-avatar"}),a.a.createElement("div",{className:"user-info"},a.a.createElement(o.b,{to:"/users/".concat(t.login)},a.a.createElement("h2",{className:"user-title"},t.login)),a.a.createElement(o.b,{className:"user-link",to:"/users/".concat(t.login,"/followers")},"followers"),a.a.createElement(o.b,{className:"user-link",to:"/users/".concat(t.login,"/following")},"following")))}))))}}]),t}(a.a.Component),D={getCurrentUser:f},F=Object(l.b)(function(e){return{currentOrgMembers:e.currentOrgMembers,currentUser:e.currentUser}},D)(x),I=function(e){function t(){return Object(E.a)(this,t),Object(b.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props.currentUserInfo;return a.a.createElement("div",{className:"info-wrap"},a.a.createElement("div",{className:"logo"},a.a.createElement("img",{src:e.avatar_url,alt:"".concat(e.login," avatar")})),a.a.createElement("div",{className:"info"},a.a.createElement("div",{className:"title-wrap"},a.a.createElement("h2",{className:"title"},a.a.createElement(o.b,{to:"/users/".concat(e.login),className:"title-link"},e.name)),a.a.createElement("p",{className:"desc"},e.login),null!==e.bio?a.a.createElement("p",{className:"desc"},e.bio):null),a.a.createElement("ul",{className:"info-list"},null!==e.location?a.a.createElement("li",{className:"info-item"},e.location):null,null!==e.blog?a.a.createElement("li",{className:"info-item"},e.blog):null,null!==e.email?a.a.createElement("li",{className:"info-item"},e.email):null),a.a.createElement("ul",{className:"folow-wrap"},a.a.createElement("li",{className:"folow-item"},a.a.createElement(o.b,{to:"/users/".concat(e.login,"/followers"),className:"folow-item-link"},"followers(",e.followers,")")),a.a.createElement("li",{className:"folow-item"},a.a.createElement(o.b,{to:"/users/".concat(e.login,"/following"),className:"folow-item-link"},"following(",e.following,")")))))}}]),t}(a.a.Component),C=Object(l.b)(function(e){return{currentUserInfo:e.currentUserInfo}},{})(I),M=function(e){function t(){return Object(E.a)(this,t),Object(b.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){this.props.getUser(this.props.currentUser),this.props.getUserRepos(this.props.currentUser)}},{key:"render",value:function(){return a.a.createElement("div",{className:"page-inner"},a.a.createElement(C,null),a.a.createElement("div",{className:"repos-wrap"},a.a.createElement("div",{className:"user-title-wrap"},a.a.createElement("h2",{className:"title"},"Repos")),a.a.createElement("ul",{className:"repos-list"},this.props.currentUserRepos.map(function(e,t){return a.a.createElement("li",{key:t,className:"repos-item"},a.a.createElement("a",{className:"repos-item-link",href:e.html_url,target:"_blank",rel:"noopener noreferrer",title:"watch on GitHub"},e.name))}))))}}]),t}(a.a.Component),S={getUser:h,getUserRepos:function(e){return function(){var t=Object(p.a)(m.a.mark(function t(r){var n,a,c;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="".concat(g,"users/").concat(e,"/repos"),t.next=4,fetch(n);case 4:return a=t.sent,t.next=7,a.json();case 7:c=t.sent,r({type:"ADD_USER_REPOS",userRepos:c}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("ERROR!");case 14:case"end":return t.stop()}},t,null,[[0,11]])}));return function(e){return t.apply(this,arguments)}}()}},G=Object(l.b)(function(e){return{currentUser:e.currentUser,currentUserInfo:e.currentUserInfo,currentUserRepos:e.currentUserRepos}},S)(M),A=function(e){function t(){return Object(E.a)(this,t),Object(b.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){this.props.getUser(this.props.currentUser),this.props.getUserFollowers(this.props.currentUser)}},{key:"render",value:function(){return a.a.createElement("div",{className:"page-inner"},a.a.createElement(C,null),a.a.createElement("div",{className:"user-title-wrap"},a.a.createElement("h2",{className:"title"},"Followers")),a.a.createElement("ul",{className:"user-list follow-list"},this.props.currentUserFollowers.map(function(e,t){return a.a.createElement("li",{className:"user-item",key:t},a.a.createElement("img",{src:e.avatar_url,alt:"".concat(e.login," avatar"),className:"user-avatar"}),a.a.createElement("h2",{className:"user-title follow-title"},e.login))})))}}]),t}(a.a.Component),L={getUserFollowers:function(e){return function(){var t=Object(p.a)(m.a.mark(function t(r){var n,a,c;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="".concat(g,"users/").concat(e,"/followers"),t.next=4,fetch(n);case 4:return a=t.sent,t.next=7,a.json();case 7:c=t.sent,r({type:"ADD_USER_FOLLOWERS",userFollowers:c}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("ERROR!");case 14:case"end":return t.stop()}},t,null,[[0,11]])}));return function(e){return t.apply(this,arguments)}}()},getUser:h},T=Object(l.b)(function(e){return{currentUser:e.currentUser,currentUserInfo:e.currentUserInfo,currentUserFollowers:e.currentUserFollowers}},L)(A),W=function(e){function t(){return Object(E.a)(this,t),Object(b.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){this.props.getUser(this.props.currentUser),this.props.getUserFollowing(this.props.currentUser)}},{key:"render",value:function(){return a.a.createElement("div",{className:"page-inner"},a.a.createElement(C,null),a.a.createElement("div",{className:"user-title-wrap"},a.a.createElement("h2",{className:"title"},"Following list")),a.a.createElement("ul",{className:"user-list follow-list"},this.props.currentUserFollowing.map(function(e,t){return a.a.createElement("li",{className:"user-item",key:t},a.a.createElement("img",{src:e.avatar_url,alt:"".concat(e.login," avatar"),className:"user-avatar"}),a.a.createElement("h2",{className:"user-title follow-title"},e.login))})))}}]),t}(a.a.Component),B={getUserFollowing:function(e){return function(){var t=Object(p.a)(m.a.mark(function t(r){var n,a,c;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="".concat(g,"users/").concat(e,"/following"),t.next=4,fetch(n);case 4:return a=t.sent,t.next=7,a.json();case 7:c=t.sent,r({type:"ADD_USER_FOLLOWING",userFollowing:c}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("ERROR!");case 14:case"end":return t.stop()}},t,null,[[0,11]])}));return function(e){return t.apply(this,arguments)}}()},getUser:h},P=Object(l.b)(function(e){return{currentUser:e.currentUser,currentUserInfo:e.currentUserInfo,currentUserFollowing:e.currentUserFollowing}},B)(W),H=function(){return a.a.createElement(o.a,null,a.a.createElement(u.a,{path:"/search-page/",exact:!0,component:U}),a.a.createElement(u.a,{path:"/search-page/org/:id",exact:!0,component:_}),a.a.createElement(u.a,{path:"/search-page/org/:id/members",exact:!0,component:F}),a.a.createElement(u.a,{path:"/search-page/users/:id",exact:!0,component:G}),a.a.createElement(u.a,{path:"/search-page/users/:id/followers",exact:!0,component:T}),a.a.createElement(u.a,{path:"/search-page/users/:id/following",exact:!0,component:P}))};var J=function(){return a.a.createElement("div",{className:"wrapper"},a.a.createElement("main",{className:"main"},a.a.createElement("div",{className:"content"},a.a.createElement(H,null))))},q=r(20),V=r(31),$=r(15),z={orgs:[],currentOrg:"",currentOrgInfo:{},currentOrgMembers:[],currentOrgRepos:[],currentUser:"",currentUserInfo:{},currentUserFollowers:[],currentUserFollowing:[],currentUserRepos:[]},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_RESULT":return Object($.a)({},e,{orgs:t.result.items});case"GET_CURRENT_ORG":return Object($.a)({},e,{currentOrg:t.currentOrg});case"ADD_ORG_INFO":return Object($.a)({},e,{currentOrgInfo:t.info});case"ADD_ORG_MEMBERS":return Object($.a)({},e,{currentOrgMembers:t.orgMembers});case"ADD_ORG_REPOS":return Object($.a)({},e,{currentOrgRepos:t.orgRepos});case"GET_CURRENT_USER":return Object($.a)({},e,{currentUser:t.currentUser});case"ADD_USER_INFO":return Object($.a)({},e,{currentUserInfo:t.currentUserInfo});case"ADD_USER_FOLLOWERS":return Object($.a)({},e,{currentUserFollowers:t.userFollowers});case"ADD_USER_FOLLOWING":return Object($.a)({},e,{currentUserFollowing:t.userFollowing});case"ADD_USER_REPOS":return Object($.a)({},e,{currentUserRepos:t.userRepos});default:return e}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r(43),r(44),r(45);function Q(){return Object(q.c)(K,z,Object(q.a)(V.a))}r.d(t,"configureStore",function(){return Q}),r.d(t,"store",function(){return X});var X=Q();s.a.render(a.a.createElement(l.a,{store:X},a.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.98dc2af6.chunk.js.map