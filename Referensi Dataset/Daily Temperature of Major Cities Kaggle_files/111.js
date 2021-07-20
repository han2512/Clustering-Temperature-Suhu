(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{1901:function(e,n,t){"use strict";t.r(n),t.d(n,"NavigationOverlayBar",(function(){return p}));var a=t(33),r=t(336),i=t(4),o=t(1),c=t.n(o),s=t(0),l=t(132),d=t(69),u=t(46),m=t(135),v=t(131);const f=c.a.div`
  background: ${e=>d.a[e.theme.name].surface.background};
  overflow: hidden;
  width: ${a.f}px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: ${e=>e.theme.zindex[1e3]};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.28);
  transition: transform ${a.a}ms cubic-bezier(0, 0, 0.2, 1);
  /* -105% offset to account for box shadow. */
  transform: ${e=>e.isOpen?"translateX(0)":"translateX(-105%)"};

  ${a.e} {
    display: none;
  }
`,b=c.a.div`
  display: flex;
  align-items: center;
  height: ${a.l}px;
  box-sizing: border-box;
`;function p({innerRef:e,navigationService:n,isOpen:t,userAvatarUrl:a,userId:o,recentlyViewed:c,onActivateSearch:d,onHamburgerClick:p}){return s.createElement(f,{ref:e,isOpen:t},s.createElement(b,null,s.createElement(u.a,{navigationService:n,onHamburgerClick:p})),s.createElement(m.a,{navigationService:n,onActivateSearch:d}),s.createElement(v.a,{items:c}),i.q.activeEvents&&s.createElement(s.Fragment,null,s.createElement(r.a,null),s.createElement(l.a,{userAvatarUrl:a,userId:o})))}}}]);
//# sourceMappingURL=111.56e07c7bc4acf7323363.js.map