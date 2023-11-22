(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[914],{4238:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return PostMatching}});var n=a(9499),i=a(29),r=a(7794),o=a.n(r),l=a(7294),c=a(7903),s=a(6310),d=a(7533),u=a(7536),m=a(1150),h=a(3281),p=a(8633),x=a(528),g=a(9630),j=a(8381),b=a(7396),_=a(3162),v=a(9787),f=a(546),T=a(7820),S=a(2319),y=a(2361),w=a(846),O=a(9970),E=a(8031),D=a(5893);function ownKeys(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(a),!0).forEach(function(t){(0,n.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ownKeys(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var N=s.Ry().shape({postTitle:s.Z_().required("제목을 입력해주세요."),matchType:s.Z_().required("경기 유형을 선택해주세요."),numOfRecruited:s.Rx().required("모집 인원수를 선택해주세요."),selectedAge:s.Z_().required("모집 연령대를 선택해주세요."),selectedNTRP:s.Z_().required("모집할 NTRP를 선택해주세요."),matchDate:s.Z_().required("경기 날짜를 선택해주세요."),matchStartTime:s.Z_().required("경기 시작 시간을 선택해주세요."),matchEndTime:s.Z_().required("경기 종료 시간을 선택해주세요."),deadlineDate:s.Z_().required("모집 마감일을 선택해주세요."),deadlineTime:s.Z_().required("모집 마감 시간을 선택해주세요."),courtAddress:s.Z_().required("경기장 주소를 입력해주세요."),isCourtBooked:s.O7().required("경기장 예약 여부를 선택해주세요."),courtFee:s.Rx().required("경기장 대여료를 입력해주세요. (무료일 경우 0을 입력해주세요.)").min(0),locationImg:s.Z_(),mainText:s.Z_().required("본문 내용을 입력해주세요.")});function PostMatching(){var e,t,a,n,r,s,m,h,b,f,q=(0,u.cI)({resolver:(0,d.X)(N)}),M=q.register,L=q.handleSubmit,G=q.setValue,H=q.getValues,V=q.watch,X=q.formState.errors,K=(0,E.Z)().setMessage,z=(0,l.useState)(null),U=z[0];z[1];var $=(0,l.useState)(""),J=$[0];$[1];var Q=(0,l.useState)(""),Y=Q[0];Q[1];var ee=(0,l.useState)(""),et=ee[0];ee[1];var ea=(0,l.useState)(""),en=ea[0];ea[1];var ei=(0,l.useState)({address:"",lat:"",lon:""}),er=ei[0],eo=ei[1],el=(0,l.useState)(0),ec=el[0],es=el[1],ed=(0,l.useState)(null);ed[0],ed[1];var eu=(0,l.useState)([{value:null,label:"경기 유형을 먼저 선택해주세요."}]),em=eu[0],eh=eu[1],selectHandler=function(e){e.includes("SINGLE")?eh([{value:1,label:"1 명"}]):eh([{value:1,label:"1 명"},{value:2,label:"2 명"},{value:3,label:"3 명"}])},ep=(0,l.useState)(!1),ex=ep[0],eg=ep[1],ej=(0,l.useRef)(null),eb=(0,l.useState)(null),e_=eb[0],ev=eb[1],ef=(0,l.useState)(null),eT=ef[0],eS=ef[1],ey={backgroundImage:"url(".concat(eT,")"),border:"1px solid ".concat(p.B_),borderRadius:"5px",height:"100%",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},ew=(e=(0,i.Z)(o().mark(function _callee(){var e,t,a;return o().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(eT){n.next=3;break}return K("error","이미지를 추가해주세요."),n.abrupt("return");case 3:return console.log(e={title:H("postTitle"),matchingType:H("matchType"),recruitNum:H("numOfRecruited"),ageGroup:H("selectedAge"),ntrp:H("selectedNTRP"),matchingDate:H("matchDate"),matchingStartTime:H("matchStartTime"),matchingEndTime:H("matchEndTime"),recruitDueDate:H("deadlineDate"),recruitDueTime:H("deadlineTime"),location:H("courtAddress"),lat:"".concat(er.lat),len:"".concat(er.lon),isReserved:H("isCourtBooked"),cost:H("courtFee"),content:H("mainText")}),n.prev=5,(t=new FormData).append("imageFile",e_),n.next=10,c.Z.uploadMatchingImage("1",t);case 10:return a=n.sent,n.next=13,c.Z.regMatchingData(_objectSpread(_objectSpread({},e),{},{locationImg:a.data.response}));case 13:n.sent,n.next=19;break;case 16:n.prev=16,n.t0=n.catch(5),console.log(n.t0);case 19:case"end":return n.stop()}},_callee,null,[[5,16]])})),function(){return e.apply(this,arguments)});return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(O.Z,{isOpen:ex,toggleDrawer:function(){return eg(function(e){return!e})},setCourtInfos:eo,setValue:G}),(0,D.jsx)(I,{children:(0,D.jsx)(x.B,{children:"매칭 글 등록"})}),(0,D.jsxs)(P,{onSubmit:L(ew),children:[(0,D.jsxs)(g.W,{children:[(0,D.jsx)("label",{htmlFor:"postTitle",children:"제목"}),(0,D.jsx)("input",_objectSpread(_objectSpread({id:"postTitle",type:"text"},M("postTitle")),{},{onChange:function(e){return G("postTitle",e.target.value)}})),(null===(t=X.postTitle)||void 0===t?void 0:t.message)&&(0,D.jsx)(T.x,{children:X.postTitle.message})]}),(0,D.jsxs)(F,{children:[(0,D.jsxs)(g.W,{children:[(0,D.jsx)("label",{htmlFor:"matchType",children:"경기 유형"}),(0,D.jsx)(_.A,_objectSpread(_objectSpread({id:"matchType",options:[{value:"SINGLE",label:"단식"},{value:"DOUBLE",label:"복식"},{value:"MIXED_DOUBLE",label:"혼성 복식"}]},M("matchType")),{},{onChange:function(e){var t=e+"";G("matchType",t),es("SINGLE"===t?2:4),selectHandler(t)}}))]}),(0,D.jsxs)(g.W,{children:[(0,D.jsx)("label",{htmlFor:"numOfRecruited",children:"모집 인원"}),(0,D.jsx)(_.A,_objectSpread(_objectSpread({id:"numOfRecruited",options:em},M("numOfRecruited")),{},{onChange:function(e){return G("numOfRecruited",e)}}))]})]}),(0,D.jsxs)(F,{children:[(0,D.jsxs)(g.W,{children:[(0,D.jsx)("label",{htmlFor:"selectedAge",children:"모집 연령대"}),(0,D.jsx)(_.A,{id:"selectedAge",options:[{value:"TEENAGER",label:"10대"},{value:"TWENTIES",label:"20대"},{value:"THIRTIES",label:"30대"},{value:"FORTIES",label:"40대"},{value:"FIFTIES",label:"50대"},{value:"SIXTIES",label:"60대"}],onChange:function(e){return G("selectedAge",e)}})]}),(0,D.jsxs)(g.W,{children:[(0,D.jsx)("label",{htmlFor:"selectedNTRP",children:"모집 NTRP"}),(0,D.jsx)(_.A,_objectSpread(_objectSpread({id:"selectedNTRP",options:[{value:"DEVELOPMENT",label:"NewBie (1.0 ~ 2.0)"},{value:"BEGINNER",label:"Beginner (2.5 ~ 3.5)"},{value:"INTERMEDIATE",label:"Intermediate (4.0 ~ 4.5)"},{value:"ADVANCED",label:"Advanced (5.0 ~ 5.5)"},{value:"PRO",label:"Pro (6.0 ~ 7.0)"}]},M("selectedNTRP")),{},{onChange:function(e){G("selectedNTRP",e)}}))]})]}),(0,D.jsxs)(g.W,{children:[(0,D.jsx)("label",{htmlFor:"matchDate",children:"경기일"}),(0,D.jsx)(S.Z,{name:"matchDate",setState:G}),(0,D.jsx)(W,_objectSpread(_objectSpread({type:"text",id:"matchDate",value:"".concat(U)},M("matchDate")),{},{readOnly:!0}))," ",(null===(a=X.matchDate)||void 0===a?void 0:a.message)&&(0,D.jsx)(T.x,{children:X.matchDate.message})]}),(0,D.jsxs)(F,{children:[(0,D.jsxs)(g.W,{children:[(0,D.jsx)("label",{htmlFor:"matchStartTime",children:"시작 시간"}),(0,D.jsx)(y.Z,{name:"matchStartTime",setState:G,type:[!0,!0]}),(0,D.jsx)(W,_objectSpread(_objectSpread({type:"text",id:"matchStartTime",value:"".concat(J)},M("matchStartTime")),{},{readOnly:!0})),(null===(n=X.matchStartTime)||void 0===n?void 0:n.message)&&(0,D.jsx)(T.x,{children:X.matchStartTime.message})]}),(0,D.jsxs)(g.W,{children:[(0,D.jsx)("label",{htmlFor:"matchEndTime",children:"종료 시간"}),(0,D.jsx)(y.Z,{name:"matchEndTime",setState:G,type:[!0,!0]}),(0,D.jsx)(W,_objectSpread(_objectSpread({type:"text",id:"matchEndTime",value:"".concat(Y)},M("matchEndTime")),{},{readOnly:!0})),(null===(r=X.matchEndTime)||void 0===r?void 0:r.message)&&(0,D.jsx)(T.x,{children:X.matchEndTime.message})]})]}),(0,D.jsxs)(g.W,{children:[(0,D.jsx)("label",{htmlFor:"deadlineDnT",children:"모집 마감 기한"}),(0,D.jsxs)(F,{children:[(0,D.jsx)(S.Z,{name:"deadlineDate",setState:G,matchDate:"".concat(et),type:[!0,!0,!0]}),(0,D.jsx)(W,_objectSpread(_objectSpread({type:"text",id:"deadlineDate",value:"".concat(et)},M("deadlineDate")),{},{readOnly:!0,onChange:function(e){G("deadlineDate",e.target.value),console.log(H("deadlineDate"))}})),(null===(s=X.deadlineDate)||void 0===s?void 0:s.message)&&(0,D.jsx)(T.x,{children:X.deadlineDate.message}),(0,D.jsx)(y.Z,{name:"deadlineTime",setState:G,type:[!0,!1]}),(0,D.jsx)(W,_objectSpread(_objectSpread({type:"text",id:"deadlineTime",value:"".concat(en)},M("deadlineTime")),{},{readOnly:!0})),(null===(m=X.deadlineTime)||void 0===m?void 0:m.message)&&(0,D.jsx)(T.x,{children:X.deadlineTime.message})]})]}),(0,D.jsxs)(g.W,{children:[(0,D.jsx)("label",{htmlFor:"courtAddress",children:"경기장 주소"}),(0,D.jsx)("input",_objectSpread(_objectSpread({type:"text",id:"courtAddress",defaultValue:"",value:"".concat(er.address)},M("courtAddress")),{},{onClick:function(e){e.preventDefault(),eg(!0)},readOnly:!0})),(null===(h=X.courtAddress)||void 0===h?void 0:h.message)&&(0,D.jsx)(T.x,{children:X.courtAddress.message})]}),(0,D.jsx)(F,{children:(0,D.jsxs)(g.W,{children:[(0,D.jsx)("label",{htmlFor:"isCourtBooked",children:"경기장 예약 여부"}),(0,D.jsx)(w.Z,_objectSpread({idString:"isCourtBooked",setState:G},M("isCourtBooked")))]})}),(0,D.jsxs)(C,{children:[(0,D.jsxs)(Z,{children:["1인당"," ",Number.isInteger(H("courtFee")/ec)?"".concat(H("courtFee")/ec):"-"," ","원"]}),(0,D.jsxs)(g.W,{children:[(0,D.jsx)("label",{htmlFor:"courtFee",children:"구장 대여비"}),(0,D.jsx)("input",_objectSpread(_objectSpread({type:"number",id:"courtFee",className:"text-align-right",pattern:"^[0-9]+$"},M("courtFee")),{},{onChange:function(e){return G("courtFee",Number(e.target.value))},onClick:function(){0===ec&&K("warning","경기 유형을 먼저 선택해주세요!")}})),(null===(b=X.courtFee)||void 0===b?void 0:b.message)&&(0,D.jsx)(T.x,{children:X.courtFee.message})]})]}),(0,D.jsxs)(g.W,{children:[(0,D.jsx)("label",{htmlFor:"courtPhoto",children:"경기장 이미지"}),(0,D.jsxs)(A,{onClick:function(){ej.current&&ej.current.click()},children:[(0,D.jsx)(k,{children:(0,D.jsx)(j.F,{width:"620px",height:"400px",children:eT?(0,D.jsx)("div",{className:"img-align-box",style:ey}):(0,D.jsx)(D.Fragment,{children:(0,D.jsx)("img",{src:"".concat(v.O,"/images/add-image-rectangle-00.png"),alt:"add-image"})})})}),(0,D.jsx)("input",{id:"courtPhoto",type:"file",style:{display:"none"},ref:ej,onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onload=function(e){eS(e.target.result)},ev(t),a.readAsDataURL(t)},accept:"image/*"})]})]}),(0,D.jsxs)(g.W,{children:[(0,D.jsx)("label",{htmlFor:"mainText",children:"본문 내용"}),(0,D.jsx)(B,_objectSpread({id:"mainText",onChange:function(e){return G("mainText",e.target.value)},placeholder:"내용을 입력하세요."},M("mainText"))),(null===(f=X.mainText)||void 0===f?void 0:f.message)&&(0,D.jsx)(T.x,{children:X.mainText.message})]}),(0,D.jsx)(R,{colorstyle:"is-black",type:"submit",disabled:!(V("postTitle")&&V("matchType")&&V("numOfRecruited")&&V("selectedAge")&&V("selectedNTRP")&&V("matchDate")&&V("matchStartTime")&&V("matchEndTime")&&V("deadlineDate")&&V("deadlineTime")&&V("courtAddress")&&V("isCourtBooked")&&V("courtFee")&&V("mainText")),children:"등록하기"})]})]})}var I=m.ZP.div.withConfig({displayName:"post-matching__PageTitleArea",componentId:"sc-1gjxgpn-0"})(["margin:"," auto;"],(0,h.hO)("50px")),P=m.ZP.form.withConfig({displayName:"post-matching__PostMatchingForm",componentId:"sc-1gjxgpn-1"})(["display:flex;flex-direction:column;.input__InputBox-sc-w6l3ed-0{.text-align-right{text-align:right;}.select__CustomSelect-sc-10zdv74-0{margin-bottom:0px;}}"]),F=m.ZP.div.withConfig({displayName:"post-matching__HalfContainer",componentId:"sc-1gjxgpn-2"})(["display:flex;flex-direction:row;gap:",";.input__InputBox-sc-w6l3ed-0{width:100%;.text-align-right{text-align:right;}}* .buttonRadio__RadioButton-sc-b6o1nr-1,* .select__CustomSelect-sc-10zdv74-0{margin-bottom:0px;}"],(0,h.hO)("20px")),C=m.ZP.div.withConfig({displayName:"post-matching__CourtFeeArea",componentId:"sc-1gjxgpn-3"})(["position:relative;width:100%;"]),Z=m.ZP.span.withConfig({displayName:"post-matching__FeeForEachSpan",componentId:"sc-1gjxgpn-4"})(["position:absolute;top:",";right:",";max-width:",";white-space:nowrap;overflow:hidden;font-family:",";color:",";"],(0,h.hO)("3px"),(0,h.hO)("5px"),(0,h.hO)("150px"),p.bH,p.Ie),R=(0,m.ZP)(b.h$).withConfig({displayName:"post-matching__SubmitBtn",componentId:"sc-1gjxgpn-5"})(["margin:"," 0px;"],(0,h.hO)("30px")),A=m.ZP.div.withConfig({displayName:"post-matching__ImageSection",componentId:"sc-1gjxgpn-6"})(["display:flex;justify-content:center;cursor:pointer;min-width:100%;max-width:",";border:none;margin-bottom:",";background-color:",";img{max-width:100%;border-radius:5px;border:1px solid ",";overflow:hidden;}input{height:0px;!important;padding:0px;!important;}"],(0,h.hO)("620px"),(0,h.hO)("30px"),p._2,p.B_),k=m.ZP.div.withConfig({displayName:"post-matching__ImageContainer",componentId:"sc-1gjxgpn-7"})(["width:100%;"]),B=(0,m.ZP)(f.K).withConfig({displayName:"post-matching__MainTextArea",componentId:"sc-1gjxgpn-8"})(["max-width:",";height:",";"],(0,h.hO)("620px"),(0,h.hO)("400px")),W=m.ZP.input.withConfig({displayName:"post-matching__HiddenInput",componentId:"sc-1gjxgpn-9"})(["position:absolute;width:0px;height:0px;max-width:0px;max-height:0px;background-color:transparent;padding:0px;border:1px solid transparent;border-radius:0px;box-shadow:none;visibility:hidden;"])},3289:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post-matching",function(){return a(4238)}])}},function(e){e.O(0,[885,536,216,625,210,94,160,462,774,888,179],function(){return e(e.s=3289)}),_N_E=e.O()}]);