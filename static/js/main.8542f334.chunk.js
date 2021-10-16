(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{34:function(e,t,a){},35:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(13),s=a.n(c),i=(a(34),a(4)),o=a(5),u=a(8),l=a(7),h=(a(35),a(14)),p=a(16),d=a(0),g={searchValue:"",perPage:12},m=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state=Object(p.a)({},g),e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(h.a)({},n,r))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.searchValue,r=a.perPage;e.props.getSearchValues(n,r),e.resetForm()},e.resetForm=function(){return e.setState(Object(p.a)({},g))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.handleChange,t=this.handleSubmit;return Object(d.jsx)("header",{className:"Searchbar",children:Object(d.jsxs)("form",{className:"SearchForm",onSubmit:t,children:[Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(d.jsx)("input",{className:"SearchForm-input",type:"text",name:"searchValue",value:this.state.searchValue,onChange:e,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),b=a(9),j=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.image,t=e.id,a=e.webformatURL,n=e.tags;return Object(d.jsx)("li",{className:"ImageGalleryItem",children:Object(d.jsx)("img",{src:a,alt:n,id:t,className:"ImageGalleryItem-image"})},t)}}]),a}(n.Component),f=a(17),O=a.n(f),y=a(27),v=a(28),k=a.n(v),x=a(3),w=(a(56),a(57),a(58),a(59),a(10));function S(e){Object(x.error)({text:e,delay:4e3,modules:new Map([].concat(Object(b.a)(x.defaultModules),[[w,{swipeDismiss:!0}]]))})}x.defaults.styling="angeler",x.defaults.icons="angeler",x.defaults.delay=800,x.defaults.sticker=!1,x.defaults.animateSpeed="slow",x.defaults.shadow=!1;var C=function(){function e(t,a){Object(i.a)(this,e),this.base_url=t,this.api_key=a,this._searchQuery="",this._page=1,this._perPage=12,this.endPoint=""}return Object(o.a)(e,[{key:"searchQuery",get:function(){return this._searchQuery},set:function(e){return this._searchQuery=e}},{key:"page",get:function(){return this._page},set:function(e){return this._page+=e}},{key:"perPage",get:function(){return this._perPage},set:function(e){return this._perPage=e}},{key:"resetPage",value:function(){return this._page=1}},{key:"searchImages",value:function(){var e=Object(y.a)(O.a.mark((function e(){var t,a,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"image_type=photo&orientation=horizontal",t="?q=".concat(this.searchQuery,"&page=").concat(this.page,"&per_page=").concat(this.perPage,"&key=").concat(this.api_key,"&").concat("image_type=photo&orientation=horizontal"),a=this.base_url+this.endPoint+t,e.prev=3,e.next=6,k.a.get(a);case 6:return n=e.sent,e.next=9,n.data.hits;case 9:return e.abrupt("return",e.sent);case 12:return e.prev=12,e.t0=e.catch(3),e.abrupt("return",S(e.t0.message));case 15:case"end":return e.stop()}}),e,this,[[3,12]])})));return function(){return e.apply(this,arguments)}}()}]),e}();function _(e){var t=e.onClick;return Object(d.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})}var M=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleCloseOrEscape=function(t){t.currentTarget!==t.target&&"Escape"!==t.code||e.props.toggleModal()},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleCloseOrEscape)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleCloseOrEscape)}},{key:"render",value:function(){var e=this.props.image,t=e.largeImageURL,a=e.tags;return Object(c.createPortal)(Object(d.jsx)("div",{className:"Overlay",onClick:this.handleCloseOrEscape,children:Object(d.jsx)("div",{className:"Modal",children:Object(d.jsx)("img",{src:t,alt:a})})}),document.getElementById("modalRoot"))}}]),a}(n.Component),N=a(29),V=a.n(N),I=(a(80),function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(d.jsx)(V.a,{className:"Loader",type:"Oval",color:"#00BFFF",height:100,width:100,timeout:3e3})}}]),a}(n.Component)),P=new C("https://pixabay.com/api/","23045990-a26bb8d890e0b5c9b60396550"),F=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={gallery:[],status:"init",showModal:!1,image:{}},e.handleClick=function(){P.page=1,e.fetch()},e.showImage=function(t){var a=e.state.gallery.find((function(e){return Number(e.id)===Number(t)}));e.setState({image:a}),e.toggleModal()},e.handleImageClick=function(t){return e.showImage(t.target.id)},e.toggleModal=function(){return e.setState({showModal:!e.state.showModal})},e}return Object(o.a)(a,[{key:"fetch",value:function(){var e=this;P.searchImages().then((function(t){"pending"===e.state.status?e.setState({gallery:t}):e.setState((function(e){return{gallery:[].concat(Object(b.a)(e.gallery),Object(b.a)(t))}})),e.setState({status:"success"}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(t){e.setState({status:"error"}),S(t.message)}))}},{key:"componentDidUpdate",value:function(e,t){e.searchValue!==this.props.searchValue&&(this.setState({status:"pending"}),P.resetPage(),P.searchQuery=this.props.searchValue,this.fetch())}},{key:"render",value:function(){var e=this.state,t=e.gallery,a=e.status,n=e.image,r=e.showModal,c=this.handleImageClick,s=this.handleClick,i=this.toggleModal;return"init"===a?Object(d.jsx)("h1",{children:" "}):"pending"===a?Object(d.jsx)(I,{}):"success"===a?t.length>0&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("ul",{className:"ImageGallery",onClick:c,children:t.map((function(e){return Object(d.jsx)(j,{image:e})}))}),Object(d.jsx)(_,{onClick:s}),r&&Object(d.jsx)(M,{image:n,toggleModal:i})]}):"error"===a?Object(d.jsx)("h1",{children:"ALARMA!!!"}):void 0}}]),a}(n.Component),E=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchValue:"",perPage:12},e.getSearchValues=function(t,a){return e.setState({searchValue:t,perPage:a})},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{getSearchValues:this.getSearchValues}),Object(d.jsx)(F,{searchValue:this.state.searchValue})]})})}}]),a}(n.Component),A=E;s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.8542f334.chunk.js.map