import { useState } from "react";

const quotes = [
    {
      text:
        "Knock, And He'll open the door Vanish, And He'll make you shine like the sun Fall, And He'll raise you to the heavens Become nothing, And He'll turn you into everything.",
      author: "Jalal Ad-Din Rumi"
    },
    {
      text: "Suffering is a gift. In it is hidden mercy.",
      author: "Jalal Ad-Din Rumi"
    },
    {
      text:
        "Start writing, no matter what. The water does not flow until the faucet is turned on.",
      author: "Louis L’Amour"
    },
    {
      text:
        "Muhammad has always been standing higher than the Christianity. He does not consider god as a human being and never makes himself equal to God. Muslims worship nothing except God and Muhammad is his Messenger. There is no any mystery and secret in it.",
      author: "Leo Tolstoy"
    },
    {
      text:
        "Be peaceful, be courteous, obey the law, respect everyone; but if someone puts his hand on you, send him to the cemetery.",
      author: "Malcolm X"
    },
    {
      text:
        "I challenge anyone to understand Islam, its spirit, and not to love it. It is a beautiful religion of brotherhood and devotion.",
      author: "Yann Martel, Life of Pi"
    },
    {
      text:
        "What has he found who has lost God? And what has he lost who has found God?",
      author: "Ibn 'Ata' Allah Al-Iskandari"
    },
    {
      text: "It's not radical Islam that worries the US -- it's independence",
      author: "Noam Chomsky"
    },
    {
      text: "The happiness of the drop is to die in the river.",
      author: "Imam Al-Ghazali"
    }
  ];
  
  function QuoteCard() {
    const [quote, setQuote] = useState(quotes[0]);
    const random = () => Math.floor(Math.random() * quotes.length);
    const handleClick = () => setQuote(quotes[random()])
    
  return (
    <div className="card quote p-3 d-flex align-items-center">
        <div className="row">
            <div className="col">
                <h1>{quote.text}</h1>
            </div>
        </div>
        <div className="author">
            <p>-{quote.author}</p>
        </div>
        <div className="hr"/>
        <div className="row d-flex w-100 p-2">
            <div className="col">
              <a href="twitter/intent/tweet" target="_blank" className="btn btn-default">
                <i className="fa-brands fa-twitter"></i>
                </a>
            </div>
            <div className="col d-flex justify-content-end">
              <button className="btn btn-default" onClick={handleClick}>
                Next quote
              </button>
            </div>
        </div>
    </div>
  )
}

export default QuoteCard


  
//   class QueteBox extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         text: quotes[0].text,
//         author: quotes[0].author
//       }
      
//       this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick(){
//       let index = Math.floor(Math.random() * quotes.length);
//       this.setState({
//          text: quotes[index].text,
//         author: quotes[index].author
//       });
//     }
  
//     render() {
//       return (
//         <div id="quote-box card w-25">
//           <h1>
//             <sup>
//               <i id="icon" class="fa-solid fa-quote-left"></i>
//             </sup>
//             <span id="text">{this.state.text}</span>
//           </h1>
//           <p id="author">-{this.state.author}</p>
//           <div class="row d-flex justify-content-between w-100">
//             <div class="col-3 ms-3">
//               <a href="twitter.com/intent/tweet" target='_blank' id="tweet-quote" class="btn btn-default">
//                 <i class="fa-brands fa-twitter"></i>
//               </a>
//             </div>
//             <div class="col-3  me-3">
//               <button id="new-quote" class="btn btn-default" onClick={this.handleClick}>
//                 Next quote
//               </button>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }
  