import { SimpleGrid, Box, Heading, Text } from "@chakra-ui/react";

const WebApplications = () => (
  <Box>
    <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
      <Box position="relative">
        <Box position="absolute" right={200}>
          <svg
            width="521"
            height="495"
            viewBox="0 0 521 495"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M371.786 420.835C306.118 468.936 229.831 500.872 158.902 492.982C87.5019 485.039 33.3897 442.127 10.6071 380.657C-11.6396 320.633 6.24511 248.8 43.6519 182.025C83.6384 110.644 138.721 38.5489 217.162 11.9319C298.007 -15.5008 373.482 9.54971 430.495 50.7589C487.559 92.0055 530.569 152.891 518.39 229.662C506.503 304.593 441.259 369.948 371.786 420.835Z"
              fill="#B8F0E5"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M371.786 420.835C306.118 468.936 229.831 500.872 158.902 492.982C87.5019 485.039 33.3897 442.127 10.6071 380.657C-11.6396 320.633 6.24511 248.8 43.6519 182.025C83.6384 110.644 138.721 38.5489 217.162 11.9319C298.007 -15.5008 373.482 9.54971 430.495 50.7589C487.559 92.0055 530.569 152.891 518.39 229.662C506.503 304.593 441.259 369.948 371.786 420.835Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="398.082"
                y1="486.551"
                x2="-84.9145"
                y2="-103.175"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#B8F0E5" />
                <stop offset="1" stop-color="#01A3A6" />
              </linearGradient>
            </defs>
          </svg>
        </Box>
      </Box>

      <Box>
        <Heading size="lg" mt="6em" mb={5}>
          Iyotan
        </Heading>
        <Text fontFamily="Roboto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </Text>
      </Box>
    </SimpleGrid>
  </Box>
);

export default WebApplications;
