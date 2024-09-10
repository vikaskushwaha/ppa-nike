import data from "../itemList/data"
import './Card.css'
export function Card({ image, description, title, mrp }) {
    return (
        <div className="card">
            <div className="product-description">
                <div className="image"> <img src={image} width={261} />
                    <img src='./src/assets/logo/Heart.svg' width={15.83} height={15} top />
                </div>
                <div className="other-details">
                    <div className="description"><p>{description}</p></div>
                    <div className="title"> <p>{title}</p> </div>

                    <div className="mrp"> <p>{mrp}</p></div>
                </div>

            </div>

        </div>
    )
}