import './itemList.css'
import { Card } from '../card/Card'
import data from './data'


export function ProductContainer() {
    const firstrow = data.slice(0, 4);
    const secondrow = data.slice(4);
    return (
        <div className="productsBox">
            <div className="count-of-item">
                <p>All Shoes(7430)</p>
                <div className='filter'>
                    <img src='./src/assets/logo/Filter.svg' />
                    <p>Apply Filter</p>
                </div>
            </div>
            <div className='item-list'>


                <div className='row1'>
                    {
                        firstrow.map((item, index) => (
                            <Card
                                key={index}
                                {...item}
                            />
                        ))
                    }
                </div>
                <div className='row2'>
                    {
                        secondrow.map((item, index) => (
                            <Card
                                key={index}
                                {...item}
                            />
                        ))
                    }
                </div>
            </div>
        </div>

    )
}