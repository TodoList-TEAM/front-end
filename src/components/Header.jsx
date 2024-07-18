import '../App.css'
import { Link } from 'react-router-dom'

export function Header(){

    return(
      <div className='screen_header'>
        <div className='header'>
            <div className='up'>
              <button className='logo'>
                <Link to='home'>
                  온쉼표
                </Link>
              </button>
              <div className='help'>
                <p>아이콘</p>
              </div>
            </div>
            <div className='down'>
              <p>날씨정보</p>
            </div>
          </div>
      </div>
        
    )
}