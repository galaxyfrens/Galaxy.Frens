
const TopInfoSection = () => {
    return (
        <div className='container'>
            <div className='row justify-content-between mt-3'>
                <div className='col-md-6 top-holder'>
                    <h1 className='page-title'>Galaxy Frens</h1>
                    <p className='subtitle'>Welcome Frens! Travel the universe in search of $GGAS for new resources</p>
                    <p className='primary-text'>Stake your Frens to earn $GGAS</p>
                    <div className='d-flex flex-wrap align-items-center gap-3 my-4 social-holder'>
                        <a href='https://twitter.com/galaxyfrens_' target='_blank' rel="noreferrer"><img src='./assets/images/twitter.png' height='45' alt="Twitter"/></a>
                        <a href='https://discord.com/invite/gtQQWAwWeD' target='_blank' rel="noreferrer"><img src='/assets/images/discord.png' height='45' alt="Discord"/></a>
                        <a href='https://opensea.io/collection/galaxy-frens' target='_blank' rel="noreferrer"><img src='/assets/images/opensea.png' height='45' alt="Opensea"/></a>
                        <a href='https://polygonscan.com/address/0x3f4626A985c67A4C0A06810CD74F2ef02740B5af' target='_blank' rel="noreferrer"><img src='/assets/images/matic.svg' height='45' alt="Polygon Scan"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopInfoSection