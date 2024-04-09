import React from "react";
import { useParams } from "react-router-dom";
import ProductData from "./ProductData";
import { motion, Variants } from "framer-motion";

const SinglePage = () => {
  let Animate: Variants = {
    hide: {
      opacity: 0,
      y: 150,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.5,
        duration: 1.4,
      },
    },
  };
  let { id } = useParams();

  let items = ProductData.find((items) => items.id == id);
  return (
    <motion.div variants={Animate} initial="hide" animate="show">
      <motion.div
        variants={Animate}
        style={{
          gridTemplateColumns: "650px",
          display: "grid",
          gap: 40,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 25,
          rowGap: 25,
        }}
      >
        <motion.div
          variants={Animate}
          style={{
            border: "2px solid gray",
            outline: "2px solid gray",
            outlineOffset: 2,
            padding: "15px 15px 15px 15px",
          }}
        >
          <motion.h1 style={{ textAlign: "center" }} variants={Animate}>
            {items.id}
          </motion.h1>
          <motion.img
            variants={Animate}
            src={items.image}
            style={{ height: 290, width: 500, marginTop: 25, marginLeft: 85 }}
          />
          <motion.p style={{ marginTop: 25 }} variants={Animate}>
            {" "}
            <motion.span
              variants={Animate}
              style={{
                marginBottom: 5,
                fontSize: 22,
                fontWeight: 600,
                color: "black",
              }}
            >
              Title:
            </motion.span>
            {items.title.slice(0, 25)}
          </motion.p>

          <motion.p style={{ marginBottom: 5 }} variants={Animate}>
            <motion.span
              style={{ fontSize: 22, fontWeight: 600, color: "black" }}
              variants={Animate}
            >
              Description:
            </motion.span>
            {items.description}
          </motion.p>
          <motion.p style={{ marginBottom: 5 }} variants={Animate}>
            {" "}
            <motion.span
              style={{ fontSize: 22, fontWeight: 600, color: "black" }}
              variants={Animate}
            >
              Price:
            </motion.span>{" "}
            {items.price}
          </motion.p>
          <motion.p style={{ marginBottom: 5 }} variants={Animate}>
            {" "}
            <motion.span
              style={{ fontSize: 22, fontWeight: 600, color: "black" }}
              variants={Animate}
            >
              Category:
            </motion.span>{" "}
            {items.category}
          </motion.p>
          <motion.p style={{ marginBottom: 5 }} variants={Animate}>
            {" "}
            <motion.span
              variants={Animate}
              style={{ fontSize: 22, fontWeight: 600, color: "black" }}
            >
              Rate:
            </motion.span>{" "}
            {items.rating.rate}
          </motion.p>
          <motion.p variants={Animate} style={{ marginBottom: 5 }}>
            {" "}
            <motion.span
              variants={Animate}
              style={{ fontSize: 22, fontWeight: 600, color: "black" }}
            >
              Count:
            </motion.span>{" "}
            {items.rating.count}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SinglePage;
