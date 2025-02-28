import React, { useEffect,useState } from 'react'
import './Home.css'
import logo from './logo.png'
import axios from 'axios';

const Home = () => {
  const [productData,setproductData] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get("https://dummy-json.mock.beeceptor.com");
      setproductData(res.data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(()=>
    {getData();},[]);

   console.log(productData);
   
  getData();  
  
  return(
    <div>
      <div className='header'>
        <div className='logoset'>
          <img src={logo} alt=""/>
          <h2>Rainbow</h2>
          <div className='menucontainer'>
            <p>Home</p>
            <p>About</p>
            <p>Blog</p>
            <p>Contact us</p>
            <button>Login</button>
          </div>
        </div>
      </div>

      <div className='base'>
        <div className='first'>
          <img src='dress1.jfif' alt='dress1'></img>
          <p className='text'>Puffy Dress</p>
          <p>Price: $50</p>
          <p>Size: Small</p>
        </div>
        <div className='second'>
          <img src='dress2.jfif' alt='dress2'></img>
          <p className='text'>Dazzling Dress</p>
          <p>Price: $60</p>
          <p>Size: Small</p>
        </div>
        <div className='third'>
           <img src='dress3.jfif' alt='dress3'></img>
           <p className='text'>Floral Dress</p>
           <p>Price: $70</p>
           <p>Size: Small</p> 
        </div>
      </div>
    </div>
  );
};

export default Home;