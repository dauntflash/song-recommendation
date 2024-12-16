import { NavLink } from "react-router-dom";


const SideBar = () => {
    const activeStyle = {backgroundColor: "var(--border-color)", color: "var(--primary-color)" };
    return (
        <div className="main">
            <div className="navigation">
                <NavLink to="/" className="nav-link" style={({isActive}) => (isActive ? activeStyle : undefined)}><i className="fa fa-music fa-2x" aria-hidden="true"></i></NavLink>
                <NavLink to="/chart"  className="nav-link" style={({isActive}) => (isActive ? activeStyle : undefined)}><i className="fa fa-chart-line fa-2x"></i></NavLink>
                <NavLink to="/upload"  className="nav-link" style={({isActive}) => (isActive ? activeStyle : undefined)}><i class="fa-solid fa-upload fa-2x"></i></NavLink>
                <NavLink to="/settings"  className="nav-link" style={({isActive}) => (isActive ? activeStyle : undefined)}><i className="fa fa-cog fa-2x" aria-hidden="true"></i></NavLink>
                
                
            </div>
            <div className="vertical-line"> </div>
        </div>
     );
}
 
export default SideBar;
