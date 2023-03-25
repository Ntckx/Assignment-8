import '../Style/Gallery.css';
function Gallery(){
    return(
       <section className="Gallery">
            <h2>
                Gallery
            </h2>
            <ul id='link'>
                <li><img src = './assets/article-london-st-pauls-cathedral.png' width={100} height={100}/></li>
                <li><img src = './assets/london_travel_3x4.png'width={100} height={100}/></li>
                <li><img src = './assets/topic-london-gettyimages-760251843-promo.png'width={100} height={100}/></li>
                
            </ul>
       </section> 
    );
}
export default Gallery;