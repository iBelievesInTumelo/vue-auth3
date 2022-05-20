import{_ as n,c as a,o as t,a as s}from"./app.2a5f7350.js";const _='{"title":"Setup","description":"","frontmatter":{},"headers":[{"level":2,"title":"Router Plugin","slug":"router-plugin"}],"relativePath":"guide/plugins.md","lastUpdated":1653035451000}',e={},o=s(`<p>Plugins are required for VueAuth3 to manage your application</p><h1 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-hidden="true">#</a></h1><p>A typical setup might look like the following.</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createAuth <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-auth3&quot;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&quot;./router&quot;</span>

<span class="token keyword">const</span> auth <span class="token operator">=</span> <span class="token function">createAuth</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">{</span>
    router<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="router-plugin" tabindex="-1">Router Plugin <a class="header-anchor" href="#router-plugin" aria-hidden="true">#</a></h2><p>You must install this plugin so that VueAuth3 can redirect pages in your application. If you do not install this plugin VueAuth3 will understand that you do not need to redirect routers when problems arise</p>`,6),p=[o];function u(r,i,c,l,d,h){return t(),a("div",null,p)}var g=n(e,[["render",u]]);export{_ as __pageData,g as default};
