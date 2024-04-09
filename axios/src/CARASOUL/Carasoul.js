// import React from "react";
// import Dataa from "./Dataa";

// const Carasoul = () => {
//   return (
//     <div>
//       <div
//         id="carouselExampleAutoplaying"
//         class="carousel slide"
//         data-bs-ride="carousel"
//         data-bs-interval="3000"
//       >
//         <div class="carousel-inner">
//           {Dataa.map((items, index) => (
//             <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
//               {/* <h3>{items.id}</h3> */}

//               <img src={items.Images[0]} style={{ height: 250, width: 250 }} />
//               <h5>
//                 <span style={{ color: "red" }}>Title: </span>
//                 {items.Title}
//               </h5>
//               <h5>
//                 <span style={{ color: "red" }}>Year: </span>
//                 {items.Year}
//               </h5>
//               <h5>
//                 <span style={{ color: "red" }}>Released: </span>
//                 {items.Released}
//               </h5>
//               <h5>
//                 <span style={{ color: "red" }}>Runtime: </span>
//                 {items.Runtime}
//               </h5>
//               <h5>
//                 <span style={{ color: "red" }}>Genre: </span>
//                 {items.Genre}
//               </h5>
//               <h5>
//                 <span style={{ color: "red" }}>Director: </span>
//                 {items.Director}
//               </h5>
//               <h5>
//                 <span style={{ color: "red" }}>Writer: </span>
//                 {items.Writer}
//               </h5>
//               <h5>
//                 <span style={{ color: "red" }}>Awards: </span>
//                 {items.Awards}
//               </h5>
//               <h5>
//                 <span style={{ color: "red" }}>Type: </span>
//                 {items.Type}
//               </h5>
//             </div>
//           ))}

//           <button
//             class="carousel-control-prev"
//             type="button"
//             data-bs-target="#carouselExampleAutoplaying"
//             data-bs-slide="prev"
//           >
//             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Previous</span>
//           </button>
//           <button
//             class="carousel-control-next"
//             type="button"
//             data-bs-target="#carouselExampleAutoplaying"
//             data-bs-slide="next"
//           >
//             <span class="carousel-control-next-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carasoul;

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Dataa from "./Dataa";

const Carasoul = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel responsive={responsive}>
        {Dataa.map((demo) => {
          return (
            <>
              <h1>{demo.Title}</h1>
            </>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Carasoul;
