import { tall } from 'tall';


export default function (context) {
  return tall(process.env.SHORTENER_BASE+context.route.path).then(function(unshortenedUrl) {
    context.redirect(unshortenedUrl);
  });
  //  context.redirect("https://nanao.moe");
}
