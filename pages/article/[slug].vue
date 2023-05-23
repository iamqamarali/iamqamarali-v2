<script setup>
const route = useRoute()
const { slug } = route.params

const { data : post, error, pending, refresh } = await useFetch('/api/posts/' + slug)



if(!post.value){
    throw createError({
        statusCode: 404,
        message: 'Post not found'
    });
}

const parseBody = (body) => {
    let sentences = body.split("\n")
    let html = ""
    for (let i = 0; i < sentences.length; i++) {
        html += "<p>" + sentences[i] + "</p>"
    }
    return html
}

</script>

<template>
    <main class="article-page site-content" v-if="post">
        <div class="container">
            <div class="article-hero">
                <div class="article-header">
                    <h1 class="article-title">{{ post.title }}</h1>
                    <div class="article-subtitle">
                        <strong class="article-author mr-10">
                            <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=100" alt="author image" class="author-image">
                            <span class="author-name">Qamar Ali,</span>    
                        </strong>
                        <span class="article-date"> {{ dateUtil.diffForHumans(post.created_at) }}</span>
                    </div>
                </div>

                <div class="article-hero-image-container">
                    <img :src="post.main_image" alt="" >
                </div>

            </div>

            <article class="article-body">

                    <blockquote>
                    <p>This article assumes you have basic knowledge of Vue js and Nuxt.</p>
                    </blockquote>
                    <p>As much <strong> as SPA frameworks allow us quickly </strong> prototype web applications, they, unfortunately, come with their bottlenecks, one of which is SEO management. As the name implies, <strong>Single-Page</strong> Applications are single-paged. This means only a single page (entry point) is rendered while data (template/JSON) is updated on demand using Javascript. However, when building applications like e-commerce/blog sites with dynamic metadata information, SPAs don’t quite get the job done neatly.</p>
                    <p>In this article, I’ll show you how to set up an SEO-friendly application in Nuxt and at the end, we will have built this mini e-commerce app in Nuxt:</p>
                    <p><img src="https://cdn-images-1.medium.com/max/1600/1*zB2OkI4ZcHZ0c03CPWAzEg.gif" alt="preview application gif" title="application preview"></p>
                    <p>Each product link is appended with the product id (/details/), and when shared on social media we get the product’s image, title and description. Just like this example below product id (/details/), and when shared on social media we get the product’s image, title and description. Just like this example below:</p>

                    <blockquote >
                        <h3>Understanding that you are the most doggy shit person i've every meet.</h3>
                    </blockquote>

                    <p>Each product link is appended with the product id (/details/), and when shared on social media we get the product’s image, title and description. Just like this example below product id (/details/), and when shared on social media we get the product’s image, title and description. Just like this example below:</p>

                    <div class="link">
                    <a href="https://profuse-wind.surge.sh/details/1/" target="_blank">
                    <div class="card">
                    <div class="card__img" style="background-image: url(https://i.dummyjson.com/data/products/1/thumbnail.jpg)">
                    </div>
                    <div class="card__content">
                    <h5>
                    iPhone 9 |
                    </h5>
                    <p>
                    An apple mobile which is nothing like apple
                    </p>
                    <small>
                    profuse-wind.surge.sh
                    </small>
                    </div>
                    </div>
                    </a>
                    </div>
                    <section class="space">
                    <div class="space__circle"></div>
                    <div class="space__circle"></div>
                    <div class="space__circle"></div>
                    </section>
                    <h3 id="requirements">Requirements</h3>
                    <ul>
                    <li><a href="https://nuxt.com/">Nuxt 3</a></li>
                    <li><a href="https://nodejs.org/en/download/">Nodejs LTS</a> — If you have an existing node version, you can use NVM to manage your versions.</li>
                    <li><a href="https://nodejs.org/en/download/">NPM 9.5</a></li>
                    </ul>
                    <section class="space">
                    <div class="space__circle"></div>
                    <div class="space__circle"></div>
                    <div class="space__circle"></div>
                    </section>
                    <h3 id="setup">Setup</h3>
                    <p>To get started, be sure you have the latest Nodejs LTS version running (18.14.2 at the time of writing), which also ships with NPM version 9.5.0.</p>
                    <p>We’ll install and set up our project in Nuxt 3. First, install <strong>npx —</strong> it’s like npm but on steroids.</p>
                    <div class="highlight"><div class="code-toolbar"><pre style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4" class="language-bash line-numbers"><code class="language-bash" data-lang="bash"><span class="token function">npm</span> <span class="token function">install</span> --g npx
                    <span aria-hidden="true" class="line-numbers-rows"><span></span></span></code></pre><div class="toolbar"><div class="toolbar-item"><button type="button">Copy</button></div></div></div></div><p>Once installation is complete, we can create a new Nuxt 3 project using Nuxi (Nuxt’s newest CLI tool).</p>
                    <div class="highlight"><div class="code-toolbar"><pre style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4" class="language-bash line-numbers"><code class="language-bash" data-lang="bash">npx nuxi init <span class="token operator">&lt;</span>project-name<span class="token operator">&gt;</span>
                    <span aria-hidden="true" class="line-numbers-rows"><span></span></span></code></pre><div class="toolbar"><div class="toolbar-item"><button type="button">Copy</button></div></div></div></div><p>Feel free to name your project as you like. I’ll name this ecommerce-demo.</p>
                    <div class="highlight"><div class="code-toolbar"><pre style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4" class="language-bash line-numbers"><code class="language-bash" data-lang="bash">npx nuxi init ecommerce-demo
                    <span aria-hidden="true" class="line-numbers-rows"><span></span></span></code></pre><div class="toolbar"><div class="toolbar-item"><button type="button">Copy</button></div></div></div></div><p>Now you can open your Nuxt project in your editor and install the npm packages.</p>
                    <div class="highlight"><div class="code-toolbar"><pre style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4" class="language-bash line-numbers"><code class="language-bash" data-lang="bash"><span class="token builtin class-name">cd</span> ecommerce-demo <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> <span class="token function">install</span> <span class="token operator">&amp;&amp;</span> code <span class="token builtin class-name">.</span>
                    <span aria-hidden="true" class="line-numbers-rows"><span></span></span></code></pre><div class="toolbar"><div class="toolbar-item"><button type="button">Copy</button></div></div></div></div><p>We can start the dev server and preview the default app in the browser.</p>
                    <div class="highlight"><div class="code-toolbar"><pre style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4" class="language-bash line-numbers"><code class="language-bash" data-lang="bash"><span class="token function">npm</span> run dev
                    <span aria-hidden="true" class="line-numbers-rows"><span></span></span></code></pre><div class="toolbar"><div class="toolbar-item"><button type="button">Copy</button></div></div></div></div><section class="space">
                    <div class="space__circle"></div>
                    <div class="space__circle"></div>
                    <div class="space__circle"></div>
                    </section>
                    <p>Right off the installation, we get just the basic files. We’ll create a pages folder to house our pages. Next, we move the entry <code>app.vue</code> file from the root folder into the pages folder and rename this file to <code>index.vue</code>. You don’t have to configure anything else, as Nuxt knows where to look to find the routes.</p>
                    <blockquote>
                    <p><strong>TIP</strong>: Restart the server if Nuxt doesn’t automatically pick up your new entry file. </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima quidem cum at dignissimos commodi, eveniet enim necessitatibus quisquam ad rerum, itaque sequi mollitia totam non qui quis corrupti tempora alias? </p>
                    </blockquote>
                    <h6>
                        Thi is fucking last level heading
                    </h6>
                    <p>We’ll also <strong> need a second page to show the product </strong> detail when clicked. We can name this page <code>[id].vue</code>&nbsp;. This is how we create dynamic routes in Nuxt 3. We’ll also move this new file into a <code>details</code> folder.</p>
                    <p>Our new directory structure should look something like this now:</p>
                    <h5>
                        Third level heading
                    </h5>
                    <p>Our new directory structure should look something like this now:  new directory structure should look something like this now:  new directory structure should look something like this now:  new directory structure should look something like this now:</p>

                    <div class="highlight"><div class="code-toolbar"><pre style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4" class="language-js line-numbers"><code class="language-js" data-lang="js">📂 node_modules
                    📂 pages
                    <span class="token operator">|</span>__ index<span class="token punctuation">.</span>vue
                    <span class="token operator">|</span>
                    <span class="token operator">|</span>__ 📂 details
                            <span class="token operator">|</span>___<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">.</span>vue
                    <span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre><div class="toolbar"><div class="toolbar-item"><button type="button">Copy</button></div></div></div></div><section class="space">
                    <div class="space__circle"></div>
                    <div class="space__circle"></div>
                    <div class="space__circle"></div>
                    </section>
                    <h3 id="list-page">List Page</h3>
                    <p>Within the index.vue file, we’ll list all products from an open-source <a href="https://dummyjson.com/products">dummy data API</a>. We’ll also add a link to the details page for each product.
                    First, the script part:</p>
                    
                    <section class="space">
                    <div class="space__circle"></div>
                    <div class="space__circle"></div>
                    <div class="space__circle"></div>
                    </section>
                    <h3 id="details-page">Details Page</h3>
                    <p>Next, for the details page, <code>details/[id].vue</code>, we’ll get the id from the route’s param and query our dummy API for the single product details.</p>
                    <div class="highlight"><div class="code-toolbar"><pre style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4" class="language-html line-numbers"><code class="language-html" data-lang="html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

                    <span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">const</span> itemId <span class="token operator">=</span> route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id

                    <span class="token keyword">const</span> productDetails <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://dummyjson.com/products/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>itemId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token operator">...</span>

                    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
                    <span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre><div class="toolbar"><div class="toolbar-item"><button type="button">Copy</button></div></div></div></div><p>In the template part, we can show some of the product’s details.</p>
                    <div class="highlight"><div class="code-toolbar"><pre style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4" class="language-html line-numbers"><code class="language-html" data-lang="html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>details<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>productDetails.thumbnail<span class="token punctuation">"</span></span> <span class="token attr-name">:alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
                    <span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre><div class="toolbar"><div class="toolbar-item"><button type="button">Copy</button></div></div></div></div><p>We now have our list and details page. Finally, we want to show dynamic SEO data on our details page. So every time a single product link is shared, we get all the metadata for that product within the link preview. For this, we’ll use <code>useServerSeoMeta</code>. This is a composable built on Vueuse. It exists in the global setup scope, so you don’t need to import or install anything as long as you’re running Nuxt/Vue 3.</p>
                    <p>Here’s how we’d use it:</p>
                    <div class="highlight"><div class="code-toolbar"><pre style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4" class="language-html line-numbers"><code class="language-html" data-lang="html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
                    <span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">const</span> itemId <span class="token operator">=</span> route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id

                    <span class="token keyword">const</span> productDetails <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://dummyjson.com/products/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>itemId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>productDetails<span class="token punctuation">.</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> | </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>productDetails<span class="token punctuation">.</span>description<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

                    <span class="token function">useServerSeoMeta</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                        <span class="token function-variable function">ogTitle</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> title<span class="token punctuation">,</span>
                        <span class="token function-variable function">title</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> title<span class="token punctuation">,</span>
                        <span class="token function-variable function">description</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> productDetails<span class="token punctuation">.</span>description<span class="token punctuation">,</span>
                        <span class="token function-variable function">ogDescription</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> productDetails<span class="token punctuation">.</span>description<span class="token punctuation">,</span>
                        <span class="token function-variable function">ogImage</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> productDetails<span class="token punctuation">.</span>thumbnail<span class="token punctuation">,</span>
                        <span class="token function-variable function">ogImageUrl</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> productDetails<span class="token punctuation">.</span>thumbnail<span class="token punctuation">,</span>
                        <span class="token function-variable function">twitterCard</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">'summary_large_image'</span><span class="token punctuation">,</span>
                        <span class="token function-variable function">twitterTitle</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> title<span class="token punctuation">,</span>
                        <span class="token function-variable function">twitterDescription</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> productDetails<span class="token punctuation">.</span>description<span class="token punctuation">,</span>
                        <span class="token function-variable function">twitterImage</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> productDetails<span class="token punctuation">.</span>thumbnail
                    <span class="token punctuation">}</span><span class="token punctuation">)</span>
                    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
                    <span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre><div class="toolbar"><div class="toolbar-item"><button type="button">Copy</button></div></div></div></div><p>With this, we now have the important metadata items for social shares. Finally, the most important part is building &amp; deployment.</p>
                    <section class="space">
                    <div class="space__circle"></div>
                    <div class="space__circle"></div>
                    <div class="space__circle"></div>
                    </section>
                    <h3 id="build-deploy">Build &amp;&nbsp;Deploy</h3>
                    <p>Unfortunately, we can not deploy our Nuxt app like traditional SPAs. We have two options:</p>
                    <ul>
                    <li>Deploying as a Statically Generated Site, or</li>
                    <li>Deploying as a Server Side Rendered App.</li>
                    </ul>
                    <p>Which should you choose? I recommend deploying it as an SSR application if you’re building something like an e-commerce site. However, you should go with SSG builds if you’re building a blog. This is because blogs have a definite amount of data compared to E-commerce sites.</p>
                    <p>First, let’s build and deploy as an SSG. Run <code>yarn generate</code> and wait while Nuxt crawls through each dynamic route and builds them into individual static pages.</p>
                    <div class="highlight"><div class="code-toolbar"><pre style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4" class="language-bash line-numbers"><code class="language-bash" data-lang="bash"><span class="token function">yarn</span> generate
                    <span aria-hidden="true" class="line-numbers-rows"><span></span></span></code></pre><div class="toolbar"><div class="toolbar-item"><button type="button">Copy</button></div></div></div></div><p><img src="https://cdn-images-1.medium.com/max/1600/1*wi7uiOuqJ8zqzMFe1kg3Og@2x.png" alt="yarn generate ouput " title="yarn generate output"></p>
                    <p>Once that’s done, you can publish or deploy the <code>dist</code> folder to any static host service like github pages, Netlify or Surge (recommended).</p>
                    <p>And for our SSR deployment, you would need to run <code>yarn build</code> and wait for Nuxt to build our client and server for production.</p>
                    <div class="highlight"><div class="code-toolbar"><pre style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4" class="language-bash line-numbers"><code class="language-bash" data-lang="bash"><span class="token function">yarn</span> build
                    <span aria-hidden="true" class="line-numbers-rows"><span></span></span></code></pre><div class="toolbar"><div class="toolbar-item"><button type="button">Copy</button></div></div></div></div><p><img src="https://cdn-images-1.medium.com/max/1600/1*Q81BjV6vhkx48uJYwxwLCw@2x.png" alt="yarn build output" title="yarn build output"></p>
                    <p>Once complete, you can set up a github deployment to services like Heroku or Render. Whatever deployment service you choose, make sure it has a node server provision. Here’s a list of platforms that support Nuxt 3:</p>
                    <p><img src="https://cdn-images-1.medium.com/max/1600/1*C71rdIqppFaCT4vhv8-GAQ@2x.png" alt="supported platforms" title="supported platforms"></p>
                    <section class="space">
                    <div class="space__circle"></div>
                    <div class="space__circle"></div>
                    <div class="space__circle"></div>
                    </section>
                    <h3 id="testing">Testing</h3>
                    <p>You don’t need to deploy your application before testing for correct meta information, look and feel. You can use platforms like <a href="https://metatags.io/" title="https://metatags.io/">https://metatags.io/</a> to check. Of course, metatags.io cannot read your local server. So you only need to channel your local server with <a href="https://ngrok.com/">Ngrok</a> and use the link Ngrok provides.</p>
                    <div class="highlight"><div class="code-toolbar"><pre style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4" class="language-bash line-numbers"><code class="language-bash" data-lang="bash">ngrok http <span class="token operator">&lt;</span>your-local-port<span class="token operator">&gt;</span>
                    <span aria-hidden="true" class="line-numbers-rows"><span></span></span></code></pre><div class="toolbar"><div class="toolbar-item"><button type="button">Copy</button></div></div></div></div><section class="space">
                    <div class="space__circle"></div>
                    <div class="space__circle"></div>
                    <div class="space__circle"></div>
                    </section>
                    <h3 id="conclusion">Conclusion</h3>
                    <p>Hopefully, this tutorial was helpful. However, the journey to building an SEO-friendly web application continues beyond meta descriptions. Some other things that are worth considering:</p>
                    <ul>
                    <li><strong>XML Sitemaps</strong> — Crawlers will always crawl, and you need to feed these crawlers for better search engine performance. So be sure to generate sitemaps for your applications.</li>
                    <li><strong>Accessibility</strong> — Be sure your applications are very accessible to crawlers and screen readers. Images have readable alt descriptions, and non-interactive elements also have proper alternative attributes.</li>
                    <li><strong>Run Periodic SEO Audits —</strong> If your application deals with new content every other week, run periodic SEO audits as often as necessary and keep your applications in the greens.</li>
                    </ul>
                    <p><img src="https://cdn-images-1.medium.com/max/1600/1*yiFjvPK-KGRJMU9rZtmOSA@2x.png" alt="devjavu lighthouse perfomance" title="devjavu lighthouse perfomance"></p>
                    <p>That said, have fun creating.</p>
                    <p>For your use, here’s a link to the github project for this example.</p>
                    <div class="link">
                    <a href="https://github.com/MartinsOnuoha/ecommerce-seo-nuxt" target="_blank">
                    <div class="card">
                    <div class="card__img" style="background-image: url(https://cdn-images-1.medium.com/fit/c/320/320/0*_8iAAyNJ_5bgwZpX)">
                    </div>
                    <div class="card__content">
                    <h5>
                    GitHub - MartinsOnuoha/ecommerce-seo-nuxt
                    </h5>
                    <p>
                    This is a basic example of using useServerSeoMeta in Nuxt 3 for proper SEO management. Be sure to read the article…
                    </p>
                    <small>
                    github.com
                    </small>
                    </div>
                    </div>
                    </a>
                    </div>
                    <section class="space">
                    <div class="space__circle"></div>
                    <div class="space__circle"></div>
                    <div class="space__circle"></div>
                    </section>
                    <p>Cheers ☕️</p>


            </article>

        </div>
    </main>
</template>

<style>
    .highlight{
        display: none
    }
</style>

