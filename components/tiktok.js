import React from 'react'
import Head from 'next/head'
export default () => (
  <div>
    <Head>
      <script async src="https://www.tiktok.com/embed.js"></script>
    </Head>
    <blockquote
      className="tiktok-embed rounded-2xl overflow-hidden w-full"
      cite="https://www.tiktok.com/@shyakinaa"
      data-unique-id="shyakinaa"
      data-embed-from="embed_page"
      data-embed-type="creator"
    >
      <section>
        <a
          target="_blank"
          href="https://www.tiktok.com/@shyakinaa?refer=creator_embed"
        >
          @shyakinaa
        </a>
      </section>
    </blockquote>
  </div>
)
