import './App.scss';

const App = () => {
  const categoriesData = [
    {
      id: 1,
      title: 'Mens'
    },
    {
      id: 2,
      title: 'Womens'
    },
    {
      id: 3,
      title: 'Shoes'
    }
  ];
  const categories = categoriesData.map(({ id = 0, title = '' } = {} ) => (
    <div 
      className="category-container"
      key={id}
    >
      {/* <img/> */}
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  ));

  return (
    <div className="categories-container">
      {categories}
    </div>
  );
};

export default App;
