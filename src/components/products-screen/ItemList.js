import { Link } from "react-router-dom";

const ItemList = (props) => {
  return (
    <div className="col-md-3 col-10 mx-auto">
      <div className="card">
       <Link to={props.path}><img src={props.img} className="card-img-top" alt="..." /></Link>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{`$${props.price}`}</p>
          <button
            onClick={() => props.onClick(props)}
            className="btn btn-primary"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
