import PropTypes from "prop-types";

const Product = (props) => {
  return (
    <div className="product" style={{ backgroundColor: props.categoryColor }}>
      <div className="category-banner">{props.category}</div>
      <img src={props.image} className="product-image" alt=""></img>
      <h4>{props.name}</h4>
      <span>{props.price}</span>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  categoryColor: PropTypes.string,
};

Product.defaultProps = {
  name: "Pret inexistent",
};

export default Product;
