import { Header } from "../Header"
import { Footer } from "../Footer"
import './HomePage.css'
import { Thnumnail } from "../Thumnail"

export function HomePage(){

    return(
      <div className="screen_main">
        <div className='homePage'>
          

          <div className='add'>
            <p>여기는 광고가 나와요</p>
          </div>
          <div className='homePage_contents'>
            <div className='homePage_option'>
              <button>이번주 인기글</button>
              <button>최신글</button>
            </div>
            <div className='homePage_popular'>
              <ul>
                <li>
                <div className='homePage_content_thumbnail'>
                  <Thnumnail />
                </div>
                    
                  </li>
                  <li>
                    <div className='homePage_content_thumbnail'>
                      <h3>인기 있는 게시글 제목1</h3>
                      <h4>카테고리</h4>
                    </div>
                  </li>
                  <li>
                    <div className='homePage_content_thumbnail'>
                      <h3>인기 있는 게시글 제목2</h3>
                      <h4>카테고리</h4>
                    </div>
                  </li>
                  <li>
                    <div className='homePage_content_thumbnail'>
                      <h3>인기 있는 게시글 제목3</h3>
                      <h4>카테고리</h4>
                    </div>
                  </li>
                  <li>
                    <div className='homePage_content_thumbnail'>
                      <h3>인기 있는 게시글 제목4</h3>
                      <h4>카테고리</h4>
                    </div>
                  </li>
                  <li>
                    <div className='homePage_content_thumbnail'>
                      <h3>인기 있는 게시글 제목5</h3>
                      <h4>카테고리</h4>
                    </div>
                  </li>
                </ul>
            </div>
          </div>

          
        </div>
      </div>
        
    )
}