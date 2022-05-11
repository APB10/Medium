(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[515],{7118:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[slug]",function(){return t(2608)}])},3505:function(e,s,t){"use strict";var l=t(5893),n=(t(7294),t(4045)),r=t.n(n);s.Z=function(){return(0,l.jsxs)("header",{className:"mx-auto flex max-w-7xl justify-between p-5",children:[(0,l.jsxs)("div",{className:"flex items-center space-x-5",children:[(0,l.jsx)(r(),{href:"/",children:(0,l.jsx)("img",{className:"w-44 cursor-pointer object-contain",src:"https://links.papareact.com/yvf",alt:""})}),(0,l.jsxs)("div",{className:"hidden items-center space-x-5 md:inline-flex",children:[(0,l.jsx)("h3",{children:"About"}),(0,l.jsx)("h3",{children:"Contact"}),(0,l.jsx)("h3",{className:"text-whtie rounded-full bg-green-600 px-4 py-1",children:"Follow"})]})]}),(0,l.jsxs)("div",{className:"flex items-center space-x-5 text-green-600",children:[(0,l.jsx)("h3",{children:" Sign In"}),(0,l.jsx)("h3",{className:"rounded-full border border-green-600 px-4 py-1",children:"Get Started"})]})]})}},2608:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSG:function(){return x}});var l=t(5893),n=t(7737),r=t.n(n),a=t(3505),c=t(6994),o=t(7536),i=t(7294);function m(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}function d(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{},l=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),l.forEach((function(s){m(e,s,t[s])}))}return e}var x=!0;s.default=function(e){var s=e.post,t=(0,i.useState)(!1),n=t[0],m=t[1],x=(0,o.cI)(),u=x.register,h=x.handleSubmit,p=x.formState.errors;return(0,l.jsxs)("main",{children:[(0,l.jsx)(a.Z,{}),(0,l.jsx)("img",{className:"h-40 w-full object-cover",src:(0,c.uH)(s.mainImage).url()}),(0,l.jsxs)("article",{className:"mx-auto max-w-3xl p-5",children:[(0,l.jsx)("h1",{className:"mt-10 mb-3 text-3xl",children:s.title}),(0,l.jsx)("h2",{className:"mb-2 text-xl font-light text-gray-500",children:s.description}),(0,l.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,l.jsx)("img",{className:"h-10 w-10 rounded-full",src:(0,c.uH)(s.author.image).url(),alt:""}),(0,l.jsxs)("p",{className:"text-sm font-extralight",children:["Blog post by"," ",(0,l.jsx)("span",{className:"text-grey-600",children:s.author.name})," - Published at ",new Date(s._createdAt).toLocaleString()]})]}),(0,l.jsx)("div",{className:"mt-10",children:(0,l.jsx)(r(),{dataset:"production",projectId:"e36qdxjn",content:s.body,serializers:{h1:function(e){return(0,l.jsx)("h1",d({className:"my-5 text-2xl font-bold"},e))},h2:function(e){return(0,l.jsx)("h1",d({className:"my-5 text-xl font-bold"},e))},li:function(e){return(0,l.jsx)("li",{className:"ml-4 list-disc",children:e})},link:function(e){var s=e.href,t=e.children;return(0,l.jsx)("a",{href:s,className:"text-blue-500 hover:underline",children:t})}}})})]}),(0,l.jsx)("hr",{className:"mx-auto my-5 max-w-lg border border-yellow-500"}),n?(0,l.jsxs)("div",{className:"my-10 mx-auto flex max-w-2xl flex-col bg-yellow-500 p-10 text-white",children:[(0,l.jsx)("h3",{className:"text-3xl font-bold",children:"Thank you for submitting your comment!"}),(0,l.jsx)("p",{children:"Once it has been approved, it will appear below!"})]}):(0,l.jsxs)("form",{onSubmit:h((function(e){fetch("/api/createComment",{method:"POST",body:JSON.stringify(e)}).then((function(){console.log(e),m(!0)})).catch((function(e){console.log(e),m(!1)}))})),className:"my-10 mx-auto mb-10 flex max-w-2xl flex-col p-5 ",children:[(0,l.jsx)("h3",{className:"text-sm text-yellow-500",children:"Enjoyed this article? "}),(0,l.jsx)("h4",{className:"text-3xl font-bold",children:"Leave a comment below!"}),(0,l.jsx)("hr",{className:"mt-2 py-3"}),(0,l.jsx)("input",d({},u("_id"),{type:"hidden",name:"_id",value:s._id})),(0,l.jsxs)("label",{className:"mb-5 block",children:[(0,l.jsx)("span",{className:"text-gray-700",children:"Name"}),(0,l.jsx)("input",d({},u("name",{required:!0}),{className:"form-input mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-yellow-600 focus:ring",placeholder:"John Appleseed",type:"text"}))]}),(0,l.jsxs)("label",{className:"mb-5 block",children:[(0,l.jsx)("span",{className:"text-gray-700",children:"Email"}),(0,l.jsx)("input",d({},u("email",{required:!0}),{className:"form-input mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-yellow-600 focus:ring",placeholder:"John Appleseed",type:"email"}))]}),(0,l.jsxs)("label",{className:"mb-5 block",children:[(0,l.jsx)("span",{className:"text-gray-700",children:"Comment"}),(0,l.jsx)("textarea",d({},u("comment",{required:!0}),{className:"form-textarea mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-yellow-600 focus:ring",placeholder:"John Appleseed",rows:8}))]}),(0,l.jsxs)("div",{className:"lex-col flex p-5",children:[p.name&&(0,l.jsx)("span",{className:"text-red-500",children:"- The Name Field is required"}),p.comment&&(0,l.jsx)("span",{className:"text-red-500",children:"- The Comment Field is required"}),p.email&&(0,l.jsx)("span",{className:"text-red-500",children:"-The Name Email is required"})]}),(0,l.jsx)("input",{type:"submit",className:"focus:shadow-outline cursor-pointer rounded bg-yellow-500 py-2 px-4 font-bold text-white shadow hover:bg-yellow-400 focus:outline-none"})]}),(0,l.jsxs)("div",{className:"my-10 mx-auto flex max-w-2xl flex-col space-y-2 p-10 shadow shadow-yellow-500",children:[(0,l.jsx)("h3",{className:"text4xl",children:"Comments"}),(0,l.jsx)("hr",{className:"pb-2"}),s.comments.map((function(e){return(0,l.jsx)("div",{children:(0,l.jsxs)("p",{children:[(0,l.jsxs)("span",{className:" pr-1 text-yellow-500",children:[e.name,":"]}),e.comment]})},e._id)}))]})]})}},6994:function(e,s,t){"use strict";t.d(s,{uH:function(){return c}});var l=t(6803),n=t.n(l),r=t(1561),a={dataset:"production",projectId:"e36qdxjn",apiVersion:"2021-03-25",useCdn:!0},c=((0,r.eI)(a),function(e){return n()(a).image(e)});(0,r.Iy)(a)}},function(e){e.O(0,[552,779,774,888,179],(function(){return s=7118,e(e.s=s);var s}));var s=e.O();_N_E=s}]);