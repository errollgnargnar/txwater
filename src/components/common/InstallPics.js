export default function InstallPics() {
    let picUrls = [
        'https://s3-media0.fl.yelpcdn.com/bphoto/4WANdwGQVk-O4xrDQNFnQg/o.jpg',
        'https://s3-media0.fl.yelpcdn.com/bphoto/Slt4wUPA6Sfc4U_74bYvIA/o.jpg',
        'https://s3-media0.fl.yelpcdn.com/bphoto/3X5hQcqyNo-ONd9VHXbAxw/o.jpg',
        'https://s3-media0.fl.yelpcdn.com/bphoto/L4nRcxoY_5H_wrjFeLD66A/o.jpg',
        'https://s3-media0.fl.yelpcdn.com/bphoto/0MODcAoKUuhp7xadBbyiYQ/o.jpg',
        process.env.PUBLIC_URL + 'roFaucet.jpg',
        process.env.PUBLIC_URL + 'faucetColorOpts.jpg',
        process.env.PUBLIC_URL + 'well1.jpg',
        process.env.PUBLIC_URL + 'well2.jpg',
        process.env.PUBLIC_URL + 'well3.jpg',
        'https://s3-media0.fl.yelpcdn.com/bphoto/8dPD5NTsQw1wvLF7hKYfJQ/o.jpg',
        'https://s3-media0.fl.yelpcdn.com/bphoto/85ARxhzQSWk_fJ6U05TMXw/o.jpg',
        'https://s3-media0.fl.yelpcdn.com/bphoto/v_pbeCC7cirCWhs5sLqfwA/o.jpg'
    ];

    const picsMapped = picUrls.map(pic => {
        return (
            <img src={pic} style={{marginTop:"2%", maxWidth:"750px"}} />
        );
    })

    return (
        <div >
            {picsMapped}
        </div>

    );
}