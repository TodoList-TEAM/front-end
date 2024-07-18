import '../App.css'
import './Fixed.css'
import { Link } from 'react-router-dom'


export function Footer(){

    return(
      <div className='screen_center'>
        <div className='screen_bottom'>
        
        <div className='bottom'>
          <button><Link to='home'>홈</Link></button>
          <button><Link to='comunity'>커뮤니티</Link></button>
          <button><Link to='mypage'>마이페이지</Link></button>
          <button>내 정보</button>
        </div>
      </div>
      </div>
      
      
    )
}