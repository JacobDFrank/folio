webpackJsonp([0xc23565d713b7,61550623477757,0x95dc3967fc91,0xc0541ef03b3d,0x8670f667a0a5,0xbc1811237ab4],{101:function(e,t){function n(e,t){for(var n in t)e.setAttribute(n,t[n])}function r(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function a(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,o){var l=document.head||document.getElementsByTagName("head")[0],u=document.createElement("script");"function"==typeof t&&(o=t,t={}),t=t||{},o=o||function(){},u.type=t.type||"text/javascript",u.charset=t.charset||"utf8",u.async=!("async"in t)||!!t.async,u.src=e,t.attrs&&n(u,t.attrs),t.text&&(u.text=""+t.text);var c="onload"in u?r:a;c(u,o),u.onload||r(u,o),l.appendChild(u)}},45:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function a(e){if(s===setTimeout)return setTimeout(e,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function o(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function l(){h&&p&&(h=!1,p.length?m=p.concat(m):y=-1,m.length&&u())}function u(){if(!h){var e=a(l);h=!0;for(var t=m.length;t;){for(p=m,m=[];++y<t;)p&&p[y].run();y=-1,t=m.length}p=null,h=!1,o(e)}}function c(e,t){this.fun=e,this.array=t}function i(){}var s,f,d=e.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(e){s=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var p,m=[],h=!1,y=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new c(e,t)),1!==m.length||h||a(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=i,d.addListener=i,d.once=i,d.off=i,d.removeListener=i,d.removeAllListeners=i,d.emit=i,d.prependListener=i,d.prependOnceListener=i,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},71:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),c=r(u),i=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return c.default.createElement("div",{id:"aboutme",className:"modal"},c.default.createElement("div",{className:"modal-container"},c.default.createElement("a",{className:"cancel",href:"#"},"Close ×"),c.default.createElement("section",{className:"experience"},c.default.createElement("p",null,"Multi-disciplinary product designer living in New York experienced in creating digital strategies, products, and services across a dozen industries. In my free time I'll be exploring machine learning 🤖🎓, cryptocurrencies 💰, front-end wizardry ✨, startups ideas 📈, and fly fishing 🎣."),c.default.createElement("div",{className:"clientlist grid-list"},c.default.createElement("ul",null,c.default.createElement("li",{className:"list-header"},"UxD @ AREA 17"),c.default.createElement("li",null,"ESPN"),c.default.createElement("li",null,"Quartz"),c.default.createElement("li",null,"Charlie Rose"),c.default.createElement("li",null,"Style.com"),c.default.createElement("li",null,"Advertising Age"),c.default.createElement("li",null,"Billboard"),c.default.createElement("li",null,"The Webby Awards"),c.default.createElement("li",null,"Samsung"),c.default.createElement("li",null,"Facebook"),c.default.createElement("li",null,"Google"),c.default.createElement("li",null,"...")),c.default.createElement("ul",null,c.default.createElement("li",{className:"list-header buzzword","data-buzzword":"Now"},"Sr. IxD @ IDEO"),c.default.createElement("li",{className:"redacted","data-char-count":"########"}),c.default.createElement("li",{className:"redacted","data-char-count":"################"}),c.default.createElement("li",null,"FloodHelpNY.org"),c.default.createElement("li",null,"The U.S. State Dept."),c.default.createElement("li",{className:"redacted","data-char-count":"####"}),c.default.createElement("li",{className:"redacted","data-char-count":"##############"}),c.default.createElement("li",null,"..."))))))},t}(c.default.Component);t.default=i,e.exports=t.default},72:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),c=r(u),i=n(63),s=(r(i),"/assets/bubble.js"),f=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.componentDidMount=function(){var e=n(101);e(""+s,function(e,t){e||console.log(t.src)})},t.prototype.render=function(){return c.default.createElement("div",null,c.default.createElement("canvas",{id:"bubble",width:"640",height:"640"}),c.default.createElement("canvas",{style:{display:"none"},width:"2560",height:"2560"}),c.default.createElement("canvas",{style:{display:"none"},width:"2560",height:"2560"}),c.default.createElement("canvas",{style:{display:"none"},width:"2560",height:"2560"}),c.default.createElement("canvas",{style:{display:"none"},width:"2560",height:"2560"}))},t}(c.default.Component);t.default=f,e.exports=t.default},38:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),c=r(u),i=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return c.default.createElement("footer",null,c.default.createElement("div",{className:"footer-container"},c.default.createElement("div",{className:"copyright"},"© ",c.default.createElement("span",{id:"copyright"},"2017")),c.default.createElement("div",{className:"courtesy"},c.default.createElement("div",{className:"email"},"Email me"),c.default.createElement("a",{href:"https://www.jacobdfrank.com/media/Jacob_Frank_Resume.pdf"},"Resume"),c.default.createElement("a",{href:"https://github.com/JacobDFrank"},"Github"),c.default.createElement("a",{href:"https://www.linkedin.com/in/jacobdfrank"},"LinkedIn"),c.default.createElement("a",{href:"https://twitter.com/jacobdfrank"},"Twitter"))))},t}(c.default.Component);t.default=i,e.exports=t.default},39:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),c=r(u),i=n(31),s=r(i),f=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return c.default.createElement("header",null,c.default.createElement(s.default,{to:"/",className:"faux-link"},"Jacob Frank"))},t}(c.default.Component);t.default=f,e.exports=t.default},73:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),c=r(u),i=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return c.default.createElement("section",{className:"projects"},c.default.createElement("h2",null,c.default.createElement("b",null,"Hey hey"),"—",c.default.createElement("b",null,"I'm Jacob Frank, a creative developer, designer, and 3rd year student at RIT")))},t}(c.default.Component);t.default=i,e.exports=t.default},195:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var a=n(1),o=r(a),l=n(31),u=r(l),c=n(38),i=r(c),s=n(73),f=r(s),d=n(39),p=r(d),m=n(72),h=r(m),y=n(71),b=(r(y),function(e){var t=e.data;return o.default.createElement("div",{className:"body home-colors"},o.default.createElement("div",{id:"app",className:"wrapper"},o.default.createElement(p.default,null),o.default.createElement(f.default,null),o.default.createElement("section",{className:"projects grid"},t.allMarkdownRemark.edges.map(function(e){return o.default.createElement("div",{className:"project grid__col grid__col--1-of-3",key:e.node.id},o.default.createElement("span",{className:"meta-data code"},e.node.frontmatter.tags),o.default.createElement(u.default,{to:e.node.frontmatter.path,className:"faux-link"},o.default.createElement("span",{"data-volume":e.node.frontmatter.volume,"data-homeImage":e.node.frontmatter.homeImage},e.node.frontmatter.description)))})),o.default.createElement(i.default,null)),o.default.createElement(h.default,null))});t.pageQuery="** extracted graphql fragment **";t.default=b}});
//# sourceMappingURL=component---src-pages-index-jsx-2adbbcbe74a28cde3c37.js.map