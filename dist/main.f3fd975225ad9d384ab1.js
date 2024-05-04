"use strict";(self.webpackChunkto_do_list=self.webpackChunkto_do_list||[]).push([[179],{497:(t,e,n)=>{const r=n.p+"d96911bcc54b2e95084b.svg",a=n.p+"867b836898816cccd69a.svg",o=n.p+"f8c26b1dc6d15fc61f84.svg";function i(t,e){const n=e||{id:Date.now(),title:t,tasks:[]};return n.addTask=function(t){this.tasks.push(t)},n.deleteTask=function(t){this.tasks=this.tasks.filter((e=>e.id!==t.id))},n}let s,c,u=[];function d(t){u.push(t)}function l(){return s}function m(t){t&&(s=t)}function h(){return c}function f(){return u}function g(){let t=JSON.stringify(u);localStorage.setItem("savedProjects",t)}function w(t){let e=JSON.parse(localStorage.getItem("savedProjects"))||[];const n={id:t.id,title:t.title,tasks:t.tasks};e.push(n);let r=JSON.stringify(e);localStorage.setItem("savedProjects",r)}const b=document.querySelector(".tasks-container"),p=document.querySelector(".project-form"),y=document.querySelector(".project-lists"),v=document.getElementById("create-modal"),k=document.getElementById("edit-modal"),S=document.querySelector(".overlay"),M=document.querySelector(".project-title");function x(t){const e=l(),n=h(),r=P("div",{className:"task-item",id:t.id}),i=P("div",{className:"task-item-left"}),s=P("div",{className:"task-item-right"}),d=P("input",{type:"checkbox",class:"task-check"}),m=P("span",{className:"task-name",textContent:t.title});i.appendChild(d),i.appendChild(m);const f=P("div",{className:"due-date",textContent:t.dueDate}),w=P("div",{className:"task-btns"}),p=C("edit-btn",a,"",(()=>function(t){if(k){const e=t.id;document.getElementById("edit-title").value=t.title,document.getElementById("edit-descr").value=t.description,document.getElementById("edit-due-date").value=t.dueDate,document.getElementById("edit-priority").value=t.priority,k.classList.remove("hidden"),S.classList.remove("hidden"),document.getElementById("edit-task-btn").addEventListener("click",(t=>{t.preventDefault(),function(t){const e=document.getElementById("edit-title").value,n=document.getElementById("edit-descr").value,r=document.getElementById("edit-due-date").value,a=document.getElementById("edit-priority").value,o=l().tasks.find((e=>e.id==t));o?(e&&(o.title=e),n&&(o.description=n),r&&(o.dueDate=r),a&&(o.priority=a),function(t,e){D();const n=document.getElementById(e),r=n.querySelector(".task-name"),a=n.querySelector(".due-date");r.textContent=t.title,a.textContent=t.dueDate}(o,t)):console.error("Task not found")}(e)}))}}(t))),y=C("delete-btn",o,"",(()=>{var r;(function(t){u.find((t=>t.id=c.id)).deleteTask(t)})(t),e.id!==n.id&&function(t,e){t.deleteTask(e)}(e,t),e.id===n.id&&e.id!==t.projectID&&function(t,e){t.deleteTask(e)}((r=t.projectID,u.find((t=>t.id===r))),t),function(t){const e=t.id,n=document.getElementById(e);b.removeChild(n)}(t),g()}));w.appendChild(p),w.appendChild(y),s.appendChild(f),s.appendChild(w),s.appendChild(w),r.appendChild(i),r.appendChild(s),b.appendChild(r)}function P(t,e,n){const r=document.createElement(t);for(const t in e)r[t]=e[t];return n&&(r.textContent=n),r}function C(t,e,n,r){const a=document.createElement("button");if(a.className=t,e){const t=document.createElement("img");t.src=e,t.className="btn-icon",a.appendChild(t)}if(n){const t=document.createTextNode(n);a.appendChild(t)}return a.addEventListener("click",r),a}function D(){k&&(k.classList.add("hidden"),S.classList.add("hidden"))}function E(t){let e=h();if(t.id!==e.id){const e=P("li",{className:"project-list-item",id:t.id}),n=document.createElement("button");n.className="list-item-btn";const a=document.createElement("div");a.className="list-item-container";const i=document.createElement("img");i.classList.add("list-icon","inbox-icon"),i.src=r;const s=document.createElement("span");s.className="list-item-name",s.innerHTML=t.title;const c=C("project-delete-btn",o,"",(()=>{(function(t){let e=f();const n=h(),r=t.id;t.tasks.forEach((t=>{n.deleteTask(t)})),g(),e=e.filter((t=>t.id!==r)),function(t){let e=JSON.parse(localStorage.getItem("savedProjects"))||[];const n=t.id;e=e.filter((t=>t.id!==n));let r=JSON.stringify(e);localStorage.setItem("savedProjects",r)}(t)})(t),function(t){const e=t.id,n=document.getElementById(e);y.removeChild(n)}(t)}));n.appendChild(a),a.appendChild(i),a.appendChild(s),e.appendChild(n),e.appendChild(c),y.appendChild(e),n.addEventListener("click",(()=>T(t)))}}function T(t){const e=t.title;let n;M.textContent=e,M!==t.title&&(M.textContent=e),b.innerHTML="",m(t),t.tasks&&(n=t.tasks),n&&n.forEach((t=>{x(t)}))}function N(){v?(v.classList.add("hidden"),S.classList.add("hidden")):console.error("Task form element not found"),v.querySelector(".task-form").reset()}function q(){p?p.classList.remove("hidden"):console.error("Project form element not found")}function W(){p.reset(),p?p.classList.add("hidden"):console.error("Project form element not found")}document.querySelector(".inbox-btn").addEventListener("click",(function(){let t=h();const e=t.title;M.textContent=e,T(t)})),v.querySelector(".cancel-btn").addEventListener("click",N),k.querySelector(".cancel-btn").addEventListener("click",D);const j={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function L(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const O={date:L({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:L({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:L({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},Y={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function I(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,a=n?.width?String(n.width):e;r=t.formattingValues[a]||t.formattingValues[e]}else{const e=t.defaultWidth,a=n?.width?String(n.width):t.defaultWidth;r=t.values[a]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function B(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let u;return u=t.valueCallback?t.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u,{value:u,rest:e.slice(i.length)}}}var H;const F={code:"en-US",formatDistance:(t,e,n)=>{let r;const a=j[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:O,formatRelative:(t,e,n,r)=>Y[t],localize:{ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:I({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:I({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:I({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:I({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:I({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(H={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(H.matchPattern);if(!n)return null;const r=n[0],a=t.match(H.parsePattern);if(!a)return null;let o=H.valueCallback?H.valueCallback(a[0]):a[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(r.length)}}),era:B({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:B({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:B({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:B({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:B({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};let z={};function A(){return z}Math.pow(10,8);const Q=6048e5,J=864e5;function G(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function X(t){const e=G(t);return e.setHours(0,0,0,0),e}function $(t){const e=G(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function R(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function U(t){const e=G(t);return function(t,e){const n=X(t),r=X(e),a=+n-$(n),o=+r-$(r);return Math.round((a-o)/J)}(e,function(t){const e=G(t),n=R(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}(e))+1}function V(t,e){const n=A(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=G(t),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function _(t){return V(t,{weekStartsOn:1})}function K(t){const e=G(t),n=e.getFullYear(),r=R(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=_(r),o=R(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const i=_(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function Z(t){const e=G(t),n=+_(e)-+function(t){const e=K(t),n=R(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),_(n)}(e);return Math.round(n/Q)+1}function tt(t,e){const n=G(t),r=n.getFullYear(),a=A(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=R(t,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const s=V(i,e),c=R(t,0);c.setFullYear(r,0,o),c.setHours(0,0,0,0);const u=V(c,e);return n.getTime()>=s.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function et(t,e){const n=G(t),r=+V(n,e)-+function(t,e){const n=A(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=tt(t,e),o=R(t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),V(o,e)}(n,e);return Math.round(r/Q)+1}function nt(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const rt={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return nt("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):nt(n+1,2)},d:(t,e)=>nt(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>nt(t.getHours()%12||12,e.length),H:(t,e)=>nt(t.getHours(),e.length),m:(t,e)=>nt(t.getMinutes(),e.length),s:(t,e)=>nt(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return nt(Math.trunc(r*Math.pow(10,n-3)),e.length)}},at={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return rt.y(t,e)},Y:function(t,e,n,r){const a=tt(t,r),o=a>0?a:1-a;return"YY"===e?nt(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):nt(o,e.length)},R:function(t,e){return nt(K(t),e.length)},u:function(t,e){return nt(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return nt(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return nt(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return rt.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return nt(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=et(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):nt(a,e.length)},I:function(t,e,n){const r=Z(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):nt(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):rt.d(t,e)},D:function(t,e,n){const r=U(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):nt(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return nt(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return nt(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return nt(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return rt.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):rt.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):nt(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):nt(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):rt.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):rt.s(t,e)},S:function(t,e){return rt.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return it(r);case"XXXX":case"XX":return st(r);default:return st(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return it(r);case"xxxx":case"xx":return st(r);default:return st(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+ot(r,":");default:return"GMT"+st(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+ot(r,":");default:return"GMT"+st(r,":")}},t:function(t,e,n){return nt(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return nt(t.getTime(),e.length)}};function ot(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+e+nt(o,2)}function it(t,e){return t%60==0?(t>0?"-":"+")+nt(Math.abs(t)/60,2):st(t,e)}function st(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+nt(Math.trunc(r/60),2)+e+nt(r%60,2)}const ct=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},ut=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},dt={p:ut,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return ct(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",ct(r,e)).replace("{{time}}",ut(a,e))}},lt=/^D+$/,mt=/^Y+$/,ht=["D","DD","YY","YYYY"];function ft(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const n=G(t);return!isNaN(Number(n))}const gt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,wt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,bt=/^'([^]*?)'?$/,pt=/''/g,yt=/[a-zA-Z]/;function vt(t){const e=t.match(bt);return e?e[1].replace(pt,"'"):t}function kt(t){let e=document.querySelector("#todo-title").value,n=document.querySelector("#todo-descr").value,r=document.querySelector("#due-date").value,a=document.querySelector("#todo-priority").value,o=function(t,e,n,r,a){return{id:Date.now(),title:t,description:e,dueDate:n,priority:r,completed:!1,projectID:a}}(e,n,function(t,e,n){const r=A(),a=n?.locale??r.locale??F,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=G(t);if(!ft(s))throw new RangeError("Invalid time value");let c=e.match(wt).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,dt[e])(t,a.formatLong):t})).join("").match(gt).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:vt(t)};if(at[e])return{isToken:!0,value:t};if(e.match(yt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));a.localize.preprocessor&&(c=a.localize.preprocessor(s,c));const u={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return c.map((r=>{if(!r.isToken)return r.value;const o=r.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return mt.test(t)}(o)||!n?.useAdditionalDayOfYearTokens&&function(t){return lt.test(t)}(o))&&function(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),ht.includes(t))throw new RangeError(r)}(o,e,String(t)),(0,at[o[0]])(s,o,a.localize,u)})).join("")}(new Date(r),"PP"),a,t);return o}let St,Mt,xt,Pt,Ct;document.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelector(".task-form"),e=document.querySelector(".project-form");if(localStorage.getItem("savedProjects"))Ct=function(){const t=(JSON.parse(localStorage.getItem("savedProjects"))||[]).map((t=>i(t.title,t)));return u=t,t}(),xt=function(){let t=JSON.parse(localStorage.getItem("defaultProject"));return c=u.find((e=>e.id===t.id)),c}(),function(t){t.forEach((t=>{E(t)}))}(Ct),T(xt);else{let t=i("Inbox");d(t),w(t),function(t){let e=JSON.stringify(t)||[];c=t,localStorage.setItem("defaultProject",e)}(t),g(),m(t),xt=l(),T(xt)}document.querySelector(".create-task-btn").addEventListener("click",(()=>{v?(v.classList.remove("hidden"),S.classList.remove("hidden")):console.error("Task form element not found")})),document.querySelector(".create-project-btn").addEventListener("click",(()=>{q()})),document.querySelectorAll(".inbox-icon").forEach((t=>t.src=r)),e.addEventListener("submit",(t=>{t.preventDefault(),Mt=document.querySelector("#project-title").value,St=i(Mt),E(St),W(),d(St),w(St)})),t.addEventListener("submit",(t=>{t.preventDefault(),xt=l(),Pt=xt.id;const e=kt(Pt);x(e),xt&&(xt.addTask(e),function(t){s.id!=c.id&&u.find((t=>t.id=c.id)).addTask(t)}(e),g()),N()}))}))}},t=>{t(t.s=497)}]);