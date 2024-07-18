import '../App.css'

export function Thnumnail(){

    return(
        <div className='Thumnail_content'>
            <div className='info'>
            <div className='info_top'>
                <div className='title'>
                    제목
                </div>
                <div className='cate'>
                    | ㅇㅇ게시판
                </div>
            </div>
            <div className='info_mid'>
                <p>내용입력하세요</p>
                <p>내용입력하세요</p>
            </div>
            <div className='info_bottom'>
                <p id='good'>1</p>
                <p id='respones'>1</p>
                <div className='info_detail'>
                    <p> 07/20 </p> 
                    <p> | 10:30 </p> 
                    <p> | 익명 </p>
                </div>
            </div>
        </div>
        <div className='Thumnail_Img'>
            
        </div>
        </div>
        
    )


}

