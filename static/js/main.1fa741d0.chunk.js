(this.webpackJsonplivetex=this.webpackJsonplivetex||[]).push([[0],{138:function(e,t,a){},139:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n=a(14),r=a(0),c=a.n(r),i=a(45),s=a.n(i),o=(a(137),a(138),a(71)),l=a(102),h=a(103),u=a(107),j=a(106),b=a(105),d=a(160),f=a(164),O=a(163),p=a(118),x=a(68),m=a(162),v=a(161),g=(a(139),function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsx)(b.a.Formula,{formula:"$$ "+this.props.formula+" $$"})}},{key:"shouldComponentUpdate",value:function(e,t){return this.props.formula!==e.formula}}]),a}(c.a.Component)),C=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={text:"",formulas:[]},n.handleChange=n.handleChange.bind(Object(o.a)(n)),n}return Object(h.a)(a,[{key:"handleChange",value:function(e){this.setState({text:e.target.value}),this.setState({formulas:e.target.value.split(/(?:\n)/g)})}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(d.a,{text:!0,children:[Object(n.jsxs)(f.a,{basic:!0,clearing:!0,textAlign:"center",children:[Object(n.jsxs)(O.a,{color:"black",as:"a",href:"https://mchartigan.github.io/",floated:"left",children:[Object(n.jsx)(p.a,{src:"/LiveTeX/favicon.ico",avatar:!0}),"Go to Home"]}),"LiveTeX",Object(n.jsxs)(O.a,{as:"a",href:"https://github.com/mchartigan/LiveTeX",floated:"right",children:[Object(n.jsx)(x.a,{name:"github"})," Visit on Github"]})]}),Object(n.jsx)(f.a,{children:Object(n.jsx)(m.a,{children:Object(n.jsx)(v.a,{rows:5,placeholder:"Type LaTeX here",value:this.state.text,onChange:this.handleChange})})}),Object(n.jsx)(f.a,{children:Object(n.jsx)(b.a.Provider,{children:this.state.formulas.map((function(e,t){return Object(n.jsx)(g,{formula:e},e+"-"+t)}))})})]})})}}]),a}(c.a.Component);s.a.render(Object(n.jsx)(C,{}),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.1fa741d0.chunk.js.map