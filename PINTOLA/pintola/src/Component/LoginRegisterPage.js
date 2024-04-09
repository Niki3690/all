// import React from "react";

// const LoginRegisterPage = (props) => {
//   let [name, setName] = useState("");
//   let [email, setEmail] = useState("");
//   let [pass, setPass] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <h1
//             style={{
//               textAlign: "center",
//               marginTop: 25,
//               fontSize: 35,
//               fontWeight: 700,
//               color: "purple",
//             }}
//           ></h1>
//           <div
//             style={{
//               width: 450,
//               margin: "auto",
//               marginTop: 15,
//             }}
//           >
//             <input
//               type="text"
//               placeholder="Name"
//               value={name}
//               style={{
//                 width: 395,
//                 padding: 7,
//                 marginLeft: 25,
//                 marginTop: 15,
//                 border: "2px solid purple",
//               }}
//             />
//             <br />
//             <br />
//             <input
//               type="email"
//               placeholder="Email Id"
//               value={email}
//               style={{
//                 width: 395,
//                 padding: 7,
//                 marginLeft: 25,
//                 border: "2px solid purple",
//               }}
//             />
//             <br />
//             <br />
//             <input
//               type="password"
//               value={pass}
//               placeholder="Password"
//               style={{
//                 width: 395,
//                 padding: 7,
//                 marginLeft: 25,
//                 border: "2px solid purple",
//               }}
//             />
//             <br />
//             <br />

//             <p style={{ marginLeft: 35 }}>
//               Lost Password?
//               <span>
//                 <a href="#">Click Here!</a>
//               </span>
//             </p>
//             <button
//               style={{
//                 border: "2px solid purple",
//                 backgroundColor: "purple",
//                 color: "white",
//                 fontWeight: 700,
//                 padding: 7,
//                 borderRadius: "50px",
//                 width: 105,
//                 marginLeft: 85,
//                 marginTop: 15,
//                 letterSpacing: 2,
//               }}
//             >
//               Register
//             </button>
//           </div>
//         </div>
//       </form>

//       <button onClick={() => props.onFormSwitch("register")}>
//         {" "}
//         Already have an account? Login here
//       </button>
//     </>
//   );
// };

// export default LoginRegisterPage;

import React from "react";

const LoginRegisterPage = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div>
      <div className="auth-form-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full name</label>
          <input
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="full Name"
          />
          <label htmlFor="email">email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button type="submit">Log In</button>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("login")}
        >
          Already have an account? Login here.
        </button>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
