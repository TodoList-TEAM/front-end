


export function Post(){

    const gotoPost = () => {
        return(
            <Link to='post/number'></Link>
        )
    }

    return(
        <div onClick={gotoPost}>
            <div className="post_thum">
                <div className="post_thum_info">
                    <div className="top">
                        <p className="title"></p>
                        <p className="cate"></p>
                    </div>
                    <div className="mid">
                        <p className="contents"></p>
                    </div>
                    <div className="bottom">
                        <p className="good"></p>
                        <p className="re"></p>
                        <div>
                            <p className="date"></p>
                            <p className="time"></p>
                            <p className="name"></p>
                        </div>
                    </div>
                </div>
                <div className="post_thum_pic">

                </div>
            </div>
        </div>
    )
}