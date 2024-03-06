import { Delete } from '@mui/icons-material';
import { useCartContext } from '../../context/cart_context';

const CartItem = ({ cartItem }) => {
    const { removeFromCart } = useCartContext();
  
    return (
        <div className='flex gap-12 border-2 border-white p-4'>
            <div>
                <img className='w-[200px] h-[130px]' src={cartItem.image} alt={cartItem.course_name} />
            </div>

            {/* <div className='flex'> */}
                <div className='flex flex-col '>
                <p className='text-md'>{cartItem.course_name}</p>
                <span className='text-sm text-gray-500'>By {cartItem.creator}</span>
                <div className='text-primary'>${cartItem.discounted_price}</div>
                <div className='bg-orange'>{cartItem.category}</div>
                <button type="button" className='w-[100px] h-[30px] bg-yellow-600 rounded-md' onClick={() => removeFromCart(cartItem.courseID)}>
                    Remove <span><Delete /></span>
                </button>
                </div>
                
            {/* </div> */}
        </div>
    )
}

export default CartItem;
