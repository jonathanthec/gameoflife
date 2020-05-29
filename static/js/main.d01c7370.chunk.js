(this.webpackJsonpgameoflife=this.webpackJsonpgameoflife||[]).push([[0],{38:function(e,t,a){e.exports=a(52)},43:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),i=a.n(r),o=a(37),c=(a(43),a(16));function s(e){return l.a.createElement("div",{className:e.boxClass,id:e.boxId,onClick:function(){e.selectBox(e.row,e.col)}})}function u(e){for(var t=e.rows,a=e.cols,n=e.gridFull,r=[],i="",o=0;o<t;o++)for(var c=0;c<a;c++){var u=o+"_"+c;i=n[o][c]?"box alive":"box dead",r.push(l.a.createElement(s,{boxClass:i,row:o,col:c,selectBox:e.selectBox,boxId:u,key:u}))}return(l.a.createElement("div",{className:"grid",style:{width:14*a}},r))}var m=a(22),h=a(23),d=a(11);function f(e){var t=e.start,a=e.pause,n=e.clear,r=e.slow,i=e.fast,o=e.seed,c=e.gridSize;return(l.a.createElement(m.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",className:"control-bar-container"},l.a.createElement(m.a.Brand,{href:"/gameoflife",className:"control-bar-container-title"},"Conway's Game of Life"),l.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(h.a,{className:"mr-auto"},l.a.createElement(d.a,{title:"Select Grid",id:"collasible-nav-dropdown",className:"control-bar-button",variant:"outline-light"},l.a.createElement(d.a.Item,{onClick:function(){return c("1")}},"Small Grid"),l.a.createElement(d.a.Item,{onClick:function(){return c("2")}},"Medium Grid"),l.a.createElement(d.a.Item,{onClick:function(){return c("3")}},"Large Grid")),l.a.createElement(d.a,{title:"Start",id:"collasible-nav-dropdown",className:"control-bar-button",variant:"outline-light"},l.a.createElement(d.a.Item,{onClick:r},"Slow"),l.a.createElement(d.a.Item,{onClick:t},"Fast"),l.a.createElement(d.a.Item,{onClick:i},"Faster")),l.a.createElement(h.a.Link,{className:"control-bar-button",onClick:a},"Pause"),l.a.createElement(h.a.Link,{className:"control-bar-button",onClick:n},"Clear"),l.a.createElement(h.a.Link,{className:"control-bar-button",onClick:o},"Randomize")))))}function b(){return l.a.createElement("div",null,l.a.createElement("h2",{className:"gen-count"},"Instructions"),l.a.createElement("div",{className:"about-text"},l.a.createElement("p",null,"For this simple simulation, start by choosing a grid. There are three sizes to pick from. Next, use your mouse to mark cells as alive (will be denoted by the color green), as all cells start off as being dead. Alternatively, you may click Randomize to generate a random grid with living cells. To start the animation, select an option from Start, which contains a list of speed to run the animations in. ")),l.a.createElement("h2",{className:"gen-count"},"More On The Topic..."),l.a.createElement("div",{className:"about-text"},l.a.createElement("p",null,"The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves."),l.a.createElement("p",null,"The universe of this simple Game of Life is a two-dimensional grid of square cells, each of which is in one of two possible states, live or dead. Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:"),l.a.createElement("ol",null,l.a.createElement("li",null,"Any live cell with fewer than two live neighbours dies, as if by underpopulation."),l.a.createElement("li",null,"Any live cell with two or three live neighbours lives on to the next generation."),l.a.createElement("li",null,"Any live cell with more than three live neighbours dies, as if by overpopulation."),l.a.createElement("li",null,"Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.")),l.a.createElement("p",null,"These rules, which compare the behavior of the automaton to real life, can be condensed into the following:"),l.a.createElement("ol",null,l.a.createElement("li",null,"Any live cell with two or three live neighbours survives."),l.a.createElement("li",null,"Any dead cell with three live neighbours becomes a live cell."),l.a.createElement("li",null,"All other live cells die in the next generation. Similarly, all other dead cells stay dead.")),l.a.createElement("p",null,"The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick. Each generation is a pure function of the preceding one. The rules continue to be applied repeatedly to create further generations.")))}function v(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(100),o=Object(c.a)(i,2),s=o[0],m=o[1],h=Object(n.useState)(30),d=Object(c.a)(h,2),v=d[0],E=d[1],p=Object(n.useState)(50),y=Object(c.a)(p,2),w=y[0],k=y[1],O=Object(n.useState)(0),x=Object(c.a)(O,2),N=x[0],S=x[1],C=Object(n.useState)(Array(v).fill().map((function(){return Array(w).fill(!1)}))),j=Object(c.a)(C,2),I=j[0],A=j[1],T=Object(n.useRef)(null),G=function(){r(!0),clearInterval(T.current),T.current=setInterval(z,s)},L=function(){r(!1),A(Array(v).fill().map((function(){return Array(w).fill(!1)}))),S(0)},z=function(){for(var e=I,t=g(I),a=0;a<v;a++)for(var n=0;n<w;n++){var l=0;a>0&&e[a-1][n]&&l++,a>0&&n>0&&e[a-1][n-1]&&l++,a>0&&n<w-1&&e[a-1][n+1]&&l++,n<w-1&&e[a][n+1]&&l++,n>0&&e[a][n-1]&&l++,a<v-1&&e[a+1][n]&&l++,a<v-1&&n>0&&e[a+1][n-1]&&l++,a<v-1&&n<w-1&&e[a+1][n+1]&&l++,e[a][n]&&(l<2||l>3)&&(t[a][n]=!1),e[a][n]||3!==l||(t[a][n]=!0)}A(t),S(N+1)};return Object(n.useEffect)((function(){a&&G()}),[G]),l.a.createElement("div",null,l.a.createElement(f,{start:G,pause:function(){r(!1),clearInterval(T.current)},clear:L,slow:function(){r(!0),m(1e3),G()},fast:function(){r(!0),m(100),G()},seed:function(){L();for(var e=g(I),t=0;t<v;t++)for(var a=0;a<w;a++)1===Math.floor(4*Math.random())&&(e[t][a]=!0);A(e)},gridSize:function(e){switch(e){case"1":E(15),k(25);break;case"2":E(25),k(40);break;case"3":E(30),k(50);break;default:E(30),k(50)}}}),l.a.createElement("h2",{className:"gen-count"},"Current Generation: ",N),l.a.createElement(u,{rows:v,cols:w,gridFull:I,selectBox:function(e,t){var a=g(I);a[e][t]=!a[e][t],A(a)}}),l.a.createElement(b,null))}function g(e){return JSON.parse(JSON.stringify(e))}function E(){return l.a.createElement("div",null,l.a.createElement(v,null))}i.a.render(l.a.createElement(o.a,null,l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null))),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.d01c7370.chunk.js.map