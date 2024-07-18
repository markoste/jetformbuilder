(()=>{"use strict";const e=window.React,t=window.wp.i18n,n=window.wp.element,i=window.wp.components,o=window.wp.primitives,r=(0,e.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(o.Path,{d:"M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z"})),{useActionsEdit:a}=JetFBHooks,{ActionsAfterNewButtonSlotFill:l}=JetFBComponents,{Tools:c}=JetFBActions,s=()=>({id:c.getRandomID(),type:"verification",settings:{}}),d={base:{jfbApiVersion:2,name:"jf-verification"},settings:{render:function(){const{actions:o,setActions:c}=a(),d=(0,n.useMemo)(s,[]),u=o.some((({type:e})=>"verification"===e));return(0,e.createElement)(l.Fill,null,(0,e.createElement)(i.Tooltip,{text:u?(0,t.__)("You have already added the Verification action","jet-form-builder"):(0,t.__)("Click here to add Verification action","jet-form-builder"),delay:200,position:"top center"},(0,e.createElement)(i.Button,{onClick:()=>{c([{...d},...o])},disabled:u,variant:"tertiary",icon:r},(0,t.__)("Verification","jet-form-builder"))))},icon:"filter"}},{select:u,dispatch:m}=wp.data;let f;const p=()=>{const e=u("core/editor").getEditedPostAttribute("meta")||{};if(f===e._jf_actions||"string"!=typeof e._jf_actions)return;f=e._jf_actions;const t=JSON.parse(f),n=t.findIndex((({type:e})=>"verification"===e)),i=-1!==n,o=u("jet-forms/actions").getAction("verification");if(0<n&&i){const i=t[n];t.splice(n,1),m("core/editor").editPost({meta:{...e,_jf_actions:JSON.stringify([i,...t])}})}o.disabled!==i&&m("jet-forms/actions").editAction("verification",{disabled:i})},h="VERIFICATION.SUCCESS",g="VERIFICATION.FAILED",v="_jfb_verification_token",{BaseComputedField:b}=JetFBComponents,{sprintf:w,__:E}=wp.i18n;function _(){b.call(this),this.getSupportedActions=function(){return["register_user"]}}_.prototype=Object.create(b.prototype),_.prototype.getName=function(){return v},_.prototype.getLabel=function(){return E("Secure unique token","jet-form-builder")},_.prototype.getHelp=function(){return E("A computed field. Usually used to save it in the password fields","jet-form-builder")};const j=_;function y(){j.call(this),this.isSupported=function(e){var t;return"verification"===e.type&&!e.selfSettings.who_can||"register_user"===e.type&&Object.values(null!==(t=e.selfSettings.fields_map)&&void 0!==t?t:{}).includes(v)}}y.prototype=Object.create(j.prototype);const C=y,{BaseComputedField:F}=JetFBComponents,{sprintf:S,__:A}=wp.i18n;function x(){F.call(this),this.getSupportedActions=function(){return["verification"]}}x.prototype=Object.create(F.prototype),x.prototype.getName=function(){return"_jfb_verification_token_id"},x.prototype.getLabel=function(){return A("ID of secure unique token","jet-form-builder")},x.prototype.getHelp=function(){return A("A computed field from the Verification action.","jet-form-builder")};const k=x,{BaseComputedField:B}=JetFBComponents,{__:I}=wp.i18n;function V(){B.call(this),this.isSupported=function(e){return"verification"===e.type&&!e.selfSettings.who_can}}V.prototype=Object.create(B.prototype),V.prototype.getName=function(){return"_jfb_verification_url"},V.prototype.getLabel=function(){return I("Verification URL","jet-form-builder")},V.prototype.getHelp=function(){return I("A computed field from the Verification action. \nUsually used to send it using the Send by Email action.","jet-form-builder")};const T=V,O=(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",style:{color:"var( --wp-components-color-accent-darker-10, #9e1313 )"}},(0,e.createElement)("path",{fill:"currentColor",d:"M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1.13 9.38l.35-6.46H8.52l.35 6.46h2.26zm-.09 3.36c.24-.23.37-.55.37-.96 0-.42-.12-.74-.36-.97s-.59-.35-1.06-.35-.82.12-1.07.35-.37.55-.37.97c0 .41.13.73.38.96.26.23.61.34 1.06.34s.8-.11 1.05-.34z"})),{useLoopedAction:L,useActionsEdit:H,useActions:R,useEvents:N}=JetFBHooks,{ActionItemWrapper:J,ActionItemBody:P}=JetFBComponents,M=window.wp.hooks,z=window.wp.data,{__:D}=wp.i18n,U=function(){return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("h3",{style:{marginTop:0}},D("Here is a brief description of how this verification action works:","jet-form-builder")),(0,e.createElement)("p",null,D("1. The user sends the form for the first time. \nOn this stage, all actions that having the","jet-form-builder")+" ",(0,e.createElement)("code",null,"DEFAULT.PROCESS")," "+D("event are executed. \nAfter that, Save Record action is executed, even if it is not present \nin the list of actions. At the same time, a unique token in a hashed \nform is stored in a separate table in the database.","jet-form-builder")),(0,e.createElement)("p",null,D("2. The user receives an email containing a link to your \nsite with a key to the previously saved token. This can be achieved by sending \na letter to e-mail.","jet-form-builder")),(0,e.createElement)("p",null,D("3. After clicking the link, the plugin checks the key with \nthe token. If the result is positive, the actions with either no events \nor with the","jet-form-builder")+" ",(0,e.createElement)("code",null,"VERIFICATION.SUCCESS")," "+D("event are executed. If the result is negative, only actions with the","jet-form-builder")+" ",(0,e.createElement)("code",null,"VERIFICATION.FAILED")," "+D("event will run.","jet-form-builder")))},{apiFetch:G}=wp,Z=async function(e){return(await G(e)).map((({title:e,id:t})=>({value:t,label:e.rendered})))},{addQueryArgs:q}=wp.url,{useState:Y,useEffect:Q}=wp.element,W=function(e=[]){const[t,n]=Y([]),[i,o]=Y("");return Q((()=>{var t;i?Z({path:(t=i,q("/wp/v2/pages",{search:t}))}).then(n):n(e)}),[i,e.length]),[t,o]},K=JSON.parse('[{"type":"send_email","settings":{"mail_to":"form","from_field":"_verify_user_email","subject":"[%CT::SiteName%] Confirm your email","content":"Please confirm your registration on site %CT::SiteName%.\\n\\n<b>If this was a mistake, ignore this email and nothing will happen.</b>\\n\\nTo complete the registration click on the link:\\n%_jfb_verification_url%"},"events":["DEFAULT.PROCESS"]}]'),X=window.jfb.blocksToActions,$=window.jfb.actions;let{__experimentalToggleGroupControl:ee,__experimentalToggleGroupControlOption:te,ToggleGroupControl:ne,ToggleGroupControlOption:ie,BaseControl:oe,ComboboxControl:re,Button:ae,Flex:le,SelectControl:ce}=wp.components;ne=ne||ee,ie=ie||te;const{__:se}=wp.i18n,{useState:de,useEffect:ue,useMemo:me}=wp.element,{addQueryArgs:fe}=wp.url,{useDispatch:pe}=wp.data,{BaseHelp:he,BaseAction:ge,ToggleControl:ve}=JetFBComponents,{Tools:be,convertFlow:we}=JetFBActions,Ee=we(K),_e=(e,t)=>{const n=new Set(e.map((({value:e})=>e))),i=[];for(const e of t)n.has(e.value)||i.push(e);return[...e,...i]},je=function({onChangeSettingObj:t,settings:n}){var i,o;const[r,a]=(0,$.useActions)([]),l=(0,X.useFields)({withInner:!1}),{currentAction:c}=(0,$.useCurrentAction)(),s=me((()=>l.find((e=>"email"===e?.attributes?.field_type))),[]),[d,u]=de(Boolean(n.mail_to)),m=me((()=>r.findIndex((({events:e=[],type:t})=>-1!==e.indexOf(h)&&"redirect_to_page"===t))),[]),f=me((()=>r.findIndex((({events:e=[],type:t})=>-1!==e.indexOf(g)&&"redirect_to_page"===t))),[]),p=null!==(i=r[m])&&void 0!==i?i:{},v=null!==(o=r[f])&&void 0!==o?o:{},[b,w]=de([]),[E,_]=W(b),[j,y]=W(b),{openActionSettings:C}=pe("jet-forms/actions"),F=(e,t)=>{const n=new ge({type:"redirect_to_page"});return n.events=[t],e&&(n.selfSettings={redirect_type:"static_page",redirect_page:e}),a([...r.map((e=>c.id!==e.id?e:c)),n]),n};return ue((()=>{Z({path:"/wp/v2/pages"}).then((e=>w((t=>_e(t,e)))));const e=[n.success_page,n.failed_page].filter(Boolean);e.length&&Z({path:fe("/wp/v2/pages",{include:e})}).then((e=>w((t=>_e(t,e)))))}),[]),"admin"===n.who_can?null:(0,e.createElement)(e.Fragment,null,(0,e.createElement)(oe,{label:se("Email Field","jet-form-builder"),className:"jet-fb label-reset-margin"},(0,e.createElement)("div",{className:"jet-control-clear-full"},(0,e.createElement)(ce,{value:n.mail_to,onChange:e=>t({mail_to:e}),options:be.withPlaceholder(l),hideLabelFromVision:!0}),(0,e.createElement)(he,null,se("Send a verification link to the email address \nprovided in this field.","jet-form-builder")),!d&&Boolean(s)&&(0,e.createElement)(he,null,(0,e.createElement)(le,{justify:"flex-start",gap:1},se("(Suggestion) Choose the:","jet-form-builder"),(0,e.createElement)(ae,{isLink:!0,onClick:()=>{u(!0),t({mail_to:s.value})}},s.label),se("field","jet-form-builder"))))),n.mail_to&&(0,e.createElement)(ve,{checked:Boolean(n.custom_email),onChange:e=>t({custom_email:e}),help:se("If disabled, a standard verification email will be sent. \nIf enabled, you can create a custom verification email \nwith a separate Send Email action.","jet-form-builder")},(0,e.createElement)(le,{gap:3,justify:"flex-start"},se("Create custom verification email","jet-form-builder"),n.custom_email&&(0,e.createElement)(ae,{isLink:!0,onClick:()=>{const e=(()=>{const{list:[e]}=Ee;return e.selfSettings={...e.selfSettings,from_field:n.mail_to},a([...r.map((e=>c.id!==e.id?e:c)),{...e}]),e})();C({index:r.length,item:e})}},se("+ Add Send Email action","jet-form-builder")))),(0,e.createElement)(oe,{label:se("Success Page","jet-form-builder"),className:"control-flex"},(0,e.createElement)(le,{style:{flex:3.1},direction:"column"},-1!==m?(0,e.createElement)(e.Fragment,null,(0,e.createElement)(he,null,se("You have already configured the \nRedirect to Page action with the event:","jet-form-builder"),(0,e.createElement)("code",null,h)),(0,e.createElement)(le,null,(0,e.createElement)(ae,{icon:(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,e.createElement)("path",{d:"m19 7-3-3-8.5 8.5-1 4 4-1L19 7Zm-7 11.5H5V20h7v-1.5Z"})),onClick:()=>{C({index:m,item:p})}},se("Edit verification success redirect","jet-form-builder")))):(0,e.createElement)(e.Fragment,null,(0,e.createElement)(re,{value:n.success_page,onChange:e=>t({success_page:e}),options:E,hideLabelFromVision:!0,onFilterValueChange:_}),(0,e.createElement)(he,{style:{marginTop:"-1em"}},se("Select a page for the redirect after successful \nverification. By default, the user is redirected to the form page. Or","jet-form-builder")," ",(0,e.createElement)(ae,{isLink:!0,onClick:()=>{const e=F(n.success_page,h);C({index:r.length,item:{...e}})}},se("configure a separate Redirect to Page action","jet-form-builder")))))),(0,e.createElement)(oe,{label:se("Failed Page","jet-form-builder"),className:"control-flex"},(0,e.createElement)(le,{style:{flex:3.1},direction:"column"},-1!==f?(0,e.createElement)(e.Fragment,null,(0,e.createElement)(he,null,se("You have already configured the\nRedirect to Page action with the event:","jet-form-builder"),(0,e.createElement)("code",null,g)),(0,e.createElement)(le,null,(0,e.createElement)(ae,{icon:(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,e.createElement)("path",{d:"m19 7-3-3-8.5 8.5-1 4 4-1L19 7Zm-7 11.5H5V20h7v-1.5Z"})),onClick:()=>{C({index:f,item:v})}},se("Edit verification failed redirect","jet-form-builder")))):(0,e.createElement)(e.Fragment,null,(0,e.createElement)(re,{value:n.failed_page,onChange:e=>t({failed_page:e}),options:j,hideLabelFromVision:!0,onFilterValueChange:y}),(0,e.createElement)(he,{style:{marginTop:"-1em"}},se("Select a page for the redirect after verification \nfailure. By default, the user is redirected to the form page. Or","jet-form-builder")," ",(0,e.createElement)(ae,{isLink:!0,onClick:()=>{const e=F(n.failed_page,g);C({index:r.length,item:{...e}})}},se("configure a separate Redirect to Page action","jet-form-builder")))))))},{BaseHelp:ye,ActionModalHeaderSlotFill:Ce,ActionModalBackButton:Fe}=JetFBComponents,Se=(0,e.createElement)(o.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)(o.Path,{d:"M9 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM9 16a4.002 4.002 0 003.8-2.75H15V16h2.5v-2.75H19v-2.5h-6.2A4.002 4.002 0 005 12a4 4 0 004 4z",fillRule:"evenodd",clipRule:"evenodd"})),Ae={type:"verification",edit:function({onChangeSettingObj:o,settings:r}){var a,l;const[c,s]=(0,n.useState)(!1);return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(Ce.Fill,null,(0,e.createElement)(i.Button,{variant:"tertiary",isPressed:c,icon:(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,e.createElement)("path",{d:"M12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 8.75a1.5 1.5 0 01.167 2.99c-.465.052-.917.44-.917 1.01V14h1.5v-.845A3 3 0 109 10.25h1.5a1.5 1.5 0 011.5-1.5zM11.25 15v1.5h1.5V15h-1.5z"})),onClick:()=>s((e=>!e))})),c&&(0,e.createElement)(U,null),(0,e.createElement)(i.SelectControl,{label:(0,t.__)("Who can verify the submission","jet-form-builder"),value:null!==(a=r.who_can)&&void 0!==a?a:"",labelPosition:"side",options:[{value:"",label:(0,t.__)("User & Administrator","jet-form-builder")},{value:"admin",label:(0,t.__)("Administrator","jet-form-builder")}],onChange:e=>o({who_can:e})}),(0,e.createElement)(i.BaseControl,{label:(0,t.__)("Link Lifespan","jet-form-builder"),className:"jet-fb label-reset-margin"},(0,e.createElement)("div",{style:{flex:3}},(0,e.createElement)(i.TextControl,{value:null!==(l=r.lifespan)&&void 0!==l?l:4,onChange:e=>o({lifespan:e})}),(0,e.createElement)(ye,{style:{marginTop:"-4px"}},(0,t.__)('Indicates for how many hours a verification link \nwill be active. If you leave this field empty or enter "0", it means \nverification can be completed at any given time.',"jet-form-builder")))),(0,e.createElement)(je,{settings:r,onChangeSettingObj:o}))},label:(0,t.__)("Verification","jet-form-builder"),icon:Se,docHref:"https://jetformbuilder.com/features/email-verification/",provideEvents:()=>[h,g],fixed:!0,disableConditions:!0,category:"user"},{addComputedField:xe}=JetFBActions;window.JetFBComponents={...window.JetFBComponents,TokenComputedField:j,TokenIDComputedField:k,VerificationURLComputedField:T},xe(j,{isScoped:!0}),xe(C),xe(k),xe(T),(0,M.addFilter)("jet.fb.register.plugin.jf-actions-panel.before","jet-form-builder/verification",(function(e){return e.push(d),e})),(0,M.addFilter)("jet.fb.action.item","jet-form-builder/footer-notice-for-no-events",(n=>()=>{const{action:o}=L(),{updateActionObj:r}=H(),[a]=R(),l=N(o),c=a.some((e=>"verification"===e.type));return o?.events?.length||"verification"===o.type||!c||1>=l.length?(0,e.createElement)(n,null):(0,e.createElement)(J,null,(0,e.createElement)(P,null),(0,e.createElement)(i.CardFooter,null,(0,e.createElement)(i.Flex,{justify:"flex-start",style:{flex:1}},(0,e.createElement)(i.Icon,{size:20,icon:O}),(0,t.__)("Runs on verification","jet-form-builder")),(0,e.createElement)(i.Button,{isLink:!0,onClick:()=>r(o.id,{events:["DEFAULT.PROCESS"]}),style:{textDecoration:"none",borderBottom:"2px dotted var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9))"}},(0,t.__)("Run always","jet-form-builder"))))})),(0,z.subscribe)((()=>setTimeout(p,0))),(0,z.dispatch)("jet-forms/actions").registerAction(Ae)})();