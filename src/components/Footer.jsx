import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>ⓒ {year} KeepIT&Co., Inc.</p>
    </footer>
  );
}

export default Footer;
