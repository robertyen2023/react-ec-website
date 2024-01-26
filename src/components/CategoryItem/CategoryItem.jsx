import './CategoryItem.scss';

const CategoryItem = ({ id = 0, title = '', imageUrl = '' }) => {
  return (
    <div 
      className="category-container"
      key={id}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* <img/> */}
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
