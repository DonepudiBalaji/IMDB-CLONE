import BannerImage from '../../assets/msd.jpg';
function Banner() {
    return ( <>
     <div>
        <img src={ BannerImage} alt='Cricket' className='banner pt-2 h-72 w-full'></img>
     </div>
    </> );
}

export default Banner;