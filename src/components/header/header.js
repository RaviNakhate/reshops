import React, { forwardRef, useRef } from "react";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import withClickOutside from "../../methods/withClickOutside";
import "./header.css";

const Header = forwardRef(({ open, setOpen }, ref) => {
  /*  const ref = useRef(null); */
  const navigate = useNavigate();
  const {
    filterState: {
      filterSort,
      filterInclude,
      filterFreeDelivery,
      filterRating,
      filtersearch,
    },
    productState: { cart },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const filter = () => {
    return (
      <>
        <div ref={ref}>
          <div>
            <label
              className="label"
              onClick={() => {
                dispatch({ type: "sort", payload: "lowToHigh" });
              }}
            >
              <input
                type="radio"
                name="sortby"
                checked={filterSort == "lowToHigh" ? true : false}
                onChange={() => {}}
              />
              <span className="sortPrice">Price : Low to High</span>
            </label>
          </div>
          <div>
            <label
              className="label"
              onClick={() => {
                dispatch({ type: "sort", payload: "highToLow" });
              }}
            >
              <input
                type="radio"
                name="sortby"
                checked={filterSort == "highToLow" ? true : false}
                onChange={() => {}}
              />
              <span className="sortPrice">Price : High to Low</span>
            </label>
          </div>
          <div>
            <label
              className="label"
              onClick={() => {
                dispatch({ type: "inStock" });
              }}
            >
              <input
                type="checkbox"
                checked={filterInclude}
                onChange={() => {}}
              />
              <span className="uninclude">Uninclude Out of Stock</span>
            </label>
          </div>

          <div>
            <label
              className="label"
              onClick={() => {
                dispatch({ type: "fastDelivery" });
              }}
            >
              <input
                type="checkbox"
                checked={filterFreeDelivery}
                onChange={() => {}}
              />
              <span className="freeDelivery">Free Delivery</span>
            </label>
          </div>

          <label className="label s">
            <span>Rating </span>
            <span className="rating">
              {[...Array(5)].map((_, i) => {
                return (
                  <span key={i}>
                    {filterRating > i ? (
                      <i
                        className="fa fa-star star starDefault"
                        onClick={() =>
                          dispatch({ type: "rating", payload: i + 1 })
                        }
                      ></i>
                    ) : (
                      <i
                        className="fa fa-star unstar starDefault"
                        onClick={() =>
                          dispatch({ type: "rating", payload: i + 1 })
                        }
                      ></i>
                    )}
                  </span>
                );
              })}
            </span>
          </label>
        </div>
        <button
          className="clearAll"
          onClick={() => {
            dispatch({ type: "clearAll" });
          }}
        >
          Clear All
        </button>
      </>
    );
  };
  return (
    <>
      <header>
        <div className="headerDiv1">
          <img
            src={Logo}
            className="logo "
            onClick={() => {
              navigate("/");
            }}
          />
          <div className="middleNav ">
            <input
              type="search"
              value={filtersearch}
              onChange={(e) =>
                dispatch({ type: "search", payload: e.target.value })
              }
              className="searchInput1"
              placeholder="Search..."
            />
          </div>
          <div className="rightNav ">
            <i
              className="fa fa-home homeNav"
              onClick={() => {
                navigate("/");
              }}
            ></i>
            <i
              className="fa fa-shopping-cart cartNav"
              onClick={() => {
                navigate("/cart");
              }}
            >
              {cart.length > 0 ? (
                <span className="badge badge-warning">{cart.length}</span>
              ) : (
                ""
              )}
            </i>

            <i
              className="fa fa-filter filterNav"
              onClick={() => setOpen(!open)}
            ></i>
            {/*  <div className="filterWindow" ref={ref} >
              {filter()}
            </div> */}
            {open && (
              <div className="filterWindow" ref={ref}>
                {filter()}
              </div>
            )}
          </div>
        </div>
        <div className="headerDiv2">
          <input
            type="search"
            value={filtersearch}
            onChange={(e) =>
              dispatch({ type: "search", payload: e.target.value })
            }
            className="searchInput2"
            placeholder="Search..."
          />
        </div>
      </header>
    </>
  );
});

/* export default Header;*/
export default withClickOutside(Header);
