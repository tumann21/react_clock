(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(7),c=n.n(a),o=n(2),r=n(3),i=n(5),s=n(4),l=n(1),u=n.n(l),b=(n(12),n(0)),m=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).timerId=setInterval((function(){}),1e3),t.state={date:new Date},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){t.setState({date:new Date}),console.log(t.state.date.toLocaleTimeString())}),1e3)}},{key:"componentDidUpdate",value:function(t){t.name!==this.props.name&&console.log("The Clock was renamed from oldName to newName")}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.state.date;return Object(b.jsxs)("p",{children:["Current time:"," ",t.toLocaleTimeString()]})}}]),n}(u.a.Component),h=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={isClockVisible:!0,clockName:5},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"React clock"}),Object(b.jsx)("button",{type:"button",className:"button",onClick:function(){return t.setState({isClockVisible:!0})},children:"Show"}),Object(b.jsx)("button",{type:"button",className:"button",onClick:function(){return t.setState({isClockVisible:!1})},children:"Hide"}),Object(b.jsx)("button",{type:"button",className:"button",onClick:function(){return t.setState({clockName:Math.floor(100*Math.random())})},children:"Set random name"}),this.state.isClockVisible&&Object(b.jsx)(m,{name:this.state.clockName})]})}}]),n}(u.a.Component),d=h;c.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.15105d36.chunk.js.map