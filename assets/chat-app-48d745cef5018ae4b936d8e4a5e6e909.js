define("chat-app/adapters/application",["exports","chat-app/config/environment","firebase","emberfire/adapters/firebase"],function(e,t,a,n){"use strict";e["default"]=n["default"].extend({firebase:new a["default"](t["default"].firebase)})}),define("chat-app/app",["exports","ember","ember/resolver","ember/load-initializers","chat-app/config/environment"],function(e,t,a,n,r){"use strict";var d;t["default"].MODEL_FACTORY_INJECTIONS=!0,d=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:a["default"]}),n["default"](d,r["default"].modulePrefix),e["default"]=d}),define("chat-app/controllers/messages/new",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({actions:{addMessage:function(){var e=this.store.createRecord("message",{name:this.get("name"),body:this.get("body")});e.save(),this.setProperties({name:"",body:""})}}})}),define("chat-app/initializers/app-version",["exports","chat-app/config/environment","ember"],function(e,t,a){"use strict";var n=a["default"].String.classify,r=!1;e["default"]={name:"App Version",initialize:function(e,d){if(!r){var i=n(d.toString());a["default"].libraries.register(i,t["default"].APP.version),r=!0}}}}),define("chat-app/initializers/emberfire",["exports","emberfire/initializers/emberfire"],function(e,t){"use strict";e["default"]=t["default"]}),define("chat-app/initializers/export-application-global",["exports","ember","chat-app/config/environment"],function(e,t,a){"use strict";function n(e,n){var r=t["default"].String.classify(a["default"].modulePrefix);a["default"].exportApplicationGlobal&&!window[r]&&(window[r]=n)}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("chat-app/models/message",["exports","ember-data"],function(e,t){"use strict";e["default"]=t["default"].Model.extend({name:t["default"].attr("string"),body:t["default"].attr("string")})}),define("chat-app/router",["exports","ember","chat-app/config/environment"],function(e,t,a){"use strict";var n=t["default"].Router.extend({location:a["default"].locationType});n.map(function(){this.route("about"),this.resource("messages",function(){this.route("new")})}),e["default"]=n}),define("chat-app/routes/application",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({isEnteringMessage:function(){return!0}})}),define("chat-app/routes/index",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({beforeModel:function(){this.transitionTo("messages")}})}),define("chat-app/routes/messages",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({model:function(){return this.store.find("message")}})}),define("chat-app/templates/about",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div"),n=e.createTextNode("A simple chat app to play with Ember and Firebase.");return e.appendChild(a,n),e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom;n.detectNamespace(a);var r;return t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(r=this.build(n),this.hasRendered?this.cachedFragment=r:this.hasRendered=!0),this.cachedFragment&&(r=n.cloneNode(this.cachedFragment,!0))):r=this.build(n),r}}}())}),define("chat-app/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("Messages");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom;n.detectNamespace(a);var r;return t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(r=this.build(n),this.hasRendered?this.cachedFragment=r:this.hasRendered=!0),this.cachedFragment&&(r=n.cloneNode(this.cachedFragment,!0))):r=this.build(n),r}}}(),t=function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("About");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom;n.detectNamespace(a);var r;return t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(r=this.build(n),this.hasRendered?this.cachedFragment=r:this.hasRendered=!0),this.cachedFragment&&(r=n.cloneNode(this.cachedFragment,!0))):r=this.build(n),r}}}();return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","container");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","row");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("nav");e.setAttribute(r,"class","navbar navbar-default");var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("div");e.setAttribute(d,"class","container-fluid");var i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createElement("div");e.setAttribute(i,"class","navbar-header");var c=e.createTextNode("\n          ");e.appendChild(i,c);var c=e.createElement("a");e.setAttribute(c,"class","navbar-brand"),e.setAttribute(c,"href","#");var s=e.createTextNode("ChatApp");e.appendChild(c,s),e.appendChild(i,c);var c=e.createTextNode("\n        ");e.appendChild(i,c),e.appendChild(d,i);var i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createElement("div"),c=e.createTextNode("\n          ");e.appendChild(i,c);var c=e.createElement("ul");e.setAttribute(c,"class","nav navbar-nav");var s=e.createTextNode("\n            ");e.appendChild(c,s);var s=e.createElement("li");e.setAttribute(s,"class","active");var l=e.createComment("");e.appendChild(s,l),e.appendChild(c,s);var s=e.createTextNode("\n            ");e.appendChild(c,s);var s=e.createElement("li"),l=e.createComment("");e.appendChild(s,l),e.appendChild(c,s);var s=e.createTextNode("\n          ");e.appendChild(c,s),e.appendChild(i,c);var c=e.createTextNode("\n        ");e.appendChild(i,c),e.appendChild(d,i);var i=e.createTextNode("\n      ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","row"),e.setAttribute(n,"id","mainpage");var r=e.createTextNode("\n\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","chat-body");var d=e.createTextNode("\n     ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("\n   ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");return e.appendChild(a,n),e.appendChild(t,a),t},render:function(a,n,r){var d=n.dom,i=n.hooks,c=i.block,s=i.content;d.detectNamespace(r);var l;n.useFragmentCache&&d.canClone?(null===this.cachedFragment&&(l=this.build(d),this.hasRendered?this.cachedFragment=l:this.hasRendered=!0),this.cachedFragment&&(l=d.cloneNode(this.cachedFragment,!0))):l=this.build(d);var o=d.childAt(l,[0]),h=d.childAt(o,[1,1,1,3,1]),p=d.createMorphAt(d.childAt(h,[1]),0,0),u=d.createMorphAt(d.childAt(h,[3]),0,0),m=d.createMorphAt(d.childAt(o,[3,1]),1,1);return c(n,p,a,"link-to",["messages"],{classNames:""},e,null),c(n,u,a,"link-to",["about"],{classNames:""},t,null),s(n,m,a,"outlet"),l}}}())}),define("chat-app/templates/index",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,d=r.content;n.detectNamespace(a);var i;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(i=this.build(n),this.hasRendered?this.cachedFragment=i:this.hasRendered=!0),this.cachedFragment&&(i=n.cloneNode(this.cachedFragment,!0))):i=this.build(n);var c=n.createMorphAt(i,0,0,a);return n.insertBoundary(i,0),d(t,c,e,"outlet"),i}}}())}),define("chat-app/templates/messages",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("Add a new message");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom;n.detectNamespace(a);var r;return t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(r=this.build(n),this.hasRendered?this.cachedFragment=r:this.hasRendered=!0),this.cachedFragment&&(r=n.cloneNode(this.cachedFragment,!0))):r=this.build(n),r}}}(),t=function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("  ");e.appendChild(t,a);var a=e.createElement("button"),n=e.createTextNode("\n    Clear completed.\n  ");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom;n.detectNamespace(a);var r;return t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(r=this.build(n),this.hasRendered?this.cachedFragment=r:this.hasRendered=!0),this.cachedFragment&&(r=n.cloneNode(this.cachedFragment,!0))):r=this.build(n),r}}}(),a=function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("	");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","each-msg");var n=e.createElement("em"),r=e.createComment("");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode(": ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,d=r.content;n.detectNamespace(a);var i;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(i=this.build(n),this.hasRendered?this.cachedFragment=i:this.hasRendered=!0),this.cachedFragment&&(i=n.cloneNode(this.cachedFragment,!0))):i=this.build(n);var c=n.childAt(i,[1]),s=n.createMorphAt(n.childAt(c,[0]),0,0),l=n.createMorphAt(c,2,2);return d(t,s,e,"message.name"),d(t,l,e,"message.body"),i}}}();return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","msg-btn");var n=e.createComment("");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(n,r,d){var i=r.dom,c=r.hooks,s=c.block,l=c.content,o=c.get;i.detectNamespace(d);var h;r.useFragmentCache&&i.canClone?(null===this.cachedFragment&&(h=this.build(i),this.hasRendered?this.cachedFragment=h:this.hasRendered=!0),this.cachedFragment&&(h=i.cloneNode(this.cachedFragment,!0))):h=this.build(i);var p=i.createMorphAt(i.childAt(h,[0]),0,0),u=i.createMorphAt(h,2,2,d),m=i.createMorphAt(h,4,4,d),f=i.createMorphAt(h,6,6,d);return s(r,p,n,"link-to",["messages.new"],{classNames:"btn btn-primary"},e,null),l(r,u,n,"outlet"),s(r,m,n,"if",[o(r,n,"isEnteringMessage")],{},t,null),s(r,f,n,"each",[o(r,n,"model")],{keyword:"message"},a,null),h}}}())}),define("chat-app/templates/messages/new",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","new-msg-form");var n=e.createTextNode("\n	");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n	");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n	");e.appendChild(a,n);var n=e.createElement("button");e.setAttribute(n,"class","btn btn-primary");var r=e.createTextNode("Submit");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");return e.appendChild(a,n),e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,d=r.get,i=r.inline,c=r.element;n.detectNamespace(a);var s;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(s=this.build(n),this.hasRendered?this.cachedFragment=s:this.hasRendered=!0),this.cachedFragment&&(s=n.cloneNode(this.cachedFragment,!0))):s=this.build(n);var l=n.childAt(s,[1]),o=n.childAt(l,[5]),h=n.createMorphAt(l,1,1),p=n.createMorphAt(l,3,3);return i(t,h,e,"input",[],{type:"text",placeholder:"Name",value:d(t,e,"name"),"class":"name-input"}),i(t,p,e,"input",[],{type:"text",placeholder:"Message",value:d(t,e,"body"),"class":"msg-input"}),c(t,o,e,"action",["addMessage"],{}),s}}}())}),define("chat-app/config/environment",["ember"],function(e){var t="chat-app";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{"default":r}}catch(d){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("chat-app/tests/test-helper"):require("chat-app/app")["default"].create({name:"chat-app",version:"0.0.0.5a7ce46a"});