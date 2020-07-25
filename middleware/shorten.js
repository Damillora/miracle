const fetch = require('node-fetch');

export default function (context) {
  return fetch(process.env.SHORTENER_BASE+context.route.path, {
    redirect: 'manual',
  }).then(function(res) {
    var unshortenedUrl = res.headers.get('Location');
    if(unshortenedUrl == process.env.SHORTENER_BASE+"/") {
      context.error({ statusCode: 404, message: "The page cannot be found"});
    } else {
      context.redirect(unshortenedUrl);
    }
  });
  //  context.redirect("https://nanao.moe");
}
