import { Link } from 'react-router-dom'


export function LoginPage(){

    return(
        <div className='loginPage'>
          <div className='loginPage_logo'>
            <p>온쉼표</p>
          </div>
          <div className='loginPage_loginBox'>
            <div className='loginPage_option'>
              <button>일반 회원 로그인</button>
              <button>소셜 로그인</button>
            </div>
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
          </div>
          <div className='loginPage_plus'>
              <button>도움말 바로가기 &raquo;</button>
              <button>회원가입 &raquo;</button>
            </div>
        </div>
    )
}