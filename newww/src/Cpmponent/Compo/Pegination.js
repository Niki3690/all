import React from "react";

const Pegination = ({ showPerPage, currentPage, peginate, totalIndexPage }) => {
  let peginationPages = [];

  for (let i = 1; i <= Math.ceil(totalIndexPage / showPerPage); i++) {
    peginationPages.push(i);
  }

  return (
    <div style={{ marginBottom: 25 }}>
      <nav>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            listStyle: "none",
            gap: 2,
          }}
        >
          {currentPage > 1 && (
            <li>
              <button
                onClick={() => peginate(currentPage - 1)}
                style={{
                  padding: "8px 10px",
                  backgroundColor: "#FDD1D4",
                  border: "none",
                  fontWeight: 900,
                  cursor: "pointer",
                }}
              >
                Previous
              </button>
            </li>
          )}
          {peginationPages.map((number) => {
            return (
              <>
                <li>
                  <button
                    onClick={() => peginate(number)}
                    style={{
                      padding: "8px 10px",
                      backgroundColor: "#FDD1D4",
                      border: "none",
                      fontWeight: 900,
                      cursor: "pointer",
                    }}
                  >
                    {number}
                  </button>
                </li>
              </>
            );
          })}
          {currentPage < Math.ceil(totalIndexPage / showPerPage) && (
            <li>
              <button
                onClick={() => peginate(currentPage + 1)}
                style={{
                  padding: "8px 10px",
                  backgroundColor: "#FDD1D4",
                  border: "none",
                  fontWeight: 900,
                  cursor: "pointer",
                }}
              >
                Next
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Pegination;
