

// import React from "react";
// import logo from "./assets/logo.png";

// const Label = ({ data }) => {
//   return (
//     <div id="divs" style={styles.wrapper}>
//       <div style={styles.container}>

//         {/* LOGO */}
//         <img src={logo} alt="logo" style={styles.logo} />

//         {/* FROM */}
//         <div style={styles.from}>
//           <h3 style={styles.title}>MEENU WOOD CRAFTS & TOYS</h3>
//           <p>6384785350</p>
//           <p>No.2, Old Vandipalayam</p>
//           <p>Cuddalore – 607004</p>
//         </div>

//         <hr style={styles.line} />

//         {/* TO SECTION */}
//         <div style={styles.toSection}>
//           <div style={styles.toLabel}>📦 TO:</div>

//           <div style={styles.address}>
//             {data.toAddress}
//           </div>
//         </div>

//         <hr style={styles.line} />

//         {/* FOOTER */}
//         <div style={styles.footer}>
//           ✨ Handcrafted with Love
//         </div>

//       </div>
//     </div>
//   );
// };

// const styles = {
//   wrapper: {
//     padding: "40px",
//     display: "flex",
//     justifyContent: "center",
//   },

//   container: {
//     width: "420px",
//     border: "2px solid #c9a66b",
//     borderRadius: "15px",
//     padding: "20px",
//     backgroundColor: "#fdfbf7",
//     fontFamily: "Georgia, serif",
//     textAlign: "center",
//   },

//   logo: {
//     width: "180px",
//     marginBottom: "10px",
//   },

//   from: {
//     marginBottom: "10px",

//   },

//   title: {
//     margin: "5px 0",
//     fontSize: "18px",
//     fontWeight: "bold",
//     marginTop:"-30px"
//   },

//   line: {
//     border: "none",
//     borderTop: "1px solid #ccc",
//     margin: "15px 0",
//   },

//   toSection: {
//     textAlign: "left",
//     padding: "10px",
//   },

//   toLabel: {
//     fontWeight: "bold",
//     marginBottom: "8px",
//   },

//   address: {
//     fontSize: "18px",
//     lineHeight: "24px",
//     whiteSpace: "pre-line", // IMPORTANT
//   },

//   footer: {
//     marginTop: "10px",
//     fontStyle: "italic",
//     fontSize: "16px",
//   },
// };

// export default Label;
import React from "react";
import logo from "./assets/logo.webp";

const Label = ({ data }) => {
  // Graceful fallback defaults if data items are missing
  const recipientName = data?.recipientName || "Mallik Kotikalapudi";
  const toAddress = data?.toAddress || 
    `Mallik Dev Kotikalapudi c/o Chetan Shanmukha\nNilayam, Fisrt floor , Hno 12-155/7/27/11/4.\nHotel Red chilli backside. SRPT Road,\nKODAD Muncipality-508206..\nSuryapet District. Telangana.\n\nshanmu chetan nilayam`;
  const pincode = data?.pincode || "508206";
  const cityState = data?.cityState || "KODAD, TELANGANA";

  return (
    <div id="divs" style={styles.wrapper}>
      {/* Dynamic font import injected directly into the template for instant setup */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;800&display=swap');
      `}</style>

      {/* Main Label Box */}
      <div style={styles.container}>
        
        {/* HEADER SECTION */}
        <div style={styles.header}>
          <img src={logo} alt="logo" style={styles.logo} />
          <h1 style={styles.brandName}>SM FOODS</h1>
          
          <div style={styles.dividerContainer}>
            <div style={styles.thinLineItem}></div>
            <div style={styles.dots}>◆ ◆ ◆</div>
            <div style={styles.thinLineItem}></div>
          </div>
          
          <p style={styles.tagline}>PURE &bull; FRESH &bull; TRUSTED</p>
        </div>

        {/* Thick Horizontal Rule */}
        <div style={styles.thickSeparator}></div>

        {/* SHIP TO BANNER ROW */}
        <div style={styles.shipToRow}>
          <div style={styles.shipToBanner}>SHIP TO</div>
          <div style={styles.shipToLine}></div>
        </div>

        {/* ADDRESS SECTION */}
        <div style={styles.addressSection}>
          <h2 style={styles.recipientName}>{recipientName}</h2>
          <div style={styles.addressDetails}>
            {toAddress}
          </div>

          {/* PINCODE HIGHLIGHT BOX */}
          <div style={styles.pincodeBox}>
            {/* Custom SVG Location Pin */}
            <svg style={styles.pinIcon} viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <div style={styles.pincodeTextContainer}>
              <h3 style={styles.pincodeDigits}>{pincode}</h3>
              <p style={styles.pincodeSubtext}>{cityState}<br />INDIA</p>
            </div>
          </div>
        </div>

        {/* LOWER DIVIDER */}
        <div style={styles.thickSeparator}></div>

        {/* FOOTER SECTION */}
        <div style={styles.footer}>
          <div style={styles.footerLogoContainer}>
            <img src={logo} alt="logo thumbnail" style={styles.footerLogo} />
          </div>
          <div style={styles.footerVerticalDivider}></div>
          
          <div style={styles.footerDetails}>
            <span style={styles.fromLabel}>From:</span>
            <h4 style={styles.fromBrand}>SM FOODS</h4>
            
            {/* Phone */}
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>
                <svg viewBox="0 0 24 24" style={styles.contactSvg}><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.59c0-.55-.45-1-1-1z"/></svg>
              </div>
              <span>PH: +91 70927 27050</span>
            </div>

            {/* Email */}
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>
                <svg viewBox="0 0 24 24" style={styles.contactSvg}><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </div>
              <span>smfoods2k25@gmail.com</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "40px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
    boxSizing: "border-box"
  },

  container: {
    width: "450px",
    border: "4px solid #000000",
    padding: "20px 15px",
    backgroundColor: "#ffffff",
    fontFamily: "'Poppins', sans-serif",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    borderRadius: "10px",
  },

  /* Header Styles */
  header: {
    textAlign: "center",
    marginBottom: "15px",
  },

  logo: {
    width: "70px",
    height: "auto",
    marginBottom: "5px",
    display: "inline-block"
  },

  brandName: {
    fontSize: "34px",
    fontWeight: "800",
    letterSpacing: "1px",
    textTransform: "uppercase",
    lineHeight: "1.1",
    margin: "0",
    color: "#000000"
  },

  dividerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "5px 0",
  },

  thinLineItem: {
    flexGrow: 1,
    height: "1px",
    backgroundColor: "#000000",
  },

  dots: {
    fontSize: "10px",
    margin: "0 8px",
    letterSpacing: "2px",
    color: "#000000"
  },

  tagline: {
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "2.5px",
    textTransform: "uppercase",
    margin: "0",
    color: "#000000"
  },

  thickSeparator: {
    borderTop: "3px solid #000000",
    marginBottom: "20px",
  },

  /* Ship To Ribbon Styles */
  shipToRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  },

  shipToBanner: {
    backgroundColor: "#000000",
    color: "#ffffff",
    fontWeight: "800",
    fontSize: "18px",
    padding: "4px 25px 4px 15px",
    letterSpacing: "0.5px",
    clipPath: "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)",
  },

  shipToLine: {
    flexGrow: 1,
    height: "3px",
    backgroundColor: "#000000",
    marginLeft: "-15px",
  },

  /* Address Section Styles */
  addressSection: {
    padding: "0 5px",
    textAlign: "left",
  },

  recipientName: {
    fontSize: "28px",
    fontWeight: "800",
    marginBottom: "10px",
    color: "#000000",
    lineHeight: "1.2",
    margin: "0 0 10px 0"
  },

  addressDetails: {
    fontSize: "15px",
    fontWeight: "500",
    lineHeight: "1.45",
    color: "#000000",
    marginBottom: "20px",
    whiteSpace: "pre-line",
  },

  /* Postal/Pincode Block Styles */
  pincodeBox: {
    border: "2px solid #000000",
    padding: "12px 15px",
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },

  pinIcon: {
    width: "35px",
    height: "35px",
    marginRight: "15px",
    fill: "#000000",
  },

  pincodeTextContainer: {
    display: "flex",
    flexDirection: "column",
  },

  pincodeDigits: {
    fontSize: "28px",
    fontWeight: "800",
    lineHeight: "1",
    margin: "0 0 2px 0",
    color: "#000000"
  },

  pincodeSubtext: {
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    margin: "0",
    color: "#000000",
    lineHeight: "1.3"
  },

  thinLineDivider: {
    height: "1px",
    backgroundColor: "#000000",
    marginBottom: "15px",
  },

  /* Footer Styles */
  footer: {
    display: "flex",
    alignItems: "center",
    paddingTop: "5px",
    textAlign: "left"
  },

  footerLogoContainer: {
    width: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  footerLogo: {
    width: "55px",
    height: "auto",
  },

  footerVerticalDivider: {
    width: "1px",
    height: "85px",
    backgroundColor: "#000000",
    margin: "0 15px",
  },

  footerDetails: {
    flexGrow: 1,
  },

  fromLabel: {
    fontSize: "12px",
    fontWeight: "500",
    color: "#000000",
    display: "block"
  },

  fromBrand: {
    fontSize: "22px",
    fontWeight: "800",
    margin: "0 0 6px 0",
    textTransform: "uppercase",
    color: "#000000"
  },

  contactItem: {
    display: "flex",
    alignItems: "center",
    fontSize: "12px",
    fontWeight: "700",
    marginBottom: "4px",
    color: "#000000"
  },

  contactIcon: {
    width: "16px",
    height: "16px",
    backgroundColor: "#000000",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "8px",
  },

  contactSvg: {
    width: "10px",
    height: "10px",
    fill: "#ffffff",
  }
};

export default Label;