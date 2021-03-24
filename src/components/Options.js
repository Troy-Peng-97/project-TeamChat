const Options = () => {
    console.log("i am available");
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <div className="options-container" align='center'>
            <div style={{height: '35vw'}}/>
            <button onClick={handleLogout} style={{width: '7vw', height: '2vw', backgroundColor: '#3B2A50', borderRadius: '12px'}}>
                 <div style={{color: "white"}}>Logout</div>
            </button> 
        </div>
    )
}


export default Options;