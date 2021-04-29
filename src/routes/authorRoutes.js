const express = require('express');
const authorsRouter = express.Router();
function router(nav){
    var authors = [
        {
            title:'Dan Brown',
            fbook:'Origin',
            info:'Daniel Gerhard Brown (born June 22, 1964) is an American author best known for his thriller novels, including the Robert Langdon novels Angels & Demons (2000), The Da Vinci Code (2003), The Lost Symbol (2009), Inferno (2013) and Origin (2017). His novels are treasure hunts that usually take place over a period of 24 hours.They feature recurring themes of cryptography, art, and conspiracy theories. His books have been translated into 57 languages and, as of 2012, have sold over 200 million copies. Three of them, Angels & Demons, The Da Vinci Code, and Inferno, have been adapted into films.',
            img:'db.jpg'
        },
        {
            title:'John Green',
            fbook:'Turtles All The Way Down',
            info:"John Michael Green (born August 24, 1977) is an American author and YouTube content creator. He won the 2006 Printz Award for his debut novel, Looking for Alaska,[2] and his fourth solo novel, The Fault in Our Stars, debuted at number one on The New York Times Best Seller list in January 2012.The 2014 film adaptation opened at number one at the box office.In 2014, Green was included in Time magazine's list of The 100 Most Influential People in the World.Another film based on a Green novel, Paper Towns, was released on July 24, 2015.",
            img:'jg.jpg'
        },
        {
            title:'Paulo Coelho',
            fbook:'The Alchemist',
            info:"The Brazilian author PAULO COELHO was born in 1947 in the city of Rio de Janeiro. Before dedicating his life completely to literature, he worked as theatre director and actor, lyricist and journalist. In 1986, PAULO COELHO did the pilgrimage to Saint James of Compostella, an experience later to be documented in his book The Pilgrimage. In the following year, COELHO published The Alchemist. Slow initial sales convinced his first publisher to drop the novel, but it went on to become one of the best selling Brazilian books of all time. Other titles include Brida (1990), The Valkyries (1992), By the river Piedra I sat Down and Wept (1994), the collection of his best columns published in the Brazilian newspaper Folha de São Paulo entitle Maktub (1994), the compilation of texts Phrases (1995), The Fifth Mountain (1996), Manual of a Warrior of Light (1997), Veronika decides to die (1998), The Devil and Miss Prym (2000), the compilation of traditional tales in Stories for parents, children and grandchildren (2001), Eleven Minutes (2003), The Zahir (2005), The Witch of Portobello (2006) and Winner Stands Alone (to be released in 2009).",
            img:'pc.jpg'
        }
        ]
        authorsRouter.get('/',function(req,res){
            res.render("authors",{
                nav,
                title:'Authors',
                authors
            });
        });
        authorsRouter.get('/:id',function(req,res){
            const id = req.params.id; 
            res.render("author",{
                nav,
                title:'Library',
                author:authors[id]
            });
        });
        return authorsRouter;

}

module.exports = router;