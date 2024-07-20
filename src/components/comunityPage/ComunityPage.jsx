import { Header } from "../Header"
import { Footer } from "../Footer"
import './ComunityPage.css'
import { Cate } from "./Cate"


export function ComunityPage(){

 

    return(
      <div className="screen_main">
        <div className='comunityHomePage'>
          
          
          <div className='comunityHomePage_add'>
            <h4>광고</h4>
          </div>
          <div className='comunityHomePage_CategoryBox'>
            <div  className="CategoryBox_row">
              <Cate />
              <Cate />
              <Cate />
              <Cate />
              <Cate />
              <Cate />
            </div>
            <div  className="CategoryBox_row">
              <Cate />
              <Cate />
              <Cate />
              <Cate />
              <Cate />
              <Cate />
            </div>
            
          </div>

          <div className='comunityHomePage_contents'>
            <div className='comunityHomePage_option'>
              <button>이번주 인기글</button>
              <button>최신글</button>
            </div>
            <div className='homePage_popular'>
              <ul>
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

          <button className='writeBtn'>
            +
          </button>

        </div>
      </div>
        
    )
}