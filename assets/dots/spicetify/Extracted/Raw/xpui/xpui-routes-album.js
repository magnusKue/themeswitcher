"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[5962,1408],{75516:(e,r,n)=>{n.d(r,{G:()=>o});var t=n(99),i=n(14534),a=n(86070);function o(e){var r=e.totalItems,n=e.containsTracks,o=e.containsEpisodes,l=e.containsAudiobooks;if(0===r)return null;var s,c=o&&!l&&!n,u=l&&!n&&!o;return s=n&&!o&&!l?t.Ru.get("tracklist-header.songs-counter",r):c?t.Ru.get("tracklist-header.episodes-counter",r):u?t.Ru.get("tracklist-header.audiobooks-counter",r):t.Ru.get("tracklist-header.items-counter",r),(0,a.jsx)(i.q,{children:s})}},20899:(e,r,n)=>{n.d(r,{r:()=>a});const t={container:"GI8QLntnaSCh2ONX_y2c"};var i=n(86070);function a(e){var r=e.children;return(0,i.jsx)("div",{className:t.container,children:r})}},99495:(e,r,n)=>{n.d(r,{r:()=>p});var t=n(14534),i=n(98306),a=n(97500),o=n.n(a),l=n(99),s=n(68261),c=36e5,u=864e5,d=n(53926);const m="poz9gZKE7xqFwgk231J4";function h(e,r){return e-e%r}var g=n(86070),f=function(e){var r,n,t=e.durationMs,i=e.className,a=t>u;r=a?u:h(n=t,n>36e6?c:n>18e6?18e5:n>36e5?9e5:n>18e5?3e5:6e4);var f=(0,s.S)(r),p=f.hours,v=f.minutes;if(0===p&&0===v)return null;var b=(0,d.j)({h:p,m:v,s:0});return b=a?l.Ru.get("time.over",b):l.Ru.get("time.estimated",b),(0,g.jsx)("span",{className:o()(m,i),children:b})};function p(e){var r=e.durationMs,n=e.isEstimate;return 0===r?null:(0,g.jsx)(t.q,{children:n?(0,g.jsx)(f,{durationMs:r}):(0,g.jsx)(i.d,{durationMs:r})})}},84181:(e,r,n)=>{n.d(r,{W:()=>c});var t=n(97500),i=n.n(t),a=n(7852),o=n(99),l=n(48643),s=n(86070);function c(){return(0,s.jsx)(a.E,{"data-separator":!0,variant:"bodySmall",semanticColor:"textSubdued",className:i()(l.A.separator,l.A.textSeparator),children:o.Ru.getSeparator()})}},77238:(e,r,n)=>{n.d(r,{B:()=>o});var t=n(7852),i=n(25527),a=n(86070),o=function(e){var r=e.children;return(0,a.jsx)(t.E,{variant:"bodySmall",className:i.A.pretitle,children:r})}},20198:(e,r,n)=>{n.d(r,{h:()=>g});n(7651),n(30456),n(26701),n(37417),n(11737),n(51691),n(702),n(5672),n(43379),n(34192),n(88856),n(51565),n(18316);var t=n(51488),i=n(30758),a=n(74230),o=n(49629),l=n(67124),s=n(204),c=n(93833),u=n(63656),d=n(86070);function m(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function h(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?m(Object(n),!0).forEach((function(r){(0,t.A)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var g=function(e){var r,n=e.children,t=e.action,m=e.uri,g=(0,l.V)(),f=(0,c.N)(s.JD);try{r=i.Children.only(n)}catch(e){return(0,d.jsx)(d.Fragment,{children:n})}return g?i.cloneElement(r,{onClick:function(){var e={triggerId:o.d,triggerAction:{type:t}};a.h.set((function(r){return h(h({},r),e)})),f.storeAction(s.j8,{operation:u.tS.ADD,uris:[m]})}}):(0,d.jsx)(d.Fragment,{children:n})}},40407:(e,r,n)=>{n.d(r,{g:()=>F});n(40065),n(43379),n(34192),n(4865);var t=n(30758),i=n(3074),a=n.n(i),o=n(39486),l=n(31285),s=n(7852),c=n(65277),u=n(46669),d=n(10806),m=n(51488),h=n(48),g=(n(7651),n(30456),n(26701),n(25550),n(37417),n(11737),n(51691),n(702),n(5672),n(88856),n(51565),n(15342),n(18316),n(9801)),f=n(73406),p=n(56818),v=n(36178),b=n(46400),x=n(57674),j=n(99),y=n(52856),k=n(48844),w=n(86070),C=function(e){var r=e.onSelect,n=(0,y.a)(),t=n.viewMode,i=n.setViewMode;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(v.y,{children:j.Ru.get("web-player.your-library-x.sort-and-view-picker.view-as")}),k.i.map((function(e,n){var a=e.value,o=e.icon,l=e.text;return(0,w.jsx)(b.D,{role:"menuitemradio","aria-checked":t===a,divider:n===k.i.length-1?"after":void 0,autoClose:!1,leadingIcon:o(),onClick:function(){i(a),null==r||r(a)},children:l()},a)}))]})},O=["heading","selected","onSelect","options","enableViewModeMenu","onSelectViewMode","sortOrder"];function S(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function A(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?S(Object(n),!0).forEach((function(r){(0,m.A)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var M=function(e){var r,n=e.heading,t=e.selected,i=e.onSelect,a=e.options,o=e.enableViewModeMenu,l=void 0!==o&&o,s=e.onSelectViewMode,c=e.sortOrder,u=(0,h.A)(e,O);c&&(c===x.H.ASC||c===x.H.SECONDARY_ASC?r=g.U:c!==x.H.DESC&&c!==x.H.SECONDARY_DESC||(r=f.R));return(0,w.jsxs)(p.W,A(A({getInitialFocusElement:function(e){return null==e?void 0:e.querySelector('[aria-checked="true"]')}},u),{},{children:[n?(0,w.jsx)(v.y,{children:n}):null,a.map((function(e,n){var a=e.key,o=e.value;return(0,w.jsx)(b.D,{role:"menuitemradio","aria-checked":a===t.key,CheckedIcon:r,onClick:function(){return i(a,n)},children:o},a)})),l&&(0,w.jsx)(C,{onSelect:s})]}))},P=n(89851),N=n(57965),I=n(35489);const R="x-sortBox-sortDropdown",D="cvTLPmjt6T7M85EKcB8w",B="SbDHY3fVADNJ4l9qOLQ2";var E=function(e){var r=e.isOpen,n=e.className;return r?(0,w.jsx)(o.J,{size:"small","aria-hidden":"true",className:n}):(0,w.jsx)(l.y,{size:"small","aria-hidden":"true",className:n})},F=function(e){var r=e.heading,n=e.options,i=e.selected,o=e.onSelect,l=e.sortOrder,m=e.variant,h=void 0===m?"bodySmall":m,g=e.semanticColor,f=e.disabled,p=e.onClick,v=e.ariaLabel,b=e.enableViewModeMenu,x=void 0!==b&&b,j=(0,c.NC)(I.mA)&&x,y=(0,P.a)().viewMode;i||(i=null==n?void 0:n[0]);var C=k.i.find((function(e){return e.value===y}))||k.i[0],O=(0,t.useMemo)((function(){return"sortboxlist-".concat(a().create().hex)}),[]),S=(0,N.r)(u.d,{}),A=S.spec,F=S.logger;return(0,w.jsx)(d.b,{menu:(0,w.jsx)(M,{selected:i,options:n,onSelect:function(e,r){o(e,r);var n=A.sortBySectionFactory().sortOptionFactory({identifier:e}).hitSort();F.logInteraction(n)},sortOrder:l,heading:r,enableViewModeMenu:j,onSelectViewMode:function(e){var r=A.viewAsSectionFactory().viewOptionFactory({identifier:e}).hitUiElementToggle();F.logInteraction(r)},id:O}),children:function(e,r,n){var t;return(0,w.jsxs)("button",{className:R,onClick:function(e){f||(null==p||p(e),r(e))},ref:n,type:"button","aria-label":v,role:"combobox","aria-controls":O,"aria-expanded":e,children:[(0,w.jsx)(s.E,{"data-sortbox-label":!0,semanticColor:g,variant:h,className:D,children:(null===(t=i)||void 0===t?void 0:t.value)||(j?C.text():"")}),j?C.icon():(0,w.jsx)(E,{isOpen:e,className:B})]})}})}},16062:(e,r,n)=>{n.d(r,{q:()=>b});n(7651),n(14551),n(25550),n(15342);var t=n(67380),i=n(99),a=n(1324),o=n(30758),l=n(55998),s=n(4319),c=n(65435),u=n(81418),d=n(68113),m=n(36783),h=n(86070),g=function(e){var r=e.merchId,n=e.spec,t=e.uri,i=e.url,a=e.images,g=e.description,f=e.merchName,p=void 0===f?"":f,v=e.testId,b=e.index,x=e.merchVariant,j=e.variant,y=(0,d.s)(),k=(0,o.useMemo)((function(){return n.merchCardFactory({identifier:r,uri:t,position:b})}),[r,t,n,b]),w=function(){window.open(i,"_blank");var e=k.hitNavigateToExternalUri({destination:i});y.logInteraction(e)},C=(0,m.t)(k);return(0,h.jsx)("div",{ref:C,children:(0,h.jsx)(l.Z,{variant:j,delegateNavigation:!0,index:b,onClick:w,headerText:p,featureIdentifier:"playlist",requestId:x,uri:t,isPlayable:!1,renderCardImage:function(){return(0,h.jsx)(s.M,{images:a})},renderSubHeaderContent:function(){return(0,h.jsx)(c.c,{children:g?(0,h.jsx)(u.N,{source:g,onLinkClick:w}):p&&(0,h.jsxs)("span",{children:["Description: ",p]})})},testId:v})})},f=n(14816),p=n(57965),v=n(66715),b=function(e){var r=e.id,n=e.merchItems,o=e.merchVariant,l=e.uri,s=(0,p.r)(t.k,{data:{identifier:r,uri:l,position:0,reason:o}}).spec;return(0,h.jsx)(f.pZ,{value:"shelf/offers","data-testid":"merch-shelf",children:(0,h.jsx)(a.$,{total:n.length,title:i.Ru.get("web-player.merch.title"),className:v.A.shelfSpace,seeAllLabel:i.Ru.get("web-player.merch.seeAllUri"),children:n.map((function(e,r){var n;return e.url&&e.nameV2?(0,h.jsx)(f.pZ,{value:"card",index:r,children:(0,h.jsx)(g,{index:r,url:e.url,uri:e.uri,merchName:e.nameV2,description:e.description||"",images:(null===(n=e.image)||void 0===n?void 0:n.sources)||[],merchVariant:o,merchId:e.uri,spec:s},e.url)},e.url):null}))})})}},9788:(e,r,n)=>{n.r(r),n.d(r,{default:()=>Er});var t=n(51488),i=(n(7651),n(30456),n(26701),n(79024),n(34518),n(25550),n(70750),n(47994),n(37417),n(11737),n(51691),n(702),n(5672),n(43379),n(72636),n(51234),n(2823),n(97460),n(4672),n(29426),n(34192),n(88856),n(51565),n(15342),n(18316),n(93577),n(54520),n(91531),n(93678),n(34145),n(30758)),a=n(94822),o=n(90543),l=n(7852),s=n(39486),c=n(31285),u=n(65277),d=n(91308),m=n(99),h=n(25265),g=n(80080),f=n(97498),p=n(36734),v=n(18896),b=n(19630),x=n(67124),j=n(1940),y=n(86070),k=function(e){var r=e.message,n=e.spec,t=e.logger,i=e.className,a=(0,j.i)(n,t),o=a.onUpgradeClick,l=a.type;return(0,x.V)()?null:(0,y.jsx)(g.v,{id:"catalogue-restricted-banner",className:i,variant:"tinted",leading:(0,y.jsx)(f.N,{}),title:r,trailing:(0,y.jsx)(p.$,{size:"small",onClick:o,iconOnly:"external"===l?v.H:b.h,"aria-label":m.Ru.get("upgrade.tooltip.title"),title:m.Ru.get("upgrade.tooltip.title")})})},w=n(48824),C=n(59414),O=n(26132),S=n(17781),A=n(65082),M=n(28691),P=n(55431),N=n(74078),I=n(27550),R=n(3596),D=n(78242),B=n(75516),E=n(20899),F=n(99495),L=n(17137),U=n(41806),T=n(84181),V=n(77238),_=n(23294),z=n(96974),q=n(40637),H=n(79664),J=n(30162),W=n(5904),X=n(71523),K=n(64501),Y=n.n(K),Z=n(38546),G=n(17636),Q=n(1958),$=n(57550),ee=n(23060),re=n(72365),ne=n(10806),te=n(20198),ie=n(81220),ae=n(40407),oe=n(77928),le=n(89),se=n(54477),ce=n(22424),ue=n(33786),de=n(40494),me=n(58237),he=n(36591),ge=n(38672),fe=n(69146),pe=n(84959),ve=n(57965),be=n(35489);const xe="m2grVeuHNwfGLVpaSBle",je="GLKjAw6oM_egXztVxKKB",ye="MGZ4oJmGVPrWsx5cT5hN",ke="DmrVJc9vWCbjU_DuRvfe",we="yLmA5f7x65en2MdKbIhX",Ce="F5J4ctyBbgSfS6qkFH5c";var Oe=i.memo((function(e){var r,n=e.uri,t=e.togglePlay,a=e.isPlaying,o=e.isActive,l=e.spec,s=e.logger,c=e.backgroundColor,u=e.name,d=e.artists,h=e.isPlayable,g=e.isSaved,f=e.sharingInfo,p=(0,ue.W)(),v=(0,de.n)(),b=(0,ge.f)(),x=(0,i.useMemo)((function(){return l.actionBarFactory()}),[l]),j=(0,fe.A)(n,g),k=(0,X.A)(j,2),w=k[0],C=k[1],S=(0,i.useCallback)((function(){var e=(0,me.$I)({isPlaying:a,isActive:o,spec:x.playButtonFactory(),logger:s,uri:n});t({loggingParams:e})}),[a,o,t,x,s,n]),A=(0,oe.d$)(),M=(0,ve.r)(Z.e,{data:{uri:n}}),P=M.spec,N=M.logger;(0,i.useEffect)((function(){A&&N.logImpression(P.impression())}),[A,N,P]);var I=(0,i.useCallback)((0,W.A)(Y().mark((function e(){var r,t;return Y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=x.saveButtonFactory(),w?r=t.hitDislike({itemToBeDisliked:n}):(r=t.hitLike({itemToBeLiked:n}),A&&N.logInteraction(P.hitFollow({itemToBeFollowed:n}))),s.logInteraction(r),p({targetUri:n,intent:w?"unsave":"save",type:"click"}),e.prev=4,e.next=7,C(!w);case 7:e.next=11;break;case 9:e.prev=9,e.t0=e.catch(4);case 11:case"end":return e.stop()}}),e,null,[[4,9]])}))),[p,n,w,C,x,s,A,N,P]),R=(0,se.X)(),D=(0,ce.j)();return(0,y.jsx)(G.E,{backgroundColor:c,children:(0,y.jsxs)(Q.S,{children:[(0,y.jsx)(q.D,{onClick:S,disabled:!h,isPlaying:a,size:D,uri:n}),R&&(0,y.jsx)(pe.r,{spec:x,children:(0,y.jsx)(le.Y,{entityName:u,contextUri:n,activationPlacement:"bottomEnd",size:D})}),(0,y.jsx)(te.h,{uri:n,action:he.no.SAVE_ALBUM,children:(0,y.jsx)($.M,{isAdded:w,onClick:I,disabled:!(v||null!=b&&b.getCapabilities().canModifyOffline),size:D,condensed:!0})}),(0,y.jsx)(ee.f,{uri:n,isFollowing:w,onClick:function(e,r){return(0,me.Qv)(r,x.downloadButtonFactory(),s,n)},onFollow:I,size:D,condensed:!0}),(0,y.jsx)(ne.b,{onShow:function(){return(0,me.R2)(x,s)},menu:(0,y.jsx)(O.h,{uri:n,artistUri:null==d||null===(r=d[0])||void 0===r?void 0:r.uri,sharingInfo:f}),children:(0,y.jsx)(re.e,{label:m.Ru.get("more.label.context",u),size:D})}),(0,y.jsx)("div",{className:we,children:(0,y.jsx)(ie.u,{property:be.mA,renderNewExperience:function(){return(0,y.jsx)(ae.g,{options:[],onSelect:function(){},selected:null,enableViewModeMenu:!0})}})})]})})})),Se=n(75325),Ae=n(2860),Me=n(56818),Pe=n(46400),Ne=function(e){var r=e.releases;return(0,y.jsx)(Me.W,{children:r.map((function(e){return(0,y.jsx)(Pe.D,{role:"menuitem",to:(0,Ae.o_h)(e.uri).toURLPath(!0),children:e.name},e.uri)}))})},Ie=(n(68216),864e5),Re=365.25*Ie;var De=n(36222),Be=n(66534),Ee=n(82553),Fe=n(32507),Le=n(84701),Ue=n(45114),Te=n(96463),Ve=n(98424);const _e="bhvAemcPYUmxOdBe1mVi",ze="hmgHdasWrZaA9tiXVw_u",qe="RmbxUFLb4j9KmgftJyk1",He="boNCdFnbh9y0PBweIDUt",Je="LfQtKa295FPgk8VuZRfD",We="Oytey9nANMtSDKSmZpJ6";var Xe=i.memo((function(e){var r=e.images,n=e.title,t=e.isOpen,a=e.onClose,o=(0,i.useMemo)((function(){return(0,Ve.g)(r,{desiredSize:1e4})}),[r]);return o?(0,y.jsx)(Ue.A,{className:_e,isOpen:t,onRequestClose:a,animation:{modal:{base:He,afterOpen:Je,beforeClose:We}},animated:!0,children:(0,y.jsxs)("div",{style:{"--image-width":"".concat(o.width,"px"),"--image-height":"".concat(o.height,"px")},className:ze,children:[(0,y.jsx)(Te._,{loading:"eager",alt:n,src:o.url,className:qe}),(0,y.jsx)(Le.H,{onClick:a,semanticColor:"textBase",children:m.Ru.get("web-player.cover-art-modal.close")})]})}):null})),Ke=n(19662),Ye=n(16062),Ze=n(33872),Ge=n(93611),Qe=new Ze.l("queryAlbumMerch","query","3ef44ed6f17be67299538fe77faffab4075aeaf9e1085f10fc835592266711b5",null),$e=n(66715),er=function(e){var r,n,t,i=e.albumName,a=e.albumURI,o=(n={uri:a},t={gcTime:5*Ge.i},(0,Ge.I)(Qe,n,t)).data,l=null!=o&&o.albumUnion&&"merch"in o.albumUnion?null==o||null===(r=o.albumUnion)||void 0===r||null===(r=r.merch)||void 0===r?void 0:r.items:[];return l&&(null==l?void 0:l.length)>0?(0,y.jsx)("div",{className:"contentSpacing",children:(0,y.jsx)("div",{className:$e.A.albumMerch,children:(0,y.jsx)(Ye.q,{id:i,uri:a,merchItems:l,merchVariant:"Album page merch items"})})}):null},rr=n(89851),nr=n(54466),tr=n(61490),ir=n(41987),ar=n(49093),or=n(73309),lr=n(45169),sr=n(29765),cr=n(77871),ur=n(59977),dr=(n(16347),n(18653),n(44671)),mr=(n(90489),n(65968)),hr=n(63318),gr=n(42399),fr=n(58213),pr=n(10942);function vr(e,r,n){return r=(0,fr.A)(r),(0,gr.A)(e,br()?Reflect.construct(r,n||[],(0,fr.A)(e).constructor):r.apply(e,n))}function br(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(br=function(){return!!e})()}var xr=function(e){function r(){return(0,hr.A)(this,r),vr(this,r,arguments)}return(0,pr.A)(r,e),(0,mr.A)(r)}(n(76621).e),jr=new Ze.l("getDynamicColors","query","8a460342b91785d42e8c016810c8d947c2e66281a2f03e700187c647805cc027",null),yr=(n(184),n(42486),n(86710));function kr(e){return null==e||null===(null==e?void 0:e.alpha)||null===(null==e?void 0:e.blue)||null===(null==e?void 0:e.green)||null===(null==e?void 0:e.red)?null:yr.Q.fromRGB({r:e.red,g:e.green,b:e.blue},function(e,r,n){if(r===n)throw new Error("Minimum and maximum values cannot be the same.");return(e-r)/(n-r)}(e.alpha,0,255))}function wr(e){if(!e)return null;var r=kr(e.backgroundBase),n=kr(e.backgroundTintedBase),t=kr(e.textBase),i=kr(e.textBrightAccent),a=kr(e.textSubdued);return r&&n&&t&&i&&a?{backgroundBase:r,backgroundTintedBase:n,textBase:t,textBrightAccent:i,textSubdued:a}:null}function Cr(e){var r=kr(null==e?void 0:e.encoreBaseSetTextColor),n=wr(null==e?void 0:e.minContrast),t=wr(null==e?void 0:e.highContrast),i=wr(null==e?void 0:e.higherContrast);return r&&n&&t&&i?{encoreBaseSetTextColor:r,minContrast:n,highContrast:t,higherContrast:i}:null}var Or=n(47370),Sr=n(4443);var Ar=n(74484),Mr=n(86634),Pr=n(46073);function Nr(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function Ir(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?Nr(Object(n),!0).forEach((function(r){(0,t.A)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Nr(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var Rr=i.lazy((function(){return n.e(5978).then(n.bind(n,85978))}));function Dr(e){switch(e){case Ee._.Single:return m.Ru.get("single");case Ee._.Ep:return m.Ru.get("ep");case Ee._.Compilation:return m.Ru.get("compilation");case Ee._.Audiobook:return m.Ru.get("card.tag.audiobook");case Ee._.Album:default:return m.Ru.get("album")}}var Br=function(e){var r,n,t,g,f,p,v,b,x,j,z=e.uri,K=e.album,Z=(0,o.zy)(),G=(0,ve.r)(d.E,{data:{uri:z}}),Q=G.spec,$=G.logger,ee=G.UBIFragment,re=(0,i.useMemo)((function(){return Q.trackListFactory()}),[Q]),ne=(0,i.useMemo)((function(){return Q.moreByArtistShelfFactory()}),[Q]),te=(0,i.useMemo)((function(){return Q.upgradeButtonFactory()}),[Q]),ie=K.moreAlbumsByArtist,ae=parseInt(new URLSearchParams((0,o.zy)().search).get("index")||"0",10),oe=(0,tr.J)(z),le=oe.playUri,se=oe.playOptions,ce=(0,Ar.P)({uri:le},{featureIdentifier:"album"},se),ue=ce.usePlayContextItem,de=ce.togglePlay,me=ce.isPlaying,he=ce.isActive,ge=(0,i.useCallback)((function(e,r){if(Q){var n=Q.headerFactory().artistNameFactory().hitUiNavigate({destination:r.creator.uri});$.logInteraction(n)}}),[$,Q]),fe=function(){var e=(0,i.useState)(!1),r=(0,X.A)(e,2),n=r[0],t=r[1];return{isOpen:n,openModal:(0,i.useCallback)((function(){return t(!0)}),[]),closeModal:(0,i.useCallback)((function(){return t(!1)}),[])}}(),pe=fe.isOpen,we=fe.openModal,Ae=fe.closeModal,Me=(0,u.NC)(ar.WJ1,{loadingValue:!1})?{onClick:we,ariaLabel:m.Ru.get("web-player.album.open_coverart_modal")}:{},Pe=(0,i.useCallback)((function(){return new URLSearchParams(Z.search.slice(1)).get("highlight")||""}),[Z.search]),De=K.uri,Ee=K.name,Le=K.albumType,Ue=null===(r=K.release)||void 0===r?void 0:r.date,Te=null===(n=K.release)||void 0===n?void 0:n.precision,Ve=K.nrTracks,_e=K.images,ze=null===(t=K.extractedColors)||void 0===t?void 0:t.colorRaw.hex,qe=K.artists,He=K.isPlayable,Je=K.isCatalogueRestricted,We=K.copyright.items,Ye=K.courtesyLine,Ze=K.duration.durationMs,Ge=K.duration.isEstimate,Qe=Pe(),$e=null!==(g=null===(f=(0,a.d4)(or.Ht).overrides)||void 0===f?void 0:f.locale)&&void 0!==g?g:m.Ru.getLocaleForTranslation(),sr=(0,nr.W)({uri:z,type:"locale"}),cr=(0,Mr.qc)({albumName:Ee,albumType:Le,albumArtists:qe.map((function(e){return e.name})).join(m.Ru.getSeparator()),shouldLocalize:sr,i18n:m.Ru});(0,ir.z)(ze||null);var mr=function(e){return(0,i.useMemo)((function(){if(null==e||!e.date)return null;if("day"===e.precision){var r=new Date(e.date),n=(new Date).getTime()-r.getTime(),t=n%Re;return t<3.5*Ie||t>312552e5?Math.round(n/Re):null}return null}),[e])}(K.release),hr=(0,rr.a)().isCompactMode,gr=(0,Be.t)(),fr=function(e){var r,n=(0,u.NC)(be.HO),t=(0,i.useContext)(Or.j).request,a=(0,dr.I)({enabled:n,queryKey:["useDynamicColors",e],gcTime:864e5,staleTime:432e5,queryFn:(r=(0,W.A)(Y().mark((function r(){var n,i,a,o,l,s;return Y().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,Sr.c)(t,jr,{uri:e});case 2:if(n=r.sent,i=null==n?void 0:n.data,a=null==i?void 0:i.lookup.at(0)){r.next=7;break}throw new xr("Empty response");case 7:if("AlbumResponseWrapper"!==(null==a?void 0:a.__typename)&&"ArtistResponseWrapper"!==(null==a?void 0:a.__typename)){r.next=13;break}if("Album"!==(o=a.data).__typename){r.next=11;break}return r.abrupt("return",Cr(null===(l=o.visualIdentity)||void 0===l||null===(l=l.squareCoverImage)||void 0===l?void 0:l.extractedColorSet));case 11:if("Artist"!==o.__typename){r.next=13;break}return r.abrupt("return",Cr(null===(s=o.visualIdentity)||void 0===s||null===(s=s.sixteenByNineCoverImage)||void 0===s?void 0:s.extractedColorSet));case 13:throw new xr("Invalid response: ".concat(n));case 14:case"end":return r.stop()}}),r)}))),function(){return r.apply(this,arguments)})});return a}(z),pr=fr.data,vr=(0,y.jsx)(O.h,{uri:K.uri,artistUri:null===(p=K.artists)||void 0===p||null===(p=p[0])||void 0===p?void 0:p.uri,sharingInfo:K.sharingInfo});return(0,y.jsxs)("section",{className:xe,"data-testid":"album-page",children:[(0,y.jsx)(S.Q,{children:cr}),!Qe&&(0,y.jsx)(Ke.c,{artistOrShow:qe.map((function(e){return e.name})).join(m.Ru.getSeparator()),title:Ee,uri:z,entityType:Ke.p.ALBUM}),null!==mr?(0,y.jsx)(i.Suspense,{fallback:null,children:(0,y.jsx)(Rr,{colorLight:null===(v=K.extractedColors)||void 0===v?void 0:v.colorLight.hex,colorDark:null===(b=K.extractedColors)||void 0===b?void 0:b.colorDark.hex,name:Ee,years:mr})}):null,(0,y.jsxs)(A.z,{backgroundColor:ze,children:[(0,y.jsxs)(N.h,{children:[(0,y.jsx)(q.D,{size:"medium",onClick:function(){return de()},disabled:!He,isPlaying:me,uri:z}),(0,y.jsx)(C.h,{menu:vr,children:(0,y.jsx)(I.X,{text:Ee,dragUri:z,dragLabel:Ee})})]}),(0,y.jsx)(C.h,{menu:vr,children:(0,y.jsx)(M.K,Ir({dragUri:De,images:_e,name:Ee,placeholderType:"album"},Me))}),(0,y.jsxs)(P.Y,{children:[(0,y.jsx)(V.B,{children:Dr(Le)}),(0,y.jsx)(C.h,{menu:vr,children:(0,y.jsx)(_.mm,{dragUri:K.uri,dragLabel:K.name,scaleAtMinWidth:_.tw,children:Ee})}),(0,y.jsx)(ur.dj,{dynamicColors:pr,children:(0,y.jsxs)(R.X,{children:[(0,y.jsx)(D.j,{creators:qe,onCreatorClick:ge}),(0,y.jsx)(U.J,{}),(0,y.jsx)(L.H,{releaseDate:Ue,datePrecision:Te}),(0,y.jsx)(U.J,{}),(0,y.jsxs)(E.r,{children:[(0,y.jsx)(B.G,{totalItems:Ve,containsTracks:!0}),(0,y.jsx)(T.W,{}),(0,y.jsx)(F.r,{durationMs:Ze,isEstimate:Ge})]})]})})]})]}),(0,y.jsx)(Oe,{backgroundColor:ze,uri:z,togglePlay:de,isPlaying:me,isActive:he,spec:Q,logger:$,sharingInfo:K.sharingInfo,name:K.name,artists:K.artists,isPlayable:K.isPlayable,isSaved:K.isSaved}),(0,y.jsxs)("div",{className:"contentSpacing",children:[Je&&(0,y.jsx)(k,{message:(0,Fe.E)(Le),className:Ce,spec:te,logger:$}),(0,y.jsx)(ee,{spec:re,children:(0,y.jsx)(J.a,{columns:gr,children:(0,y.jsx)(Se.F,{ariaLabel:Ee,nrTracks:(0,Fe.YD)(K.discs)?K.discs.totalCount+Ve:Ve,discs:K.discs,albumUri:De,highlightUri:Qe,scrollToIndex:ae,usePlayContextItem:ue,initalTracks:K.items,isCompactMode:hr})})}),(0,y.jsxs)("div",{className:ke,children:[(0,y.jsxs)("div",{children:[Ue&&(0,y.jsx)(l.E,{as:"p",variant:"bodySmall",children:(0,Pr.rh)((0,Pr.ad)(Ue),$e,{year:"numeric",month:"long",day:"numeric"},Te)}),(0,y.jsx)(lr.Z,{copyrights:We,courtesyLine:Ye})]}),K.releases.items.length>0&&(0,y.jsx)(w.t,{menu:(0,y.jsx)(Ne,{releases:K.releases.items}),children:function(e,r,n){return(0,y.jsxs)("button",{ref:n,className:ye,type:"button",onClick:r,children:[(0,y.jsx)(l.E,{variant:"bodySmall",children:m.Ru.get("album-page.more-releases",K.releases.items.length)}),e?(0,y.jsx)(s.J,{size:"small"}):(0,y.jsx)(c.y,{size:"small"})]})}})]})]}),(0,y.jsx)(er,{albumName:Ee,albumURI:De}),(0,y.jsx)(y.Fragment,{children:(null==ie?void 0:ie.length)>0&&(0,y.jsx)("div",{className:"contentSpacing",children:(0,y.jsx)(ee,{spec:ne,children:(0,y.jsx)(H.p,{index:0,id:"more-albums",className:je,title:m.Ru.get("album-page.more-by-artist",null==qe||null===(x=qe[0])||void 0===x?void 0:x.name),total:ie.length,seeAllUri:"".concat(null==qe||null===(j=qe[0])||void 0===j?void 0:j.uri.replace("artist","app:artist"),":discography"),seeAllLabel:m.Ru.get("artist-page.show-discography"),alwaysShowSeeAll:!0,children:ie.map((function(e,r){return(0,y.jsx)(h.R,{index:r,artists:qe,images:e.images||[],name:e.name,uri:e.uri,year:e.year,type:e.albumType,sharingInfo:e.sharingInfo},e.uri)}))})})})}),(0,y.jsx)(Xe,{title:cr,isOpen:pe,onClose:Ae,images:_e})]})};const Er=i.memo((function(){var e=(0,o.g)().albumId,r="spotify:album:".concat(e),n=(0,De.$)(r),t=n.loading,i=n.error,a=n.data,l=n.canLoadOffline;return t||!a?(0,y.jsx)(z.LoadingPage,{hasError:null!==i,loadOffline:l,errorMessage:m.Ru.get("error.not_found.title.album")}):(0,y.jsx)(cr.P,{surface:sr.u.ALBUM,uris:[r],children:(0,y.jsx)(Br,{uri:r,album:a})})}))},89:(e,r,n)=>{n.d(r,{Y:()=>t.Y});var t=n(93810)},54477:(e,r,n)=>{n.d(r,{X:()=>t.XR});var t=n(47060)},41987:(e,r,n)=>{n.d(r,{f:()=>l,z:()=>o});var t=n(30758),i=n(51646),a=n(11575);function o(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.l0o,n=(0,a.as)();return(0,t.useEffect)((function(){return e&&n((0,a.Mo)(e)),function(){n((0,a.Hf)())}}),[e,n]),e||r}var l=function(e){return o(e.color,e.fallbackColor),null}},66715:(e,r,n)=>{n.d(r,{A:()=>t});const t={albumMerch:"V1660uk_uXXZAMEmV4D4",shelfSpace:"RbnoPhjDDAtbxN8gAiif"}}}]);
//# sourceMappingURL=xpui-routes-album.js.map