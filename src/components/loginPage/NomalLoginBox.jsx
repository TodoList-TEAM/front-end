import { Link } from 'react-router-dom'
import './LoginPage.css'

export function NomalLoginBox(){
    return(
        <div className='loginPage_nomalLogin'>
                <form>
                  <div className='loginPage_inputBox'>
                    <input type="text" name="id" placeholder='아이디'></input>
                    <input type="password" name="password" placeholder='비밀번호'></input>
                  </div>
                  <div className='loginPage_find'>
                    <button>아이디찾기</button>
                    <button>비밀번호찾기</button>
                  </div>
                  <button type="submit" id='loginButton'><Link to='home'>로그인</Link></button>
                </form>
            </div>
    )

}