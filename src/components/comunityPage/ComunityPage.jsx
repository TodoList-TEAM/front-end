import { Header } from "../Header"
import { Footer } from "../Footer"


export function ComunityPage(){

    return(
        <div className='comunityHomePage'>
          <Header />

          
          <div className='comunityHomePage_add'>
            <h1>광고</h1>
          </div>
          <div className='comunityHomePage_yellowBox'>
            <h1>카테고리</h1>
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

          <Footer />
        </div>
    )
}