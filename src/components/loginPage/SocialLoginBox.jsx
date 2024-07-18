import { Link } from 'react-router-dom'
import './LoginPage.css'


export function SocialLoginBox(){

    return(
        <div className='loginPage_socialLogin'>
            <div className='loginPage_social_option'>
                <button className="naverLoginBtn">NAVER로 로그인</button>
                <button className="googleLoginBtn">GOOGLE로 로그인</button>
            </div>
            <button type="submit" id='findButton'><Link to='home'>로그인</Link></button>        
        </div>
    )
}