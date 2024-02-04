import './Cards.css';

function Cards({src,item,inline,desc}) {
  return (
    <div className="card">
      <img src={src} alt="Cards"/>
      <div>
        <h2>{item}</h2>
        <h3>{inline}</h3>
        <p>{desc}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default Cards;


