export default function Sidebar(){
    return (
        <aside id="sidebar">
        <h2>Your Projects</h2>
        <nav>
            <button>+ Add new Project</button>
            <ul>
                <li><a href="#player">Player</a></li>
                <li><a href="#challenges">Challenges</a></li>
            </ul>
        </nav>
        </aside>
    );
}