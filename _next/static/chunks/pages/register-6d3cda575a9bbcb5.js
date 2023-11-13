(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{8014:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return register}});var i=t(9499),n=t(7294),s=t(1150),o=t(6310),d=t(7533),a=t(7536),l=t(5360),c=t(9630),p=t(7396),h=t(9216),x=t(8633),u=(0,s.ZP)(h.Z).withConfig({displayName:"select__CustomSelect",componentId:"sc-10zdv74-0"})(["height:",";margin-bottom:20px;.ant-select-selector{border:1px solid "," !important;background:"," !important;border-radius:5px !important;padding:0 15px !important;}&.ant-select-focused{div.ant-select-selector{border:1px solid "," !important;outline:none !important;box-shadow:none !important;}}"],(0,l.hO)("50px"),x.B_,x._2,x.K6),g=t(528),m=t(8381),f=t(8437),j=t(7731),b=t(7820),_=t(2386),y=t(9787),w=t(5893);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,i)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){(0,i.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var N=o.Ry().shape({userName:o.Z_().required("이름은 필수입니다."),phoneNumber:o.Z_().required("휴대폰 번호는 필수입니다."),certifyNumber:o.Z_().required("인증번호는 필수입니다."),email:o.Z_().required("이메일은 필수입니다.").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"이메일 형식이 올바르지 않습니다."),password:o.Z_().required("비밀번호는 필수입니다.").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,"비밀번호는 8자 이상, 숫자/소문자/대문자/특수문자를 각 최소 하나씩 포함해야 합니다."),rePassword:o.Z_().required("비밀번호확인은 필수입니다.").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,"비밀번호는 8자 이상, 숫자/소문자/대문자/특수문자를 각 최소 하나씩 포함해야 합니다."),nickName:o.Z_().required("닉네임은 필수입니다."),address:o.Z_().required("우편번호는 필수입니다."),detailAddress:o.Z_().required("상세주소는 필수입니다.")});function register(){var e,r,t,i,s,o=(0,n.useState)(!1),l=o[0],h=o[1],F=(0,n.useRef)(null),R=(0,n.useState)(180),E=R[0],q=R[1],D=(0,n.useState)(null),K=D[0],T=D[1],L=(0,n.useState)(!1),M=L[0],$=L[1],X=(0,a.cI)({resolver:(0,d.X)(N)}),Y=X.register,V=X.handleSubmit,G=X.setValue,U=X.watch,Q=X.formState.errors,H=(0,a.cI)({resolver:(0,d.X)(N)}),J=H.register,ee=H.handleSubmit;H.setValue,H.watch,H.formState.errors;var setCertTimer=function(){K&&clearInterval(K);var e=setInterval(function(){q(function(r){return 1===r?(clearInterval(e),h(!1),0):r-1})},1e3);T(Number(e))},handleAddressDrawer=function(){$(function(e){return!e})};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(v,{children:[(0,w.jsx)(g.B,{children:"회원가입"}),(0,w.jsxs)(P,{onClick:function(){F.current&&F.current.click()},children:[(0,w.jsx)(m.F,{width:"200px",height:"200px",children:(0,w.jsx)("img",{src:"".concat(y.O,"/images/add-image.png"),alt:"add-image"})}),(0,w.jsx)("input",{type:"file",style:{display:"none"},ref:F,onChange:function(e){var r=e.target.files;r&&r.length>0&&r[0]},accept:"image/*"})]}),(0,w.jsxs)(O,{children:[(0,w.jsxs)(c.W,{children:[(0,w.jsx)("label",{htmlFor:"registerUserName",children:"이름"}),(0,w.jsx)("input",_objectSpread({id:"registerUserName",type:"text"},Y("userName")))]}),(0,w.jsxs)(Z,{children:[(0,w.jsxs)(c.W,{children:[(0,w.jsx)("label",{htmlFor:"registerPhoneNum",children:"휴대폰 번호"}),(0,w.jsx)("input",_objectSpread(_objectSpread({id:"registerPhoneNum",type:"text",maxLength:11},Y("phoneNumber")),{},{onChange:function(e){G("phoneNumber",(0,j.X1)(e.target.value))}})),(null===(e=Q.phoneNumber)||void 0===e?void 0:e.message)&&(0,w.jsx)(b.x,{children:Q.phoneNumber.message})]}),(0,w.jsx)(p.LE,{height:"50px",onClick:function(){try{h(!0),q(180),setCertTimer()}catch(e){console.log(e)}},disabled:!U("phoneNumber"),children:"인증번호 전송"})]}),l&&(0,w.jsxs)(Z,{children:[(0,w.jsxs)(c.W,{certify:"true",children:[(0,w.jsx)("label",{htmlFor:"registerCertifyNum",children:"인증 번호"}),(0,w.jsx)("input",_objectSpread(_objectSpread({id:"registerCertifyNum",type:"text",maxLength:6},Y("certifyNumber")),{},{onChange:function(e){G("certifyNumber",(0,j.X1)(e.target.value))}})),(0,w.jsxs)("span",{className:"limit-time",children:[String(Math.floor(E/60)).padStart(2,"0"),":",String(E%60).padStart(2,"0")]}),(null===(r=Q.certifyNumber)||void 0===r?void 0:r.message)&&(0,w.jsx)(b.x,{children:Q.certifyNumber.message})]}),(0,w.jsx)(p.LE,{height:"50px",disabled:!U("certifyNumber"),children:"확인"})]}),(0,w.jsxs)(C,{children:[(0,w.jsxs)(c.W,{children:[(0,w.jsx)("label",{htmlFor:"registerGender",children:"성별"}),(0,w.jsx)(u,{id:"registerGender"})]}),(0,w.jsxs)(c.W,{children:[(0,w.jsx)("label",{htmlFor:"registerAge",children:"연령대"}),(0,w.jsx)(u,{id:"registerAge"})]})]}),(0,w.jsxs)(c.W,{children:[(0,w.jsx)("label",{htmlFor:"registerNTRP",children:"NTRP"}),(0,w.jsx)(u,{id:"registerNTRP"})]}),(0,w.jsxs)(c.W,{children:[(0,w.jsx)("label",{htmlFor:"registerEmail",children:"이메일"}),(0,w.jsx)("input",_objectSpread({id:"registerEmail"},Y("email"))),(null===(t=Q.email)||void 0===t?void 0:t.message)&&(0,w.jsx)(b.x,{children:Q.email.message})]}),(0,w.jsxs)(c.W,{children:[(0,w.jsx)("label",{htmlFor:"registerPassword",children:"비밀번호"}),(0,w.jsx)("input",_objectSpread({id:"registerPassword",type:"password"},Y("password"))),(null===(i=Q.password)||void 0===i?void 0:i.message)&&(0,w.jsx)(b.x,{children:Q.password.message})]}),(0,w.jsxs)(c.W,{children:[(0,w.jsx)("label",{htmlFor:"registerRePwd",children:"비밀번호 확인"}),(0,w.jsx)("input",_objectSpread({id:"registerRePwd",type:"password"},Y("rePassword"))),(null===(s=Q.rePassword)||void 0===s?void 0:s.message)&&(0,w.jsx)(b.x,{children:Q.rePassword.message})]}),(0,w.jsxs)(Z,{children:[(0,w.jsxs)(c.W,{children:[(0,w.jsx)("label",{htmlFor:"registerNickNm",children:"닉네임"}),(0,w.jsx)("input",_objectSpread({id:"registerNickNm",type:"text"},Y("nickName")))]}),(0,w.jsx)(p.LE,{height:"50px",disabled:!U("nickName"),children:"중복체크"})]}),(0,w.jsxs)(Z,{children:[(0,w.jsxs)(c.W,{children:[(0,w.jsx)("label",{htmlFor:"registerAddress",children:"주소"}),(0,w.jsx)("input",_objectSpread(_objectSpread({id:"registerAddress",placeholder:"우편번호"},Y("address")),{},{readOnly:!0}))]}),(0,w.jsx)(p.LE,{height:"50px",onClick:handleAddressDrawer,children:"주소 검색"})]}),(0,w.jsx)(c.W,{children:(0,w.jsx)("input",_objectSpread({id:"registerDetailAddress",type:"text",placeholder:"상세주소"},Y("detailAddress")))})]}),(0,w.jsx)(S,{children:(0,w.jsx)(p.h$,{colorstyle:"is-green",disabled:!(U("userName")&&U("phoneNumber")&&U("certifyNumber")&&U("email")&&U("password")&&U("rePassword")&&U("nickName")&&U("address")&&U("detailAddress")),onClick:V(function(){console.log("회원가입")}),children:"회원가입"})})]}),(0,w.jsx)(f.Z,{title:"주소 검색",isOpen:M,placement:"bottom",height:"100%",toggleDrawer:handleAddressDrawer,children:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(Z,{children:[(0,w.jsx)(c.W,{children:(0,w.jsx)("input",_objectSpread({id:"registerAddress",placeholder:"우편번호"},J("address")))}),(0,w.jsx)(p.LE,{height:"50px",onClick:ee(function(){console.log("주소 검색")}),children:"주소 검색"})]}),(0,w.jsx)(I,{children:(0,w.jsxs)("p",{children:["찾으시려는 도로명주소, 동(읍/면/리) 또는 건물명을 입력해주세요.",(0,w.jsx)("br",{}),"(예 : 판교동, 판교원로 68, 판교실리콘파크)"]})}),(0,w.jsx)(m.W,{}),(0,w.jsxs)(A,{children:[(0,w.jsxs)(k,{children:[(0,w.jsxs)(z,{children:[(0,w.jsxs)(W,{children:[(0,w.jsx)(_.c,{color:x.K6,children:"도로명"}),(0,w.jsx)("p",{children:"경기도 성남시 분당구 판교공원4길 27(판교동)"})]}),(0,w.jsxs)(W,{children:[(0,w.jsx)(_.c,{children:"지번"}),(0,w.jsx)("p",{children:"경기도 성남시 분당구 판교공원4길 27(판교동)"})]})]}),(0,w.jsx)(B,{children:"13477"})]}),(0,w.jsxs)(k,{children:[(0,w.jsxs)(z,{children:[(0,w.jsxs)(W,{children:[(0,w.jsx)(_.c,{color:x.K6,children:"도로명"}),(0,w.jsx)("p",{children:"경기도 성남시 분당구 판교공원4길 27(판교동)"})]}),(0,w.jsxs)(W,{children:[(0,w.jsx)(_.c,{children:"지번"}),(0,w.jsx)("p",{children:"경기도 성남시 분당구 판교공원4길 27(판교동)"})]})]}),(0,w.jsx)(B,{children:"13477"})]})]})]})})]})}var v=s.ZP.div.withConfig({displayName:"register__RegisterViewContainer",componentId:"sc-gx2w9j-0"})(["margin-top:50px;"]),P=s.ZP.div.withConfig({displayName:"register__ImageSection",componentId:"sc-gx2w9j-1"})(["display:flex;justify-content:center;margin-top:30px;cursor:pointer;"]),O=s.ZP.div.withConfig({displayName:"register__InputContainer",componentId:"sc-gx2w9j-2"})(["margin-top:30px;"]),C=s.ZP.div.withConfig({displayName:"register__SelectBox",componentId:"sc-gx2w9j-3"})(["display:flex;justify-content:space-between;div.input__InputBox-sc-w6l3ed-0{flex-basis:280px;&:first-child{margin-right:",";}}"],(0,l.hO)("20px")),Z=s.ZP.div.withConfig({displayName:"register__InputButtonBox",componentId:"sc-gx2w9j-4"})(["display:flex;justify-content:space-between;align-items:flex-end;.input__InputBox-sc-w6l3ed-0{flex-basis:380px;}.buttons__SquareButton-sc-xhpq7c-1{flex-basis:180px;margin-bottom:20px;margin-left:",";}"],(0,l.hO)("20px")),S=s.ZP.div.withConfig({displayName:"register__ButtonBox",componentId:"sc-gx2w9j-5"})(["margin-top:30px;margin-bottom:50px;"]),I=s.ZP.div.withConfig({displayName:"register__DescTextBox",componentId:"sc-gx2w9j-6"})(["margin-bottom:20px;p{font-size:",";color:",";font-family:Pretendard-Regular;line-height:",";}"],(0,l.hO)(x.Mz),x.R4,(0,l.hO)(x.Aq)),A=s.ZP.div.withConfig({displayName:"register__AddressContainer",componentId:"sc-gx2w9j-7"})(["margin-top:20px;"]),k=s.ZP.div.withConfig({displayName:"register__AddressBoxWrap",componentId:"sc-gx2w9j-8"})(["display:flex;justify-content:space-between;background-color:",";border:1px solid ",";border-radius:5px;padding:",";margin-bottom:10px;"],x._2,x.B_,(0,l.hO)("15px")),z=s.ZP.div.withConfig({displayName:"register__AddLeftWrap",componentId:"sc-gx2w9j-9"})(["margin-right:",";"],(0,l.hO)("20px")),W=s.ZP.div.withConfig({displayName:"register__AddressBox",componentId:"sc-gx2w9j-10"})(["display:flex;align-items:center;&:first-child{margin-bottom:10px;}p{margin-left:",";font-size:",";font-family:Pretendard-Regular;line-height:",";}"],(0,l.hO)("10px"),(0,l.hO)(x.Mz),(0,l.hO)(x.OI)),B=s.ZP.div.withConfig({displayName:"register__AddRightWrap",componentId:"sc-gx2w9j-11"})(["display:flex;justify-content:center;align-items:center;font-size:",";font-family:Pretendard-Regular;color:",";"],(0,l.hO)(x.OI),x.SK)},2386:function(e,r,t){"use strict";t.d(r,{c:function(){return o}});var i=t(1150),n=t(5360),s=t(8633),o=i.ZP.span.withConfig({shouldForwardProp:function(e){return"fontsize"!==e}}).withConfig({displayName:"badge__CustomBadge",componentId:"sc-zveg3a-0"})(["display:block;width:",";height:",";flex-shrink:0;background-color:",";border-radius:5px;color:",";font-family:Pretendard-Regular;font-size:",";display:flex;justify-content:center;align-items:center;"],(0,n.hO)("73px"),(0,n.hO)("30px"),function(e){return e.color||s.Ie},s.L_,function(e){return(0,n.hO)(e.fontsize||s.Mz)})},9630:function(e,r,t){"use strict";t.d(r,{W:function(){return o}});var i=t(1150),n=t(5360),s=t(8633),o=i.ZP.div.withConfig({displayName:"input__InputBox",componentId:"sc-w6l3ed-0"})(["display:flex;flex-direction:column;margin-bottom:20px;position:",";label{display:block;font-family:Pretendard-Regular;font-size:",";margin-bottom:10px;color:",";}input{height:",";border:1px solid ",";background:",";border-radius:5px;padding:0 15px;&:focus{border:1px solid ",";outline:none;}}p{margin-top:5px;}span.limit-time{position:absolute;bottom:",";transform:translateY(50%);right:",";color:",";}"],function(e){return"true"===e.certify&&"relative"},s.Mz,s.K_,(0,n.hO)("50px"),s.B_,s._2,s.K6,(0,n.hO)("25px"),(0,n.hO)("10px"),s._W)},7820:function(e,r,t){"use strict";t.d(r,{x:function(){return o}});var i=t(1150),n=t(5360),s=t(8633),o=i.ZP.p.withConfig({displayName:"text__InputErrorText",componentId:"sc-1vhg39e-0"})(["font-size:",";color:",";font-family:Pretendard-Regular;"],(0,n.hO)(s.Mz),s._W)},528:function(e,r,t){"use strict";t.d(r,{B:function(){return o}});var i=t(1150),n=t(5360),s=t(8633),o=i.ZP.h1.withConfig({displayName:"titles__PageMainTitle",componentId:"sc-1gishn9-0"})(["text-align:center;font-family:",";font-size:",";color:",";"],s.w9,(0,n.hO)("".concat(s.hQ)),s.SK)},7731:function(e,r,t){"use strict";t.d(r,{X1:function(){return onlyNumber},vh:function(){return dateFormatter}});var i=t(381),n=t.n(i),dateFormatter=function(e){return n()(e).format("YYYY/MM/DD")},onlyNumber=function(e){return e.replace(/[^0-9]/g,"")}},6276:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return t(8014)}])}},function(e){e.O(0,[885,536,333,184,228,791,216,774,888,179],function(){return e(e.s=6276)}),_N_E=e.O()}]);