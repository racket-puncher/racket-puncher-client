(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[607],{5002:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return EditMatching}});var l=n(7294),i=n(1150),o=n(3281),a=n(8633),c=n(528),s=n(9630),r=n(7396),d=n(3162),u=n(8381),h=n(546),g=n(2319),x=n(2361),p=n(846),m=n(9970),f=n(5893);function EditMatching(){var e=(0,l.useState)(""),t=e[0],n=e[1],i=(0,l.useState)(""),o=i[0],a=i[1],r=(0,l.useState)([{value:1,label:"경기 유형을 먼저 선택해주세요."}]),h=r[0],N=r[1],P=(0,l.useState)(0),k=P[0],O=P[1],selectMatchType=function(e){a(e),e.includes("단식")?N([{value:1,label:"1 명"}]):N([{value:1,label:"1 명"},{value:2,label:"2 명"},{value:3,label:"3 명"}])},I=(0,l.useState)(""),T=I[0],W=I[1],Z=(0,l.useState)(""),A=Z[0],B=Z[1],E=(0,l.useState)(null),M=E[0],R=E[1],D=(0,l.useState)(""),L=D[0],z=D[1],H=(0,l.useState)(""),K=H[0],X=H[1],$=(0,l.useState)(""),q=$[0];$[1];var G=(0,l.useState)(""),J=G[0],Q=G[1],U=(0,l.useState)(null),V=U[0],Y=U[1],ee=(0,l.useState)(0),et=ee[0],en=ee[1],el=(0,l.useState)(1),ei=el[0],eo=el[1],ea=(0,l.useState)(0),ec=ea[0],es=ea[1],er=(0,l.useState)(null),ed=er[0],eu=er[1],eh=(0,l.useState)(""),eg=eh[0],ex=eh[1],ep=(0,l.useRef)(null),em=(0,l.useState)(!1),ef=em[0],ej=em[1],submitFunction=function(){console.log("제목: "+"".concat(t)),console.log("경기 유형: "+"".concat(o)),console.log("모집 인원: "+"".concat(k)),console.log("모집 연령대: "+"".concat(T)),console.log("모집 NTRP: "+"".concat(A)),console.log("경기 날짜: "+"".concat(M)),console.log("경기 시작 시간: "+"".concat(L)),console.log("경기 종료 시간: "+"".concat(K)),console.log("모집 마감 기한: "+"".concat(q)),console.log("구장 주소: "+"".concat(J)),console.log("구장 예약 여부 "+"".concat(V)),console.log("구장 예약비: "+"".concat(et)),console.log("인원수: "+"".concat(ei)),console.log("구장 이미지: "+"".concat(ed.name)),console.log("본문: "+"".concat(eg))};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(m.Z,{isOpen:ef,toggleDrawer:function(){return ej(function(e){return!e})},setState:Q}),(0,f.jsx)(j,{children:(0,f.jsx)(c.B,{children:"매칭 글 수정"})}),(0,f.jsxs)(b,{onSubmit:function(e){e.preventDefault(),submitFunction()},children:[(0,f.jsxs)(s.W,{children:[(0,f.jsx)("label",{htmlFor:"title",children:"제목"}),(0,f.jsx)("input",{id:"title",type:"text",onChange:function(e){return n(e.target.value)}})]}),(0,f.jsxs)(v,{children:[(0,f.jsxs)(s.W,{children:[(0,f.jsx)("label",{htmlFor:"typeOfMatch",children:"경기 유형"}),(0,f.jsx)(d.A,{id:"typeOfMatch",options:[{value:"단식",label:"단식"},{value:"혼성 단식",label:"혼성 단식"},{value:"복식",label:"복식"},{value:"혼성 복식",label:"혼성 복식"}],onSelect:function(e){selectMatchType(e),eo(e.includes("단")?2:4)}})]}),(0,f.jsxs)(s.W,{children:[(0,f.jsx)("label",{htmlFor:"numOfAllPlayers",children:"모집 인원"}),(0,f.jsx)(d.A,{id:"numOfAllPlayers",options:h,onSelect:function(e){return O(e)}})]})]}),(0,f.jsxs)(v,{children:[(0,f.jsxs)(s.W,{children:[(0,f.jsx)("label",{htmlFor:"postAge",children:"모집 연령대"}),(0,f.jsx)(d.A,{id:"postAge",options:[{value:"10 대",label:"10 대"},{value:"20 대",label:"20 대"},{value:"30 대",label:"30 대"},{value:"40 대",label:"40 대"},{value:"50 대",label:"50 대"},{value:"60 대",label:"60 대"}],onSelect:function(e){return W(e)}})]}),(0,f.jsxs)(s.W,{children:[(0,f.jsx)("label",{htmlFor:"postNTRP",children:"모집 NTRP"}),(0,f.jsx)(d.A,{id:"postNTRP",options:[{value:"NewBie",label:"NewBie (1.0 ~ 2.0)"},{value:"Beginner",label:"Beginner (2.5 ~ 3.5)"},{value:"Intermediate",label:"Intermediate (4.0 ~ 4.5)"},{value:"Intermediate",label:"Advanced (5.0 ~ 5.5)"},{value:"Pro",label:"Pro (6.0 ~ 7.0)"}],onSelect:function(e){B(e)}})]})]}),(0,f.jsxs)(s.W,{children:[(0,f.jsx)("label",{htmlFor:"matchDate",children:"경기일"}),(0,f.jsx)(g.Z,{id:"matchDate",setState:R})]}),(0,f.jsxs)(v,{children:[(0,f.jsxs)(s.W,{children:[(0,f.jsx)("label",{htmlFor:"startTime",children:"시작 시간"}),(0,f.jsx)(x.Z,{id:"startTime",setState:z,type:[!0,!0]})]}),(0,f.jsxs)(s.W,{children:[(0,f.jsx)("label",{htmlFor:"endTime",children:"종료 시간"}),(0,f.jsx)(x.Z,{id:"endTime",setState:X,type:[!0,!0]})]})]}),(0,f.jsxs)(s.W,{children:[(0,f.jsx)("label",{htmlFor:"deadline",children:"모집 마감 기한"}),(0,f.jsx)(d.A,{id:"deadline"})]}),(0,f.jsxs)(s.W,{children:[(0,f.jsx)("label",{htmlFor:"courtLocation",children:"구장 주소"}),(0,f.jsx)(w,{id:"courtLocation",onClick:function(e){e.preventDefault(),ej(!0)}})]}),(0,f.jsx)(v,{children:(0,f.jsxs)(s.W,{children:[(0,f.jsx)("label",{htmlFor:"confirmReservation",children:"경기장 예약 여부"}),(0,f.jsx)(p.Z,{id:"confirmReservation",setState:Y})]})}),(0,f.jsxs)(_,{children:[(0,f.jsxs)(S,{children:["1인당 ","".concat(ec)," 원"]}),(0,f.jsxs)(s.W,{children:[(0,f.jsx)("label",{htmlFor:"courtFee",children:"구장 대여비"}),(0,f.jsx)("input",{type:"text",id:"courtFee",className:"text-align-right",pattern:"^[0-9]+$",onChange:function(e){en(Number(e.target.value)),es(Math.round(Number(e.target.value)/ei))},onClick:function(){1===ei&&alert("경기 유형을 먼저 선택해주세요!")}})]})]}),(0,f.jsxs)(s.W,{children:[(0,f.jsx)("label",{htmlFor:"courtPhoto",children:"구장 이미지"}),(0,f.jsxs)(C,{onClick:function(){ep.current&&ep.current.click()},children:[(0,f.jsx)(u.F,{width:"580px",height:"380px",children:(0,f.jsx)("img",{src:"/images/add-image-rectangle-00.png",alt:"add-image"})}),(0,f.jsx)("input",{type:"file",style:{display:"none"},ref:ep,onChange:function(e){var t=e.target.files;if(t&&t.length>0){var n=t[0];console.log(n),eu(n)}},accept:"image/*"})]})]}),(0,f.jsxs)(s.W,{children:[(0,f.jsx)("label",{htmlFor:"postContent",children:"본문 내용"}),(0,f.jsx)(F,{id:"postContent",value:eg,onChange:function(e){return ex(e.target.value)},placeholder:"내용을 입력하세요."})]}),(0,f.jsx)(y,{colorstyle:"is-black",type:"submit",children:"등록하기"})]})]})}var j=i.ZP.div.withConfig({displayName:"edit-matching__PageTitleArea",componentId:"sc-12ugfkt-0"})(["margin:"," auto;"],(0,o.hO)("50px")),b=i.ZP.form.withConfig({displayName:"edit-matching__PostMatchingForm",componentId:"sc-12ugfkt-1"})(["display:flex;flex-direction:column;.input__InputBox-sc-w6l3ed-0{.text-align-right{text-align:right;}.select__CustomSelect-sc-10zdv74-0{margin-bottom:0px;}}"]),v=i.ZP.div.withConfig({displayName:"edit-matching__HalfContainer",componentId:"sc-12ugfkt-2"})(["display:flex;flex-direction:row;gap:",";.input__InputBox-sc-w6l3ed-0{width:100%;.text-align-right{text-align:right;}.select__CustomSelect-sc-10zdv74-0{margin-bottom:0px;}}"],(0,o.hO)("20px")),_=i.ZP.div.withConfig({displayName:"edit-matching__CourtFeeArea",componentId:"sc-12ugfkt-3"})(["position:relative;width:100%;"]),S=i.ZP.span.withConfig({displayName:"edit-matching__FeeForEachSpan",componentId:"sc-12ugfkt-4"})(["position:absolute;top:",";right:",";max-width:",";white-space:nowrap;overflow:hidden;font-family:",";color:",";"],(0,o.hO)("3px"),(0,o.hO)("5px"),(0,o.hO)("150px"),a.bH,a.Ie),w=(0,i.ZP)(r.LE).withConfig({displayName:"edit-matching__InputStyleBtn",componentId:"sc-12ugfkt-5"})(["height:",";border:1px solid ",";background:",";border-radius:5px;padding:0 15px;text-align:center;&:focus{border:1px solid ",";outline:none;}"],(0,o.hO)("50px"),a.B_,a._2,a.K6),y=(0,i.ZP)(r.h$).withConfig({displayName:"edit-matching__SubmitBtn",componentId:"sc-12ugfkt-6"})(["margin:"," 0px;"],(0,o.hO)("30px")),C=i.ZP.div.withConfig({displayName:"edit-matching__ImageSection",componentId:"sc-12ugfkt-7"})(["display:flex;justify-content:center;cursor:pointer;width:100%;height:100%;max-width:",";max-height:",";border:none;img{border-radius:5px;border:1px solid ",";background:",";overflow:hidden;}"],(0,o.hO)("580px"),(0,o.hO)("380px"),a.B_,a._2),F=(0,i.ZP)(h.K).withConfig({displayName:"edit-matching__MainTextArea",componentId:"sc-12ugfkt-8"})(["max-width:",";height:",";"],(0,o.hO)("580px"),(0,o.hO)("380px"))},4594:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/edit-matching",function(){return n(5002)}])}},function(e){e.O(0,[885,184,228,791,216,160,909,774,888,179],function(){return e(e.s=4594)}),_N_E=e.O()}]);