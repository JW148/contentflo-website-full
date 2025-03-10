import React from "react";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <Image
      src={"/cf_logo_latest.svg"}
      width={150}
      height={150}
      alt="Mamba Sounds logo"
    />
  );
};

export default Logo;
