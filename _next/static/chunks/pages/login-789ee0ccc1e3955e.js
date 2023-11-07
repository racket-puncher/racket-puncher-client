(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{5314:function(o,t,i){"use strict";i.d(t,{Z:function(){return ModalBox}}),i(7294);var r=i(1150),s=i(5360),l=i(6575),d=i(8381),p=i(8633),f=i(5893);function ModalBox(o){var handleCancel=function(){o.toggleModal(),o.onCancel()};return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(h,{closeIcon:!1,title:(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(g,{children:(0,f.jsxs)("div",{className:"align-box",children:[o.title&&(0,f.jsx)("p",{children:o.title}),(0,f.jsx)(d.F,{width:"34px",height:"34px",onClick:handleCancel,children:(0,f.jsx)("img",{src:"/images/close-icon.png",alt:"close"})})]})})}),open:o.isOpen,onOk:function(){o.toggleModal(),o.onOk()},onCancel:handleCancel,centered:!0,maskClosable:!1,footer:o.footerButtons||[],children:o.children})})}var h=(0,r.ZP)(l.Z).withConfig({displayName:"modal__CustomModal",componentId:"sc-1k3hgdt-0"})(["width:"," !important;div.ant-modal-content{border-radius:20px !important;box-shadow:0 0 20px 0 rgba(0,0,0,0.15) !important;padding:20px !important;div.ant-modal-header{padding:20px 0;}}"],(0,s.hO)("580px")),g=r.ZP.div.withConfig({displayName:"modal__CustomHeaderBox",componentId:"sc-1k3hgdt-1"})(["div.align-box{position:relative;p{font-size:",";font-family:Pretendard-Medium;color:",";text-align:center;}div.box__ImageBox-sc-e7xchd-0{position:absolute;top:50%;transform:translateY(-50%);right:0;cursor:pointer;-webkit-tap-highlight-color:transparent !important;}}"],p.hQ,p.SK)},9234:function(o,t,i){"use strict";i.r(t),i.d(t,{default:function(){return Login}});var r=i(9499),s=i(7294),l=i(1150),d=i(7632),p=i(7536),f=i(6310),h=i(7533),n=function(o,t){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(o,t){o.__proto__=t}||function(o,t){for(var i in t)t.hasOwnProperty(i)&&(o[i]=t[i])})(o,t)},g={display:"inline-block",padding:"0px",width:"222px",height:"49px",lineHeight:"49px",color:"rgb(60, 30, 30)",backgroundColor:"rgb(255, 235, 0)",border:"1px solid transparent",borderRadius:"3px",fontSize:"16px",textAlign:"center"},m=function(o){function a(){var t=null!==o&&o.apply(this,arguments)||this;return t.state={isLoggedIn:!1},t.onButtonClick=function(){var o,i=t.props,r=i.throughTalk,s=i.persistAccessToken,l=i.needProfile,d=void 0===l||l,p=i.useLoginForm,f=i.onSuccess,h=i.onFail;(null===(o=window.Kakao)||void 0===o?void 0:o.Auth)[void 0!==p&&p?"loginForm":"login"]({throughTalk:void 0===r||r,persistAccessToken:void 0===s||s,success:function(o){var i;t.setState({isLoggedIn:!0}),d?null===(i=window.Kakao)||void 0===i||i.API.request({url:"/v2/user/me",success:function(t){f({response:o,profile:t})},fail:h}):f({response:o})},fail:h})},t.onLogout=function(){var o;null===(o=window.Kakao)||void 0===o||o.Auth.logout(function(){var o,i,r;null===(i=(o=t.props).onLogout)||void 0===i||i.call(o,null===(r=window.Kakao)||void 0===r?void 0:r.Auth.getAccessToken()),t.setState({isLoggedIn:!1})})},t}return function(o,t){function e(){this.constructor=o}n(o,t),o.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}(a,o),a.prototype.componentDidMount=function(){var o,t,i,r;return o=this,t=void 0,i=void 0,r=function(){return function(o,t){var i,r,s,l,d={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return l={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function u(l){return function(p){return function(l){if(i)throw TypeError("Generator is already executing.");for(;d;)try{if(i=1,r&&(s=2&l[0]?r.return:l[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,l[1])).done)return s;switch(r=0,s&&(l=[2&l[0],s.value]),l[0]){case 0:case 1:s=l;break;case 4:return d.label++,{value:l[1],done:!1};case 5:d.label++,r=l[1],l=[0];continue;case 7:l=d.ops.pop(),d.trys.pop();continue;default:if(!(s=(s=d.trys).length>0&&s[s.length-1])&&(6===l[0]||2===l[0])){d=0;continue}if(3===l[0]&&(!s||l[1]>s[0]&&l[1]<s[3])){d.label=l[1];break}if(6===l[0]&&d.label<s[1]){d.label=s[1],s=l;break}if(s&&d.label<s[2]){d.label=s[2],d.ops.push(l);break}s[2]&&d.ops.pop(),d.trys.pop();continue}l=t.call(o,d)}catch(o){l=[6,o],r=0}finally{i=s=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,p])}}}(this,function(o){switch(o.label){case 0:return[4,new Promise(function(o,t){var i=document.createElement("script");i.id="kakao-sdk",i.src="//developers.kakao.com/sdk/js/kakao.min.js",i.onload=o,document.body.append(i)})];case 1:return o.sent(),window.Kakao.init(this.props.token),[2]}})},new(i||(i=Promise))(function(s,l){function a(o){try{c(r.next(o))}catch(o){l(o)}}function u(o){try{c(r.throw(o))}catch(o){l(o)}}function c(o){var t;o.done?s(o.value):((t=o.value)instanceof i?t:new i(function(o){o(t)})).then(a,u)}c((r=r.apply(o,t||[])).next())})},a.prototype.render=function(){var o=this.state.isLoggedIn?this.onLogout:this.onButtonClick,t=this.props,i=t.render,r=t.className,l=t.style,d=void 0===l?g:l,p=t.children,f=void 0===p?"카카오로 로그인하기":p;return"function"==typeof i?i({onClick:o}):s.createElement("button",{type:"button",className:void 0===r?"":r,onClick:o,style:d},f)},a.DEFAULT_STYLE=g,a}(s.PureComponent),x=i(7396),y=i(8381),v=i(8633),b=i(2268),w=i(528),j=i(5314),_=i(9630),k=i(7820),C=i(5893);function ownKeys(o,t){var i=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable})),i.push.apply(i,r)}return i}function _objectSpread(o){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(i),!0).forEach(function(t){(0,r.Z)(o,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):ownKeys(Object(i)).forEach(function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(i,t))})}return o}var P=f.Ry().shape({email:f.Z_().required("이메일은 필수입니다.").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"이메일 형식이 올바르지 않습니다."),password:f.Z_().required("비밀번호는 필수입니다.").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,"비밀번호는 8자 이상, 숫자/소문자/대문자/특수문자를 각 최소 하나씩 포함해야 합니다.")});function Login(){var o,t,i=(0,b.Z)().movePage,r=(0,p.cI)({resolver:(0,h.X)(P)}),l=r.register,f=r.handleSubmit,g=r.formState.errors,v=(0,s.useState)(!1),L=v[0],A=v[1],toggleModal=function(){A(function(o){return!o})};return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)(O,{children:[(0,C.jsx)(w.B,{children:"로그인"}),(0,C.jsxs)(I,{children:[(0,C.jsxs)(_.W,{children:[(0,C.jsx)("label",{htmlFor:"loginEmail",children:"이메일"}),(0,C.jsx)("input",_objectSpread({id:"loginEmail"},l("email"))),(0,C.jsx)(k.x,{children:null===(o=g.email)||void 0===o?void 0:o.message})]}),(0,C.jsxs)(_.W,{children:[(0,C.jsx)("label",{htmlFor:"loginPwd",children:"비밀번호"}),(0,C.jsx)("input",_objectSpread({id:"loginPwd",type:"password"},l("password"))),(0,C.jsx)(k.x,{children:null===(t=g.password)||void 0===t?void 0:t.message})]})]}),(0,C.jsxs)(N,{children:[(0,C.jsx)(S,{onClick:function(){return i("/findId")},children:"아이디찾기"}),(0,C.jsx)(S,{onClick:function(){return i("/findPwd")},children:"비밀번호 찾기"})]}),(0,C.jsxs)(z,{children:[(0,C.jsx)(Z,{children:(0,C.jsx)(x.h$,{colorstyle:"is-black",onClick:f(function(o){console.log(o)}),children:"로그인"})}),(0,C.jsx)(Z,{children:(0,C.jsx)(m,{token:"20bd45f114aff9ec8fee730fe2453f5c",onSuccess:function(o){console.log(o),o.response.accessToken,i("/main")},onFail:console.error,onLogout:console.info,render:function(o){var t=o.onClick;return(0,C.jsx)(x.h$,{colorstyle:"is-yellow",onClick:function(o){o.preventDefault(),t()},children:(0,C.jsxs)("div",{className:"align-box",children:[(0,C.jsx)(y.F,{width:"15px",height:"14px",children:(0,C.jsx)("img",{src:"/images/kakao-icon.png",alt:"kakao-icon"})}),(0,C.jsx)("p",{children:"카카오 로그인"})]})})}})})]}),(0,C.jsxs)(B,{children:[(0,C.jsx)("p",{children:"아이디가 없으신가요?"}),(0,C.jsx)(S,{onClick:function(){return i("/register")},children:"회원가입하기"})]}),(0,C.jsx)(j.Z,{title:"test",isOpen:L,toggleModal:toggleModal,onOk:function(){console.log("확인")},onCancel:function(){console.log("취소")},footerButtons:[(0,C.jsx)("button",{onClick:toggleModal,children:"확인"},(0,d.Z)())],children:(0,C.jsx)("p",{children:"모달 테스트"})})]})})}var O=l.ZP.div.withConfig({displayName:"login__LoginViewContainer",componentId:"sc-1jxzze8-0"})(["margin-top:50px;"]),I=l.ZP.div.withConfig({displayName:"login__InputContainer",componentId:"sc-1jxzze8-1"})(["margin-top:50px;"]),z=l.ZP.div.withConfig({displayName:"login__ButtonContainer",componentId:"sc-1jxzze8-2"})(["margin-top:40px;"]),Z=l.ZP.div.withConfig({displayName:"login__ButtonBox",componentId:"sc-1jxzze8-3"})(["margin-bottom:20px;"]),N=l.ZP.div.withConfig({displayName:"login__UnderLineBox",componentId:"sc-1jxzze8-4"})(["display:flex;gap:15px;justify-content:flex-end;"]),S=l.ZP.p.withConfig({displayName:"login__UnderLineTexts",componentId:"sc-1jxzze8-5"})(["text-decoration:underline;color:",";cursor:pointer;"],v.K6),B=l.ZP.div.withConfig({displayName:"login__BottomUnderLineBox",componentId:"sc-1jxzze8-6"})(["display:flex;gap:10px;justify-content:center;"])},9630:function(o,t,i){"use strict";i.d(t,{W:function(){return d}});var r=i(1150),s=i(5360),l=i(8633),d=r.ZP.div.withConfig({displayName:"input__InputBox",componentId:"sc-w6l3ed-0"})(["display:flex;flex-direction:column;margin-bottom:20px;position:",";label{display:block;font-family:Pretendard-Regular;font-size:",";margin-bottom:10px;color:",";}input{height:",";border:1px solid ",";background:",";border-radius:5px;padding:0 15px;&:focus{border:1px solid ",";outline:none;}}p{margin-top:5px;}span.limit-time{position:absolute;bottom:",";transform:translateY(50%);right:",";color:",";}"],function(o){return"true"===o.certify&&"relative"},l.Mz,l.K_,(0,s.hO)("50px"),l.B_,l._2,l.K6,(0,s.hO)("25px"),(0,s.hO)("10px"),l._W)},7820:function(o,t,i){"use strict";i.d(t,{x:function(){return d}});var r=i(1150),s=i(5360),l=i(8633),d=r.ZP.p.withConfig({displayName:"text__InputErrorText",componentId:"sc-1vhg39e-0"})(["font-size:",";color:",";font-family:Pretendard-Regular;"],(0,s.hO)(l.Mz),l._W)},528:function(o,t,i){"use strict";i.d(t,{B:function(){return d}});var r=i(1150),s=i(5360),l=i(8633),d=r.ZP.h1.withConfig({displayName:"titles__PageMainTitle",componentId:"sc-1gishn9-0"})(["text-align:center;font-family:",";font-size:",";color:",";"],l.w9,(0,s.hO)("".concat(l.hQ)),l.SK)},3700:function(o,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return i(9234)}])},7632:function(o,t,i){"use strict";let r;i.d(t,{Z:function(){return esm_browser_v4}});let s="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var l={randomUUID:s};let d=new Uint8Array(16),p=[];for(let o=0;o<256;++o)p.push((o+256).toString(16).slice(1));var esm_browser_v4=function(o,t,i){if(l.randomUUID&&!t&&!o)return l.randomUUID();o=o||{};let s=o.random||(o.rng||function(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(d)})();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t){i=i||0;for(let o=0;o<16;++o)t[i+o]=s[o];return t}return function(o,t=0){return p[o[t+0]]+p[o[t+1]]+p[o[t+2]]+p[o[t+3]]+"-"+p[o[t+4]]+p[o[t+5]]+"-"+p[o[t+6]]+p[o[t+7]]+"-"+p[o[t+8]]+p[o[t+9]]+"-"+p[o[t+10]]+p[o[t+11]]+p[o[t+12]]+p[o[t+13]]+p[o[t+14]]+p[o[t+15]]}(s)}}},function(o){o.O(0,[536,333,162,575,774,888,179],function(){return o(o.s=3700)}),_N_E=o.O()}]);