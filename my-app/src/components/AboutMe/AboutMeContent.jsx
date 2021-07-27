import image from '../../images/hitsman.jpg'

const AboutMeContent = () => {
    return (
        <div className='AboutMeContentParnetCont'>


            <div className='AboutMeTitle'>About Me</div>


            <div className='AboutMeTextPictCont'>
                <div className='AboutMeText'>
                    Pharagraph 1
                    <br>
                    </br>
                    <br></br>
                    Pharagraph 2
                    <br>
                    </br>
                    <br></br>
                    Pharagraph 3
                </div>
                <div>
                    <img className='SelfImage' src={image} alt='Noah Carmichael-Hitsman' />
                </div>
            </div>


            <div className='FavoriteCont'>
                <div className='FavoriteTitle'>
                    Favorite Tech
                </div>
                <ul className='FavoriteUL'>
                    <li>Typescript</li>
                    <li>ThreeJS</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Express</li>
                    <li>Sequelize</li>
                </ul>
            </div>


        </div>
    )
}

export default AboutMeContent
