const express = require("express");
const booksRouter = express.Router();
const Bookdata = require("../model/bookdata");
function router(nav) {
  // var books = [
  //     {
  //         title:'Origin',
  //         author:'Dan Brown',
  //         genre:'Mystery thriller',
  //         img:'tj1.jpg',
  //         exp:"Robert Langdon, Harvard professor of symbology and religious iconology, arrives at the ultramodern Guggenheim Museum Bilbao to attend a major announcement - the unveiling of a discovery that will change the face of science forever. The evening's host is Edmond Kirsch, a forty-year-old billionaire and futurist whose dazzling high-tech inventions and audacious predictions have made him a renowned global figure. Kirsch, who was one of Langdon's first students at Harvard two decades earlier, is about to reveal an astonishing breakthrough ... one that will answer two of the fundamental questions of human existence.As the event begins, Langdon and several hundred guests find themselves captivated by an utterly original presentation, which Langdon realizes will be far more controversial than he ever imagined. But the meticulously orchestrated evening suddenly erupts into chaos, and Kirsch's precious discovery teeters on the brink of being lost forever. Reeling and facing an imminent threat, Langdon is forced into a desperate bid to escape Bilbao. With him is Ambra Vidal, the elegant museum director who worked with Kirsch to stage the provocative event. Together they flee to Barcelona on a perilous quest to locate a cryptic password that will unlock Kirsch's secret.Navigating the dark corridors of hidden history and extreme religion, Langdon and Vidal must evade a tormented enemy whose all-knowing power seems to emanate from Spain's Royal Palace itself... and who will stop at nothing to silence Edmond Kirsch. On a trail marked by modern art and enigmatic symbols, Langdon and Vidal uncover clues that ultimately bring them face-to-face with Kirsch's shocking discovery ... and the breathtaking truth that has long eluded us."
  //     },
  //     {
  //         title:'Turtles All the Way Down',
  //         author:'John Green',
  //         genre:'Realistic fiction',
  //         img:'t2.jfif',
  //         exp:"Sixteen-year-old Aza never intended to pursue the mystery of fugitive billionaire Russell Pickett, but there's a hundred thousand dollar reward at stake and her Best and Most Fearless Friend, Daisy, is eager to investigate. So together, they navigate the short distance and broad divides that separate them from Russell Pickett's son, Davis.Aza is trying. She is trying to be a good daughter, a good friend, a good student, and maybe even a good detective, while also living within the ever-tightening spiral of her own thoughts.In his long-awaited return, John Green, the acclaimed, award-winning author of Looking for Alaska and The Fault in Our Stars, shares Aza's story with shattering, unflinching clarity in this brilliant novel of love, resilience, and the power of lifelong friendship."
  //     },
  //     {
  //         title:'The Alchemist',
  //         author:'Paulo Coelho',
  //         genre:'Fantasy',
  //         img:'tj3.jpg',
  //         exp:"The Alchemist presents a simple fable, based on simple truths and places it in a highly unique situation. And though we may sniff a bestselling formula, it is certainly not a new one: even the ancient tribal storytellers knew that this is the most successful method of entertaining an audience while slipping in a lesson or two. Brazilian storyteller Paulo Coehlo introduces Santiago, an Andalusian shepherd boy who one night dreams of a distant treasure in the Egyptian pyramids. And so he's off: leaving Spain to literally follow his dream.Along the way he meets many spiritual messengers, who come in unassuming forms such as a camel driver and a well-read Englishman. In one of the Englishman's books, Santiago first learns about the alchemists--men who believed that if a metal were heated for many years, it would free itself of all its individual properties, and what was left would be the 'Soul of the World.' Of course he does eventually meet an alchemist, and the ensuing student-teacher relationship clarifies much of the boy's misguided agenda, while also emboldening him to stay true to his dreams.'My heart is afraid that it will have to suffer', the boy confides to the alchemist one night as they look up at a moonless night."
  //     }
  //     ]
  booksRouter.get("/", function (req, res) {
    Bookdata.find().then(function (books) {
      res.render("books", {
        nav,
        title: "Library",
        books,
      });
    });
  });
  booksRouter.get("/:id", function (req, res) {
    const id = req.params.id;
    Bookdata.findOne({ _id: id }).then(function (book) {
      res.render("book", {
        nav,
        title: "Library",
        book,
      });
    });
  });
  return booksRouter;
}

module.exports = router;
