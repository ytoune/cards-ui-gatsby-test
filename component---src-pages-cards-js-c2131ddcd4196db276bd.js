(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{247:function(e,t,n){"use strict";n.r(t);var r=n(255),a=n(0),i=n.n(a),o=(n(45),n(117)),u=n.n(o),c=(n(115),n(76),n(412),n(260)),s=n(75),l=n(295),f=n.n(l),d=Object(s.withStyles)({root:{"-moz-perspective":500,"-webkit-perspective":500,"-o-perspective":500,"-ms-perspective":500,perspective:500,transformStyle:"preserve-3d","& *":{transformStyle:"preserve-3d"},overflow:"hidden",minWidth:"100%",minHeight:"60vh","& > *":{position:"absolute",bottom:"-10%",left:"-50%",right:"-50%",minWidth:"200%",minHeight:"120vh",transform:"rotateX(30deg)",transformOrigin:"center bottom",background:"gray"}}})(function(e){var t=e.classes.root,n=e.children;return i.a.createElement(f.a,null,i.a.createElement("div",{className:t},i.a.createElement("div",null,n)))}),p=function(e){var t,n=e.pos,r=e.setpos;return i.a.createElement(c.a,null,i.a.createElement(d,null,i.a.createElement("div",{style:v,onMouseMove:h(r)},i.a.createElement(b,{style:{bottom:"10%",left:"15%",fontSize:10}},i.a.createElement("pre",{style:{padding:0,position:"relative",top:-50}},(t=n,Object.entries(t).reduce(function(e,t){return e+"\n"+t[0]+": "+t[1]},"")))),i.a.createElement(b,{style:{bottom:"10%",left:"25%"}},"hoge"),i.a.createElement(b,{style:{bottom:"60%",left:"25%"}},"hoge"))))},h=function(e){return function(t){var n={};for(var r in t)/[XY]$/.test(r)&&(n[r]=t[r]);e(n)}},v={minWidth:"200%",minHeight:"120vh",textAlign:"center",paddingTop:200},m="255, 0, 0",b=Object(s.withStyles)({root:{transform:"translateZ(30px) rotateX(0deg) scale(1)",transition:"transform .5s, box-shadow .1s",transformOrigin:"center bottom","&:hover":{transform:"translateZ(30px) rotateX(-20deg) scale(1.2)"},"&:hover::after":{position:"absolute",top:0,bottom:0,left:0,right:0,display:"block",content:'""',boxShadow:"0px 6px 6px -3px rgba("+m+", 0.2),0px 10px 14px 1px rgba("+m+", 0.14),0px 4px 18px 3px rgba("+m+", 0.12)"}}})(function(e){var t=e.style,n=u()(e,["style"]);return i.a.createElement(f.a,Object.assign({elevation:10},n,{style:Object.assign({position:"absolute",width:"5%",height:"12vh",margin:"auto"},t)}))}),y=n(420),g=n(400),w=n(266),x=n(290),j=n(289),O=n(265),E=n(399),_=n(252),I=n(285),S=n(284),T=n(262);var N=n(267);var P=n(259),k=n(286);var q=n(287);var R=n(283);var A=n(282);function C(e,t){if(!t)return e instanceof _.a?e:new _.a(Object(A.a)(e));if(null!=e){if(function(e){return e&&"function"==typeof e[T.a]}(e))return function(e,t){return t?new _.a(function(n){var r=new P.a;return r.add(t.schedule(function(){var a=e[T.a]();r.add(a.subscribe({next:function(e){r.add(t.schedule(function(){return n.next(e)}))},error:function(e){r.add(t.schedule(function(){return n.error(e)}))},complete:function(){r.add(t.schedule(function(){return n.complete()}))}}))})),r}):new _.a(Object(R.a)(e))}(e,t);if(Object(I.a)(e))return function(e,t){return t?new _.a(function(n){var r=new P.a;return r.add(t.schedule(function(){return e.then(function(e){r.add(t.schedule(function(){n.next(e),r.add(t.schedule(function(){return n.complete()}))}))},function(e){r.add(t.schedule(function(){return n.error(e)}))})})),r}):new _.a(Object(k.a)(e))}(e,t);if(Object(S.a)(e))return Object(w.a)(e,t);if(function(e){return e&&"function"==typeof e[N.a]}(e)||"string"==typeof e)return function(e,t){if(!e)throw new Error("Iterable cannot be null");return t?new _.a(function(n){var r,a=new P.a;return a.add(function(){r&&"function"==typeof r.return&&r.return()}),a.add(t.schedule(function(){r=e[N.a](),a.add(t.schedule(function(){if(!n.closed){var e,t;try{var a=r.next();e=a.value,t=a.done}catch(e){return void n.error(e)}t?n.complete():(n.next(e),this.schedule())}}))})),a}):new _.a(Object(q.a)(e))}(e,t)}throw new TypeError((null!==e&&typeof e||e)+" is not observable")}var M=n(253),U=n(280),Y=n(288),F=n(281);var W=function(){function e(e,t){void 0===t&&(t=Number.POSITIVE_INFINITY),this.project=e,this.concurrent=t}return e.prototype.call=function(e,t){return t.subscribe(new G(e,this.project,this.concurrent))},e}(),G=function(e){function t(t,n,r){void 0===r&&(r=Number.POSITIVE_INFINITY);var a=e.call(this,t)||this;return a.project=n,a.concurrent=r,a.hasCompleted=!1,a.buffer=[],a.active=0,a.index=0,a}return M.a(t,e),t.prototype._next=function(e){this.active<this.concurrent?this._tryNext(e):this.buffer.push(e)},t.prototype._tryNext=function(e){var t,n=this.index++;try{t=this.project(e,n)}catch(e){return void this.destination.error(e)}this.active++,this._innerSub(t,e,n)},t.prototype._innerSub=function(e,t,n){var r=new F.a(this,void 0,void 0);this.destination.add(r),Object(U.a)(this,e,t,n,r)},t.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()},t.prototype.notifyNext=function(e,t,n,r,a){this.destination.next(t)},t.prototype.notifyComplete=function(e){var t=this.buffer;this.remove(e),this.active--,t.length>0?this._next(t.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()},t}(Y.a);function V(e){return e}function X(e){return void 0===e&&(e=Number.POSITIVE_INFINITY),function e(t,n,r){return void 0===r&&(r=Number.POSITIVE_INFINITY),"function"==typeof n?function(a){return a.pipe(e(function(e,r){return C(t(e,r)).pipe(Object(g.a)(function(t,a){return n(e,t,r,a)}))},r))}:("number"==typeof n&&(r=n),function(e){return e.lift(new W(t,r))})}(V,e)}function H(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return 1===e.length||2===e.length&&Object(O.a)(e[1])?C(e[0]):X(1)(E.a.apply(void 0,e))}var L=Object(r.c)(r.b)(function(e){var t,n,a=(t={},[n=new y.a(t),function(e){return n.next(e)}]),o=a[0],u=a[1];return Object(r.a)({props:e,pos:o,setpos:u}).pipe(Object(g.a)(Q),function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(t){var n=e[e.length-1];Object(O.a)(n)?e.pop():n=null;var r=e.length;return H(1!==r||n?r>0?Object(w.a)(e,n):Object(j.a)(n):Object(x.a)(e[0]),t)}}(i.a.createElement("div",null,"Loading...")))}),Q=function(e){return i.a.createElement(p,e)};t.default=L},250:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var r=n(0),a=n.n(r),i=n(1),o=n.n(i),u=n(249),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var s=n(251),l=n.n(s);n.d(t,"PageRenderer",function(){return l.a});var f=n(46);n.d(t,"parsePath",function(){return f.a});var d=a.a.createContext({}),p=function(e){return a.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},251:function(e,t,n){var r;e.exports=(r=n(257))&&r.default||r},255:function(e,t,n){"use strict";n(45),n(115),n(76),n(264);var r=n(418),a=n(419),i=n(399),o=n(400),u=function(e){var t=Object.keys(e);return r.a.apply(void 0,t.map(function(t){var n=e[t];return Object(a.a)(n)?n:Object(i.a)(n)})).pipe(Object(o.a)(function(e){return e.reduce(function(e,n,r){var a;return Object.assign({},e,((a={})[t[r]]=n,a))},{})}))},c=(n(268),n(269),function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.reverse();return function(e){var t=e,n=r,a=Array.isArray(n),i=0;for(n=a?n:n[Symbol.iterator]();;){var o;if(a){if(i>=n.length)break;o=n[i++]}else{if((i=n.next()).done)break;o=i.value}t=o(t)}return t}}),s=n(9),l=n.n(s),f=n(420),d=n(0),p=function(e){return function(t){function n(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))||this).state={view:null},e}l()(n,t);var r=n.prototype;return r.componentDidMount=function(){var t=this,n=new f.a(this.props),r=e(n).subscribe(function(e){return t.setState({view:e})});this._unsubscribe=function(){r.unsubscribe(),t._unsubscribe=null,t._push=null},this._push=function(e){return n.next(e)}},r.componentWillUnmount=function(){this._unsubscribe()},r.componentDidUpdate=function(e){var t=this.props;e!==t&&this._push(t)},r.render=function(){return this.state.view},n}(d.Component)};n.d(t,"a",function(){return u}),n.d(t,"c",function(){return c}),n.d(t,"b",function(){return p}),window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__=!0},256:function(e){e.exports={data:{site:{siteMetadata:{title:"Cards UI Test"}}}}},257:function(e,t,n){"use strict";n.r(t);n(45);var r=n(0),a=n.n(r),i=n(1),o=n.n(i),u=n(77),c=n(5),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},258:function(e,t,n){},260:function(e,t,n){"use strict";var r=n(256),a=n(0),i=n.n(a),o=n(1),u=n.n(o),c=n(270),s=n.n(c),l=n(250),f=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(l.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))},d=(n(258),function(e){var t=e.children;return i.a.createElement(l.StaticQuery,{query:"86343720",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(f,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:r})});d.propTypes={children:u.a.node.isRequired};t.a=d},295:function(e,t,n){"use strict";var r=n(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var a=r(n(414))},412:function(e,t,n){var r=n(31),a=n(413)(!0);r(r.S,"Object",{entries:function(e){return a(e)}})},413:function(e,t,n){var r=n(47),a=n(48),i=n(116).f;e.exports=function(e){return function(t){for(var n,o=a(t),u=r(o),c=u.length,s=0,l=[];c>s;)i.call(o,n=u[s++])&&l.push(e?[n,o[n]]:o[n]);return l}}},414:function(e,t,n){"use strict";var r=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var a=r(n(13)),i=r(n(16)),o=r(n(8)),u=r(n(0)),c=(r(n(1)),r(n(415))),s=(r(n(3)),r(n(123))),l=function(e){var t={};return e.shadows.forEach(function(e,n){t["elevation".concat(n)]={boxShadow:e}}),(0,o.default)({root:{backgroundColor:e.palette.background.paper},rounded:{borderRadius:e.shape.borderRadius}},t)};function f(e){var t=e.classes,n=e.className,r=e.component,s=e.square,l=e.elevation,f=(0,i.default)(e,["classes","className","component","square","elevation"]),d=(0,c.default)(t.root,t["elevation".concat(l)],(0,a.default)({},t.rounded,!s),n);return u.default.createElement(r,(0,o.default)({className:d},f))}t.styles=l,f.propTypes={},f.defaultProps={component:"div",elevation:2,square:!1};var d=(0,s.default)(l,{name:"MuiPaper"})(f);t.default=d},415:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=component---src-pages-cards-js-c2131ddcd4196db276bd.js.map