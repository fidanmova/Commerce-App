import "./categories.styles.scss";
import CATEGORY from "./categories.json";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="categories-container">
      {CATEGORY.map(({ title, id, imageUrl }) => (
        <div key={id} className="category-container">
          <div
            className="background-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="category-body-container">
            <Link to="/store">
              {" "}
              <h2>{title}</h2>
            </Link>

            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
