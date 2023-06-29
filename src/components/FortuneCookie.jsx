
const FortuneCookie = ({ data, textColor }) => {

    return (
        <article className="countent" >
            <h1>Change Fortune</h1>
            <div className="card">
                <div className="author"> {data.author} 
                </div>
                <div className="box-phrase" >
                    {data.phrase}
                </div>
            </div>

        </article>
    )
}

export default FortuneCookie