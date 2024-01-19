const App = () => {
  const categoriesData = [
    {
      id: 1,
      h2Title: 'Mens'
    },
    {
      id: 2,
      h2Title: 'Womens'
    },
    {
      id: 3,
      h2Title: 'Shoes'
    }
  ];
  const categories = categoriesData.map(({ id = 0, h2Title = '' } = {} ) => (
    <div 
      className="category-container"
      key={id}
    >
      {/* <img/> */}
      <div className="category-body-container">
        <h2>{h2Title}</h2>
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
