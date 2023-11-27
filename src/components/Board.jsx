import { useEffect, useState } from 'react';

import ImageCard from './ImageCard';

const Board = () => {
    const [data, setData] = useState([])

    useEffect(() => {
      fetch('https://card-4ede6-default-rtdb.firebaseio.com/cards.json')
      .then(res => res.json())
      .then(res => setData(Object.entries(res)))
    }, [])

    return (
        <div className='board'>
            {data.map((el, key) => {
                return (
                    <div class="card" key={key} style={{margin: '0 0 3% 0'}}>
                        <ImageCard url={ el[1].img } />
                        <div class="card-body">
                            <h5 class="card-title">{ el[1].title }</h5>
                            <p class="card-text">{ el[1].description }</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Board