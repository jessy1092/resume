export default ({
  title, ogTitle, description, image, url, keywords, html, state
}) => (
`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${description}" />
  <meta name="keywords" content="${keywords}" />
  <meta property="og:title" content="${ogTitle}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${image}" />
  <meta property="og:url" content="${url}" />
  <title>${title}</title>
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css">
  <link href="//fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">
  <link href="/styles/main.css" type="text/css" rel="stylesheet"></link>
</head>
<body>
  <div id="content">${html}</div>
  <script>window.__state__ = ${state};</script>
  <script type="text/javascript" src="/scripts/vendor.bundle.js"></script>
  <script type="text/javascript" src="/scripts/bundle.js"></script>
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-42371051-3', 'auto');
    ga('send', 'pageview');
  </script>
</body>
</html>`
);
