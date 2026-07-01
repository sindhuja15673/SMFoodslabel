


import React, { useState } from "react";
// import Label from "./Label";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ModernLabel from "./ModernLabel";
// import BarcodeLabel from "./BarcodeLabel";
function App() {
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);
// const [labelType, setLabelType] = useState("modern");
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const downloadPDF = async () => {
    const element = document.getElementById("divs");
    const canvas = await html2canvas(element, { scale: 3 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("portrait", "px", "a4");
    const a4Width = pdf.internal.pageSize.getWidth();
    const a4Height = pdf.internal.pageSize.getHeight();

    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    const scale = Math.min(a4Width / imgWidth, a4Height / imgHeight);
    const pdfWidth = imgWidth * scale;
    const pdfHeight = imgHeight * scale;
    const x = (a4Width - pdfWidth) / 2;
    const y = (a4Height - pdfHeight) / 2;

    pdf.addImage(imgData, "PNG", x, y, pdfWidth, pdfHeight);
    pdf.save("label.pdf");
  };

  // Styles
  const styles = {
    container: {
      maxWidth: "600px",
      margin: "40px auto",
      padding: "30px",
      borderRadius: "12px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      textAlign: "center",
      marginBottom: "25px",
      color: "#333",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    input: {
      padding: "12px 15px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      outline: "none",
      transition: "0.3s",
    },
    inputFocus: {
      borderColor: "#00aaff",
      boxShadow: "0 0 5px rgba(0,170,255,0.3)",
    },
    button: {
      padding: "12px 15px",
      fontSize: "16px",
      fontWeight: "bold",
      borderRadius: "8px",
      border: "none",
      backgroundColor: "#00aaff",
      color: "white",
      cursor: "pointer",
      transition: "0.3s",
    },
    buttonHover: {
      backgroundColor: "#0077cc",
    },
    pdfButton: {
      marginTop: "20px",
      padding: "12px 15px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "none",
      backgroundColor: "#28a745",
      color: "white",
      cursor: "pointer",
      transition: "0.3s",
    },
    pdfButtonHover: {
      backgroundColor: "#1e7e34",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Generate Shipping Label</h2>

      {/* <form style={styles.form} onSubmit={handleSubmit}>
        <select
  value={labelType}
  onChange={(e) => setLabelType(e.target.value)}
  style={styles.input}
>
  <option value="modern">Modern Label (Card Style)</option>
  <option value="barcode">Shipping Label (Barcode)</option>
</select>
        <input
          name="name"
          placeholder="Recipient Name"
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="company"
          placeholder="Company"
          onChange={handleChange}
          style={styles.input}
        />
        <textarea
          name="address"
          placeholder="Address"
          onChange={handleChange}
          required
          style={{ ...styles.input, height: "80px", resize: "none" }}
        />
        <input
          name="pincode"
          placeholder="Pincode"
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="product"
          placeholder="Product"
          onChange={handleChange}
          required
          style={styles.input}
        />
<textarea
  name="toAddress"
  placeholder="Enter Full Address (Name, Street, City, Pincode, Phone)"
  onChange={handleChange}
  required
  style={{ ...styles.input, height: "100px" }}
/>
        <button type="submit" style={styles.button}>
          Generate Label
        </button>
      </form> */}
<form style={styles.form} onSubmit={handleSubmit}>
  {/* <select
    value={labelType}
    onChange={(e) => setLabelType(e.target.value)}
    style={styles.input}
  >
    <option value="modern">Modern Label (Card Style)</option>
    <option value="barcode">Shipping Label (Barcode)</option>
  </select> */}

  {/* ✅ MODERN LABEL FORM */}
  
    <>
     <textarea
      name="recipientName"
      placeholder="Enter Recipient Name"
      onChange={handleChange}
      required
      style={{ ...styles.input, height: "100px" }}
    />
    <textarea
      name="toAddress"
      placeholder="Enter Full Address (Name, Street, City, Pincode, Phone)"
      onChange={handleChange}
      required
      style={{ ...styles.input, height: "100px" }}
    />
    </>
  {/* )} */}

  {/* ✅ BARCODE LABEL FORM */}
  {/* {labelType === "barcode" && (
    <>
      <input
        name="name"
        placeholder="Recipient Name"
        onChange={handleChange}
        required
        style={styles.input}
      />
      <input
        name="company"
        placeholder="Company"
        onChange={handleChange}
        style={styles.input}
      />
      <textarea
        name="address"
        placeholder="Address"
        onChange={handleChange}
        required
        style={{ ...styles.input, height: "80px" }}
      />
      <input
        name="pincode"
        placeholder="Pincode"
        onChange={handleChange}
        required
        style={styles.input}
      />
      <input
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
        required
        style={styles.input}
      />
      <input
        name="product"
        placeholder="Product"
        onChange={handleChange}
        required
        style={styles.input}
      />
    </>
  )} */}

  <button type="submit" style={styles.button}>
    Generate Label
  </button>
</form>
      {show && (
        <>
          {/* <Label data={data} /> */}
          <div id="divs">
 
    <ModernLabel data={data} />
  
</div>
          <button onClick={downloadPDF} style={styles.pdfButton}>
            Download PDF
          </button>
        </>
      )}
    </div>
  );
}

export default App;