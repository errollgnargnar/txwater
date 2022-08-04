import { useEffect, useState } from "react";

export default function AboutPage() {
    const [location, setLocation] = useState(null);


    useEffect(() => {
        let accessEmail = sessionStorage.getItem('accessEmail');
        if(accessEmail.toLowerCase().includes('austin')) {
            setLocation('Austin');
        } else if(accessEmail.toLowerCase().includes('houston')) {
            setLocation('Houston');
        }
    })

    const bios = [ // 0 = austin, 1 = houston
        ''
    ]
    return (
        <div>
            <header>
                <strong>
                    {location} Water Solutions<br/>
                </strong>
            </header>

            {/* logos and partners */}
            <img src={process.env.PUBLIC_URL + 'partners.png'} style={{width:"80%",maxWidth:"700px"}} />
            <div style={{marginBottom:"2%"}}>
                {location == 'Austin' && <img src='https://www.austinwatersolutions.net/wp-content/uploads/2019/08/aws.png' style={{width:"80%", maxWidth:"600px"}}/>}
                {location == 'Houston' && <img src='https://www.houstonwatersolutions.net/wp-content/uploads/2019/08/hws-2.png' style={{width:"80%", maxWidth:"600px"}}/>}
            </div>

            <br/>
            {/* maps */}
            {location == 'Austin' && <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d440740.37292155024!2d-97.7224348!3d30.342873!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x61b9c371c7d7e60a!2sAustin%20Water%20Solutions!5e0!3m2!1sen!2sus!4v1659407161617!5m2!1sen!2sus"  style={{border:"0", width:"80%", height:"450px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
            {location == 'Houston' && <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21972.242995952165!2d-95.53444575052433!3d29.852405528083164!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x553cb04eacb90942!2sHouston%20Water%20Solutions!5e0!3m2!1sen!2sus!4v1659407378054!5m2!1sen!2sus" style={{border:"0", width:"80%", height:"450px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
        </div>
    )
}