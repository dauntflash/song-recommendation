const Search = ({file}) => {
    return ( 
        <div className="search">
            <div className="results">
                <div className="image"><img src={file.album_cover} alt="" /></div>
                <div className="about">
                    {file.song &&(
                        <div>
                            <h4>{file.song}</h4>
                            <p>{file.artist}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
     );
}
 
export default Search;