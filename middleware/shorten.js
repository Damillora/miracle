import { tall } from 'tall';


export default function (context) {
  return tall(process.env.SHORTENER_BASE+context.route.path).then(function(unshortenedUrl) {
    if(unshortenedUrl == process.env.SHORTENER_BASE) {
      context.error({ statusCode: 404, message: "The page cannot be found"});
    } else {
      context.redirect(unshortenedUrl);
    }
  });
  //  context.redirect("https://nanao.moe");
}
