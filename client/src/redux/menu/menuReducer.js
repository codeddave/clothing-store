const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/clothing-store-b3d8e.appspot.com/o/stuff%2Fsahil-pandita-83c_IVAEufA-unsplash.jpg?alt=media&token=198cf00f-fcf2-49da-9823-00713c02dd3f",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/clothing-store-b3d8e.appspot.com/o/stuff%2Famanda-vick-ohWf6YuzOQk-unsplash.jpg?alt=media&token=26946b2e-5377-43a3-b3dd-a79fb2ef7633",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/clothing-store-b3d8e.appspot.com/o/stuff%2Fsolesavy-2tfHt0sfv3w-unsplash.jpg?alt=media&token=99763fc0-16ad-4097-a40a-c0ac8161d984",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/clothing-store-b3d8e.appspot.com/o/stuff%2Fharry-cunningham-J5BcbMVvQ0k-unsplash.jpg?alt=media&token=f35b5576-2c7c-4e50-90b4-d9df90148836",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/clothing-store-b3d8e.appspot.com/o/stuff%2Fjonathan-borba-4JtQtLb6ups-unsplash.jpg?alt=media&token=817dbec9-e4d8-495d-b6ab-80c2e1b53c8c",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default menuReducer;
