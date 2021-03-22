    
const Options = () => {
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <div className="options-container" align='center'>
            <button onClick={handleLogout} style={{width: '7vw', height: '2vw', backgroundColor: '#3B2A50'}}>
                <div style={{color:'white', backgroundColor: '#3B2A50'}}> Logout</div>
            </button> 
        </div>
    )
}

export default Options;