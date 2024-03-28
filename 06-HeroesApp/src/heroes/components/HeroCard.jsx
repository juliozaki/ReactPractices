

export const HeroCard = ({
    superHero,
    publisher,
    alterEgo,
    firstAppearance,
    characters
}) => {

    return (
        <div className='col'>
            <div className='card'>
                <div className='row no-gutters'>
                    <div className='col-4'>
                        <img src='' className='card-img' alt={superHero} />
                    </div>
                </div>
            </div>
        </div>
    )
}
