import { Box, Center, Heading, Text } from "@chakra-ui/react";
import LandingPage from "./LandingPage";
import WebApplications from "./WebApplications";
import WebDesign from "./WebDesign";

const Services = () => {
  return (
    <Box>
      <Box position="relative">
        <Box position="absolute" top="-270px" zIndex="-1">
          <svg
            width="400"
            height="823"
            viewBox="0 0 478 823"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-267.313 670.232C-298.974 608.759 -274.843 549.487 -220.231 515.251C-152.397 471.46 -103.115 503.299 -35.9101 510.1C43.0398 517.058 71.7118 505.069 118.529 438.369C176.851 355.252 181.333 345.833 261.66 336.588C415.906 318.83 508.729 255.195 467.465 124.245C431.457 5.02505 322.008 -17.9353 178.456 13.0895C-78.6918 63.9124 -428.123 272.959 -536.287 473.768C-591.248 572.215 -577.598 745.577 -469.046 805.496C-357.272 859.633 -208.112 776.14 -267.313 670.232Z"
              fill="#F2B1A0"
            />
            <path
              d="M-267.313 670.232C-298.974 608.759 -274.843 549.487 -220.231 515.251C-152.397 471.46 -103.115 503.299 -35.9101 510.1C43.0398 517.058 71.7118 505.069 118.529 438.369C176.851 355.252 181.333 345.833 261.66 336.588C415.906 318.83 508.729 255.195 467.465 124.245C431.457 5.02505 322.008 -17.9353 178.456 13.0895C-78.6918 63.9124 -428.123 272.959 -536.287 473.768C-591.248 572.215 -577.598 745.577 -469.046 805.496C-357.272 859.633 -208.112 776.14 -267.313 670.232Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="-96.1481"
                y1="-23.0653"
                x2="210.201"
                y2="1085.13"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#B8F0E5" />
                <stop offset="1" stop-color="#F2B1A0" />
              </linearGradient>
            </defs>
          </svg>
        </Box>
      </Box>

      <Center>
        <Heading
          as="h2"
          size="2xl"
          textAlign="center"
          lineHeight="50px"
          color="primary.40"
          fontWeight="600"
          mt="2.5em"
          mb="2"
        >
          Lorem Ipsum is simply dummy text of the printing and typesettin
        </Heading>
      </Center>

      <Text
        textAlign="center"
        fontSize="md"
        lineHeight="24px"
        mt="0"
        mb="4em"
        fontFamily="Roboto"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </Text>

      <WebDesign />
      <WebApplications />
      <LandingPage />
      {/* <InNumbers /> */}
    </Box>
  );
};

export default Services;
