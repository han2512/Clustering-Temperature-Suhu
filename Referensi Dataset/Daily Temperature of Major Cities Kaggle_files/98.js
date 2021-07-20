/*! For license information please see 98.3df95ca462b0d06f4923.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1075:function(e,t,n){"use strict";var r=n(646),o=n(981);class i{constructor(e){this.tokens=this.parse(e||"")}parse(e){const t=[];let n=[],r=!1,o=!1;const i=()=>{t.push(n.join("").trim()),n=[]};for(const t of e)" "!==t||o?(":"===t?r=!0:r&&'"'===t&&(o=!o),n.push(t)):(i(),r=!1,o=!1);return i(),t}toString(){return this.tokens.join(" ")}getTokens(){return this.tokens.slice()}addToken(e){-1===this.tokens.indexOf(e)&&(this.tokens.push(e),this.tokens=this.tokens.filter(e=>""!==e))}removeToken(e){this.tokens=this.tokens.filter(t=>t!==e&&""!==t)}forEach(e){this.tokens.forEach(t=>{""!==t&&e(t)})}}n.d(t,"a",(function(){return a}));class a{constructor(e){this.filters=[],this.tokenizedString=new i(e)}getCacheKey(){return this.toRequestString().split(" ").sort().join(" ")}addFilter(e){this.filters.push(e)}removeFilter(e){this.filters=this.filters.filter(t=>!t.equals(e)),this.tokenizedString.removeToken(e.toQueryString())}convertFiltersToUiFilters(){for(const e of this.getFilters())this.tokenizedString.removeToken(e.toQueryString()),this.addFilter(e)}toInputString(){return this.tokenizedString.toString()}toRequestString(){const e=new i(this.tokenizedString.toString());return this.filters.forEach(t=>e.addToken(t.toQueryString())),e.toString()}hasFilter(e){for(const t of this.getFilters())if(t.equals(e))return!0;return!1}getFilterSet(){return new o.a(this.getFilters())}getFilters(){const e=[];return this.tokenizedString.forEach(t=>{const n=r.a.fromQueryString(t);n.isValid()&&e.push(n)}),e.concat(this.filters)}getUiFilters(){return this.filters}}},1095:function(e,t,n){"use strict";var r=n(443),o=n(454),i=n(453),a=n(0),s=n.n(a),l=(n(10),n(21)),c=n.n(l),u=n(460),d=n(455),p=n(488),h=n(471),f="undefined"!=typeof window?s.a.useLayoutEffect:s.a.useEffect;var m=function(e){var t=e.children,n=e.defer,r=void 0!==n&&n,i=e.fallback,a=void 0===i?null:i,l=s.a.useState(!1),c=Object(o.a)(l,2),u=c[0],d=c[1];return f((function(){r||d(!0)}),[r]),s.a.useEffect((function(){r&&d(!0)}),[r]),s.a.createElement(s.a.Fragment,null,u?t:a)},g=n(611),b=n(905),_=n(650),v=n(651),y=n(1044),w=n(513);function x(e,t){var n=Object.create(null);return e&&a.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&Object(a.isValidElement)(e)?t(e):e}(e)})),n}function E(e,t,n){return null!=n[t]?n[t]:e.props[t]}function k(e,t,n){var r=x(e.children),o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,o=Object.create(null),i=[];for(var a in e)a in t?i.length&&(o[a]=i,i=[]):i.push(a);var s={};for(var l in t){if(o[l])for(r=0;r<o[l].length;r++){var c=o[l][r];s[o[l][r]]=n(c)}s[l]=n(l)}for(r=0;r<i.length;r++)s[i[r]]=n(i[r]);return s}(t,r);return Object.keys(o).forEach((function(i){var s=o[i];if(Object(a.isValidElement)(s)){var l=i in t,c=i in r,u=t[i],d=Object(a.isValidElement)(u)&&!u.props.in;!c||l&&!d?c||!l||d?c&&l&&Object(a.isValidElement)(u)&&(o[i]=Object(a.cloneElement)(s,{onExited:n.bind(null,s),in:u.props.in,exit:E(s,"exit",e),enter:E(s,"enter",e)})):o[i]=Object(a.cloneElement)(s,{in:!1}):o[i]=Object(a.cloneElement)(s,{onExited:n.bind(null,s),in:!0,exit:E(s,"exit",e),enter:E(s,"enter",e)})}})),o}var C=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},S=function(e){function t(t,n){var r,o=(r=e.call(this,t,n)||this).handleExited.bind(Object(y.a)(Object(y.a)(r)));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}Object(v.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,o=t.children,i=t.handleExited;return{children:t.firstRender?(n=e,r=i,x(n.children,(function(e){return Object(a.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:E(e,"appear",n),enter:E(e,"enter",n),exit:E(e,"exit",n)})}))):k(e,o,i),firstRender:!1}},n.handleExited=function(e,t){var n=x(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=Object(r.a)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=Object(_.a)(e,["component","childFactory"]),o=this.state.contextValue,i=C(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?s.a.createElement(w.a.Provider,{value:o},i):s.a.createElement(w.a.Provider,{value:o},s.a.createElement(t,r,i))},t}(s.a.Component);S.propTypes={},S.defaultProps={component:"div",childFactory:function(e){return e}};var O=S,T="undefined"==typeof window?s.a.useEffect:s.a.useLayoutEffect;var I=function(e){var t=e.classes,n=e.pulsate,r=void 0!==n&&n,i=e.rippleX,a=e.rippleY,l=e.rippleSize,c=e.in,d=e.onExited,h=void 0===d?function(){}:d,f=e.timeout,m=s.a.useState(!1),g=Object(o.a)(m,2),b=g[0],_=g[1],v=Object(u.default)(t.ripple,t.rippleVisible,r&&t.ripplePulsate),y={width:l,height:l,top:-l/2+a,left:-l/2+i},w=Object(u.default)(t.child,b&&t.childLeaving,r&&t.childPulsate),x=Object(p.a)(h);return T((function(){if(!c){_(!0);var e=setTimeout(x,f);return function(){clearTimeout(e)}}}),[x,c,f]),s.a.createElement("span",{className:v,style:y},s.a.createElement("span",{className:w}))},P=s.a.forwardRef((function(e,t){var n=e.center,a=void 0!==n&&n,l=e.classes,c=e.className,d=Object(i.a)(e,["center","classes","className"]),p=s.a.useState([]),h=Object(o.a)(p,2),f=h[0],m=h[1],g=s.a.useRef(0),_=s.a.useRef(null);s.a.useEffect((function(){_.current&&(_.current(),_.current=null)}),[f]);var v=s.a.useRef(!1),y=s.a.useRef(null),w=s.a.useRef(null),x=s.a.useRef(null);s.a.useEffect((function(){return function(){clearTimeout(y.current)}}),[]);var E=s.a.useCallback((function(e){var t=e.pulsate,n=e.rippleX,r=e.rippleY,o=e.rippleSize,i=e.cb;m((function(e){return[].concat(Object(b.a)(e),[s.a.createElement(I,{key:g.current,classes:l,timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:o})])})),g.current+=1,_.current=i}),[l]),k=s.a.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=t.pulsate,o=void 0!==r&&r,i=t.center,s=void 0===i?a||t.pulsate:i,l=t.fakeElement,c=void 0!==l&&l;if("mousedown"===e.type&&v.current)v.current=!1;else{"touchstart"===e.type&&(v.current=!0);var u,d,p,h=c?null:x.current,f=h?h.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(s||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)u=Math.round(f.width/2),d=Math.round(f.height/2);else{var m=e.clientX?e.clientX:e.touches[0].clientX,g=e.clientY?e.clientY:e.touches[0].clientY;u=Math.round(m-f.left),d=Math.round(g-f.top)}if(s)(p=Math.sqrt((2*Math.pow(f.width,2)+Math.pow(f.height,2))/3))%2==0&&(p+=1);else{var b=2*Math.max(Math.abs((h?h.clientWidth:0)-u),u)+2,_=2*Math.max(Math.abs((h?h.clientHeight:0)-d),d)+2;p=Math.sqrt(Math.pow(b,2)+Math.pow(_,2))}e.touches?(w.current=function(){E({pulsate:o,rippleX:u,rippleY:d,rippleSize:p,cb:n})},y.current=setTimeout((function(){w.current&&(w.current(),w.current=null)}),80)):E({pulsate:o,rippleX:u,rippleY:d,rippleSize:p,cb:n})}}),[a,E]),C=s.a.useCallback((function(){k({},{pulsate:!0})}),[k]),S=s.a.useCallback((function(e,t){if(clearTimeout(y.current),"touchend"===e.type&&w.current)return e.persist(),w.current(),w.current=null,void(y.current=setTimeout((function(){S(e,t)})));w.current=null,m((function(e){return e.length>0?e.slice(1):e})),_.current=t}),[]);return s.a.useImperativeHandle(t,(function(){return{pulsate:C,start:k,stop:S}}),[C,k,S]),s.a.createElement("span",Object(r.a)({className:Object(u.default)(l.root,c),ref:x},d),s.a.createElement(O,{component:null,exit:!0},f))}));var R,j=Object(h.a)((function(e){return{root:{display:"block",position:"absolute",overflow:"hidden",borderRadius:"inherit",width:"100%",height:"100%",left:0,top:0,pointerEvents:"none",zIndex:0},ripple:{opacity:0,position:"absolute"},rippleVisible:{opacity:.3,transform:"scale(1)",animation:"$mui-ripple-enter ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},ripplePulsate:{animationDuration:"".concat(e.transitions.duration.shorter,"ms")},child:{opacity:1,display:"block",width:"100%",height:"100%",borderRadius:"50%",backgroundColor:"currentColor"},childLeaving:{opacity:0,animation:"$mui-ripple-exit ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},childPulsate:{position:"absolute",left:0,top:0,animation:"$mui-ripple-pulsate 2500ms ".concat(e.transitions.easing.easeInOut," 200ms infinite")},"@keyframes mui-ripple-enter":{"0%":{transform:"scale(0)",opacity:.1},"100%":{transform:"scale(1)",opacity:.3}},"@keyframes mui-ripple-exit":{"0%":{opacity:1},"100%":{opacity:0}},"@keyframes mui-ripple-pulsate":{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.92)"},"100%":{transform:"scale(1)"}}}}),{flip:!1,name:"MuiTouchRipple"})(((R=s.a.memo(P)).muiName="MuiTouchRipple",R)),N=s.a.forwardRef((function(e,t){var n=e.action,a=e.buttonRef,l=e.centerRipple,h=void 0!==l&&l,f=e.children,b=e.classes,_=e.className,v=e.component,y=void 0===v?"button":v,w=e.disabled,x=e.disableRipple,E=void 0!==x&&x,k=e.disableTouchRipple,C=void 0!==k&&k,S=e.focusRipple,O=void 0!==S&&S,T=e.focusVisibleClassName,I=e.onBlur,P=e.onClick,R=e.onFocus,N=e.onFocusVisible,$=e.onKeyDown,F=e.onKeyUp,A=e.onMouseDown,M=e.onMouseLeave,L=e.onMouseUp,D=e.onTouchEnd,z=e.onTouchMove,B=e.onTouchStart,U=e.onDragLeave,G=e.tabIndex,V=void 0===G?0:G,H=e.TouchRippleProps,W=e.type,q=void 0===W?"button":W,K=Object(i.a)(e,["action","buttonRef","centerRipple","children","classes","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","onBlur","onClick","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","onDragLeave","tabIndex","TouchRippleProps","type"]),Y=s.a.useRef(null);var Q=s.a.useRef(null),X=s.a.useState(!1),Z=Object(o.a)(X,2),J=Z[0],ee=Z[1];w&&J&&ee(!1);var te=Object(g.a)(),ne=te.isFocusVisible,re=te.onBlurVisible,oe=te.ref;function ie(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:C;return Object(p.a)((function(r){return t&&t(r),!(r.defaultPrevented||n)&&Q.current&&Q.current[e](r),!0}))}s.a.useImperativeHandle(n,(function(){return{focusVisible:function(){ee(!0),Y.current.focus()}}}),[]),s.a.useEffect((function(){J&&O&&!E&&Q.current.pulsate()}),[E,O,J]);var ae=ie("start",A),se=ie("stop",U),le=ie("stop",L),ce=ie("stop",(function(e){J&&e.preventDefault(),M&&M(e)})),ue=ie("start",B),de=ie("stop",D),pe=ie("stop",z),he=ie("stop",(function(e){J&&(re(e),ee(!1)),I&&I(e)}),!1),fe=Object(p.a)((function(e){w||(Y.current||(Y.current=e.currentTarget),ne(e)&&(ee(!0),N&&N(e)),R&&R(e))})),me=s.a.useRef(!1),ge=Object(p.a)((function(e){O&&!me.current&&J&&Q.current&&" "===e.key&&(me.current=!0,e.persist(),Q.current.stop(e,(function(){Q.current.start(e)}))),$&&$(e);var t=c.a.findDOMNode(Y.current);e.target!==e.currentTarget||!y||"button"===y||" "!==e.key&&"Enter"!==e.key||"A"===t.tagName&&t.href||(e.preventDefault(),P&&P(e))})),be=Object(p.a)((function(e){O&&" "===e.key&&Q.current&&J&&(me.current=!1,e.persist(),Q.current.stop(e,(function(){Q.current.pulsate(e)}))),F&&F(e)})),_e=Object(u.default)(b.root,_,J&&[b.focusVisible,T],w&&b.disabled),ve=y;"button"===ve&&K.href&&(ve="a");var ye={};"button"===ve?(ye.type=q,ye.disabled=w):("a"===ve&&K.href||(ye.role="button"),ye["aria-disabled"]=w);var we=Object(d.c)(a,t),xe=Object(d.c)(oe,Y),Ee=Object(d.c)(we,xe);return s.a.createElement(ve,Object(r.a)({className:_e,onBlur:he,onClick:P,onFocus:fe,onKeyDown:ge,onKeyUp:be,onMouseDown:ae,onMouseLeave:ce,onMouseUp:le,onDragLeave:se,onTouchEnd:de,onTouchMove:pe,onTouchStart:ue,ref:Ee,tabIndex:w?-1:V},ye,K),f,E||w?null:s.a.createElement(m,null,s.a.createElement(j,Object(r.a)({ref:Q,center:h},H))))}));t.a=Object(h.a)({root:{display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:"none",border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},"&$disabled":{pointerEvents:"none",cursor:"default"}},disabled:{},focusVisible:{}},{name:"MuiButtonBase"})(N)},1113:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(1),o=n.n(r),i=n(971),a=n(0);n(895),n(966);const s=o()(i.a)`
  &&& {
    label: {
      background-color: red;
    }
  }

  .mdc-radio__outer-circle,
  .mdc-radio__inner-circle {
    border-color: ${e=>e.theme.material.color.mode[e.theme.name].radio.default} !important;
  }

  .mdc-radio .mdc-radio__background::before,
  .mdc-radio::before,
  .mdc-radio::after {
    background-color: ${e=>e.theme.material.color.mode[e.theme.name].radio.default} !important;
  }

  &.mdc-form-field > label {
    color: ${e=>e.theme.material.color.mode[e.theme.name].radio.default} !important;
  }
`,l=e=>{const{checked:t,children:n,className:r,disabled:o,onChange:i,readOnly:l,value:c}=e;return a.createElement(s,{onChange:i,checked:t,className:r,disabled:o,readOnly:l,value:c},n)}},1141:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(3),o=n(28);class i{constructor(){this.eventChannel=new o.a,this.count=0,this.lastCount=0}subscribe(e){return this.eventChannel.subscribe(e)}enqueue(e){return Object(r.__awaiter)(this,void 0,void 0,(function*(){const t=this.count++,n=yield e;t<this.lastCount||(this.lastCount=t,this.eventChannel.trigger(n))}))}teardown(){this.eventChannel.teardown()}}},1173:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){return e+"-"+(Math.random()+Math.random()+1).toString(36).substring(2)}},1195:function(e,t,n){"use strict";n.r(t);var r=n(4),o=n(0),i=n(156),a=n(429),s=n(1),l=n.n(s),c=n(1499),u=n(105),d=n(3),p=n(42),h=n(662);const f=Date.now();class m{constructor(e,t){this.reportEvent=e,this.reportEventDuringUnload=t,this.searchStartTime=Date.now(),this.isTimeSpentOnPageLogged=!1}startSearchTimer(){this.searchStartTime=Date.now()}getPageLoadTime(){return f}logTimeSpentOnPage(e){return Object(d.__awaiter)(this,void 0,void 0,(function*(){const t=Object(h.a)();if(!t||this.isTimeSpentOnPageLogged)return;this.isTimeSpentOnPageLogged=!0;const n={clickedLink:!0,secondsOnPage:Math.floor((Date.now()-this.getPageLoadTime())/1e3),token:t};e?this.reportEventDuringUnload("search","successLog",n):this.reportEvent("search","successLog",n),r.A.searchWebService.timeSpentOnClickedResult({seconds:n.secondsOnPage,resultToken:t})}))}logSearchExited(e,t){return Object(d.__awaiter)(this,void 0,void 0,(function*(){if(!this.isValidLogEvent(e))return;const n=this.getSearchData(e);return this.logSearchBoxUsed(n,t),this.logSuccessLog({clickedLink:!1,secondsOnPage:-1,token:void 0}),this.logSearchLog(n)}))}logSearchResultClicked(e,t,n){return Object(d.__awaiter)(this,void 0,void 0,(function*(){if(!this.isValidLogEvent(e))return;const r=this.getSearchData(e,t);return Object(h.b)(r.token),this.logSearchBoxUsed(r,n),this.logSearchLog(r)}))}getSearchData(e,t){return{index:"global",isQuick:!0,query:e.toRequestString(),secondsSpentSearching:Math.floor((Date.now()-this.searchStartTime)/1e3),rank:t&&t.getRank(),isPrivate:t&&t.isPrivate(),url:t&&t.getUrl(),id:t&&t.getId(),token:t&&Object(p.v4)()}}isValidLogEvent(e){return Boolean(e.toRequestString().trim())}logSearchBoxUsed(e,t){const n=Object.assign(Object.assign({},e),{source:"Mercat",isSuggested:t});this.reportEvent("search","searchBoxUsed",n)}logSuccessLog(e){this.reportEvent("search","successLog",e)}logSearchLog(e){return r.A.searchWebService.logSearch(Object.assign({},e))}}var g=n(1496),b=n.n(g);class _{constructor(){this.cache=new b.a({max:50,maxAge:6e5})}set(e){this.cache.set(this.generateCacheKey(e.getSearchQuery(),e.getCurrentPage()),e)}get(e,t=1){return this.cache.get(this.generateCacheKey(e,t))}generateCacheKey(e,t){return`${e.getCacheKey()} page=${t}`}}var v=n(981),y=n(1141),w=n(646),x=n(982),E=n(664);class k{constructor(e,t,n,r,o,i,a){this.searchResultItems=e,this.count=t,this.filters=n,this.categoryFilters=r,this.searchQuery=o,this.page=i,this.totalPages=a}getCurrentPage(){return this.page}getTotalPages(){return this.totalPages}getSearchResultItems(){return this.searchResultItems}getCount(){return this.count}getFilters(){return this.filters}getSearchQuery(){return this.searchQuery}getCategoryFilterGroup(){return this.categoryFilters}}class C{constructor(e,t,n,r){this.recentSearches=e,this.trendingSearches=t,this.recentlyViewed=n,this.popularTags=r}getRecentSearches(){return this.recentSearches}getTrendingSearches(){return this.trendingSearches}getRecentlyViewed(){return this.recentlyViewed}getPopularTags(){return this.popularTags}}class S{constructor(e,t){this.groups=e,this.autocompleteSuggestions=t}getAutocompleteSuggestions(){return this.autocompleteSuggestions}getSearchResultGroups(){return this.groups}}class O{constructor(){this.initialDataChannel=new y.a,this.suggestedResultsChannel=new y.a,this.fullResultsChannel=new y.a}subscribeInitialData(e){return this.initialDataChannel.subscribe(e)}subscribeSuggestedResults(e){return this.suggestedResultsChannel.subscribe(e)}subscribeFullResults(e){return this.fullResultsChannel.subscribe(e)}fetchInitialData(){const e=Promise.all([this.fetchRecentSearches(),this.fetchTrendingSearches(),this.fetchRecentlyViewedItems(),this.fetchPopularTags()]).then(([e,t,n,r])=>new C(e,t,n.map(E.e),Object(E.f)(r)));this.initialDataChannel.enqueue(e)}fetchSuggestedResults(e){const t=e.toRequestString(),n=Promise.all([r.A.suggestedSearchWeb({query:t}),this.fetchAutocompleteSuggestions(t)]).then(([e,t])=>new S(e.groups.filter(e=>e.documents.length).map(E.d),t));this.suggestedResultsChannel.enqueue(n)}fetchFullResults(e,t,n){t=t||1,n=n||20;const o=r.A.fullSearchWeb({query:e.toRequestString(),page:t,resultsPerPage:n,showPrivate:!0}).then(({documents:r,count:o,filters:i,categories:a})=>new k(r.map(E.e),o,Object(E.c)(i),new x.a("tag","in",a.map(e=>w.a.fromCategory(e.name,e.count))),e,t,Math.ceil(o/n)));this.fullResultsChannel.enqueue(o)}recordTimeSpentOnClickedResult(e,t){return Object(d.__awaiter)(this,void 0,void 0,(function*(){return r.A.searchWebService.timeSpentOnClickedResult({seconds:e,resultToken:t})}))}fetchAutocompleteSuggestions(e){return Object(d.__awaiter)(this,void 0,void 0,(function*(){return(yield r.A.searchWebService.getAutoCompleteSuggestions({prefix:e})).autoCompleteSuggestions||[]}))}fetchPopularTags(){return Object(d.__awaiter)(this,void 0,void 0,(function*(){return(yield r.A.searchWebService.getPopularTags({})).popularTags||[]}))}fetchTrendingSearches(){return Object(d.__awaiter)(this,void 0,void 0,(function*(){return(yield r.A.searchWebService.getTrendingSearches({})).trendingSearches.filter(e=>e.trim())||[]}))}fetchRecentlyViewedItems(){return Object(d.__awaiter)(this,void 0,void 0,(function*(){return Promise.resolve([])}))}fetchRecentSearches(){return Object(d.__awaiter)(this,void 0,void 0,(function*(){return(yield r.A.searchWebService.getRecentSearches({userId:null,specificSearchIndices:[]})).recentSearches||[]}))}}var T=n(1075),I=n(28);const P="/search",R="q",j="Search | Kaggle";const N=new class{constructor(){this.channel=new I.a,this.nextSearchIndex=1,this.searchIndexOnInitialize=1,this.onPopstate=e=>{this.conditionallyCaptureWindowState(),this.isCurrentlyOnSearchRoute()&&(e.preventNavigation(),this.channel.trigger(this.getQueryStringFromLocation()))},this.isInitiallyOnSearchRoute=this.isCurrentlyOnSearchRoute(),this.cachedWindowState=this.cacheWindowState(),Object(i.c)(this.onPopstate)}cacheWindowState(){return this.cachedWindowState=this.getWindowState()}restoreWindowState(){document.title===j&&(document.title=this.cachedWindowState.documentTitle),window.location.pathname===P&&Object(i.d)(this.cachedWindowState.historyState,document.title,this.cachedWindowState.locationHref)}isOnSearchStandalonePage(){return this.isInitiallyOnSearchRoute}isCurrentlyOnSearchRoute(){return window.location.pathname===P}setQueryStringInLocation(e){this.syncWindowState(),e=e.trim();let t=P;e&&(e=encodeURIComponent(e).replace(/%20/g,"+"),t+=`?${R}=${e}`),Object(i.d)({searchIndex:this.nextSearchIndex++},document.title,t),document.title=j}getQueryStringFromLocation(){return this.isCurrentlyOnSearchRoute()&&new URL(window.location.href).searchParams.get(R)||""}isOnInitialState(){const e=window.history.state||{};return this.searchIndexOnInitialize===e.searchIndex}initializeSearchPage(e=""){this.isCurrentlyOnSearchRoute()||(this.searchIndexOnInitialize=this.nextSearchIndex,this.cacheWindowState(),this.setQueryStringInLocation(e))}subscribeToSearchBrowserNavigation(e){return this.channel.subscribe(e)}syncWindowState(){document.title!==j&&(this.cachedWindowState.documentTitle=document.title),window.location.pathname!==P&&(this.cachedWindowState.historyState=window.history.state,this.cachedWindowState.locationHref=window.location.href)}getWindowState(){return{locationHref:window.location.href,historyState:window.history.state,documentTitle:document.title}}conditionallyCaptureWindowState(){this.isCurrentlyOnSearchRoute()||this.cacheWindowState()}},$=600,F=`@media (max-width: ${$}px)`;function A(){try{return window.matchMedia(`(max-width: ${$}px)`).matches}catch(e){return console.warn("Error occurred calling window.matchMedia.",e.message),!1}}var M=n(348),L=n(41),D=n(961);const z=l()(D.a)`
  overflow: hidden;
  width: 100%;

  & label {
    overflow: hidden;
  }
`,B=l()(L.b)`
  cursor: pointer;

  && {
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
  }
`,U=o.memo(({searchFilter:e})=>{const t=o.useContext(Xn),n=e.getUserVisibleName();return o.createElement(z,{value:n,checked:t.appliedFilters.hasFilter(e),onChange:n=>{n.target.checked?t.addFilter(e):t.removeFilter(e)}},o.createElement(B,{title:n},n))});var G=n(613);const V=222,H=80,W=l()(L.e)`
  && {
    cursor: pointer;
    color: ${e=>e.theme.material.color.brand.blue[500]};
    margin-left: ${e=>e.theme.material.spacing(11)};
    margin-top: ${e=>e.theme.material.spacing(2)};
  }
`,q=14,K=l.a.div`
  position: relative;
`,Y=l.a.div`
  flex-shrink: 0;
  height: ${q}px;
  width: ${e=>e.width}px;
  border-radius: ${q}px 0 0 ${q}px;
  background-color: ${e=>e.theme.material.color.brand.blue[200]};
`,Q=l()(L.e)`
  position: absolute;
  right: 2px;
  top: -1px;

  && {
    color: ${e=>e.theme.material.color.brand.grey[500]};
  }
`;function X(e,t){t=Math.max(t,50);const n=Math.log(e)/Math.log(t)*H,r=n<q?q:n;return{filterWidth:r,labelWidth:V-r}}function Z({width:e,count:t}){return o.createElement(K,null,o.createElement(Y,{width:e}),o.createElement(Q,null,Object(G.a)(t)))}var J=n(40);const ee=l.a.div`
  display: flex;
  justify-content: space-between;
`,te=l()(L.o)`
  && {
    margin-left: 10px;
    line-height: 22px;
    font-size: 14px;
  }
`,ne=l.a.div`
  display: flex;
  align-items: center;
`,re=l()(J.a)`
  &&& {
    color: ${e=>e.theme.material.color.brand.grey[400]};
  }

  cursor: pointer;
`;function oe({searchFilterGroup:e,className:t}){const n=o.useContext(Xn),r=n.appliedFilters.hasFilterInGroup(e);return o.createElement(ee,{className:t},o.createElement(te,null,e.toFormattedString()),r&&o.createElement(ne,{onClick:()=>{n.modifyFilters([],e.getFilters())}},o.createElement(re,{icon:"close",size:"xsmall"})))}const ie=l.a.div`
  display: flex;
  flex-direction: column;
  width: ${V}px;
`,ae=l.a.div`
  display: flex;
  flex-direction: column;
`,se=l.a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  height: ${e=>e.theme.material.spacing(7)};
`,le=l.a.div`
  width: ${e=>e.width}px;
`,ce=o.memo(({searchFilterGroup:e,maxCount:t})=>{const n=e.getFilters(),[r,i]=o.useState(!1);return e.hasOption()?o.createElement(ie,null,o.createElement(oe,{searchFilterGroup:e}),o.createElement(ae,null,n.slice(0,r?n.length:3).map(e=>{const n=e.getCount()||0,r=X(n,t);return o.createElement(se,{key:e.getName()},o.createElement(le,{width:r.labelWidth},o.createElement(U,{searchFilter:e})),o.createElement(Z,{width:r.filterWidth,count:n}))}),n.length>3&&o.createElement(W,{onClick:()=>i(!r)},r?"Less":"More"))):null});var ue=n(1113);const de=l.a.div`
  display: flex;
  flex-direction: column;
  width: ${V}px;
`,pe=l.a.div`
  display: flex;
  flex-direction: column;
`,he=l.a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  height: ${e=>e.theme.material.spacing(7)};
`,fe=l.a.div`
  width: ${e=>e.width}px;
`,me=l()(ue.a)`
  overflow: hidden;
  width: 100%;

  & label {
    overflow: hidden;
    cursor: pointer;
    text-overflow: ellipsis;
    font-size: 12px;
  }
`,ge=o.memo(({searchFilterGroup:e,maxCount:t})=>{const n=e.getFilters(),[r,i]=o.useState(!1);if(!e.hasOption())return null;const a=o.useContext(Xn);return o.createElement(de,null,o.createElement(oe,{searchFilterGroup:e}),o.createElement(pe,null,n.slice(0,r?n.length:3).map(n=>{const r=n.getUserVisibleName(),i=n.getCount()||0,s=X(i,t);return o.createElement(he,{key:n.getName()},o.createElement(fe,{width:s.labelWidth},o.createElement(me,{value:r,checked:a.appliedFilters.hasFilter(n),onChange:()=>{const t=e.getFilters().filter(e=>e!==n);a.modifyFilters([n],t)}},r)),o.createElement(Z,{width:s.filterWidth,count:i}))}),n.length>3&&o.createElement(W,{onClick:()=>i(!r)},r?"Less":"More")))});var be=n(658);const _e=l()(be.a)`
  && {
    background-color: ${e=>e.isSelected?e.theme.material.color.brand.blue[200]:e.theme.material.color.white};
    border: 1px solid
      ${e=>e.isSelected?e.theme.material.color.brand.blue[200]:e.theme.material.color.brand.grey[200]};
  }
`,ve=l.a.div`
  display: flex;
  align-items: center;
`,ye=l.a.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`,we=l.a.div`
  display: flex;
  align-items: center;
  margin-left: ${e=>e.theme.material.spacing(1)};
  font-size: 12px;
`,xe=o.memo(({searchFilter:e})=>{const t=o.useContext(Xn),n=e.getFormattedCount(),r=t.appliedFilters.hasFilter(e);return o.createElement(_e,{size:"small",isSelected:r,onClick:()=>{r?t.removeFilter(e):t.addFilter(e)}},o.createElement(ve,null,o.createElement(ye,null,e.getUserVisibleName()),n&&o.createElement(we,null,n)))}),Ee=l.a.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`,ke=l.a.div`
  display: flex;
  flex-wrap: wrap;
`,Ce=l.a.div`
  margin: ${e=>e.theme.material.spacing(2)}
    ${e=>e.theme.material.spacing(1)} 0 0;
`,Se=l()(oe)`
  && {
    margin-left: 0;
  }
`,Oe=o.memo(({searchFilterGroup:e})=>e.hasOption()?o.createElement(Ee,null,o.createElement(Se,{searchFilterGroup:e}),o.createElement(ke,null,e.getFilters().map(e=>o.createElement(Ce,{key:e.getName()},o.createElement(xe,{searchFilter:e}))))):null),Te=l.a.div`
  width: ${V}px;
`,Ie=l.a.div`
  padding: ${e=>e.theme.material.spacing(3)} 0;
`,Pe=l()(L.b)`
  && {
    font-size: 12px;
    color: ${e=>e.theme.material.color.brand.grey[400]};
  }

  margin-left: 10px;
  margin-top: ${e=>e.theme.material.spacing(3)};
`,Re=o.memo(({searchFilterGroupList:e})=>{const t=(e=>{let t=0;for(const n of e)if("tag"!==n.getType())for(const e of n.getFilters())t=Math.max(t,e.getCount()||0);return t})(e);return o.createElement(Te,null,!e.length&&o.createElement(Pe,null,"No filters available for these results"),e.map(e=>{switch(e.getType()){case"checkbox":return o.createElement(Ie,{key:e.toFormattedString()},o.createElement(ce,{maxCount:t,searchFilterGroup:e}));case"radio":return o.createElement(Ie,{key:e.toFormattedString()},o.createElement(ge,{searchFilterGroup:e,maxCount:t}));case"tag":return o.createElement(Ie,{key:e.toFormattedString()},o.createElement(Oe,{searchFilterGroup:e}));case"user":return""}}))});var je=n(152);n(64),n(87),n(88);const Ne=({handle:e,onSelect:t,anchorCorner:n,children:r})=>o.createElement(je.c,{handle:e,onSelect:t,anchorCorner:n,children:r});var $e=n(108);const Fe=l.a.div`
  display: flex;
  align-items: center;

  & .mdc-menu {
    width: ${e=>e.theme.material.spacing(50)};

    /* MDC achieves offset using inline style, need !important to override
       via class. */
    left: -${e=>e.theme.material.spacing(15)} !important;
    border-radius: ${e=>e.theme.material.borderRadius.normal};
  }

  & .mdc-list-item {
    font-size: 14px;
    height: ${e=>e.theme.material.spacing(9)};
  }

  & .mdc-list {
    padding: ${e=>e.theme.material.spacing(2)} 0 0 0;
  }
`,Ae=l()(L.b)`
  margin-right: ${e=>e.theme.material.spacing(2)};

  && {
    font-size: 14px;
  }
`,Me=l()(J.a)`
  &&& {
    color: ${e=>e.theme.material.color.brand.grey[700]};
  }
  margin-left: ${e=>e.theme.material.spacing(6)};
`,Le=l.a.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;function De(){const e=o.useContext(Xn),[t,n]=o.useState(w.b[0].getUserVisibleName());return o.useEffect(()=>{for(const t of w.b)if(e.appliedFilters.hasFilter(t))return void n(t.getUserVisibleName());n(w.b[0].getUserVisibleName())}),o.createElement(Fe,null,o.createElement(Ae,null,"Sort by: "),o.createElement(Ne,{anchorCorner:"bottomLeft",onSelect:t=>{const r=w.b[t.detail.index];n(r.getUserVisibleName()),e.modifyFilters(r===w.b[0]?[]:[r],w.b)},handle:o.createElement(Le,null,o.createElement(L.b,{"data-testid":"searchSortDropdownHandle"},t),o.createElement(Me,{icon:"arrow_drop_down",size:"medium"}))},w.b.map((e,t)=>o.createElement($e.a,{key:e.toQueryString()},o.createElement("span",{"data-testid":`searchSortDropdownMenuItem${t}`},e.getUserVisibleName())))))}const ze=l.a.div`
  padding: ${e=>e.theme.material.spacing(3)} 0;
  margin: 0 ${e=>e.theme.material.spacing(3)};
  border-bottom: 1px solid ${e=>e.theme.material.color.brand.grey[200]};
`,Be=l.a.div`
  & .mdc-drawer-scrim {
    /* Match z-index of top level Search component. Z-index potentially needs
       to be added to injected theme, see b/137297765. */
    z-index: 1001;
  }
`,Ue=l()(M.a)`
  && {
    overflow-y: auto;
    top: 0;
    left: 0;
    /* z-index of top level Search component + 1. Z-index potentially needs
       to be added to injected theme, see b/137297765. */
    z-index: 1002;
  }
`;function Ge({isOpen:e,onClose:t,filterGroups:n}){return o.createElement(Be,null,o.createElement(Ue,{open:e,onClose:t},o.createElement(ze,null,o.createElement(De,null)),o.createElement(ze,null,o.createElement(L.b,null,"Filter by")),o.createElement(Re,{searchFilterGroupList:n})))}const Ve=l.a.div`
  min-height: ${e=>e.theme.material.spacing(7)};

  ${F} {
    min-height: 0;
    white-space: nowrap;
  }
`,He=l.a.div`
  display: inline-flex;
  align-items: center;
  background-color: ${e=>e.theme.material.color.brand.blue[200]};
  border-radius: 500px;
  font-size: 12px;
  height: ${e=>e.theme.material.spacing(6)};
  padding: 0 ${e=>e.theme.material.spacing(2)} 0
    ${e=>e.theme.material.spacing(3)};
  color: ${e=>e.theme.material.color.brand.grey[900]};
  margin: 0 ${e=>e.theme.material.spacing(1)}
    ${e=>e.theme.material.spacing(1)} 0;
`,We=l.a.div`
  margin-left: ${e=>e.theme.material.spacing(1)};
  display: flex;
  align-items: center;
`,qe=l()(J.a)`
  &&& {
    color: ${e=>e.theme.material.color.brand.grey[700]};
    font-size: 14px;
    cursor: pointer;
  }
`,Ke=l()(be.a)`
  display: inline-flex;
`;function Ye(){const e=o.useContext(Xn),t=e.appliedFilters.getFilters().filter(e=>!e.isCategoryFilter());return o.createElement(Ve,null,t.map(t=>o.createElement(He,{key:t.toQueryString(),title:t.getUserVisibleGroup()+": "+t.getUserVisibleName()},t.getUserVisibleName(),o.createElement(We,{onClick:()=>e.removeFilter(t)},o.createElement(qe,{icon:"close"})))),t.length>1&&o.createElement(Ke,{onClick:()=>e.modifyFilters([],t)},"Clear Filters"))}const Qe=l()(be.a)`
  &&& {
    border-color: ${e=>e.isSelected&&e.theme.material.color.brand.blue[500]};
    background-color: ${e=>e.isSelected?e.theme.material.color.brand.blue[500]:e.theme.colors.pure.white};
  }
`,Xe=l.a.div`
  display: flex;
  align-items: center;
`,Ze=l()(J.a)`
  &&& {
    color: ${e=>e.isSelected?e.theme.colors.pure.white:e.theme.material.color.text[50]};
    width: ${e=>e.theme.material.spacing(5)};
    margin-left: -2px;
  }
`,Je=l()(L.b)`
  margin-left: ${e=>e.theme.material.spacing(2)};
  color: ${e=>e.isSelected&&e.theme.colors.pure.white};
  position: relative;
  top: 1px;
`,et=l()(L.e)`
  && {
    color: ${e=>e.isSelected?e.theme.colors.pure.white:e.theme.material.color.brand.grey[500]};
  }

  margin-left: ${e=>e.theme.material.spacing(2)};
  position: relative;
  top: 1px;
`;const tt=l.a.div`
  display: flex;
  flex-wrap: wrap;

  ${F} {
    flex-wrap: nowrap;
  }
`,nt=l()((function({searchCategoryFilter:e,className:t}){const n=o.useContext(Xn),r=e.getFormattedCount(),i=n.appliedFilters.hasFilter(e);return o.createElement(Qe,{isSelected:i,onClick:()=>{i?n.removeFilter(e):n.addFilter(e)},className:t},o.createElement(Xe,null,o.createElement(Ze,{icon:i?"check":Object(G.b)(e.getCategory()),size:"small",isSelected:i}),o.createElement(Je,{isSelected:i},e.getUserVisibleName()),r&&o.createElement(et,{isSelected:i},r)))}))`
  margin: ${e=>e.theme.material.spacing(1)+" "+e.theme.material.spacing(2)};
  top: -${e=>e.theme.material.spacing(1)};
  position: relative;
  flex-shrink: 0;

  ${F} {
    margin-right: 0;
  }
`;function rt({searchFilterGroup:e}){const t=e.getFilters();return o.createElement(tt,null,t.map(e=>o.createElement(nt,{searchCategoryFilter:e,key:e.toQueryString()})))}const ot=l.a.div`
  display: flex;
  align-items: center;
`,it=l.a.span`
  margin: 0 ${e=>e.theme.material.spacing(3)};
`,at=l.a.span`
  font-weight: ${e=>e.isCurrentPage?500:400};
  color: ${e=>e.isCurrentPage?e.theme.material.color.text[70]:e.theme.material.color.text[40]};
  font-size: ${e=>e.theme.material.typography.body2.fontSize};
  padding: 0 6px;
  cursor: ${e=>e.isEllipsis?"default":"pointer"};
`,st=l()(J.a)`
  &&& {
    color: ${e=>e.theme.material.color.brand.grey[700]};
  }
`,lt=l.a.button`
  background: ${e=>e.theme.material.color.white};
  color: ${e=>e.disabled?e.theme.material.color.brand.grey[100]:e.theme.material.color.brand.grey[500]};
  cursor: pointer;
  outline: 0;
  border: 1px solid
    ${e=>e.disabled?e.theme.material.color.white:e.theme.material.color.brand.grey[200]};
  border-radius: ${e=>e.theme.material.borderRadius.normal};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${e=>e.theme.material.spacing(10)};
  height: ${e=>e.theme.material.spacing(10)};
  transition: background 100ms linear, color 100ms linear, border 100ms linear;

  ${e=>!e.disabled&&`&:focus {\n      background: ${e.theme.material.color.brand.grey[50]};\n    }\n\n    &:hover {\n      background: ${e.theme.material.color.brand.grey[100]};\n    }`}
`;function ct({currentPage:e,numPages:t,onSelectPage:n}){return o.createElement(ot,null,o.createElement(lt,{disabled:1===e,onClick:()=>{e>1&&n(e-1)}},o.createElement(st,{icon:"chevron_left",size:"small"})),o.createElement(it,null,function(e,t){const n=[];if(t<=6||e<6){for(let e=1;e<=t;e++)n.push(e.toString());return n.slice(0,6)}if(e>=t-3)return["1","…",(t-4).toString(),(t-3).toString(),(t-2).toString(),(t-1).toString(),t.toString()];return["1","…",(e-1).toString(),e.toString(),(e+1).toString(),(e+2).toString(),(e+3).toString()]}(e,t).map((t,r)=>{const i=Number(t),a=!isNaN(i);return o.createElement(at,{key:t+r,isCurrentPage:t===e.toString(),isEllipsis:!a,onClick:()=>{a&&n(i)}},t)})),o.createElement(lt,{disabled:e===t,onClick:()=>{e<t&&n(e+1)}},o.createElement(st,{icon:"chevron_right",size:"small"})))}var ut=n(53),dt=n(38),pt=n(957);const ht=l.a.div`
  display: flex;
  flex-wrap: wrap;
`,ft=l()(L.e)`
  padding-right: ${e=>e.theme.material.spacing(3)};
  display: flex;
  align-items: center;
  white-space: nowrap;
  line-height: 20px;

  && {
    color: ${e=>e.theme.material.color.brand.grey[500]};
  }
`,mt=l()(L.e)`
  padding-right: ${e=>e.theme.material.spacing(3)};

  && {
    color: ${e=>e.theme.material.color.brand.grey[500]};
  }
`,gt=l()(J.a)`
  &&& {
    color: ${e=>e.theme.material.color.brand.grey[500]};
    margin-right: ${e=>e.theme.material.spacing(1)};
  }
`,bt=l.a.div`
  display: flex;
  align-items: center;
`;function _t({items:e}){return o.createElement(ht,null,e.map((e,t)=>o.createElement(bt,{key:e.text},t>0&&o.createElement(mt,null,"•"),o.createElement(ft,{isFirst:0===t},e.icon&&o.createElement(gt,{icon:e.icon,size:"xsmall"}),e.text))))}var vt=n(446);const yt=l.a.a`
  text-decoration: none;
  color: inherit;
`,wt=l.a.div`
  border-radius: ${e=>e.theme.material.borderRadius.normal};
  display: inline-flex;
  flex-direction: column;
  cursor: pointer;
  overflow: hidden;
  padding: ${e=>e.theme.material.spacing(4)};

  &:hover {
    background: ${e=>e.theme.material.color.brand.grey[50]};
  }
`,xt=l()(L.e)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: ${e=>e.theme.material.spacing(1)};
`;function Et({searchResultItem:e,hideName:t}){return o.createElement(yt,{href:e.getUrl()},o.createElement(wt,{"data-testid":"search-avatar"},o.createElement(vt.Avatar,{displayName:e.getAuthorDisplayName(),hideTooltip:!0,thumbnailUrl:e.getImageUrl(),userUrl:e.getUrl(),tier:e.getTier(),width:48}),!t&&o.createElement(xt,null,e.getAuthorDisplayName())))}const kt=l.a.a`
  display: block;
  text-decoration: inherit;
  color: inherit;
`,Ct=l()(dt.a)`
  && {
    display: flex;
    height: auto;
    padding: 0;
    align-items: flex-start;
  }
`,St=l.a.div`
  display: flex;
  padding-top: ${e=>e.theme.material.spacing(4)};
  width: ${e=>e.theme.material.spacing(19)};
  flex-shrink: 0;
`,Ot=l.a.img`
  width: 48px;
  height: 48px;
  border-radius: ${e=>e.theme.material.borderRadius.normal};
  margin-right: ${e=>e.theme.material.spacing(7)};
`,Tt=l.a.div`
  padding: ${e=>e.theme.material.spacing(4)} 0;
  display: flex;
  flex-direction: column;
  ${e=>!e.hideBottomBorder&&`border-bottom: 1px solid ${e.theme.material.color.brand.grey[200]}`};
  flex-grow: 1;
  min-height: ${e=>e.theme.material.spacing(15)};
`,It=l()(L.e)`
  && {
    display: flex;
    align-items: center;
    color: ${e=>e.theme.material.color.brand.grey[500]};
  }
`,Pt=l()(J.a)`
  &&& {
    color: ${e=>e.theme.material.color.brand.grey[500]};
    margin-right: ${e=>e.theme.material.spacing(2)};
  }
`,Rt=l()(L.e)`
  && {
    color: ${e=>e.theme.material.color.brand.grey[500]};
  }

  && .search-matching-text {
    color: ${e=>e.theme.material.color.brand.blue[900]};
    font-weight: 500;
  }
`,jt=l.a.div`
  margin: ${e=>e.theme.material.spacing(1)} 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`,Nt=l()(L.o)`
  && {
    color: ${e=>e.theme.material.color.brand.grey[900]};
  }
`;function $t({searchResultItem:e,hideBottomBorder:t=!1}){const n=o.useContext(Xn),r=e.getTitle(),i=e.getSubtitle(),a=e.getFullSubheaderItems(),s=e.getMatchingTextHtml();return o.createElement(kt,{"data-search-enable-back":"true",href:e.getUrl(),onClick:()=>{n.logSearchResultClicked(e)}},o.createElement(Ct,{className:Qn},o.createElement(St,null,e instanceof pt.a?o.createElement(Et,{searchResultItem:e,hideName:!0}):o.createElement(Ot,{src:e.getImageUrl()})),o.createElement(Tt,{hideBottomBorder:t},o.createElement(jt,null,o.createElement(It,null,o.createElement(Pt,{icon:e.getIconName(),size:"xsmall"}),e.getUserVisibleCategory())),r&&o.createElement(jt,null,o.createElement(Nt,null,r)),i&&o.createElement(jt,null,o.createElement(Rt,null,i)),a.length>0&&o.createElement(jt,null,o.createElement(_t,{items:a})),s&&o.createElement(jt,null,Object(ut.n)(o.createElement(Rt,null),s)))))}const Ft=l.a.div`
  padding: 0 ${e=>e.theme.material.spacing(6)};

  ${F} {
    padding: 0;
  }
`,At=l.a.div`
  margin-top: ${e=>e.theme.material.spacing(10)};

  ${F} {
    margin: 0;
  }
`,Mt=l.a.div`
  display: flex;
  margin-top: ${e=>e.theme.material.spacing(9)};

  ${F} {
    margin-top: ${e=>e.theme.material.spacing(4)};
  }
`,Lt=l.a.div`
  width: ${V};
  flex-shrink: 0;
  margin-right: ${e=>e.theme.material.spacing(35)};

  /**
   * One-off media query to collapse the space between the left and right
   * columns. Existing breakpoints didn't look correct.
   */
  @media (max-width: 950px) {
    margin-right: ${e=>e.theme.material.spacing(4)};
  }

  ${F} {
    display: none;
  }
`,Dt=l.a.div`
  margin-top: ${e=>e.theme.material.spacing(4)};

  ${F} {
    overflow-x: auto;
    margin-top: ${e=>e.theme.material.spacing(2)};
    border-bottom: 1px solid ${e=>e.theme.material.color.brand.grey[200]};
  }
`,zt=l.a.div`
  margin-left: -6px;
`,Bt=l.a.div`
  margin-left: 2px;
`,Ut=l()(L.a)`
  ${F} {
    display: none;
  }
`,Gt=l()(L.b)`
  ${F} {
    margin-left: ${e=>e.theme.material.spacing(4)};
  }
`,Vt=l.a.div`
  margin-left: ${e=>e.theme.material.spacing(14)};

  ${F} {
    display: none;
  }
`,Ht=l.a.div`
  margin-top: ${e=>e.theme.material.spacing(4)};
  padding-top: ${e=>e.theme.material.spacing(1)};
  margin-left: -10px;
  border-top: 1px solid ${e=>e.theme.material.color.brand.grey[200]};
`,Wt=l.a.div`
  margin-top: ${e=>e.theme.material.spacing(3)};
  border-top: 1px solid ${e=>e.theme.material.color.brand.grey[200]};
  border-bottom: 1px solid ${e=>e.theme.material.color.brand.grey[200]};
`,qt=l.a.div`
  flex-grow: 1;
  max-width: ${e=>e.theme.material.spacing(200)};
`,Kt=l.a.div`
  display: flex;
  align-items: center;
  width: 100%;

  ${F} {
    justify-content: space-between;
  }
`,Yt=l.a.div`
  display: none;

  ${F} {
    display: inline-flex;
  }
`,Qt=l()(be.a)`
  margin-right: ${e=>e.theme.material.spacing(2)};

  &&&& {
    border-radius: ${e=>e.theme.material.borderRadius.normal};
  }
`,Xt=l.a.div`
  margin: ${e=>e.theme.material.spacing(4)} 0;
`,Zt=l.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${e=>e.theme.material.spacing(150)};
  margin: auto;
  margin-top: ${e=>e.theme.material.spacing(18)};
`,Jt=l()(L.a)`
  margin-bottom: ${e=>e.theme.material.spacing(10)};
  text-align: center;
`,en=l()(L.b)`
  max-width: ${e=>e.theme.material.spacing(100)};
  text-align: center;

  && {
    line-height: 22px;
  }
`,tn=l.a.img`
  width: 220px;
  height: 196px;
  margin-bottom: ${e=>e.theme.material.spacing(10)};
`,nn=l.a.a`
  color: ${e=>e.theme.material.color.brand.blue[500]};
`,rn=l()(L.b)`
  margin-top: ${e=>e.theme.material.spacing(7)};
  margin-bottom: ${e=>e.theme.material.spacing(4)};
`,on=o.memo(({searchFullResult:e})=>{const t=o.useContext(Xn),n=e.getSearchResultItems(),r=n.length>0,i=e.getSearchQuery().toInputString(),a=e.getCount(),s=1===a?"Result":"Results";return o.createElement(Ft,{"data-testid":"searchFullResultsPage"},o.createElement(At,null,o.createElement(Ut,null,i?`Searching for ${i} within`:"Searching on everything within"),o.createElement(Dt,null,o.createElement(zt,null,o.createElement(rt,{searchFilterGroup:e.getCategoryFilterGroup()})),o.createElement(Bt,null,o.createElement(Ye,null)))),r&&o.createElement(Mt,null,o.createElement(Lt,null,o.createElement(L.b,null,"Filter by"),o.createElement(Ht,null,o.createElement(Re,{searchFilterGroupList:e.getFilters()}))),n.length>0&&o.createElement(qt,null,o.createElement(Kt,null,o.createElement(Gt,null,`${Object(G.a)(a)} ${s}`),o.createElement(Vt,null,o.createElement(De,null)),o.createElement(Yt,null,o.createElement(Qt,{leadingIcon:"filter_list",onClick:()=>{t.showFilterDrawer()}},"Filters"))),o.createElement(Wt,null,n.map((e,t)=>o.createElement($t,{searchResultItem:e,key:e.getId(),hideBottomBorder:t===n.length-1}))),o.createElement(rn,null,"How was your search?"," ",o.createElement(nn,{href:"https://google.qualtrics.com/jfe/form/SV_3f4EtcDXkeLG11z",target:"_blank"},"Let us know.")),e.getTotalPages()>1&&o.createElement(Xt,null,o.createElement(ct,{currentPage:e.getCurrentPage(),numPages:e.getTotalPages(),onSelectPage:n=>{t.queryFullResult(e.getSearchQuery(),n),t.scrollToTop()}})))),!n.length&&o.createElement(Zt,null,o.createElement(Jt,null,'We came up empty searching for "',e.getSearchQuery().toInputString(),'".'),o.createElement(tn,{src:"/static/images/community/no-search-results.jpg"}),o.createElement(en,null,"Perhaps try a broader search term, or a different keyword. Have feedback?"," ",o.createElement(nn,{href:"https://google.qualtrics.com/jfe/form/SV_3f4EtcDXkeLG11z",target:"_blank"},"Let us know."))))}),an=l.a.div``,sn=l()(dt.a)`
  && {
    min-height: 56px;
    padding: 0;
    height: auto;
    box-sizing: border-box;
  }
`,ln=l.a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  flex-shrink: 0;
`,cn=l()(J.a)`
  &&& {
    color: ${e=>e.theme.material.color.text[50]};
  }
`,un=l.a.img`
  width: 24px;
  height: 24px;
  border-radius: ${e=>e.theme.material.borderRadius.normal};
`,dn=l()(L.o)`
  && {
    line-height: 24px;
    color: ${e=>e.theme.material.color.brand.grey[900]};
  }

  margin-right: ${e=>e.theme.material.spacing(4)};
`,pn=l.a.div`
  align-items: center;
  border-bottom: 1px solid ${e=>e.theme.material.color.brand.grey[200]};
  box-sizing: border-box;
  display: flex;
  flex-grow: 1;
  height: 100%;
  min-height: 56px;
  flex-wrap: wrap;
  padding: ${e=>e.theme.material.spacing(3)} 0;

  ${F} {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`,hn=l.a.div`
  /* Prevent second row from displaying on mobile if items wrap. */
  ${F} {
    height: ${e=>e.theme.material.spacing(5)};
    overflow-y: hidden;
  }
`;function fn({header:e,icon:t,imageUrl:n,subheaderItems:r=[],children:i,query:a}){const s=o.useContext(Xn);return o.createElement(an,{onClick:()=>{a&&s.queryFullResult(a)}},o.createElement(sn,{className:Qn},o.createElement(ln,null,t&&o.createElement(cn,{icon:t}),n&&o.createElement(un,{src:n})),o.createElement(pn,null,e&&o.createElement(dn,null,e),!!r.length&&o.createElement(hn,null,o.createElement(_t,{items:r})),i)))}const mn=l.a.a`
  display: block;
  text-decoration: inherit;
  color: inherit;
`;function gn({searchResultItem:e,hideItemCategory:t}){const n=o.useContext(Xn);return o.createElement(mn,{href:e.getUrl(),onClick:()=>{n.logSearchResultClicked(e)}},o.createElement(fn,{imageUrl:e.getImageUrl(),header:e.getTitle(),subheaderItems:t?e.getFullSubheaderItems():e.getCondensedSubheaderItems()}))}var bn=n(991);const _n=l.a.div`
  align-items: center;
  display: flex;
`,vn=l()(L.b)`
  color: ${e=>e.theme.material.color.text[100]};
`,yn=l()(L.e)`
  && {
    color: ${e=>e.theme.material.color.brand.grey[500]};
  }

  margin-left: ${e=>e.theme.material.spacing(2)};
`,wn=l()(be.a)`
  &&&.mdc-chip {
    box-sizing: border-box;
  }
`;function xn({tagFilterGroup:e}){const t=o.useContext(Xn);return o.createElement(bn.a,null,e.getFilters().map(e=>{const n=e.getCount();return o.createElement(wn,{key:e.toQueryString(),onClick:n=>{t.addFilter(e),n.stopPropagation()}},o.createElement(_n,null,o.createElement(vn,null,e.getName()),n&&o.createElement(yn,null,n)))}))}const En=l.a.div`
  display: flex;
  flex-direction: column;
`,kn=l()(L.b)`
  height: auto;
  padding: ${e=>`${e.theme.material.spacing(1)} ${e.theme.material.spacing(5)}`};
  margin: ${e=>e.theme.material.spacing(7)} 0
    ${e=>e.theme.material.spacing(4)};
`,Cn=l.a.div`
  display: flex;
  flex-wrap: wrap;
`,Sn=l.a.div`
  display: inline-block;
  margin: ${e=>e.theme.material.spacing(1)}
    ${e=>e.theme.material.spacing(1)} ${e=>e.theme.material.spacing(1)} 0;
  border-radius: 500px;
  padding: 1px ${e=>e.theme.material.spacing(2)};
  background: ${e=>e.theme.material.color.brand.blue[200]};
`,On=l.a.div``,Tn=l.a.div`
  padding-left: ${e=>e.theme.material.spacing(3)};
`,In=o.memo(({searchInitialData:e})=>{const t=e.getTrendingSearches(),n=e.getPopularTags(),r=n.getFilters();return o.createElement(En,{"data-testid":"searchInitialPage"},e.getRecentSearches().map(e=>{const t=new T.a(e);t.convertFiltersToUiFilters();const n=t.getFilters();return o.createElement(fn,{key:t.toRequestString(),header:t.toInputString(),query:t,icon:"history"},o.createElement(Cn,null,n.map(e=>{const t=`${e.getUserVisibleGroup()}: ${e.getUserVisibleName()}`;return o.createElement(Sn,{key:t,title:t},o.createElement(L.e,null,e.getUserVisibleName()))})))}),e.getRecentlyViewed().map(e=>o.createElement(gn,{key:e.getId(),searchResultItem:e})),!!t.length&&o.createElement(On,null,o.createElement(kn,null,"Trending Searches"),t.map(e=>o.createElement(fn,{key:e,header:e,query:new T.a(e),icon:"trending_up"}))),!!r.length&&o.createElement(On,null,o.createElement(kn,null,"Popular Tags"),o.createElement(Tn,null,o.createElement(xn,{tagFilterGroup:n}))))});var Pn=n(103);const Rn=l.a.div`
  background: ${e=>e.theme.material.color.white};
  border-bottom: 1px solid ${e=>e.theme.material.color.brand.grey[200]};
  display: flex;
  height: ${56}px;
  justify-content: space-between;
  padding: 0 ${e=>e.theme.material.spacing(1)};
  flex-shrink: 0;
  width: 100%;
  box-sizing: border-box;
`,jn=l()(Pn.a)`
  position: relative;
  left: ${e=>e.theme.material.spacing(3)};
`,Nn=l.a.form`
  display: flex;
  flex-grow: 1;
`,$n=l.a.input`
  && {
    ${e=>e.theme.font.main.family};
  }

  border: 0;
  flex-grow: 1;
  font-size: ${e=>e.theme.material.typography.h6.fontSize};
  font-weight: ${e=>e.theme.material.typography.h6.fontWeight};
  color: ${e=>e.theme.material.color.text[70]};
  height: 100%;
  margin: 0 0 0 ${e=>e.theme.material.spacing(2)};
  outline: 0;
  padding: 0;
`,Fn=l.a.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  height: 100%;
`,An=l.a.div`
  align-items: center;
  display: flex;
`;function Mn({value:e,onChange:t,onBack:n,onSearch:r,onClose:i}){return o.createElement(Rn,null,o.createElement(Fn,null,o.createElement(Pn.a,{icon:"arrow_back",onClick:()=>n()}),o.createElement(Nn,{"data-testid":"searchInputBarFormElement",onSubmit:e=>{e.preventDefault(),r()}},o.createElement($n,{"data-testid":"searchInputBarInputElement",className:Qn,value:e,onChange:e=>t(e.target.value),type:"text",size:1,"aria-label":"Search"}))),o.createElement(An,null,o.createElement(jn,{icon:"search",onClick:()=>r()}),o.createElement(Pn.a,{icon:"close",onClick:()=>i()})))}var Ln=n(575);const Dn=l()(J.a)``,zn=l()(dt.a)`
  && {
    height: ${e=>e.theme.material.spacing(9)};
    padding: ${e=>`0 ${e.theme.material.spacing(5)}`};
    justify-content: space-between;
  }

  && ${Dn} {
    display: none;
  }

  &&:hover ${Dn} {
    display: block;
  }
`,Bn=l()(L.e)`
  display: inline-block;
  margin-left: ${e=>e.theme.material.spacing(3)};

  && {
    color: ${e=>e.theme.material.color.brand.grey[500]};
  }
`,Un=l()(L.b)``,Gn=l.a.div`
  &:hover ${Un} {
    color: ${e=>e.theme.material.color.brand.blue[500]};
  }

  &&:hover ${Dn} {
    color: ${e=>e.theme.material.color.brand.blue[500]};
  }

  &:hover .mdc-list-item__meta {
    color: ${e=>e.theme.material.color.brand.blue[500]};
  }

  &:hover ${Bn} {
    color: ${e=>e.theme.material.color.brand.blue[500]};
  }
`;function Vn({text:e,count:t,onClick:n}){return o.createElement(Gn,{onClick:n},o.createElement(zn,{className:Qn},o.createElement(Un,null,e,t&&o.createElement(Bn,null,"View all ",Object(G.a)(t))),o.createElement(Dn,{icon:"arrow_forward",size:"small"})))}const Hn=l.a.div`
  display: ${e=>e.isUserRow&&"flex"};
  margin-left: ${e=>e.isUserRow&&e.theme.material.spacing(12)};
`;function Wn({searchResultGroup:e}){const t=e.getCategory(),n=o.useContext(Xn);return o.createElement("div",null,o.createElement(Vn,{text:Object(E.b)(t),count:e.getCount(),onClick:()=>{n.addFilter(w.a.fromCategory(t))}}),o.createElement(Hn,{isUserRow:e.getCategory()===Ln.a.USER},e.getItems().map(e=>e instanceof pt.a?o.createElement(Et,{searchResultItem:e}):o.createElement(gn,{key:e.getId(),searchResultItem:e,hideItemCategory:!0}))))}const qn=l.a.div`
  display: flex;
  flex-direction: column;
`,Kn=l.a.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin-top: ${e=>e.theme.material.spacing(4)};
`,Yn=o.memo(({searchSuggestedResult:e,query:t})=>o.createElement(qn,{"data-testid":"searchSuggestionsPage"},o.createElement(fn,{icon:"search",header:`View all results for "${t.toInputString()}"`,query:t}),e.getAutocompleteSuggestions().filter(e=>e!==t.toInputString()).map(e=>o.createElement(fn,{header:e,query:new T.a(e),icon:"search",key:e})),e.getSearchResultGroups().map(e=>o.createElement(Kn,{key:e.getCategory()},o.createElement(Wn,{searchResultGroup:e}))))),Qn="searchTarget",Xn=o.createContext({appliedFilters:new v.a([]),queryFullResult(e,t,n){},addFilter(e){},removeFilter(e){},modifyFilters(e,t){},showFilterDrawer(){},scrollToTop(){},logSearchResultClicked(e){}}),Zn=165,Jn=l.a.div`
  transform: ${e=>!e.isPermanentlyOpen&&"scaleX(0.8)"};
  width: 100%;
  margin: auto;
  transition: transform ${Zn}ms cubic-bezier(0, 0, 0.2, 1);
  will-change: transform;

  &.show-enter {
    transform: scaleX(0.8);
  }

  &.show-enter-active,
  &.show-enter-done,
  &.show-exit {
    transform: scaleX(1);
  }
`,er=l.a.div`
  display: ${e=>e.isPermanentlyOpen?"flex":"none"};
  opacity: ${e=>!e.isPermanentlyOpen&&"0"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  /**
   * Site header in mobile view is z-index 1000, Mercat needs to appear on top
   * of it. Manually adding 1001 z-index for now, but need to see whether it
   * should be added to the styled-components theme.ts file.
   * TODO(b/137297765): Investigate
   */
  z-index: 1001; /* Keep in sync with Loading component z-index */
  transition: opacity ${Zn}ms linear;
  flex-direction: column;
  align-items: center;
  will-change: opacity;
  flex-grow: 1;

  &.show-enter {
    display: flex;
  }

  &.show-enter-active,
  &.show-enter-done,
  &.show-exit {
    display: flex;
    opacity: 1;
  }

  &.show-exit-active {
    display: flex;
    opacity: 0;
  }
`,tr=l.a.div`
  background: ${e=>e.theme.material.color.white};
  flex-grow: 1;
  overflow-y: auto;
  width: 100%;
  display: flex;
`,nr=l.a.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  top: ${56}px;
  height: calc(100vh - ${56}px);
  z-index: 1001; /* Keep in sync with Wrapper component z-index */
`,rr=l.a.div`
  width: 100%;
  height: 100%;
  background-color: ${e=>e.theme.colors.pure.white};
  opacity: 0.6;
  position: absolute;
  z-index: 1;
`,or=l()(a.a)`
  && {
    z-index: 2;
    position: relative;
  }
`,ir=l.a.div`
  opacity: ${e=>!e.isPermanentlyOpen&&"0"};
  transform: ${e=>!e.isPermanentlyOpen&&"translateY(-45px)"};

  transition: transform ${Zn}ms cubic-bezier(0, 0, 0.2, 1),
    opacity ${Zn}ms linear;
  transition-delay: ${Zn}ms;
  will-change: transform, opacity;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  position: relative;
  width: 100%;

  &.show-enter {
    opacity: 0;
    transform: translateY(-45px);
  }

  &.show-enter-active,
  &.show-enter-done,
  &.show-exit,
  &.show-exit-active {
    opacity: 1;
    transform: translateY(0);
  }
`;var ar;!function(e){e[e.INITIAL=0]="INITIAL",e[e.SUGGESTED=1]="SUGGESTED",e[e.FULL=2]="FULL"}(ar||(ar={}));class sr extends o.Component{constructor(e){super(e),this.unsubscribeCallbacks=[],this.containerRef=o.createRef(),this.contentRef=o.createRef(),this.fullResultCache=new _,this.isLastSearchSuggested=!1,this.queryFullResult=(e,t,n)=>{if(!e.toRequestString())return void(this.state.page!==ar.INITIAL&&this.goToInitialPage());this.isLastSearchSuggested=!1;const r=this.fullResultCache.get(e,t);this.setState({page:ar.FULL,query:e,fullResult:r||this.state.fullResult,isFullSearchRequested:!r,suggestedResult:void 0}),r||this.state.searchManager.fetchFullResults(e,t),n||N.setQueryStringInLocation(e.toRequestString()),this.setLastQuery(e)},this.addFilter=e=>{const t=this.state.query;t.addFilter(e),this.queryFullResult(t)},this.removeFilter=e=>{const t=this.state.query;t.removeFilter(e),this.queryFullResult(t)},this.modifyFilters=(e,t)=>{const n=this.state.query;t.forEach(e=>n.removeFilter(e)),e.forEach(e=>n.addFilter(e)),this.queryFullResult(n)},this.showFilterDrawer=()=>{this.setState({isFilterDrawerOpen:!0})},this.popstateListener=e=>{this.getIsVisible()&&!N.isCurrentlyOnSearchRoute()&&(e.preventNavigation(),this.exitSearchModal())},this.scrollToTop=()=>{const e=this.contentRef.current;e&&(e.scrollTop=0)},this.windowKeydownListener=e=>{if(this.getIsVisible())switch(e.keyCode){case 27:return void this.props.onHide();case 40:return void(this.isActiveElementSearchTarget()&&(e.preventDefault(),this.setFocusOnNextTarget()));case 38:return void(this.isActiveElementSearchTarget()&&(e.preventDefault(),this.setFocusOnPreviousTarget()));case 13:this.isActiveElementSearchTarget()&&(document.activeElement.click(),this.focusInputElement())}},this.logSearchResultClicked=e=>{this.analytics.logSearchResultClicked(this.state.query,e,this.state.page===ar.SUGGESTED)},this.logTimeSpentOnPage=()=>{this.analytics.logTimeSpentOnPage(!1)},this.logTimeSpentOnPageBeforeUnload=()=>{this.analytics.logTimeSpentOnPage(!0)},this.onSearchBrowserNavigation=e=>{if(e){const t=new T.a(e);t.convertFiltersToUiFilters(),this.queryFullResult(t,void 0,!0)}else this.goToInitialPage();this.props.isVisible||this.props.onShow()};const t=e.query||N.getQueryStringFromLocation(),n=new T.a(t);this.state={page:t?ar.FULL:ar.INITIAL,searchManager:e.searchManager||new O,initialData:void 0,suggestedResult:void 0,fullResult:void 0,isFilterDrawerOpen:!1,isMobileBreakpoint:A(),isQueryTimerStarted:!1,isFullSearchRequested:!1,query:n,context:{appliedFilters:n.getFilterSet(),queryFullResult:this.queryFullResult,addFilter:this.addFilter,removeFilter:this.removeFilter,modifyFilters:this.modifyFilters,showFilterDrawer:this.showFilterDrawer,scrollToTop:this.scrollToTop,logSearchResultClicked:this.logSearchResultClicked}},this.windowResizeHandler=Object(u.b)(200,this.windowResizeHandler).bind(this),this.fetchSuggestedResults=Object(u.a)(250,this.fetchSuggestedResults).bind(this);const{analyticsClient:r}=this.props.clientsContext.legacyClients;this.analytics=new m(r.logger.report,r.logger.reportImmediate)}componentDidMount(){this.unsubscribeCallbacks.push(this.state.searchManager.subscribeInitialData(e=>{this.setState({initialData:e})})),this.unsubscribeCallbacks.push(this.state.searchManager.subscribeSuggestedResults(e=>{this.setState({suggestedResult:e})})),this.unsubscribeCallbacks.push(this.state.searchManager.subscribeFullResults(e=>{this.fullResultCache.set(e),this.setState({fullResult:e,isFullSearchRequested:!1})})),this.unsubscribeCallbacks.push(N.subscribeToSearchBrowserNavigation(this.onSearchBrowserNavigation)),window.addEventListener("resize",this.windowResizeHandler),window.addEventListener("keydown",this.windowKeydownListener),Object(i.c)(this.popstateListener),this.registerTimeSpentOnPageListeners(),this.state.searchManager.fetchInitialData(),this.state.query.toRequestString()&&this.queryFullResult(this.state.query,void 0,!0),this.props.isPermanentlyOpen&&this.togglePageScroll(!1)}setLastQuery(e){e.toRequestString()&&(this.lastNonEmptyQuery=e)}componentDidUpdate(e){if(!e.isVisible&&this.getIsVisible()&&(this.focusInputElement(),this.togglePageScroll(!1),N.initializeSearchPage(this.state.query.toRequestString()),this.analytics.startSearchTimer(),this.setLastQuery(this.state.query)),e.query!==this.props.query&&this.props.query){const e=new T.a(this.props.query);this.setState({query:e}),this.queryFullResult(e)}e.isVisible&&!this.getIsVisible()&&this.togglePageScroll(!0),!this.state.isMobileBreakpoint&&this.state.isFilterDrawerOpen&&this.setState({isFilterDrawerOpen:!1});const t=this.state.query.getFilterSet();this.state.context.appliedFilters.equals(t)||this.setState({context:Object.assign(Object.assign({},this.state.context),{appliedFilters:t})})}getIsVisible(){return this.props.isVisible||this.getIsPermanentlyOpen()}togglePageScroll(e){document.documentElement.style.overflow=e?"":"hidden"}componentWillUnmount(){window.removeEventListener("resize",this.windowResizeHandler),window.removeEventListener("keydown",this.windowKeydownListener),Object(i.e)(this.popstateListener),this.unregisterTimeSpentOnPageListeners(),this.unsubscribeCallbacks.forEach(e=>e()),this.togglePageScroll(!0)}focusInputElement(){const e=this.containerRef.current;if(e){const t=e.querySelector("input");t&&(t.focus(),t.select())}}getIsPermanentlyOpen(){return this.props.isPermanentlyOpen||!1}render(){return o.createElement(Xn.Provider,{value:this.state.context},o.createElement(c.CSSTransition,{in:this.getIsVisible(),timeout:Zn,classNames:"show"},o.createElement(er,{"data-testid":"searchContainer",ref:this.containerRef,isPermanentlyOpen:this.getIsPermanentlyOpen()},o.createElement(c.CSSTransition,{in:this.getIsVisible(),timeout:Zn,classNames:"show"},this.getIsVisible()?o.createElement(Jn,{isPermanentlyOpen:this.getIsPermanentlyOpen()},o.createElement(Mn,{value:this.state.query.toInputString(),onChange:e=>{this.startQueryTimer(),e.trim()?(this.isLastSearchSuggested=!0,this.goToSuggestedResultsPage(e)):this.goToInitialPage()},onBack:()=>{N.isOnInitialState()?this.exitSearchModal():window.history.back()},onSearch:()=>{this.isLastSearchSuggested=!1,this.queryFullResult(this.state.query)},onClose:()=>{this.exitSearchModal()}})):o.createElement("div",null)),o.createElement(tr,{ref:this.contentRef},o.createElement(c.CSSTransition,{in:this.getIsVisible(),timeout:2*Zn,classNames:"show"},this.getIsVisible()?o.createElement(ir,{isPermanentlyOpen:this.getIsPermanentlyOpen()},(()=>this.state.page===ar.INITIAL&&this.state.initialData?o.createElement(In,{searchInitialData:this.state.initialData}):this.state.page===ar.SUGGESTED&&this.state.suggestedResult?o.createElement(Yn,{query:this.state.query,searchSuggestedResult:this.state.suggestedResult}):this.state.page===ar.FULL&&this.state.fullResult?o.createElement(on,{searchFullResult:this.state.fullResult}):"")()):o.createElement("div",null))))),this.getIsVisible()&&o.createElement(Ge,{isOpen:this.state.isFilterDrawerOpen,onClose:()=>this.setState({isFilterDrawerOpen:!1}),filterGroups:this.state.fullResult&&this.state.fullResult.getFilters()||[]}),this.state.isFullSearchRequested&&this.state.page===ar.FULL&&!this.state.isFilterDrawerOpen&&this.getIsVisible()&&o.createElement(nr,null,o.createElement(or,{size:"xlarge"}),o.createElement(rr,null)))}startQueryTimer(){this.state.isQueryTimerStarted||(this.setState({isQueryTimerStarted:!0}),this.analytics.startSearchTimer(),this.logTimeSpentOnPage())}windowResizeHandler(){const e=A();this.state.isMobileBreakpoint!==e&&this.setState({isMobileBreakpoint:e})}fetchSuggestedResults(e){this.state.searchManager.fetchSuggestedResults(e)}goToSuggestedResultsPage(e){const t=new T.a(e);this.setState({page:ar.SUGGESTED,fullResult:void 0,query:t}),this.fetchSuggestedResults(t),this.setLastQuery(t)}goToInitialPage(){this.state.searchManager.fetchInitialData(),this.setState({page:ar.INITIAL,query:new T.a(""),suggestedResult:void 0,fullResult:void 0})}isActiveElementSearchTarget(){return document.activeElement&&document.activeElement.classList.contains(Qn)||!1}getFocusableElements(){return this.containerRef&&this.containerRef.current&&this.containerRef.current.getElementsByClassName(Qn)||[]}setFocusOnNextTarget(){const e=document.activeElement,t=this.getFocusableElements();let n=!1;for(let r=0;r<t.length-1;r++)if(t[r]===e){t[r+1].focus(),n=!0;break}n||t[0].focus()}setFocusOnPreviousTarget(){const e=document.activeElement,t=this.getFocusableElements();let n=!1;for(let r=1;r<t.length;r++)if(t[r]===e){t[r-1].focus(),n=!0;break}n||t[t.length-1].focus()}exitSearchModal(){this.props.onHide(),N.restoreWindowState(),this.logSearchExited()}logSearchExited(){this.lastNonEmptyQuery&&this.analytics.logSearchExited(this.lastNonEmptyQuery,this.isLastSearchSuggested),this.lastNonEmptyQuery=void 0}registerTimeSpentOnPageListeners(){window.addEventListener("unload",this.logTimeSpentOnPageBeforeUnload),this.logTimeSpentOnPageTimeout=window.setTimeout(this.logTimeSpentOnPage,6e4)}unregisterTimeSpentOnPageListeners(){clearTimeout(this.logTimeSpentOnPageTimeout)}}function lr(e){const t=o.useContext(r.b);return o.createElement(sr,Object.assign({clientsContext:t},e))}n.d(t,"SearchContainer",(function(){return lr}))},1371:function(e,t,n){"use strict";t.__esModule=!0,t.default=t.EXITING=t.ENTERED=t.ENTERING=t.EXITED=t.UNMOUNTED=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(10)),o=s(n(0)),i=s(n(21)),a=n(610);n(1372);function s(e){return e&&e.__esModule?e:{default:e}}var l="unmounted";t.UNMOUNTED=l;var c="exited";t.EXITED=c;var u="entering";t.ENTERING=u;var d="entered";t.ENTERED=d;t.EXITING="exiting";var p=function(e){var t,n;function r(t,n){var r;r=e.call(this,t,n)||this;var o,i=n.transitionGroup,a=i&&!i.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?a?(o=c,r.appearStatus=u):o=d:o=t.unmountOnExit||t.mountOnEnter?l:c,r.state={status:o},r.nextCallback=null,r}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.getChildContext=function(){return{transitionGroup:null}},r.getDerivedStateFromProps=function(e,t){return e.in&&t.status===l?{status:c}:null},a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==u&&n!==d&&(t=u):n!==u&&n!==d||(t="exiting")}this.updateStatus(!1,t)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},a.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=i.default.findDOMNode(this);t===u?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===c&&this.setState({status:l})},a.performEnter=function(e,t){var n=this,r=this.props.enter,o=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,i=this.getTimeouts(),a=o?i.appear:i.enter;t||r?(this.props.onEnter(e,o),this.safeSetState({status:u},(function(){n.props.onEntering(e,o),n.onTransitionEnd(e,a,(function(){n.safeSetState({status:d},(function(){n.props.onEntered(e,o)}))}))}))):this.safeSetState({status:d},(function(){n.props.onEntered(e)}))},a.performExit=function(e){var t=this,n=this.props.exit,r=this.getTimeouts();n?(this.props.onExit(e),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(e),t.onTransitionEnd(e,r.exit,(function(){t.safeSetState({status:c},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:c},(function(){t.props.onExited(e)}))},a.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},a.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},a.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var r=null==t&&!this.props.addEndListener;e&&!r?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},a.render=function(){var e=this.state.status;if(e===l)return null;var t=this.props,n=t.children,r=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["children"]);if(delete r.in,delete r.mountOnEnter,delete r.unmountOnExit,delete r.appear,delete r.enter,delete r.exit,delete r.timeout,delete r.addEndListener,delete r.onEnter,delete r.onEntering,delete r.onEntered,delete r.onExit,delete r.onExiting,delete r.onExited,"function"==typeof n)return n(e,r);var i=o.default.Children.only(n);return o.default.cloneElement(i,r)},r}(o.default.Component);function h(){}p.contextTypes={transitionGroup:r.object},p.childContextTypes={transitionGroup:function(){}},p.propTypes={},p.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},p.UNMOUNTED=0,p.EXITED=1,p.ENTERING=2,p.ENTERED=3,p.EXITING=4;var f=(0,a.polyfill)(p);t.default=f},1372:function(e,t,n){"use strict";t.__esModule=!0,t.classNamesShape=t.timeoutsShape=void 0;var r;(r=n(10))&&r.__esModule;t.timeoutsShape=null;t.classNamesShape=null},1373:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=s(n(10)),o=s(n(0)),i=n(610),a=n(1505);function s(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},d=function(e){var t,n;function r(t,n){var r,o=(r=e.call(this,t,n)||this).handleExited.bind(c(c(r)));return r.state={handleExited:o,firstRender:!0},r}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.getChildContext=function(){return{transitionGroup:{isMounting:!this.appeared}}},i.componentDidMount=function(){this.appeared=!0,this.mounted=!0},i.componentWillUnmount=function(){this.mounted=!1},r.getDerivedStateFromProps=function(e,t){var n=t.children,r=t.handleExited;return{children:t.firstRender?(0,a.getInitialChildMapping)(e,r):(0,a.getNextChildMapping)(e,n,r),firstRender:!1}},i.handleExited=function(e,t){var n=(0,a.getChildMapping)(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=l({},t.children);return delete n[e.key],{children:n}})))},i.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["component","childFactory"]),i=u(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?i:o.default.createElement(t,r,i)},r}(o.default.Component);d.childContextTypes={transitionGroup:r.default.object.isRequired},d.propTypes={},d.defaultProps={component:"div",childFactory:function(e){return e}};var p=(0,i.polyfill)(d);t.default=p,e.exports=t.default},1496:function(e,t,n){"use strict";const r=n(1497),o=Symbol("max"),i=Symbol("length"),a=Symbol("lengthCalculator"),s=Symbol("allowStale"),l=Symbol("maxAge"),c=Symbol("dispose"),u=Symbol("noDisposeOnSet"),d=Symbol("lruList"),p=Symbol("cache"),h=Symbol("updateAgeOnGet"),f=()=>1;const m=(e,t,n)=>{const r=e[p].get(t);if(r){const t=r.value;if(g(e,t)){if(_(e,r),!e[s])return}else n&&(e[h]&&(r.value.now=Date.now()),e[d].unshiftNode(r));return t.value}},g=(e,t)=>{if(!t||!t.maxAge&&!e[l])return!1;const n=Date.now()-t.now;return t.maxAge?n>t.maxAge:e[l]&&n>e[l]},b=e=>{if(e[i]>e[o])for(let t=e[d].tail;e[i]>e[o]&&null!==t;){const n=t.prev;_(e,t),t=n}},_=(e,t)=>{if(t){const n=t.value;e[c]&&e[c](n.key,n.value),e[i]-=n.length,e[p].delete(n.key),e[d].removeNode(t)}};class v{constructor(e,t,n,r,o){this.key=e,this.value=t,this.length=n,this.now=r,this.maxAge=o||0}}const y=(e,t,n,r)=>{let o=n.value;g(e,o)&&(_(e,n),e[s]||(o=void 0)),o&&t.call(r,o.value,o.key,e)};e.exports=class{constructor(e){if("number"==typeof e&&(e={max:e}),e||(e={}),e.max&&("number"!=typeof e.max||e.max<0))throw new TypeError("max must be a non-negative number");this[o]=e.max||1/0;const t=e.length||f;if(this[a]="function"!=typeof t?f:t,this[s]=e.stale||!1,e.maxAge&&"number"!=typeof e.maxAge)throw new TypeError("maxAge must be a number");this[l]=e.maxAge||0,this[c]=e.dispose,this[u]=e.noDisposeOnSet||!1,this[h]=e.updateAgeOnGet||!1,this.reset()}set max(e){if("number"!=typeof e||e<0)throw new TypeError("max must be a non-negative number");this[o]=e||1/0,b(this)}get max(){return this[o]}set allowStale(e){this[s]=!!e}get allowStale(){return this[s]}set maxAge(e){if("number"!=typeof e)throw new TypeError("maxAge must be a non-negative number");this[l]=e,b(this)}get maxAge(){return this[l]}set lengthCalculator(e){"function"!=typeof e&&(e=f),e!==this[a]&&(this[a]=e,this[i]=0,this[d].forEach(e=>{e.length=this[a](e.value,e.key),this[i]+=e.length})),b(this)}get lengthCalculator(){return this[a]}get length(){return this[i]}get itemCount(){return this[d].length}rforEach(e,t){t=t||this;for(let n=this[d].tail;null!==n;){const r=n.prev;y(this,e,n,t),n=r}}forEach(e,t){t=t||this;for(let n=this[d].head;null!==n;){const r=n.next;y(this,e,n,t),n=r}}keys(){return this[d].toArray().map(e=>e.key)}values(){return this[d].toArray().map(e=>e.value)}reset(){this[c]&&this[d]&&this[d].length&&this[d].forEach(e=>this[c](e.key,e.value)),this[p]=new Map,this[d]=new r,this[i]=0}dump(){return this[d].map(e=>!g(this,e)&&{k:e.key,v:e.value,e:e.now+(e.maxAge||0)}).toArray().filter(e=>e)}dumpLru(){return this[d]}set(e,t,n){if((n=n||this[l])&&"number"!=typeof n)throw new TypeError("maxAge must be a number");const r=n?Date.now():0,s=this[a](t,e);if(this[p].has(e)){if(s>this[o])return _(this,this[p].get(e)),!1;const a=this[p].get(e).value;return this[c]&&(this[u]||this[c](e,a.value)),a.now=r,a.maxAge=n,a.value=t,this[i]+=s-a.length,a.length=s,this.get(e),b(this),!0}const h=new v(e,t,s,r,n);return h.length>this[o]?(this[c]&&this[c](e,t),!1):(this[i]+=h.length,this[d].unshift(h),this[p].set(e,this[d].head),b(this),!0)}has(e){if(!this[p].has(e))return!1;const t=this[p].get(e).value;return!g(this,t)}get(e){return m(this,e,!0)}peek(e){return m(this,e,!1)}pop(){const e=this[d].tail;return e?(_(this,e),e.value):null}del(e){_(this,this[p].get(e))}load(e){this.reset();const t=Date.now();for(let n=e.length-1;n>=0;n--){const r=e[n],o=r.e||0;if(0===o)this.set(r.k,r.v);else{const e=o-t;e>0&&this.set(r.k,r.v,e)}}}prune(){this[p].forEach((e,t)=>m(this,t,!1))}}},1497:function(e,t,n){"use strict";function r(e){var t=this;if(t instanceof r||(t=new r),t.tail=null,t.head=null,t.length=0,e&&"function"==typeof e.forEach)e.forEach((function(e){t.push(e)}));else if(arguments.length>0)for(var n=0,o=arguments.length;n<o;n++)t.push(arguments[n]);return t}function o(e,t){e.tail=new a(t,e.tail,null,e),e.head||(e.head=e.tail),e.length++}function i(e,t){e.head=new a(t,null,e.head,e),e.tail||(e.tail=e.head),e.length++}function a(e,t,n,r){if(!(this instanceof a))return new a(e,t,n,r);this.list=r,this.value=e,t?(t.next=this,this.prev=t):this.prev=null,n?(n.prev=this,this.next=n):this.next=null}e.exports=r,r.Node=a,r.create=r,r.prototype.removeNode=function(e){if(e.list!==this)throw new Error("removing node which does not belong to this list");var t=e.next,n=e.prev;t&&(t.prev=n),n&&(n.next=t),e===this.head&&(this.head=t),e===this.tail&&(this.tail=n),e.list.length--,e.next=null,e.prev=null,e.list=null},r.prototype.unshiftNode=function(e){if(e!==this.head){e.list&&e.list.removeNode(e);var t=this.head;e.list=this,e.next=t,t&&(t.prev=e),this.head=e,this.tail||(this.tail=e),this.length++}},r.prototype.pushNode=function(e){if(e!==this.tail){e.list&&e.list.removeNode(e);var t=this.tail;e.list=this,e.prev=t,t&&(t.next=e),this.tail=e,this.head||(this.head=e),this.length++}},r.prototype.push=function(){for(var e=0,t=arguments.length;e<t;e++)o(this,arguments[e]);return this.length},r.prototype.unshift=function(){for(var e=0,t=arguments.length;e<t;e++)i(this,arguments[e]);return this.length},r.prototype.pop=function(){if(this.tail){var e=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,e}},r.prototype.shift=function(){if(this.head){var e=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,e}},r.prototype.forEach=function(e,t){t=t||this;for(var n=this.head,r=0;null!==n;r++)e.call(t,n.value,r,this),n=n.next},r.prototype.forEachReverse=function(e,t){t=t||this;for(var n=this.tail,r=this.length-1;null!==n;r--)e.call(t,n.value,r,this),n=n.prev},r.prototype.get=function(e){for(var t=0,n=this.head;null!==n&&t<e;t++)n=n.next;if(t===e&&null!==n)return n.value},r.prototype.getReverse=function(e){for(var t=0,n=this.tail;null!==n&&t<e;t++)n=n.prev;if(t===e&&null!==n)return n.value},r.prototype.map=function(e,t){t=t||this;for(var n=new r,o=this.head;null!==o;)n.push(e.call(t,o.value,this)),o=o.next;return n},r.prototype.mapReverse=function(e,t){t=t||this;for(var n=new r,o=this.tail;null!==o;)n.push(e.call(t,o.value,this)),o=o.prev;return n},r.prototype.reduce=function(e,t){var n,r=this.head;if(arguments.length>1)n=t;else{if(!this.head)throw new TypeError("Reduce of empty list with no initial value");r=this.head.next,n=this.head.value}for(var o=0;null!==r;o++)n=e(n,r.value,o),r=r.next;return n},r.prototype.reduceReverse=function(e,t){var n,r=this.tail;if(arguments.length>1)n=t;else{if(!this.tail)throw new TypeError("Reduce of empty list with no initial value");r=this.tail.prev,n=this.tail.value}for(var o=this.length-1;null!==r;o--)n=e(n,r.value,o),r=r.prev;return n},r.prototype.toArray=function(){for(var e=new Array(this.length),t=0,n=this.head;null!==n;t++)e[t]=n.value,n=n.next;return e},r.prototype.toArrayReverse=function(){for(var e=new Array(this.length),t=0,n=this.tail;null!==n;t++)e[t]=n.value,n=n.prev;return e},r.prototype.slice=function(e,t){(t=t||this.length)<0&&(t+=this.length),(e=e||0)<0&&(e+=this.length);var n=new r;if(t<e||t<0)return n;e<0&&(e=0),t>this.length&&(t=this.length);for(var o=0,i=this.head;null!==i&&o<e;o++)i=i.next;for(;null!==i&&o<t;o++,i=i.next)n.push(i.value);return n},r.prototype.sliceReverse=function(e,t){(t=t||this.length)<0&&(t+=this.length),(e=e||0)<0&&(e+=this.length);var n=new r;if(t<e||t<0)return n;e<0&&(e=0),t>this.length&&(t=this.length);for(var o=this.length,i=this.tail;null!==i&&o>t;o--)i=i.prev;for(;null!==i&&o>e;o--,i=i.prev)n.push(i.value);return n},r.prototype.reverse=function(){for(var e=this.head,t=this.tail,n=e;null!==n;n=n.prev){var r=n.prev;n.prev=n.next,n.next=r}return this.head=t,this.tail=e,this};try{n(1498)(r)}catch(e){}},1498:function(e,t,n){"use strict";e.exports=function(e){e.prototype[Symbol.iterator]=function*(){for(let e=this.head;e;e=e.next)yield e.value}}},1499:function(e,t,n){"use strict";var r=s(n(1500)),o=s(n(1504)),i=s(n(1373)),a=s(n(1371));function s(e){return e&&e.__esModule?e:{default:e}}e.exports={Transition:a.default,TransitionGroup:i.default,ReplaceTransition:o.default,CSSTransition:r.default}},1500:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}t.default=e}(n(10));var r=s(n(1501)),o=s(n(1503)),i=s(n(0)),a=s(n(1371));n(1372);function s(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,r.default)(e,t)}))},u=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,o.default)(e,t)}))},d=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).onEnter=function(e,n){var r=t.getClassNames(n?"appear":"enter").className;t.removeClasses(e,"exit"),c(e,r),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=t.getClassNames(n?"appear":"enter").activeClassName;t.reflowAndAddClass(e,r),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=t.getClassNames("appear").doneClassName,o=t.getClassNames("enter").doneClassName,i=n?r+" "+o:o;t.removeClasses(e,n?"appear":"enter"),c(e,i),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.getClassNames("exit").className;t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),c(e,n),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.getClassNames("exit").activeClassName;t.reflowAndAddClass(e,n),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.getClassNames("exit").doneClassName;t.removeClasses(e,"exit"),c(e,n),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var n=t.props.classNames,r="string"==typeof n,o=r?(r&&n?n+"-":"")+e:n[e];return{className:o,activeClassName:r?o+"-active":n[e+"Active"],doneClassName:r?o+"-done":n[e+"Done"]}},t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.removeClasses=function(e,t){var n=this.getClassNames(t),r=n.className,o=n.activeClassName,i=n.doneClassName;r&&u(e,r),o&&u(e,o),i&&u(e,i)},o.reflowAndAddClass=function(e,t){t&&(e&&e.scrollTop,c(e,t))},o.render=function(){var e=l({},this.props);return delete e.classNames,i.default.createElement(a.default,l({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},r}(i.default.Component);d.defaultProps={classNames:""},d.propTypes={};var p=d;t.default=p,e.exports=t.default},1501:function(e,t,n){"use strict";var r=n(959);t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,o.default)(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var o=r(n(1502));e.exports=t.default},1502:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default},1503:function(e,t,n){"use strict";function r(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,t){e.classList?e.classList.remove(t):"string"==typeof e.className?e.className=r(e.className,t):e.setAttribute("class",r(e.className&&e.className.baseVal||"",t))}},1504:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;a(n(10));var r=a(n(0)),o=n(21),i=a(n(1373));function a(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var t,n;function a(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).handleEnter=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onEnter",0,n)},t.handleEntering=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onEntering",0,n)},t.handleEntered=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onEntered",0,n)},t.handleExit=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onExit",1,n)},t.handleExiting=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onExiting",1,n)},t.handleExited=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onExited",1,n)},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=a.prototype;return s.handleLifecycle=function(e,t,n){var i,a=this.props.children,s=r.default.Children.toArray(a)[t];s.props[e]&&(i=s.props)[e].apply(i,n),this.props[e]&&this.props[e]((0,o.findDOMNode)(this))},s.render=function(){var e=this.props,t=e.children,n=e.in,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["children","in"]),a=r.default.Children.toArray(t),s=a[0],l=a[1];return delete o.onEnter,delete o.onEntering,delete o.onEntered,delete o.onExit,delete o.onExiting,delete o.onExited,r.default.createElement(i.default,o,n?r.default.cloneElement(s,{key:"first",onEnter:this.handleEnter,onEntering:this.handleEntering,onEntered:this.handleEntered}):r.default.cloneElement(l,{key:"second",onEnter:this.handleExit,onEntering:this.handleExiting,onEntered:this.handleExited}))},a}(r.default.Component);s.propTypes={};var l=s;t.default=l,e.exports=t.default},1505:function(e,t,n){"use strict";t.__esModule=!0,t.getChildMapping=o,t.mergeChildMappings=i,t.getInitialChildMapping=function(e,t){return o(e.children,(function(n){return(0,r.cloneElement)(n,{onExited:t.bind(null,n),in:!0,appear:a(n,"appear",e),enter:a(n,"enter",e),exit:a(n,"exit",e)})}))},t.getNextChildMapping=function(e,t,n){var s=o(e.children),l=i(t,s);return Object.keys(l).forEach((function(o){var i=l[o];if((0,r.isValidElement)(i)){var c=o in t,u=o in s,d=t[o],p=(0,r.isValidElement)(d)&&!d.props.in;!u||c&&!p?u||!c||p?u&&c&&(0,r.isValidElement)(d)&&(l[o]=(0,r.cloneElement)(i,{onExited:n.bind(null,i),in:d.props.in,exit:a(i,"exit",e),enter:a(i,"enter",e)})):l[o]=(0,r.cloneElement)(i,{in:!1}):l[o]=(0,r.cloneElement)(i,{onExited:n.bind(null,i),in:!0,exit:a(i,"exit",e),enter:a(i,"enter",e)})}})),l};var r=n(0);function o(e,t){var n=Object.create(null);return e&&r.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,r.isValidElement)(e)?t(e):e}(e)})),n}function i(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,o=Object.create(null),i=[];for(var a in e)a in t?i.length&&(o[a]=i,i=[]):i.push(a);var s={};for(var l in t){if(o[l])for(r=0;r<o[l].length;r++){var c=o[l][r];s[o[l][r]]=n(c)}s[l]=n(l)}for(r=0;r<i.length;r++)s[i[r]]=n(i[r]);return s}function a(e,t,n){return null!=n[t]?n[t]:e.props[t]}},446:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(670);Object.defineProperty(t,"Avatar",{enumerable:!0,get:function(){return r.Avatar}});var o=n(674);Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return o.Button}});var i=n(677);Object.defineProperty(t,"DatePicker",{enumerable:!0,get:function(){return i.DatePicker}});var a=n(679);Object.defineProperty(t,"DateTimePicker",{enumerable:!0,get:function(){return a.DateTimePicker}});var s=n(681);Object.defineProperty(t,"Group",{enumerable:!0,get:function(){return s.Group}});var l=n(502);Object.defineProperty(t,"Input",{enumerable:!0,get:function(){return l.Input}});var c=n(689);Object.defineProperty(t,"Option",{enumerable:!0,get:function(){return c.Option}});var u=n(696);Object.defineProperty(t,"Pluralize",{enumerable:!0,get:function(){return u.Pluralize}});var d=n(698);Object.defineProperty(t,"Modal",{enumerable:!0,get:function(){return d.Modal}});var p=n(707);Object.defineProperty(t,"Radio",{enumerable:!0,get:function(){return p.Radio}});var h=n(709);Object.defineProperty(t,"RadioBubble",{enumerable:!0,get:function(){return h.RadioBubble}});var f=n(711);Object.defineProperty(t,"Select",{enumerable:!0,get:function(){return f.Select}});var m=n(712);Object.defineProperty(t,"SplitButton",{enumerable:!0,get:function(){return m.SplitButton}});var g=n(715);Object.defineProperty(t,"Skeleton",{enumerable:!0,get:function(){return g.Skeleton}});var b=n(717);Object.defineProperty(t,"TextInput",{enumerable:!0,get:function(){return b.TextInput}});var _=n(499);Object.defineProperty(t,"BasicTooltip",{enumerable:!0,get:function(){return _.BasicTooltip}}),Object.defineProperty(t,"Tooltip",{enumerable:!0,get:function(){return _.Tooltip}});var v=n(452);Object.defineProperty(t,"extractPrimitiveProps",{enumerable:!0,get:function(){return v.extractPrimitiveProps}}),Object.defineProperty(t,"numberWithCommas",{enumerable:!0,get:function(){return v.numberWithCommas}})},447:function(e,t,n){"use strict";(function(t){!function(t){var n=/^(b|B)$/,r={iec:{bits:["b","Kib","Mib","Gib","Tib","Pib","Eib","Zib","Yib"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["b","Kb","Mb","Gb","Tb","Pb","Eb","Zb","Yb"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},o={iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]};function i(e){var t,i,a,s,l,c,u,d,p,h,f,m,g,b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},_=[],v=0,y=void 0,w=void 0;if(isNaN(e))throw new Error("Invalid arguments");return i=!0===b.bits,p=!0===b.unix,t=b.base||2,d=void 0!==b.round?b.round:p?1:2,h=void 0!==b.separator&&b.separator||"",f=void 0!==b.spacer?b.spacer:p?"":" ",g=b.symbols||b.suffixes||{},m=2===t&&b.standard||"jedec",u=b.output||"string",s=!0===b.fullform,l=b.fullforms instanceof Array?b.fullforms:[],y=void 0!==b.exponent?b.exponent:-1,a=t>2?1e3:1024,(c=(w=Number(e))<0)&&(w=-w),(-1===y||isNaN(y))&&(y=Math.floor(Math.log(w)/Math.log(a)))<0&&(y=0),y>8&&(y=8),0===w?(_[0]=0,_[1]=p?"":r[m][i?"bits":"bytes"][y]):(v=w/(2===t?Math.pow(2,10*y):Math.pow(1e3,y)),i&&(v*=8)>=a&&y<8&&(v/=a,y++),_[0]=Number(v.toFixed(y>0?d:0)),_[1]=10===t&&1===y?i?"kb":"kB":r[m][i?"bits":"bytes"][y],p&&(_[1]="jedec"===m?_[1].charAt(0):y>0?_[1].replace(/B$/,""):_[1],n.test(_[1])&&(_[0]=Math.floor(_[0]),_[1]=""))),c&&(_[0]=-_[0]),_[1]=g[_[1]]||_[1],"array"===u?_:"exponent"===u?y:"object"===u?{value:_[0],suffix:_[1],symbol:_[1]}:(s&&(_[1]=l[y]?l[y]:o[m][y]+(i?"bit":"byte")+(1===_[0]?"":"s")),h.length>0&&(_[0]=_[0].toString().replace(".",h)),_.join(f))}i.partial=function(e){return function(t){return i(t,e)}},e.exports=i}("undefined"!=typeof window&&window)}).call(this,n(84))},452:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(500);Object.defineProperty(t,"extractPrimitiveProps",{enumerable:!0,get:function(){return r.extractPrimitiveProps}});var o=n(675);Object.defineProperty(t,"numberWithCommas",{enumerable:!0,get:function(){return o.numberWithCommas}});var i=n(548);Object.defineProperty(t,"extractStyleProps",{enumerable:!0,get:function(){return i.extractStyleProps}});var a=n(676);Object.defineProperty(t,"hasPrimitiveProps",{enumerable:!0,get:function(){return a.hasPrimitiveProps}})},454:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return r}))},455:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s}));var r=n(0),o=n.n(r);function i(e,t){return o.a.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}function a(e,t){"function"==typeof e?e(t):e&&(e.current=t)}function s(e,t){return o.a.useMemo((function(){return null==e&&null==t?null:function(n){a(e,n),a(t,n)}}),[e,t])}},469:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(619),o=n(613);class i{constructor(e){this.model=e}getId(){return this.model.id}getRank(){return this.model.rank}isPrivate(){return this.model.isPrivate}getTitle(){return this.model.title||""}getUrl(){return this.model.url||""}getAuthorDisplayName(){return this.model.authorDisplayName}getAuthorSlug(){return this.model.authorSlug}getDate(){return this.model.date&&Object(r.a)(this.model.date)||void 0}getVotes(){return this.model.votes}getCategory(){return this.model.documentType}getImageUrl(){return this.model.thumbnailImageUrl||""}getIconName(){return Object(o.b)(this.getCategory())}getMatchingTextHtml(){return this.model.matchedText}getVotesSubheaderItem(){return{text:this.getVotes().toString(),icon:"expand_less"}}getByAuthorText(){return`by ${this.model.authorDisplayName}`}getCommonSubheaderItems(){const e=[];return this.model.isPrivate&&e.push({text:"Private",icon:"visibility_off"}),e}}},485:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ELEVATION_5=t.ELEVATION_4=t.ELEVATION_3=t.ELEVATION_2=t.ELEVATION_1=t.ILLUSTRATION_BLACK=t.ILLUSTRATION_YELLOW=t.ILLUSTRATION_GREEN=t.ILLUSTRATION_BLUE=t.KAGGLE_FOCUS=t.KAGGLE_WHITE=t.KAGGLE_BLACK=t.KAGGLE_YELLOW=t.KAGGLE_ORANGE=t.KAGGLE_PURPLE=t.KAGGLE_GREEN=t.KAGGLE_BLUE=t.GREY_50=t.GREY_100=t.GREY_200=t.GREY_300=t.GREY_400=t.GREY_500=t.GREY_600=t.GREY_700=t.GREY_800=t.GREY_850=t.GREY_900=void 0,t.GREY_900="#202124",t.GREY_850="#2E2F32",t.GREY_800="#3C4043",t.GREY_700="#5F6368",t.GREY_600="#80868B",t.GREY_500="#9AA0A6",t.GREY_400="#BDC1C6",t.GREY_300="#DADCE0",t.GREY_200="#E8EAED",t.GREY_100="#F1F3F4",t.GREY_50="#F8F9FA",t.KAGGLE_BLUE="#20BEFF",t.KAGGLE_GREEN="#1CCD76",t.KAGGLE_PURPLE="#651FFF",t.KAGGLE_ORANGE="#FF5C19",t.KAGGLE_YELLOW="#E5CF4A",t.KAGGLE_BLACK="#202124",t.KAGGLE_WHITE="#FFFFFF",t.KAGGLE_FOCUS="#20BEFF",t.ILLUSTRATION_BLUE="#20BEFF",t.ILLUSTRATION_GREEN="#1FA641",t.ILLUSTRATION_YELLOW="#FAE041",t.ILLUSTRATION_BLACK="#202124",t.ELEVATION_1="0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15)",t.ELEVATION_2="0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15)",t.ELEVATION_3="0 1px 3px 0 rgba(60, 64, 67, 0.3), 0 4px 8px 3px rgba(60, 64, 67, 0.15)",t.ELEVATION_4="0 2px 3px 0 rgba(60, 64, 67, 0.3), 0 6px 10px 4px rgba(60, 64, 67, 0.15)",t.ELEVATION_5="0 4px 4px 0 rgba(60, 64, 67, 0.3), 0 8px 12px 6px rgba(60, 64, 67, 0.15)"},488:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),o=n.n(r),i="undefined"!=typeof window?o.a.useLayoutEffect:o.a.useEffect;function a(e){var t=o.a.useRef(e);return i((function(){t.current=e})),o.a.useCallback((function(e){return(0,t.current)(e)}),[])}},499:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(672);Object.defineProperty(t,"BasicTooltip",{enumerable:!0,get:function(){return r.BasicTooltip}});var o=n(673);Object.defineProperty(t,"Tooltip",{enumerable:!0,get:function(){return o.Tooltip}})},500:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractPrimitiveProps=t.primitivePropKeys=t.DEFAULT_PRIMITIVE_PROPS=void 0,t.DEFAULT_PRIMITIVE_PROPS={scale:1,tight:!1,variant:"secondary",disabled:!1},t.primitivePropKeys=Object.keys(t.DEFAULT_PRIMITIVE_PROPS),t.extractPrimitiveProps=function(e){const n=e.groupProps||{};return t.primitivePropKeys.reduce((t,n)=>{const r=e[n];return void 0===r?t:Object.assign(Object.assign({},t),{[n]:r})},Object.assign(Object.assign({},t.DEFAULT_PRIMITIVE_PROPS),n))}},501:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(684);Object.defineProperty(t,"Icon",{enumerable:!0,get:function(){return r.Icon}});var o=n(687);Object.defineProperty(t,"ICON_LIST",{enumerable:!0,get:function(){return o.ICON_LIST}}),Object.defineProperty(t,"iconListAsObject",{enumerable:!0,get:function(){return o.iconListAsObject}})},502:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(688);Object.defineProperty(t,"Input",{enumerable:!0,get:function(){return r.Input}})},503:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=void 0;var r,o=n(705);var i=((r=o)&&r.__esModule?r:{default:r}).default,a=i.canUseDOM?window.HTMLElement:{};t.canUseDOM=i.canUseDOM;t.default=a},513:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=o.a.createContext(null)},516:function(e,t,n){"use strict";t.a=function(e){return e&&e.ownerDocument||document}},548:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractStyleProps=void 0,t.extractStyleProps=function(e){return{style:e.style,className:e.className}}},549:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Button=t.Body=void 0;const r=n(1),o=n(0),i=n(452),a=n(500),s=n(550);t.Body=r.default.button`
  ${s.setBackgroundColor};
  ${s.setBorderColor};
  ${s.setColor};
  font-size: ${e=>`${e.scale}em`};
  ${e=>e.theme.font.main.family};
  border-radius: ${e=>e.theme.size.border.radius.button};
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  flex: ${e=>e.tight?"0 0":"1 1"} auto;
  font-weight: ${e=>"primary"===e.variant?700:500};
  padding: 0.5em 0.75em;
  transition: all 0.1s ease;
  width: ${e=>e.tight?"fit-content":"100%"};
  &:hover {
    ${s.setHoverBackgroundColor};
    ${s.setHoverBorderColor};
    ${s.setHoverColor};
  }
  &:focus,
  &:active {
    outline: none;
  }
  svg {
    margin-right: 5px;
    margin-left: 5px;
  }
`,t.Button=function(e){const n=a.extractPrimitiveProps(e);return o.createElement(t.Body,Object.assign({onClick:n.disabled?void 0:e.onClick,onMouseDown:e.onMouseDown,disabled:n.disabled,role:"button"},n,i.extractStyleProps(e),{title:e.title}),e.children)}},550:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setHoverBorderColor=t.getHoverBorderColor=t.setHoverBackgroundColor=t.getHoverBackgroundColor=t.setHoverColor=t.getHoverColor=t.setBorderColor=t.getBorderColor=t.setBackgroundColor=t.getBackgroundColor=t.setColor=t.getColor=void 0;const r=n(576);function o(e){switch(e.variant){case"transparent":return e.theme.colors.kaggle.blueDark;case"invisible":return e.theme.material.color.brand.grey[700];case"warn":default:return e.theme.colors.kaggle.white}}function i(e){switch(e.variant){case"transparent":return"transparent";case"invisible":return"rgba(255, 255, 255, 0)";case"warn":return e.theme.colors.kaggle.red;default:return"#008abc"}}function a(e){switch(e.variant){case"transparent":return"#dedfe0";case"warn":return r.darken(.05,e.theme.colors.kaggle.red);case"invisible":default:return"rgba(255, 255, 255, 0)"}}function s(e){switch(e.variant){case"transparent":return e.theme.colors.kaggle.blue;default:return o(e)}}function l(e){switch(e.variant){case"transparent":return"rgba(255, 255, 255, 0.3)";case"invisible":return"rgba(255, 255, 255, 0)";case"warn":return e.theme.colors.kaggle.red;default:return"#20beff"}}function c(e){switch(e.variant){case"transparent":return e.theme.colors.kaggle.blue;case"invisible":default:return"rgba(255, 255, 255, 0)"}}const u=e=>t=>{const n=e(t);return t.disabled&&"transparent"!==t.variant?r.desaturate(.8,n):n};t.getColor=e=>u(o)(e),t.setColor=e=>`color: ${t.getColor(e)}`,t.getBackgroundColor=e=>u(i)(e),t.setBackgroundColor=e=>`background-color: ${t.getBackgroundColor(e)}`,t.getBorderColor=e=>u(a)(e),t.setBorderColor=e=>`border-color: ${t.getBorderColor(e)}`,t.getHoverColor=e=>u(s)(e),t.setHoverColor=e=>`color: ${t.getHoverColor(e)}`,t.getHoverBackgroundColor=e=>u(l)(e),t.setHoverBackgroundColor=e=>`background-color: ${t.getHoverBackgroundColor(e)}`,t.getHoverBorderColor=e=>u(c)(e),t.setHoverBorderColor=e=>`border-color: ${t.getHoverBorderColor(e)}`},551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Select=t.Body=void 0;const r=n(1),o=n(0),i=n(452);t.Body=r.default.div`
  ${r.menuBackground()};
  ${r.readableColor(70)};
  display: flex;
  position: relative;
  flex: ${e=>e.tight?"0 0":"1 1"} auto;
  flex-flow: row nowrap;
  font-size: ${e=>`${e.scale}rem`};
  font-weight: 400;
  width: ${e=>e.tight?"auto":"100%"};
  /*
  &:hover {
    background: #f8f8f8;
  }
  */
  &:focus,
  &:active {
    outline: none;
  }
  > select {
    background: transparent;
    border-radius: 0;
    border: 0;
    box-shadow: none;
    ${r.readableColor(70)};
    cursor: pointer;
    ${e=>e.theme.font.main.family};
    ${e=>e.theme.font.main.size.m};
    ${e=>e.theme.font.main.weight.light};
    height: 2.5em;
    outline: none;
    padding: 0 0.5rem;
    width: 100%;
    /* Disable default styling */
    appearance: none;
    /* Disable default arrow on IE 11+ */
    &::-ms-expand {
      display: none;
    }
    /* Disable outline on firefox */
    &:-moz-focusring {
      color: transparent;
      text-shadow: 0 0 0 #000;
    }
  }
`,t.Select=function(e){const n=i.extractPrimitiveProps(e);return o.createElement(t.Body,Object.assign({},n,i.extractStyleProps(e)),o.createElement("select",{style:{minWidth:100},value:e.selectedKey,disabled:n.disabled,onChange:n.disabled?void 0:t=>{const n=t.target.value;if("string"==typeof e.selectedKey)e.onSelect(n);else{if("number"!=typeof e.selectedKey)throw new Error(`Unknown select value type: ${typeof e.selectedKey}`);e.onSelect(parseInt(n,10))}}},e.options.map(t=>o.createElement("option",{"aria-selected":t.key===e.selectedKey,key:t.key,value:t.key},t.value))))}},552:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextInput=t.Body=t.Indicator=t.TrailingIcon=void 0;const r=n(1),o=n(0),i=n(501),a=n(502),s=n(499),l=n(452),c=n(550);t.TrailingIcon=r.default(i.Icon)`
  color: rgb(0, 0, 0, 0.5);
  position: absolute;
  right: 10px;
`,t.Indicator=r.default(i.Icon)`
  margin-left: 0.5em;
  font-size: 1.2rem;
  opacity: 0.3;
  transition: opacity 0.5s;
`,t.Body=r.default.div`
  ${e=>e.theme.font.main.family};
  font-size: ${e=>e.scale||1}em;
  display: flex;
  align-self: flex-start;
  flex: ${e=>e.tight?"0 0":"1 1"} auto;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  ${c.setColor};

  ${t.Indicator} {
    color: ${e=>e.isDirty?"rgb(255, 220, 200)":e.hasError?"rgb(255, 100, 100)":"#00c090"};
  }

  &:hover {
    ${t.Indicator} {
      opacity: 0.7;
    }
  }

  &:focus-within {
    ${t.Indicator} {
      opacity: 1;
    }
  }
`;class u extends o.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={value:this.props.value},this.handleChange=e=>{const{value:t}=e.target;this.setState({value:t}),null!==this.props.debounceMilliseconds&&(window.clearTimeout(this.debounceHandle),this.debounceHandle=window.setTimeout(()=>this.handleSave(t),this.props.debounceMilliseconds))},this.handleBlur=e=>{window.clearTimeout(this.debounceHandle),this.handleSave(e.target.value)},this.isDirty=(e=this.state.value)=>this.props.value!==e,this.handleSave=e=>{this.mounted&&this.isDirty(e)&&this.props.onSave&&this.props.onSave(e)}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}UNSAFE_componentWillReceiveProps(e){this.props.value!==e.value&&this.setState({value:e.value})}render(){const{error:e,hasIndicator:n,hideBorder:r,placeholder:c,sizeToContent:u,icon:d}=this.props,p=l.extractPrimitiveProps(this.props),{value:h}=this.state,f=this.isDirty(),m=[o.createElement(a.Input,Object.assign({key:"text-input",type:"text",value:h||"",disabled:p.disabled,hideBorder:r,onChange:p.disabled?void 0:this.handleChange,onBlur:this.handleBlur,size:u?(h||"").length+8:void 0,placeholder:c},p))];n?m.push(o.createElement(i.Icon,{key:"text-input-indicator",icon:null==e?"stop_circle":"close"})):d&&m.push(o.createElement(t.TrailingIcon,{key:"text-input-trailing-icon",icon:d}));const g=null==e?m:o.createElement(s.Tooltip,{key:"input-tooltip",tip:e.message,type:"error"},m);return o.createElement(t.Body,Object.assign({key:"input",isDirty:f,hasError:null!==e},p,l.extractStyleProps(this.props)),g)}}t.TextInput=u},553:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return[].slice.call(e.querySelectorAll("*"),0).filter(a)};var r=/input|select|textarea|button|object/;function o(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;var n=window.getComputedStyle(e);return t?"visible"!==n.getPropertyValue("overflow"):"none"==n.getPropertyValue("display")}function i(e,t){var n=e.nodeName.toLowerCase();return(r.test(n)&&!e.disabled||"a"===n&&e.href||t)&&function(e){for(var t=e;t&&t!==document.body;){if(o(t))return!1;t=t.parentNode}return!0}(e)}function a(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var n=isNaN(t);return(n||t>=0)&&i(e,!n)}e.exports=t.default},554:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.assertNodeList=l,t.setElement=function(e){var t=e;if("string"==typeof t&&a.canUseDOM){var n=document.querySelectorAll(t);l(n,t),t="length"in n?n[0]:n}return s=t||s},t.validateElement=c,t.hide=function(e){c(e)&&(e||s).setAttribute("aria-hidden","true")},t.show=function(e){c(e)&&(e||s).removeAttribute("aria-hidden")},t.documentNotReadyOrSSRTesting=function(){s=null},t.resetForTesting=function(){s=null};var r,o=n(486),i=(r=o)&&r.__esModule?r:{default:r},a=n(503);var s=null;function l(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function c(e){return!(!e&&!s)||((0,i.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),!1)}},555:function(e,t,n){"use strict";var r=n(0),o=n.n(r).a.createContext({});t.a=o},558:function(e,t,n){"use strict";var r=n(443),o=n(454),i=n(453),a=n(0),s=n.n(a),l=(n(10),n(714)),c=n(21),u=n.n(c),d=n(455);var p="undefined"!=typeof window?s.a.useLayoutEffect:s.a.useEffect;var h=s.a.forwardRef((function(e,t){var n=e.children,r=e.container,i=e.disablePortal,a=void 0!==i&&i,l=e.onRendered,c=s.a.useState(null),h=Object(o.a)(c,2),f=h[0],m=h[1],g=Object(d.c)(n.ref,t);return p((function(){a||m(function(e){return e="function"==typeof e?e():e,u.a.findDOMNode(e)}(r)||document.body)}),[r,a]),p((function(){if(f&&!a)return Object(d.b)(t,f),function(){Object(d.b)(t,null)}}),[t,f,a]),p((function(){l&&(f||a)&&l()}),[l,f,a]),a?(s.a.Children.only(n),s.a.cloneElement(n,{ref:g})):f?u.a.createPortal(n,f):f})),f=n(914);var m="undefined"!=typeof window?s.a.useLayoutEffect:s.a.useEffect,g={},b=s.a.forwardRef((function(e,t){var n=e.anchorEl,a=e.children,c=e.container,u=e.disablePortal,p=void 0!==u&&u,b=e.keepMounted,_=void 0!==b&&b,v=e.modifiers,y=e.open,w=e.placement,x=void 0===w?"bottom":w,E=e.popperOptions,k=void 0===E?g:E,C=e.popperRef,S=e.transition,O=void 0!==S&&S,T=Object(i.a)(e,["anchorEl","children","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition"]),I=s.a.useRef(null),P=Object(d.c)(I,t),R=s.a.useRef(null),j=s.a.useRef(),N=Object(d.c)(R,C);m((function(){j.current=N}),[N]),s.a.useImperativeHandle(C,(function(){return R.current}),[]);var $=s.a.useState(!0),F=Object(o.a)($,2),A=F[0],M=F[1],L=function(e){if("rtl"!==("undefined"!=typeof window&&document.body.getAttribute("dir")||"ltr"))return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(x),D=s.a.useState(L),z=Object(o.a)(D,2),B=z[0],U=z[1];L!==B&&U(L);var G=s.a.useCallback((function(){var e=I.current;if(e&&n&&y){R.current&&(R.current.destroy(),j.current(null));var t=new l.a(function(e){return"function"==typeof e?e():e}(n),e,Object(r.a)({placement:L},k,{modifiers:Object(r.a)({},p?{}:{preventOverflow:{boundariesElement:"window"}},{},v,{},k.modifiers),onUpdate:Object(f.b)((function(e){U(e.placement)}),k.onUpdate)}));j.current(t)}}),[n,p,v,y,L,k]),V=s.a.useCallback((function(e){Object(d.b)(P,e),G()}),[P,G]),H=function(){R.current&&(R.current.destroy(),j.current(null))};if(s.a.useEffect((function(){G()}),[G]),s.a.useEffect((function(){return function(){H()}}),[]),s.a.useEffect((function(){y||O||H()}),[y,O]),!_&&!y&&(!O||A))return null;var W={placement:B};return O&&(W.TransitionProps={in:y,onEnter:function(){M(!1)},onExited:function(){M(!0),H()}}),s.a.createElement(h,{disablePortal:p,container:c},s.a.createElement("div",Object(r.a)({ref:V,role:"tooltip",style:{position:"fixed"}},T),"function"==typeof a?a(W):a))}));t.a=b},575:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i}));var r=n(4),o=r.c.Sdk.Search.Protos.DocumentType,i=r.c.Sdk.Search.Protos.FilterType,a=r.c.Sdk.Search.Protos.FilterName},576:function(e,t,n){"use strict";n.r(t);var r=n(443);function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}n.d(t,"adjustHue",(function(){return ye})),n.d(t,"animation",(function(){return Xe})),n.d(t,"backgroundImages",(function(){return Ze})),n.d(t,"backgrounds",(function(){return Je})),n.d(t,"between",(function(){return b})),n.d(t,"border",(function(){return tt})),n.d(t,"borderColor",(function(){return M})),n.d(t,"borderRadius",(function(){return nt})),n.d(t,"borderStyle",(function(){return rt})),n.d(t,"borderWidth",(function(){return ot})),n.d(t,"buttons",(function(){return ct})),n.d(t,"clearFix",(function(){return _})),n.d(t,"complement",(function(){return we})),n.d(t,"cover",(function(){return v})),n.d(t,"darken",(function(){return ke})),n.d(t,"desaturate",(function(){return Se})),n.d(t,"directionalProperty",(function(){return s})),n.d(t,"ellipsis",(function(){return y})),n.d(t,"em",(function(){return d})),n.d(t,"fluidRange",(function(){return w})),n.d(t,"fontFace",(function(){return E})),n.d(t,"getLuminance",(function(){return Oe})),n.d(t,"getValueAndUnit",(function(){return h})),n.d(t,"grayscale",(function(){return Te})),n.d(t,"invert",(function(){return Ie})),n.d(t,"hideText",(function(){return k})),n.d(t,"hideVisually",(function(){return C})),n.d(t,"hiDPI",(function(){return S})),n.d(t,"hsl",(function(){return le})),n.d(t,"hsla",(function(){return ce})),n.d(t,"lighten",(function(){return Re})),n.d(t,"margin",(function(){return ut})),n.d(t,"mix",(function(){return Ne})),n.d(t,"modularScale",(function(){return m})),n.d(t,"normalize",(function(){return O})),n.d(t,"opacify",(function(){return Fe})),n.d(t,"padding",(function(){return dt})),n.d(t,"parseToHsl",(function(){return ne})),n.d(t,"parseToRgb",(function(){return te})),n.d(t,"placeholder",(function(){return T})),n.d(t,"position",(function(){return ht})),n.d(t,"radialGradient",(function(){return j})),n.d(t,"readableColor",(function(){return Ae})),n.d(t,"rem",(function(){return g})),n.d(t,"retinaImage",(function(){return N})),n.d(t,"rgb",(function(){return ue})),n.d(t,"rgba",(function(){return de})),n.d(t,"saturate",(function(){return Le})),n.d(t,"selection",(function(){return $})),n.d(t,"setHue",(function(){return ze})),n.d(t,"setLightness",(function(){return Ue})),n.d(t,"setSaturation",(function(){return Ve})),n.d(t,"shade",(function(){return We})),n.d(t,"size",(function(){return ft})),n.d(t,"stripUnit",(function(){return c})),n.d(t,"textInputs",(function(){return bt})),n.d(t,"timingFunctions",(function(){return A})),n.d(t,"tint",(function(){return Ke})),n.d(t,"toColorString",(function(){return be})),n.d(t,"transitions",(function(){return _t})),n.d(t,"transparentize",(function(){return Qe})),n.d(t,"triangle",(function(){return B})),n.d(t,"wordWrap",(function(){return U}));var i=["Top","Right","Bottom","Left"];function a(e,t){if(!e)return t.toLowerCase();var n=e.split("-");if(n.length>1)return n.splice(1,0,t),n.reduce((function(e,t){return""+e+o(t)}));var r=e.replace(/([a-z])([A-Z])/g,"$1"+t+"$2");return e===r?""+e+t:r}function s(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0],s=n[1],l=void 0===s?o:s,c=n[2],u=void 0===c?o:c,d=n[3];return function(e,t){for(var n={},r=0;r<t.length;r+=1)(t[r]||0===t[r])&&(n[a(e,i[r])]=t[r]);return n}(e,[o,l,u,void 0===d?l:d])}function l(e,t){return e.substr(-t.length)===t}function c(e){var t=parseFloat(e);return isNaN(t)?e:t}var u=function(e){return function(t,n){void 0===n&&(n="16px");var r=t,o=n;if("string"==typeof t){if(!l(t,"px"))throw new Error('Expected a string ending in "px" or a number passed as the first argument to '+e+'(), got "'+t+'" instead.');r=c(t)}if("string"==typeof n){if(!l(n,"px"))throw new Error('Expected a string ending in "px" or a number passed as the second argument to '+e+'(), got "'+n+'" instead.');o=c(n)}if("string"==typeof r)throw new Error('Passed invalid pixel value ("'+t+'") to '+e+'(), please pass a value like "12px" or 12.');if("string"==typeof o)throw new Error('Passed invalid base value ("'+n+'") to '+e+'(), please pass a value like "12px" or 12.');return""+r/o+e}},d=u("em"),p=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;function h(e){if("string"!=typeof e)return[e,""];var t=e.match(p);return t?[parseFloat(e),t[2]]:[e,void 0]}var f={minorSecond:1.067,majorSecond:1.125,minorThird:1.2,majorThird:1.25,perfectFourth:1.333,augFourth:1.414,perfectFifth:1.5,minorSixth:1.6,goldenSection:1.618,majorSixth:1.667,minorSeventh:1.778,majorSeventh:1.875,octave:2,majorTenth:2.5,majorEleventh:2.667,majorTwelfth:3,doubleOctave:4};function m(e,t,n){if(void 0===t&&(t="1em"),void 0===n&&(n="perfectFourth"),"number"!=typeof e)throw new Error("Please provide a number of steps to the modularScale helper.");if("string"==typeof n&&!f[n])throw new Error("Please pass a number or one of the predefined scales to the modularScale helper as the ratio.");var r="string"==typeof t?c(t):t,o="string"==typeof n?f[n]:n;if("string"==typeof r)throw new Error('Invalid value passed as base to modularScale, expected number or em string but got "'+t+'"');return r*Math.pow(o,e)+"em"}var g=u("rem");function b(e,t,n,r){void 0===n&&(n="320px"),void 0===r&&(r="1200px");var o=h(e),i=o[0],a=o[1],s=h(t),l=s[0],c=s[1],u=h(n),d=u[0],p=u[1],f=h(r),m=f[0],g=f[1];if("number"!=typeof d||"number"!=typeof m||!p||!g||p!==g)throw new Error("minScreen and maxScreen must be provided as stringified numbers with the same units.");if("number"!=typeof i||"number"!=typeof l||!a||!c||a!==c)throw new Error("fromSize and toSize must be provided as stringified numbers with the same units.");var b=(i-l)/(d-m);return"calc("+(l-b*m).toFixed(2)+a+" + "+(100*b).toFixed(2)+"vw)"}function _(e){var t;return void 0===e&&(e="&"),(t={})[e+"::after"]={clear:"both",content:'""',display:"table"},t}function v(e){return void 0===e&&(e=0),{position:"absolute",top:e,right:e,bottom:e,left:e}}function y(e){return void 0===e&&(e="100%"),{display:"inline-block",maxWidth:e,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",wordWrap:"normal"}}function w(e,t,n){if(void 0===t&&(t="320px"),void 0===n&&(n="1200px"),!Array.isArray(e)&&"object"!=typeof e||null===e)throw new Error("expects either an array of objects or a single object with the properties prop, fromSize, and toSize.");if(Array.isArray(e)){var o={},i={},a=e,s=Array.isArray(a),l=0;for(a=s?a:a[Symbol.iterator]();;){var c,u,d;if(s){if(l>=a.length)break;d=a[l++]}else{if((l=a.next()).done)break;d=l.value}var p=d;if(!p.prop||!p.fromSize||!p.toSize)throw new Error("expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.");i[p.prop]=p.fromSize,o["@media (min-width: "+t+")"]=Object(r.a)({},o["@media (min-width: "+t+")"],((c={})[p.prop]=b(p.fromSize,p.toSize,t,n),c)),o["@media (min-width: "+n+")"]=Object(r.a)({},o["@media (min-width: "+n+")"],((u={})[p.prop]=p.toSize,u))}return Object(r.a)({},i,o)}var h,f,m;if(!e.prop||!e.fromSize||!e.toSize)throw new Error("expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.");return(m={})[e.prop]=e.fromSize,m["@media (min-width: "+t+")"]=((h={})[e.prop]=b(e.fromSize,e.toSize,t,n),h),m["@media (min-width: "+n+")"]=((f={})[e.prop]=e.toSize,f),m}function x(e,t,n){var r=[];return t&&r.push(function(e){return e.map((function(e){return'local("'+e+'")'})).join(", ")}(t)),e&&r.push(function(e,t){return t.map((function(t){return'url("'+e+"."+t+'")'})).join(", ")}(e,n)),r.join(", ")}function E(e){var t=e.fontFamily,n=e.fontFilePath,r=e.fontStretch,o=e.fontStyle,i=e.fontVariant,a=e.fontWeight,s=e.fileFormats,l=void 0===s?["eot","woff2","woff","ttf","svg"]:s,c=e.localFonts,u=e.unicodeRange,d=e.fontDisplay,p=e.fontVariationSettings,h=e.fontFeatureSettings;if(!t)throw new Error("fontFace expects a name of a font-family.");if(!n&&!c)throw new Error("fontFace expects either the path to the font file(s) or a name of a local copy.");if(c&&!Array.isArray(c))throw new Error("fontFace expects localFonts to be an array.");if(!Array.isArray(l))throw new Error("fontFace expects fileFormats to be an array.");var f={"@font-face":{fontFamily:t,src:x(n,c,l),unicodeRange:u,fontStretch:r,fontStyle:o,fontVariant:i,fontWeight:a,fontDisplay:d,fontVariationSettings:p,fontFeatureSettings:h}};return JSON.parse(JSON.stringify(f))}function k(){return{textIndent:"101%",overflow:"hidden",whiteSpace:"nowrap"}}function C(){return{border:"0",clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",whiteSpace:"nowrap",width:"1px"}}function S(e){return void 0===e&&(e=1.3),"\n    @media only screen and (-webkit-min-device-pixel-ratio: "+e+"),\n    only screen and (min--moz-device-pixel-ratio: "+e+"),\n    only screen and (-o-min-device-pixel-ratio: "+e+"/1),\n    only screen and (min-resolution: "+Math.round(96*e)+"dpi),\n    only screen and (min-resolution: "+e+"dppx)\n  "}function O(){var e;return[(e={html:{lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:"0"},h1:{fontSize:"2em",margin:"0.67em 0"},hr:{boxSizing:"content-box",height:"0",overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{backgroundColor:"transparent"},"abbr[title]":{borderBottom:"none",textDecoration:"underline"}},e["b,\n    strong"]={fontWeight:"bolder"},e["code,\n    kbd,\n    samp"]={fontFamily:"monospace, monospace",fontSize:"1em"},e.small={fontSize:"80%"},e["sub,\n    sup"]={fontSize:"75%",lineHeight:"0",position:"relative",verticalAlign:"baseline"},e.sub={bottom:"-0.25em"},e.sup={top:"-0.5em"},e.img={borderStyle:"none"},e["button,\n    input,\n    optgroup,\n    select,\n    textarea"]={fontFamily:"inherit",fontSize:"100%",lineHeight:"1.15",margin:"0"},e["button,\n    input"]={overflow:"visible"},e["button,\n    select"]={textTransform:"none"},e['button,\n    html [type="button"],\n    [type="reset"],\n    [type="submit"]']={WebkitAppearance:"button"},e['button::-moz-focus-inner,\n    [type="button"]::-moz-focus-inner,\n    [type="reset"]::-moz-focus-inner,\n    [type="submit"]::-moz-focus-inner']={borderStyle:"none",padding:"0"},e['button:-moz-focusring,\n    [type="button"]:-moz-focusring,\n    [type="reset"]:-moz-focusring,\n    [type="submit"]:-moz-focusring']={outline:"1px dotted ButtonText"},e.fieldset={padding:"0.35em 0.625em 0.75em"},e.legend={boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:"0",whiteSpace:"normal"},e.progress={verticalAlign:"baseline"},e.textarea={overflow:"auto"},e['[type="checkbox"],\n    [type="radio"]']={boxSizing:"border-box",padding:"0"},e['[type="number"]::-webkit-inner-spin-button,\n    [type="number"]::-webkit-outer-spin-button']={height:"auto"},e['[type="search"]']={WebkitAppearance:"textfield",outlineOffset:"-2px"},e['[type="search"]::-webkit-search-decoration']={WebkitAppearance:"none"},e["::-webkit-file-upload-button"]={WebkitAppearance:"button",font:"inherit"},e.details={display:"block"},e.summary={display:"list-item"},e.template={display:"none"},e["[hidden]"]={display:"none"},e),{"abbr[title]":{textDecoration:"underline dotted"}}]}function T(e,t){var n;return void 0===t&&(t="&"),(n={})[t+"::-webkit-input-placeholder"]=Object(r.a)({},e),n[t+":-moz-placeholder"]=Object(r.a)({},e),n[t+"::-moz-placeholder"]=Object(r.a)({},e),n[t+":-ms-input-placeholder"]=Object(r.a)({},e),n}function I(){var e,t,n=(e=["radial-gradient(","","","",")"],t||(t=e.slice(0)),e.raw=t,e);return I=function(){return n},n}function P(e){return e[0].split(" ")[0]}function R(e){for(var t="",n=0;n<e.length;n+=1)t+=e[n],3===n&&(n+1<1||arguments.length<=n+1?void 0:arguments[n+1])&&((arguments.length<=1?void 0:arguments[1])||(arguments.length<=2?void 0:arguments[2])||(arguments.length<=3?void 0:arguments[3]))?(t=t.slice(0,-1),t+=", "+(n+1<1||arguments.length<=n+1?void 0:arguments[n+1])):3!==n||n+1<1||arguments.length<=n+1||!arguments[n+1]||(arguments.length<=1?void 0:arguments[1])||(arguments.length<=2?void 0:arguments[2])||(arguments.length<=3?void 0:arguments[3])?(n+1<1||arguments.length<=n+1?void 0:arguments[n+1])&&(t+=(n+1<1||arguments.length<=n+1?void 0:arguments[n+1])+" "):t+=""+(n+1<1||arguments.length<=n+1?void 0:arguments[n+1]);return t.trim()}function j(e){var t=e.colorStops,n=e.extent,r=e.fallback,o=e.position,i=e.shape;if(!t||t.length<2)throw new Error("radialGradient requries at least 2 color-stops to properly render.");return{backgroundColor:r||P(t),backgroundImage:R(I(),o,i,n,t.join(", "))}}function N(e,t,n,o,i){var a;if(void 0===n&&(n="png"),void 0===i&&(i="_2x"),!e)throw new Error("Please supply a filename to retinaImage() as the first argument.");var s=n.replace(/^\./,""),l=o?o+"."+s:""+e+i+"."+s;return(a={backgroundImage:"url("+e+"."+s+")"})[S()]=Object(r.a)({backgroundImage:"url("+l+")"},t?{backgroundSize:t}:{}),a}function $(e,t){var n;return void 0===t&&(t=""),(n={})[t+"::-moz-selection"]=Object(r.a)({},e),n[t+"::selection"]=Object(r.a)({},e),n}var F={easeInBack:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",easeInCirc:"cubic-bezier(0.600,  0.040, 0.980, 0.335)",easeInCubic:"cubic-bezier(0.550,  0.055, 0.675, 0.190)",easeInExpo:"cubic-bezier(0.950,  0.050, 0.795, 0.035)",easeInQuad:"cubic-bezier(0.550,  0.085, 0.680, 0.530)",easeInQuart:"cubic-bezier(0.895,  0.030, 0.685, 0.220)",easeInQuint:"cubic-bezier(0.755,  0.050, 0.855, 0.060)",easeInSine:"cubic-bezier(0.470,  0.000, 0.745, 0.715)",easeOutBack:"cubic-bezier(0.175,  0.885, 0.320, 1.275)",easeOutCubic:"cubic-bezier(0.215,  0.610, 0.355, 1.000)",easeOutCirc:"cubic-bezier(0.075,  0.820, 0.165, 1.000)",easeOutExpo:"cubic-bezier(0.190,  1.000, 0.220, 1.000)",easeOutQuad:"cubic-bezier(0.250,  0.460, 0.450, 0.940)",easeOutQuart:"cubic-bezier(0.165,  0.840, 0.440, 1.000)",easeOutQuint:"cubic-bezier(0.230,  1.000, 0.320, 1.000)",easeOutSine:"cubic-bezier(0.390,  0.575, 0.565, 1.000)",easeInOutBack:"cubic-bezier(0.680, -0.550, 0.265, 1.550)",easeInOutCirc:"cubic-bezier(0.785,  0.135, 0.150, 0.860)",easeInOutCubic:"cubic-bezier(0.645,  0.045, 0.355, 1.000)",easeInOutExpo:"cubic-bezier(1.000,  0.000, 0.000, 1.000)",easeInOutQuad:"cubic-bezier(0.455,  0.030, 0.515, 0.955)",easeInOutQuart:"cubic-bezier(0.770,  0.000, 0.175, 1.000)",easeInOutQuint:"cubic-bezier(0.860,  0.000, 0.070, 1.000)",easeInOutSine:"cubic-bezier(0.445,  0.050, 0.550, 0.950)"};function A(e){return F[e]}function M(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return s.apply(void 0,["borderColor"].concat(t))}var L=function(e,t,n){switch(e){case"top":return"0 "+n[0]/2+n[1]+" "+t[0]+t[1]+" "+n[0]/2+n[1];case"left":return""+t[0]/2+t[1]+" "+n[0]+n[1]+" "+t[0]/2+t[1]+" 0";case"bottom":return""+t[0]+t[1]+" "+n[0]/2+n[1]+" 0 "+n[0]/2+n[1];case"right":return""+t[0]/2+t[1]+" 0 "+t[0]/2+t[1]+" "+n[0]+n[1];default:throw new Error("Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.")}},D=["bottom","left","top","right"],z=/(\d*\.?\d*)/;function B(e){var t=e.pointingDirection,n=e.height,o=e.width,i=e.foregroundColor,a=e.backgroundColor,s=void 0===a?"transparent":a,l=[parseFloat(o),String(o).replace(z,"")||"px"],c=[parseFloat(n),String(n).replace(z,"")||"px"];if(isNaN(c[0])||isNaN(l[0]))throw new Error("Passed an invalid value to `height` or `width`. Please provide a pixel based unit");var u=D.indexOf(t);return Object(r.a)({width:"0",height:"0",borderWidth:L(t,c,l),borderStyle:"solid"},M.apply(void 0,Array.from({length:4}).map((function(e,t){return t===u?i:s}))))}function U(e){return void 0===e&&(e="break-word"),{overflowWrap:e,wordWrap:e,wordBreak:"break-word"===e?"break-all":e}}function G(e){return Math.round(255*e)}function V(e,t,n){return G(e)+","+G(t)+","+G(n)}function H(e,t,n,r){if(void 0===r&&(r=V),0===t)return r(n,n,n);var o=e%360/60,i=(1-Math.abs(2*n-1))*t,a=i*(1-Math.abs(o%2-1)),s=0,l=0,c=0;o>=0&&o<1?(s=i,l=a):o>=1&&o<2?(s=a,l=i):o>=2&&o<3?(l=i,c=a):o>=3&&o<4?(l=a,c=i):o>=4&&o<5?(s=a,c=i):o>=5&&o<6&&(s=i,c=a);var u=n-i/2;return r(s+u,l+u,c+u)}var W={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var q=/^#[a-fA-F0-9]{6}$/,K=/^#[a-fA-F0-9]{8}$/,Y=/^#[a-fA-F0-9]{3}$/,Q=/^#[a-fA-F0-9]{4}$/,X=/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,Z=/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/,J=/^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/,ee=/^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;function te(e){if("string"!=typeof e)throw new Error("Passed an incorrect argument to a color function, please pass a string representation of a color.");var t=function(e){if("string"!=typeof e)return e;var t=e.toLowerCase();return W[t]?"#"+W[t]:e}(e);if(t.match(q))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(K)){var n=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:n}}if(t.match(Y))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(Q)){var r=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:r}}var o=X.exec(t);if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10)};var i=Z.exec(t);if(i)return{red:parseInt(""+i[1],10),green:parseInt(""+i[2],10),blue:parseInt(""+i[3],10),alpha:parseFloat(""+i[4])};var a=J.exec(t);if(a){var s="rgb("+H(parseInt(""+a[1],10),parseInt(""+a[2],10)/100,parseInt(""+a[3],10)/100)+")",l=X.exec(s);if(!l)throw new Error("Couldn't generate valid rgb string from "+t+", it returned "+s+".");return{red:parseInt(""+l[1],10),green:parseInt(""+l[2],10),blue:parseInt(""+l[3],10)}}var c=ee.exec(t);if(c){var u="rgb("+H(parseInt(""+c[1],10),parseInt(""+c[2],10)/100,parseInt(""+c[3],10)/100)+")",d=X.exec(u);if(!d)throw new Error("Couldn't generate valid rgb string from "+t+", it returned "+u+".");return{red:parseInt(""+d[1],10),green:parseInt(""+d[2],10),blue:parseInt(""+d[3],10),alpha:parseFloat(""+c[4])}}throw new Error("Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.")}function ne(e){return function(e){var t,n=e.red/255,r=e.green/255,o=e.blue/255,i=Math.max(n,r,o),a=Math.min(n,r,o),s=(i+a)/2;if(i===a)return void 0!==e.alpha?{hue:0,saturation:0,lightness:s,alpha:e.alpha}:{hue:0,saturation:0,lightness:s};var l=i-a,c=s>.5?l/(2-i-a):l/(i+a);switch(i){case n:t=(r-o)/l+(r<o?6:0);break;case r:t=(o-n)/l+2;break;default:t=(n-r)/l+4}return t*=60,void 0!==e.alpha?{hue:t,saturation:c,lightness:s,alpha:e.alpha}:{hue:t,saturation:c,lightness:s}}(te(e))}var re=function(e){return 7===e.length&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e};function oe(e){var t=e.toString(16);return 1===t.length?"0"+t:t}function ie(e){return oe(Math.round(255*e))}function ae(e,t,n){return re("#"+ie(e)+ie(t)+ie(n))}function se(e,t,n){return H(e,t,n,ae)}function le(e,t,n){if("number"==typeof e&&"number"==typeof t&&"number"==typeof n)return se(e,t,n);if("object"==typeof e&&void 0===t&&void 0===n)return se(e.hue,e.saturation,e.lightness);throw new Error("Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).")}function ce(e,t,n,r){if("number"==typeof e&&"number"==typeof t&&"number"==typeof n&&"number"==typeof r)return r>=1?se(e,t,n):"rgba("+H(e,t,n)+","+r+")";if("object"==typeof e&&void 0===t&&void 0===n&&void 0===r)return e.alpha>=1?se(e.hue,e.saturation,e.lightness):"rgba("+H(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new Error("Passed invalid arguments to hsla, please pass multiple numbers e.g. hsl(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).")}function ue(e,t,n){if("number"==typeof e&&"number"==typeof t&&"number"==typeof n)return re("#"+oe(e)+oe(t)+oe(n));if("object"==typeof e&&void 0===t&&void 0===n)return re("#"+oe(e.red)+oe(e.green)+oe(e.blue));throw new Error("Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).")}function de(e,t,n,r){if("string"==typeof e&&"number"==typeof t){var o=te(e);return"rgba("+o.red+","+o.green+","+o.blue+","+t+")"}if("number"==typeof e&&"number"==typeof t&&"number"==typeof n&&"number"==typeof r)return r>=1?ue(e,t,n):"rgba("+e+","+t+","+n+","+r+")";if("object"==typeof e&&void 0===t&&void 0===n&&void 0===r)return e.alpha>=1?ue(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")";throw new Error("Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).")}var pe=function(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&("number"!=typeof e.alpha||void 0===e.alpha)},he=function(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&"number"==typeof e.alpha},fe=function(e){return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&("number"!=typeof e.alpha||void 0===e.alpha)},me=function(e){return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&"number"==typeof e.alpha},ge="Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.";function be(e){if("object"!=typeof e)throw new Error(ge);if(he(e))return de(e);if(pe(e))return ue(e);if(me(e))return ce(e);if(fe(e))return le(e);throw new Error(ge)}function _e(e){return function e(t,n,r){return function(){var o=r.concat(Array.prototype.slice.call(arguments));return o.length>=n?t.apply(this,o):e(t,n,o)}}(e,e.length,[])}function ve(e,t){var n=ne(t);return be(Object(r.a)({},n,{hue:(n.hue+parseFloat(e))%360}))}var ye=_e(ve);function we(e){var t=ne(e);return be(Object(r.a)({},t,{hue:(t.hue+180)%360}))}function xe(e,t,n){return Math.max(e,Math.min(t,n))}function Ee(e,t){var n=ne(t);return be(Object(r.a)({},n,{lightness:xe(0,1,n.lightness-parseFloat(e))}))}var ke=_e(Ee);function Ce(e,t){var n=ne(t);return be(Object(r.a)({},n,{saturation:xe(0,1,n.saturation-parseFloat(e))}))}var Se=_e(Ce);function Oe(e){var t=te(e),n=Object.keys(t).map((function(e){var n=t[e]/255;return n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)})),r=n[0],o=n[1],i=n[2];return parseFloat((.2126*r+.7152*o+.0722*i).toFixed(3))}function Te(e){return be(Object(r.a)({},ne(e),{saturation:0}))}function Ie(e){var t=te(e);return be(Object(r.a)({},t,{red:255-t.red,green:255-t.green,blue:255-t.blue}))}function Pe(e,t){var n=ne(t);return be(Object(r.a)({},n,{lightness:xe(0,1,n.lightness+parseFloat(e))}))}var Re=_e(Pe);function je(e,t,n){var o=te(t),i=Object(r.a)({},o,{alpha:"number"==typeof o.alpha?o.alpha:1}),a=te(n),s=Object(r.a)({},a,{alpha:"number"==typeof a.alpha?a.alpha:1}),l=i.alpha-s.alpha,c=2*parseFloat(e)-1,u=((c*l==-1?c:c+l)/(1+c*l)+1)/2,d=1-u;return de({red:Math.floor(i.red*u+s.red*d),green:Math.floor(i.green*u+s.green*d),blue:Math.floor(i.blue*u+s.blue*d),alpha:i.alpha+(s.alpha-i.alpha)*(parseFloat(e)/1)})}var Ne=_e(je);function $e(e,t){var n=te(t),o="number"==typeof n.alpha?n.alpha:1;return de(Object(r.a)({},n,{alpha:xe(0,1,(100*o+100*parseFloat(e))/100)}))}var Fe=_e($e);function Ae(e){return Oe(e)>.179?"#000":"#fff"}function Me(e,t){var n=ne(t);return be(Object(r.a)({},n,{saturation:xe(0,1,n.saturation+parseFloat(e))}))}var Le=_e(Me);function De(e,t){return be(Object(r.a)({},ne(t),{hue:parseFloat(e)}))}var ze=_e(De);function Be(e,t){return be(Object(r.a)({},ne(t),{lightness:parseFloat(e)}))}var Ue=_e(Be);function Ge(e,t){return be(Object(r.a)({},ne(t),{saturation:parseFloat(e)}))}var Ve=_e(Ge);function He(e,t){return Ne(parseFloat(e),"rgb(0, 0, 0)",t)}var We=_e(He);function qe(e,t){return Ne(parseFloat(e),"rgb(255, 255, 255)",t)}var Ke=_e(qe);function Ye(e,t){var n=te(t),o="number"==typeof n.alpha?n.alpha:1;return de(Object(r.a)({},n,{alpha:xe(0,1,(100*o-100*parseFloat(e))/100)}))}var Qe=_e(Ye);function Xe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=Array.isArray(t[0]);if(!r&&t.length>8)throw new Error("The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation");return{animation:t.map((function(e){if(r&&!Array.isArray(e)||!r&&Array.isArray(e))throw new Error("To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')");if(Array.isArray(e)&&e.length>8)throw new Error("The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation");return Array.isArray(e)?e.join(" "):e})).join(", ")}}function Ze(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{backgroundImage:t.join(", ")}}function Je(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{background:t.join(", ")}}var et=["top","right","bottom","left"];function tt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i;return"string"==typeof e&&et.indexOf(e)>=0?((i={})["border"+o(e)+"Width"]=n[0],i["border"+o(e)+"Style"]=n[1],i["border"+o(e)+"Color"]=n[2],i):(n.unshift(e),{borderWidth:n[0],borderStyle:n[1],borderColor:n[2]})}function nt(e,t){var n,r,i=o(e);if(!t&&0!==t)throw new Error("borderRadius expects a radius value as a string or number as the second argument.");if("Top"===i||"Bottom"===i)return(n={})["border"+i+"RightRadius"]=t,n["border"+i+"LeftRadius"]=t,n;if("Left"===i||"Right"===i)return(r={})["borderTop"+i+"Radius"]=t,r["borderBottom"+i+"Radius"]=t,r;throw new Error('borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.')}function rt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return s.apply(void 0,["borderStyle"].concat(t))}function ot(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return s.apply(void 0,["borderWidth"].concat(t))}function it(e,t){return e(t?":"+t:"")}function at(e,t,n){if(!t)throw new Error("You must provide a template to this method.");if(0===e.length)return it(t,null);for(var r=[],o=0;o<e.length;o+=1){if(n&&n.indexOf(e[o])<0)throw new Error("You passed an unsupported selector state to this method.");r.push(it(t,e[o]))}return r=r.join(",")}var st=[void 0,null,"active","focus","hover"];function lt(e){return"button"+e+',\n  input[type="button"]'+e+',\n  input[type="reset"]'+e+',\n  input[type="submit"]'+e}function ct(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return at(t,lt,st)}function ut(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return s.apply(void 0,["margin"].concat(t))}function dt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return s.apply(void 0,["padding"].concat(t))}var pt=["absolute","fixed","relative","static","sticky"];function ht(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];if(pt.indexOf(e)>=0)return Object(r.a)({position:e},s.apply(void 0,[""].concat(n)));var i=e;return s.apply(void 0,["",i].concat(n))}function ft(e,t){return void 0===t&&(t=e),{height:e,width:t}}var mt=[void 0,null,"active","focus","hover"];function gt(e){return'input[type="color"]'+e+',\n    input[type="date"]'+e+',\n    input[type="datetime"]'+e+',\n    input[type="datetime-local"]'+e+',\n    input[type="email"]'+e+',\n    input[type="month"]'+e+',\n    input[type="number"]'+e+',\n    input[type="password"]'+e+',\n    input[type="search"]'+e+',\n    input[type="tel"]'+e+',\n    input[type="text"]'+e+',\n    input[type="time"]'+e+',\n    input[type="url"]'+e+',\n    input[type="week"]'+e+",\n    input:not([type])"+e+",\n    textarea"+e}function bt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return at(t,gt,mt)}function _t(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(Array.isArray(t[0])&&2===t.length){var r=t[1];if("string"!=typeof r)throw new Error("Property must be a string value.");return{transition:t[0].map((function(e){return e+" "+r})).join(", ")}}return{transition:t.join(", ")}}},608:function(e,t,n){"use strict";var r=n(0),o=n(3),i=n(18),a={ARIA_CHECKED:"aria-checked",CHECKMARK_SELECTOR:".mdc-chip__checkmark",ENTRY_ANIMATION_NAME:"mdc-chip-entry",INTERACTION_EVENT:"MDCChip:interaction",LEADING_ICON_SELECTOR:".mdc-chip__icon--leading",REMOVAL_EVENT:"MDCChip:removal",SELECTION_EVENT:"MDCChip:selection",TRAILING_ICON_INTERACTION_EVENT:"MDCChip:trailingIconInteraction",TRAILING_ICON_SELECTOR:".mdc-chip__icon--trailing"},s={CHECKMARK:"mdc-chip__checkmark",CHIP_EXIT:"mdc-chip--exit",HIDDEN_LEADING_ICON:"mdc-chip__icon--leading-hidden",LEADING_ICON:"mdc-chip__icon--leading",SELECTED:"mdc-chip--selected",TRAILING_ICON:"mdc-chip__icon--trailing"},l={bottom:0,height:0,left:0,right:0,top:0,width:0},c=function(e){function t(n){var r=e.call(this,o.__assign({},t.defaultAdapter,n))||this;return r.shouldRemoveOnTrailingIconClick_=!0,r}return o.__extends(t,e),Object.defineProperty(t,"strings",{get:function(){return a},enumerable:!0,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return s},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},addClassToLeadingIcon:function(){},eventTargetHasClass:function(){return!1},getCheckmarkBoundingClientRect:function(){return l},getComputedStyleValue:function(){return""},getRootBoundingClientRect:function(){return l},hasClass:function(){return!1},hasLeadingIcon:function(){return!1},notifyInteraction:function(){},notifyRemoval:function(){},notifySelection:function(){},notifyTrailingIconInteraction:function(){},removeClass:function(){},removeClassFromLeadingIcon:function(){},setAttr:function(){},setStyleProperty:function(){}}},enumerable:!0,configurable:!0}),t.prototype.isSelected=function(){return this.adapter_.hasClass(s.SELECTED)},t.prototype.setSelected=function(e){e?(this.adapter_.addClass(s.SELECTED),this.adapter_.setAttr(a.ARIA_CHECKED,"true")):(this.adapter_.removeClass(s.SELECTED),this.adapter_.setAttr(a.ARIA_CHECKED,"false")),this.adapter_.notifySelection(e)},t.prototype.getShouldRemoveOnTrailingIconClick=function(){return this.shouldRemoveOnTrailingIconClick_},t.prototype.setShouldRemoveOnTrailingIconClick=function(e){this.shouldRemoveOnTrailingIconClick_=e},t.prototype.getDimensions=function(){var e=this,t=function(){return e.adapter_.getRootBoundingClientRect()};if(!this.adapter_.hasLeadingIcon()){var n=e.adapter_.getCheckmarkBoundingClientRect();if(n){var r=t();return{bottom:r.bottom,height:r.height,left:r.left,right:r.right,top:r.top,width:r.width+n.height}}}return t()},t.prototype.beginExit=function(){this.adapter_.addClass(s.CHIP_EXIT)},t.prototype.handleInteraction=function(e){var t="Enter"===e.key||13===e.keyCode;("click"===e.type||t)&&this.adapter_.notifyInteraction()},t.prototype.handleTransitionEnd=function(e){var t=this;if(this.adapter_.eventTargetHasClass(e.target,s.CHIP_EXIT)){if("width"===e.propertyName)this.adapter_.notifyRemoval();else if("opacity"===e.propertyName){var n=this.adapter_.getComputedStyleValue("width");requestAnimationFrame((function(){t.adapter_.setStyleProperty("width",n),t.adapter_.setStyleProperty("padding","0"),t.adapter_.setStyleProperty("margin","0"),requestAnimationFrame((function(){t.adapter_.setStyleProperty("width","0")}))}))}}else"opacity"===e.propertyName&&(this.adapter_.eventTargetHasClass(e.target,s.LEADING_ICON)&&this.adapter_.hasClass(s.SELECTED)?this.adapter_.addClassToLeadingIcon(s.HIDDEN_LEADING_ICON):this.adapter_.eventTargetHasClass(e.target,s.CHECKMARK)&&!this.adapter_.hasClass(s.SELECTED)&&this.adapter_.removeClassFromLeadingIcon(s.HIDDEN_LEADING_ICON))},t.prototype.handleTrailingIconInteraction=function(e){var t="Enter"===e.key||13===e.keyCode;e.stopPropagation(),("click"===e.type||t)&&(this.adapter_.notifyTrailingIconInteraction(),this.shouldRemoveOnTrailingIconClick_&&this.beginExit())},t}(i.a),u=n(11),d=n(1173),p=n(39),h=n(82),f=n(63),m=n(22);n.d(t,"a",(function(){return k}));var g,b=(g=function(e,t){return(g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}g(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),_=function(){return(_=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},y=Object(f.a)({})(Object(u.a)({tag:"button",displayName:"ChipRoot",classNames:function(e){return["mdc-chip",{"mdc-chip--selected":e.selected}]},consumeProps:["selected"]})),w=(function(e){function t(t){var n=e.call(this,t)||this;return n.root=n.createElement("root"),n.id="",n.checkmarkEl=null,n.handleInteraction=n.handleInteraction.bind(n),n.handleTransitionEnd=n.handleTransitionEnd.bind(n),n.handleTrailingIconInteraction=n.handleTrailingIconInteraction.bind(n),n}b(t,e),t.prototype.componentDidMount=function(){e.prototype.componentDidMount.call(this),this.id=this.root.ref&&this.root.ref.id?this.root.ref.id:this._reactInternalFiber.key||Object(d.a)("chip")},t.prototype.getDefaultFoundation=function(){var e=this;return new c({addClass:function(t){e.root.addClass(t)},removeClass:function(t){return e.root.removeClass(t)},hasClass:function(t){return e.root.hasClass(t)},addClassToLeadingIcon:function(e){},removeClassFromLeadingIcon:function(e){},eventTargetHasClass:function(t,n){return e.root.hasClass(n)||t.classList.contains(n)},notifyInteraction:function(){return e.emit("onInteraction",{chipId:e.id},!0)},notifySelection:function(t){return e.emit("onSelect",{chipId:e.id,selected:t},!0)},notifyTrailingIconInteraction:function(){return e.emit("onTrailingIconInteraction",{chipId:e.id},!0)},notifyRemoval:function(){return e.emit("onRemove",{chipId:e.id,root:e.root.ref},!0)},getComputedStyleValue:function(t){return e.root.ref?window.getComputedStyle(e.root.ref).getPropertyValue(t):""},setStyleProperty:function(t,n){e.root.setStyle(t,n)},hasLeadingIcon:function(){return!!e.props.icon},getRootBoundingClientRect:function(){return e.root.ref?e.root.ref.getBoundingClientRect():{}},getCheckmarkBoundingClientRect:function(){return e.checkmarkEl&&e.checkmarkEl.getBoundingClientRect()},setAttr:function(t,n){return e.root.setProp(t,n)}})},t.prototype.handleInteraction=function(e){return"click"===e.type&&this.props.onClick&&this.props.onClick(e),"keydown"===e.type&&this.props.onKeyDown&&this.props.onKeyDown(e),this.foundation.handleInteraction(e)},t.prototype.handleTransitionEnd=function(e){this.foundation.handleTransitionEnd(e)},t.prototype.handleTrailingIconInteraction=function(e){return this.foundation.handleTrailingIconInteraction(e)},t.prototype.render=function(){var e=this,t=this.props,n=(t.onInteraction,t.onTrailingIconInteraction,t.onRemove,t.onSelect,t.icon),o=t.trailingIcon,i=t.checkmark,a=t.text,s=t.label,l=t.children,c=v(t,["onInteraction","onTrailingIconInteraction","onRemove","onSelect","icon","trailingIcon","checkmark","text","label","children"]),u=s;return a&&(Object(p.a)("Chip `text` is now `label`"),u=a),r.createElement(y,_({tabIndex:0},this.root.props(c),{onClick:this.handleInteraction,onKeyDown:this.handleInteraction,onTransitionEnd:this.handleTransitionEnd,ref:this.root.setRef}),!!n&&r.createElement(E,{icon:n,leading:!0,hidden:c.selected&&i}),!!i&&r.createElement(w,{elementRef:function(t){return e.checkmarkEl=t}}),r.createElement("div",{className:"mdc-chip__text"},u,l),!!o&&r.createElement(E,{icon:o,trailing:!0,onClick:this.handleTrailingIconInteraction,onKeyDown:this.handleTrailingIconInteraction}))},t.displayName="Chip"}(h.a),function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return b(t,e),t.prototype.shouldComponentUpdate=function(){return!1},t.prototype.render=function(){return r.createElement("div",{ref:this.props.elementRef,className:"mdc-chip__checkmark"},r.createElement("svg",{className:"mdc-chip__checkmark-svg",viewBox:"-2 -3 30 30"},r.createElement("path",{className:"mdc-chip__checkmark-path",fill:"none",stroke:"black",d:"M1.73,12.91 8.1,19.28 22.79,4.59"})))},t}(r.Component)),x=Object(u.a)({displayName:"ChipIconRoot",tag:m.Icon,classNames:function(e){return["mdc-chip__icon",{"mdc-chip__icon--leading":e.leading,"mdc-chip__icon--leading-hidden":e.hidden,"mdc-chip__icon--trailing":e.trailing}]},consumeProps:["trailing","leading"]}),E=function(e){var t=Object.keys(e).some((function(e){return e.startsWith("on")})),n=e.trailing||t?{role:"button",tabIndex:0}:{};return r.createElement(x,_({},n,e))};E.displayName="ChipIcon";var k=Object(u.a)({displayName:"ChipSet",classNames:function(e){return["mdc-chip-set",{"mdc-chip-set--choice":e.choice,"mdc-chip-set--filter":e.filter}]},consumeProps:["filter","choice"]})},610:function(e,t,n){"use strict";function r(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function o(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function i(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}function a(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,a=null,s=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?a="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(a="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?s="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(s="UNSAFE_componentWillUpdate"),null!==n||null!==a||null!==s){var l=e.displayName||e.name,c="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==a?"\n  "+a:"")+(null!==s?"\n  "+s:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=r,t.componentWillReceiveProps=o),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=i;var u=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var r=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;u.call(this,e,t,r)}}return e}n.r(t),n.d(t,"polyfill",(function(){return a})),r.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0},611:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n(0),o=n.n(r),i=n(21),a=n.n(i),s=!0,l=!1,c=null,u={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function d(){s=!0}function p(){s=!1}function h(){"hidden"===this.visibilityState&&l&&(s=!0)}function f(e){var t,n,r,o=e.target;try{return o.matches(":focus-visible")}catch(e){}return s||(n=(t=o).type,!("INPUT"!==(r=t.tagName)||!u[n]||t.readOnly)||"TEXTAREA"===r&&!t.readOnly||!!t.isContentEditable)}function m(){l=!0,window.clearTimeout(c),c=window.setTimeout((function(){l=!1,window.clearTimeout(c)}),100)}function g(){return{isFocusVisible:f,onBlurVisible:m,ref:o.a.useCallback((function(e){var t,n=a.a.findDOMNode(e);null!=n&&((t=n.ownerDocument).addEventListener("keydown",d,!0),t.addEventListener("mousedown",p,!0),t.addEventListener("pointerdown",p,!0),t.addEventListener("touchstart",p,!0),t.addEventListener("visibilitychange",h,!0))}),[])}}},613:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n(575);function o(e){return Intl&&Intl.NumberFormat?(new Intl.NumberFormat).format(e):e.toString()}function i(e){switch(e){case r.a.BLOG:return"book";case r.a.COMMENT:return"question_answer";case r.a.COMPETITION:return"trophy";case r.a.DATASET:return"table_chart";case r.a.KERNEL:return"code";case r.a.ORGANIZATION:return"business";case r.a.TOPIC:return"question_answer";case r.a.USER:return"account_circle";case r.a.TUTORIAL:return"code";case r.a.COURSE:return"book";default:throw new Error(`Unrecognized category: ${e}`)}}},619:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a}));const r=e=>{if("string"==typeof e)return e;return new Date(e).toISOString()},o=e=>null==e||"number"!=typeof e&&!e?null:r(e),i=e=>e instanceof Date?e:new Date(e),a=e=>null===e?null:i(e)},621:function(e,t,n){"use strict";n.r(t);var r=n(558);n.d(t,"default",(function(){return r.a}))},646:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(664),o=n(575),i=n(613);const a=new Set(["date","in","by","tag","authorUserName","sortBy","competitionEvaluationAlgorithm","datasetLicense","datasetSize","datasetSizeGroup","datasetFileTypes","kernelLanguageGroup","viewedByYou"]),s=new Set(["blogs","competitions","datasets","notebooks","comments","organizations","topics","users","courses","tutorials"]),l=new Set(["1","7","90"]),c=new Set(["relevancy","date"]);class u{constructor(e,t,n,r){this.type=e,this.name=t,this.group=n,this.count=r}static fromCategory(e,t){switch(e){case o.a.BLOG:return new u("tag","blogs","in",t);case o.a.COMMENT:return new u("tag","comments","in",t);case o.a.COMPETITION:return new u("tag","competitions","in",t);case o.a.DATASET:return new u("tag","datasets","in",t);case o.a.KERNEL:return new u("tag","notebooks","in",t);case o.a.ORGANIZATION:return new u("tag","organizations","in",t);case o.a.TOPIC:return new u("tag","topics","in",t);case o.a.USER:return new u("tag","users","in",t);case o.a.TUTORIAL:return new u("tag","tutorials","in",t);case o.a.COURSE:return new u("tag","courses","in",t);default:throw new Error(`Unrecognized fromCategory: ${e}`)}}static fromQueryString(e){const t=e.split(":"),n=(t[0]||"").trim();let r=(t[1]||"").trim();return r.startsWith('"')&&r.endsWith('"')&&(r=r.slice(1,-1)),new u("user",r,n)}toQueryString(){let e=this.name;return e.match(" ")&&(e=`"${e}"`),`${this.group}:${e}`}getType(){return this.type}getName(){return this.name}getUserVisibleName(){return"date"===this.group?this.getDateUserVisibleName():"in"===this.group||"sortBy"===this.group?this.getNameAsTitleCase():this.name}isValid(){return this.isGroupValid()&&this.isNameValid()}isNameValid(){return"in"===this.group?s.has(this.name):"sortBy"===this.group?c.has(this.name):"date"===this.group?l.has(this.name):this.name.length>0}isGroupValid(){return a.has(this.group)}getDateUserVisibleName(){switch(this.name){case"1":return"Today";case"7":return"Last week";case"90":return"Last 90 days";default:return this.name}}getNameAsTitleCase(){return this.name.split(" ").map(e=>e[0].toUpperCase()+e.slice(1)).join(" ")}getGroup(){return this.group}getUserVisibleGroup(){return Object(r.a)(this.group)}getCount(){return this.count}getFormattedCount(){return void 0===this.count?"":Object(i.a)(this.count)}isCategoryFilter(){return"in"===this.group&&this.isValid()}getCategory(){if(this.isCategoryFilter())switch(this.name){case"blogs":return o.a.BLOG;case"competitions":return o.a.COMPETITION;case"datasets":return o.a.DATASET;case"notebooks":return o.a.KERNEL;case"comments":return o.a.COMMENT;case"organizations":return o.a.ORGANIZATION;case"topics":return o.a.TOPIC;case"users":return o.a.USER;case"courses":return o.a.COURSE;case"tutorials":return o.a.TUTORIAL}return null}isSortFilter(){return"sortBy"===this.group&&this.isValid()}isDateFilter(){return"date"===this.group&&this.isValid()}equals(e){return this.toQueryString()===e.toQueryString()}}const d=Array.from(c).map(e=>new u("radio",e,"sortBy"))},658:function(e,t,n){"use strict";var r=n(1),o=n.n(r),i=n(0),a=n(17),s=n(40),l=n(41),c=n(2);const u={light:{default:{background:"transparent",border:c.d,color:c.n},hover:{border:c.n,background:"transparent"},focus:{shadow:c.n,removeBackground:c.e},selected:{background:c.c,border:"transparent"},disabled:{background:"transparent",color:c.e,border:c.b}},dark:{default:{background:"transparent",border:c.i,color:c.t},hover:{border:c.t,background:"transparent"},focus:{shadow:c.t,removeBackground:c.h},selected:{background:c.j,border:"transparent"},disabled:{background:"transparent",color:c.h,border:c.j}}};n.d(t,"a",(function(){return h}));const d=o.a.button`
  display: flex;
  align-items: center;
  height: ${e=>e.theme.material.spacing(8)};
  border: 1px solid ${e=>e.chipTheme.default.border};
  border-radius: ${e=>e.theme.material.spacing(4)};
  background-color: ${e=>e.chipTheme.default.background};
  padding: 0 ${e=>e.theme.material.spacing(3)};
  white-space: nowrap;
  margin-right: ${e=>e.theme.material.spacing(2)};

  cursor: pointer;
  transition: all 0.3s ease;

  .mdc-chip-set & {
    margin: 4px;
    display: inline-flex;
  }

  & ${l.r} {
    color: ${e=>e.chipTheme.default.color};
  }

  &:hover {
    border-color: ${e=>e.chipTheme.hover.border};
  }

  &:focus:not(focus-visible) {
    outline: none;
  }

  &:focus-visible:not(.has-remove) {
    box-shadow: inset 0 0 0 3px ${e=>e.chipTheme.focus.shadow};
  }

  &.selected {
    background-color: ${e=>e.chipTheme.selected.background};
    border-color: ${e=>e.chipTheme.selected.border};

    ${l.r} {
      color: ${e=>e.chipTheme.selected.color};
    }
  }

  &.disabled {
    background-color: ${e=>e.chipTheme.disabled.background};
    border-color: ${e=>e.chipTheme.disabled.border};
    cursor: initial;

    ${l.r} {
      color: ${e=>e.chipTheme.disabled.color};
    }
  }

  i {
    margin-left: ${e=>e.theme.material.spacing(2)};

    color: ${e=>e.chipTheme.default.border};

    &:hover {
      color: ${e=>e.chipTheme.hover.border};
    }

    &:disabled {
      color: ${e=>e.chipTheme.disabled.border};
    }
  }
`,p=o()(s.a)`
  outline: none;

  &:active,
  &:hover,
  &:focus-visible {
    border-radius: 50%;
    background: ${e=>u[e.theme.name].focus.removeBackground};
  }
`,h=e=>{const{children:t,disabled:n,className:o,leadingIcon:c,selected:h,style:f,onClick:m,onRemove:g}=e,b=i.useContext(r.ThemeContext),_=u[b.name],v=i.useCallback(e=>{n||m&&(e.preventDefault(),m(e))},[m,n]),y=i.useCallback(()=>{n||g&&g()},[g,n]);return i.createElement(d,{chipTheme:_,className:Object(a.a)(o,h&&"selected",n&&"disabled",g&&"has-remove"),style:f,onClick:v,role:"checkbox","aria-checked":null!=h&&h,tabIndex:g?-1:0},c&&i.createElement(s.a,{icon:c,color:_.default.color,size:"xsmall"}),i.createElement(l.r,null,t),g&&i.createElement(p,{icon:"close",size:"small",color:h?_.default.color:_.default.border,onClick:y}))}},660:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextLink=t.Code=t.Overline=t.Caption=t.Text=t.ButtonText=t.Span3=t.Span2=t.Span1=t.Body3=t.Body2=t.Body1=t.Subhead=t.Heading6=t.Heading5=t.Heading4=t.Heading3=t.Heading2=t.Heading1=t.Display6=t.Display5=t.Display4=t.Display3=t.Display2=t.Display1=void 0;const r=n(1),o=n(694),i=r.default.div`
  color: ${e=>{var t;return o.typographyColors[(null===(t=e.theme)||void 0===t?void 0:t.name)?e.theme.name:"light"][e.emphasis||"high"]}};
`;t.Display1=r.default(i)`
  font-family: zeitung, sans-serif;
  font-size: 64px;
  line-height: 76px;
  font-weight: 700;
`,t.Display2=r.default(i)`
  font-family: zeitung, sans-serif;
  font-size: 56px;
  line-height: 64px;
  font-weight: 700;
`,t.Display3=r.default(i)`
  font-family: zeitung, sans-serif;
  font-size: 44px;
  line-height: 52px;
  font-weight: 700;
`,t.Display4=r.default(i)`
  font-family: zeitung, sans-serif;
  font-size: 36px;
  line-height: 44px;
  font-weight: 700;
`,t.Display5=r.default(i)`
  font-family: zeitung, sans-serif;
  font-size: 28px;
  line-height: 36px;
  font-weight: 700;
`,t.Display6=r.default(i)`
  font-family: zeitung, sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
`,t.Heading1=r.default(i.withComponent("h1"))`
  font-size: 36px;
  line-height: 44px;
  font-weight: 700;
`,t.Heading2=r.default(i.withComponent("h2"))`
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
`,t.Heading3=r.default(i.withComponent("h3"))`
  font-size: 28px;
  line-height: 36px;
  font-weight: 700;
`,t.Heading4=r.default(i.withComponent("h4"))`
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
`,t.Heading5=r.default(i.withComponent("h5"))`
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
`,t.Heading6=r.default(i.withComponent("h6"))`
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
`,t.Subhead=r.default(i)`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
`,t.Body1=r.default(i.withComponent("p"))`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`,t.Body2=r.default(i.withComponent("p"))`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`,t.Body3=r.default(i.withComponent("p"))`
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
`,t.Span1=r.default(i.withComponent("span"))`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`,t.Span2=r.default(i.withComponent("span"))`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`,t.Span3=r.default(i.withComponent("span"))`
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
`,t.ButtonText=r.default(i.withComponent("span"))`
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
`,t.Text=r.default(i.withComponent("span"))`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`,t.Caption=r.default(i.withComponent("span"))`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
`,t.Overline=r.default(i.withComponent("span"))`
  font-family: Inter, monospace;
  font-style: normal;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 16px;
  letter-spacing: 1px;
`,t.Code=r.default(i.withComponent("span"))`
  font-family: "Roboto Mono", monospace;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
`,t.TextLink=r.default(i.withComponent("a"))`
  cursor: pointer;
  border-bottom: 1px solid;
  border-color: ${e=>o.typographyColors[e.theme.name].anchor};
  text-decoration: none;

  &:visited {
    border-color: ${e=>o.typographyColors[e.theme.name].medium};
  }

  &:hover {
    border-color: ${e=>o.typographyColors[e.theme.name].high};
  }
`},662:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));const r=(()=>{const e=("; "+document.cookie).split("; searchToken=");let t;return 2===e.length&&(t=e.pop().split(";").shift()),document.cookie="searchToken=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t})();function o(e){document.cookie=`searchToken=${e};path=/`}function i(){return r}},664:function(e,t,n){"use strict";var r=n(646),o=n(982);class i{constructor(e,t,n){this.category=e,this.items=t,this.count=n}getItems(){return this.items}getCount(){return this.count}getCategory(){return this.category}}var a=n(469);class s extends a.a{constructor(e){super(e)}getSubtitle(){return this.getByAuthorText()}getUserVisibleCategory(){return"Blog"}getFullSubheaderItems(){return this.getCommonSubheaderItems()}getCondensedSubheaderItems(){return[{text:this.getUserVisibleCategory()},...this.getFullSubheaderItems()]}}var l=n(61);class c extends a.a{constructor(e){super(e)}getSubtitle(){return this.getByAuthorText()}getUserVisibleCategory(){return"Comment"}getFullSubheaderItems(){const e=this.getCommonSubheaderItems();e.push({text:l(this.getDate()).fromNow()});const t=this.getForumName();return t&&e.push({text:t}),e}getCondensedSubheaderItems(){return[{text:this.getUserVisibleCategory()},...this.getFullSubheaderItems()]}getForumName(){return this.model.commentInfo&&this.model.commentInfo.forumName}getForumType(){return this.model.commentInfo&&this.model.commentInfo.forumType}getMatchingText(){return this.model.commentInfo&&this.model.commentInfo.matchingText}}var u=n(619),d=n(4);class p extends a.a{constructor(e){super(e)}getSubtitle(){const e=[this.getUserVisibleType()];return this.model.competitionInfo&&this.model.competitionInfo.isKernelsOnly&&e.push("Kernels competition"),e.join(" • ")}getUserVisibleCategory(){return"Competition"}getFullSubheaderItems(){const e=this.getCommonSubheaderItems(),t=this.getDeadlineDate();t&&e.push({text:l(t).fromNow()});const n=this.getPrizeValue();n&&e.push({text:`$${n.toLocaleString()}`});const r=this.getTeamsCount();return r&&e.push({text:`${r} teams`}),e}getCondensedSubheaderItems(){return[{text:this.getUserVisibleCategory()},...this.getFullSubheaderItems()]}getTeamsCount(){return this.model.competitionInfo&&this.model.competitionInfo.teamsCount}getDeadlineDate(){const e=this.model.competitionInfo&&this.model.competitionInfo.deadlineDate;return e&&Object(u.a)(e)||void 0}getPrizeValue(){return this.model.competitionInfo&&this.model.competitionInfo.prizeValue}getHasEntered(){return this.model.competitionInfo&&this.model.competitionInfo.hasEntered}getHostSegmentType(){return this.model.competitionInfo&&this.model.competitionInfo.type}getUserVisibleType(){switch(this.getHostSegmentType()||d.c.Sdk.Competitions.Protos.HostSegment.UNSPECIFIED){case d.c.Sdk.Competitions.Protos.HostSegment.UNSPECIFIED:return"None";case d.c.Sdk.Competitions.Protos.HostSegment.FEATURED:return"Featured";case d.c.Sdk.Competitions.Protos.HostSegment.RESEARCH:return"Research";case d.c.Sdk.Competitions.Protos.HostSegment.RECRUITMENT:return"Recruitment";case d.c.Sdk.Competitions.Protos.HostSegment.PROSPECT:return"Prospect";case d.c.Sdk.Competitions.Protos.HostSegment.GETTING_STARTED:return"Getting Started";case d.c.Sdk.Competitions.Protos.HostSegment.MASTERS:return"Masters";case d.c.Sdk.Competitions.Protos.HostSegment.GE_QUESTS:return"GE Quests";case d.c.Sdk.Competitions.Protos.HostSegment.PLAYGROUND:return"Playground";case d.c.Sdk.Competitions.Protos.HostSegment.DATASETS:return"Datasets";case d.c.Sdk.Competitions.Protos.HostSegment.IN_CLASS:return"In Class";case d.c.Sdk.Competitions.Protos.HostSegment.ANALYTICS:return"Analytics";default:return""}}isKernelsOnly(){return this.model.competitionInfo&&this.model.competitionInfo.isKernelsOnly}}class h extends a.a{constructor(e){super(e)}getSubtitle(){return this.getByAuthorText()}getUserVisibleCategory(){return"Learn Micro-Course"}getFullSubheaderItems(){return this.getCommonSubheaderItems()}getCondensedSubheaderItems(){return[{text:this.getUserVisibleCategory()},...this.getFullSubheaderItems()]}}var f=n(447);class m extends a.a{constructor(e){super(e)}getSubtitle(){return this.getByAuthorText()}getUserVisibleCategory(){return"Dataset"}getFullSubheaderItems(){const e=this.getCommonSubheaderItems();e.push({text:l(this.getDate()).fromNow()});const t=this.getFileTypes(),n=this.getFilesCount();t&&t.length&&n&&e.push({text:`${n} ${1===n?"file":"files"} (${t.join(", ")})`});const r=this.getSize();return r&&e.push({text:f(r,{round:0})}),e.push(this.getVotesSubheaderItem()),e}getCondensedSubheaderItems(){return[{text:this.getUserVisibleCategory()},...this.getFullSubheaderItems()]}getSize(){return this.model.datasetInfo&&this.model.datasetInfo.size}getFileTypes(){return this.model.datasetInfo&&this.model.datasetInfo.fileTypes}getKernelsCount(){return this.model.datasetInfo&&this.model.datasetInfo.kernelsCount}getFilesCount(){return this.model.datasetInfo&&this.model.datasetInfo.filesCount}}class g extends a.a{constructor(e){super(e)}getSubtitle(){return this.getByAuthorText()}getUserVisibleCategory(){return"Notebook"}getFullSubheaderItems(){const e=this.getCommonSubheaderItems();e.push({text:l(this.getDate()).fromNow()});const t=this.getRunTimeText();t&&e.push({text:t});const n=this.getLanguageGroup();n&&e.push({text:n}),e.push(this.getVotesSubheaderItem());const r=this.getDataSource();return r&&e.push({text:r}),e}getCondensedSubheaderItems(){return[{text:this.getUserVisibleCategory()},...this.getFullSubheaderItems()]}getRunTimeText(){if(!this.getSecondsToRun())return null;const e=new Date(1e3*(this.getSecondsToRun()||0));return(e.getUTCHours()>0?`${e.getUTCHours()}h`:e.getUTCMinutes()>0?`${e.getUTCMinutes()}m`:`${e.getUTCSeconds()}s`)+" to run"}getLanguageGroup(){return this.model.kernelInfo&&this.model.kernelInfo.languageGroup}getSecondsToRun(){return this.model.kernelInfo&&this.model.kernelInfo.secondsToRun}getDataSource(){return this.model.kernelInfo&&this.model.kernelInfo.dataSource}getForksCount(){return this.model.kernelInfo&&this.model.kernelInfo.forksCount}}class b extends a.a{constructor(e){super(e)}getSubtitle(){return this.getLocation()}getUserVisibleCategory(){return"Organization"}getFullSubheaderItems(){return this.getCommonSubheaderItems()}getCondensedSubheaderItems(){return[{text:this.getUserVisibleCategory()},...this.getFullSubheaderItems()]}getLocation(){return this.model.organizationInfo&&this.model.organizationInfo.location||""}}class _ extends a.a{constructor(e){super(e)}getSubtitle(){return this.getByAuthorText()}getUserVisibleCategory(){return"Discussion topic"}getFullSubheaderItems(){const e=this.getCommonSubheaderItems(),t=this.getCreationDate();t&&e.push({text:l(t).fromNow()});const n=this.getForumName();return n&&e.push({text:n}),e}getCondensedSubheaderItems(){return[{text:this.getUserVisibleCategory()},...this.getFullSubheaderItems()]}getCreationDate(){const e=this.model.topicInfo&&this.model.topicInfo.creationDate;return e&&Object(u.a)(e)||void 0}getForumName(){return this.model.topicInfo&&this.model.topicInfo.forumName}}class v extends a.a{constructor(e){super(e)}getSubtitle(){return this.getByAuthorText()}getUserVisibleCategory(){return"Tutorial"}getFullSubheaderItems(){return this.getCommonSubheaderItems()}getCondensedSubheaderItems(){return[{text:this.getUserVisibleCategory()},...this.getFullSubheaderItems()]}}var y=n(957),w=n(575);n.d(t,"e",(function(){return x})),n.d(t,"d",(function(){return E})),n.d(t,"c",(function(){return k})),n.d(t,"f",(function(){return S})),n.d(t,"b",(function(){return O})),n.d(t,"a",(function(){return T}));const x=e=>{switch(e.documentType){case w.a.BLOG:return new s(e);case w.a.COMMENT:return new c(e);case w.a.COMPETITION:return new p(e);case w.a.DATASET:return new m(e);case w.a.KERNEL:return new g(e);case w.a.ORGANIZATION:return new b(e);case w.a.TOPIC:return new _(e);case w.a.USER:return new y.a(e);case w.a.TUTORIAL:return new v(e);case w.a.COURSE:return new h(e);case w.a.UNSPECIFIED:default:throw new Error(`Unexpected search document type: ${e.documentType}`)}},E=e=>{const t=e.type;switch(t){case w.a.BLOG:return new i(t,e.documents.map(e=>new s(e)),e.count);case w.a.COMMENT:return new i(t,e.documents.map(e=>new c(e)),e.count);case w.a.COMPETITION:return new i(t,e.documents.map(e=>new p(e)),e.count);case w.a.DATASET:return new i(t,e.documents.map(e=>new m(e)),e.count);case w.a.KERNEL:return new i(t,e.documents.map(e=>new g(e)),e.count);case w.a.ORGANIZATION:return new i(t,e.documents.map(e=>new b(e)),e.count);case w.a.TOPIC:return new i(t,e.documents.map(e=>new _(e)),e.count);case w.a.USER:return new i(t,e.documents.map(e=>new y.a(e)),e.count);case w.a.COURSE:return new i(t,e.documents.map(e=>new h(e)),e.count);case w.a.TUTORIAL:return new i(t,e.documents.map(e=>new v(e)),e.count);case w.a.UNSPECIFIED:default:throw new Error(`Unrecognized category: ${t}`)}};function k(e){return e.map(C).filter(e=>e.hasOption())}function C(e){const t=function(e){switch(e){case w.c.CHECKBOX:return"checkbox";case w.c.RADIO:return"radio";case w.c.TEXT:return"tag";default:return e}}(e.type),n=e.name,i=e.options.map(e=>(function(e,t,n){return new r.a(t,e.name,n,e.count)})(e,t,n));return new o.a(t,n,i)}function S(e){return C({type:w.c.TEXT,name:w.b.TAG,options:e,categories:[]})}function O(e){switch(e){case w.a.BLOG:return"Blogs";case w.a.COMMENT:return"Comments";case w.a.COMPETITION:return"Competitions";case w.a.DATASET:return"Datasets";case w.a.KERNEL:return"Notebooks";case w.a.ORGANIZATION:return"Organizations";case w.a.TOPIC:return"Topics";case w.a.USER:return"Users";case w.a.TUTORIAL:return"Tutorials";case w.a.COURSE:return"Courses";default:throw new Error(`Unrecognized category: ${e}`)}}function T(e){if(!e)return"";let t=e[0].toUpperCase();for(let n=1;n<e.length;n++){const r=e[n];r===r.toUpperCase()&&(t+=" "),t+=r}return t}},670:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(671);Object.defineProperty(t,"Avatar",{enumerable:!0,get:function(){return r.Avatar}})},671:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Avatar=void 0;const r=n(0),o=n(499),i=37;class a extends r.Component{constructor(){super(...arguments),this.width=this.props.width||i,this.borderRadius=`${this.width/10||0}px`,this.margin=this.props.tierMargin?this.props.tierMargin:this.width/20,this.handleClick=e=>{const{userUrl:t,onClick:n,target:r}=this.props;e.preventDefault(),t&&window.open(t,r),n&&n()}}renderAvatar(e){const{displayName:t,thumbnailUrl:n,tier:o}=this.props;return r.createElement("div",{className:["avatar",e].filter(e=>!!e).join(" "),onClick:this.handleClick,role:"button",style:{width:this.width}},r.createElement("img",{className:"avatar__thumbnail",src:n,alt:t,width:this.width,height:this.width,style:{borderRadius:this.borderRadius}}),o&&r.createElement("img",{className:"avatar__tier",src:`/static/images/avatier/avatier-${o}@2x.png`,style:{marginTop:this.margin},alt:t,width:this.width}))}render(){return this.props.hideTooltip?this.renderAvatar(this.props.className):r.createElement(o.Tooltip,{className:this.props.className,tip:this.props.displayName},this.renderAvatar())}}t.Avatar=a},672:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BasicTooltip=void 0;const r=n(1),o=n(0),i=r.default.div`
  ${e=>e.theme.font.main.family};
  display: inline-flex;
`;class a extends o.PureComponent{render(){const{tip:e}=this.props;return o.createElement(i,{title:e},this.props.children)}}t.BasicTooltip=a},673:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Tooltip=t.Body=void 0;const r=n(1),o=n(0),i=n(107),a=n(42),s=n(548);t.Body=r.default.div`
  ${e=>e.theme.font.main.family};
  display: inline-flex;
  height: fit-content;
`;const l=r.default.div`
  ${e=>e.theme.font.main.family};
  overflow-x: hidden;
  text-overflow: ellipsis;
  max-width: 60vw;
`,c=e=>({"data-tip":!0,"data-for":e});class u extends o.PureComponent{constructor(){super(...arguments),this.tooltipId=`tooltip_components_${a.v4()}`}render(){const{tip:e,type:n,bodyOverride:r,place:a,children:u}=this.props,d=r||t.Body;return o.createElement(d,Object.assign({},s.extractStyleProps(this.props),c(this.tooltipId)),u,o.createElement(i,{id:this.tooltipId,effect:"solid",type:n,place:a||"top"},o.createElement(l,null,e&&Array.isArray(e)?o.createElement(o.Fragment,null,e.map(e=>o.createElement("p",null,e))):e)))}}t.Tooltip=u},674:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(549);Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return r.Button}})},675:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.numberWithCommas=void 0,t.numberWithCommas=function(e){const t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),t.join(".")}},676:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hasPrimitiveProps=void 0;const r=n(500);t.hasPrimitiveProps=function(e){for(const t of r.primitivePropKeys)if(void 0!==e[t])return!0;return!1}},677:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(678);Object.defineProperty(t,"DatePicker",{enumerable:!0,get:function(){return r.DatePicker}})},678:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DatePicker=void 0;const r=n(0);t.DatePicker=function(e){const{value:t,onChange:n,className:o}=Object.assign({},e);return r.createElement("input",{className:o,type:"date",value:t,onChange:n})}},679:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(680);Object.defineProperty(t,"DateTimePicker",{enumerable:!0,get:function(){return r.DateTimePicker}})},680:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DateTimePicker=void 0;const r=n(1),o=n(0),i=n(964);n(154);const a=r.default(i)`
  * {
    vertical-align: middle;
  }

  input.form-control {
    ${e=>e.theme.font.main.family};
    background: #fbfbfb; /* @color--content-header-background; */
    border: 1px solid ${e=>e.theme.colors.content.border};
    border-radius: ${e=>e.theme.size.border.radius.input};
    box-sizing: border-box;
    color: ${e=>e.theme.colors.kaggle.black};
    font-size: 14px;
    padding: 8px; /* @pad--s; */
    resize: vertical;
    width: 100%;

    &:disabled {
      color: ${e=>e.theme.colors.kaggle.gray};
      cursor: not-allowed;
    }
  }

  .rdtPicker {
    border: 1px solid ${e=>e.theme.colors.content.border};
    border-radius: ${e=>e.theme.size.border.radius.input};
  }

  .rdtPicker td,
  .rdtPicker th {
    border-radius: ${e=>e.theme.size.border.radius.input};
    vertical-align: middle;
  }

  .rdtPicker td.rdtActive {
    background-color: ${e=>e.theme.colors.kaggle.blueDark};

    &:hover {
      background-color: ${e=>e.theme.colors.kaggle.blue};
    }
  }
`;t.DateTimePicker=e=>o.createElement(a,Object.assign({},e))},681:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(682);Object.defineProperty(t,"Group",{enumerable:!0,get:function(){return r.Group}})},682:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Group=void 0;const r=n(1),o=n(0),i=n(683),a=n(549),s=n(502),l=n(551),c=n(552),u=n(452),d=e=>{const t=e;if(!t.styledComponentId)throw new Error("Expected styled component to specify styledComponentId.");return t.styledComponentId},p=[a.Body,l.Body,c.Body,i.Body].map(d),h=d(s.Input),f=(e="")=>p.map(t=>`> .${t}${e}, > .${t}${e} .${h}`).join(", "),m=r.default.div`
  ${e=>e.theme.font.main.family};
  font-size: ${e=>`${e.scale}rem`};
  display: flex;
  flex-flow: row nowrap;
  flex: ${e=>e.tight?"0 0":"1 1"} auto;
  padding: 0;
  width: ${e=>e.tight?"auto":"100%"};

  ${f()} {
    flex: 1 1 0 !important;
    justify-content: center;
  }

  ${f(":not(:last-child)")} {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin-right: 0;
    border-right: 0;
  }

  ${f(":not(:first-child)")} {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin-left: 0;
  }
`;t.Group=function(e){const{children:t}=e,n=u.extractPrimitiveProps(e);return o.createElement(m,Object.assign({role:"group"},n,u.extractStyleProps(e)),u.hasPrimitiveProps(e)?t.map((e,t)=>o.cloneElement(e,{key:t,groupProps:n})):t)}},683:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ToggleButton=t.Body=void 0;const r=n(1),o=n(0),i=n(452),a=n(501);t.Body=r.default.div`
  align-items: center;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  height: 2.5rem;
  width: 100%;
  padding-left: 0.5em;
  svg {
    font-size: 1.2rem;
    margin-right: 0.3rem;
  }
  &:hover {
    background: #f8f8f8;
  }
`;class s extends o.Component{constructor(){super(...arguments),this.onToggle=()=>{this.props.onToggle(!this.props.isOn)}}render(){const{isOn:e,hideOnOffText:n}=this.props,r=i.extractPrimitiveProps(this.props);return o.createElement(t.Body,Object.assign({role:"switch","aria-checked":e,isOn:e,disabled:r.disabled,title:r.disabled?"Inactive toggle":`Toggle ${e?"off":"on"}`,onClick:r.disabled?void 0:this.onToggle,"data-testid":"toggle-button"},r,i.extractStyleProps(this.props)),o.createElement(a.Icon,{icon:e?"toggle_on":"toggle_off",size:"medium"}),o.createElement("span",null,this.props.description?this.props.description+(!0!==n?e?" on":" off":""):!0!==n?e?"On":"Off":""))}}t.ToggleButton=s},684:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Icon=t.KaggleIcon=void 0;const r=n(1),o=n(22),i=n(0),a=n(685),s=n(686);n(111),t.KaggleIcon=r.default(o.Icon).withConfig(r.captureProps("iconTheme"))`
  && {
    color: ${e=>e.color||s.iconColors[e.theme.name][e.emphasis||"high"]};
    font-size: ${e=>e.sizevalue};
    vertical-align: ${e=>e.verticalalign};
    user-select: none;
  }
`;const l={xxsmall:"12px",xsmall:"18px",small:"20px",medium:"24px",large:"36px",xlarge:"48px",inline:"1.125em"};t.Icon=e=>{const{className:n,color:o,emphasis:c,icon:u,onClick:d,style:p,title:h}=e,f=i.useContext(r.ThemeContext),m=s.iconColors[f.name],g=e.size||"medium",b=l[g]||g,_=d?a.getButtonRoleProps():{};return i.createElement(t.KaggleIcon,Object.assign({className:n,color:o,emphasis:c,iconTheme:m,icon:u,onClick:d,sizevalue:b,style:p,title:h},_,{verticalalign:"inline"===e.size?"-0.125em":void 0}))}},685:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getButtonRoleProps=void 0,t.getButtonRoleProps=()=>{return{role:"button",tabIndex:0,onKeyDown:e=>{" "===e.key||32===e.keyCode?e.preventDefault():"Enter"!==e.key&&13!==e.keyCode||(e.preventDefault(),e.currentTarget.click())},onKeyUp:e=>{" "!==e.key&&32!==e.keyCode||(e.preventDefault(),e.currentTarget.click())}}}},686:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.iconColors=void 0;const r=n(485);t.iconColors={light:{high:r.GREY_900,medium:r.GREY_800,low:r.GREY_700,disabled:r.GREY_600},dark:{high:r.GREY_200,medium:r.GREY_500,low:r.GREY_600,disabled:r.GREY_700}}},687:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.iconListAsObject=t.ICON_LIST=void 0,t.ICON_LIST=["3d_rotation","accessibility","accessibility_new","accessible","accessible_forward","account_balance","account_balance_wallet","account_box","account_circle","account_circle_filled","add_shopping_cart","add_to_drive","alarm","alarm_add","alarm_off","alarm_on","alert","all_inbox","all_out","analytics","android","announcement","app_blocking","arrow_right_alt","article","aspect_ratio","assessment","assignment","assignment_ind","assignment_late","assignment_return","assignment_returned","assignment_turned_in","autorenew","backup","bigtop_done","book","bookmark","bookmark_border","bookmarks","bug_report","build","build_circle","cached","calendar_today","calendar_view_day","calendar_view_month","calendar_view_week","camera_enhance","cancel_schedule_send","card_giftcard","card_membership","card_travel","change_history","check_circle","check_circle_filled","check_circle_outline","chrome_reader_mode","class","code","comment_bank","commute","compare_arrows","contact_support","contactless","copyright","credit_card","dashboard","date_range","delete","delete_forever","delete_outline","description","dns","done","done_all","done_outline","donut_large","donut_small","drag_indicator","drive_file_move","eco","eject","euro_symbol","event","event_seat","exit_to_app","explore","explore_off","extension","face","face_unlock","favorite","favorite_border","feedback","filter","find_in_page","find_replace","fingerprint","flight_land","flight_takeoff","flip_to_back","flip_to_front","g_translate","gavel","get_app","gif","googleplus_reshare","grade","grading","group_work","groups","help","help_outline","hide_source","highlight_alt","highlight_off","history","home","horizontal_split","hourglass_empty","hourglass_full","http","https","important_devices","info","info_outline","input","integration_instructions","invert_colors","ios_share","label","label_important","label_important_outline","label_off","label_outline","language","launch","lightbulb_outline","line_style","line_weight","list","lock","lock_open","lock_outline","login","loyalty","manage_accounts","markunread_mailbox","maximize","minimize","motorcycle","no_accounts","note_add","offline_bolt","offline_pin","opacity","open_in_browser","open_in_new","open_with","pageview","paid","pan_tool","payment","perm_camera_mic","perm_contact_calendar","perm_data_setting","perm_device_information","perm_identity","perm_media","perm_phone_msg","perm_scan_wifi","pets","picture_in_picture","picture_in_picture_alt","plagiarism","play_for_work","polymer","power_settings_new","pregnant_woman","print","query_builder","question_answer","receipt","record_voice_over","redeem","reminder","remove_shopping_cart","reorder","report_problem","restore","restore_from_trash","restore_page","room","rounded_corner","rowing","schedule","schedule_send","search","search_off","settings","settings_accessibility","settings_applications","settings_backup_restore","settings_bluetooth","settings_brightness","settings_cell","settings_ethernet","settings_input_antenna","settings_input_component","settings_input_composite","settings_input_hdmi","settings_input_svideo","settings_overscan","settings_phone","settings_power","settings_remote","settings_voice","shop","shop_two","shopping_basket","shopping_cart","speaker_notes","speaker_notes_off","spellcheck","stacked_email","stars","store","subject","supervised_user_circle","supervisor_account","swap_horiz","swap_horizontal_circle","swap_vert","swap_vertical_circle","sync_alt","system_vertical_alt","tab","tab_unselected","text_rotate_up","text_rotate_vertical","text_rotation_angle_down","text_rotation_angle_up","text_rotation_down","text_rotation_none","theaters","thumb_down","thumb_down_filled","thumb_up","thumb_up_filled","thumbs_up_down","timeline","toc","today","toll","touch_app","tour","track_changes","translate","trending_down","trending_flat","trending_up","try","turned_in","turned_in_not","update","verified","verified_user","vertical_split","view_agenda","view_array","view_carousel","view_column","view_day","view_headline","view_list","view_module","view_quilt","view_stream","view_week","visibility","visibility_off","voice_over_off","watch_later","work","work_off","work_outline","youtube_searched_for","zoom_in","zoom_out","add_alert","auto_delete","error","error_outline","notification_important","warning","warning_amber","4k","add_to_queue","airplay","album","art_track","av_timer","branding_watermark","call_to_action","closed_caption","control_camera","equalizer","explicit","fast_forward","fast_rewind","featured_play_list","featured_video","fiber_dvr","fiber_manual_record","fiber_new","fiber_pin","fiber_smart_record","forward_10","forward_30","forward_5","games","hd","hearing","high_quality","library_add","library_books","library_music","loop","mic","mic_none","mic_off","missed_video_call","movie","music_video","new_releases","not_interested","note","pause","pause_circle_filled","pause_circle_outline","play_arrow","play_circle_filled","play_circle_filled_white","play_circle_outline","playlist_add","playlist_add_check","playlist_play","queue","queue_music","queue_play_next","radio","recent_actors","remove_from_queue","repeat","repeat_one","replay","replay_10","replay_30","replay_5","shuffle","skip_next","skip_previous","slow_motion_video","snooze","sort_by_alpha","speed","stop","subscriptions","subtitles","surround_sound","video_call","video_label","video_library","video_settings","videocam","videocam_off","volume_down","volume_mute","volume_off","volume_up","web","web_asset","3p","add_call","alternate_email","business","call","call_end","call_made","call_merge","call_missed","call_missed_outgoing","call_received","call_split","cancel_presentation","cell_wifi","chat","chat_bubble","chat_bubble_outline","clear_all","comment","contact_mail","contact_phone","contacts","desktop_access_disabled","dialer_sip","dialpad","domain_disabled","duo","email","forum","import_contacts","import_export","invert_colors_off","list_alt","live_help","location_off","location_on","mail_outline","message","mobile_screen_share","no_sim","pause_presentation","person_add_disabled","phone","phone_disabled","phone_enabled","phonelink_erase","phonelink_lock","phonelink_ring","phonelink_setup","portable_wifi_off","present_to_all","print_disabled","ring_volume","rss_feed","screen_share","sip","speaker_phone","stay_current_landscape","stay_current_portrait","stay_primary_landscape","stay_primary_portrait","stop_screen_share","swap_calls","textsms","unsubscribe","voicemail","vpn_key","wifi_calling","add","add_box","add_circle","add_circle_outline","amp_stories","archive","attribution","backspace","ballot","biotech","block","clear","content_copy","content_cut","content_paste","create","delete_sweep","drafts","dynamic_feed","file_copy","filter_list","flag","font_download","forward","gesture","how_to_reg","how_to_vote","inbox","link","link_off","low_priority","mail","markunread","move_to_inbox","next_week","outlined_flag","policy","redo","remove","remove_circle","remove_circle_outline","reply","reply_all","report","report_gmailerrorred","report_off","save","save_alt","select_all","send","sort","square_foot","stream","text_format","unarchive","undo","upcoming","waves","weekend","where_to_vote","1x_mobiledata","30fps","3g_mobiledata","4g_mobiledata","4g_plus_mobiledata","60fps","access_alarm","access_alarms","access_time","access_time_filled","add_alarm","add_to_home_screen","air","airplane_ticket","airplanemode_active","airplanemode_inactive","aod","battery_20","battery_30","battery_50","battery_60","battery_80","battery_90","battery_alert","battery_charging_20","battery_charging_30","battery_charging_50","battery_charging_60","battery_charging_80","battery_charging_90","battery_charging_full","battery_full","battery_saver","battery_std","battery_unknown","bloodtype","bluetooth","bluetooth_connected","bluetooth_disabled","bluetooth_drive","bluetooth_searching","brightness_auto","brightness_high","brightness_low","brightness_medium","cable","cameraswitch","credit_score","data_saver_off","data_saver_on","data_usage","developer_mode","device_thermostat","devices","do_not_disturb_on_total_silence","dvr","e_mobiledata","edgesensor_high","edgesensor_low","flashlight_off","flashlight_on","flourescent","fmd_bad","fmd_good","g_mobiledata","gpp_bad","gpp_good","gpp_maybe","gps_fixed","gps_not_fixed","gps_off","graphic_eq","grid_3x3","grid_4x4","grid_goldenratio","h_mobiledata","h_plus_mobiledata","hdr_auto","hdr_auto_select","hdr_off_select","hdr_on_select","inventory","lens_blur","location_disabled","location_searching","lte_mobiledata","lte_plus_mobiledata","media_bluetooth_off","media_bluetooth_on","medication","mobile_friendly","mobile_off","mobiledata_off","mode_night","mode_standby","monitor_weight","nearby_error","nearby_off","network_cell","network_wifi","news","nfc","nightlight","note_alt","password","pattern","pin","play_lesson","price_change","price_check","quiz","r_mobiledata","radar","remember_me","restart_alt","reviews","rsvp","screen_lock_landscape","screen_lock_portrait","screen_lock_rotation","screen_rotation","screenshot","sd_storage","security_update","security_update_good","security_update_warning","sell","send_to_mobile","settings_suggest","settings_system_daydream","share_location","shortcut","signal_cellular_0_bar","signal_cellular_1_bar","signal_cellular_2_bar","signal_cellular_3_bar","signal_cellular_4_bar","signal_cellular_alt","signal_cellular_connected_no_internet_0_bar","signal_cellular_connected_no_internet_1_bar","signal_cellular_connected_no_internet_2_bar","signal_cellular_connected_no_internet_3_bar","signal_cellular_connected_no_internet_4_bar","signal_cellular_no_sim","signal_cellular_nodata","signal_cellular_null","signal_cellular_off","signal_wifi_0_bar","signal_wifi_1_bar","signal_wifi_1_bar_lock","signal_wifi_2_bar","signal_wifi_2_bar_lock","signal_wifi_3_bar","signal_wifi_3_bar_lock","signal_wifi_4_bar","signal_wifi_4_bar_lock","signal_wifi_bad","signal_wifi_connected_no_internet_0","signal_wifi_connected_no_internet_1","signal_wifi_connected_no_internet_2","signal_wifi_connected_no_internet_3","signal_wifi_connected_no_internet_4","signal_wifi_off","signal_wifi_statusbar_1_bar","signal_wifi_statusbar_2_bar","signal_wifi_statusbar_3_bar","signal_wifi_statusbar_4_bar","signal_wifi_statusbar_connected_no_internet","signal_wifi_statusbar_connected_no_internet_1","signal_wifi_statusbar_connected_no_internet_2","signal_wifi_statusbar_connected_no_internet_3","signal_wifi_statusbar_connected_no_internet_4","signal_wifi_statusbar_not_connected","signal_wifi_statusbar_null","sim_card_download","splitscreen","sports_score","storage","storm","summarize","system_security_update","system_security_update_good","system_security_update_warning","task","thermostat","timer_10_select","timer_3_select","tungsten","usb","wallpaper","water","widgets","wifi_calling_1","wifi_calling_2","wifi_calling_3","wifi_lock","wifi_tethering","wifi_tethering_error_rounded","wifi_tethering_off","add_comment","attach_file","attach_money","bar_chart","border_all","border_bottom","border_clear","border_color","border_horizontal","border_inner","border_left","border_outer","border_right","border_style","border_top","border_vertical","bubble_chart","drag_handle","format_align_center","format_align_justify","format_align_left","format_align_right","format_bold","format_clear","format_color_fill","format_color_reset","format_color_text","format_indent_decrease","format_indent_increase","format_italic","format_line_spacing","format_list_bulleted","format_list_numbered","format_list_numbered_rtl","format_paint","format_quote","format_shapes","format_size","format_strikethrough","format_textdirection_l_to_r","format_textdirection_r_to_l","format_underlined","functions","height","highlight","insert_chart","insert_chart_outlined","insert_comment","insert_drive_file","insert_emoticon","insert_invitation","insert_link","insert_photo","linear_scale","merge_type","mode_comment","mode_edit","mode_edit_outline","monetization_on","money_off","money_off_csred","multiline_chart","notes","pie_chart","pie_chart_outline","post_add","publish","scatter_plot","score","short_text","show_chart","space_bar","strikethrough_s","table_chart","text_fields","title","vertical_align_bottom","vertical_align_center","vertical_align_top","wrap_text","attachment","cloud","cloud_circle","cloud_done","cloud_download","cloud_off","cloud_queue","cloud_upload","create_new_folder","download_for_offline","downloading","file_download","file_download_done","file_upload","folder","folder_open","folder_shared","cast","cast_connected","cast_for_education","computer","desktop_mac","desktop_windows","developer_board","device_hub","device_unknown","devices_other","dock","earbuds","earbuds_battery","gamepad","headphones","headphones_battery","headset","headset_mic","home_max","home_mini","keyboard","keyboard_alt","keyboard_arrow_down","keyboard_arrow_left","keyboard_arrow_right","keyboard_arrow_up","keyboard_backspace","keyboard_capslock","keyboard_hide","keyboard_return","keyboard_tab","keyboard_voice","laptop","laptop_chromebook","laptop_mac","laptop_windows","memory","mouse","phone_android","phone_iphone","phonelink","phonelink_off","power_input","router","scanner","security","sim_card","smart_display","smart_screen","smart_toy","smartphone","speaker","speaker_group","tablet","tablet_android","tablet_mac","toys","tv","videogame_asset","watch","30fps_select","60fps_select","add_a_photo","add_photo_alternate","add_to_photos","adjust","animation","assistant","assistant_photo","audiotrack","auto_awesome","auto_awesome_mosaic","auto_awesome_motion","auto_fix_high","auto_fix_normal","auto_fix_off","auto_stories","autofps_select","blur_circular","blur_linear","blur_off","blur_on","brightness_1","brightness_2","brightness_3","brightness_4","brightness_5","brightness_6","brightness_7","broken_image","brush","burst_mode","camera","camera_alt","camera_front","camera_rear","camera_roll","center_focus_strong","center_focus_weak","collections","collections_bookmark","color_lens","colorize","compare","control_point","control_point_duplicate","crop","crop_16_9","crop_3_2","crop_5_4","crop_7_5","crop_din","crop_free","crop_landscape","crop_original","crop_portrait","crop_rotate","crop_square","dehaze","details","edit","euro","exposure","exposure_neg_1","exposure_neg_2","exposure_plus_1","exposure_plus_2","exposure_zero","face_retouching_off","filter","filter_1","filter_2","filter_3","filter_4","filter_5","filter_6","filter_7","filter_8","filter_9","filter_9_plus","filter_b_and_w","filter_center_focus","filter_drama","filter_frames","filter_hdr","filter_none","filter_tilt_shift","filter_vintage","flare","flash_auto","flash_off","flash_on","flip","flip_camera_android","flip_camera_ios","gradient","grain","grid_off","grid_on","hdr_off","hdr_on","hdr_plus","hdr_strong","hdr_weak","healing","hevc","hide_image","image","image_aspect_ratio","image_search","iso","landscape","leak_add","leak_remove","lens","linked_camera","looks","looks_3","looks_4","looks_5","looks_6","looks_one","looks_two","loupe","monochrome_photos","motion_photos_auto","motion_photos_off","motion_photos_on","motion_photos_paused","movie_creation","movie_filter","music_note","music_off","nature","nature_people","navigate_before","navigate_next","palette","panorama","panorama_fish_eye","panorama_horizontal","panorama_vertical","panorama_wide_angle","photo","photo_album","photo_camera","photo_camera_back","photo_camera_front","photo_filter","photo_library","photo_size_select_actual","photo_size_select_large","photo_size_select_small","picture_as_pdf","portrait","raw_off","raw_on","receipt_long","remove_red_eye","rotate_90_degrees_ccw","rotate_left","rotate_right","shutter_speed","slideshow","straighten","style","switch_camera","switch_video","tag_faces","texture","thermostat_auto","timelapse","timer","timer_10","timer_3","timer_off","tonality","transform","tune","video_camera_back","video_camera_front","video_stable","view_comfy","view_compact","vignette","vrpano","wb_auto","wb_cloudy","wb_incandescent","wb_iridescent","wb_sunny","360","add_location","add_location_alt","agriculture","atm","attractions","badge","bakery_dining","beenhere","breakfast_dining","brunch_dining","car_rental","car_repair","category","celebration","compass_calibration","delivery_dining","departure_board","dinner_dining","directions","directions_bike","directions_boat","directions_boat_filled","directions_bus","directions_bus_filled","directions_car","directions_car_filled","directions_railway","directions_railway_filled","directions_run","directions_subway","directions_subway_filled","directions_transit","directions_transit_filled","directions_walk","dry_cleaning","edit_attributes","edit_location","ev_station","fastfood","festival","flight","hardware","hotel","icecream","layers","layers_clear","liquor","local_activity","local_airport","local_atm","local_bar","local_cafe","local_car_wash","local_convenience_store","local_dining","local_drink","local_florist","local_gas_station","local_grocery_store","local_hospital","local_hotel","local_laundry_service","local_library","local_mall","local_movies","local_offer","local_parking","local_pharmacy","local_phone","local_pizza","local_play","local_post_office","local_printshop","local_see","local_shipping","local_taxi","lunch_dining","map","maps_ugc","menu_book","money","museum","my_location","navigation","near_me","nightlife","not_listed_location","park","person_pin","person_pin_circle","pin_drop","place","ramen_dining","rate_review","restaurant","restaurant_menu","satellite","store_mall_directory","streetview","subway","takeout_dining","terrain","theater_comedy","traffic","train","tram","transfer_within_a_station","transit_enterexit","trip_origin","volunteer_activism","zoom_out_map","ad_units","addchart","app_settings_alt","apps","arrow_back","arrow_back_ios","arrow_downward","arrow_drop_down","arrow_drop_down_circle","arrow_drop_up","arrow_forward","arrow_forward_ios","arrow_left","arrow_right","arrow_upward","campaign","cancel","check","chevron_left","chevron_right","close","double_arrow","expand_less","expand_more","first_page","fullscreen","fullscreen_exit","home_work","last_page","maps_home_work","mediation","menu","menu_open","more_horiz","more_vert","payments","refresh","subdirectory_arrow_left","subdirectory_arrow_right","unfold_less","unfold_more","account_tree","adb","airline_seat_flat","airline_seat_flat_angled","airline_seat_individual_suite","airline_seat_legroom_extra","airline_seat_legroom_normal","airline_seat_legroom_reduced","airline_seat_recline_extra","airline_seat_recline_normal","bluetooth_audio","confirmation_number","disc_full","do_not_disturb","do_not_disturb_alt","do_not_disturb_off","do_not_disturb_on","drive_eta","enhanced_encryption","event_available","event_busy","event_note","folder_special","live_tv","mms","more","network_check","network_locked","no_encryption","no_encryption_gmailerrorred","ondemand_video","personal_video","phone_bluetooth_speaker","phone_callback","phone_forwarded","phone_in_talk","phone_locked","phone_missed","phone_paused","power","power_off","priority_high","sd_card","sd_card_alert","sms","sms_failed","sync","sync_disabled","sync_problem","system_update","tap_and_play","time_to_leave","tv_off","vibration","voice_chat","vpn_lock","wc","wifi","wifi_off","ac_unit","airport_shuttle","all_inclusive","apartment","bathtub","beach_access","business_center","casino","child_care","child_friendly","fitness_center","free_breakfast","golf_course","hot_tub","house","kitchen","meeting_room","no_meeting_room","pool","room_service","rv_hookup","smoke_free","smoking_rooms","spa","storefront","2d","accelerator_product","accelerator_product_square","account_child","account_child_invert","ad","ad_group","add_ad","add_business","admob","air_purifier","allo","amp","android_auto","app_maker","app_promo","app_promotion","apparel","apps_policy","appscript","ar_stickers","arrow_downward_alt","arrow_split","arrow_upward_alt","artist","assistant_device","atari_drive","atari_site","attach_drive","auto_draw_solid","auto_fix","auto_towing","baby_and_kids","barcode","barcode_scanner","bid_landscape","bigtop_updates","books_movies_and_music","bottom_app_bar","bottom_drawer","bottom_navigation","bottom_sheets","brand_awareness","breaking_news","browse","bugfood","buttons","buttons_alt","campaign_app","campaign_search_display","campaign_shopping","campaign_show","cardboard","cardboard_cam","cards","carry_on_bag","carry_on_bag_checked","carry_on_bag_inactive","carry_on_bag_question","cc_attribution","checkbook","checked_bag","checked_bag_question","chips","chrome_product","chromecast","circles","circles_add","circles_ext","cleaning","collapse_all","colors","communities","communities_filled","contacts_product","crowdsource","csv","custom_typography","data_connectors_system","data_table","developer_guide","developer_mode_tv","dialogs","digital_wellbeing","discovery_campaign","dishwasher","dogfood","draft","drawing_recognition","drive","drive_ai","drive_archive","drive_audio","drive_chart","drive_document","drive_document_outline","drive_drawing","drive_file","drive_file_rename","drive_file_stream","drive_form","drive_fusiontable","drive_image","drive_keep","drive_ms_excel","drive_ms_excel_outline","drive_ms_powerpoint","drive_ms_powerpoint_outline","drive_ms_word","drive_ms_word_outline","drive_pdf","drive_pdf_outline","drive_presentation","drive_presentation_outline","drive_ps","drive_script","drive_site","drive_sketch","drive_spreadsheet","drive_spreadsheet_outline","drive_text","drive_video","drive_zip","drive_zip_outline","dropdown","earth","energy","enterprise","enterprise_off","expand_all","expension_panels","experiment","explore_nearby","express_campaign","family_home","family_link","favorite_news","feature_highlight","feature_search","featured_seasonal_and_gifts","file_map","filter_retrolux","finance","flights_and_hotels","folder_mydrive","for_you","full_coverage","gallery","garage_door","general_device","genres","github","glass","gmail","google","google_assistant","google_circle","google_collections","google_home","google_home_devices","google_lens","google_my_business","google_news","google_plus","google_spaces","google_voice","googler_desk","gplus_multiple_notifications","graph_options","grocery","gsuite_addons_system","gsuite_marketplace_system","gtag","guides_badge","guides_badge_circle","hallway","handwriting_recognition","hangout","hangout_video","hangout_video_off","hdr_plus_off","hdr_plus_on","headline","health_and_beauty","home_and_garden","home_improvement_and_tools","hotel_campaign","household_supplies","ifl","inbox_contacts","incognito","incognito_circle","ink_eraser","ink_highlighter","ink_marker","ink_pen","ink_selection","instant_mix","ios","jamboard_kiosk","jsfiddle","keep","keep_off","keep_outline","keep_pin","keep_pin_outline","lasso_select","library_apps","library_games","library_movies","library_newsstand","license","light_off","lightning_stand","lists","manufacturing","maps","masked_transitions","material_design","meet","mimo","mimo_disconnect","missing_controller","movie_info","multiple_airports","music_cast","my_drive","my_drive_outline","nearby","nest_protect","nest_thermostat","newsstand","nfc_forum","no_sound","notification_multiple","odp","ods","odt","on_hub_device","on_wireless","one","open_in_phone","open_jam","orders","outbox_alt","oven","page_control","personal_bag","personal_bag_off","personal_bag_question","personal_places","pet_supplies","photos","photoscan","photosphere","planner_banner_ad_ls","planner_banner_ad_pt","planner_banner_ad_sq","planner_review","play_apps","play_books","play_devconsole","play_games","play_movies","play_music","play_newsstand","play_prism","play_store_installed","post","post_blogger","post_facebook","post_gplus","post_instagram","post_linkedin","post_pinterest","post_tumblr","post_twitter","post_youtube","priority_filled","priority_outline","progress_activity","quick_reorder","rate_review_rtl","recommended_for_gsuite","reminders_alt","remove_selection","responsive_layout","retweet","rewarded_ads","ripples","rubric","scrollable_header","sdk","search_hands_free","search_logo","select_window","selection_controls","send_money","service_toolbox","shadow","shape_recognition","shrine","side_navigation","sim_card_alt","sliders","sports_and_outdoors","stackdriver","stacked_gmail","stacked_inbox","stat_0","stat_1","stat_2","stat_3","stat_minus_1","stat_minus_2","stat_minus_3","steppers","sticker","sticky_note","stream_animation","stream_architecture","stream_arts","stream_control","stream_science","stream_select","subheader","super_chat_for_good","swap_driving_apps","swap_driving_apps_wheel","sweep","switches","tabs","target","tasks","team_drive","team_drive_outline","techstop_locker","text_ad","text_fields_alt","themes","timely","toast","toolbar","tooltip","toys_and_games","travel","travel_luggage_and_bags","trip","trophy","tsv","tv_guide","tv_options_edit_channels","tv_options_input_settings","tv_options_parental","tv_signin","universal_currency","universal_currency_alt","universal_local","unknown_1","unknown_2","unknown_3","unknown_4","unknown_5","unknown_6","unknown_7","unlicense","user_attributes","vacuum","validate_message","video_youtube","voice_match","vr180_create2d","wallet_product","web_traffic","workflow","youtube_ad","youtube_attribution","youtube_creator","youtube_improve_tv","youtube_linked_tv","youtube_live","youtube_miniplayer_tv","youtube_mix","youtube_sports","youtube_trending","bathroom","bed","bedroom_baby","bedroom_child","bedroom_parent","blender","camera_indoor","camera_outdoor","chair","chair_alt","coffee","coffee_maker","dining","door_back","door_front","door_sliding","doorbell","feed","flatware","garage","light","living","manage_search","podcasts","shower","window","yard","architecture","cake","construction","deck","domain","emoji_emotions","emoji_events","emoji_flags","emoji_food_beverage","emoji_nature","emoji_objects","emoji_people","emoji_symbols","emoji_transportation","engineering","fireplace","group","group_add","history_edu","king_bed","location_city","mood","mood_bad","nights_stay","notifications","notifications_active","notifications_none","notifications_off","notifications_paused","outdoor_grill","pages","party_mode","people","people_alt","people_outline","person","person_add","person_outline","plus_one","poll","public","school","self_improvement","sentiment_dissatisfied","sentiment_neutral","sentiment_satisfied","sentiment_very_dissatisfied","sentiment_very_satisfied","share","single_bed","sports","sports_baseball","sports_basketball","sports_cricket","sports_esports","sports_football","sports_golf","sports_handball","sports_hockey","sports_kabaddi","sports_mma","sports_motorsports","sports_rugby","sports_soccer","sports_tennis","sports_volleyball","thumb_down_alt","thumb_up_alt","whatshot","check_box","check_box_outline_blank","indeterminate_check_box","radio_button_checked","radio_button_unchecked","star","star_border","star_half","star_outline","toggle_off","toggle_on","text_snippet","database","insights"],t.iconListAsObject=t.ICON_LIST.reduce((e,t)=>(e[t]=t,e),{})},688:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Input=void 0;const r=n(1);t.Input=r.default.input`
  ${e=>e.theme.font.main.family};
  font-size: 1em;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  display: flex;
  flex-flow: row nowrap;
  flex: ${e=>e.tight?"0 0":"1 1"} auto;
  width: ${e=>e.tight?null:"100%"};
  height: 1.8575em;
  border-radius: ${e=>e.theme.size.border.radius.button};
  color: rgba(0, 0, 0, 1);
  background-color: inherit;
  border: 1px solid #dedfe0;
  border-width: ${e=>e.hideBorder?"0":"1px"};
  padding: ${e=>e.hideBorder?"0 0.25em":"0.25em"};
  &:hover {
    background-color: ${e=>e.hideBorder?"rgba(255,255,255,0.15)":"inherit"};
  }
  &:focus,
  &:active {
    background-color: ${e=>e.hideBorder?"rgba(255,255,255,0.3)":"inherit"};
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-width: ${e=>e.hideBorder?"0":"1px"};
    outline: none;
  }
  svg {
    margin-right: 5px;
  }
`},689:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(690);Object.defineProperty(t,"Option",{enumerable:!0,get:function(){return r.Option}})},690:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Option=void 0;const r=n(0),o=n(691),i=n(452);class a extends r.PureComponent{constructor(){super(...arguments),this.getRadio=()=>this.props.radio,this.getRadioValue=()=>this.getRadio().state.selectedValue,this.state={isChecked:this.getRadioValue()===this.props.value},this.onNotify=e=>{this.setState({isChecked:this.props.value===e})},this.handleChange=()=>this.getRadio().handleChange(this.props.value)}componentDidMount(){this.getRadio().subscribe(this.onNotify)}componentWillUnmount(){this.getRadio().unsubscribe(this.onNotify)}render(){return r.createElement(o.Checkbox,Object.assign({label:this.props.label,onChange:this.state.isChecked?void 0:this.handleChange,checked:this.state.isChecked},i.extractPrimitiveProps(this.props),i.extractStyleProps(this.props)))}}t.Option=a},691:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(692);Object.defineProperty(t,"Checkbox",{enumerable:!0,get:function(){return r.Checkbox}})},692:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Checkbox=void 0;const r=n(1),o=n(0),i=n(485),a=n(693),s=n(695),l=r.default.label`
  display: flex;
  position: relative;
  height: fit-content;
  cursor: ${e=>e.disabled?"initial":"pointer"};
`,c=r.default.input`
  opacity: 0;
  height: 24px;
  width: 24px;
  position: absolute;
  z-index: 2;
  cursor: pointer;

  & + span {
    .path {
      fill: ${e=>e.checkboxTheme.unchecked};
    }

    .checked .path {
      fill: ${e=>e.checkboxTheme.checked};
    }
    .unchecked {
      display: block;
    }

    .checked {
      display: none;
    }

    .indeterminate {
      display: none;
    }
  }

  &:checked + span {
    .unchecked {
      display: none;
    }

    .checked {
      display: block;
    }

    .indeterminate {
      display: none;
    }
  }

  &:indeterminate + span {
    .unchecked {
      display: none;
    }

    .checked {
      display: none;
    }

    .indeterminate {
      display: block;
    }
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled + span {
    .path {
      fill: ${e=>e.checkboxTheme.disabled};
    }
  }
`,u=r.default(a.Span2)`
  ${e=>e.disabled&&`color: ${i.GREY_400};`}
  margin-left: 8px;
`;t.Checkbox=e=>{const{onChange:t,onClick:n,checked:i,children:a,className:d,disabled:p,indeterminate:h,label:f,title:m,value:g,name:b}=e,_=o.useContext(r.ThemeContext),v=s.checkboxColors[_.name],y=o.useRef(null);return o.useEffect(()=>{const e=y.current;e&&(e.indeterminate=h||!1)},[h]),o.createElement(l,{disabled:!!p},o.createElement(c,{id:"kaggleCheckbox",type:"checkbox",checked:i,className:d,disabled:p,onChange:t,onClick:n,value:g||"true",title:m,name:b,checkboxTheme:v,tabIndex:0,ref:y}),o.createElement("span",{style:{height:"fit-content"}},o.createElement("svg",{className:"checked",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{className:"path",fillRule:"evenodd",clipRule:"evenodd",d:"M2 0H16C17.1 0 18 0.9 18 2V16C18 17.1 17.1 18 16 18H2C0.9 18 0 17.1 0 16V2C0 0.9 0.9 0 2 0ZM13.6 4.6L15 6L7 14L3 10L4.4 8.6L7 11.2L13.6 4.6Z",fill:"#202124"})),o.createElement("svg",{className:"unchecked",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{className:"path",fillRule:"evenodd",clipRule:"evenodd",d:"M2 0H16C17.1 0 18 0.9 18 2V16C18 17.1 17.1 18 16 18H2C0.9 18 0 17.1 0 16V2C0 0.9 0.9 0 2 0ZM16 16V2H2V16H16Z",fill:"#80868B"})),o.createElement("svg",{className:"indeterminate",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{className:"path",fillRule:"evenodd",clipRule:"evenodd",d:"M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 2V16H2V2H16ZM4 10H14V8H4V10Z",fill:"#80868B"}))),(f||a)&&o.createElement(u,{disabled:p},f||a))}},693:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(660);Object.defineProperty(t,"Body1",{enumerable:!0,get:function(){return r.Body1}}),Object.defineProperty(t,"Body2",{enumerable:!0,get:function(){return r.Body2}}),Object.defineProperty(t,"Body3",{enumerable:!0,get:function(){return r.Body3}}),Object.defineProperty(t,"Span1",{enumerable:!0,get:function(){return r.Span1}}),Object.defineProperty(t,"Span2",{enumerable:!0,get:function(){return r.Span2}}),Object.defineProperty(t,"Span3",{enumerable:!0,get:function(){return r.Span3}}),Object.defineProperty(t,"Caption",{enumerable:!0,get:function(){return r.Caption}}),Object.defineProperty(t,"Code",{enumerable:!0,get:function(){return r.Code}}),Object.defineProperty(t,"Display1",{enumerable:!0,get:function(){return r.Display1}}),Object.defineProperty(t,"Display2",{enumerable:!0,get:function(){return r.Display2}}),Object.defineProperty(t,"Display3",{enumerable:!0,get:function(){return r.Display3}}),Object.defineProperty(t,"Display4",{enumerable:!0,get:function(){return r.Display4}}),Object.defineProperty(t,"Display5",{enumerable:!0,get:function(){return r.Display5}}),Object.defineProperty(t,"Display6",{enumerable:!0,get:function(){return r.Display6}}),Object.defineProperty(t,"Heading1",{enumerable:!0,get:function(){return r.Heading1}}),Object.defineProperty(t,"Heading2",{enumerable:!0,get:function(){return r.Heading2}}),Object.defineProperty(t,"Heading3",{enumerable:!0,get:function(){return r.Heading3}}),Object.defineProperty(t,"Heading4",{enumerable:!0,get:function(){return r.Heading4}}),Object.defineProperty(t,"Heading5",{enumerable:!0,get:function(){return r.Heading5}}),Object.defineProperty(t,"Heading6",{enumerable:!0,get:function(){return r.Heading6}}),Object.defineProperty(t,"ButtonText",{enumerable:!0,get:function(){return r.ButtonText}}),Object.defineProperty(t,"Text",{enumerable:!0,get:function(){return r.Text}}),Object.defineProperty(t,"TextLink",{enumerable:!0,get:function(){return r.TextLink}}),Object.defineProperty(t,"Overline",{enumerable:!0,get:function(){return r.Overline}}),Object.defineProperty(t,"Subhead",{enumerable:!0,get:function(){return r.Subhead}})},694:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.typographyColors=void 0;const r=n(485);t.typographyColors={light:{high:r.GREY_900,medium:r.GREY_800,low:r.GREY_700,disabled:r.GREY_600,anchor:r.GREY_500},dark:{high:r.GREY_200,medium:r.GREY_500,low:r.GREY_600,disabled:r.GREY_700,anchor:r.GREY_500}}},695:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.checkboxColors=void 0;const r=n(485);t.checkboxColors={light:{disabled:r.GREY_400,unchecked:r.GREY_600,checked:r.KAGGLE_BLACK},dark:{disabled:r.GREY_600,unchecked:r.GREY_400,checked:r.KAGGLE_WHITE}}},696:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(697);Object.defineProperty(t,"Pluralize",{enumerable:!0,get:function(){return r.Pluralize}})},697:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Pluralize=void 0;const r=n(60),o=n(0),i=n(452);class a extends o.Component{render(){const e=this.props.count?this.props.count:0;return this.props.hideCount?o.createElement("span",null,r(this.props.word,e,!1)):this.props.formatNumber?o.createElement("span",null,i.numberWithCommas(e)+" "+r(this.props.word,e)):o.createElement("span",null,r(this.props.word,e,!0))}}t.Pluralize=a},698:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(699);Object.defineProperty(t,"Modal",{enumerable:!0,get:function(){return r.Modal}})},699:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Modal=void 0;const r=n(3),o=n(1),i=n(0),a=n(700);const s=o.default((function(e){var{className:t}=e,n=r.__rest(e,["className"]);const o=`${t}__content`,s=`${t}__overlay`,l=`${t}__body`;return i.createElement(a,Object.assign({className:o,overlayClassName:s,bodyOpenClassName:l},n))}))`
  &__content {
    display: flex;
    flex-direction: column;

    border-radius: ${e=>e.theme.size.border.radius.button};
    background-color: ${e=>e.theme.colors.pure.white};

    width: ${e=>e.theme.size.modal[e.size].width};
    height: ${e=>e.theme.size.modal[e.size].height};

    &:focus {
      outline: none;
    }
  }

  &__overlay {
    /* Center modal within page */
    display: flex;
    justify-content: center;
    align-items: center;

    /* Overlay covers entire screen */
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;

    background-color: rgba(0, 0, 7, 0.4);

    /* HACK: Ensure overlay is above everything in @kaggle/web-old */
    z-index: ${e=>e.theme.zindex[1e3]};

    /* HACK: Default em's in modal off of 12px for consistency between @kaggle/web-old and @kaggle/web */
    font-size: 12px;
  }

  &__body {
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 100%;
  }
`;t.Modal=function(e){const{isOpen:t,children:n,size:r,onCloseRequest:o}=e;return i.createElement(s,{isOpen:t,size:r,onRequestClose:o},n)}},700:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(701),i=(r=o)&&r.__esModule?r:{default:r};t.default=i.default,e.exports=t.default},701:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=f(i),s=f(n(21)),l=f(n(10)),c=f(n(702)),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(554)),d=n(503),p=f(d),h=n(610);function f(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var g=t.portalClassName="ReactModalPortal",b=t.bodyOpenClassName="ReactModal__Body--open",_=void 0!==s.default.createPortal,v=function(){return _?s.default.createPortal:s.default.unstable_renderSubtreeIntoContainer};function y(e){return e()}var w=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,l=Array(i),u=0;u<i;u++)l[u]=arguments[u];return n=o=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.removePortal=function(){!_&&s.default.unmountComponentAtNode(o.node),y(o.props.parentSelector).removeChild(o.node)},o.portalRef=function(e){o.portal=e},o.renderPortal=function(e){var n=v()(o,a.default.createElement(c.default,r({defaultStyles:t.defaultStyles},e)),o.node);o.portalRef(n)},m(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){d.canUseDOM&&(_||(this.node=document.createElement("div")),this.node.className=this.props.portalClassName,y(this.props.parentSelector).appendChild(this.node),!_&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:y(e.parentSelector),nextParent:y(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,t,n){if(d.canUseDOM){var r=this.props,o=r.isOpen,i=r.portalClassName;e.portalClassName!==i&&(this.node.className=i);var a=n.prevParent,s=n.nextParent;s!==a&&(a.removeChild(this.node),s.appendChild(this.node)),(e.isOpen||o)&&!_&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(d.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);n?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,n-t)):this.removePortal()}}},{key:"render",value:function(){return d.canUseDOM&&_?(!this.node&&_&&(this.node=document.createElement("div")),v()(a.default.createElement(c.default,r({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){u.setElement(e)}}]),t}(i.Component);w.propTypes={isOpen:l.default.bool.isRequired,style:l.default.shape({content:l.default.object,overlay:l.default.object}),portalClassName:l.default.string,bodyOpenClassName:l.default.string,htmlOpenClassName:l.default.string,className:l.default.oneOfType([l.default.string,l.default.shape({base:l.default.string.isRequired,afterOpen:l.default.string.isRequired,beforeClose:l.default.string.isRequired})]),overlayClassName:l.default.oneOfType([l.default.string,l.default.shape({base:l.default.string.isRequired,afterOpen:l.default.string.isRequired,beforeClose:l.default.string.isRequired})]),appElement:l.default.instanceOf(p.default),onAfterOpen:l.default.func,onRequestClose:l.default.func,closeTimeoutMS:l.default.number,ariaHideApp:l.default.bool,shouldFocusAfterRender:l.default.bool,shouldCloseOnOverlayClick:l.default.bool,shouldReturnFocusAfterClose:l.default.bool,parentSelector:l.default.func,aria:l.default.object,data:l.default.object,role:l.default.string,contentLabel:l.default.string,shouldCloseOnEsc:l.default.bool,overlayRef:l.default.func,contentRef:l.default.func},w.defaultProps={isOpen:!1,portalClassName:g,bodyOpenClassName:b,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,parentSelector:function(){return document.body}},w.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,h.polyfill)(w),t.default=w},702:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),s=m(a),l=m(n(10)),c=f(n(703)),u=m(n(704)),d=f(n(554)),p=f(n(706)),h=m(n(503));function f(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function m(e){return e&&e.__esModule?e:{default:e}}var g={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},b=9,_=27,v=0,y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setOverlayRef=function(e){n.overlay=e,n.props.overlayRef&&n.props.overlayRef(e)},n.setContentRef=function(e){n.content=e,n.props.contentRef&&n.props.contentRef(e)},n.afterClose=function(){var e=n.props,t=e.appElement,r=e.ariaHideApp,o=e.htmlOpenClassName,i=e.bodyOpenClassName;i&&p.remove(document.body,i),o&&p.remove(document.getElementsByTagName("html")[0],o),r&&v>0&&0===(v-=1)&&d.show(t),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(c.returnFocus(),c.teardownScopedFocus()):c.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose()},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(c.setupScopedFocus(n.node),c.markForFocusLater()),n.setState({isOpen:!0},(function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen()})))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus()},n.closeWithTimeout=function(){var e=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:e},(function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())}))},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(e){e.keyCode===b&&(0,u.default)(n.content,e),n.props.shouldCloseOnEsc&&e.keyCode===_&&(e.stopPropagation(),n.requestClose(e))},n.handleOverlayOnClick=function(e){null===n.shouldClose&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(e):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(e){n.props.shouldCloseOnOverlayClick||e.target!=n.overlay||e.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(e){return n.ownerHandlesClose()&&n.props.onRequestClose(e)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(e,t){var r="object"===(void 0===t?"undefined":o(t))?t:{base:g[e],afterOpen:g[e]+"--after-open",beforeClose:g[e]+"--before-close"},i=r.base;return n.state.afterOpen&&(i=i+" "+r.afterOpen),n.state.beforeClose&&(i=i+" "+r.beforeClose),"string"==typeof t&&t?i+" "+t:i},n.attributesFromObject=function(e,t){return Object.keys(t).reduce((function(n,r){return n[e+"-"+r]=t[r],n}),{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,r=e.htmlOpenClassName,o=e.bodyOpenClassName;o&&p.add(document.body,o),r&&p.add(document.getElementsByTagName("html")[0],r),n&&(v+=1,d.hide(t))}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.className,o=e.overlayClassName,i=e.defaultStyles,a=n?{}:i.content,l=o?{}:i.overlay;return this.shouldBeClosed()?null:s.default.createElement("div",{ref:this.setOverlayRef,className:this.buildClassName("overlay",o),style:r({},l,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},s.default.createElement("div",r({id:t,ref:this.setContentRef,style:r({},a,this.props.style.content),className:this.buildClassName("content",n),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",this.props.aria||{}),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),this.props.children))}}]),t}(a.Component);y.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},y.propTypes={isOpen:l.default.bool.isRequired,defaultStyles:l.default.shape({content:l.default.object,overlay:l.default.object}),style:l.default.shape({content:l.default.object,overlay:l.default.object}),className:l.default.oneOfType([l.default.string,l.default.object]),overlayClassName:l.default.oneOfType([l.default.string,l.default.object]),bodyOpenClassName:l.default.string,htmlOpenClassName:l.default.string,ariaHideApp:l.default.bool,appElement:l.default.instanceOf(h.default),onAfterOpen:l.default.func,onAfterClose:l.default.func,onRequestClose:l.default.func,closeTimeoutMS:l.default.number,shouldFocusAfterRender:l.default.bool,shouldCloseOnOverlayClick:l.default.bool,shouldReturnFocusAfterClose:l.default.bool,role:l.default.string,contentLabel:l.default.string,aria:l.default.object,data:l.default.object,children:l.default.node,shouldCloseOnEsc:l.default.bool,overlayRef:l.default.func,contentRef:l.default.func,id:l.default.string,testId:l.default.string},t.default=y,e.exports=t.default},703:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleBlur=c,t.handleFocus=u,t.markForFocusLater=function(){a.push(document.activeElement)},t.returnFocus=function(){var e=null;try{return void(0!==a.length&&(e=a.pop()).focus())}catch(t){console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}},t.popWithoutFocus=function(){a.length>0&&a.pop()},t.setupScopedFocus=function(e){s=e,window.addEventListener?(window.addEventListener("blur",c,!1),document.addEventListener("focus",u,!0)):(window.attachEvent("onBlur",c),document.attachEvent("onFocus",u))},t.teardownScopedFocus=function(){s=null,window.addEventListener?(window.removeEventListener("blur",c),document.removeEventListener("focus",u)):(window.detachEvent("onBlur",c),document.detachEvent("onFocus",u))};var r,o=n(553),i=(r=o)&&r.__esModule?r:{default:r};var a=[],s=null,l=!1;function c(){l=!0}function u(){if(l){if(l=!1,!s)return;setTimeout((function(){s.contains(document.activeElement)||((0,i.default)(s)[0]||s).focus()}),0)}}},704:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,i.default)(e);if(!n.length)return void t.preventDefault();var r,o=t.shiftKey,a=n[0],s=n[n.length-1];if(e===document.activeElement){if(!o)return;r=s}s!==document.activeElement||o||(r=a);a===document.activeElement&&o&&(r=s);if(r)return t.preventDefault(),void r.focus();var l=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null==l||"Chrome"==l[1]||null!=/\biPod\b|\biPad\b/g.exec(navigator.userAgent))return;var c=n.indexOf(document.activeElement);c>-1&&(c+=o?-1:1);if(void 0===n[c])return t.preventDefault(),void(r=o?s:a).focus();t.preventDefault(),n[c].focus()};var r,o=n(553),i=(r=o)&&r.__esModule?r:{default:r};e.exports=t.default},705:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r)}()},706:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dumpClassLists=function(){0};var r={},o={};t.add=function(e,t){return n=e.classList,i="html"==e.nodeName.toLowerCase()?r:o,void t.split(" ").forEach((function(e){!function(e,t){e[t]||(e[t]=0),e[t]+=1}(i,e),n.add(e)}));var n,i},t.remove=function(e,t){return n=e.classList,i="html"==e.nodeName.toLowerCase()?r:o,void t.split(" ").forEach((function(e){!function(e,t){e[t]&&(e[t]-=1)}(i,e),0===i[e]&&n.remove(e)}));var n,i}},707:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(708);Object.defineProperty(t,"Radio",{enumerable:!0,get:function(){return r.Radio}})},708:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Radio=void 0;const r=n(0);class o extends r.PureComponent{constructor(){super(...arguments),this.state={selectedValue:this.props.initialValue},this.subscribers=new Set([this.props.onChange]),this.handleChange=e=>{this.setState({selectedValue:e})},this.subscribe=e=>{this.subscribers.add(e)},this.unsubscribe=e=>{this.subscribers.delete(e)},this.applyOnChange=e=>{e(this.state.selectedValue)},this.notify=()=>{Array.from(this.subscribers).forEach(this.applyOnChange)}}componentDidUpdate(e,t){this.state.selectedValue!==t.selectedValue&&this.notify()}render(){return this.props.children(this)}}t.Radio=o},709:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(710);Object.defineProperty(t,"RadioBubble",{enumerable:!0,get:function(){return r.RadioBubble}})},710:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RadioBubble=void 0;const r=n(1),o=n(0),i=r.default.div`
  display: flex;
  flex-wrap: wrap;
`,a=r.default.div``,s=r.default.input`
  display: none;
`,l=r.default.label`
  display: block;
  margin-bottom: ${e=>e.theme.size.pad.s};
  margin-right: ${e=>e.theme.size.pad.m};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.size.border.radius.radioBubble};
  user-select: none;
  padding: ${e=>e.theme.size.pad.s} ${e=>e.theme.size.pad.m};

  ${e=>{const{isChecked:t,theme:n}=e;return t?`\n      color: ${n.colors.kaggle.blueDark};\n      border-color: ${n.colors.kaggle.blueSuperLight};  \n      background-color: ${n.colors.kaggle.blueSuperLight};  \n      ${n.font.main.weight.normal};\n    `:""}};
  &:hover {
    cursor: pointer;
    color: ${e=>e.theme.colors.kaggle.blueDark};
    border-color: ${e=>e.theme.colors.kaggle.blueSuperLight};
    background-color: ${e=>e.theme.colors.kaggle.blueSuperLight};
  }
`;t.RadioBubble=function(e){const{group:t,value:n,options:r,onChange:c}=e,u=r.map(e=>{const{value:r,label:i}=e,u=r===n;return o.createElement(a,{key:r},o.createElement(s,{type:"radio",name:t,id:r,value:r,checked:u,"aria-checked":u,readOnly:!0}),o.createElement(l,{htmlFor:r,isChecked:u,onClick:()=>c(r)},i))});return o.createElement(i,null,u)}},711:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(551);Object.defineProperty(t,"Select",{enumerable:!0,get:function(){return r.Select}})},712:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(713);Object.defineProperty(t,"SplitButton",{enumerable:!0,get:function(){return r.SplitButton}})},713:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SplitButton=t.MenuItem=t.OtherActions=t.PrimaryAction=void 0;const r=n(1),o=n(724),i=n(723),a=n(722),s=n(621),l=n(0),c=n(501),u=r.default.div`
  display: flex;
  color: ${e=>e.theme.colors.pure.white};
`,d=r.default.button`
  border: none;
  background: none;

  color: ${e=>e.theme.colors.pure.white};
  background-color: ${e=>e.theme.colors.kaggle.blueDark};
  padding: ${e=>e.theme.size.pad.m};

  &:hover {
    cursor: pointer;
    background-color: ${e=>e.theme.colors.kaggle.blue};
  }

  &:disabled {
    cursor: default;
    background-color: ${e=>e.theme.colors.kaggle.gray};
  }
`;t.PrimaryAction=r.default(d)`
  border-radius: ${e=>e.hasOtherActions?0:e.theme.size.border.radius.button};
  border-top-left-radius: ${e=>e.theme.size.border.radius.button};
  border-bottom-left-radius: ${e=>e.theme.size.border.radius.button};
  white-space: nowrap;
`,t.OtherActions=r.default(d)`
  border-top-right-radius: ${e=>e.theme.size.border.radius.button};
  border-bottom-right-radius: ${e=>e.theme.size.border.radius.button};
  white-space: nowrap;
`;const p=r.default(s.default)`
  /* HACK: Ensure split button menu is above everything in @kaggle/web-old */
  z-index: ${e=>e.theme.zindex[1e3]};
  /* HACK: Ensure split button menu font-sizes are correct in @kaggle/web-old */
  font-size: 12px;
`,h=r.default(a.default)`
  background-color: ${e=>e.theme.colors.pure.white};
  border: 1px solid ${e=>e.theme.colors.content.border};
  border-radius: ${e=>e.theme.size.border.radius.dropdownMenu};

  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
    0 3px 14px 3px rgba(0, 0, 0, 0.12), 0 4px 15px 0 rgba(0, 0, 0, 0.2);
`;t.MenuItem=r.default(i.default)`
  && {
    ${e=>e.theme.font.main.size.l};
    padding: ${e=>e.theme.size.pad.m};
  }
`;class f extends l.Component{constructor(){super(...arguments),this.otherButton=l.createRef(),this.state={isOpen:!1},this.renderMenu=()=>{const{otherActions:e,isDisabled:n}=this.props,{isOpen:r}=this.state;if(!m(e))return;const i=e.map(e=>{const{key:n,content:r}=e;return l.createElement(t.MenuItem,{key:n,onClick:()=>this.onMenuActionClick(n)},r)});return l.createElement(l.Fragment,null,l.createElement(t.OtherActions,{ref:this.otherButton,disabled:n,onClick:this.onOtherActionsClick},l.createElement(c.Icon,{icon:"keyboard_arrow_down"})),l.createElement(p,{open:r,anchorEl:this.otherButton.current,placement:"bottom-start"},l.createElement(o.default,{onClickAway:this.onMenuClose},l.createElement(h,null,i))))},this.onPrimaryActionClick=()=>{const{primaryAction:e,onAction:t}=this.props;t(e.key)},this.onOtherActionsClick=()=>{this.setState(e=>({isOpen:!e.isOpen}))},this.onMenuActionClick=e=>{const{onAction:t}=this.props;t(e),this.setState({isOpen:!1})},this.onMenuClose=e=>{const{current:t}=this.otherButton;t&&t.contains(e.target)||this.setState({isOpen:!1})}}render(){const{primaryAction:e,otherActions:n,isDisabled:r}=this.props;return l.createElement(u,null,l.createElement(t.PrimaryAction,{hasOtherActions:m(n),onClick:this.onPrimaryActionClick,disabled:r},e.content),this.renderMenu())}}t.SplitButton=f;const m=e=>Array.isArray(e)&&e.length>0},714:function(e,t,n){"use strict";(function(e){for(var n="undefined"!=typeof window&&"undefined"!=typeof document,r=["Edge","Trident","Firefox"],o=0,i=0;i<r.length;i+=1)if(n&&navigator.userAgent.indexOf(r[i])>=0){o=1;break}var a=n&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then((function(){t=!1,e()})))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout((function(){t=!1,e()}),o))}};function s(e){return e&&"[object Function]"==={}.toString.call(e)}function l(e,t){if(1!==e.nodeType)return[];var n=e.ownerDocument.defaultView.getComputedStyle(e,null);return t?n[t]:n}function c(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function u(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=l(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/(auto|scroll|overlay)/.test(n+o+r)?e:u(c(e))}var d=n&&!(!window.MSInputMethodContext||!document.documentMode),p=n&&/MSIE 10/.test(navigator.userAgent);function h(e){return 11===e?d:10===e?p:d||p}function f(e){if(!e)return document.documentElement;for(var t=h(10)?document.body:null,n=e.offsetParent||null;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var r=n&&n.nodeName;return r&&"BODY"!==r&&"HTML"!==r?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===l(n,"position")?f(n):n:e?e.ownerDocument.documentElement:document.documentElement}function m(e){return null!==e.parentNode?m(e.parentNode):e}function g(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,r=n?e:t,o=n?t:e,i=document.createRange();i.setStart(r,0),i.setEnd(o,0);var a,s,l=i.commonAncestorContainer;if(e!==l&&t!==l||r.contains(o))return"BODY"===(s=(a=l).nodeName)||"HTML"!==s&&f(a.firstElementChild)!==a?f(l):l;var c=m(e);return c.host?g(c.host,t):g(e,m(t).host)}function b(e){var t="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=e.nodeName;if("BODY"===n||"HTML"===n){var r=e.ownerDocument.documentElement;return(e.ownerDocument.scrollingElement||r)[t]}return e[t]}function _(e,t){var n="x"===t?"Left":"Top",r="Left"===n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+r+"Width"],10)}function v(e,t,n,r){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],h(10)?parseInt(n["offset"+e])+parseInt(r["margin"+("Height"===e?"Top":"Left")])+parseInt(r["margin"+("Height"===e?"Bottom":"Right")]):0)}function y(e){var t=e.body,n=e.documentElement,r=h(10)&&getComputedStyle(n);return{height:v("Height",t,n,r),width:v("Width",t,n,r)}}var w=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},x=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),E=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function C(e){return k({},e,{right:e.left+e.width,bottom:e.top+e.height})}function S(e){var t={};try{if(h(10)){t=e.getBoundingClientRect();var n=b(e,"top"),r=b(e,"left");t.top+=n,t.left+=r,t.bottom+=n,t.right+=r}else t=e.getBoundingClientRect()}catch(e){}var o={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},i="HTML"===e.nodeName?y(e.ownerDocument):{},a=i.width||e.clientWidth||o.right-o.left,s=i.height||e.clientHeight||o.bottom-o.top,c=e.offsetWidth-a,u=e.offsetHeight-s;if(c||u){var d=l(e);c-=_(d,"x"),u-=_(d,"y"),o.width-=c,o.height-=u}return C(o)}function O(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=h(10),o="HTML"===t.nodeName,i=S(e),a=S(t),s=u(e),c=l(t),d=parseFloat(c.borderTopWidth,10),p=parseFloat(c.borderLeftWidth,10);n&&o&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var f=C({top:i.top-a.top-d,left:i.left-a.left-p,width:i.width,height:i.height});if(f.marginTop=0,f.marginLeft=0,!r&&o){var m=parseFloat(c.marginTop,10),g=parseFloat(c.marginLeft,10);f.top-=d-m,f.bottom-=d-m,f.left-=p-g,f.right-=p-g,f.marginTop=m,f.marginLeft=g}return(r&&!n?t.contains(s):t===s&&"BODY"!==s.nodeName)&&(f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=b(t,"top"),o=b(t,"left"),i=n?-1:1;return e.top+=r*i,e.bottom+=r*i,e.left+=o*i,e.right+=o*i,e}(f,t)),f}function T(e){if(!e||!e.parentElement||h())return document.documentElement;for(var t=e.parentElement;t&&"none"===l(t,"transform");)t=t.parentElement;return t||document.documentElement}function I(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i={top:0,left:0},a=o?T(e):g(e,t);if("viewport"===r)i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,r=O(e,n),o=Math.max(n.clientWidth,window.innerWidth||0),i=Math.max(n.clientHeight,window.innerHeight||0),a=t?0:b(n),s=t?0:b(n,"left");return C({top:a-r.top+r.marginTop,left:s-r.left+r.marginLeft,width:o,height:i})}(a,o);else{var s=void 0;"scrollParent"===r?"BODY"===(s=u(c(t))).nodeName&&(s=e.ownerDocument.documentElement):s="window"===r?e.ownerDocument.documentElement:r;var d=O(s,a,o);if("HTML"!==s.nodeName||function e(t){var n=t.nodeName;if("BODY"===n||"HTML"===n)return!1;if("fixed"===l(t,"position"))return!0;var r=c(t);return!!r&&e(r)}(a))i=d;else{var p=y(e.ownerDocument),h=p.height,f=p.width;i.top+=d.top-d.marginTop,i.bottom=h+d.top,i.left+=d.left-d.marginLeft,i.right=f+d.left}}var m="number"==typeof(n=n||0);return i.left+=m?n:n.left||0,i.top+=m?n:n.top||0,i.right-=m?n:n.right||0,i.bottom-=m?n:n.bottom||0,i}function P(e,t,n,r,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var a=I(n,r,i,o),s={top:{width:a.width,height:t.top-a.top},right:{width:a.right-t.right,height:a.height},bottom:{width:a.width,height:a.bottom-t.bottom},left:{width:t.left-a.left,height:a.height}},l=Object.keys(s).map((function(e){return k({key:e},s[e],{area:(t=s[e],t.width*t.height)});var t})).sort((function(e,t){return t.area-e.area})),c=l.filter((function(e){var t=e.width,r=e.height;return t>=n.clientWidth&&r>=n.clientHeight})),u=c.length>0?c[0].key:l[0].key,d=e.split("-")[1];return u+(d?"-"+d:"")}function R(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return O(n,r?T(t):g(t,n),r)}function j(e){var t=e.ownerDocument.defaultView.getComputedStyle(e),n=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),r=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:e.offsetWidth+r,height:e.offsetHeight+n}}function N(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,(function(e){return t[e]}))}function $(e,t,n){n=n.split("-")[0];var r=j(e),o={width:r.width,height:r.height},i=-1!==["right","left"].indexOf(n),a=i?"top":"left",s=i?"left":"top",l=i?"height":"width",c=i?"width":"height";return o[a]=t[a]+t[l]/2-r[l]/2,o[s]=n===s?t[s]-r[c]:t[N(s)],o}function F(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function A(e,t,n){return(void 0===n?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex((function(e){return e[t]===n}));var r=F(e,(function(e){return e[t]===n}));return e.indexOf(r)}(e,"name",n))).forEach((function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e.function||e.fn;e.enabled&&s(n)&&(t.offsets.popper=C(t.offsets.popper),t.offsets.reference=C(t.offsets.reference),t=n(t,e))})),t}function M(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=R(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=P(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=$(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=A(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function L(e,t){return e.some((function(e){var n=e.name;return e.enabled&&n===t}))}function D(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),r=0;r<t.length;r++){var o=t[r],i=o?""+o+n:e;if(void 0!==document.body.style[i])return i}return null}function z(){return this.state.isDestroyed=!0,L(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[D("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function B(e){var t=e.ownerDocument;return t?t.defaultView:window}function U(e,t,n,r){n.updateBound=r,B(e).addEventListener("resize",n.updateBound,{passive:!0});var o=u(e);return function e(t,n,r,o){var i="BODY"===t.nodeName,a=i?t.ownerDocument.defaultView:t;a.addEventListener(n,r,{passive:!0}),i||e(u(a.parentNode),n,r,o),o.push(a)}(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function G(){this.state.eventsEnabled||(this.state=U(this.reference,this.options,this.state,this.scheduleUpdate))}function V(){var e,t;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(e=this.reference,t=this.state,B(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach((function(e){e.removeEventListener("scroll",t.updateBound)})),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t))}function H(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function W(e,t){Object.keys(t).forEach((function(n){var r="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&H(t[n])&&(r="px"),e.style[n]=t[n]+r}))}var q=n&&/Firefox/i.test(navigator.userAgent);function K(e,t,n){var r=F(e,(function(e){return e.name===t})),o=!!r&&e.some((function(e){return e.name===n&&e.enabled&&e.order<r.order}));if(!o){var i="`"+t+"`",a="`"+n+"`";console.warn(a+" modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return o}var Y=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],Q=Y.slice(3);function X(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Q.indexOf(e),r=Q.slice(n+1).concat(Q.slice(0,n));return t?r.reverse():r}var Z={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function J(e,t,n,r){var o=[0,0],i=-1!==["right","left"].indexOf(r),a=e.split(/(\+|\-)/).map((function(e){return e.trim()})),s=a.indexOf(F(a,(function(e){return-1!==e.search(/,|\s/)})));a[s]&&-1===a[s].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,c=-1!==s?[a.slice(0,s).concat([a[s].split(l)[0]]),[a[s].split(l)[1]].concat(a.slice(s+1))]:[a];return(c=c.map((function(e,r){var o=(1===r?!i:i)?"height":"width",a=!1;return e.reduce((function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,a=!0,e):a?(e[e.length-1]+=t,a=!1,e):e.concat(t)}),[]).map((function(e){return function(e,t,n,r){var o=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+o[1],a=o[2];if(!i)return e;if(0===a.indexOf("%")){var s=void 0;switch(a){case"%p":s=n;break;case"%":case"%r":default:s=r}return C(s)[t]/100*i}if("vh"===a||"vw"===a){return("vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*i}return i}(e,o,t,n)}))}))).forEach((function(e,t){e.forEach((function(n,r){H(n)&&(o[t]+=n*("-"===e[r-1]?-1:1))}))})),o}var ee={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],r=t.split("-")[1];if(r){var o=e.offsets,i=o.reference,a=o.popper,s=-1!==["bottom","top"].indexOf(n),l=s?"left":"top",c=s?"width":"height",u={start:E({},l,i[l]),end:E({},l,i[l]+i[c]-a[c])};e.offsets.popper=k({},a,u[r])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n=t.offset,r=e.placement,o=e.offsets,i=o.popper,a=o.reference,s=r.split("-")[0],l=void 0;return l=H(+n)?[+n,0]:J(n,i,a,s),"left"===s?(i.top+=l[0],i.left-=l[1]):"right"===s?(i.top+=l[0],i.left+=l[1]):"top"===s?(i.left+=l[0],i.top-=l[1]):"bottom"===s&&(i.left+=l[0],i.top+=l[1]),e.popper=i,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||f(e.instance.popper);e.instance.reference===n&&(n=f(n));var r=D("transform"),o=e.instance.popper.style,i=o.top,a=o.left,s=o[r];o.top="",o.left="",o[r]="";var l=I(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);o.top=i,o.left=a,o[r]=s,t.boundaries=l;var c=t.priority,u=e.offsets.popper,d={primary:function(e){var n=u[e];return u[e]<l[e]&&!t.escapeWithReference&&(n=Math.max(u[e],l[e])),E({},e,n)},secondary:function(e){var n="right"===e?"left":"top",r=u[n];return u[e]>l[e]&&!t.escapeWithReference&&(r=Math.min(u[n],l[e]-("right"===e?u.width:u.height))),E({},n,r)}};return c.forEach((function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";u=k({},u,d[t](e))})),e.offsets.popper=u,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,r=t.reference,o=e.placement.split("-")[0],i=Math.floor,a=-1!==["top","bottom"].indexOf(o),s=a?"right":"bottom",l=a?"left":"top",c=a?"width":"height";return n[s]<i(r[l])&&(e.offsets.popper[l]=i(r[l])-n[c]),n[l]>i(r[s])&&(e.offsets.popper[l]=i(r[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var n;if(!K(e.instance.modifiers,"arrow","keepTogether"))return e;var r=t.element;if("string"==typeof r){if(!(r=e.instance.popper.querySelector(r)))return e}else if(!e.instance.popper.contains(r))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var o=e.placement.split("-")[0],i=e.offsets,a=i.popper,s=i.reference,c=-1!==["left","right"].indexOf(o),u=c?"height":"width",d=c?"Top":"Left",p=d.toLowerCase(),h=c?"left":"top",f=c?"bottom":"right",m=j(r)[u];s[f]-m<a[p]&&(e.offsets.popper[p]-=a[p]-(s[f]-m)),s[p]+m>a[f]&&(e.offsets.popper[p]+=s[p]+m-a[f]),e.offsets.popper=C(e.offsets.popper);var g=s[p]+s[u]/2-m/2,b=l(e.instance.popper),_=parseFloat(b["margin"+d],10),v=parseFloat(b["border"+d+"Width"],10),y=g-e.offsets.popper[p]-_-v;return y=Math.max(Math.min(a[u]-m,y),0),e.arrowElement=r,e.offsets.arrow=(E(n={},p,Math.round(y)),E(n,h,""),n),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(L(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=I(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),r=e.placement.split("-")[0],o=N(r),i=e.placement.split("-")[1]||"",a=[];switch(t.behavior){case Z.FLIP:a=[r,o];break;case Z.CLOCKWISE:a=X(r);break;case Z.COUNTERCLOCKWISE:a=X(r,!0);break;default:a=t.behavior}return a.forEach((function(s,l){if(r!==s||a.length===l+1)return e;r=e.placement.split("-")[0],o=N(r);var c=e.offsets.popper,u=e.offsets.reference,d=Math.floor,p="left"===r&&d(c.right)>d(u.left)||"right"===r&&d(c.left)<d(u.right)||"top"===r&&d(c.bottom)>d(u.top)||"bottom"===r&&d(c.top)<d(u.bottom),h=d(c.left)<d(n.left),f=d(c.right)>d(n.right),m=d(c.top)<d(n.top),g=d(c.bottom)>d(n.bottom),b="left"===r&&h||"right"===r&&f||"top"===r&&m||"bottom"===r&&g,_=-1!==["top","bottom"].indexOf(r),v=!!t.flipVariations&&(_&&"start"===i&&h||_&&"end"===i&&f||!_&&"start"===i&&m||!_&&"end"===i&&g),y=!!t.flipVariationsByContent&&(_&&"start"===i&&f||_&&"end"===i&&h||!_&&"start"===i&&g||!_&&"end"===i&&m),w=v||y;(p||b||w)&&(e.flipped=!0,(p||b)&&(r=a[l+1]),w&&(i=function(e){return"end"===e?"start":"start"===e?"end":e}(i)),e.placement=r+(i?"-"+i:""),e.offsets.popper=k({},e.offsets.popper,$(e.instance.popper,e.offsets.reference,e.placement)),e=A(e.instance.modifiers,e,"flip"))})),e},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],r=e.offsets,o=r.popper,i=r.reference,a=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return o[a?"left":"top"]=i[n]-(s?o[a?"width":"height"]:0),e.placement=N(t),e.offsets.popper=C(o),e}},hide:{order:800,enabled:!0,fn:function(e){if(!K(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=F(e.instance.modifiers,(function(e){return"preventOverflow"===e.name})).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,r=t.y,o=e.offsets.popper,i=F(e.instance.modifiers,(function(e){return"applyStyle"===e.name})).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a=void 0!==i?i:t.gpuAcceleration,s=f(e.instance.popper),l=S(s),c={position:o.position},u=function(e,t){var n=e.offsets,r=n.popper,o=n.reference,i=Math.round,a=Math.floor,s=function(e){return e},l=i(o.width),c=i(r.width),u=-1!==["left","right"].indexOf(e.placement),d=-1!==e.placement.indexOf("-"),p=t?u||d||l%2==c%2?i:a:s,h=t?i:s;return{left:p(l%2==1&&c%2==1&&!d&&t?r.left-1:r.left),top:h(r.top),bottom:h(r.bottom),right:p(r.right)}}(e,window.devicePixelRatio<2||!q),d="bottom"===n?"top":"bottom",p="right"===r?"left":"right",h=D("transform"),m=void 0,g=void 0;if(g="bottom"===d?"HTML"===s.nodeName?-s.clientHeight+u.bottom:-l.height+u.bottom:u.top,m="right"===p?"HTML"===s.nodeName?-s.clientWidth+u.right:-l.width+u.right:u.left,a&&h)c[h]="translate3d("+m+"px, "+g+"px, 0)",c[d]=0,c[p]=0,c.willChange="transform";else{var b="bottom"===d?-1:1,_="right"===p?-1:1;c[d]=g*b,c[p]=m*_,c.willChange=d+", "+p}var v={"x-placement":e.placement};return e.attributes=k({},v,e.attributes),e.styles=k({},c,e.styles),e.arrowStyles=k({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){var t,n;return W(e.instance.popper,e.styles),t=e.instance.popper,n=e.attributes,Object.keys(n).forEach((function(e){!1!==n[e]?t.setAttribute(e,n[e]):t.removeAttribute(e)})),e.arrowElement&&Object.keys(e.arrowStyles).length&&W(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,r,o){var i=R(o,t,e,n.positionFixed),a=P(n.placement,i,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",a),W(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},te=function(){function e(t,n){var r=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};w(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=a(this.update.bind(this)),this.options=k({},e.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(k({},e.Defaults.modifiers,o.modifiers)).forEach((function(t){r.options.modifiers[t]=k({},e.Defaults.modifiers[t]||{},o.modifiers?o.modifiers[t]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(e){return k({name:e},r.options.modifiers[e])})).sort((function(e,t){return e.order-t.order})),this.modifiers.forEach((function(e){e.enabled&&s(e.onLoad)&&e.onLoad(r.reference,r.popper,r.options,e,r.state)})),this.update();var i=this.options.eventsEnabled;i&&this.enableEventListeners(),this.state.eventsEnabled=i}return x(e,[{key:"update",value:function(){return M.call(this)}},{key:"destroy",value:function(){return z.call(this)}},{key:"enableEventListeners",value:function(){return G.call(this)}},{key:"disableEventListeners",value:function(){return V.call(this)}}]),e}();te.Utils=("undefined"!=typeof window?window:e).PopperUtils,te.placements=Y,te.Defaults=ee,t.a=te}).call(this,n(84))},715:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(716);Object.defineProperty(t,"Skeleton",{enumerable:!0,get:function(){return r.Skeleton}})},716:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Skeleton=void 0;const r=n(1),o=n(0),i=n(452),a=r.keyframes`
  0%,100%{
    opacity: 0.6;
  }
  50%{
    opacity: 0.2;
  }
`,s=r.default.div`
  display: flex;
  min-width: 2em;
  background-color: #ececed;
  margin: 0 0 0.8em;
  height: 1.2em;
  border-radius: 2px;
  opacity: 0.6;
  transform-origin: left;
  animation: ${a} ${e=>2+e.index}s ease-in-out
    infinite;
`,l=e=>`${s}:nth-child(${e})`,c=r.default.div`
  height: ${e=>e.height||"auto"};
  width: ${e=>e.width||"auto"};
  padding: 1rem;
  display: flex;
  flex-flow: column nowrap;
  border-radius: 2px;

  ${l(1)} {
    width: 45%;
  }

  ${l(2)} {
    width: 50%;
  }

  ${l(3)} {
    width: 47%;
  }

  ${l(4)} {
    width: 40%;
  }
`;class u extends o.Component{render(){const{children:e,height:t,width:n,lines:r,style:a,className:l}=this.props;return e||o.createElement(c,Object.assign({height:t,width:n,lines:r,style:a,className:l},i.extractStyleProps(this.props)),new Array(r||4).fill(0).map((e,t)=>o.createElement(s,{key:t,index:t})))}}t.Skeleton=u},717:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(552);Object.defineProperty(t,"TextInput",{enumerable:!0,get:function(){return r.TextInput}})},722:function(e,t,n){"use strict";n.r(t);var r=n(443),o=n(453),i=n(0),a=n.n(i),s=(n(10),n(21)),l=n.n(s),c=n(516),u=n(460),d=n(471),p=n(555),h=a.a.forwardRef((function(e,t){var n=e.children,i=e.classes,s=e.className,l=e.component,c=void 0===l?"ul":l,d=e.dense,h=void 0!==d&&d,f=e.disablePadding,m=void 0!==f&&f,g=e.subheader,b=Object(o.a)(e,["children","classes","className","component","dense","disablePadding","subheader"]),_=a.a.useMemo((function(){return{dense:h}}),[h]);return a.a.createElement(p.a.Provider,{value:_},a.a.createElement(c,Object(r.a)({className:Object(u.default)(i.root,s,h&&i.dense,!m&&i.padding,g&&i.subheader),ref:t},b),g,n))})),f=Object(d.a)({root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{},subheader:{paddingTop:0}},{name:"MuiList"})(h);var m=function(){var e=document.createElement("div");e.style.width="99px",e.style.height="99px",e.style.position="absolute",e.style.top="-9999px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t},g=n(455);function b(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function _(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function v(e,t){if(void 0===t)return!0;var n=e.innerText;return void 0===n&&(n=e.textContent),void 0!==n&&(0!==(n=n.trim().toLowerCase()).length&&(t.repeating?n[0]===t.keys[0]:0===n.indexOf(t.keys.join(""))))}function y(e,t,n,r,o){for(var i=!1,a=r(e,t,!!t&&n);a;){if(a===e.firstChild){if(i)return!1;i=!0}if(a.hasAttribute("tabindex")&&!a.disabled&&"true"!==a.getAttribute("aria-disabled")&&v(a,o))return a.focus(),!0;a=r(e,a,n)}return!1}var w="undefined"==typeof window?a.a.useEffect:a.a.useLayoutEffect,x=a.a.forwardRef((function(e,t){var n=e.actions,i=e.autoFocus,s=void 0!==i&&i,u=e.className,d=e.onKeyDown,p=e.disableListWrap,h=void 0!==p&&p,x=Object(o.a)(e,["actions","autoFocus","className","onKeyDown","disableListWrap"]),E=a.a.useRef(null),k=a.a.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});w((function(){s&&E.current.focus()}),[s]),a.a.useImperativeHandle(n,(function(){return{adjustStyleForScrollbar:function(e,t){var n=!E.current.style.width;if(e.clientHeight<E.current.clientHeight&&n){var r="".concat(m(!0),"px");E.current.style["rtl"===t.direction?"paddingLeft":"paddingRight"]=r,E.current.style.width="calc(100% + ".concat(r,")")}return E.current}}}),[]);var C=a.a.useCallback((function(e){E.current=l.a.findDOMNode(e)}),[]),S=Object(g.c)(C,t);return a.a.createElement(f,Object(r.a)({role:"menu",ref:S,className:u,onKeyDown:function(e){var t=E.current,n=e.key,r=Object(c.a)(t).activeElement;if("ArrowDown"===n)e.preventDefault(),y(t,r,h,b);else if("ArrowUp"===n)e.preventDefault(),y(t,r,h,_);else if("Home"===n)e.preventDefault(),y(t,null,h,b);else if("End"===n)e.preventDefault(),y(t,null,h,_);else if(1===n.length){var o=k.current,i=n.toLowerCase(),a=performance.now();o.keys.length>0&&(a-o.lastTime>500?(o.keys=[],o.repeating=!0,o.previousKeyMatched=!0):o.repeating&&i!==o.keys[0]&&(o.repeating=!1)),o.lastTime=a,o.keys.push(i);var s=r&&!o.repeating&&v(r,o);o.previousKeyMatched&&(s||y(t,r,!1,b,o))?e.preventDefault():o.previousKeyMatched=!1}d&&d(e)},tabIndex:s?0:-1},x))}));n.d(t,"default",(function(){return x}))},723:function(e,t,n){"use strict";n.r(t);var r=n(453),o=n(443),i=n(0),a=n.n(i),s=(n(10),n(460)),l=n(471),c=n(1095),u=n(455),d=n(555),p=n(21),h=n.n(p),f=(n(486),"undefined"==typeof window?a.a.useEffect:a.a.useLayoutEffect),m=a.a.forwardRef((function(e,t){var n=e.alignItems,i=void 0===n?"center":n,l=e.autoFocus,p=void 0!==l&&l,m=e.button,g=void 0!==m&&m,b=e.children,_=e.classes,v=e.className,y=e.component,w=e.ContainerComponent,x=void 0===w?"li":w,E=e.ContainerProps,k=(E=void 0===E?{}:E).className,C=Object(r.a)(E,["className"]),S=e.dense,O=e.disabled,T=void 0!==O&&O,I=e.disableGutters,P=void 0!==I&&I,R=e.divider,j=void 0!==R&&R,N=e.focusVisibleClassName,$=e.selected,F=void 0!==$&&$,A=Object(r.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),M=a.a.useContext(d.a),L={dense:S||M.dense||!1,alignItems:i},D=a.a.useRef(null);f((function(){p&&D.current&&D.current.focus()}),[p]);var z=a.a.Children.toArray(b),B=z.length&&Object(u.a)(z[z.length-1],["ListItemSecondaryAction"]),U=a.a.useCallback((function(e){D.current=h.a.findDOMNode(e)}),[]),G=Object(u.c)(U,t),V=Object(o.a)({className:Object(s.default)(_.root,v,L.dense&&_.dense,!P&&_.gutters,j&&_.divider,T&&_.disabled,g&&_.button,"center"!==i&&_.alignItemsFlexStart,B&&_.secondaryAction,F&&_.selected),disabled:T},A),H=y||"li";return g&&(V.component=y||"div",V.focusVisibleClassName=Object(s.default)(_.focusVisible,N),H=c.a),B?(H=V.component||y?H:"div","li"===x&&("li"===H?H="div":"li"===V.component&&(V.component="div")),a.a.createElement(d.a.Provider,{value:L},a.a.createElement(x,Object(o.a)({className:Object(s.default)(_.container,k),ref:G},C),a.a.createElement(H,V,z),z.pop()))):a.a.createElement(d.a.Provider,{value:L},a.a.createElement(H,Object(o.a)({ref:G},V),z))})),g=Object(l.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(m),b=a.a.forwardRef((function(e,t){var n,i=e.classes,l=e.className,c=e.component,u=void 0===c?"li":c,d=e.disableGutters,p=void 0!==d&&d,h=e.role,f=void 0===h?"menuitem":h,m=e.selected,b=e.tabIndex,_=Object(r.a)(e,["classes","className","component","disableGutters","role","selected","tabIndex"]);return e.disabled||(n=void 0!==b?b:-1),a.a.createElement(g,Object(o.a)({button:!0,role:f,tabIndex:n,component:u,selected:m,disableGutters:p,classes:{dense:i.dense},className:Object(s.default)(i.root,l,m&&i.selected,!p&&i.gutters),ref:t},_))})),_=Object(l.a)((function(e){return{root:Object(o.a)({},e.typography.subtitle1,{minHeight:48,paddingTop:4,paddingBottom:4,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"}),gutters:{paddingLeft:16,paddingRight:16},selected:{},dense:{minHeight:"auto"}}}),{name:"MuiMenuItem"})(b);n.d(t,"default",(function(){return _}))},724:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(21),a=n.n(i),s=(n(10),n(516)),l=n(455),c=n(488);function u(e){return e.substring(2).toLowerCase()}var d=function(e){var t=e.children,n=e.mouseEvent,r=void 0===n?"onClick":n,i=e.touchEvent,d=void 0===i?"onTouchEnd":i,p=e.onClickAway,h=function(){var e=o.a.useRef(!1);return o.a.useEffect((function(){return e.current=!0,function(){e.current=!1}}),[]),e}(),f=o.a.useRef(!1),m=o.a.useRef(null),g=o.a.useCallback((function(e){m.current=a.a.findDOMNode(e)}),[]),b=Object(l.c)(t.ref,g),_=Object(c.a)((function(e){if(!e.defaultPrevented&&h.current)if(f.current)f.current=!1;else{var t=m.current;if(t){var n=Object(s.a)(t);n.documentElement&&n.documentElement.contains(e.target)&&!t.contains(e.target)&&p(e)}}})),v=o.a.useCallback((function(){f.current=!0}),[]);return o.a.useEffect((function(){if(!1!==d){var e=u(d);return document.addEventListener(e,_),document.addEventListener("touchmove",v),function(){document.removeEventListener(e,_),document.removeEventListener("touchmove",v)}}}),[_,v,d]),o.a.useEffect((function(){if(!1!==r){var e=u(r);return document.addEventListener(e,_),function(){document.removeEventListener(e,_)}}}),[_,r]),o.a.createElement(o.a.Fragment,null,o.a.cloneElement(t,{ref:b}))};n.d(t,"default",(function(){return d}))},957:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(619),o=n(61),i=n(85),a=n(469);class s extends a.a{constructor(e){super(e)}getSubtitle(){return this.getDescription()||""}getUserVisibleCategory(){return"Kaggle User"}getFullSubheaderItems(){const e=this.getCommonSubheaderItems(),t=this.getLastSeenDate();return t&&e.push({text:`Last seen ${o(t).fromNow()}`}),e.push({text:`Joined ${o(this.getDate()).fromNow()}`}),e}getCondensedSubheaderItems(){return[{text:this.getUserVisibleCategory()},...this.getFullSubheaderItems()]}getTier(){return Object(i.e)(this.getPerformanceTier()||0)}getKernelsCount(){return this.model.userInfo&&this.model.userInfo.kernelsCount}getTopicsCount(){return this.model.userInfo&&this.model.userInfo.topicsCount}getDescription(){return this.model.userInfo&&this.model.userInfo.description}getLastSeenDate(){const e=this.model.userInfo&&this.model.userInfo.lastSeenDate;return e&&Object(r.a)(e)||void 0}getPerformanceTier(){return this.model.userInfo&&this.model.userInfo.performanceTier}}},959:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},961:function(e,t,n){"use strict";var r=n(1),o=n.n(r),i=n(0),a=n(2),s=n(41);const l={light:{disabled:a.e,unchecked:a.h,checked:a.n},dark:{disabled:a.h,unchecked:a.e,checked:a.t}};n.d(t,"a",(function(){return p}));const c=o.a.label`
  display: flex;
  position: relative;
  height: fit-content;
  cursor: ${e=>e.disabled?"initial":"pointer"};
`,u=o.a.input`
  opacity: 0;
  height: 24px;
  width: 24px;
  position: absolute;
  z-index: 2;
  cursor: pointer;

  & + span {
    .path {
      fill: ${e=>e.checkboxTheme.unchecked};
    }

    .checked .path {
      fill: ${e=>e.checkboxTheme.checked};
    }
    .unchecked {
      display: block;
    }

    .checked {
      display: none;
    }

    .indeterminate {
      display: none;
    }
  }

  &:checked + span {
    .unchecked {
      display: none;
    }

    .checked {
      display: block;
    }

    .indeterminate {
      display: none;
    }
  }

  &:indeterminate + span {
    .unchecked {
      display: none;
    }

    .checked {
      display: none;
    }

    .indeterminate {
      display: block;
    }
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled + span {
    .path {
      fill: ${e=>e.checkboxTheme.disabled};
    }
  }
`,d=o()(s.r)`
  ${e=>e.disabled&&`color: ${a.e};`}
  margin-left: 8px;
`,p=e=>{const{onChange:t,onClick:n,checked:o,children:a,className:s,disabled:p,indeterminate:h,label:f,title:m,value:g,name:b}=e,_=i.useContext(r.ThemeContext),v=l[_.name],y=i.useRef(null);return i.useEffect(()=>{const e=y.current;e&&(e.indeterminate=h||!1)},[h]),i.createElement(c,{disabled:!!p},i.createElement(u,{id:"kaggleCheckbox",type:"checkbox",checked:o,className:s,disabled:p,onChange:t,onClick:n,value:g||"true",title:m,name:b,checkboxTheme:v,tabIndex:0,ref:y}),i.createElement("span",{style:{height:"fit-content"}},i.createElement("svg",{className:"checked",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{className:"path",fillRule:"evenodd",clipRule:"evenodd",d:"M2 0H16C17.1 0 18 0.9 18 2V16C18 17.1 17.1 18 16 18H2C0.9 18 0 17.1 0 16V2C0 0.9 0.9 0 2 0ZM13.6 4.6L15 6L7 14L3 10L4.4 8.6L7 11.2L13.6 4.6Z",fill:"#202124"})),i.createElement("svg",{className:"unchecked",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{className:"path",fillRule:"evenodd",clipRule:"evenodd",d:"M2 0H16C17.1 0 18 0.9 18 2V16C18 17.1 17.1 18 16 18H2C0.9 18 0 17.1 0 16V2C0 0.9 0.9 0 2 0ZM16 16V2H2V16H16Z",fill:"#80868B"})),i.createElement("svg",{className:"indeterminate",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{className:"path",fillRule:"evenodd",clipRule:"evenodd",d:"M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 2V16H2V2H16ZM4 10H14V8H4V10Z",fill:"#80868B"}))),(f||a)&&i.createElement(d,{disabled:p},f||a))}},981:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));class r{constructor(e){this.filterSet=new Set(e.map(e=>e.toQueryString())),this.filters=e}size(){return this.filterSet.size}has(e){return this.filterSet.has(e)}hasFilterInGroup(e){for(const t of e.getFilters())if(this.hasFilter(t))return!0;return!1}hasFilter(e){return this.has(e.toQueryString())}getFilters(){return this.filters}equals(e){for(const t of this.filterSet)if(!e.has(t))return!1;return e.size()===this.size()}}},982:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(664);class o{constructor(e,t,n){this.type=e,this.name=t,this.filters=n}toFormattedString(){return Object(r.a)(this.name)}hasOption(){return this.filters.length>0}getFilters(){return this.filters}getType(){return this.type}}},991:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(1),o=n.n(r),i=n(608),a=n(0);const s=o()(i.a)``,l=e=>{const{children:t,className:n,choice:r,filter:o}=e;return a.createElement(s,{className:n,choice:r,filter:o},t)}}}]);
//# sourceMappingURL=98.3df95ca462b0d06f4923.js.map