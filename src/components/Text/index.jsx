import React from "react";

const sizeClasses = {
  txtPoppinsRegular14WhiteA700: "font-normal font-poppins",
  txtPoppinsBold38: "font-bold font-poppins",
  txtOpenSansRomanSemiBold18: "font-opensans font-semibold",
  txtOpenSansRomanSemiBold16: "font-opensans font-semibold",
  txtPoppinsRegular14Black900: "font-normal font-poppins",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular26: "font-normal font-poppins",
  txtOpenSansRomanSemiBold14: "font-opensans font-semibold",
  txtOpenSansRomanSemiBold2151: "font-opensans font-semibold",
  txtPoppinsRegular22: "font-normal font-poppins",
  txtOpenSansRomanSemiBold2151WhiteA700: "font-opensans font-semibold",
  txtPoppinsRegular18WhiteA700: "font-normal font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
