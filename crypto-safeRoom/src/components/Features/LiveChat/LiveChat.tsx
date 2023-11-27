import React, { useEffect } from "react";
import { RootState } from "../../../Store/Store";
import { useSelector } from "react-redux";

const LiveChat: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    // const userData = {
    //   name: user.username,
    //   email: user.email.email,
    // };

    // // Create a script element
    // const s1 = document.createElement("script");
    // const s0 = document.getElementsByTagName("script")[0];

    // // Set visitor information
    // s1.textContent = `
    //   var Tawk_API = Tawk_API || {};
    //   Tawk_API.setAttributes(${JSON.stringify(
    //     userData.email === undefined && userData.name === undefined
    //       ? {}
    //       : userData
    //   )});
    // `;

    // // Load Tawk.to script
    // s1.async = true;
    // s1.src = "https://embed.tawk.to/655aefae91e5c13bb5b1c213/1hfljghfp";
    // s1.charset = "UTF-8";
    // s1.setAttribute("crossorigin", "*");

    // // Insert the script element
    // s0.parentNode?.insertBefore(s1, s0);

    // return () => {
    //   // Clean up the script when the component unmounts
    //   s1.parentNode?.removeChild(s1);
    // };
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `!function(){var i="HenmfH",a=window,d=document,g=d.createElement("script"),s="https://www.goftino.com/widget/"+i,l=localStorage.getItem("goftino_"+i);g.async=!0,g.src=l?s+"?o="+l:s;d.getElementsByTagName("head")[0].appendChild(g);}();`;
    document.head.appendChild(script);
  }, []);

  return <></>; // or any other placeholder you want
};

export default LiveChat;
