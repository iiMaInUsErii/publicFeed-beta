import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

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
                    <div className="card" key={key} style={{margin: '0 0 3% 0'}}>
                        <ImageCard url={ el[1].img } />
                        <div className="card-body">
                            <h5 className="card-title">{ el[1].title }</h5>
                            <p className="card-text">{ el[1].description }</p>
                            <span className="dataTime">{ el[1].time != null ? dayjs(el[1].time).format('DD-MM-YYYY HH:mm') : ''}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Board