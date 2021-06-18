(this["webpackJsonpreact-crud"]=this["webpackJsonpreact-crud"]||[]).push([[0],{37:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(29),c=n.n(i),s=n(13),r=n(9),l=n(10),o=n(12),u=n(11),d=n(2),h=(n(36),n(37),n(3)),b=n(30),j=n.n(b).a.create({baseURL:"https://djfinal.herokuapp.com/api/user",headers:{"Content-type":"application/json"}}),m=new(function(){function e(){Object(r.a)(this,e)}return Object(l.a)(e,[{key:"getAll",value:function(){return j.get("")}},{key:"get",value:function(e){return j.get("".concat(e))}},{key:"create",value:function(e){return j.post("",e)}},{key:"update",value:function(e,t){return j.put("".concat(e),t)}},{key:"delete",value:function(e){return j.delete("".concat(e))}},{key:"deleteAll",value:function(){return j.delete("")}},{key:"findByName",value:function(e){return j.get("?name=".concat(e))}}]),e}()),v=n(0),p=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).onChangeTitle=a.onChangeTitle.bind(Object(h.a)(a)),a.onChangepw=a.onChangepw.bind(Object(h.a)(a)),a.saveTutorial=a.saveTutorial.bind(Object(h.a)(a)),a.newTutorial=a.newTutorial.bind(Object(h.a)(a)),a.state={id:null,name:"",pw:"",submitted:!1},a}return Object(l.a)(n,[{key:"onChangeTitle",value:function(e){this.setState({name:e.target.value})}},{key:"onChangepw",value:function(e){this.setState({pw:e.target.value})}},{key:"saveTutorial",value:function(){var e=this,t={name:this.state.name,pw:this.state.pw};m.create(t).then((function(t){e.setState({id:t.data.id,name:t.data.name,pw:t.data.pw,submitted:!0}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"newTutorial",value:function(){this.setState({id:null,anme:"",pw:"",submitted:!1})}},{key:"render",value:function(){return Object(v.jsx)("div",{className:"submit-form",children:this.state.submitted?Object(v.jsxs)("div",{children:[Object(v.jsx)("h4",{children:"You submitted successfully!"}),Object(v.jsx)("button",{className:"btn btn-success",onClick:this.newTutorial,children:"Add"})]}):Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"title",children:"Title"}),Object(v.jsx)("input",{type:"text",className:"form-control",id:"title",required:!0,value:this.state.name,onChange:this.onChangeTitle,name:"title"})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"description",children:"Description"}),Object(v.jsx)("input",{type:"text",className:"form-control",id:"description",required:!0,value:this.state.pw,onChange:this.onChangepw,name:"description"})]}),Object(v.jsx)("button",{onClick:this.saveTutorial,className:"btn btn-success",children:"Submit"})]})})}}]),n}(a.Component),O=n(15),g=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).onChangeTitle=a.onChangeTitle.bind(Object(h.a)(a)),a.onChangeDescription=a.onChangeDescription.bind(Object(h.a)(a)),a.getTutorial=a.getTutorial.bind(Object(h.a)(a)),a.updatePublished=a.updatePublished.bind(Object(h.a)(a)),a.updateTutorial=a.updateTutorial.bind(Object(h.a)(a)),a.deleteTutorial=a.deleteTutorial.bind(Object(h.a)(a)),a.state={currentTutorial:{id:null,title:"",description:"",published:!1},message:""},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getTutorial(this.props.match.params.id)}},{key:"onChangeTitle",value:function(e){var t=e.target.value;this.setState((function(e){return{currentTutorial:Object(O.a)(Object(O.a)({},e.currentTutorial),{},{title:t})}}))}},{key:"onChangeDescription",value:function(e){var t=e.target.value;this.setState((function(e){return{currentTutorial:Object(O.a)(Object(O.a)({},e.currentTutorial),{},{description:t})}}))}},{key:"getTutorial",value:function(e){var t=this;m.get(e).then((function(e){t.setState({currentTutorial:e.data}),console.log(e.data)})).catch((function(e){console.log(e)}))}},{key:"updatePublished",value:function(e){var t=this,n={id:this.state.currentTutorial.id,title:this.state.currentTutorial.title,description:this.state.currentTutorial.description,published:e};m.update(this.state.currentTutorial.id,n).then((function(n){t.setState((function(t){return{currentTutorial:Object(O.a)(Object(O.a)({},t.currentTutorial),{},{published:e})}})),console.log(n.data)})).catch((function(e){console.log(e)}))}},{key:"updateTutorial",value:function(){var e=this;m.update(this.state.currentTutorial.id,this.state.currentTutorial).then((function(t){console.log(t.data),e.setState({message:"The tutorial was updated successfully!"})})).catch((function(e){console.log(e)}))}},{key:"deleteTutorial",value:function(){var e=this;m.delete(this.state.currentTutorial.id).then((function(t){console.log(t.data),e.props.history.push("/tutorials")})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.currentTutorial;return Object(v.jsx)("div",{children:t?Object(v.jsxs)("div",{className:"edit-form",children:[Object(v.jsx)("h4",{children:"Tutorial"}),Object(v.jsxs)("form",{children:[Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"title",children:"Title"}),Object(v.jsx)("input",{type:"text",className:"form-control",id:"title",value:t.title,onChange:this.onChangeTitle})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"description",children:"Description"}),Object(v.jsx)("input",{type:"text",className:"form-control",id:"description",value:t.description,onChange:this.onChangeDescription})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{children:Object(v.jsx)("strong",{children:"Status:"})}),t.published?"Published":"Pending"]})]}),t.published?Object(v.jsx)("button",{className:"badge badge-primary mr-2",onClick:function(){return e.updatePublished(!1)},children:"UnPublish"}):Object(v.jsx)("button",{className:"badge badge-primary mr-2",onClick:function(){return e.updatePublished(!0)},children:"Publish"}),Object(v.jsx)("button",{className:"badge badge-danger mr-2",onClick:this.deleteTutorial,children:"Delete"}),Object(v.jsx)("button",{type:"submit",className:"badge badge-success",onClick:this.updateTutorial,children:"Update"}),Object(v.jsx)("p",{children:this.state.message})]}):Object(v.jsxs)("div",{children:[Object(v.jsx)("br",{}),Object(v.jsx)("p",{children:"Please click on a Tutorial..."})]})})}}]),n}(a.Component),f=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).onChangeSearchTitle=a.onChangeSearchTitle.bind(Object(h.a)(a)),a.retrieveTutorials=a.retrieveTutorials.bind(Object(h.a)(a)),a.refreshList=a.refreshList.bind(Object(h.a)(a)),a.setActiveTutorial=a.setActiveTutorial.bind(Object(h.a)(a)),a.removeAllTutorials=a.removeAllTutorials.bind(Object(h.a)(a)),a.searchTitle=a.searchTitle.bind(Object(h.a)(a)),a.state={tutorials:[],currentTutorial:null,currentIndex:-1,searchTitle:""},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.retrieveTutorials()}},{key:"onChangeSearchTitle",value:function(e){var t=e.target.value;this.setState({searchTitle:t})}},{key:"retrieveTutorials",value:function(){var e=this;m.getAll().then((function(t){e.setState({tutorials:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"refreshList",value:function(){this.retrieveTutorials(),this.setState({currentTutorial:null,currentIndex:-1})}},{key:"setActiveTutorial",value:function(e,t){this.setState({currentTutorial:e,currentIndex:t})}},{key:"removeAllTutorials",value:function(){var e=this;m.deleteAll().then((function(t){console.log(t.data),e.refreshList()})).catch((function(e){console.log(e)}))}},{key:"searchTitle",value:function(){var e=this;m.findByName(this.state.searchTitle).then((function(t){e.setState({tutorials:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.searchTitle,a=t.tutorials,i=t.currentTutorial,c=t.currentIndex;return Object(v.jsxs)("div",{className:"list row",children:[Object(v.jsx)("div",{className:"col-md-8",children:Object(v.jsxs)("div",{className:"input-group mb-3",children:[Object(v.jsx)("input",{type:"text",className:"form-control",placeholder:"Search by title",value:n,onChange:this.onChangeSearchTitle}),Object(v.jsx)("div",{className:"input-group-append",children:Object(v.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:this.searchTitle,children:"Search"})})]})}),Object(v.jsxs)("div",{className:"col-md-6",children:[Object(v.jsx)("h4",{children:"Tutorials List"}),Object(v.jsx)("ul",{className:"list-group",children:a&&a.map((function(t,n){return Object(v.jsx)("li",{className:"list-group-item "+(n===c?"active":""),onClick:function(){return e.setActiveTutorial(t,n)},children:t.name},n)}))}),Object(v.jsx)("button",{className:"m-3 btn btn-sm btn-danger",onClick:this.removeAllTutorials,children:"Remove All"})]}),Object(v.jsx)("div",{className:"col-md-6",children:i?Object(v.jsxs)("div",{children:[Object(v.jsx)("h4",{children:"Tutorial"}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:Object(v.jsx)("strong",{children:"name:"})})," ",i.name]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:Object(v.jsx)("strong",{children:"pw:"})})," ",i.pw]}),Object(v.jsx)("div",{children:i.published?"Published":"Pending"}),Object(v.jsx)(s.b,{to:"/tutorials/"+i.id,className:"badge badge-warning",children:"Edit"})]}):Object(v.jsxs)("div",{children:[Object(v.jsx)("br",{}),Object(v.jsx)("p",{children:"Please click on a Tutorial..."})]})})]})}}]),n}(a.Component),x=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:[Object(v.jsx)("a",{href:"/tutorials",className:"navbar-brand",children:"bezKoder"}),Object(v.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(s.b,{to:"/tutorials",className:"nav-link",children:"Tutorials"})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(s.b,{to:"/add",className:"nav-link",children:"Add"})})]})]}),Object(v.jsx)("div",{className:"container mt-3",children:Object(v.jsxs)(d.c,{children:[Object(v.jsx)(d.a,{exact:!0,path:["/","/tutorials"],component:f}),Object(v.jsx)(d.a,{exact:!0,path:"/add",component:p}),Object(v.jsx)(d.a,{path:"/tutorials/:id",component:g})]})})]})}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(v.jsx)(s.a,{children:Object(v.jsx)(x,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.8ef9496e.chunk.js.map