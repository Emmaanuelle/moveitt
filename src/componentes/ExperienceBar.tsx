export function ExperienceBar(){
    return(
<header className="experince-bar">
        <span>0 xp</span>
        <span>600 xp</span>
        <div>
            <div style={{ width:'50%'}}/>
            <span className="current-experience" style={{left:"80"}}> 300 xp</span>
        </div>
        
    </header>
    );
}