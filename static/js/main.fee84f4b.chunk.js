(this["webpackJsonpfirst-app"]=this["webpackJsonpfirst-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),s=n.n(c),o=(n(15),n(9)),u=n(8),l=n(1),i=n(2),m=n(4),p=n(3),b=n(5),h=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("span",{className:this.getBadgeClasses()},this.formatCount()),r.a.createElement("button",{onClick:function(){return e.props.onIncrement(e.props.counter)},className:"btn btn-secondary btn-sm"},"Increment"),r.a.createElement("button",{onClick:function(){return e.props.onDelete(e.props.counter.id)},className:"btn btn-danger btn-sm m-2"},"Delete"))}},{key:"getBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=0===this.props.counter.value?"warning":"primary"}},{key:"formatCount",value:function(){var e=this.props.counter;return 0===e.value?"Zero":e.value}}]),t}(a.Component),d=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.props.onReset,className:"btn btn-primary btn-sm m-2"},"Reset"),this.props.counters.map((function(t){return r.a.createElement(h,{key:t.id,onDelete:e.props.onDelete,onIncrement:e.props.onIncrement,counter:t})})))}}]),t}(a.Component),v=function(e){return r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"Navbar"," ",r.a.createElement("span",{className:"badge bage-pill badge-secondary"},e.totalCounters)))},f=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={counters:[{id:1,value:0},{id:2,value:0},{id:3,value:0},{id:4,value:0},{id:5,value:0}]},n.handleIncrement=function(e){var t=Object(u.a)(n.state.counters),a=t.indexOf(e);t[a]=Object(o.a)({},e),t[a].value++,n.setState({counters:t})},n.handleReset=function(){var e=n.state.counters.map((function(e){return e.value=0,e}));n.setState({counters:e})},n.handleDelete=function(e){var t=n.state.counters.filter((function(t){return t.id!==e}));n.setState({counters:t})},n}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{totalCounters:this.state.counters.filter((function(e){return e.value>0})).length}),r.a.createElement("main",{className:"container"},r.a.createElement(d,{counters:this.state.counters,onReset:this.handleReset,onDelete:this.handleDelete,onIncrement:this.handleIncrement})))}}]),t}(a.Component);s.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.fee84f4b.chunk.js.map