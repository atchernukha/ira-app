(this["webpackJsonpira-app"]=this["webpackJsonpira-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(5),r=n.n(i),l=(n(10),n(3)),a=(n(11),n.p+"static/media/check2.74b1a50e.svg"),o=n(2),j=n(0);function u(e){var t=e.stepList,n=e.stepsStyles,c=e.step;return Object(j.jsx)("div",{style:n.stepsContainer,children:Object(j.jsx)("ul",{style:n.ul,children:t.map((function(e,t){return Object(j.jsx)(c,Object(o.a)({},e),t)}))})})}n(13);function b(e){var t=e.stepLabel,n=e.stepIcon,c=e.lastStep,s=e.firstStep,i="pre",r="post",l="point";switch(e.status){case"current":i+=" done",r+=" inactive",l+=" current";break;case"done":i+=" done",r+=" done",l+=" done";break;default:i+=" inactive",r+=" inactive",l+=" inactive"}return s&&(i+=" hide"),c&&(r+=" hide"),Object(j.jsx)("li",{children:Object(j.jsxs)("div",{className:"stepContainer",children:[Object(j.jsxs)("div",{className:"pointContainer",children:[Object(j.jsx)("div",{className:i}),Object(j.jsx)("div",{className:l,children:Object(j.jsx)("i",{className:n})}),Object(j.jsx)("div",{className:r})]}),Object(j.jsx)("div",{className:"stepLabel",children:t})]})})}function d(e){var t=e.stepList;return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:a,alt:"check"}),"IRA Application",Object(j.jsx)("h5",{children:"IRA Accounts provided by Fidelity Investments"})]}),Object(j.jsx)(u,{stepList:t,stepsStyles:{ul:{display:"flex",listStyle:"none"}},step:b})]})}var p={form:{display:"flex",alignItems:"flex-end",width:"100%",gap:"1em",marginBottom:"1.5em"},input:{border:"none",borderRadius:"4px",display:"block",height:"30px",fontSize:"16px",padding:"2px 10px",backgroundColor:"#f5f5f5"},select:{boxSizing:"content-box"},label:{},remove:{background:"#fff",color:"red",border:"none",height:"30px",fontSize:"24px"},submit:{background:"#fff",color:"green",border:"none",height:"30px",fontSize:"24px"},formGroup:{display:"flex",flexDirection:"column",justifyContent:"flex-end",gap:"4px"},percentage:{width:"60px"}};function x(e){var t=e.beneficiary;return Object(j.jsxs)("form",{style:p.form,children:[Object(j.jsxs)("div",{style:p.formGroup,children:[Object(j.jsx)("label",{type:p.label,children:"Full Name"}),Object(j.jsx)("input",{style:p.input,type:"text",name:"fullName",value:t.fullName,size:"20"})]}),Object(j.jsxs)("div",{style:p.formGroup,children:[Object(j.jsx)("label",{type:p.label,children:"Date of Birth"}),Object(j.jsx)("input",{style:p.input,type:"date",name:"birthday",value:t.birth})]}),Object(j.jsx)("div",{style:p.formGroup,children:Object(j.jsxs)("select",{style:Object(o.a)(Object(o.a)({},p.input),p.select),value:t.ssn,children:[Object(j.jsx)("option",{value:"SSN",children:"SSN"}),Object(j.jsx)("option",{value:"INN",children:"INN"})]})}),Object(j.jsx)("div",{style:p.formGroup,children:Object(j.jsx)("input",{style:p.input,type:"text",name:"optional",placeholder:"optional",value:t.optional,size:"5"})}),Object(j.jsxs)("div",{style:p.formGroup,children:[Object(j.jsx)("label",{type:p.label,children:"Relationship"}),Object(j.jsx)("input",{style:p.input,type:"text",name:"relationship",value:t.relationship,size:"5"})]}),Object(j.jsx)("div",{style:p.formGroup,children:Object(j.jsx)("input",{style:Object(o.a)(Object(o.a)({},p.input),p.percentage),type:"number",name:"part",max:"100",value:t.part,size:"4"})}),Object(j.jsx)("button",{style:p.remove,children:Object(j.jsx)("i",{class:"uil uil-times"})}),Object(j.jsx)("button",{style:p.submit,children:Object(j.jsx)("i",{class:"uil uil-check"})})]})}n(14);var h={padding:"2em",ul:{listStyleType:"none",margin:0,padding:0}};function O(e){var t=e.nextCheck;return Object(j.jsxs)("div",{style:h,children:[Object(j.jsx)("h3",{children:"BENEFICIARIES"}),Object(j.jsx)("br",{}),Object(j.jsx)("h3",{children:"Primary Beneficiaries"}),Object(j.jsx)("br",{}),Object(j.jsx)("ul",{style:h.ul,children:e.beneficiaries.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(x,{beneficiary:e},e.id)})}))}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:"Primary Total: 50%"}),Object(j.jsx)("br",{}),Object(j.jsxs)("label",{className:"switch",children:["Confingent Beneficiaies",Object(j.jsx)("input",{type:"checkbox"}),Object(j.jsx)("span",{className:"slider round"})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:function(){return t()},children:"Next"})]})}var f={li:{display:"flex",gap:"0.3em",fontSize:"18px"},done:{color:"green"},inactive:{color:"#e0e0e0"},current:{color:"#2f80ed"},stepLabel:{}};function v(e){var t=e.stepLabel,n=e.status;return Object(j.jsx)("div",{children:Object(j.jsxs)("li",{style:f.li,children:["done"===n&&Object(j.jsx)("i",{style:f.done,class:"uil uil-check"}),"current"===n&&Object(j.jsx)("i",{style:f.current,class:"uil uil-compact-disc"}),"inactive"===n&&Object(j.jsx)("i",{style:f.inactive,class:"uil uil-circle"}),Object(j.jsx)("div",{style:f.stepLabel,children:t})]})})}function m(e){var t=e.nextCheck,n=e.onCompleted;switch(e.currentCheck){case 0:return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Check 1"}),Object(j.jsx)("button",{onClick:function(){return t()},children:"Next"})]});case 1:return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Check 2"}),Object(j.jsx)("button",{onClick:function(){return t()},children:"Next"})]});case 2:return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Check 3"}),Object(j.jsx)("button",{onClick:function(){return t()},children:"Next"})]});case 3:return Object(j.jsx)("div",{children:Object(j.jsx)(O,{beneficiaries:[{id:1,fullName:"Tom Cruise",birth:"1980-01-01",ssn:"SSN",optional:"",relationship:"Trust",part:50,complited:!1},{id:2,fullName:"Elon Musk",birth:"1970-01-01",ssn:"SSN",optional:"",relationship:"Trust",part:50,complited:!1},{id:3,fullName:"Jeff Bezos",birth:"1965-01-01",ssn:"SSN",optional:"",relationship:"Trust",part:50,complited:!1}],nextCheck:t})});case 4:return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Check 5"}),Object(j.jsx)("button",{onClick:function(){return t()},children:"Next"})]});case 5:return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Check 6"}),Object(j.jsx)("button",{onClick:function(){return n()},children:"Next"})]})}}var y=[{stepLabel:"Personal Information"},{stepLabel:"Contact Information"},{stepLabel:"Relationship"},{stepLabel:"Beneficiaries"},{stepLabel:"Account Characteristics"},{stepLabel:"Review"}];function g(e){var t=Object(c.useState)((function(){return y.forEach((function(e){return e.status="inactive"})),y[0].status="current",0})),n=Object(l.a)(t,2),s=n[0],i=n[1];switch(e.currentStep){case 0:return Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)(u,{stepList:y,stepsStyles:{ul:{listStyle:"none"},stepsContainer:{display:"flex",float:"left",width:"270px",borderRight:"0.1rem #e0e0e0 solid"}},step:v}),Object(j.jsx)(m,{currentCheck:s,nextCheck:function(){var e=y.findIndex((function(e){return"current"===e.status}));e+1&&(y[e].status="done",e<y.length-1&&(++e,y[e].status="current",i((function(e){return e+1}))))},onCompleted:e})]});case 1:return Object(j.jsx)("div",{className:"content",children:Object(j.jsx)("h2",{children:"Step 2"})});case 2:return Object(j.jsx)("div",{children:Object(j.jsx)("h2",{children:"Step 3"})})}}var N=[{stepLabel:"IRA Application",stepIcon:"uil uil-file-copy-alt"},{stepLabel:"Risk Assessment",stepIcon:"uil uil-abacus"},{stepLabel:"Upload ID",stepIcon:"uil uil-scenery"}];var S=function(){var e=Object(c.useState)((function(){return N[0].firstStep=!0,N[N.length-1].lastStep=!0,N.forEach((function(e){return e.status="inactive"})),N[0].status="current",0})),t=Object(l.a)(e,2),n=t[0],s=t[1],i=function(){var e=N.findIndex((function(e){return"current"===e.status}));console.log("index:"+e),e+1&&(N[e].status="done",e<N.length-1&&(++e,N[e].status="current",s((function(e){return e+1})),console.log("step: "+n)))};return Object(j.jsxs)("div",{className:"grid-container",children:[Object(j.jsx)(d,{stepList:N}),Object(j.jsxs)("div",{children:[Object(j.jsx)(g,{currentStep:n,nextStep:i}),Object(j.jsx)("button",{onClick:function(){return i()},children:"NexStep"})]})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),C()}],[[15,1,2]]]);
//# sourceMappingURL=main.c4fc527d.chunk.js.map