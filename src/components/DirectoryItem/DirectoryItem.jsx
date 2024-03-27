import './DirectoryItem.scss';

const DirectoryItem = ({ id = 0, title = '', imageUrl = '' }) => {
  return (
    <div 
      className="directory-item-container"
      key={id}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* <img/> */}
      <div className="directory-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
