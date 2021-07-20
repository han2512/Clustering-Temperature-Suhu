(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{1049:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a,i=n(28);!function(e){e[e.EDIT_PROFILE=0]="EDIT_PROFILE"}(a||(a={}));const r=new i.a},1194:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(3),i=n(4);const r=i.c.Sdk.Users.Protos.HatsLocation,o=i.c.Sdk.Users.Protos.SurveyType,s={"/":r.HOMEPAGE,"/competitions":r.COMPETITIONS,"/datasets":r.DATASETS,"/notebooks":r.NOTEBOOKS,"/code":r.NOTEBOOKS,"/discussion":r.DISCUSSIONS,"/learn":r.COURSES};class l{getHatsLocation(){return s[window.location.pathname]||r.UNSPECIFIED}saveDismissInfo(e,t){return Object(a.__awaiter)(this,void 0,void 0,(function*(){this.getHatsLocation()!==r.UNSPECIFIED&&t!==o.UNSPECIFIED&&(t===o.HATS?yield i.F.hatsService.dismissHats({location:this.getHatsLocation(),userClickedLink:e}):yield i.F.hatsService.dismissSurvey({location:this.getHatsLocation(),userClickedSurvey:e,surveyType:t}))}))}getHatsStatusResponse(){return Object(a.__awaiter)(this,void 0,void 0,(function*(){if(this.getHatsLocation()===r.UNSPECIFIED)return{surveyType:o.UNSPECIFIED};const e=yield i.F.hatsService.getUserHatsStatus({location:this.getHatsLocation()});return e.surveyType=function(e){switch(e){case"hats":return o.HATS;case"dataScienceAndMachineLearningSurvey2020":return o.DATA_SCIENCE_AND_MACHINE_LEARNING_SURVEY_2020;case"googleCloudMlSummit2021":return o.GOOGLE_CLOUD_ML_SUMMIT_2021}return o.UNSPECIFIED}(e.surveyType),e}))}recordAcceptSurvey(e){return this.saveDismissInfo(!0,e)}recordCancelSurvey(e){return this.saveDismissInfo(!1,e)}getSurveyUrl(e){switch(e){case o.DATA_SCIENCE_AND_MACHINE_LEARNING_SURVEY_2020:return"https://google.qualtrics.com/jfe/form/SV_8vuiBypoM1Xuixf";case o.GOOGLE_CLOUD_ML_SUMMIT_2021:return"https://cloudonair.withgoogle.com/events/summit-ml-practitioners?utm_source=cloud_sfdc&utm_medium=website&utm_campaign=FY21-Q2-northam-GEM912-onlineevent-er-gc-ml-practitioners-summit&utm_content=kaggle&utm_term=-";case o.HATS:default:return"https://google.qualtrics.com/jfe/form/SV_bHF40rH3PQDEJpP"}}}},1867:function(e,t,n){"use strict";var a=n(1),i=n.n(a),r=n(0),o=n(51),s=n(41),l=n(2);const c={light:{background:l.t},dark:{background:l.j}};n.d(t,"a",(function(){return h}));const u=i.a.div`
  padding: 24px;
  border-radius: 20px;
  box-shadow: ${e=>e.theme.material.elevation[2]};
  max-width: 438px;
  position: ${e=>e.inline?"relative":"fixed"};
  bottom: 64px;
  right: 64px;
  background-color: ${e=>e.nudgeTheme.background};
  display: flex;
  align-items: center;
  z-index: 10;
`,d=i()(o.a)`
  height: 144px;
  width: 108px;
  object-fit: cover;
  margin-right: 16px;
`,m=i()(s.o)`
  margin-bottom: 8px;
`,p=i()(s.c)`
  margin-bottom: 16px;
`,g=i.a.div`
  display: flex;
  justify-content: flex-end;

  div {
    margin-left: 8px;
  }
`,h=e=>{const{title:t,description:n,inline:i,actions:o,graphic:s}=e,l=r.useContext(a.ThemeContext);return r.createElement(u,{inline:i,nudgeTheme:c[l.name]},r.createElement(d,{graphic:s}),r.createElement("div",null,r.createElement(m,null,t),r.createElement(p,{emphasis:"low"},n),r.createElement(g,null,o)))}},421:function(e,t,n){"use strict";n.r(t);var a=n(3),i=n(727),r=n(114),o=n(4),s=n(0),l=n(343),c=n(103),u=n(1),d=n.n(u);const m="@media (max-width: 450px)",p=o.c.Sdk.Users.Protos.SurveyType,g=d.a.div`
  background: ${e=>e.theme.material.color.white};
  bottom: ${e=>e.theme.material.spacing(5)};
  box-shadow: ${e=>e.theme.material.elevation[4]};
  border-radius: ${e=>e.theme.material.borderRadius.normal};
  display: flex;
  flex-direction: column;
  padding: ${e=>e.theme.material.spacing(6)};
  position: fixed;
  right: ${e=>e.theme.material.spacing(5)};
  width: ${e=>e.theme.material.spacing(70)};
  z-index: ${e=>e.theme.zindex[1e3]};

  ${m} {
    flex-direction: row;
    justify-content: space-between;
    left: ${e=>e.theme.material.spacing(5)};
    padding: ${e=>{const t=e.theme.material.spacing;return`${t(2)} 0 ${t(2)} ${t(4)}`}};
    width: auto;
  }

  /* At extremely small breakpoints, padding is removed to further condense */
  @media (max-width: 350px) {
    border-radius: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`,h=d.a.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  margin-bottom: ${e=>e.theme.material.spacing(5)};

  ${m} {
    margin-bottom: 0;
  }
`,E=d.a.span`
  font-weight: 900;
`,f=d.a.span`
  white-space: nowrap;

  ${m} {
    display: none;
  }
`,v=d.a.span`
  display: none;
  white-space: nowrap;

  ${m} {
    display: inline;
  }
`,y=d.a.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
`,w=d()(l.a)`
  margin-right: ${e=>e.theme.material.spacing(4)};
  white-space: nowrap;

  ${m} {
    display: none;
  }
`,S=d()(c.a)`
  &&& {
    display: none;

    ${m} {
      display: flex;
    }
  }
`,b=d.a.a`
  text-decoration: none;
  color: inherit;
`;function _(e){const{surveyType:t,hatsService:n,onAccept:a,onDismiss:i}=e;return t===p.UNSPECIFIED?null:s.createElement(g,null,t===p.DATA_SCIENCE_AND_MACHINE_LEARNING_SURVEY_2020?s.createElement(h,null,"Take the 2020 Kaggle Machine Learning and Data Science Survey and prepare for the upcoming analytics challenge!"):t===p.GOOGLE_CLOUD_ML_SUMMIT_2021?s.createElement(h,null,s.createElement(E,null,"Register for the Google Cloud Applied ML Summit on June 10th"),s.createElement("br",null),s.createElement("br",null)," Learn how ML teams put models into production at companies like Spotify, Uber, and Google (several Kagglers are speaking!)"):s.createElement(h,null,s.createElement(f,null,"Help us improve Kaggle"),s.createElement(v,null,"Help us improve")),s.createElement(y,null,s.createElement(w,{emphasis:"low",onClick:()=>{n.recordCancelSurvey(t),null==i||i()}},"No thanks"),s.createElement(l.a,{onClick:()=>{n.recordAcceptSurvey(t),null==a||a()}},s.createElement(b,{href:n.getSurveyUrl(t),target:"_blank"},t===p.GOOGLE_CLOUD_ML_SUMMIT_2021?s.createElement(s.Fragment,null,"Sign Up"):s.createElement(s.Fragment,null,s.createElement(f,null,"Take our Survey"),s.createElement(v,null,"Take Survey")))),s.createElement(S,{icon:"close",onClick:()=>{n.recordCancelSurvey(t),null==i||i()}})))}var T=n(1194),N=n(427);const C=o.c.Sdk.Users.Protos.NudgePage,k=o.c.Sdk.Users.Protos.NudgeReactions,x=o.c.Sdk.Users.Protos.NudgeType,O=o.c.Sdk.Users.Protos.SurveyType,I=new N.a,D=N.b.NUDGE_KEY_COMMUNITY_ALL,A=Object(N.d)(),L=N.b.NUDGE_KEY_COMMUNITY_ALL_SEEN,U=()=>(new Date).getTime(),M=e=>t=>Object.values(e).includes(t),R=M(x),P=M(C),$=e=>{const t=JSON.parse(e);if("number"!=typeof t.timestamp)throw new Error("invalid timestamp");if(!Array.isArray(t.nudges))throw new Error("invalid array");const n=t.nudges.map(e=>{if((e=>"object"==typeof e&&R(e.type)&&P(e.page)&&"number"==typeof e.priority&&("number"==typeof e.variant||void 0===e.variant))(e))return e;throw new Error("invalid nudge")});return{timestamp:t.timestamp,nudges:n}},H=()=>{const e=I.read(D);if(null===e)return null;try{const{nudges:t,timestamp:n}=$(e);return U()-n>36e5?null:t}catch(e){return null}},F=e=>{const t=(e=>JSON.stringify({nudges:e.map(e=>({type:e.type,page:e.page,priority:e.priority,variant:e.variant})),timestamp:U()}))(e);I.write(D,t)},G=()=>{return"1"===I.read(L)};var j=n(2),K=n(961),V=n(1867),Y=n(617),B=n(1049);const Z=d()(Y.a)`
  flex-shrink: 0;
  margin-right: 16px;
`,z=d.a.div`
  margin-top: 8px;
  && label {
    justify-content: flex-start;
  }

  && label span {
    color: ${j.i};
    font-size: 12px;
  }
`,J=e=>{const{fileName:t,alt:n}=e;return s.createElement(Z,{src:`/static/images/community/nudges/${t}`,alt:n,width:"108",height:"144"})},W=e=>{const{actText:t,actHref:n,dismissText:a="Dismiss",onAccept:i,onDismiss:r}=e;return s.createElement(s.Fragment,null,s.createElement(l.a,{onClick:r,emphasis:"low"},a),s.createElement(l.a,{onClick:i,href:n,style:{marginLeft:"8px"}},t))},q=e=>{const{text:t,optOutText:n,isOptedOut:a,onToggleOptedOut:i}=e;return s.createElement(s.Fragment,null,s.createElement("p",null,t),s.createElement(z,null,s.createElement(K.a,{checked:a,onChange:i},n)))},Q=e=>{const{nudge:t,variant:n}=e,[i,r]=s.useState(null),[l,c]=s.useState(!1);s.useEffect(()=>{(()=>Object(a.__awaiter)(void 0,void 0,void 0,(function*(){var a;if(void 0!==t){const{userNudgeId:i}=yield o.F.nudgeService.showingNudge({type:t,variant:n});0===i?null===(a=e.onDismiss)||void 0===a||a.call(e):r(i)}})))()},[t]);const u=s.useCallback(()=>{var n;void 0!==t&&null!==i&&(o.F.nudgeService.reactToNudge({nudgeId:i,reaction:k.ACCEPTED,dontShowAgain:l}),o.w.report("general","nudge-followed",{nudgeId:i,nudgeType:t,isOptedOut:l})),null===(n=e.onAccept)||void 0===n||n.call(e)},[e.onAccept,i,l]),d=s.useCallback(()=>{var n;void 0!==t&&null!==i&&(o.F.nudgeService.reactToNudge({nudgeId:i,reaction:k.USER_DISMISSED,dontShowAgain:l}),o.w.report("general","nudge-dismissed",{nudgeId:i,nudgeType:t,isOptedOut:l})),null===(n=e.onDismiss)||void 0===n||n.call(e)},[e.onDismiss,i,l]),m=s.useCallback(()=>{B.a.trigger({type:B.b.EDIT_PROFILE}),u()},[u]),p=s.useCallback(()=>{c(!l)},[l]);if(s.useEffect(()=>{null!==i&&o.w.report("general","nudge-shown",{nudgeId:i,nudgeType:t})},[i,t]),null===i)return null;const g="Don't ask me to sign up for news and tips emails again.",h="Don't ask me to update my profile again.",E=(e,t)=>s.createElement(q,{text:e,optOutText:t,isOptedOut:l,onToggleOptedOut:p});switch(t){case x.INTRODUCE_YOURSELF:return s.createElement(V.a,{title:"Introduce yourself!",description:E("Help the community learn more about you. \n              It will only take a minute or two to complete your Kaggle profile.",h),graphic:s.createElement(J,{fileName:"employer_nudge_complete.png",alt:"Introduce yourself!"}),actions:s.createElement(W,{actText:"Edit Profile",onAccept:m,onDismiss:d})});case x.PROMOTED:return s.createElement(V.a,{title:"Look good in rankings",description:E("You've reached an impressive level,\n          but your details are incomplete. \n          Take two minutes to optimize your profile.",h),graphic:s.createElement(J,{fileName:"employer_nudge_update.png",alt:"Look good in rankings"}),actions:s.createElement(W,{actText:"Edit Profile",onAccept:m,onDismiss:d})});case x.STILL_WORK_AT:return s.createElement(V.a,{title:"Dust off your profile",description:E("You've been on Kaggle over two years!\n          Take a minute or two to make sure your profile is updated.",h),graphic:s.createElement(J,{fileName:"employer_nudge_update.png",alt:"Dust off your profile"}),actions:s.createElement(W,{actText:"Edit Profile",onAccept:m,onDismiss:d})});case x.GETTING_NOTICED:return s.createElement(V.a,{title:"You’re getting noticed!",description:E("The community has discovered your profile.\n          Complete your Kaggle profile to tell them about yourself.",h),graphic:s.createElement(J,{fileName:"employer_nudge_complete.png",alt:"You’re getting noticed!"}),actions:s.createElement(W,{actText:"Edit Profile",onAccept:m,onDismiss:d})});case x.COMPETITION_EMAIL:return s.createElement(V.a,{title:"Stay up to date with Kaggle Competitions",description:E("Subscribe to news and tips emails to hear about new\n          competitions and learn from Kaggle grandmaster workshops\n          and tutorials.",g),graphic:s.createElement(J,{fileName:"email_nudge.png",alt:"Stay up to date with Kaggle Competitions"}),actions:s.createElement(W,{actText:"Sign Up",onAccept:u,onDismiss:d})});case x.BRAND_NEW:return s.createElement(V.a,{title:"Don't miss a new competition or ML Course",description:E("Subscribe to news and tips emails to hear about\n          new ML competitions and courses from Kaggle.",g),graphic:s.createElement(J,{fileName:"email_nudge.png",alt:"Don't miss a new competition or ML Course"}),actions:s.createElement(W,{actText:"Sign Up",onAccept:u,onDismiss:d})});case x.DATASET_GRAB_AND_GO:return s.createElement(V.a,{title:"Discover more datasets",description:E("Subscribe to news and tips emails to learn about\n          trending datasets, Kaggle news, and updates",g),graphic:s.createElement(J,{fileName:"email_nudge.png",alt:"Discover more datasets"}),actions:s.createElement(W,{actText:"Sign Up",onAccept:u,onDismiss:d})});case x.NEWLY_RETURNED:return s.createElement(V.a,{title:"Stay up to date with ML",description:E("Subscribe to news and tips emails to learn about\n          newly released ML courses, Kaggle news, and updates.",g),graphic:s.createElement(J,{fileName:"email_nudge.png",alt:"Stay up to date with ML"}),actions:s.createElement(W,{actText:"Sign Up",onAccept:u,onDismiss:d})});default:return null}};n.d(t,"hatsService",(function(){return ee})),n.d(t,"CommunityNudges",(function(){return ne}));const X=new Set(["/competitions","/datasets","/code","/discussion","/learn",""]),ee=new T.a,te=(e,t,n)=>{var a;let r=(t=((e,t)=>t.filter(t=>{let n=window.location.pathname;switch(n=n.replace(/\/$/,""),t.page){case C.ANY:return!0;case C.COMPETITIONS:return"CompetitionsApp"===e||"CompetitionContainer"===e;case C.PROFILE:return"ProfileContainerReact"===e&&n===Object(i.a)().profileUrl;case C.LANDING:return X.has(n);default:return!1}}))(e,t)).map(e=>[e.priority,{type:"nudge",message:e.type,variant:e.variant||void 0}]);return n!==O.UNSPECIFIED&&r.push([5,{type:"hats",message:n}]),r.sort((e,t)=>t[0]-e[0]),r.length>0&&"nudge"===(null===(a=r[0][1])||void 0===a?void 0:a.type)&&o.w.report("general","nudge-would-show",{nudgeType:r[0][1].message}),r=r.filter(([e,t])=>"nudge"!==t.type||(e=>{switch(e){case x.INTRODUCE_YOURSELF:case x.GETTING_NOTICED:case x.PROMOTED:case x.STILL_WORK_AT:return o.q.employerNudges;case x.COMPETITION_EMAIL:case x.BRAND_NEW:case x.DATASET_GRAB_AND_GO:case x.NEWLY_RETURNED:return o.q.emailNudges;default:return!1}})(t.message)),0===r.length?null:r[0][1]},ne=e=>{const[t,n]=s.useState(Object(r.a)().pageType),[l,c]=s.useState(null),[u,d]=s.useState(H),[m,p]=s.useState(null),[g,h]=s.useState(G);s.useEffect(()=>{const e=null!==Object(i.b)();e&&null===u&&!g?(()=>Object(a.__awaiter)(void 0,void 0,void 0,(function*(){const e=(yield o.F.nudgeService.checkForNudge({})).potentialNudges;if(null!==e){try{F(e)}catch(e){}d(e)}})))():e||null!==u||d([])},[u,g]),s.useEffect(()=>{g||(()=>Object(a.__awaiter)(void 0,void 0,void 0,(function*(){const e=yield ee.getHatsStatusResponse();p(e.surveyType)})))()},[g]),s.useEffect(()=>{return Object(r.c)(e=>{n(e.pageType)})},[]),s.useEffect(()=>{if(null!==t&&null!==u&&null!==m){const e=te(t,u,m);if(null!==e)try{I.write(L,"1")}catch(e){d([])}c(e)}},[t,u,m]);const E=s.useCallback(()=>{h(!0)},[]);return g||null===l?null:"nudge"===l.type&&A?s.createElement(Q,{nudge:l.message,variant:l.variant,onAccept:E,onDismiss:E}):"hats"===l.type?s.createElement(_,{surveyType:l.message,hatsService:ee,onAccept:E,onDismiss:E}):null}},617:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(3),i=n(0);const r=i.memo(e=>{const{src:t}=e,n=Object(a.__rest)(e,["src"]),r=t.lastIndexOf("."),o=t.substr(0,r),s=t.substr(r+1),l=`${o}.${s}, ${o}@2x.${s} 2x`,c=Object.assign(Object.assign({},n),{src:t,srcSet:l});return i.createElement("img",Object.assign({},c))})},727:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return s}));const a=()=>{var e,t,n,a,i,r,o,s,l,c;const u=(()=>{const e=window;return e&&e.Kaggle&&e.Kaggle.Current?e.Kaggle.Current:{}})();return{id:null!==(e=u.userId)&&void 0!==e?e:null,isAdmin:null!==(t=u.isAdmin)&&void 0!==t&&t,isAnonymous:null===(n=u.isAnonymous)||void 0===n||n,userName:null!==(a=u.userName)&&void 0!==a?a:null,displayName:null!==(i=u.userDisplayNameEscaped)&&void 0!==i?i:null,email:null!==(r=u.userEmail)&&void 0!==r?r:null,isPhoneVerified:null!==(o=u.userIsPhoneVerified)&&void 0!==o&&o,profileUrl:null!==(s=u.userProfileUrl)&&void 0!==s?s:null,tier:(null!==(l=u.tier)&&void 0!==l?l:"recalc").toLowerCase(),thumbnailUrl:null!==(c=u.userThumbnailUrl)&&void 0!==c?c:null}},i=()=>a().id,r=()=>a().isAdmin,o=()=>a().isAnonymous,s=()=>a().userName},961:function(e,t,n){"use strict";var a=n(1),i=n.n(a),r=n(0),o=n(2),s=n(41);const l={light:{disabled:o.e,unchecked:o.h,checked:o.n},dark:{disabled:o.h,unchecked:o.e,checked:o.t}};n.d(t,"a",(function(){return m}));const c=i.a.label`
  display: flex;
  position: relative;
  height: fit-content;
  cursor: ${e=>e.disabled?"initial":"pointer"};
`,u=i.a.input`
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
`,d=i()(s.r)`
  ${e=>e.disabled&&`color: ${o.e};`}
  margin-left: 8px;
`,m=e=>{const{onChange:t,onClick:n,checked:i,children:o,className:s,disabled:m,indeterminate:p,label:g,title:h,value:E,name:f}=e,v=r.useContext(a.ThemeContext),y=l[v.name],w=r.useRef(null);return r.useEffect(()=>{const e=w.current;e&&(e.indeterminate=p||!1)},[p]),r.createElement(c,{disabled:!!m},r.createElement(u,{id:"kaggleCheckbox",type:"checkbox",checked:i,className:s,disabled:m,onChange:t,onClick:n,value:E||"true",title:h,name:f,checkboxTheme:y,tabIndex:0,ref:w}),r.createElement("span",{style:{height:"fit-content"}},r.createElement("svg",{className:"checked",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{className:"path",fillRule:"evenodd",clipRule:"evenodd",d:"M2 0H16C17.1 0 18 0.9 18 2V16C18 17.1 17.1 18 16 18H2C0.9 18 0 17.1 0 16V2C0 0.9 0.9 0 2 0ZM13.6 4.6L15 6L7 14L3 10L4.4 8.6L7 11.2L13.6 4.6Z",fill:"#202124"})),r.createElement("svg",{className:"unchecked",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{className:"path",fillRule:"evenodd",clipRule:"evenodd",d:"M2 0H16C17.1 0 18 0.9 18 2V16C18 17.1 17.1 18 16 18H2C0.9 18 0 17.1 0 16V2C0 0.9 0.9 0 2 0ZM16 16V2H2V16H16Z",fill:"#80868B"})),r.createElement("svg",{className:"indeterminate",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{className:"path",fillRule:"evenodd",clipRule:"evenodd",d:"M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 2V16H2V2H16ZM4 10H14V8H4V10Z",fill:"#80868B"}))),(g||o)&&r.createElement(d,{disabled:m},g||o))}}}]);
//# sourceMappingURL=101.50491fd01f477b9b81cf.js.map