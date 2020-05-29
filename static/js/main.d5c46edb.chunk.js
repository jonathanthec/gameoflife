(this.webpackJsonpgameoflife=this.webpackJsonpgameoflife||[]).push([[0],{23:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(7),r=a.n(i),o=a(21),c=(a(28),a(5));function s(e){return l.a.createElement("div",{className:e.boxClass,id:e.boxId,onClick:function(){e.selectBox(e.row,e.col)}})}function u(e){for(var t=e.rows,a=e.cols,n=e.gridFull,i=[],r="",o=0;o<t;o++)for(var c=0;c<a;c++){var u=o+"_"+c;r=n[o][c]?"box alive":"box dead",i.push(l.a.createElement(s,{boxClass:r,row:o,col:c,selectBox:e.selectBox,boxId:u,key:u}))}return(l.a.createElement("div",{className:"grid",style:{width:14*a}},i))}var h=a(13);function m(e){e.start,e.pause,e.clear,e.slow,e.fast,e.seed,e.gridSize;return(l.a.createElement(h.a,{collapseOnSelect:!0,expand:"lg",className:"control-bar-container",style:{backgroundColor:"orange"}},l.a.createElement(h.a.Brand,{href:"/gameoflife",className:"control-bar-container-title"},"Conway's Game of Life")))}function f(){return l.a.createElement("div",null,l.a.createElement("h2",{className:"gen-count"},"Instructions"),l.a.createElement("div",{className:"about-text"},l.a.createElement("p",null,"For this simple simulation, start by choosing a grid. There are three sizes to pick from. Next, use your mouse to mark cells as alive (will be denoted by the color green), as all cells start off as being dead. Alternatively, you may click Randomize to generate a random grid with living cells. To start the animation, select an option from Start, which contains a list of speed to run the animations in. ")),l.a.createElement("h2",{className:"gen-count"},"More On The Topic..."),l.a.createElement("div",{className:"about-text"},l.a.createElement("p",null,"The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.[1] It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves."),l.a.createElement("p",null,"The universe of this simple Game of Life is a two-dimensional grid of square cells, each of which is in one of two possible states, live or dead. Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:"),l.a.createElement("ol",null,l.a.createElement("li",null,"Any live cell with fewer than two live neighbours dies, as if by underpopulation."),l.a.createElement("li",null,"Any live cell with two or three live neighbours lives on to the next generation."),l.a.createElement("li",null,"Any live cell with more than three live neighbours dies, as if by overpopulation."),l.a.createElement("li",null,"Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.")),l.a.createElement("p",null,"These rules, which compare the behavior of the automaton to real life, can be condensed into the following:"),l.a.createElement("ol",null,l.a.createElement("li",null,"Any live cell with two or three live neighbours survives."),l.a.createElement("li",null,"Any dead cell with three live neighbours becomes a live cell."),l.a.createElement("li",null,"All other live cells die in the next generation. Similarly, all other dead cells stay dead.")),l.a.createElement("p",null,"The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick. Each generation is a pure function of the preceding one. The rules continue to be applied repeatedly to create further generations.")))}function d(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(100),o=Object(c.a)(r,2),s=o[0],h=o[1],d=Object(n.useState)(30),v=Object(c.a)(d,2),g=v[0],p=v[1],y=Object(n.useState)(50),E=Object(c.a)(y,2),w=E[0],O=E[1],x=Object(n.useState)(0),j=Object(c.a)(x,2),S=j[0],k=j[1],A=Object(n.useState)(Array(g).fill().map((function(){return Array(w).fill(!1)}))),N=Object(c.a)(A,2),T=N[0],I=N[1],B=Object(n.useRef)(null),C=function(){i(!0),clearInterval(B.current),B.current=setInterval(G,s)},z=function(){i(!1),I(Array(g).fill().map((function(){return Array(w).fill(!1)}))),k(0)},G=function(){for(var e=T,t=b(T),a=0;a<g;a++)for(var n=0;n<w;n++){var l=0;a>0&&e[a-1][n]&&l++,a>0&&n>0&&e[a-1][n-1]&&l++,a>0&&n<w-1&&e[a-1][n+1]&&l++,n<w-1&&e[a][n+1]&&l++,n>0&&e[a][n-1]&&l++,a<g-1&&e[a+1][n]&&l++,a<g-1&&n>0&&e[a+1][n-1]&&l++,a<g-1&&n<w-1&&e[a+1][n+1]&&l++,e[a][n]&&(l<2||l>3)&&(t[a][n]=!1),e[a][n]||3!==l||(t[a][n]=!0)}I(t),k(S+1)};return Object(n.useEffect)((function(){a&&C()}),[C]),l.a.createElement("div",null,l.a.createElement(m,{start:C,pause:function(){i(!1),clearInterval(B.current)},clear:z,slow:function(){i(!0),h(1e3),C()},fast:function(){i(!0),h(100),C()},seed:function(){z();for(var e=b(T),t=0;t<g;t++)for(var a=0;a<w;a++)1===Math.floor(4*Math.random())&&(e[t][a]=!0);I(e)},gridSize:function(e){switch(e){case"1":p(15),O(25);break;case"2":p(25),O(40);break;case"3":p(30),O(50);break;default:p(30),O(50)}}}),l.a.createElement("h2",{className:"gen-count"},"Current Generation: ",S),l.a.createElement(u,{rows:g,cols:w,gridFull:T,selectBox:function(e,t){var a=b(T);a[e][t]=!a[e][t],I(a)}}),l.a.createElement(f,null))}function b(e){return JSON.parse(JSON.stringify(e))}function v(){return l.a.createElement("div",null,l.a.createElement(d,null))}r.a.render(l.a.createElement(o.a,null,l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null))),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.d5c46edb.chunk.js.map