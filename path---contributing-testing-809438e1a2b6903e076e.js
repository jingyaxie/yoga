webpackJsonp([0xf3d9d8da20b1],{517:function(n,t){n.exports={pathContext:{frontmatter:{path:"/contributing/testing",title:"Testing",hasPlayground:!1,initialPlayground:null,redirect:null},html:'<h1>Testing</h1>\n<p>Yoga tries to be as close as possible to chrome in its flexbox behaviour.\nTo ensure this most of Yoga\'s test suite is automatically generateded from\nrunning the corresponding layout in chrome using a webdriver which then generates\nC++ test which asserts that Yoga will produce matching outputs for that layout.</p>\n<h2>Running the Test Suite</h2>\n<ol>\n<li>Yoga builds with <a href="https://buckbuild.com">buck</a>. Follow their documentation to get up and running.</li>\n<li>For testing Yoga relies on <a href="https://github.com/google/googletest">gtest</a> as a submodule. After cloning Yoga run <code>git submodule init</code> followed by <code>git submodule update</code>.</li>\n<li>In a terminal from the root of your Yoga checkout run <code>buck test //:yoga</code>.</li>\n</ol>\n<h2>Adding a Test</h2>\n<p>Instead of manually writing a test which ensures parity with web implementations\nof Flexbox we make use of a generated test suite. We use <code>gentest/gentest.rb</code> to\ngenerate this test suite. Write the html which you want to verify in Yoga and put\nit in the <code>gentest/fixtures</code> folder, such as the following.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my_test<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span> <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>Run <code>gentest/gentest.rb</code> to generate test code and re-run <code>buck test //:yoga</code>\nto validate the behavior. One test case will be generated for every root <code>div</code>\nin the input html with the string in the <code>id</code> corresponding to the test name.</p>\n<p>You may need to install the latest watir gem (<code>gem install watir</code>) and\n<a href="https://sites.google.com/a/chromium.org/chromedriver/">ChromeDriver</a> to\nrun <code>gentest/gentest.rb</code> Ruby script.</p>\n<h2>Manual test</h2>\n<p>For some aspects of Yoga we cannot generate a test using the test generation\ninfrastructure described earlier. For these cases we manually write a test in\nthe <code>/tests</code> directory.\t</p>'}}}});
//# sourceMappingURL=path---contributing-testing-809438e1a2b6903e076e.js.map