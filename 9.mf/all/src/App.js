import React from 'react';
const RemoteSliders = React.lazy(() => import("host/Sliders"));
const RemoteNewsList = React.lazy(() => import("remote/NewsList"));
const App = () => {
  return (
    <div>
      <h2>远程组件Sliders</h2>
      <React.Suspense fallback="loading Sliders">
        <RemoteSliders />
      </React.Suspense>
      <h2>远程组件NewsList</h2>
      <React.Suspense fallback="loading NewsList">
        <RemoteNewsList />
      </React.Suspense>
    </div>
  )
}
export default App;