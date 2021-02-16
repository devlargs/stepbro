import { SimpleGrid, Box, Heading, Text } from "@chakra-ui/react";
import OrangeDots from "assets/svg/OrangeDots";

const LandingPage = () => (
  <Box mt="10em">
    <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
      <Box ml="20">
        <Heading size="lg" mb="5">
          Kiela gee
        </Heading>
        <Text fontFamily="Roboto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </Text>
      </Box>

      <Box position="relative">
        <Box position="absolute" right={0} top="50%" zIndex="-1">
          <OrangeDots />
        </Box>

        <Box position="absolute" right={200}>
          <svg
            width="534"
            height="415"
            viewBox="0 0 534 415"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M274.756 0.311724C353.325 2.61121 430.398 23.5167 479.765 71.5763C529.458 119.954 545.236 184.715 526.134 245.035C507.481 303.936 451.244 348.038 383.131 376.716C310.321 407.371 225.585 429.62 150.026 403.387C72.1518 376.35 29.5003 312.526 10.5021 247.343C-8.51345 182.101 -5.17033 110.234 49.648 58.9881C103.153 8.97048 191.634 -2.12099 274.756 0.311724Z"
              fill="#B8F0E5"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M274.756 0.311724C353.325 2.61121 430.398 23.5167 479.765 71.5763C529.458 119.954 545.236 184.715 526.134 245.035C507.481 303.936 451.244 348.038 383.131 376.716C310.321 407.371 225.585 429.62 150.026 403.387C72.1518 376.35 29.5003 312.526 10.5021 247.343C-8.51345 182.101 -5.17033 110.234 49.648 58.9881C103.153 8.97048 191.634 -2.12099 274.756 0.311724Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="293.7"
                y1="-65.3241"
                x2="311.903"
                y2="670.135"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#B8F0E5" />
                <stop offset="1" stop-color="#01A3A6" />
              </linearGradient>
            </defs>
          </svg>
        </Box>
      </Box>
    </SimpleGrid>
  </Box>
);

export default LandingPage;
