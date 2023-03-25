import '../Style/FavoriteSites.css';
function FavoriteSites(){
    return(
       <section className="favSites">
            <h2>
                FavoriteSites
            </h2>
            <ul id = 'link'>
                <li><a href='https://www.sit.kmutt.ac.th/bsc-cs/curr-bcs/'>link1</a></li>
                <li><a href='https://cscms.me/'>link2</a></li>
                <li><a href='https://www.youtube.com/'> link3</a></li>
                <li><a href='https://www.geeksforgeeks.org/'>link4</a></li>
                <li><a href='https://web.facebook.com/'>link5</a></li>
            </ul>
       </section> 
    );
}
export default FavoriteSites