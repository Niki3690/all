import React from "react";

const Menu = ({ items }) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-6 ml-6 mr-6 ">
        {items.map((menuItem) => {
          let { id, title, img, desc, price } = menuItem;
          return (
            <>
              <div className="flex">
                <div key={id}>
                  <center>
                    <img
                      src={img}
                      className="cake h-[145px] w-[445px] rounded hover:border-4 hover:border-red-950"
                    />
                  </center>
                </div>
                <div>
                  <p className="text-xl font-bold ml-4">{title}</p>
                  <hr
                    className="-mt-0"
                    style={{
                      width: "260px",
                      marginLeft: "15px",
                      backgroundColor: "red",
                      height: "2px",
                    }}
                  />
                  <p className="ml-4 text-sm -mt-4">{desc}</p>
                  <p className="mt-1 ml-4 text-sm font-extrabold pt-2">
                    $ {price}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
