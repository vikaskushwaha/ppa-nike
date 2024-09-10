import './nav.css'

export function Navbar() {
    return (
        <div className="nav-bar">
            <img src='./src/assets/logo/nike.svg' />
            <div className='sections'>
                <div className='sub-section'>
                    <p className='nav-item-text'>Men</p>
                    <p className='nav-item-text'>women</p>
                    <p className='nav-item-text'>kids</p>
                    <p className='nav-item-text'>sales</p>
                </div>
                <div className='search-button'>
                    <img src='./src/assets/logo/Search.png' />
                    <p>Search</p>
                </div>
                <div className='nav-cart'>
                    <img className='cart-img' src='./src/assets/logo/Stroke 1.png' />
                    <img className='cart-img' src='./src/assets/logo/Bag 3.svg' />

                </div>
            </div>
        </div>
    )
}