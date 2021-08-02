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
                <img className='SelfImage' src={image} alt='Noah Carmichael-Hitsman' />
            </div>

        </div>
    )
}

export default AboutMeContent
