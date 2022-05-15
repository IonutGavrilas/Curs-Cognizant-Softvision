import Product from "../Product";
import tomatoes from "../../assets/tomatoes.jpg";
import yoghurt from "../../assets/yoghurt.jpg";

const Exercise1 = () => {
  return (
    <div className="exercise-card">
      Exercitiu 1
      <br />
      <div className="d-flex">
        <Product
          name="Rosii"
          price={10.09}
          category="legume"
          categoryColor="lightgreen"
          image={tomatoes}
        />
        <br />
        <Product
          name="Iaurt fructe"
          price={2.09}
          category="lactate"
          categoryColor="seashell"
          image={yoghurt}
        />
        <br />
        <Product />
      </div>
    </div>
  );
};

export default Exercise1;
