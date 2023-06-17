import "./styles/app.css";
import starIcon from "./images/icon-star.svg";
import Comment from "./Comment";
import anne from "./images/image-anne.jpg";
import colton from "./images/image-colton.jpg";
import irene from "./images/image-irene.jpg";

function App() {
  const fiveStars = new Array(5).fill();
  console.log(fiveStars);
  return (
    <div className="app">
      <div className="container">
        <div className="intro">
          <header>
            <h1 className="title">10,000+ of our users love our products.</h1>
            <p className="detail">
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </header>
          <section>
            <div className="rated">
              <div className="star-icon">
                {fiveStars.map((fs, idx) => (
                  <img key={idx} src={starIcon} alt="star" />
                ))}
              </div>
              <p>Rated 5 Stars in Reviews</p>
            </div>
            <div className="rated">
              <div className="star-icon">
                {fiveStars.map((fs, idx) => (
                  <img key={idx} src={starIcon} alt="star" />
                ))}
              </div>
              <p>Rated 5 Stars in Report Guru</p>
            </div>
            <div className="rated">
              <div className="star-icon">
                {fiveStars.map((fs, idx) => (
                  <img key={idx} src={starIcon} alt="star" />
                ))}
              </div>
              <p>Rated 5 Stars in BestTech</p>
            </div>
          </section>
        </div>
        <article>
          <Comment
            imgSrc={colton}
            name="Colton Smith"
            message='"We needed
    the same printed design as the one we had ordered a week prior. Not only did
    they find the original order, but we also received it in time. Excellent!"'
          />
          <Comment
            imgSrc={irene}
            name="Irene Roberts"
            message='"Customer service is always excellent and very
    quick turn around. Completely delighted with the simplicity of the purchase
    and the speed of delivery."'
          />
          <Comment
            imgSrc={anne}
            name="Anne Wallace"
            message='"Put an order with
    this company and can only praise them for the very high standard. Will
    definitely use them again and recommend them to everyone!"'
          />
        </article>
      </div>
    </div>
  );
}

export default App;
