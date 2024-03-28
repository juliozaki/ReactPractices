import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';
import { HeroCard } from './HeroCard';



export const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher);

    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
                heroes.map((hero) => (
                    <li
                        key={hero.id}
                        {...hero}
                    >
                        <HeroCard />
                    </li>
                ))
            }
        </div>
    )
}
