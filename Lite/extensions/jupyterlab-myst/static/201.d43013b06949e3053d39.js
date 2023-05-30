"use strict";(self.webpackChunkjupyterlab_myst=self.webpackChunkjupyterlab_myst||[]).push([[201,493],{26201:(e,t,n)=>{n.r(t),n.d(t,{default:()=>X});var r=n(12486),o=n(41123),s=n(56271),i=n.n(s),l=n(2191),a=n(48832),c=n(85029),d=n(22962),u=n(16146);const m=(0,s.createContext)(void 0);function p({cell:e,children:t}){return i().createElement(m.Provider,{value:{cell:e}},t)}function v(){var e;return null!==(e=(0,s.useContext)(m))&&void 0!==e?e:{}}const h="user_expressions";class f extends a.Widget{constructor(){super(),this.addClass("myst-RenderedExpressionError")}}class y extends a.Widget{constructor(e){super(),this.trusted=e.trusted,this.expression=e.expression,this.rendermime=e.rendermime,this.safe=e.safe,this.addClass("myst-RenderedExpression"),(this.layout=new a.SingletonLayout).widget=new f}renderExpression(e){const t=this.layout;let n;n="ok"===e.status?{trusted:this.trusted,data:e.data,metadata:e.metadata}:{data:{"application/vnd.jupyter.stderr":e.traceback.join("\n")||`${e.ename}: ${e.evalue}`}};const r=this.rendermime.createModel(n),o=this.rendermime.preferredMimeType(r.data,this.safe);if(void 0===o)return console.error("Couldn't find mimetype for ",r),t.widget=new f,Promise.resolve();const s=this.rendermime.createRenderer(o);return t.widget=s,console.assert(s.isAttached,"renderer was not attached!",s),s.renderModel(r)}}function g({content:e}){return e=e.replace(/^(["'])(.*)\1$/,"$2"),i().createElement("span",null,e)}function k({error:e}){return i().createElement("span",{className:"text-black p-2","data-mime-type":"application/vnd.jupyter.stderr",style:{backgroundColor:"var(--jp-rendermime-error-background, #F9DEDE)",fontFamily:"var(--jp-code-font-family, monospace)",fontSize:"var(--jp-code-font-size)"}},i().createElement("span",{className:"text-[#e75c58]"},e.ename),": ",e.evalue)}function b({rendermime:e,trusted:t,expressionMetadata:n}){const r=(0,s.useRef)(null),o=(0,s.useMemo)((()=>{if(e)return new y({expression:n.expression,trusted:t,rendermime:e,safe:"any"})}),[e]);return(0,s.useEffect)((()=>{r.current&&o&&n&&(o.isAttached||a.Widget.attach(o,r.current),o.renderExpression(n.result))}),[r,o,n]),(0,s.useEffect)((()=>{if(o)return()=>o.dispose()}),[o]),console.debug(`Rendering react ${n.expression}`),i().createElement("div",{ref:r,className:"not-prose inline-block"})}function w({value:e}){var t;const{cell:n}=v(),r=function(e){return null==e?void 0:e.model.metadata.get(h)}(n),o=null!==(t=null==n?void 0:n.model.trusted)&&void 0!==t&&t,s=(null==n?void 0:n.parent).rendermime,l=null==r?void 0:r.find((t=>t.expression===e)),a=null==l?void 0:l.result.data;return l?"text/plain"===s.preferredMimeType(null!=a?a:{},o?"any":"ensure")?i().createElement(g,{content:null==a?void 0:a["text/plain"]}):"error"===l.result.status?i().createElement(k,{error:l.result}):i().createElement(b,{rendermime:s,trusted:o,expressionMetadata:l}):i().createElement("code",null,e)}function x({checked:e,line:t,children:n}){const[r,o]=i().useState(null!=e&&e),{cell:s}=v();return i().createElement("li",{className:"task-list-item"},i().createElement("input",{type:"checkbox",disabled:!s,className:"task-list-item-checkbox",checked:r,onClick:()=>{if(!s||null==t)return;const e=s.model.value.text.split("\n");e[t]=e[t].replace(/^(\s*(?:-|\*)\s*)(\[[\s|x]\])/,r?"$1[ ]":"$1[x]"),o(!r),s.model.value.text=e.join("\n")}}),n)}const E=Object.assign(Object.assign({},d.DEFAULT_RENDERERS),{mermaid:u.MermaidNodeRenderer,inlineExpression:(e,t)=>i().createElement(w,{value:e.value}),listItem:(e,t)=>{var n;return null==e.checked?i().createElement("li",{key:e.key},t):i().createElement(x,{key:e.key,checked:e.checked,line:null===(n=e.position)||void 0===n?void 0:n.start.line},t)}});var C=n(64039),R=n(14456),L=n(29355),P=n(26856),S=n(9915),N=n(58579),T=n(41775),j=n(90330),M=n(7493),F=n(38415),I=n(26153),D=n(73688),H=n(42074),A=n(51609),_=n(22722),U=n(28142);const V=e=>t=>{const n=i().useRef(null),{to:r}=t;return i().useEffect((()=>{n&&n.current&&e.rendermime.resolver&&function(e,t,n){let r=e.getAttribute("href")||"";const o=t.isLocal?t.isLocal(r):U.URLExt.isLocal(r);if(!r||!o)return Promise.resolve(void 0);const s=e.hash;if(s){if(s===r)return e.target="_self",Promise.resolve(void 0);r=r.replace(s,"")}t.resolveUrl(r).then((r=>{const o=decodeURIComponent(r);return n&&n.handleLink(e,o,s),t.getDownloadUrl(r)})).then((t=>{e.href=t+s})).catch((t=>{e.href=""}))}(n.current,e.rendermime.resolver,e.rendermime.linkHandler)}),[n,r]),i().createElement("a",{href:r,ref:n,className:t.className},t.children)},$=e=>t=>{!async function(e,t){(0,_.selectAll)("link,linkBlock",e).forEach((async e=>{if(!e||!e.url)return;const n=t.notebook.rendermime.resolver;((null==n?void 0:n.isLocal)?n.isLocal(e.url):U.URLExt.isLocal(e.url))&&(e.internal=!0)}))}(t,e)},O=()=>e=>{!async function(e){(0,_.selectAll)("cite",e).forEach((async e=>{e.children&&e.children.length>0||(e.error=!0,e.children=[{type:"text",value:e.label}])}))}(e)},W={name:"eval",body:{type:M.Ft.string,required:!0},run:e=>[{type:"inlineExpression",value:e.body}]};var q=n(91526);class K extends l.MarkdownCell{constructor(e){super(e),this._doneRendering=new q.PromiseDelegate,this.myst={},this.model.modelDB.get("trusted").changed.connect(this.mystRender,this)}renderInput(e){if(!this.myst||!this.myst.node){const e=document.createElement("div");this.myst={node:e}}this._doneRendering=new q.PromiseDelegate;const t=this.parent;this.myst.pre=void 0;const n=function(e){var t,n;const r=null===(t=function(e){const t=null==e?void 0:e.children();if(!t)return;const n=[];let r;do{r=t.next(),r&&n.push(r)}while(r);return n}(e))||void 0===t?void 0:t.filter((e=>"markdown"===e.model.type));if(!r)return Promise.resolve(void 0);const o={type:"root",children:r.map((e=>{var t,n;const r=null!==(n=null===(t=e.model)||void 0===t?void 0:t.value.text)&&void 0!==n?n:"";return e.myst.pre||(e.myst.pre=function(e){const t=(0,L.mystParse)(e,{directives:[F.cardDirective,I.gridDirective,H.proofDirective,...D.tabDirectives],roles:[W]});return(0,N.l)().use(S.basicTransformationsPlugin).use(S.htmlPlugin,{htmlHandlers:{comment(e,t){const n=e(t,"comment");return n.value=t.value,n}}}).runSync(t),(0,P.fX)(t,"block"),t}(r)),{type:"block",children:(0,P.Bc)(e.myst.pre).children}}))},s=[new S.WikiTransformer,new S.GithubTransformer,new S.DOITransformer,new S.RRIDTransformer],i=new T.k,l={cite:{order:[],data:{}},article:o},{frontmatter:a}=(0,S.getFrontmatter)(o.children[0],{removeYaml:!0,removeHeading:!0}),c=(0,j.validatePageFrontmatter)(a,{property:"frontmatter",messages:{}}),d=new S.ReferenceState({numbering:c.numbering,file:i});(0,N.l)().use(S.mathPlugin,{macros:null!==(n=null==c?void 0:c.math)&&void 0!==n?n:{}}).use(S.enumerateTargetsPlugin,{state:d}).use(S.linksPlugin,{transformers:s}).use(S.footnotesPlugin).use(S.resolveReferencesPlugin,{state:d}).use($,{notebook:e}).use(O).use(S.keysPlugin).runSync(o,i),e.myst={references:l,frontmatter:c,mdast:o},i.messages.length>0&&console.warn(i.messages.map((e=>e.message)).join("\n"));const u=r.map((async(e,t)=>{try{await async function(e,t){const n=(0,_.selectAll)("image",e);await Promise.all(n.map((async e=>{var n;if(!e||!e.url)return;const r=null===(n=t.cell.parent.rendermime)||void 0===n?void 0:n.resolver,o=new A.AttachmentsResolver({parent:null!=r?r:void 0,model:t.cell.model.attachments}),s=await o.resolveUrl(e.url);if(!s)return;const i=await o.getDownloadUrl(s);i&&(e.url=i)})))}(o.children[t],{cell:e})}catch(e){}e.myst.post=o.children[t],e.mystRender()}));return Promise.all(u).then((()=>{}))}(t),r=new a.Widget({node:this.myst.node});r.addClass("myst"),r.addClass("jp-MarkdownOutput"),this.addClass("jp-MySTMarkdownCell"),this.inputArea.renderInput(r),n?n.then((()=>this._doneRendering.resolve())):this._doneRendering.reject("Unknown error with parsing MyST Markdown.")}get doneRendering(){return this._doneRendering.promise}get expressions(){var e;const{post:t}=null!==(e=this.myst)&&void 0!==e?e:{};return(0,_.selectAll)("inlineExpression",t).map((e=>e.value))}mystRender(){var e,t;const n=this.parent,r=n.children().next()===this,{post:o}=null!==(e=this.myst)&&void 0!==e?e:{};if(!(null===(t=this.myst)||void 0===t?void 0:t.node)||!(null==n?void 0:n.myst)||!o)return void console.log("MyST: Did not render?",this);const{references:s,frontmatter:l}=n.myst,a=(0,d.useParse)(o,E);(0,R.render)(i().createElement(C.ThemeProvider,{theme:C.Theme.light,Link:V(n),renderers:E},i().createElement(p,{cell:this},i().createElement(C.TabStateProvider,null,i().createElement(C.ReferencesProvider,{references:s,frontmatter:l},r&&i().createElement(c.FrontmatterBlock,{frontmatter:l}),a)))),this.myst.node)}}class B extends o.NotebookPanel.ContentFactory{createMarkdownCell(e,t){return e.contentFactory||(e.contentFactory=this),new K(e).initializeState()}}var J=n(73033),z=n(12086),Z=n(33169);const G=new(n(22502).LabIcon)({name:"myst-notebook-extension:mystIcon",svgstr:'<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect width="128" height="128" rx="15" fill="white"/>\n<path d="M28.0229 72V67.0166L34.4697 65.9092V20.5444L28.0229 19.437V14.4141H44.8716L63.4209 58.1177H63.6582L81.6143 14.4141H98.9771V19.437L92.5303 20.5444V65.9092L98.9771 67.0166V72H78.292V67.0166L85.0947 65.9092V25.0532L84.897 25.0137L66.1895 69.9434H61.0083L41.668 25.0928L41.4702 25.1323L41.7471 49.2188V65.9092L48.708 67.0166V72H28.0229Z" fill="#616161"/>\n<path d="M7.56055 81.7622L14.1865 79.5161C15.5342 83.5591 17.8926 86.4603 21.2617 88.2197C24.5934 89.9792 28.73 90.8589 33.6714 90.8589H45.1826C49.1882 90.8589 52.6883 91.7012 55.6831 93.3857C58.6779 95.0703 60.9801 97.672 62.5898 101.191C64.1247 97.672 66.3895 95.0703 69.3843 93.3857C72.3791 91.7012 75.9167 90.8589 79.9971 90.8589H91.5645C96.5059 90.8589 100.661 89.9792 104.03 88.2197C107.437 86.4603 109.795 83.5591 111.105 79.5161L117.675 81.7622C115.616 89.0246 112.341 94.1906 107.849 97.2603C103.394 100.367 97.9658 101.921 91.5645 101.921H79.9971C75.7669 101.921 72.4914 102.875 70.1704 104.785C67.8869 106.694 66.7451 109.651 66.7451 113.657H58.4907C58.4907 109.651 57.3115 106.694 54.9531 104.785C52.6322 102.875 49.3753 101.921 45.1826 101.921H33.6714C27.3075 101.921 21.8794 100.367 17.3872 97.2603C12.895 94.1906 9.61947 89.0246 7.56055 81.7622Z" fill="#F37726"/>\n</svg>\n'}),X=[{id:"jupyterlab-myst:plugin",provides:o.NotebookPanel.IContentFactory,requires:[r.IEditorServices],autoStart:!0,activate:(e,t)=>{console.log("JupyterLab extension jupyterlab-myst is activated!");const n=t.factoryService.newInlineEditor;return new B({editorFactory:n})}},{id:"jupyterlab-myst:legacyPlugin",optional:[Z.ITranslator],requires:[r.IEditorServices,z.IRenderMimeRegistry,J.ISessionContextDialogs,o.INotebookWidgetFactory,o.INotebookTracker,o.NotebookPanel.IContentFactory],autoStart:!0,activate:(e,t,n,r,s,i,l,a)=>{var c,d,u;if(l instanceof B)return;console.log("JupyterLab extension jupyterlab-myst (legacy mode) is activated!");const m=new B,p=new o.NotebookWidgetFactory({name:"Jupyter MyST Notebook",fileTypes:["notebook","markdown","myst"],defaultFor:["notebook"],modelName:null!==(c=s.modelName)&&void 0!==c?c:"notebook",preferKernel:null===(d=s.preferKernel)||void 0===d||d,canStartKernel:null===(u=s.canStartKernel)||void 0===u||u,rendermime:n,contentFactory:m,editorConfig:s.editorConfig,notebookConfig:s.notebookConfig,mimeTypeService:t.mimeTypeService,sessionDialogs:r,toolbarFactory:s.toolbarFactory,translator:null!=a?a:void 0});let v=0;p.widgetCreated.connect(((e,t)=>{t.id=t.id||"myst-notebook-"+ ++v,t.title.icon=null!=G?G:"",t.toolbar.title.icon=G,t.title.iconClass="",t.title.iconLabel="MyST Notebook",t.context.pathChanged.connect((()=>{i.save(t)})),i.add(t)})),e.docRegistry.addWidgetFactory(p)}},{id:"jupyterlab-myst:executor",requires:[o.INotebookTracker],autoStart:!0,activate:(e,t)=>{console.log("Using jupyterlab-myst:executor"),o.NotebookActions.executed.connect(((e,n)=>{const{notebook:r,cell:o}=n;!function(e,t,n){var r;const o=n.find((t=>t.content===e)),s=null==o?void 0:o.sessionContext;void 0!==s&&function(e){return"markdown"===e.model.type}(t)&&(console.debug(`Markdown cell ${t.model.id} was executed, waiting for render to complete ...`),null===(r=t.doneRendering)||void 0===r||r.then((()=>async function(e,t){var n;console.debug("Clear existing metadata"),e.model.metadata.delete(h),e.model.trusted=!0;const r=null===(n=t.session)||void 0===n?void 0:n.kernel;if(!r)throw new Error("Session has no kernel.");const o=e.model,s={cellId:o.id},i=new Map(e.expressions.map(((e,t)=>[`${t}`,e]))),l={};i.forEach(((e,t)=>{l[t]=e}));const a={code:"",user_expressions:l};console.debug("Performing kernel request",a);const c=r.requestExecute(a,!1,Object.assign(Object.assign({},o.metadata.toJSON()),s));c.onReply=t=>{console.debug("Handling kernel response",t);const n=t.content;if("ok"!==n.status)return void console.error("Kernel response was not OK",t);const r=[];for(const e in n.user_expressions){const t=i.get(e);if(void 0===t){console.error("namedExpressions doesn't have key. This should never happen");continue}const o={expression:t,result:n.user_expressions[e]};r.push(o),console.debug(`Saving ${t} to cell attachments`,o)}e.model.metadata.set(h,r),console.debug("Render cell after the metadata is added"),e.mystRender()},await c.done}(t,s))))}(r,o,t)}))}}]},7493:(e,t,n)=>{var r,o,s;n.d(t,{Ft:()=>s}),function(e){e.Article="Article",e.Notebook="Notebook"}(r||(r={})),function(e){e.content="notebook-content",e.code="notebook-code"}(o||(o={})),function(e){e.string="string",e.number="number",e.boolean="boolean",e.parsed="parsed"}(s||(s={}))}}]);