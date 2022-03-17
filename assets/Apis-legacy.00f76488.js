!function(){function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}System.register(["./vendor-legacy.5dd500bd.js","./useRequestor-legacy.7584c3c3.js"],(function(n){"use strict";var e;return{setters:[function(t){t.c},function(t){e=t.u}],execute:function(){n({b:function(t){return e.request({url:o.Basic,params:t})},f:function(){return e.request({url:o.FetchNames})}});var r={exports:{}};r.exports=function(){var n=1e3,e=6e4,r=36e5,i="millisecond",s="second",u="minute",o="hour",a="day",c="week",f="month",h="quarter",d="year",l="date",$="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},D=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},v={s:D,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return(n<=0?"+":"-")+D(r,2,"0")+":"+D(i,2,"0")},m:function t(n,e){if(n.date()<e.date())return-t(e,n);var r=12*(e.year()-n.year())+(e.month()-n.month()),i=n.clone().add(r,f),s=e-i<0,u=n.clone().add(r+(s?-1:1),f);return+(-(r+(e-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:d,w:c,d:a,D:l,h:o,m:u,s:s,ms:i,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",p={};p[g]=M;var S=function(t){return t instanceof T},w=function(t,n,e){var r;if(!t)return g;if("string"==typeof t)p[t]&&(r=t),n&&(p[t]=n,r=t);else{var i=t.name;p[i]=t,r=i}return!e&&r&&(g=r),r||!e&&g},_=function(n,e){if(S(n))return n.clone();var r="object"==t(e)?e:{};return r.date=n,r.args=arguments,new T(r)},O=v;O.l=w,O.i=S,O.w=function(t,n){return _(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var T=function(){function t(t){this.$L=w(t.locale,null,!0),this.parse(t)}var M=t.prototype;return M.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(O.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(m);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return e?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},M.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},M.$utils=function(){return O},M.isValid=function(){return!(this.$d.toString()===$)},M.isSame=function(t,n){var e=_(t);return this.startOf(n)<=e&&e<=this.endOf(n)},M.isAfter=function(t,n){return _(t)<this.startOf(n)},M.isBefore=function(t,n){return this.endOf(n)<_(t)},M.$g=function(t,n,e){return O.u(t)?this[n]:this.set(e,t)},M.unix=function(){return Math.floor(this.valueOf()/1e3)},M.valueOf=function(){return this.$d.getTime()},M.startOf=function(t,n){var e=this,r=!!O.u(n)||n,i=O.p(t),h=function(t,n){var i=O.w(e.$u?Date.UTC(e.$y,n,t):new Date(e.$y,n,t),e);return r?i:i.endOf(a)},$=function(t,n){return O.w(e.toDate()[t].apply(e.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(n)),e)},m=this.$W,y=this.$M,M=this.$D,D="set"+(this.$u?"UTC":"");switch(i){case d:return r?h(1,0):h(31,11);case f:return r?h(1,y):h(0,y+1);case c:var v=this.$locale().weekStart||0,g=(m<v?m+7:m)-v;return h(r?M-g:M+(6-g),y);case a:case l:return $(D+"Hours",0);case o:return $(D+"Minutes",1);case u:return $(D+"Seconds",2);case s:return $(D+"Milliseconds",3);default:return this.clone()}},M.endOf=function(t){return this.startOf(t,!1)},M.$set=function(t,n){var e,r=O.p(t),c="set"+(this.$u?"UTC":""),h=(e={},e[a]=c+"Date",e[l]=c+"Date",e[f]=c+"Month",e[d]=c+"FullYear",e[o]=c+"Hours",e[u]=c+"Minutes",e[s]=c+"Seconds",e[i]=c+"Milliseconds",e)[r],$=r===a?this.$D+(n-this.$W):n;if(r===f||r===d){var m=this.clone().set(l,1);m.$d[h]($),m.init(),this.$d=m.set(l,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h]($);return this.init(),this},M.set=function(t,n){return this.clone().$set(t,n)},M.get=function(t){return this[O.p(t)]()},M.add=function(t,i){var h,l=this;t=Number(t);var $=O.p(i),m=function(n){var e=_(l);return O.w(e.date(e.date()+Math.round(n*t)),l)};if($===f)return this.set(f,this.$M+t);if($===d)return this.set(d,this.$y+t);if($===a)return m(1);if($===c)return m(7);var y=(h={},h[u]=e,h[o]=r,h[s]=n,h)[$]||1,M=this.$d.getTime()+t*y;return O.w(M,this)},M.subtract=function(t,n){return this.add(-1*t,n)},M.format=function(t){var n=this,e=this.$locale();if(!this.isValid())return e.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,o=this.$M,a=e.weekdays,c=e.months,f=function(t,e,i,s){return t&&(t[e]||t(n,r))||i[e].substr(0,s)},h=function(t){return O.s(s%12||12,t,"0")},d=e.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:O.s(o+1,2,"0"),MMM:f(e.monthsShort,o,c,3),MMMM:f(c,o),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:f(e.weekdaysMin,this.$W,a,2),ddd:f(e.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:O.s(s,2,"0"),h:h(1),hh:h(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,n){return n||l[t]||i.replace(":","")}))},M.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},M.diff=function(t,i,l){var $,m=O.p(i),y=_(t),M=(y.utcOffset()-this.utcOffset())*e,D=this-y,v=O.m(this,y);return v=($={},$[d]=v/12,$[f]=v,$[h]=v/3,$[c]=(D-M)/6048e5,$[a]=(D-M)/864e5,$[o]=D/r,$[u]=D/e,$[s]=D/n,$)[m]||D,l?v:O.a(v)},M.daysInMonth=function(){return this.endOf(f).$D},M.$locale=function(){return p[this.$L]},M.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),r=w(t,n,!0);return r&&(e.$L=r),e},M.clone=function(){return O.w(this.$d,this)},M.toDate=function(){return new Date(this.valueOf())},M.toJSON=function(){return this.isValid()?this.toISOString():null},M.toISOString=function(){return this.$d.toISOString()},M.toString=function(){return this.$d.toUTCString()},t}(),Y=T.prototype;return _.prototype=Y,[["$ms",i],["$s",s],["$m",u],["$H",o],["$W",a],["$M",f],["$y",d],["$D",l]].forEach((function(t){Y[t[1]]=function(n){return this.$g(n,t[0],t[1])}})),_.extend=function(t,n){return t.$i||(t(n,T,_),t.$i=!0),_},_.locale=w,_.isDayjs=S,_.unix=function(t){return _(1e3*t)},_.en=p[g],_.Ls=p,_.p={},_}();var i,s,u=r.exports;n("F",i),(s=i||n("F",i={})).TIME="HH:mm:ss",s.TIME_H_M="HH:mm",s.DATE="YYYY-MM-DD",s.DATE_TIME="YYYY-MM-DD HH:mm:ss";n("a",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.DATE_TIME;return u().format(t)})),n("c",(function(t){return u(t).unix()})),n("u",(function(t){return u(t).format(i.DATE_TIME)}));var o=function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)};o.Basic="//10.0.0.212/api/alarm",o.FetchNames="/alarm/name"}}}))}();
