(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[607],{2513:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return EditMatching}});var a=n(9499),r=n(29),i=n(7794),o=n.n(i),l=n(7294),c=n(7903),d=n(6310),s=n(7533),u=n(7536),h=n(1150),p=n(3281),m=n(8633),g=n(528),x=n(9630),f=n(7396),j=n(8381),b=n(546),_=n(2319),S=n(2361),T=n(846),v=n(3162),y=n(5893);function Selector(e){var t=e.idString,n=e.options,a=e.value,r=e.onChangeHandler;return(0,y.jsx)(v.A,{id:t,value:a,options:n,onChange:r})}var w=n(9970),O=n(2268),E=n(5121),I=n(8031);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,a.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var D=d.Ry().shape({postTitle:d.Z_().required("제목을 입력해주세요."),matchType:d.Z_().required("경기 유형을 선택해주세요."),numOfRecruited:d.Rx().required("모집 인원수를 선택해주세요."),selectedAge:d.Z_().required("모집 연령대를 선택해주세요."),selectedNTRP:d.Z_().required("모집할 NTRP를 선택해주세요."),matchDate:d.Z_().required("경기 날짜를 선택해주세요."),matchStartTime:d.Z_().required("경기 시작 시간을 선택해주세요."),matchEndTime:d.Z_().required("경기 종료 시간을 선택해주세요."),deadlineDate:d.Z_().required("모집 마감일을 선택해주세요."),deadlineTime:d.Z_().required("모집 마감 시간을 선택해주세요."),courtAddress:d.Z_().required("경기장 주소를 입력해주세요."),isCourtBooked:d.O7().required("경기장 예약 여부를 선택해주세요."),courtFee:d.Rx().required("경기장 대여료를 입력해주세요. (무료일 경우 0을 입력해주세요.)").min(0),locationImg:d.Z_(),mainText:d.Z_().required("본문 내용을 입력해주세요.")});function EditMatching(e){var t=(0,u.cI)({resolver:(0,s.X)(D)}),n=t.register,a=t.setValue,i=t.getValues;t.watch,t.formState.errors;var d=(0,I.Z)().setMessage,h=(0,O.Z)().moveToBack,p=(0,l.useState)(null),m=p[0],f=p[1],b=(0,l.useState)({address:"",lat:"",lon:""}),v=b[0],W=b[1],q=(0,l.useState)(1),G=q[0],H=q[1],V=(0,l.useState)(null),L=V[0],M=V[1],X=(0,l.useState)([{value:i("numOfRecruited"),label:"-"}]),K=X[0],U=X[1];(0,l.useEffect)(function(){var e;(e=(0,r.Z)(o().mark(function _callee(){var e;return o().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.Z.get("http://3.38.50.101:8080/api/matches/1");case 3:f(e=t.sent.data.response),a("postTitle",e.title),a("matchType",e.matchingType),a("numOfRecruited",e.recruitNum),a("selectedAge",e.ageGroup),a("selectedNTRP",e.ntrp),a("matchDate",e.date),a("matchStartTime",e.startTime),a("matchEndTime",e.endTime),a("deadlineDate",e.recruitDueDate),a("deadlineTime",e.recruitDueTime),a("courtAddress",e.location),a("isCourtBooked",e.isReserved),a("courtFee",e.cost),a("locationImg",e.locationImg),a("mainText",e.content),console.log(e),W(_objectSpread(_objectSpread({},v),{},{lat:e.lat,lon:e.lon})),H(e.matchingType.includes("SINGLE")?2:4),t.next=29;break;case 26:t.prev=26,t.t0=t.catch(0),console.log(t.t0);case 29:case"end":return t.stop()}},_callee,null,[[0,26]])})),function(){return e.apply(this,arguments)})(),console.log(m)},[]);var selectHandler=function(e){e.includes("SINGLE")?U([{value:1,label:"1 명"}]):U([{value:1,label:"1 명"},{value:2,label:"2 명"},{value:3,label:"3 명"}])},z=(0,l.useRef)(null),$=(0,l.useState)(!1),J=$[0],Q=$[1];return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(w.Z,{isOpen:J,toggleDrawer:function(){return Q(function(e){return!e})},setCourtInfos:W,setAddress:a}),(0,y.jsx)(N,{children:(0,y.jsx)(g.B,{children:"매칭 글 수정"})}),(0,y.jsxs)(C,{onSubmit:function(e){e.preventDefault();var t=_objectSpread(_objectSpread({},m),{},{title:i("postTitle"),matchingType:i("matchType"),recruitNum:i("numOfRecruited"),ageGroup:i("selectedAge"),ntrp:i("selectedNTRP"),matchingDate:i("matchDate"),matchingStartTime:i("matchStartTime"),matchingEndTime:i("matchEndTime"),recruitDueDate:i("deadlineDate"),recruitDueTime:i("deadlineTime"),location:i("courtAddress"),lat:"".concat(v.lat),lon:"".concat(v.lon),isReserved:i("isCourtBooked"),cost:i("courtFee"),locationImg:i("locationImg"),content:i("mainText")});console.log(e),console.log(t),c.Z.modifyMatchingList(1,t).then(function(){return console.log("수정됨")}).catch(function(e){return console.log(e)})},children:[(0,y.jsxs)(x.W,{children:[(0,y.jsx)("label",{htmlFor:"postTitle",children:"제목"}),(0,y.jsx)("input",_objectSpread(_objectSpread({id:"postTitle",type:"text"},n("postTitle")),{},{onChange:function(e){return a("postTitle",e.target.value)}}))]}),(0,y.jsxs)(P,{children:[(0,y.jsxs)(x.W,{children:[(0,y.jsx)("label",{htmlFor:"matchType",children:"경기 유형"}),(0,y.jsx)(Selector,_objectSpread(_objectSpread({idString:"matchType",options:[{value:"SINGLE",label:"단식"},{value:"MIXED_SINGLE",label:"혼성 단식"},{value:"DOUBLE",label:"복식"},{value:"MIXED_DOUBLE",label:"혼성 복식"}],value:i("matchType")},n("matchType")),{},{onChangeHandler:function(e){a("matchType",e),H(e.includes("SINGLE")?2:4),selectHandler(e)}}))]}),(0,y.jsxs)(x.W,{children:[(0,y.jsx)("label",{htmlFor:"numOfRecruited",children:"모집 인원"}),(0,y.jsx)(Selector,_objectSpread(_objectSpread({idString:"numOfRecruited",options:K,value:i("numOfRecruited")},n("numOfRecruited")),{},{onChangeHandler:function(e){return a("numOfRecruited",e)}}))]})]}),(0,y.jsxs)(P,{children:[(0,y.jsxs)(x.W,{children:[(0,y.jsx)("label",{htmlFor:"selectedAge",children:"모집 연령대"}),(0,y.jsx)(Selector,_objectSpread(_objectSpread({idString:"selectedAge",options:[{value:"TEENAGER",label:"10대"},{value:"TWENTIES",label:"20대"},{value:"THIRTIES",label:"30대"},{value:"FORTIES",label:"40대"},{value:"FIFTIES",label:"50대"},{value:"SIXTIES",label:"60대"}]},n("selectedAge")),{},{onChangeHandler:function(e){return a("selectedAge",e)},value:i("selectedAge")}))]}),(0,y.jsxs)(x.W,{children:[(0,y.jsx)("label",{htmlFor:"selectedNTRP",children:"모집 NTRP"}),(0,y.jsx)(Selector,_objectSpread(_objectSpread({idString:"selectedNTRP",options:[{value:"DEVELOPMENT",label:"NewBie (1.0 ~ 2.0)"},{value:"BEGINNER",label:"Beginner (2.5 ~ 3.5)"},{value:"INTERMEDIATE",label:"Intermediate (4.0 ~ 4.5)"},{value:"ADVANCED",label:"Advanced (5.0 ~ 5.5)"},{value:"PRO",label:"Pro (6.0 ~ 7.0)"}]},n("selectedNTRP")),{},{value:i("selectedNTRP"),onChangeHandler:function(e){a("selectedNTRP",e)}}))]})]}),(0,y.jsxs)(x.W,{children:[(0,y.jsx)("label",{htmlFor:"matchDate",children:"경기일"}),(0,y.jsx)(_.Z,{name:"matchDate",setState:a,defaultValue:i("matchDate")}),(0,y.jsx)(B,_objectSpread(_objectSpread({type:"text",id:"matchDate",value:"".concat(i("matchDate"))},n("matchDate")),{},{readOnly:!0}))]}),(0,y.jsxs)(P,{children:[(0,y.jsxs)(x.W,{children:[(0,y.jsx)("label",{htmlFor:"matchStartTime",children:"시작 시간"}),(0,y.jsx)(S.Z,{name:"matchStartTime",setState:a,type:[!0,!0],defaultValue:i("matchStartTime")}),(0,y.jsx)(B,_objectSpread(_objectSpread({type:"text",id:"matchStartTime"},n("matchStartTime")),{},{readOnly:!0}))]}),(0,y.jsxs)(x.W,{children:[(0,y.jsx)("label",{htmlFor:"matchEndTime",children:"종료 시간"}),(0,y.jsx)(S.Z,{name:"matchEndTime",setState:a,type:[!0,!0],defaultValue:i("matchEndTime")}),(0,y.jsx)(B,_objectSpread(_objectSpread({type:"text",id:"matchEndTime"},n("matchEndTime")),{},{readOnly:!0}))]})]}),(0,y.jsxs)(x.W,{children:[(0,y.jsx)("label",{htmlFor:"deadlineDnT",children:"모집 마감 기한"}),(0,y.jsxs)(P,{children:[(0,y.jsx)(_.Z,{name:"deadlineDate",setState:a,defaultValue:i("deadlineDate"),type:[!0,!0,!0]}),(0,y.jsx)(B,_objectSpread(_objectSpread({type:"text",id:"deadlineDate"},n("deadlineDate")),{},{readOnly:!0,onChange:function(e){a("deadlineDate",e.target.value),console.log(i("deadlineDate"))}})),(0,y.jsx)(S.Z,{name:"deadlineTime",setState:a,type:[!0,!1],defaultValue:i("deadlineTime")}),(0,y.jsx)(B,_objectSpread(_objectSpread({type:"text",id:"deadlineTime"},n("deadlineTime")),{},{readOnly:!0}))]})]}),(0,y.jsxs)(x.W,{children:[(0,y.jsx)("label",{htmlFor:"courtAddress",children:"경기장 주소"}),(0,y.jsx)("input",_objectSpread(_objectSpread({type:"text",id:"courtAddress",value:i("courtAddress")},n("courtAddress")),{},{onClick:function(e){e.preventDefault(),Q(!0)},readOnly:!0}))]}),(0,y.jsx)(P,{children:(0,y.jsxs)(x.W,{children:[(0,y.jsx)("label",{htmlFor:"isCourtBooked",children:"경기장 예약 여부"}),(0,y.jsx)(T.Z,_objectSpread({idString:"isCourtBooked",setState:a,defaultValue:i("isCourtBooked")},n("isCourtBooked")))]})}),(0,y.jsxs)(Z,{children:[(0,y.jsxs)(F,{children:["1인당"," ",Number.isInteger(i("courtFee")/G)?"".concat(i("courtFee")/G):"-"," ","원"]}),(0,y.jsxs)(x.W,{children:[(0,y.jsx)("label",{htmlFor:"courtFee",children:"구장 대여비"}),(0,y.jsx)("input",_objectSpread(_objectSpread({type:"number",id:"courtFee",className:"text-align-right",pattern:"^[0-9]+$",defaultValue:i("courtFee")},n("courtFee")),{},{onChange:function(e){return a("courtFee",parseInt(e.target.value))},onClick:function(){1===G&&d("warning","경기 유형을 먼저 선택해주세요!")}}))]})]}),(0,y.jsxs)(x.W,{children:[(0,y.jsx)("label",{htmlFor:"courtPhoto",children:"경기장 이미지"}),(0,y.jsxs)(R,{onClick:function(){z.current&&z.current.click()},children:[(0,y.jsx)(j.F,{width:"620px",height:"400px",children:(0,y.jsx)("img",{src:L||"/images/add-image-rectangle-00.png",alt:"경기장 이미지"})}),(0,y.jsx)("input",{id:"courtPhoto",type:"file",style:{display:"none"},ref:z,onChange:function(e){var t=e.target.files;if(t&&t.length>0){var n=t[0],r=new FileReader;r.readAsDataURL(n),r.onloadend=function(){M(r.result)},console.log(r),a("locationImg","".concat(r.result))}},accept:"image/*"})]})]}),(0,y.jsxs)(x.W,{children:[(0,y.jsx)("label",{htmlFor:"mainText",children:"본문 내용"}),(0,y.jsx)(A,_objectSpread({id:"mainText",onChange:function(e){return a("mainText",e.target.value)},placeholder:"내용을 입력하세요."},n("mainText")))]}),(0,y.jsxs)(P,{children:[(0,y.jsx)(k,{colorstyle:"is-black",type:"submit",children:"수정하기"}),(0,y.jsx)(k,{colorstyle:"is-black",onClick:h,children:"취소"})]})]})]})}var N=h.ZP.div.withConfig({displayName:"edit-matching__PageTitleArea",componentId:"sc-12ugfkt-0"})(["margin:"," auto;"],(0,p.hO)("50px")),C=h.ZP.form.withConfig({displayName:"edit-matching__PostMatchingForm",componentId:"sc-12ugfkt-1"})(["display:flex;flex-direction:column;.input__InputBox-sc-w6l3ed-0{.text-align-right{text-align:right;}.select__CustomSelect-sc-10zdv74-0{margin-bottom:0px;}}"]),P=h.ZP.div.withConfig({displayName:"edit-matching__HalfContainer",componentId:"sc-12ugfkt-2"})(["display:flex;flex-direction:row;gap:",";.input__InputBox-sc-w6l3ed-0{width:100%;.text-align-right{text-align:right;}.select__CustomSelect-sc-10zdv74-0{margin-bottom:0px;}}"],(0,p.hO)("20px")),Z=h.ZP.div.withConfig({displayName:"edit-matching__CourtFeeArea",componentId:"sc-12ugfkt-3"})(["position:relative;width:100%;"]),F=h.ZP.span.withConfig({displayName:"edit-matching__FeeForEachSpan",componentId:"sc-12ugfkt-4"})(["position:absolute;top:",";right:",";max-width:",";white-space:nowrap;overflow:hidden;font-family:",";color:",";"],(0,p.hO)("3px"),(0,p.hO)("5px"),(0,p.hO)("150px"),m.bH,m.Ie),k=(0,h.ZP)(f.h$).withConfig({displayName:"edit-matching__Buttons",componentId:"sc-12ugfkt-5"})(["margin:"," 0px;"],(0,p.hO)("30px")),R=h.ZP.div.withConfig({displayName:"edit-matching__ImageArea",componentId:"sc-12ugfkt-6"})(["display:flex;justify-content:center;cursor:pointer;width:100%;min-height:fit-content;max-width:",";max-height:",";border:none;margin-bottom:",";overflow:hidden;img{width:100%;max-height:",";border-radius:5px;border:1px solid ",";background:",";overflow:hidden;}div{max-height:",";overflow:hidden;}"],(0,p.hO)("620px"),(0,p.hO)("400px"),(0,p.hO)("30px"),(0,p.hO)("400px"),m.B_,m._2,(0,p.hO)("400px")),A=(0,h.ZP)(b.K).withConfig({displayName:"edit-matching__MainTextArea",componentId:"sc-12ugfkt-7"})(["max-width:",";height:",";"],(0,p.hO)("620px"),(0,p.hO)("400px")),B=h.ZP.input.withConfig({displayName:"edit-matching__HiddenInput",componentId:"sc-12ugfkt-8"})(["position:absolute;width:0px;height:0px;max-width:0px;max-height:0px;background-color:transparent;padding:0px;border:1px solid transparent;border-radius:0px;box-shadow:none;visibility:hidden;"])},4594:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/edit-matching",function(){return n(2513)}])},29:function(e,t,n){"use strict";function asyncGeneratorStep(e,t,n,a,r,i,o){try{var l=e[i](o),c=l.value}catch(e){n(e);return}l.done?t(c):Promise.resolve(c).then(a,r)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var i=e.apply(t,n);function _next(e){asyncGeneratorStep(i,a,r,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(i,a,r,_next,_throw,"throw",e)}_next(void 0)})}}n.d(t,{Z:function(){return _asyncToGenerator}})}},function(e){e.O(0,[885,536,333,19,791,216,662,160,695,774,888,179],function(){return e(e.s=4594)}),_N_E=e.O()}]);