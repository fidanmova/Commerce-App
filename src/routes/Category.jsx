

const Category = () => {
  const categories = [
    {
      id: 1,
          title: "Hats",
          imageUrl: "https://images.unsplash.com/photo-1568184765125-1de6d7acc746?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1113&q=80",
    },
    {
      id: 2,
        title: "Jackets",
        imageUrl: "https://images.unsplash.com/photo-1555036891-fcc7de8d6f8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHxqYWNrZXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=600",
    
    },
    {
      id: 3,
        title: "Sneakers",
        imageUrl:"https://images.unsplash.com/photo-1565814636199-ae8133055c1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 4,
        title: "Unisex",
        imageUrl:"https://images.unsplash.com/photo-1586233829070-eb766ce733f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE2fHxibGFjayUyMCUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 5,
        title: "Womens",
        imageUrl:"https://images.unsplash.com/photo-1656940961886-6989852e24ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fG5vbmJpbmFyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:6,
        title: "Mens",
        imageUrl:"https://images.unsplash.com/photo-1530031092055-18d4a16ff6e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
  ];

    return (
        <div className="categories-container">
      
      {categories.map(({ title,id,imageUrl}) => (
        <div key={id} className="category-container">
          <div className="background-image"  style={{backgroundImage:`url(${imageUrl})`}}/>
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;