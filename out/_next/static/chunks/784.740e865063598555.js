"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[784],{5784:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var o,l,a=t(7437),i=t(2265),r=t(4887),c=function(n,e){return(c=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])})(n,e)};function s(n,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function t(){this.constructor=n}c(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}var d=function(){return(d=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var l in e=arguments[t])Object.prototype.hasOwnProperty.call(e,l)&&(n[l]=e[l]);return n}).apply(this,arguments)};function p(n){return"#"===n.charAt(0)?n.slice(1):n}"function"==typeof SuppressedError&&SuppressedError,function(n,e){void 0===e&&(e={});var t=e.insertAt;if(n&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===t&&o.firstChild?o.insertBefore(l,o.firstChild):o.appendChild(l),l.styleSheet?l.styleSheet.cssText=n:l.appendChild(document.createTextNode(n))}}("/*\n  code is extracted from Calendly's embed stylesheet: https://assets.calendly.com/assets/external/widget.css\n*/\n\n.calendly-inline-widget,\n.calendly-inline-widget *,\n.calendly-badge-widget,\n.calendly-badge-widget *,\n.calendly-overlay,\n.calendly-overlay * {\n    font-size:16px;\n    line-height:1.2em\n}\n\n.calendly-inline-widget iframe,\n.calendly-badge-widget iframe,\n.calendly-overlay iframe {\n    display:inline;\n    width:100%;\n    height:100%\n}\n\n.calendly-popup-content {\n    position:relative\n}\n\n.calendly-popup-content.calendly-mobile {\n    -webkit-overflow-scrolling:touch;\n    overflow-y:auto\n}\n\n.calendly-overlay {\n    position:fixed;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0;\n    overflow:hidden;\n    z-index:9999;\n    background-color:#a5a5a5;\n    background-color:rgba(31,31,31,0.4)\n}\n\n.calendly-overlay .calendly-close-overlay {\n    position:absolute;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0\n}\n\n.calendly-overlay .calendly-popup {\n    box-sizing:border-box;\n    position:absolute;\n    top:50%;\n    left:50%;\n    -webkit-transform:translateY(-50%) translateX(-50%);\n    transform:translateY(-50%) translateX(-50%);\n    width:80%;\n    min-width:900px;\n    max-width:1000px;\n    height:90%;\n    max-height:680px\n}\n\n@media (max-width: 975px) {\n    .calendly-overlay .calendly-popup {\n        position:fixed;\n        top:50px;\n        left:0;\n        right:0;\n        bottom:0;\n        -webkit-transform:none;\n        transform:none;\n        width:100%;\n        height:auto;\n        min-width:0;\n        max-height:none\n    }\n}\n\n.calendly-overlay .calendly-popup .calendly-popup-content {\n    height:100%;\n}\n\n.calendly-overlay .calendly-popup-close {\n    position:absolute;\n    top:25px;\n    right:25px;\n    color:#fff;\n    width:19px;\n    height:19px;\n    cursor:pointer;\n    background:url(https://assets.calendly.com/assets/external/close-icon.svg) no-repeat;\n    background-size:contain\n}\n\n@media (max-width: 975px) {\n    .calendly-overlay .calendly-popup-close {\n        top:15px;\n        right:15px\n    }\n}\n\n.calendly-badge-widget {\n    position:fixed;\n    right:20px;\n    bottom:15px;\n    z-index:9998\n}\n\n.calendly-badge-widget .calendly-badge-content {\n    display:table-cell;\n    width:auto;\n    height:45px;\n    padding:0 30px;\n    border-radius:25px;\n    box-shadow:rgba(0,0,0,0.25) 0 2px 5px;\n    font-family:sans-serif;\n    text-align:center;\n    vertical-align:middle;\n    font-weight:bold;\n    font-size:14px;\n    color:#fff;\n    cursor:pointer\n}\n\n.calendly-badge-widget .calendly-badge-content.calendly-white {\n    color:#666a73\n}\n\n.calendly-badge-widget .calendly-badge-content span {\n    display:block;\n    font-size:12px\n}\n\n.calendly-spinner {\n    position:absolute;\n    top:50%;\n    left:0;\n    right:0;\n    -webkit-transform:translateY(-50%);\n    transform:translateY(-50%);\n    text-align:center;\n    z-index:-1\n}\n\n.calendly-spinner>div {\n    display:inline-block;\n    width:18px;\n    height:18px;\n    background-color:#e1e1e1;\n    border-radius:50%;\n    vertical-align:middle;\n    -webkit-animation:calendly-bouncedelay 1.4s infinite ease-in-out;\n    animation:calendly-bouncedelay 1.4s infinite ease-in-out;\n    -webkit-animation-fill-mode:both;\n    animation-fill-mode:both\n}\n\n.calendly-spinner .calendly-bounce1 {\n    -webkit-animation-delay:-0.32s;\n    animation-delay:-0.32s\n}\n\n.calendly-spinner .calendly-bounce2 {\n    -webkit-animation-delay:-0.16s;\n    animation-delay:-0.16s\n}\n\n@-webkit-keyframes calendly-bouncedelay {\n    0%,80%,100% {\n        -webkit-transform:scale(0);\n        transform:scale(0)\n    } \n    \n    40%{\n        -webkit-transform:scale(1);\n        transform:scale(1)\n    }\n}\n\n@keyframes calendly-bouncedelay{ \n    0%,80%,100% {\n        -webkit-transform:scale(0);\n        transform:scale(0)\n    }\n    \n    40% {\n        -webkit-transform:scale(1);\n        transform:scale(1)\n    }\n}"),(o=l||(l={})).PROFILE_PAGE_VIEWED="calendly.profile_page_viewed",o.EVENT_TYPE_VIEWED="calendly.event_type_viewed",o.DATE_AND_TIME_SELECTED="calendly.date_and_time_selected",o.EVENT_SCHEDULED="calendly.event_scheduled",o.PAGE_HEIGHT="calendly.page_height";var u=function(n){var e,t=n.url,o=n.prefill,l=void 0===o?{}:o,a=n.pageSettings,i=n.utm,r=void 0===i?{}:i,c=n.embedType,s=((null==(e=void 0===a?{}:a)?void 0:e.primaryColor)&&(e.primaryColor=p(e.primaryColor)),(null==e?void 0:e.textColor)&&(e.textColor=p(e.textColor)),(null==e?void 0:e.backgroundColor)&&(e.backgroundColor=p(e.backgroundColor)),e),d=s.backgroundColor,u=s.hideEventTypeDetails,y=s.hideLandingPageDetails,f=s.primaryColor,g=s.textColor,b=s.hideGdprBanner,C=l.customAnswers,v=l.date,x=l.email,w=l.firstName,E=l.guests,_=l.lastName,k=l.location,N=l.smsReminderNumber,S=l.name,L=r.utmCampaign,I=r.utmContent,O=r.utmMedium,T=r.utmSource,R=r.utmTerm,U=r.salesforce_uuid,j=t.indexOf("?"),P=j>-1,D=t.slice(j+1),A=P?t.slice(0,j):t,z=[P?D:null,d?"background_color=".concat(d):null,u?"hide_event_type_details=1":null,y?"hide_landing_page_details=1":null,f?"primary_color=".concat(f):null,g?"text_color=".concat(g):null,b?"hide_gdpr_banner=1":null,S?"name=".concat(encodeURIComponent(S)):null,N?"phone_number=".concat(encodeURIComponent(N)):null,k?"location=".concat(encodeURIComponent(k)):null,w?"first_name=".concat(encodeURIComponent(w)):null,_?"last_name=".concat(encodeURIComponent(_)):null,E?"guests=".concat(E.map(encodeURIComponent).join(",")):null,x?"email=".concat(encodeURIComponent(x)):null,v&&v instanceof Date?"date=".concat(m(v)):null,L?"utm_campaign=".concat(encodeURIComponent(L)):null,I?"utm_content=".concat(encodeURIComponent(I)):null,O?"utm_medium=".concat(encodeURIComponent(O)):null,T?"utm_source=".concat(encodeURIComponent(T)):null,R?"utm_term=".concat(encodeURIComponent(R)):null,U?"salesforce_uuid=".concat(encodeURIComponent(U)):null,c?"embed_type=".concat(c):null,"embed_domain=1"].concat(C?h(C):[]).filter(function(n){return null!==n}).join("&");return"".concat(A,"?").concat(z)},m=function(n){var e=n.getMonth()+1,t=n.getDate();return[n.getFullYear(),e<10?"0".concat(e):e,t<10?"0".concat(t):t].join("-")},y=/^a\d{1,2}$/,h=function(n){var e=Object.keys(n).filter(function(n){return n.match(y)});return e.length?e.map(function(e){return"".concat(e,"=").concat(encodeURIComponent(n[e]))}):[]},f=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return s(e,n),e.prototype.render=function(){return i.createElement("div",{className:"calendly-spinner"},i.createElement("div",{className:"calendly-bounce1"}),i.createElement("div",{className:"calendly-bounce2"}),i.createElement("div",{className:"calendly-bounce3"}))},e}(i.Component),g={minWidth:"320px",height:"630px"},b=function(n){function e(e){var t=n.call(this,e)||this;return t.state={isLoading:!0},t.onLoad=t.onLoad.bind(t),t}return s(e,n),e.prototype.onLoad=function(){this.setState({isLoading:!1})},e.prototype.render=function(){var n=u({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"}),e=this.props.LoadingSpinner||f;return i.createElement("div",{className:"calendly-inline-widget",style:this.props.styles||g},this.state.isLoading&&i.createElement(e,null),i.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:n}))},e}(i.Component),C=function(n){function e(e){var t=n.call(this,e)||this;return t.state={isLoading:!0},t.onLoad=t.onLoad.bind(t),t}return s(e,n),e.prototype.onLoad=function(){this.setState({isLoading:!1})},e.prototype.render=function(){var n=u({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"}),e=this.props.LoadingSpinner||f;return i.createElement(i.Fragment,null,this.state.isLoading&&i.createElement(e,null),i.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:n}))},e}(i.Component),v=function(n){if(!n.open)return null;if(!n.rootElement)throw Error("[react-calendly]: PopupModal rootElement property cannot be undefined");return r.createPortal(i.createElement("div",{className:"calendly-overlay"},i.createElement("div",{onClick:n.onModalClose,className:"calendly-close-overlay"}),i.createElement("div",{className:"calendly-popup"},i.createElement("div",{className:"calendly-popup-content"},i.createElement(C,d({},n)))),i.createElement("button",{className:"calendly-popup-close",onClick:n.onModalClose,"aria-label":"Close modal",style:{display:"block",border:"none",padding:0}})),n.rootElement)};!function(n){function e(e){var t=n.call(this,e)||this;return t.state={isOpen:!1},t.onClick=t.onClick.bind(t),t.onClose=t.onClose.bind(t),t}s(e,n),e.prototype.onClick=function(n){n.preventDefault(),this.setState({isOpen:!0})},e.prototype.onClose=function(n){n.stopPropagation(),this.setState({isOpen:!1})},e.prototype.render=function(){return i.createElement(i.Fragment,null,i.createElement("button",{onClick:this.onClick,style:this.props.styles||{},className:this.props.className||""},this.props.text),i.createElement(v,d({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))}}(i.Component),function(n){function e(e){var t=n.call(this,e)||this;return t.state={isOpen:!1},t.onClick=t.onClick.bind(t),t.onClose=t.onClose.bind(t),t}s(e,n),e.prototype.onClick=function(){this.setState({isOpen:!0})},e.prototype.onClose=function(n){n.stopPropagation(),this.setState({isOpen:!1})},e.prototype.render=function(){return i.createElement("div",{className:"calendly-badge-widget",onClick:this.onClick},i.createElement("div",{className:"calendly-badge-content",style:{background:this.props.color||"#00a2ff",color:this.props.textColor||"#ffffff"}},this.props.text||"Schedule time with me",this.props.branding&&i.createElement("span",null,"powered by Calendly")),i.createElement(v,d({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))}}(i.Component);var x=()=>(0,a.jsxs)(a.Fragment,{children:["Want to work with me? Reach out via email or Book a meeting! ",(0,a.jsx)("br",{}),(0,a.jsx)("a",{href:"mailto:fuyuki325@gmail.com",className:"text-blue-400 hover:underline",children:"fuyuki325@gmail.com"}),(0,a.jsx)("div",{className:"Apppy-6 font-primary",children:(0,a.jsx)(b,{url:"https://calendly.com/fuyuki325/30min"})})]})}}]);