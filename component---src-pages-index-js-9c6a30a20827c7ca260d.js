(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{248:function(e,t,a){"use strict";a.r(t);a(257);var n=a(0),r=a.n(n),i=a(250),s=a(262),o=a(418),c=a(419),l=a.n(c),d=function(){return r.a.createElement(i.StaticQuery,{query:"3354399949",render:function(e){return r.a.createElement(l.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:o})};t.default=function(){return r.a.createElement(s.a,null,r.a.createElement("h1",null,"Hi people"),r.a.createElement("p",null,"Welcome to your new Gatsby site."),r.a.createElement("p",null,"Now go build something great."),r.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},r.a.createElement(d,null)),r.a.createElement("p",null,r.a.createElement(i.Link,{to:"/page-2/"},"Go to page 2")),r.a.createElement("p",null,r.a.createElement(i.Link,{to:"/cards/"},"Test")))}},250:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(1),s=a.n(i),o=a(249),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var l=a(252),d=a.n(l);a.d(t,"PageRenderer",function(){return d.a});var u=a(46);a.d(t,"parsePath",function(){return u.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},252:function(e,t,a){var n;e.exports=(n=a(259))&&n.default||n},257:function(e,t,a){"use strict";a(45),a(115),a(76),a(264);var n=a(420),r=a(421),i=a(401),s=a(402),o=function(e){var t=Object.keys(e);return n.a.apply(void 0,t.map(function(t){var a=e[t];return Object(r.a)(a)?a:Object(i.a)(a)})).pipe(Object(s.a)(function(e){return e.reduce(function(e,a,n){var r;return Object.assign({},e,((r={})[t[n]]=a,r))},{})}))},c=(a(268),a(269),function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var n=t.reverse();return function(e){var t=e,a=n,r=Array.isArray(a),i=0;for(a=r?a:a[Symbol.iterator]();;){var s;if(r){if(i>=a.length)break;s=a[i++]}else{if((i=a.next()).done)break;s=i.value}t=s(t)}return t}}),l=a(9),d=a.n(l),u=a(0),f=a(423),p=a(422),h=function(e){return function(t){function a(){for(var a,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];(a=t.call.apply(t,[this].concat(r))||this).state={view:null};var o=!0,c=Object(i.a)({}).pipe(e,Object(p.a)()).subscribe(function(e){o&&(a.state.view=e)});return o=!1,c.unsubscribe(),a}d()(a,t);var n=a.prototype;return n.componentDidMount=function(){var t=this,a=new f.a(this.props),n=e(a).subscribe(function(e){return t.setState({view:e})});this._unsubscribe=function(){n.unsubscribe(),t._unsubscribe=null,t._push=null},this._push=function(e){return a.next(e)}},n.componentWillUnmount=function(){this._unsubscribe()},n.componentDidUpdate=function(e){var t=this.props;e!==t&&this._push(t)},n.render=function(){return this.state.view},a}(u.Component)};a.d(t,"a",function(){return o}),a.d(t,"c",function(){return c}),a.d(t,"b",function(){return h}),new Function("return this")().__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__=!0},258:function(e){e.exports={data:{site:{siteMetadata:{title:"Cards UI Test"}}}}},259:function(e,t,a){"use strict";a.r(t);a(45);var n=a(0),r=a.n(n),i=a(1),s=a.n(i),o=a(77),c=a(5),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},260:function(e,t,a){},262:function(e,t,a){"use strict";var n=a(258),r=a(0),i=a.n(r),s=a(1),o=a.n(s),c=a(270),l=a.n(c),d=a(250),u=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(d.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))},f=(a(260),function(e){var t=e.children;return i.a.createElement(d.StaticQuery,{query:"86343720",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:n})});f.propTypes={children:o.a.node.isRequired};t.a=f},418:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/cards-ui-gatsby-test/static/6d91c86c0fde632ba4cd01062fd9ccfa/045aa/gatsby-astronaut.png",srcSet:"/cards-ui-gatsby-test/static/6d91c86c0fde632ba4cd01062fd9ccfa/0552a/gatsby-astronaut.png 75w,\n/cards-ui-gatsby-test/static/6d91c86c0fde632ba4cd01062fd9ccfa/fc3be/gatsby-astronaut.png 150w,\n/cards-ui-gatsby-test/static/6d91c86c0fde632ba4cd01062fd9ccfa/045aa/gatsby-astronaut.png 300w,\n/cards-ui-gatsby-test/static/6d91c86c0fde632ba4cd01062fd9ccfa/24f49/gatsby-astronaut.png 450w,\n/cards-ui-gatsby-test/static/6d91c86c0fde632ba4cd01062fd9ccfa/5497d/gatsby-astronaut.png 600w,\n/cards-ui-gatsby-test/static/6d91c86c0fde632ba4cd01062fd9ccfa/483e1/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},419:function(e,t,a){"use strict";var n=a(2);t.__esModule=!0,t.default=void 0;var r,i=n(a(9)),s=n(a(51)),o=n(a(117)),c=n(a(8)),l=n(a(0)),d=n(a(1)),u=function(e){var t=(0,c.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!f[a]||(f[a]=!0,!1)},h=[];var g=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),h.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",l=e.opacity?e.opacity:"1";return"<picture>"+n+r+"<img "+o+c+t+s+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=l.default.forwardRef(function(e,t){var a=e.style,n=e.onLoad,r=e.onError,i=(0,o.default)(e,["style","onLoad","onError"]);return l.default.createElement("img",(0,c.default)({},i,{onLoad:n,onError:r,ref:t,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});b.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,r=!0,i=!1,o=t.fadeIn,c=p(t);!c&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!1,i=!0),"undefined"==typeof window&&(n=!1,r=!1),t.critical&&(n=!0,r=!1,i=!1);var d=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:n,imgLoaded:r,IOSupported:i,fadeIn:o,hasNoScript:d,seenBefore:c},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,h=e.fluid,g=e.fixed,y=e.backgroundColor,v=e.Tag,w="boolean"==typeof y?"lightgray":y,S=(0,c.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),E=(0,c.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),R={title:t,alt:this.state.isVisible?"":a,style:S,className:p};if(h){var A=h;return l.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(A.srcSet)},l.default.createElement(v,{style:{width:"100%",paddingBottom:100/A.aspectRatio+"%"}}),A.base64&&l.default.createElement(b,(0,c.default)({src:A.base64},R)),A.tracedSVG&&l.default.createElement(b,(0,c.default)({src:A.tracedSVG},R)),w&&l.default.createElement(v,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&l.default.createElement("picture",null,A.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:A.srcSetWebp,sizes:A.sizes}),l.default.createElement("source",{srcSet:A.srcSet,sizes:A.sizes}),l.default.createElement(b,{alt:a,title:t,src:A.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,c.default)({alt:a,title:t},A))}}))}if(g){var I=g,L=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:I.width,height:I.height},i);return"inherit"===i.display&&delete L.display,l.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:L,ref:this.handleRef,key:"fixed-"+JSON.stringify(I.srcSet)},I.base64&&l.default.createElement(b,(0,c.default)({src:I.base64},R)),I.tracedSVG&&l.default.createElement(b,(0,c.default)({src:I.tracedSVG},R)),w&&l.default.createElement(v,{title:t,style:{backgroundColor:w,width:I.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:I.height}}),this.state.isVisible&&l.default.createElement("picture",null,I.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),l.default.createElement("source",{srcSet:I.srcSet,sizes:I.sizes}),l.default.createElement(b,{alt:a,title:t,width:I.width,height:I.height,src:I.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,c.default)({alt:a,title:t,width:I.width,height:I.height},I))}}))}return null},t}(l.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),w=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:v,sizes:w,fixed:v,fluid:w,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,Tag:d.default.string};var S=y;t.default=S}}]);
//# sourceMappingURL=component---src-pages-index-js-9c6a30a20827c7ca260d.js.map