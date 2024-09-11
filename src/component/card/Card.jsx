import data from "../itemList/data"
import './Card.css'
export function Card({ image, description, title, mrp, colors }) {
    // console.log(colors);

    return (
        <div className="card">
            <div className="product-description">
                <div className="image">
                    <img className="heart-size" src='./src/assets/logo/Heart.svg' />
                    <img src={image} width={261} />
                </div>
                <div className="other-details">
                    <div className="details">
                        <div className="description"><p>{description} </p></div>
                        <div className="title"> <p>{title}</p> </div>
                        <div className="color-picker">
                            {colors?.map((color) => {
                                return (
                                    <div key={color} className="circle" style={{ backgroundColor: color }}>

                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="mrp"> <p>MRP : {mrp}</p></div>
                </div>


            </div>

        </div>
    )
}