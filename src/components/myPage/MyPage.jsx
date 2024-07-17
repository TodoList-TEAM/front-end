import { Header } from "../Header"
import { Footer } from "../Footer"




export function MyPage(){

    return(
        <div className='myPage'>
          
          <Header/>


          <div className='body'>
            <div className='myPage_plan'>
              <p>PLANS OF THIS WEEK</p>
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
            <div className='myPage_diary'>
              <div class='title'>
                <p>TODAY'S DIARY</p>
              </div>
              
            </div>
          </div>


          <button className='writeBtn'>
            +
          </button>

          <Footer />
        </div>
    )
}