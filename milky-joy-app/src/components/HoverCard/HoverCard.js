import './HoverCard.css';

function HoverCard({src,item,inline,desc}) {
  return (
    <div className="contianer">
        <div className="card">
            <div className="image">
                <img src={src} alt="HoverCard"/>
            </div>
            <div className="content">
                <h2>{item}</h2>
                <br/>
                <h3>{inline}</h3>
                <p>{desc}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    </div>
  );
}

export default HoverCard;