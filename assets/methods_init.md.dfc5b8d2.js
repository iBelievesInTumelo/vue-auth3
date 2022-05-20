import{_ as n,c as a,o as s,a as t}from"./app.2a5f7350.js";const g='{"title":"ready","description":"","frontmatter":{},"headers":[{"level":2,"title":"ready","slug":"ready"},{"level":2,"title":"load","slug":"load"},{"level":2,"title":"check","slug":"check"}],"relativePath":"methods/init.md","lastUpdated":1653035451000}',p={},o=t(`<h2 id="ready" tabindex="-1">ready <a class="header-anchor" href="#ready" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code>auth<span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span>
</code></pre></div><p>Returns the current auth loading state.</p><p>Check for a valid token, then wait for any refresh and/or user fetch if enabled before being set to <code>true</code>.</p><h4 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h4><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>!auth.ready()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> Loading... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>auth.ready()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> Ready! <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="load" tabindex="-1">load <a class="header-anchor" href="#load" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code>auth<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>AxiosResponse<span class="token operator">&gt;</span>
</code></pre></div><p>This works similar to the <code>ready()</code> method except it returns a <code>Promise</code> which can be used for further processing.</p><blockquote><p>Multiple Promise <code>.load().then()</code> chains can be created.</p></blockquote><h4 id="examples-1" tabindex="-1">Examples <a class="header-anchor" href="#examples-1" aria-hidden="true">#</a></h4><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> auth <span class="token operator">=</span> <span class="token function">useAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">auth</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>auth<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// fetch some data</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="check" tabindex="-1">check <a class="header-anchor" href="#check" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code>auth<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span>role<span class="token operator">:</span> Roles<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
</code></pre></div><p>Check to see if a user is logged in.</p><p>It accepts a <code>role</code> parameter to check for specific role access. The additional <code>key</code> parameter is to specify the roles field to check against on the user object if different from the default one set in <code>options.rolesKey</code>.</p><blockquote><p>The optional <code>key</code> string parameter supports dot notation to access a nested role key.</p></blockquote><hr><blockquote><p>There are four main types of checks available:</p><ul><li>&quot;array of strings&quot; to &quot;array of strings&quot;</li><li>&quot;array of strings&quot; to &quot;string&quot;</li><li>&quot;string&quot; to &quot;string&quot;</li><li>&quot;object&quot; to &quot;object&quot;</li></ul></blockquote><hr><blockquote><p>There is NO array of objects comparison available.</p></blockquote><h4 id="examples-2" tabindex="-1">Examples <a class="header-anchor" href="#examples-2" aria-hidden="true">#</a></h4><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>!$auth.check()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> login <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$auth.check(<span class="token punctuation">&#39;</span>admin<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> admin <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$auth.check([<span class="token punctuation">&#39;</span>admin<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>manager<span class="token punctuation">&#39;</span>])<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> manage <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$auth.check(<span class="token punctuation">&#39;</span>admin<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>nested.key<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> nested <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>General <code>String</code> and <code>Array</code> comparisons.</p><div class="language-ts"><pre><code>auth<span class="token punctuation">.</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// {id: 1, email: &#39;admin@example.com&#39;, roles: &#39;admin&#39;}</span>

auth<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$auth<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$auth<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$auth<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;blah&quot;</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre></div><p>The check can also do <code>Object</code> to <code>Object</code> comparisons.</p><div class="language-ts"><pre><code><span class="token keyword">this</span><span class="token punctuation">.</span>$auth<span class="token punctuation">.</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// {id: 1, email: &#39;admin@example.com&#39;, roles: {team: &#39;view&#39;, boards: [&#39;view&#39;, &#39;edit&#39;]}}</span>

<span class="token keyword">this</span><span class="token punctuation">.</span>$auth<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">{</span> team<span class="token operator">:</span> <span class="token string">&quot;edit&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$auth<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">{</span> team<span class="token operator">:</span> <span class="token string">&quot;view&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$auth<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">{</span> boards<span class="token operator">:</span> <span class="token string">&quot;edit&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$auth<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">{</span> boards<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;edit&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;view&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><h4 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-hidden="true">#</a></h4><ul><li><a href="/guide/auth-meta.html">Auth Meta Guide</a></li><li><a href="/options/core.html#roleskey">rolesKey Option</a></li></ul>`,29),e=[o];function c(u,l,i,k,r,d){return s(),a("div",null,e)}var m=n(p,[["render",c]]);export{g as __pageData,m as default};
