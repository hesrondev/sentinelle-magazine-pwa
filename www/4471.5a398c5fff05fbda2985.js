(self.webpackChunksentinelle_mobile=self.webpackChunksentinelle_mobile||[]).push([[4471],{4471:(e,t,n)=>{"use strict";n.r(t),n.d(t,{LandingPageModule:()=>re});var o=n(1116),r=n(1462),s=n(6611),i=n(5860),a=n(8619);let c=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[o.ez,s.Pc,r.UX]]}),e})();function l(e,t,n,o){return new(n||(n=Promise))(function(r,s){function i(e){try{c(o.next(e))}catch(t){s(t)}}function a(e){try{c(o.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(i,a)}c((o=o.apply(e,t||[])).next())})}let p=(()=>{class e{constructor(e){this.modalCtrl=e}closeModal(){this.modalCtrl.dismiss()}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(s.IN))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-welcome"]],decls:14,vars:0,consts:[[1,"ion-page"],[1,"ion-text-center"],["name","close-circle",1,"close-icon",3,"click"],[1,"title"],[1,"welcome-text"],[1,"stnl-signature"],["src","../../../assets/imgs/SENTINELLE-Noir.png","height","22","width","132","alt",""]],template:function(e,t){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"ion-icon",2),a.NdJ("click",function(){return t.closeModal()}),a.qZA(),a.TgZ(3,"div",3),a._uU(4," Thank you for"),a._UZ(5,"br"),a._uU(6,"subscribing to our"),a._UZ(7,"br"),a._uU(8,"newsletter! "),a.qZA(),a.TgZ(9,"div",4),a._uU(10," Welcome to the tribe ! "),a.qZA(),a._UZ(11,"br"),a.TgZ(12,"div",5),a._UZ(13,"img",6),a.qZA(),a.qZA(),a.qZA())},directives:[s.gu],styles:[".title[_ngcontent-%COMP%]{display:block;font-family:Stika;font-size:22px;color:#000;letter-spacing:.1em;line-height:29px;margin-top:48px}.title[_ngcontent-%COMP%], .welcome-text[_ngcontent-%COMP%]{text-align:center;text-transform:uppercase}.welcome-text[_ngcontent-%COMP%]{font-family:Century Gothic;font-size:18px;font-weight:700;color:#f27648;letter-spacing:.03em;line-height:62px;margin-top:16px}.stnl-signature[_ngcontent-%COMP%]{position:relative}.team-text[_ngcontent-%COMP%]{position:absolute;font-family:adobe-handwriting-ernie,sans-serif;font-weight:400;font-style:normal;font-size:26px;color:var(--ion-color-stnl-gray-team);text-align:center;letter-spacing:.03em;line-height:25px}.close-icon[_ngcontent-%COMP%]{position:absolute;right:16px;top:16px;font-size:24px}"]}),e})();var u=n(529),d=n(878),h=n(8318),m=n(436),g=n(3835),f=n(9996);class y{}class b{}class v{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?this.lazyInit="string"==typeof e?()=>{this.headers=new Map,e.split("\n").forEach(e=>{const t=e.indexOf(":");if(t>0){const n=e.slice(0,t),o=n.toLowerCase(),r=e.slice(t+1).trim();this.maybeSetNormalizedName(n,o),this.headers.has(o)?this.headers.get(o).push(r):this.headers.set(o,[r])}})}:()=>{this.headers=new Map,Object.keys(e).forEach(t=>{let n=e[t];const o=t.toLowerCase();"string"==typeof n&&(n=[n]),n.length>0&&(this.headers.set(o,n),this.maybeSetNormalizedName(t,o))})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof v?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){const t=new v;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof v?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){const t=e.name.toLowerCase();switch(e.op){case"a":case"s":let n=e.value;if("string"==typeof n&&(n=[n]),0===n.length)return;this.maybeSetNormalizedName(e.name,t);const o=("a"===e.op?this.headers.get(t):void 0)||[];o.push(...n),this.headers.set(t,o);break;case"d":const r=e.value;if(r){let e=this.headers.get(t);if(!e)return;e=e.filter(e=>-1===r.indexOf(e)),0===e.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,e)}else this.headers.delete(t),this.normalizedNames.delete(t)}}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}}class x{encodeKey(e){return w(e)}encodeValue(e){return w(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}function w(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}function C(e){return`${e}`}class T{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new x,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(e,t){const n=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(e=>{const o=e.indexOf("="),[r,s]=-1==o?[t.decodeKey(e),""]:[t.decodeKey(e.slice(0,o)),t.decodeValue(e.slice(o+1))],i=n.get(r)||[];i.push(s),n.set(r,i)}),n}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{const n=e.fromObject[t];this.map.set(t,Array.isArray(n)?n:[n])})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){const t=[];return Object.keys(e).forEach(n=>{const o=e[n];Array.isArray(o)?o.forEach(e=>{t.push({param:n,value:e,op:"a"})}):t.push({param:n,value:o,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const t=this.encoder.encodeKey(e);return this.map.get(e).map(e=>t+"="+this.encoder.encodeValue(e)).join("&")}).filter(e=>""!==e).join("&")}clone(e){const t=new T({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const t=("a"===e.op?this.map.get(e.param):void 0)||[];t.push(C(e.value)),this.map.set(e.param,t);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let t=this.map.get(e.param)||[];const n=t.indexOf(C(e.value));-1!==n&&t.splice(n,1),t.length>0?this.map.set(e.param,t):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}class k{constructor(){this.map=new Map}set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}keys(){return this.map.keys()}}function Z(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer}function _(e){return"undefined"!=typeof Blob&&e instanceof Blob}function O(e){return"undefined"!=typeof FormData&&e instanceof FormData}class P{constructor(e,t,n,o){let r;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||o?(this.body=void 0!==n?n:null,r=o):r=n,r&&(this.reportProgress=!!r.reportProgress,this.withCredentials=!!r.withCredentials,r.responseType&&(this.responseType=r.responseType),r.headers&&(this.headers=r.headers),r.context&&(this.context=r.context),r.params&&(this.params=r.params)),this.headers||(this.headers=new v),this.context||(this.context=new k),this.params){const e=this.params.toString();if(0===e.length)this.urlWithParams=t;else{const n=t.indexOf("?");this.urlWithParams=t+(-1===n?"?":n<t.length-1?"&":"")+e}}else this.params=new T,this.urlWithParams=t}serializeBody(){return null===this.body?null:Z(this.body)||_(this.body)||O(this.body)||"string"==typeof this.body?this.body:this.body instanceof T?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||O(this.body)?null:_(this.body)?this.body.type||null:Z(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof T?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(e={}){var t;const n=e.method||this.method,o=e.url||this.url,r=e.responseType||this.responseType,s=void 0!==e.body?e.body:this.body,i=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,a=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let c=e.headers||this.headers,l=e.params||this.params;const p=null!==(t=e.context)&&void 0!==t?t:this.context;return void 0!==e.setHeaders&&(c=Object.keys(e.setHeaders).reduce((t,n)=>t.set(n,e.setHeaders[n]),c)),e.setParams&&(l=Object.keys(e.setParams).reduce((t,n)=>t.set(n,e.setParams[n]),l)),new P(n,o,s,{params:l,headers:c,context:p,reportProgress:a,responseType:r,withCredentials:i})}}var A=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}({});class U{constructor(e,t=200,n="OK"){this.headers=e.headers||new v,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||n,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class E extends U{constructor(e={}){super(e),this.type=A.ResponseHeader}clone(e={}){return new E({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class M extends U{constructor(e={}){super(e),this.type=A.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new M({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class N extends U{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${e.url||"(unknown url)"}`:`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}}function q(e,t){return{body:t,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}let z=(()=>{class e{constructor(e){this.handler=e}request(e,t,n={}){let o;if(e instanceof P)o=e;else{let r,s;r=n.headers instanceof v?n.headers:new v(n.headers),n.params&&(s=n.params instanceof T?n.params:new T({fromObject:n.params})),o=new P(e,t,void 0!==n.body?n.body:null,{headers:r,context:n.context,params:s,reportProgress:n.reportProgress,responseType:n.responseType||"json",withCredentials:n.withCredentials})}const r=(0,d.of)(o).pipe((0,m.b)(e=>this.handler.handle(e)));if(e instanceof P||"events"===n.observe)return r;const s=r.pipe((0,g.h)(e=>e instanceof M));switch(n.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe((0,f.U)(e=>{if(null!==e.body&&!(e.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return e.body}));case"blob":return s.pipe((0,f.U)(e=>{if(null!==e.body&&!(e.body instanceof Blob))throw new Error("Response is not a Blob.");return e.body}));case"text":return s.pipe((0,f.U)(e=>{if(null!==e.body&&"string"!=typeof e.body)throw new Error("Response is not a string.");return e.body}));case"json":default:return s.pipe((0,f.U)(e=>e.body))}case"response":return s;default:throw new Error(`Unreachable: unhandled observe type ${n.observe}}`)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:(new T).append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,n={}){return this.request("PATCH",e,q(n,t))}post(e,t,n={}){return this.request("POST",e,q(n,t))}put(e,t,n={}){return this.request("PUT",e,q(n,t))}}return e.\u0275fac=function(t){return new(t||e)(a.LFG(y))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac}),e})();class F{constructor(e,t){this.next=e,this.interceptor=t}handle(e){return this.interceptor.intercept(e,this.next)}}const I=new a.OlP("HTTP_INTERCEPTORS");let S=(()=>{class e{intercept(e,t){return t.handle(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac}),e})();const L=/^\)\]\}',?\n/;let j=(()=>{class e{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new h.y(t=>{const n=this.xhrFactory.build();if(n.open(e.method,e.urlWithParams),e.withCredentials&&(n.withCredentials=!0),e.headers.forEach((e,t)=>n.setRequestHeader(e,t.join(","))),e.headers.has("Accept")||n.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const t=e.detectContentTypeHeader();null!==t&&n.setRequestHeader("Content-Type",t)}if(e.responseType){const t=e.responseType.toLowerCase();n.responseType="json"!==t?t:"text"}const o=e.serializeBody();let r=null;const s=()=>{if(null!==r)return r;const t=1223===n.status?204:n.status,o=n.statusText||"OK",s=new v(n.getAllResponseHeaders()),i=function(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(n)||e.url;return r=new E({headers:s,status:t,statusText:o,url:i}),r},i=()=>{let{headers:o,status:r,statusText:i,url:a}=s(),c=null;204!==r&&(c=void 0===n.response?n.responseText:n.response),0===r&&(r=c?200:0);let l=r>=200&&r<300;if("json"===e.responseType&&"string"==typeof c){const e=c;c=c.replace(L,"");try{c=""!==c?JSON.parse(c):null}catch(p){c=e,l&&(l=!1,c={error:p,text:c})}}l?(t.next(new M({body:c,headers:o,status:r,statusText:i,url:a||void 0})),t.complete()):t.error(new N({error:c,headers:o,status:r,statusText:i,url:a||void 0}))},a=e=>{const{url:o}=s(),r=new N({error:e,status:n.status||0,statusText:n.statusText||"Unknown Error",url:o||void 0});t.error(r)};let c=!1;const l=o=>{c||(t.next(s()),c=!0);let r={type:A.DownloadProgress,loaded:o.loaded};o.lengthComputable&&(r.total=o.total),"text"===e.responseType&&n.responseText&&(r.partialText=n.responseText),t.next(r)},p=e=>{let n={type:A.UploadProgress,loaded:e.loaded};e.lengthComputable&&(n.total=e.total),t.next(n)};return n.addEventListener("load",i),n.addEventListener("error",a),n.addEventListener("timeout",a),n.addEventListener("abort",a),e.reportProgress&&(n.addEventListener("progress",l),null!==o&&n.upload&&n.upload.addEventListener("progress",p)),n.send(o),t.next({type:A.Sent}),()=>{n.removeEventListener("error",a),n.removeEventListener("abort",a),n.removeEventListener("load",i),n.removeEventListener("timeout",a),e.reportProgress&&(n.removeEventListener("progress",l),null!==o&&n.upload&&n.upload.removeEventListener("progress",p)),n.readyState!==n.DONE&&n.abort()}})}}return e.\u0275fac=function(t){return new(t||e)(a.LFG(o.JF))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac}),e})();const J=new a.OlP("XSRF_COOKIE_NAME"),R=new a.OlP("XSRF_HEADER_NAME");class H{}let Y=(()=>{class e{constructor(e,t,n){this.doc=e,this.platform=t,this.cookieName=n,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,o.Mx)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}return e.\u0275fac=function(t){return new(t||e)(a.LFG(o.K0),a.LFG(a.Lbi),a.LFG(J))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac}),e})(),B=(()=>{class e{constructor(e,t){this.tokenService=e,this.headerName=t}intercept(e,t){const n=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||n.startsWith("http://")||n.startsWith("https://"))return t.handle(e);const o=this.tokenService.getToken();return null===o||e.headers.has(this.headerName)||(e=e.clone({headers:e.headers.set(this.headerName,o)})),t.handle(e)}}return e.\u0275fac=function(t){return new(t||e)(a.LFG(H),a.LFG(R))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac}),e})(),G=(()=>{class e{constructor(e,t){this.backend=e,this.injector=t,this.chain=null}handle(e){if(null===this.chain){const e=this.injector.get(I,[]);this.chain=e.reduceRight((e,t)=>new F(e,t),this.backend)}return this.chain.handle(e)}}return e.\u0275fac=function(t){return new(t||e)(a.LFG(b),a.LFG(a.zs3))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac}),e})(),X=(()=>{class e{static disable(){return{ngModule:e,providers:[{provide:B,useClass:S}]}}static withOptions(t={}){return{ngModule:e,providers:[t.cookieName?{provide:J,useValue:t.cookieName}:[],t.headerName?{provide:R,useValue:t.headerName}:[]]}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({providers:[B,{provide:I,useExisting:B,multi:!0},{provide:H,useClass:Y},{provide:J,useValue:"XSRF-TOKEN"},{provide:R,useValue:"X-XSRF-TOKEN"}]}),e})(),D=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({providers:[z,{provide:y,useClass:G},j,{provide:b,useExisting:j}],imports:[[X.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),e})(),K=(()=>{class e{constructor(e){this.http=e,this.url=u.N.baseUrl}sendJoinInfo(e){return this.http.post(this.url+"/contact",e)}}return e.\u0275fac=function(t){return new(t||e)(a.LFG(z))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function V(e,t){1&e&&(a.TgZ(0,"div",2),a.TgZ(1,"a",3),a._UZ(2,"ion-icon",4),a.qZA(),a._uU(3,"\xa0\xa0 "),a.TgZ(4,"a",5),a._UZ(5,"ion-icon",6),a.qZA(),a._uU(6,"\xa0\xa0 "),a.TgZ(7,"a",7),a._UZ(8,"ion-icon",8),a.qZA(),a._uU(9,"\xa0\xa0 "),a.TgZ(10,"a",9),a._UZ(11,"ion-icon",10),a.qZA(),a._uU(12,"\xa0\xa0\n"),a.qZA())}function W(e,t){1&e&&(a.TgZ(0,"div",11),a.TgZ(1,"a",3),a._UZ(2,"ion-icon",4),a.qZA(),a.TgZ(3,"a",5),a._UZ(4,"ion-icon",6),a.qZA(),a.TgZ(5,"a",7),a._UZ(6,"ion-icon",8),a.qZA(),a.TgZ(7,"a",9),a._UZ(8,"ion-icon",10),a.qZA(),a.qZA())}let Q=(()=>{class e{constructor(){this.orientation="horizontal"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-social-icons"]],inputs:{orientation:"orientation"},decls:2,vars:2,consts:[["class","content-h",4,"ngIf"],["class","content-v",4,"ngIf"],[1,"content-h"],["href","https://www.instagram.com/sentinellemag/","target","_blank",1,"icon-link"],["name","logo-instagram",1,"social-icon"],["href","https://www.facebook.com/Sentinelle-Magazine-103995051632937","target","_blank",1,"icon-link"],["name","logo-facebook",1,"social-icon"],["href","#","target","_blank",1,"icon-link"],["name","logo-youtube",1,"social-icon"],["href","https://twitter.com/Sentinellemag","target","_blank",1,"icon-link"],["name","logo-twitter",1,"social-icon"],[1,"content-v"]],template:function(e,t){1&e&&(a.YNc(0,V,13,0,"div",0),a.YNc(1,W,9,0,"div",1)),2&e&&(a.Q6J("ngIf","horizontal"===t.orientation),a.xp6(1),a.Q6J("ngIf","vertical"===t.orientation))},directives:[o.O5,s.gu],styles:[".content-h[_ngcontent-%COMP%]{background-color:var(--ion-color-stnl-black);color:#fff}.content-v[_ngcontent-%COMP%]{max-width:90px;padding-top:15px;padding-bottom:5px;text-align:center;background-color:initial;color:#fff}.content-v[_ngcontent-%COMP%]   .icon-link[_ngcontent-%COMP%]{display:block;margin-bottom:10px}.icon-link[_ngcontent-%COMP%]{color:#fff;text-decoration:none}.icon-link[_ngcontent-%COMP%]:hover{color:var(--ion-color-stnl-orange)}.social-icon[_ngcontent-%COMP%]{font-size:30px}"]}),e})(),$=(()=>{class e{constructor(e,t,n){this.toastCtrl=e,this.fb=t,this.contactSrv=n,this.createForm()}createForm(){this.contactForm=this.fb.group({name:["",r.kI.required],email:["",[r.kI.required,r.kI.email]],subject:["",r.kI.required],message:["",r.kI.required]})}sendContactForm(){this.contactSrv.sendJoinInfo(this.contactForm.value).subscribe(e=>{this.contactForm.reset(),this.presentToast()},e=>{})}presentToast(e=!0){return l(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:e?"Your request has been sent":"An error has occured, please retry later.",duration:2e3})).present()})}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(s.yF),a.Y36(r.qu),a.Y36(K))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-contact-form"]],decls:10,vars:2,consts:[[1,"ion-padding","ion-text-center"],[1,"title"],[3,"formGroup"],["type","text","placeholder","NAME","formControlName","name",1,"input-custom"],["type","email","placeholder","EMAIL","formControlName","email",1,"input-custom"],["type","text","placeholder","SUBJECT","formControlName","subject",1,"input-custom"],["type","text","placeholder","MESSAGE","rows","5","formControlName","message",1,"input-custom","textarea"],[1,"btn-custom","btn-block",3,"disabled","click"]],template:function(e,t){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"h3",1),a._uU(2,"Get in touch"),a.qZA(),a.TgZ(3,"form",2),a._UZ(4,"input",3),a._UZ(5,"input",4),a._UZ(6,"input",5),a._UZ(7,"textarea",6),a.TgZ(8,"button",7),a.NdJ("click",function(){return t.sendContactForm()}),a._uU(9," Send "),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.xp6(3),a.Q6J("formGroup",t.contactForm),a.xp6(5),a.Q6J("disabled",!t.contactForm.valid))},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u],styles:[".title[_ngcontent-%COMP%]{font-family:Didonesque;font-size:2rem;color:var(--ion-color-stnl-white);letter-spacing:.1em;text-transform:uppercase;margin-bottom:32px}.input-custom[_ngcontent-%COMP%]{display:block;width:100%;border:1px solid var(--ion-color-stnl-white);border-radius:0!important;font-size:14px;background-color:var(--ion-color-stnl-white)!important;font-family:century-gothic,sans-serif;color:var(--ion-color-stnl-black)!important;font-weight:700;height:45px;padding-left:16px;padding-right:16px;max-width:480px!important;margin:0 auto 10px}.input-custom[_ngcontent-%COMP%]::placeholder{font-family:century-gothic,sans-serif;color:rgba(var(--ion-color-stnl-black),.9)!important;letter-spacing:.08em}.textarea[_ngcontent-%COMP%]{min-height:150px;max-width:300px;padding:16px}.btn-custom[_ngcontent-%COMP%]{font-family:century-gothic,sans-serif;font-weight:700;display:block;width:100%;background-color:#fff;text-align:center;height:40px;border:none;cursor:pointer;max-width:480px!important;margin:0 auto;text-transform:uppercase}.form-wrapper[_ngcontent-%COMP%]{text-align:center;padding-top:16px;padding-bottom:24px}"]}),e})();function ee(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"div"),a.TgZ(1,"div",12),a._UZ(2,"iframe",13),a.qZA(),a.TgZ(3,"div",14),a._UZ(4,"br"),a._UZ(5,"br"),a.TgZ(6,"div",14),a.TgZ(7,"form",15),a._UZ(8,"input",16),a._UZ(9,"input",17),a.TgZ(10,"button",18),a.NdJ("click",function(){return a.CHM(e),a.oxw().sendForm()}),a._uU(11," Join our community "),a.qZA(),a.qZA(),a.qZA(),a.TgZ(12,"div",19),a.TgZ(13,"span",20),a._uU(14,"Get in touch :"),a.qZA(),a._UZ(15,"app-social-icons",21),a.qZA(),a.qZA(),a.qZA()}if(2&e){const e=a.oxw();a.xp6(7),a.Q6J("formGroup",e.joinForm),a.xp6(3),a.Q6J("disabled",!e.joinForm.valid)}}function te(e,t){1&e&&(a.TgZ(0,"div",14),a._UZ(1,"app-contact-form"),a.qZA())}const ne=[{path:"",component:(()=>{class e{constructor(e,t,n,o){this.toastCtrl=e,this.fb=t,this.modalCtrl=n,this.contactSrv=o,this.selectedIndex=0,this.createForm()}ngOnInit(){}createForm(){this.joinForm=this.fb.group({name:["",r.kI.required],email:["",[r.kI.required,r.kI.email]]})}sendForm(){this.contactSrv.sendJoinInfo(this.joinForm.value).subscribe(e=>{this.joinForm.reset(),this.presentModal()},e=>{})}changeIndex(e){e!==this.selectedIndex&&(this.selectedIndex=e)}presentToast(e=!0){return l(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:e?"Your request has been sent":"An error has occured, please retry later.",duration:2e3})).present()})}presentModal(){return l(this,void 0,void 0,function*(){const e=yield this.modalCtrl.create({component:p,cssClass:"landing-modal",swipeToClose:!0});return yield e.present()})}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(s.yF),a.Y36(r.qu),a.Y36(s.IN),a.Y36(K))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-landing"]],decls:23,vars:6,consts:[[1,"header"],[1,"stnl-logo"],[1,"submenu"],[1,"submenu-row"],[1,"submenu-col","submenu-col-active",3,"click"],[1,"submenu-label"],[1,"submenu-col",3,"click"],[1,"content-wrapper"],[1,"motif-space"],["src","../../assets/imgs/motif-header.png","alt",""],[4,"ngIf"],["class","ion-padding",4,"ngIf"],[1,"responsive-video"],["src","https://www.youtube-nocookie.com/embed/AdWF6ft6S_g","title","YouTube video player","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",1,"teaser-frame"],[1,"ion-padding"],[3,"formGroup"],["type","text","placeholder","FULL NAME","formControlName","name",1,"input-custom"],["type","text","placeholder","EMAIL","formControlName","email",1,"input-custom"],[1,"btn-custom","btn-block",3,"disabled","click"],[1,"icons-container","ion-text-center"],[1,"getintouch"],["orientation","horizontal"]],template:function(e,t){1&e&&(a.TgZ(0,"ion-header"),a.TgZ(1,"ion-toolbar",0),a.TgZ(2,"ion-title",1),a._uU(3,"SENTINELLE"),a.qZA(),a.qZA(),a.TgZ(4,"ion-grid",2),a.TgZ(5,"ion-row",3),a.TgZ(6,"ion-col",4),a.NdJ("click",function(){return t.changeIndex(0)}),a.TgZ(7,"span",5),a._uU(8,"Teaser"),a.qZA(),a.qZA(),a.TgZ(9,"ion-col",6),a.NdJ("click",function(){return t.changeIndex(1)}),a.TgZ(10,"span",5),a._uU(11,"Contact"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(12,"ion-content",7),a.TgZ(13,"div"),a.TgZ(14,"div",8),a._UZ(15,"img",9),a.qZA(),a.YNc(16,ee,16,2,"div",10),a.YNc(17,te,2,0,"div",11),a._UZ(18,"br"),a._UZ(19,"br"),a._UZ(20,"br"),a._UZ(21,"br"),a._UZ(22,"br"),a.qZA(),a.qZA()),2&e&&(a.xp6(6),a.ekj("submenu-col-active",0===t.selectedIndex),a.xp6(3),a.ekj("submenu-col-active",1===t.selectedIndex),a.xp6(7),a.Q6J("ngIf",0===t.selectedIndex),a.xp6(1),a.Q6J("ngIf",1===t.selectedIndex))},directives:[s.Gu,s.sr,s.wd,s.jY,s.Nd,s.wI,s.W2,o.O5,r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,Q,$],styles:[".header[_ngcontent-%COMP%]{padding:16px;border:none!important;--border-width:0!important;background-color:var(--ion-color-stnl-white)}.stnl-logo[_ngcontent-%COMP%]{font-family:Didonesque!important;text-align:center;font-size:1.8em;letter-spacing:.05em;font-weight:400}.toolbar-title[_ngcontent-%COMP%], .toolbar-title-ios[_ngcontent-%COMP%], .toolbar-title-md[_ngcontent-%COMP%]{font-size:3rem!important;text-overflow:clip!important;font-weight:400;color:var(--ion-color-stnl-black)}.submenu[_ngcontent-%COMP%]{padding:8px 0 2px;background-color:var(--ion-color-stnl-white)}.submenu-col[_ngcontent-%COMP%]{position:relative;background-color:var(--ion-color-stnl-black);color:var(--ion-color-stnl-white);text-align:center;padding:16px}.submenu-col-active[_ngcontent-%COMP%]{background-color:var(--ion-color-stnl-white)!important;color:var(--ion-color-stnl-black)!important}.submenu-label[_ngcontent-%COMP%]{font-family:Bilo;font-size:14px;font-weight:500;letter-spacing:.1em;text-transform:uppercase}.content-wrapper[_ngcontent-%COMP%]{--ion-background-color:var(--ion-color-stnl-black)}.responsive-video[_ngcontent-%COMP%]{margin-top:-4px;padding:56.25% 0 0;position:relative}.teaser-frame[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.tsr-play[_ngcontent-%COMP%]{position:absolute;top:65%;left:46.5%;color:#fff;font-size:48px}.description-text[_ngcontent-%COMP%]{font-family:century-gothic,sans-serif;font-style:normal;font-size:2rem;letter-spacing:.1em;color:var(--ion-color-stnl-white);text-align:center;font-weight:400}.input-custom[_ngcontent-%COMP%]{display:block;width:100%;border:1px solid var(--ion-color-stnl-white);border-radius:0!important;font-size:16px;background-color:var(--ion-color-stnl-black);height:45px;padding-left:16px;padding-right:16px;max-width:480px!important;margin:0 auto 10px}.input-custom[_ngcontent-%COMP%], .input-custom[_ngcontent-%COMP%]::placeholder{color:var(--ion-color-stnl-white)}.btn-custom[_ngcontent-%COMP%], .input-custom[_ngcontent-%COMP%], .input-custom[_ngcontent-%COMP%]::placeholder{font-family:century-gothic,sans-serif;font-weight:700}.btn-custom[_ngcontent-%COMP%]{display:block;width:100%;background-color:#fff;text-align:center;height:40px;border:none;cursor:pointer;max-width:480px!important;margin:0 auto;text-transform:uppercase}.form-wrapper[_ngcontent-%COMP%]{text-align:center;padding-top:16px;padding-bottom:24px}.icons-container[_ngcontent-%COMP%]{margin-top:16px}.getintouch[_ngcontent-%COMP%]{color:var(--ion-color-stnl-white);display:block;padding-bottom:16px}@media screen and (orientation:landscape){.toolbar-title[_ngcontent-%COMP%], .toolbar-title-ios[_ngcontent-%COMP%], .toolbar-title-md[_ngcontent-%COMP%]{font-size:3.2rem!important;text-overflow:clip!important}}"]}),e})()}];let oe=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[i.Bz.forChild(ne),c],i.Bz]}),e})(),re=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[o.ez,r.u5,s.Pc,oe,r.UX,c,D]]}),e})()}}]);