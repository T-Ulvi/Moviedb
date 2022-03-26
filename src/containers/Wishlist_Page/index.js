import React from 'react'
import { MovieCard } from '../../components';
import { useSelector } from 'react-redux';
import { Row,Col} from 'antd'
import "./style.scss"
function WishlistPage() {
  const wishlist=useSelector(state=>state.wishlist);
  return (
    <div className='Wislistcontainer'>
       {
          wishlist.length?
        <div>
          <h1 className='page-title'>Your wishlist</h1>
              <Row gutter={[30,34]}> 
                {
                wishlist.map((film,index)=>(
                  <Col key={index}  xs={24} sm={12} md={8} lg={6}>
                  <MovieCard movie={film}/>
                  </Col>
                ))
                }
            </Row> 
        </div>
        : 
        <h1 className='empty'>Your wishlist is empty</h1>}
    </div>
  )
}

export default WishlistPage