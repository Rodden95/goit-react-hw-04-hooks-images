(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2ttsE",Modal:"Modal_Modal__3GYPU",photo:"Modal_photo__G15US"}},15:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__21I3n",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__FB64Z"}},19:function(e,t,a){e.exports={Button:"Button_Button__3iBm4"}},27:function(e,t,a){},5:function(e,t,a){e.exports={Searchbar:"SearchBar_Searchbar__3IUIu",SearchForm:"SearchBar_SearchForm__IBud9",SearchFormButton:"SearchBar_SearchFormButton__1egog",SearchFormButtonLabel:"SearchBar_SearchFormButtonLabel__2bVg7",SearchFormInput:"SearchBar_SearchFormInput__1RHMq",mainContainer:"SearchBar_mainContainer__OGIFK"}},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),i=(a(27),a(9)),s=a(10),u=a(22),l=a(21),m=a(16),h=a(3),f=a(2),j=a.n(f),b=a(7),p=a.n(b),d=a(15),g=a.n(d),O=a(1);function v(e){var t=e.image,a=e.modal,n=t.webformatURL,r=t.tags,c=t.id;return Object(O.jsx)("li",{className:g.a.ImageGalleryItem,onClick:a,children:Object(O.jsx)("img",{src:n,name:c,alt:r,className:g.a.ImageGalleryItemImage})})}j.a.ImageGalleryItem={image:j.a.array.isRequired,modal:j.a.func.isRequired};var y=a(18),_=a.n(y),x=a(19),I=a.n(x);function S(e){var t=e.onClick;return Object(O.jsx)("button",{type:"button",className:I.a.Button,onClick:t,children:"Load more"})}j.a.Button={};var B=a(12),k=a.n(B);function w(e){var t=e.photo,a=e.modal;return Object(O.jsx)("div",{className:k.a.Overlay,onClick:a,data:"asd",children:Object(O.jsx)("div",{className:k.a.Modal,children:t.map((function(e){var t=e.largeImageURL,a=e.id,n=e.tags;return Object(O.jsx)("img",{src:t,alt:n,className:k.a.photo},a)}))})})}j.a.Modal={photo:j.a.array.isRequired,modal:j.a.func.isRequired};var N=a(4),F=a.n(N),G=a(13),C=function(){function e(t,a,n){Object(i.a)(this,e),this.id=n,this.nextName=a,this.page=t,this.apiKey="24225279-9c926e63021bd911a81e6f13c"}return Object(s.a)(e,[{key:"fetchName",value:function(){var e=Object(G.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pixabay.com/api/?key=".concat(this.apiKey,"&q=").concat(this.nextName,"&per_page=12&page=1"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchPage",value:function(){var e=Object(G.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pixabay.com/api/?key=".concat(this.apiKey,"&q=").concat(this.nextName,"&per_page=12&page=").concat(this.page));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchPic",value:function(){var e=Object(G.a)(F.a.mark((function e(){var t,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pixabay.com/api/?key=".concat(this.apiKey,"&id=").concat(this.id));case 2:return t=e.sent,a=t.json(),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}();var q=a(20),E=a.n(q);function M(e){var t=e.name,a=Object(n.useState)(null),r=Object(h.a)(a,2),c=r[0],o=r[1],i=Object(n.useState)(1),s=Object(h.a)(i,2),u=s[0],l=s[1],f=Object(n.useState)(!1),j=Object(h.a)(f,2),b=j[0],d=j[1],g=Object(n.useState)(!1),y=Object(h.a)(g,2),x=y[0],I=y[1],B=Object(n.useState)(null),k=Object(h.a)(B,2),N=k[0],F=k[1],G=Object(n.useState)(null),q=Object(h.a)(G,2),M=q[0],R=q[1],L=function(e,t,a){return new C(e,t,a)}(u,t,N);Object(n.useEffect)((function(){t&&(d(!0),L.fetchName().then((function(e){var t=e.hits;console.log(0===t.length),0===t.length?alert("Enter correct request"):o(t)})).finally((function(){return d(!1)})))}),[t]),Object(n.useEffect)((function(){c&&L.fetchPage().then((function(e){var t=e.hits;return o([].concat(Object(m.a)(c),Object(m.a)(t)))})).finally((function(){return d(!1)}))}),[u]),Object(n.useEffect)((function(){N&&L.fetchPic().then((function(e){var t=e.hits;return R(t)})).catch(console.log)}),[N]),Object(n.useEffect)((function(){return window.addEventListener("keydown",K),function(){return window.removeEventListener("keydown",K)}}));var U=function(e){R(null),I(!0),F(e.target.name)},K=function(e){(e.target===e.currentTarget||x&&"Escape"===e.code)&&I(!1)};return Object(O.jsxs)("div",{className:p.a.center,children:[Object(O.jsxs)("ul",{className:p.a.ImageGallery,children:[!t&&Object(O.jsx)("div",{className:p.a.text,children:"...\u041d\u0430\u0439\u0434\u0435\u0442\u0441\u044f \u0432\u0441\u0435"}),b&&Object(O.jsx)("div",{className:p.a.loader,children:Object(O.jsx)(_.a,{type:"Bars",color:"#00BFFF",height:200,width:200,timeout:2e3})}),c&&c.map((function(e){var t=E.a.generate();return Object(O.jsx)(v,{image:e,modal:U},t)})),x&&M&&Object(O.jsx)(w,{photo:M,modal:K})]}),c&&Object(O.jsx)(S,{onClick:function(){l(u+1),d(!0)}})]})}j.a.ImageGallery={name:j.a.string.isRequired};var R=a(5),L=a.n(R);function U(e){var t=e.name,a=Object(n.useState)(""),r=Object(h.a)(a,2),c=r[0],o=r[1];return Object(O.jsx)("div",{className:L.a.mainContainer,children:Object(O.jsx)("header",{className:L.a.Searchbar,children:Object(O.jsxs)("form",{className:L.a.SearchForm,onSubmit:function(e){if(e.preventDefault(),""===c.trim())return alert("enter something...");t(c),o("")},children:[Object(O.jsx)("button",{type:"submit",className:L.a.SearchFormButton,children:Object(O.jsx)("span",{className:L.a.SearchFormButtonLabel,children:"Search"})}),Object(O.jsx)("input",{className:L.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){var t=e.currentTarget.value;return o(t.toLowerCase())}})]})})})}j.a.SearchBar={name:j.a.func.isRequired};a(58);var K=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",photo:null},e.nameFromSearchBar=function(t){e.setState({name:t})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.name;return Object(O.jsxs)("div",{children:[Object(O.jsx)(U,{name:this.nameFromSearchBar}),Object(O.jsx)(M,{name:e})]})}}]),a}(n.Component),P=K;o.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(P,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1xEfX",center:"ImageGallery_center__1HJR8",text:"ImageGallery_text__1qaa4",loader:"ImageGallery_loader__3MzUv"}}},[[59,1,2]]]);
//# sourceMappingURL=main.3273b5cb.chunk.js.map