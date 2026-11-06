import "./Navbar.css";
import TruckLogo from "../assets/icons/Truck vector.svg";
import SearchLogo from "../assets/icons/Search icon.svg"
import AccountLogo from "../assets/icons/Account icon.svg"
import CartLogo from "../assets/icons/Cart vector.svg"
import type { CartItem } from "../types/cart";

type NavbarProps = {
  cart: CartItem[];
}

export function Navbar({ cart }: NavbarProps) {

  const cartQuantity = cart.reduce((cartQuantity: number, cartItem) => {
    return cartQuantity + cartItem.quantity;
  }, 0);

  return (
    <header className="navbar">
      
      <div className="navbar-announcement">
        <img src={TruckLogo} alt=""/>
        <p>Free shipping on orders over $75</p>
      </div>

      {/* Main header */}
      <div className="navbar-main">

        {/* Mobile menu */}
        <button
          type="button"
          className="navbar-menu-button"
          aria-label="Open menu"
        >
          ☰
        </button>

        {/* Logo */}
        <div className="navbar-left-section">
          <a href="/" className="navbar-logo">
            <span className="navbar-logo-mark">M</span>
            <span className="navbar-logo-text">marketlane</span>
          </a>
        </div>
        
        {/* Search */}
        <div className="navbar-middle-section">
          <form className="navbar-search" role="search">
            <label htmlFor="navbar-search-input" className="visually-hidden">
              <img className="navbar-search-icon" src={SearchLogo} />
            </label>

            <input
              id="navbar-search-input"
              type="search"
              placeholder="Search products, brands, and more"
            />

            <select className="navbar-search-category">
              <option>All</option>
            </select>

            <button className="navbar-search-button" type="submit">
              <img className="navbar-search-icon-button" src={SearchLogo} />
            </button>
          </form>
        </div>
        
        {/* Account */}
        <div className="navbar-right-section">
          <a href="#" className="navbar-account">
            <img className="navbar-account-logo" src={AccountLogo} />
            
            <div className="navbar-account-text">
              <span className="navbar-account-greeting">Hello, guest</span> 
              <span className="navbar-account-label">Account</span>
            </div>
          </a>

          {/* Cart */}
          <a href="#" className="navbar-cart">
            <div className="navbar-cart-container">
              <div className="navbar-cart-icon-container" >
                <img className="navbar-cart-icon" aria-hidden="true" src={CartLogo} />
                <span className="navbar-cart-count">{cartQuantity}</span>
              </div>

              <span className="navbar-cart-text">Cart</span>
            </div>
          </a>
        </div>
      </div>

      {/* Categories */}
      <nav className="navbar-categories" aria-label="Product categories">
        <a href="#">All products</a>
        <a href="#">Electronics</a>
        <a href="#">Fashion</a>
        <a href="#">Home & living</a>
        <a href="#">Sports</a>
        <a href="#">Today's deals</a>
      </nav>
    </header>
  );
}
