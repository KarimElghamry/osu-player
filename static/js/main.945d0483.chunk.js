(this["webpackJsonposu-player"]=this["webpackJsonposu-player"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(7),l=n.n(c),o=n(1),s=n(2),r=n(4),u=n(3),d=n(5),p=(n(13),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={expanded:!1,pauseAnimation:!1},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.dancingEffect()}},{key:"dancingEffect",value:function(){var e=this;setInterval((function(){if(!e.state.pauseAnimation){e.setState({expanded:!e.state.expanded});var t=e.state.expanded?"calc((50vw + 50vh) / 2.4)":"calc((50vw + 50vh) / 3)";document.body.style.setProperty("--global--width",t)}}),300)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"logoContainer"},i.a.createElement("div",{className:"whiteCircle",onMouseEnter:function(){e.setState({pauseAnimation:!0,expanded:!0}),document.body.style.setProperty("--global--width","calc((50vw + 50vh) / 2.4)")},onMouseLeave:function(){e.setState({pauseAnimation:!1,expanded:!1}),document.body.style.setProperty("--global--width","calc((50vw + 50vh) / 3)")}},i.a.createElement("div",{className:"pinkCircle"},"osu!")))}}]),t}(i.a.Component)),f=(n(14),function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"uploadContainer"},i.a.createElement("button",{className:"uploadButton",onClick:function(){return e.props.onClick()}},"Upload"))}}]),t}(i.a.Component)),m=(n(15),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).handleUploadClick=function(){n.fileUpload.click()},n.state={selectedFile:null},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.body.style.backgroundColor="#18171C"}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"mainContainer"},i.a.createElement("input",{type:"file",id:"file",ref:function(t){return e.fileUpload=t},style:{display:"none"},onChange:function(){var t=e.fileUpload.files[0];e.setState({selectedFile:t})}}),i.a.createElement(p,null),i.a.createElement(f,{onClick:this.handleUploadClick}),i.a.createElement("div",{style:{color:"white",height:"50px",display:"flex",justifyContent:"center",alignItems:"center"}},null!=this.state.selectedFile?this.state.selectedFile.name:null))}}]),t}(i.a.Component));l.a.render(i.a.createElement(m,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.945d0483.chunk.js.map