import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Image from "../../designLayouts/Image";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";

import Cabbage from '../../../assets/vegetables/1.jpg';
import Tomato from '../../../assets/vegetables/2.jpg';
import Cucumber from '../../../assets/vegetables/4.jpg';
import Onion from '../../../assets/vegetables/5.jpg';
import Lemon from '../../../assets/vegetables/6.jpg';

const imageMap = {
  Cabbage,
  Tomato,
  Cucumber,
  Onion,
  Lemon,
};

const Product = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productItem = props;

  const handleAddToCart = async () => {
    try {
      if (!props.img) {
        console.error('Image URL is not provided.');
        return;
      }

      const response = await fetch('http://localhost:4000/cart_items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productItem),
      });

      const data = await response.json();

      dispatch(
        addToCart({
          _id: props._id,
          name: props.productName,
          quantity: 1,
          image: props.img,
          badge: props.badge,
          price: props.price,
          colors: props.color,
        })
      );
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const handleProductDetails = () => {
    const _id = props.productName;
    const rootId = String(_id).toLowerCase().split(" ").join("");
    navigate(`/product/${rootId}`, {
      state: {
        item: productItem,
      },
    });
  };

  return (
    <div className="w-full relative group">
      <div className="max-w-80 max-h-80 relative overflow-y-hidden">
        <div>
          <Image className="w-full h-full" imgSrc={imageMap[props.img]} />
        </div>
        <div className="absolute top-6 left-8">
          {props.badge && <Badge text="New" />}
        </div>
        <div className="w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
          <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
            <li
              onClick={handleAddToCart}
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              Add to Cart
              <span>
                <FaShoppingCart />
              </span>
            </li>
            <li
              onClick={handleProductDetails}
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              View Details
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-primeColor font-bold">
            {props.productName}
          </h2>
          <p className="text-[#767676] text-[14px]">${props.price}</p>
        </div>
        <div>
          <p className="text-[#767676] text-[14px]">{props.color}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
