import{_ as a,c as n,o as s,a as t}from"./app.2a5f7350.js";const g='{"title":"impersonate","description":"","frontmatter":{},"headers":[{"level":2,"title":"impersonate","slug":"impersonate"},{"level":2,"title":"unimpersonate","slug":"unimpersonate"},{"level":3,"title":"impersonating","slug":"impersonating"}],"relativePath":"methods/impersonating.md","lastUpdated":1653035451000}',e={},p=t(`<h2 id="impersonate" tabindex="-1">impersonate <a class="header-anchor" href="#impersonate" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code>data<span class="token punctuation">.</span><span class="token function">impersonate</span><span class="token punctuation">(</span>data<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
</code></pre></div><p>Execute an impersonate request.</p><p>This will likely require the id of the user to impersonate to somehow to be passed to the API.</p><h4 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h4><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> auth <span class="token operator">=</span> <span class="token function">useAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
auth<span class="token punctuation">.</span><span class="token function">impersonate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;auth/&quot;</span> <span class="token operator">+</span> user<span class="token punctuation">.</span>id <span class="token operator">+</span> <span class="token string">&quot;/impersonate&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;user-account&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-hidden="true">#</a></h4><ul><li><a href="/guide/requests.html">Requests Guide</a></li><li><a href="/options/core.html#impersonatedata">impersonateData Option</a></li></ul><h2 id="unimpersonate" tabindex="-1">unimpersonate <a class="header-anchor" href="#unimpersonate" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code>auth<span class="token punctuation">.</span><span class="token function">unimpersonate</span><span class="token punctuation">(</span>data<span class="token operator">:</span> Options<span class="token punctuation">[</span><span class="token string">&quot;unimpersonate&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>AxiosResponse<span class="token operator">&gt;</span>
</code></pre></div><p>Execute an unimpersonate request.</p><p>Clears out the impersonating token and restores previously used token.</p><blockquote><p>This does not store multiple data sets, it only stores the tokens.</p></blockquote><h4 id="examples-1" tabindex="-1">Examples <a class="header-anchor" href="#examples-1" aria-hidden="true">#</a></h4><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> auth <span class="token operator">=</span> <span class="token function">useAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">unimpersonate</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  auth<span class="token punctuation">.</span><span class="token function">unimpersonate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">makeRequest</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;admin-users&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="references-1" tabindex="-1">References <a class="header-anchor" href="#references-1" aria-hidden="true">#</a></h4><ul><li><a href="/guide/requests.html">Requests Guide</a></li><li><a href="/options/core.html#unimpersonatedata">unimpersonateData Option</a></li></ul><h3 id="impersonating" tabindex="-1">impersonating <a class="header-anchor" href="#impersonating" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code>auth<span class="token punctuation">.</span><span class="token function">impersonating</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span>
</code></pre></div><p>Check to see if in impersonating mode.</p><h4 id="examples-2" tabindex="-1">Examples <a class="header-anchor" href="#examples-2" aria-hidden="true">#</a></h4><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$auth.impersonating()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> Unimpersonate <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,22),o=[p];function c(l,u,i,r,k,d){return s(),n("div",null,o)}var m=a(e,[["render",c]]);export{g as __pageData,m as default};
