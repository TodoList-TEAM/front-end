import { Header } from "../Header"
import { Footer } from "../Footer"
import './MyPage.css'



export function MyPage(){

    return(
      <div className="screen_main">
        <div className='myPage'>
          

          <div className='body'>
            <div className='myPage_plan'>
              <p className="mypage_title">PLANS OF THIS WEEK</p>
              <ul>
                <li>
                  -
                </li>
                <li>
                  +
                </li>
              </ul>
            </div>

            <div className='myPage_mid'>
              <div className='schedule'>
                <div className='title'>
                  <p>SCHEDULE</p>
                  <p>날짜</p>
                </div>
                <div className='calendar'>

                </div>
                <button id='scheduleBtn'>+</button>
              </div>
              <div className='memoList'>  
                <div className='memo' id='drug'>
                  <p>약 복용 시간</p>
                
                </div>
                <div className='memo' id='check'>
                  <p>검진 결과</p>
                
                </div>
                <div className='memo' id='caution'>
                  <p>약 주의사항</p>
                
                </div>

              </div>
            </div>

            <div className='myPage_Diary'>
              <div className='mypage_title'>
                <p>TODAY'S DIARY</p>
              </div>
              <div className="mypage_Diary_up">
                <div className="mypage_Diary_Imoge">
                  <div className="kibun">
                    <p className="Diary_title">오늘의 기분은 어떤가요?</p>
                  </div>
                  <div className="condition">
                    <p className="Diary_title">오늘의 컨디션은 어떤가요?</p>
                  </div>
                </div>
                <div className='kamsa'>
                  <p className="Diary_title">오늘 감사한 일이 있었나요?</p>
                </div>
              </div>
              <div className="mypage_Diary_down">
                <p className="Diary_title">오늘 하루 일과는 어땠나요?</p>
              </div>
            </div>

            <div className="mypage_Photo">
              <p className="mypage_title">TODAY'S PHOTO</p> 
              <div className="mypage_Photo_contents">
                <div className="mypage_Photos">
                  <div className="photo">
                    <div className="picture">
                      n
                    </div>
                    <div className="picture_info">
                      <p>내용을 입력하세요</p>
                    </div>
                  </div>
                  <div className="photo">
                    <div className="picture">

                    </div>
                    <div className="picture_info">
                      <p>내용을 입력하세요</p>
                    </div>
                  </div>
                  <div className="photo">
                    <div className="picture">

                    </div>
                    <div className="picture_info">
                      <p>내용을 입력하세요</p>
                    </div>
                  </div>
                </div>
                <div className="mypage_Photo_Add">
                  <button className="AddBtn">+</button>
                </div>
              </div>
            </div>

            <div className="mypage_Memo">
              <p className="mypage_title">TODAY'S MEMO</p>
              <div className="mypage_Memo_box">

              </div>
            </div>

          </div>


          <button className='writeBtn'>
            +
          </button>

        </div>
      </div>
        
    )
}