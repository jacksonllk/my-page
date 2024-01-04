// app/page.js
import React from 'react';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';

export default function Page({ Component, pageProps }) {
  // You can add additional layout components here if needed
  return (
    <div>
      <Intro />
      <Portfolio />
      <Blog {...pageProps} />
      <Component {...pageProps} />
    </div>
  );
}
