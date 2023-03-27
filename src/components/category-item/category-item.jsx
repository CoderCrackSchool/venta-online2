import './category-item.css';

const CategoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    return (
        <div className='category-container'>
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className='category-body-container'>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
};

export default CategoryItem;



// {// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC8L7bfMDN7YivZCUuvSEpA445V5rYfXGY",
//   authDomain: "venta-online-77dee.firebaseapp.com",
//   projectId: "venta-online-77dee",
//   storageBucket: "venta-online-77dee.appspot.com",
//   messagingSenderId: "516884365624",
//   appId: "1:516884365624:web:ee39fd7ca2a9c87cb381cd"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);}