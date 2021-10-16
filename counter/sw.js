self.addEventListener('fetch', () => {
  // ここは空でもOK
})

// ファイブラリのインポート
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js')

// ファイルのキャッシュ
workbox.precaching.precacheAndRoute([
  {
    url: '/index.html',
    revision: '12345'
  },
  {
    url: '/bootstrap.css',
    revision: '12345'
  },
  {
  url: '/app.js',
    revision: '12345'
  },
])