import { useContext } from "react";
import { useHistory } from "react-router-dom";
import CartContext from "../store/Cart-contex";

const ItemList = (props) => {
  const cartCtx = useContext(CartContext)
  const history = useHistory();
  let title = props.title
  
  if(title.length >= 23){
    title = title.substr(0,22);
  }


  const onImageClickHandler = () => {
    cartCtx.addExtraImage(props.images);
    history.push('/store/details');
  }

  return (
    <li>
      <div className="card text-center">
       <img onClick={onImageClickHandler} src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{`$${props.price}`}</p>
          <button
            onClick={() => props.onClick(props)}
            className="btn btn-outline-primary btn-sm"
          >
            Add To Cart
          </button>
        </div>
      </div>
      </li>
  );
};

export default ItemList;
