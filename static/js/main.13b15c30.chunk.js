(this["webpackJsonpira-app"]=this["webpackJsonpira-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(11),i=n.n(r),l=(n(17),n(4)),a=(n(18),n.p+"static/media/IRA_logo.b14a3041.svg"),o=n(2),u=n(0);function d(e){var t=e.stepList,n=e.stepsStyles,s=e.step;return Object(u.jsx)("div",{style:n.stepsContainer,children:Object(u.jsx)("ul",{style:n.ul,children:t.map((function(e,t){return Object(u.jsx)(s,Object(o.a)({},e),t)}))})})}n(20);function j(e){var t=e.stepLabel,n=e.stepIcon,s=e.lastStep,c=e.firstStep,r="pre",i="post",l="point";switch(e.status){case"current":r+=" done",i+=" inactive",l+=" current";break;case"done":r+=" done",i+=" done",l+=" done";break;default:r+=" inactive",i+=" inactive",l+=" inactive"}return c&&(r+=" hide"),s&&(i+=" hide"),Object(u.jsx)("li",{children:Object(u.jsxs)("div",{className:"stepContainer",children:[Object(u.jsxs)("div",{className:"pointContainer",children:[Object(u.jsx)("div",{className:r}),Object(u.jsx)("div",{className:l,children:Object(u.jsx)("i",{className:n})}),Object(u.jsx)("div",{className:i})]}),Object(u.jsx)("div",{className:"stepLabel",children:t})]})})}function b(e){var t=e.stepList,n={logo:{display:"flex",fontSize:"1.66em",alignItems:"center",gap:"0.3em"},sub:{fontSize:"0.83em"}};return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsxs)("div",{style:n.sub,children:[Object(u.jsxs)("label",{style:n.logo,children:[Object(u.jsx)("img",{src:a,alt:"check",height:"36",width:"36"}),Object(u.jsx)("strong",{children:" IRA Application"})]}),"IRA Accounts provided by Fidelity Investments"]}),Object(u.jsx)(d,{stepList:t,stepsStyles:{ul:{display:"flex",listStyle:"none"}},step:j})]})}var p={li:{display:"flex",gap:"0.3em",fontSize:"18px"},stepLabel:{}},x=function(e){var t=e.stepLabel,n=e.status;return Object(u.jsx)("div",{children:Object(u.jsxs)("li",{style:Object(o.a)(Object(o.a)({},p.li),"current"===n&&{background:"#f3f3f3"}),children:["\xa0\xa0","done"===n&&Object(u.jsx)("i",{style:{color:"#18c23d"},class:"uil uil-check"}),"current"===n&&Object(u.jsx)("i",{style:{color:"#2f80ed"},class:"uil uil-compact-disc"}),"inactive"===n&&Object(u.jsx)("i",{style:{color:"#c9c4c4"},class:"uil uil-circle"}),Object(u.jsx)("div",{style:p.stepLabel,children:t})]})})},m=n(9),h=n(12),f=n(6),O=["label","register","name","required"],v=["label","register","options","name","required"],g=["control","label","name","required"],y={input:{border:"none",borderRadius:"4px",display:"block",height:"30px",fontSize:"16px",padding:"2px 10px",backgroundColor:"#f5f5f5"},select:{boxSizing:"content-box"},label:{},formGroup:{display:"flex",flexDirection:"column",justifyContent:"flex-end",gap:"4px"},percentage:{width:"60px"}},N=function(e){var t=e.label,n=e.register,s=e.name,c=e.required,r=Object(m.a)(e,O);return Object(u.jsxs)("div",{style:y.formGroup,children:[Object(u.jsx)("label",{style:y.label,children:t}),Object(u.jsx)("input",Object(o.a)(Object(o.a)({style:y.input},n(s,c)),r))]})},S=function(e){var t=e.label,n=e.register,s=e.options,c=e.name,r=e.required,i=Object(m.a)(e,v);return Object(u.jsxs)("div",{style:y.formGroup,children:[Object(u.jsx)("label",{style:y.label,children:t}),Object(u.jsx)("select",Object(o.a)(Object(o.a)(Object(o.a)({style:Object(o.a)(Object(o.a)({},y.input),y.select)},n(c,r)),i),{},{children:s.map((function(e){return Object(u.jsx)("option",{value:e,children:e},e)}))}))]})},C=function(e){var t=e.control,n=e.label,s=e.name,c=e.required,r=Object(m.a)(e,g);return Object(u.jsx)(f.a,Object(o.a)(Object(o.a)({control:t,label:n,name:s,rules:c},r),{},{render:function(e){var t=e.field;return Object(u.jsxs)("div",{style:y.formGroup,children:[Object(u.jsx)("label",{style:y.label,children:n}),Object(u.jsx)(h.a,{defaultValue:r.defaultValue,decimalScale:1,style:Object(o.a)(Object(o.a)({},y.input),y.percentage),suffix:"%",onValueChange:function(e){return t.onChange(e.floatValue)}})]})}}))},I={formItem:{display:"flex",alignItems:"flex-end",width:"100%",gap:"1em",marginBottom:"1.5em"},remove:{background:"#fff",color:"#f35361",border:"none",height:"30px",fontSize:"24px"},submit:{background:"#fff",color:"#18c23d",border:"none",height:"30px",fontSize:"24px"},check:{}},k={formGroup:{display:"flex",alignItems:"flex-end",gap:"14px"},primaryTotal:{color:"#df960e",backgroundColor:"#fcf7e8",width:"18%",float:"right"},messageGreen:{color:"#18c23d",backgroundColor:"#e5f8e9"},messageRed:{color:"#f35361",backgroundColor:"#fcecef"}};function L(e){var t=e.nextCheck,n=Object(f.c)({defaultValues:{formItems:[{fullName:"Tom Cruise",birth:"1980-01-01",ssn:"SSN",optional:"",relationship:"Trust",part:40},{fullName:"Elon Musk",birth:"1970-01-01",ssn:"SSN",optional:"",relationship:"Trust",part:20},{fullName:"Jeff Bezos",birth:"1965-01-01",ssn:"SSN",optional:"",relationship:"Trust",part:30}]},mode:"onChange"}),c=n.register,r=n.formState.errors,i=n.control,a=n.handleSubmit,d=Object(f.d)({control:i}),j=(d.dirtyFields,d.isValid),b=Object(f.b)({name:"formItems",control:i}),p=b.fields,x=b.remove,m=b.append,h=Object(s.useState)(0),O=Object(l.a)(h,2),v=O[0],g=O[1],y=function(){m({part:0})},L=function(e){var t=e.control,n=Object(f.e)({control:t,name:"formItems"});return g(n.reduce((function(e,t){var n=parseInt(t.part);return isNaN(n)?0:n+e}),0)),Object(u.jsx)("div",{style:Object(o.a)(Object(o.a)(Object(o.a)({},k.primaryTotal),100<v&&k.messageRed),100===v&&k.messageGreen),children:Object(u.jsxs)("div",{children:["Primary Total: ",v,"%"]})})};return Object(u.jsxs)("form",{style:k,onSubmit:a((function(e){console.log(e),t()})),children:[Object(u.jsx)("h3",{children:"BENEFICIARIES"}),Object(u.jsx)("br",{}),Object(u.jsx)("h3",{children:"Primary Beneficiaries"}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{children:p.map((function(e,t){var n,s,l,a,o,d,b,m,h,f,O,v;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{style:I.formItem,children:[Object(u.jsx)(N,{label:"Full Name",register:c,name:"formItems[".concat(t,"].fullName"),required:{required:{value:!0,message:"Full Name is required."},maxLength:{value:30,message:"Full Name can be max 30 characters long."}},defaultValue:e.fullName,placeholder:"John Doe"}),Object(u.jsx)(N,{label:"Date of Birth",register:c,name:"formItems[".concat(t,"].birth"),required:{required:{value:!0,message:"Enter Date of Birthday."}},defaultValue:e.birth,type:"date"}),Object(u.jsx)(S,{register:c,name:"formItems[".concat(t,"].ssn"),required:{required:{value:!0,message:"SSN is required."}},defaultValue:e.ssn,options:["SSN","INN"]}),Object(u.jsx)(N,{register:c,name:"formItems[".concat(t,"].optional"),required:{maxLength:{value:40,message:"optional can be max 40 characters long."}},defaultValue:e.optional,placeholder:"optional",size:"5"}),Object(u.jsx)(S,{register:c,name:"formItems[".concat(t,"].relationship"),required:{required:{value:!0,message:"Select Relationship."}},defaultValue:e.relationship,label:"Relationship",options:["Trust","noTrust"]}),Object(u.jsx)(C,{control:i,name:"formItems[".concat(t,"].part"),required:{required:{value:!0,message:"Enter Percentage."},max:{value:100,message:"Percentage can be max 100 percent."},min:{value:0,message:"Percentage out of range."}},defaultValue:e.part,label:"Percentage"}),Object(u.jsx)("button",{type:"button",style:I.remove,onClick:function(){return p.length>1&&x(t)},children:Object(u.jsx)("i",{class:"uil uil-times"})}),j&&p.length===t+1&&Object(u.jsx)("button",{type:"button",style:I.submit,onClick:y,children:Object(u.jsx)("i",{class:"uil uil-check"})})]},e.id),Object(u.jsxs)("div",{style:k.messageRed,children:[null===r||void 0===r||null===(n=r.formItems)||void 0===n||null===(s=n[t])||void 0===s||null===(l=s.fullName)||void 0===l?void 0:l.message,null===r||void 0===r||null===(a=r.formItems)||void 0===a||null===(o=a[t])||void 0===o||null===(d=o.birth)||void 0===d?void 0:d.message,null===r||void 0===r||null===(b=r.formItems)||void 0===b||null===(m=b[t])||void 0===m||null===(h=m.ssn)||void 0===h?void 0:h.message,null===r||void 0===r||null===(f=r.formItems)||void 0===f||null===(O=f[t])||void 0===O||null===(v=O.part)||void 0===v?void 0:v.message]})]})}))}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{style:{width:"88%"},children:Object(u.jsx)(L,{control:i})}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{style:k.formGroup,children:[Object(u.jsx)("strong",{children:"Confingent Beneficiaies"}),Object(u.jsxs)("label",{className:"switch",children:[Object(u.jsx)("input",Object(o.a)({type:"checkbox"},c("confident"))),Object(u.jsx)("span",{className:"slider round"})]})]}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{className:"button",type:"submit",value:"Next",disabled:!(j&&!(v-100))})]})}function q(e){var t=e.currentCheck,n=e.nextCheck,s=e.onCompleted;switch(t){case 0:return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Check 1"}),Object(u.jsx)("button",{className:"button",onClick:function(){return n()},children:"Next"})]});case 1:return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Check 2"}),Object(u.jsx)("button",{className:"button",onClick:function(){return n()},children:"Next"})]});case 2:return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Check 3"}),Object(u.jsx)("button",{className:"button",onClick:function(){return n()},children:"Next"})]});case 3:return Object(u.jsx)("div",{children:Object(u.jsx)(L,{nextCheck:n})});case 4:return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Check 5"}),Object(u.jsx)("button",{className:"button",onClick:function(){return n()},children:"Next"})]});case 5:return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Check 6"}),Object(u.jsx)("button",{className:"button",onClick:function(){return s()},children:"Next"})]})}}var R=[{stepLabel:"Personal Information"},{stepLabel:"Contact Information"},{stepLabel:"Relationship"},{stepLabel:"Beneficiaries"},{stepLabel:"Account Characteristics"},{stepLabel:"Review"}];function w(e){var t=e.currentStep,n=e.nextStep,c=Object(s.useState)((function(){return R.forEach((function(e){return e.status="inactive"})),R[0].status="current",0})),r=Object(l.a)(c,2),i=r[0],a=r[1];switch(t){case 0:return Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)(d,{stepList:R,stepsStyles:{ul:{listStyle:"none",fontSize:"1.5rem",lineHeight:"2.5",paddingInline:"0px"},stepsContainer:{width:"270px",borderRight:"0.1rem #e0e0e0 solid"}},step:x}),Object(u.jsx)("div",{style:{padding:"2em"},children:Object(u.jsx)(q,{currentCheck:i,nextCheck:function(){var e=R.findIndex((function(e){return"current"===e.status}));e+1&&(R[e].status="done",e<R.length-1&&(++e,R[e].status="current",a((function(e){return e+1}))))},onCompleted:n})})]});case 1:return Object(u.jsx)("div",{className:"content",children:Object(u.jsxs)("div",{style:{padding:"2em"},children:[Object(u.jsx)("h2",{children:"Step 2"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{className:"button",onClick:function(){return n()},children:"NexStep"})]})});case 2:return Object(u.jsx)("div",{className:"content",children:Object(u.jsxs)("div",{style:{padding:"2em"},children:[Object(u.jsx)("h2",{children:"Step 3"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{className:"button",onClick:function(){return n()},children:"NexStep"})]})})}}var V=[{stepLabel:"IRA Application",stepIcon:"uil uil-file-copy-alt"},{stepLabel:"Risk Assessment",stepIcon:"uil uil-abacus"},{stepLabel:"Upload ID",stepIcon:"uil uil-scenery"}];var T=function(){var e=Object(s.useState)((function(){return V[0].firstStep=!0,V[V.length-1].lastStep=!0,V.forEach((function(e){return e.status="inactive"})),V[0].status="current",0})),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{className:"grid-container",children:[Object(u.jsx)(b,{stepList:V}),Object(u.jsx)("div",{children:Object(u.jsx)(w,{currentStep:n,nextStep:function(){var e=V.findIndex((function(e){return"current"===e.status}));console.log("index:"+e),e+1&&(V[e].status="done",e<V.length-1&&(++e,V[e].status="current",c((function(e){return e+1})),console.log("step: "+n)))}})})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(T,{})}),document.getElementById("root")),z()}},[[22,1,2]]]);
//# sourceMappingURL=main.13b15c30.chunk.js.map