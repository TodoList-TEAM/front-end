import '../App.css'

export function Header(){

    return(
        <div className='header'>
            <div className='up'>
              <div className='logo'>
                <p>온쉼표</p>
              </div>
              <div className='help'>
                <p>아이콘</p>
              </div>
            </div>
            <div className='down'>
              <p>날씨정보</p>
            </div>
          </div>
    )
}