import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props}>
      {/* <Text fontSize="lg" fontWeight="bold">
        Logo
      </Text> */}
      <svg
        width="168"
        height="25"
        viewBox="0 0 168 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M51.8715 0.569153L42.2517 19.6024L32.547 0.569153H26.8455L39.3403 24.6974H45.2602L57.67 0.569153H51.8715ZM60.3631 0.569153H84.467V5.68837H60.3752L60.3631 0.569153ZM60.3631 10.0919H84.467V15.1868H60.3752L60.3631 10.0919ZM60.3631 19.5782H84.467V24.6974H60.3752L60.3631 19.5782ZM93.5652 20.2575V0.569153H88.4217V24.6974H107.382L108.001 23.4843L109.687 20.2211L93.5652 20.2575ZM141.167 24.6974H135.356L125.651 5.66411L116.031 24.6974H110.233L112.465 20.3788L122.691 0.569153H128.611L141.167 24.6974ZM143.86 24.3456V24.6974H144.054L143.86 24.3456ZM0 0.569153H24.0918V5.66411H0V0.569153ZM0 10.0919H24.0918V15.1747H0V10.0919ZM0 19.6146H24.0918V24.6974H0V19.6146ZM162.857 0.569153V17.6251L149.088 0.569153H143.86V24.6974H148.991V7.71422L162.772 24.6974H168V0.569153H162.857Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="0"
            y1="12.6393"
            x2="168"
            y2="12.6393"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#40A4B4" />
            <stop offset="0.08" stop-color="#329AAB" />
            <stop offset="0.32" stop-color="#0E8194" />
            <stop offset="0.45" stop-color="#00778B" />
            <stop offset="0.6" stop-color="#007787" />
            <stop offset="1" stop-color="#007377" />
          </linearGradient>
        </defs>
      </svg>
    </Box>
  );
}
