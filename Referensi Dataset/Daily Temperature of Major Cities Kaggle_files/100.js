(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1007:function(e,t,n){"use strict";var o=n(454),r=n(443),i=n(0),a=n.n(i),l=(n(486),n(1410)),c=n(1203),s=!1;t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(l.a)(),i=Object(c.a)({theme:n,name:"MuiUseMediaQuery",props:{}}),u="function"==typeof e?e(n):e;u=u.replace(/^@media( ?)/m,"");var d="undefined"!=typeof window&&void 0!==window.matchMedia,v=Object(r.a)({},i,{},t),p=v.defaultMatches,m=void 0!==p&&p,f=v.noSsr,h=void 0!==f&&f,g=v.ssrMatchMedia,E=void 0===g?null:g,w=a.a.useState((function(){return(s||h)&&d?window.matchMedia(u).matches:E?E(u).matches:m})),b=Object(o.a)(w,2),x=b[0],k=b[1];return a.a.useEffect((function(){if(s=!0,d){var e=window.matchMedia(u);return k(e.matches),e.addListener(t),function(){e.removeListener(t)}}function t(){k(e.matches)}}),[u,d]),x}},1080:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var o=n(1),r=n.n(o),i=n(27),a=n(57),l=n(0),c=n(52);n(64),n(87),n(88);const s=r()(a.a)`
  min-width: 256px;
  box-shadow: 0px 1px 2px rgba(0, 4, 7, 0.3),
    0px 2px 6px 2px rgba(0, 4, 7, 0.15);
  background-color: ${e=>c.a[e.theme.name].background};
  border-radius: 8px;
`,u=e=>{const{anchorCorner:t,children:n,className:o,fixed:r,focusOnOpen:a,hoistToBody:c,open:u,onOpen:d,onClose:v,style:p}=e,m=l.useRef(null);return l.createElement(s,{style:p,anchorCorner:t,className:o,fixed:r,hoistToBody:c,open:u,onOpen:e=>{var t,n;if(d&&d(e),a){const e=[...null!==(n=null===(t=m.current)||void 0===t?void 0:t.querySelectorAll('a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'))&&void 0!==n?n:[]].filter(e=>!e.hasAttribute("disabled"));e.length&&e[0].focus()}},onClose:v},l.createElement("div",{ref:m,onKeyDown:e=>{var t;if(("Enter"===e.key||13===e.keyCode)&&"INPUT"===e.target.tagName&&"text"===e.target.type){const n=null===(t=m.current)||void 0===t?void 0:t.querySelector(`[${i.a.strings.BUTTON_DEFAULT_ATTRIBUTE}="true"]`);n&&(n.click(),e.preventDefault(),e.stopPropagation())}},role:"document"},n))}},1365:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(61),r=n(0);const i=e=>{const{date:t,interval:n=1e3,withoutSuffix:i}=e,a=r.useRef(0),l=r.useRef(0),[,c]=r.useState(0);r.useEffect(()=>(a.current&&clearInterval(a.current),a.current=window.setInterval(()=>c(l.current++),n),c(l.current++),()=>clearInterval(a.current)),[n]);const s="boolean"==typeof t?t?Date.now():0:t instanceof Date?t.getTime():new Date(t||0).getTime(),u=Math.floor(s/n)*n,d=Math.floor(Date.now()/n)*n-u;let v=o(u).fromNow(i);return 0===s?v="":d<5e3?v="just now":d<6e4&&(v=Math.floor(d/1e3)+" seconds"+(i?"":" ago")),r.createElement("span",null,v)}},1814:function(e,t,n){"use strict";var o=n(959);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),i=(0,o(n(1815)).default)(r.default.createElement("path",{d:"M6 6h12v12H6z"}),"Stop");t.default=i},1815:function(e,t,n){"use strict";var o=n(959);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=i.default.memo(i.default.forwardRef((function(t,n){return i.default.createElement(a.default,(0,r.default)({ref:n},t),e)})));0;return n.muiName=a.default.muiName,n};var r=o(n(995)),i=o(n(0)),a=o(n(1868))},1868:function(e,t,n){"use strict";n.r(t);var o=n(443),r=n(453),i=n(0),a=n.n(i),l=(n(10),n(460)),c=n(471),s=n(914),u=a.a.forwardRef((function(e,t){var n=e.children,i=e.classes,c=e.className,u=e.color,d=void 0===u?"inherit":u,v=e.component,p=void 0===v?"svg":v,m=e.fontSize,f=void 0===m?"default":m,h=e.htmlColor,g=e.titleAccess,E=e.viewBox,w=void 0===E?"0 0 24 24":E,b=Object(r.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return a.a.createElement(p,Object(o.a)({className:Object(l.default)(i.root,c,"inherit"!==d&&i["color".concat(Object(s.a)(d))],"default"!==f&&i["fontSize".concat(Object(s.a)(f))]),focusable:"false",viewBox:w,color:h,"aria-hidden":g?"false":"true",role:g?"img":"presentation",ref:t},b),n,g?a.a.createElement("title",null,g):null)}));u.muiName="SvgIcon";var d=Object(c.a)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(u);n.d(t,"default",(function(){return d}))},422:function(e,t,n){"use strict";n.r(t);var o=n(33),r=n(1080),i=n(364),a=n(2),l=n(41),c=n(346),s=n(142),u=n(40),d=n(4),v=n(1),p=n.n(v),m=n(1007),f=n(60),h=n(0);const g=36e5;function E(e){return e.filter(e=>!e.eventEnd||function(e){return Date.now()-e.getTime()<=g}(e.eventEnd))}const w=p.a.div`
  position: relative;
`,b=p()(u.a)`
  margin: 8px 0;
`,x=p.a.div`
  position: absolute;
  display: ${e=>0===e.numEvents&&"none"};
  top: 0;
  right: 0;

  background-color: ${e=>e.color};
  padding: 1px 3px;
  border-radius: 6px;
  font-size: 9px;
`;function k({numEvents:e,icon:t}){return h.createElement(w,null,h.createElement(b,{emphasis:"high",icon:"event_finished"===t?"check_circle":"event_running"===t?"update":"auto_awesome_motion"}),h.createElement(x,{numEvents:e,color:a.m},e))}var y=n(343),S=n(489),O=n(3),_=n(345),A=n(429),I=n(108),C=n(1814),T=n.n(C),$=n(1365);const j=p()(i.a)`
  && img {
    border-radius: 50%;
  }
`,N=p()(_.a)`
  z-index: ${e=>e.theme.zindex[1001]};
`,M=p.a.div`
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
  color: ${a.j};
`;function z({userAvatarUrl:e,event:t}){const[n,o]=h.useState(!1);return t.kernelSessionActiveEvent?h.createElement(U,{userAvatarUrl:e,event:t,open:n,setOpen:o}):t.datasetUploadActiveEvent?h.createElement(B,{userAvatarUrl:e,event:t,open:n,setOpen:o}):h.createElement(h.Fragment,null)}const U=({userAvatarUrl:e,event:t,open:n,setOpen:o})=>{const[r,i]=h.useState(0);if(!t.kernelSessionActiveEvent)return null;const a=t.kernelSessionActiveEvent,c=`${"interactive"===a.type?"Interactive Session":`Version #${a.versionNumber}`}${P(a.acceleratorType)}`,s=re(t);h.useEffect(()=>{s&&setTimeout(()=>i(r+1),5e3)},[s]);let v="",p=!1,m=!1,f=!1;switch(a.workerStatus){case"queued":v="Queued",p=!0;break;case"running":v=h.createElement(h.Fragment,null,"Running",t.stepStart&&h.createElement(h.Fragment,null,": ",h.createElement($.a,{interval:6e4,date:t.stepStart,withoutSuffix:!0}))),p=!0;break;case"complete":v="Successful",f=!0,m=!0;break;case"error":v="Failed",f=!0,m=!0;break;case"cancelRequested":v="Cancelling...";break;case"cancelAcknowledged":v="Cancelled",m=!0}const g=()=>Object(O.__awaiter)(void 0,void 0,void 0,(function*(){d.w.report("navigation","active-events-kernel-session-stop-clicked"),d.v.cancelKernelRun({kernelRunId:a.sessionId})})),E=()=>Object(O.__awaiter)(void 0,void 0,void 0,(function*(){d.w.report("navigation","active-events-kernel-session-edit-clicked");const e=yield d.v.getKernelListDetails({kernelIds:[a.kernelId],selection:null,excludeResultsFilesOutputs:!0,wantOutputFiles:!1,deletedAccessBehavior:"returnNothing",maxOutputFilesPerKernel:null,outputFileTypes:[],unauthorizedAccessBehavior:"returnNothing"});e.kernels.length>=1&&e.kernels[0].scriptEditUrl&&(window.location.href=e.kernels[0].scriptEditUrl)})),w=()=>Object(O.__awaiter)(void 0,void 0,void 0,(function*(){d.w.report("navigation","active-events-kernel-session-view-clicked");const e=`/sv/${a.sessionId}`;window.location.href=e})),b=[{icon:"edit",text:"Edit",onClick:E}];p&&b.push({icon:"stop",text:"Stop Session",onClick:g}),f&&b.push({icon:"open_in_new",text:"Open in Viewer",onClick:w}),m&&b.push({icon:"clear",text:"Dismiss",onClick:()=>Object(O.__awaiter)(void 0,void 0,void 0,(function*(){d.w.report("navigation","active-events-kernel-session-remove-clicked"),d.d.activeEventService.deleteActiveEvent({eventId:t.id})}))});let x=e,k=e=>{o(!0),e.stopPropagation()};return"batch"===a.type&&p?x=h.createElement(F,{onClick:g}):"batch"===a.type&&m&&s?(x=h.createElement(u.a,{icon:"check_circle",style:{fontSize:24}}),k=w):"batch"===a.type&&m?(x=h.createElement(u.a,{icon:"open_in_new",style:{fontSize:24}}),k=w):"interactive"===a.type&&(k=E),h.createElement(j,{graphic:x,primaryText:a.title,secondaryText:c,tertiaryText:v,meta:h.createElement(M,null,h.createElement(l.c,{onClick:k},h.createElement($.a,{interval:6e4,date:t.eventStart,withoutSuffix:!0})),h.createElement(L,{open:n,setOpen:o,options:b})),onClick:k})},D=p.a.div`
  position: relative;
`,R=p.a.div`
  position: absolute;
  top: 6px;
  left: 6px;
`,F=e=>{const{onClick:t}=e,n=h.useContext(v.ThemeContext);return h.createElement(D,{role:"button",onClick:e=>{t(),e.stopPropagation()}},h.createElement(A.a,{style:{width:36,height:36,color:v.defaultTheme.material.color.brand.blue[500]}}),h.createElement(R,null,h.createElement(T.a,{style:{fontSize:"24px"},htmlColor:n.material.color.mode[n.name].text.high})))},B=({event:e,open:t,setOpen:n})=>{if(!e.datasetUploadActiveEvent)return null;const o=e.datasetUploadActiveEvent,r=o.title,i="creation"===o.type?"New Dataset":o.versionNotes,a="finished"===o.status?"Successful":"failed"===o.status?o.errorMessage?`Failed - ${o.errorMessage}`:"Failed":o.percentDone>0&&o.percentDone<1?`${V(o.percentDone)} completed`:"Running",c=[{icon:"open_in_new",text:"Go to dataset",onClick:()=>Object(O.__awaiter)(void 0,void 0,void 0,(function*(){d.w.report("navigation","active-events-dataset-upload-view-clicked"),window.location.href=o.url}))}];"failed"!==o.status&&"finished"!==o.status||c.push({icon:"clear",text:"Dismiss",onClick:()=>Object(O.__awaiter)(void 0,void 0,void 0,(function*(){if(d.w.report("navigation","active-events-dataset-upload-remove-clicked"),d.d.activeEventService.deleteActiveEvent({eventId:e.id}),e.groupedEventIds)for(const t of e.groupedEventIds)d.d.activeEventService.deleteActiveEvent({eventId:t})}))});const s=e=>{n(!0),e.stopPropagation()};return h.createElement(j,{graphic:o.thumbnailImage,primaryText:r,secondaryText:i,tertiaryText:a,meta:h.createElement(M,{onClick:s},h.createElement(l.c,null,h.createElement($.a,{interval:6e4,date:e.eventStart,withoutSuffix:!0})),h.createElement(L,{open:t,setOpen:n,options:c})),onClick:s})},P=e=>{switch(e){case"tpu_v3_8":case"tpu_v2_32":case"tpu_v2_256":return" with TPU";case"gpu":return" with GPU";default:return""}},V=e=>`${(100*e).toFixed(0)}%`,L=({open:e,setOpen:t,options:n})=>h.createElement(c.a,null,h.createElement(N,{open:e,onClose:()=>t(!1),hoistToBody:!0,focusOnOpen:!1},n.map(({icon:e,text:t,onClick:n})=>h.createElement(I.a,{key:e,icon:e,onClick:n},t))),h.createElement(u.a,{icon:"more_horiz",emphasis:"high",onClick:e=>{t(!0),e.stopPropagation()}})),G=p.a.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px 60px;

  &:focus {
    outline: none;
  }
`,K=p.a.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`,q=p()(s.a)`
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 0;
`;function J({userAvatarUrl:e,events:t}){return 0===t.length?h.createElement(G,{tabIndex:0},h.createElement(l.n,null,"No Active Events"),h.createElement("br",null),h.createElement(l.b,null,"Create notebooks ",e&&" or datasets"," and keep track of their status here."),h.createElement("br",null),h.createElement(K,null,h.createElement(y.a,{leadingIcon:"add",href:Object(S.b)(),target:"_blank",onClick:()=>d.w.report("navigation","active-events-new-notebook-clicked")},"New Notebook"),e&&h.createElement(y.a,{leadingIcon:"add",href:"/datasets/new",target:"_blank",onClick:()=>d.w.report("navigation","active-events-new-dataset-clicked")},"New Dataset"))):h.createElement(q,{variant:"three-line",type:"icon"},t.map(t=>h.createElement(z,{key:t.id,userAvatarUrl:e,event:t})))}var Q=n(69);n.d(t,"NavigationActiveEvents",(function(){return te})),n.d(t,"hasJustStopped",(function(){return re}));const H=p()(r.a)`
  margin-left: 8px;
  border-radius: 8px;
  z-index: ${e=>e.theme.zindex[1e3]};

  border: 1px solid ${e=>Q.a[e.theme.name].border};

  ${o.j} {
    /* Fill the full screen on mobile. */
    border-radius: 0px;
    border: 0;
    left: 0;
    bottom: 0 !important;
    top: 0;
    right: 0;

    margin-left: 0;

    max-height: 100% !important;
    max-width: 100%;
  }
`,W=p.a.div`
  display: flex;
  flex-flow: column nowrap;

  width: 500px;
  max-height: 350px;

  ${o.j} {
    width: 100%;
    max-height: 100%;
  }
`,X=p()(i.a)`
  flex: 0 0 auto;
  display: flex;
  border-bottom: 1px solid ${e=>Q.a[e.theme.name].separator};
`,Y=p()(i.a)`
  flex: 0 0 auto;
  color: ${e=>e.theme.material.color.mode[e.theme.name].text.low};
  cursor: pointer;
  border-top: 1px solid ${e=>Q.a[e.theme.name].separator};
`,Z=p.a.button`
  border: none;
  display: flex;
  flex-direction: row;
  height: 56px;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${e=>Q.a[e.theme.name].listItem.default.background};
  cursor: ${e=>e.onClick&&"pointer"};

  ${e=>e.theme.font.main.family};
  align-items: center;
  margin-bottom: 8px;

  && {
    height: ${e=>e.theme.material.spacing(10)};
    padding: ${e=>{const t=e.theme.material.spacing;return`${t(2)} 0 ${t(2)} ${t(6)}`}};
  }
  @media (hover: hover) {
    &:hover {
      background-color: ${e=>Q.a[e.theme.name].listItem.hover.background};
    }
  }

  /* stylelint-disable selector-type-no-unknown */
  &:focus:not(focus-visible) {
    outline: 0;
  }

  &:focus-visible {
    box-shadow: inset 0 0 0 3px ${a.p};
  }
`,ee=p()(l.a)`
  padding-left: ${e=>e.theme.material.spacing(5)};
  white-space: nowrap;
`;function te({userAvatarUrl:e,userId:t,settings:n}){var r;const[i,a]=h.useState(null!==(r=null==n?void 0:n.defaultMenuIsOpen)&&void 0!==r&&r),[v,p]=h.useState(new Array),[g,w]=h.useState(0),b=()=>{d.w.report("navigation","active-events-opened"),a(!0),null==n||n.onMenuOpen(!0)},x=()=>{a(!1),null==n||n.onMenuOpen(!1)},y=Object(m.a)(o.j),S=ne(v),O=oe(v);return h.useEffect(()=>(Object(d.B)(e=>{e=function(e){const t=e.sort((e,t)=>e.eventStart&&t.eventStart?t.eventStart.getTime()-e.eventStart.getTime():0),n=new Map;return t.filter(e=>{var t,o;if("interactive"!==(null===(t=e.kernelSessionActiveEvent)||void 0===t?void 0:t.type))return!0;const r=null===(o=e.kernelSessionActiveEvent)||void 0===o?void 0:o.kernelId,i=n.get(r);if(i){const t=i.groupedEventIds||[];return t.push(e.id),i.groupedEventIds=t,!1}return n.set(r,e),!0})}(e=E(e)),p(e)}),()=>{Object(d.i)()}),[t]),h.useEffect(()=>{(null==n?void 0:n.onMenuOpen)&&!0===(null==n?void 0:n.defaultMenuIsOpen)&&!1===i&&b()},[n]),h.useEffect(()=>{"event_finished"===O&&setTimeout(()=>w(g+1),5e3)},[O]),h.createElement(c.a,null,h.createElement(H,{open:i,hoistToBody:!0,focusOnOpen:!0,anchorCorner:"topLeft",onClose:x},h.createElement(W,null,y&&h.createElement(s.a,null,h.createElement(X,{graphic:h.createElement(k,{numEvents:S,icon:O}),primaryText:h.createElement(l.b,{emphasis:"low"},S," Active"," ",f("Event",S)),meta:h.createElement(u.a,{icon:"clear",emphasis:"high",onClick:x}),onClick:x})),h.createElement(J,{userAvatarUrl:e,events:v}),!y&&h.createElement(s.a,null,h.createElement(Y,{graphic:h.createElement(k,{numEvents:S,icon:O}),primaryText:h.createElement(l.b,{emphasis:"low"},S," Active"," ",f("Event",S)),meta:h.createElement(u.a,{icon:"expand_more",emphasis:"high",onClick:x}),onClick:x})))),h.createElement(Z,{onClick:b},h.createElement(k,{numEvents:S,icon:O}),h.createElement(ee,{emphasis:"low"},"View Active Events")))}const ne=e=>e.filter(e=>!e.eventEnd).length,oe=e=>e.some(e=>re(e))?"event_finished":e.some(e=>ie(e))?"event_running":"default",re=e=>{var t,n,o;return void 0!==e.eventEnd&&(new Date).getTime()-e.eventEnd.getTime()<5e3&&("batch"===(null===(t=e.kernelSessionActiveEvent)||void 0===t?void 0:t.type)&&"complete"===(null===(n=e.kernelSessionActiveEvent)||void 0===n?void 0:n.workerStatus)||"finished"===(null===(o=e.datasetUploadActiveEvent)||void 0===o?void 0:o.status))},ie=e=>{var t,n,o;return"batch"===(null===(t=e.kernelSessionActiveEvent)||void 0===t?void 0:t.type)&&("running"===(null===(n=e.kernelSessionActiveEvent)||void 0===n?void 0:n.workerStatus)||"queued"===(null===(o=e.kernelSessionActiveEvent)||void 0===o?void 0:o.workerStatus))}},454:function(e,t,n){"use strict";function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(o=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==l.return||l.return()}finally{if(r)throw i}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return o}))},489:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return u}));var o=n(3),r=n(4);const i=()=>{try{const e=window.localStorage.getItem("KAGGLE_LANGUAGE_ID");if(!e)return"";const t=parseInt(e,10);return isNaN(t)?"":`languageId=${t}`}catch(e){return""}},a=e=>{const t=e.filter(e=>!!e).join("&");return`/code/welcome${t&&`?${t}`}`},l=()=>a([i()]),c=e=>a([i(),`datasetVersionId=${e}`]),s=e=>a([i(),`competitionId=${e}`]),u=e=>Object(o.__awaiter)(void 0,void 0,void 0,(function*(){const t=d(e),n=yield Object(r.s)();n&&!n.isAnonymous||Object(r.z)("kernels","anonymousKernelCreation",{url:t}),window.location.href=t})),d=e=>(null==e?void 0:e.competitionId)?s(e.competitionId):(null==e?void 0:e.datasetVersionId)?c(e.datasetVersionId):(null==e?void 0:e.kernelVersionId)?(e=>a([i(),`scriptVersionId=${e}`]))(e.kernelVersionId):l()},959:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}}}]);
//# sourceMappingURL=100.7feb80d5818e29289def.js.map