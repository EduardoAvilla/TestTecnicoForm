import * as React from "react";
import "./Form.css";
import Logo from "../logo.svg";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";

import {
  Flex,
  Spacer,
  Box,
  Text,
  Container,
  VStack,
  extendTheme,
  FormControl,
  Input,
  Textarea,
  Button,
  Card,
  CardBody,
  useMediaQuery,
} from "@chakra-ui/react";

const Form = () => {
  const [isMediumScreen, isLargeScreen] = useMediaQuery(
    ["(max-width: 762px)", "(min-width: 763px)"],
    {
      ssrMatchMedia: true,
    }
  );

  return (
    <Flex
      //todo o formulario
      bg={{ base: "transparent", md: "transparent" }}
      flexDirection={{ base: "column", md: "row" }}
      align-items={{ base: "column", md: "flex-start" }}
      padding={{ base: "0px", md: "80px 112px" }}
      gap={"32px"}
      display={{ base: "block", md: "flex", lg: "flex" }}
      height={{ base: "1884px", md: "916px" }}
      width={{ base: "327px", md: "1440px" }}
    >
      <Flex
        bg={{ base: "transparent", md: "transparent" }}
        color="black"
        width={{ base: "327px", md: "800px", lg: "800px" }}
        height={{ base: "1116px", md: "756px", lg: "756px" }}
        gap={{ base: "32px", md: "32px" }}
        display={{ base: "column", md: "flex" }}
        flexDirection={"column"}
        align-items={"center"}
      >
        <Flex
          bg={{ base: "white", md: "transparent" }}
          color="black"
          width={{ base: "327px", md: "800px", lg: "800px" }}
          height={{ base: "1068px", md: "756px", lg: "756px" }}
          gap={{ base: "32px", md: "32px" }}
          display={{ base: "flex", md: "flex" }}
          flexDirection={"column"}
          align-items={"stretch"}
          justifyContent={{ base: "flex-start" }}
          padding={{ base: "24px", md: "0px" }}
        >
          <Flex
            bg="transparent"
            color="black"
            width={{ base: "279px", md: "800px", lg: "800px" }}
            height={{ base: "324px", md: "156px", lg: "156px" }}
            gap={"32px"}
            display={"flex"}
            flexDirection={"column"}
            align-items={" flex-start"}
            padding={"0px"}
            order={"0"}
            alignSelf={"center"}
          >
            <Text
              fontSize="4xl"
              height={"40px"}
              lineHeight={"40px"}
              fontFamily={"Inter"}
              fontWeight={"800"}
              fontStyle={"normal"}
              color="gray.800"
            >
              Let’s Connect
            </Text>
            <Text
              textStyle="h1"
              fontSize="20px"
              lineHeight={"28px"}
              color={"#4A5568"}
              height={{ base: "252px", md: "84px" }}
            >
              {isMediumScreen && !isLargeScreen && (
                <p>
                  FlexiBlog theme comes with a pre-made contact form component.
                  You can integrate this form with serverless services such as
                  Formspree, Getform, FormKeep and others to receive form
                  submissions via email.
                </p>
              )}
              {isLargeScreen && (
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  augue ex, iaculis non magna sit amet, posuere fermentum magna.
                  Praesent tempus risus mauris, ac pharetra mi sagittis id.
                </p>
              )}
            </Text>
          </Flex>
          <Flex
            fontSize={"16px"}
            color="gray.700"
            fontFamily={"Inter"}
            fontStyle={"normal"}
            lineHeight={"24px"}
            fontWeight={"500"}
            borderRadius={"4px"}
            bg="white"
            width={{ base: "279px", md: "800px", lg: "800px" }}
            height={{ md: "568px", lg: "568px" }}
            display={"flex"}
            flexDirection={"column"} // adicionado para alinhar verticalmente
            justifyContent={{ md: "space-around" }} // adicionado para ajustar espaços
            padding={{ base: "0px", md: "32px" }}
            gap={{ base: "24px", md: "32px" }}
          >
            <Flex
              display={{ base: "flex", md: "flex" }}
              flexDirection={{ base: "column", md: "row" }}
              height={{ base: "176px", md: "72px" }}
              order={"0"}
              gap={{ base: "32px", md: "32px" }}
              justifyContent={"center"}
            >
              <Box>
                <Text>Name:</Text>
                <Input
                  height={"40px"}
                  width={{ base: "279px", md: "352px", md: "352px" }}
                />
              </Box>
              <Box gap={{ md: "32px" }}>
                <Text>Company Name:</Text>
                <Input
                  height={"40px"}
                  width={{ base: "279px", md: "352px", md: "352px" }}
                />
              </Box>
            </Flex>
            {/* /* end block 1* */}
            <Flex
              display={{ base: "flex", md: "flex" }}
              flexDirection={{ base: "column", md: "row" }}
              height={{ base: "176px", md: "72px" }}
              order={"0"}
              gap={{ base: "32px", md: "32px" }}
              justifyContent={"center"}
            >
              <Box>
                <Text>Email:</Text>
                <Input
                  height={"40px"}
                  width={{ base: "279px", md: "352px", md: "352px" }}
                />
              </Box>
              <Box gap={{ base: "0", md: "32px" }}>
                <Text>Phone Number:</Text>
                <Input
                  height={"40px"}
                  width={{ base: "279px", md: "352px", md: "352px" }}
                />
              </Box>
            </Flex>
            <Flex
              display={{ base: "flex", md: "flex" }}
              flexDirection={{ base: "column", md: "row" }}
              height={{ base: "72px", md: "72px" }}
              gap={{ base: "32px", md: "32px" }}
              order={"2"}
              width={{ base: "279px", md: "352px", md: "352px" }}
            >
              <Box gap={{ base: "8px", md: "32px" }}>
                <Text>Subject</Text>
                <Input
                  height={"40px"}
                  width={{ base: "279px", md: "736px", md: "736px" }}
                />
              </Box>
            </Flex>
            <Flex
              display={{ base: "flex", md: "flex" }}
              flexDirection={{ base: "column", md: "row" }}
              height={{ base: "112px", md: "132px" }}
              gap={"32px"}
              order={"3"}
            >
              <Box gap={{ base: "8px", md: "32px" }}>
                <Text>Your Message</Text>
                <Textarea
                  height={"80px"}
                  width={{ base: "279px", md: "736px" }}
                />
              </Box>
            </Flex>
            <Flex
              display={{ base: "flex" }}
              height={"48px"}
              width={{ base: "279px", md: "110px" }}
              order={"4"}
            >
              <Box borderRadius={"4px"}>
                <Button
                  bgColor={"#EC7E83"}
                  color="white"
                  width={{ base: "279px", md: "110px" }}
                >
                  Submit
                </Button>
              </Box>
            </Flex>
          </Flex>{" "}
        </Flex>
      </Flex>
      <Flex
        color="black"
        width={{ base: "375px", md: "384px", lg: "384px" }}
        height={{ base: "688px", md: "632px", lg: "632px" }}
        display={"flex"}
        flexDirection={"column"}
        gap={"64px"}
        padding={{ base: "24px 0px", md: "72px 0px 0px 0px" }}
      >
        <Flex
          display={"column"}
          width={{ base: "327px", md: "384px", lg: "384px" }}
          height={{ base: "244px", md: "208px", lg: "208px" }}
          gap={"12px"}
          alignSelf={"stretch"}
          alignItems={"center"}
        >
          <Text
            fontSize={"18px"}
            fontWeight={"700"}
            height={"28px"}
            color="#171923"
            fontFamily={"Inter"}
            fontStyle={"normal"}
            lineHeight={"28px"}
          >
            Our Commitment
          </Text>
          <Card
            height={{ base: "204px", md: "168px" }}
            boxShadow={
              "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
            }
            borderRadius={"8px"}
          >
            <CardBody gap={"24px"}>
              <Text
                fontSize={"18px"}
                fontWeight={"400"}
                height={"112px"}
                color="#718096"
                fontFamily={"Inter"}
              >
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Vivamus hendrerit justo eu diam varius
                dictum
              </Text>
            </CardBody>
          </Card>
        </Flex>
        <Flex
          display={"column"}
          width={{ base: "327px", md: "384px", lg: "384px" }}
          height={{ base: "248px", md: "208px", lg: "288PX" }}
          gap={"12px"}
          alignItems={"stretch"}
          alignContent={"stretch"}
          alignSelf={"stretch"}
          padding={{ base: "0px" }}
        >
          <Text
            fontSize={"18px"}
            fontWeight={"700"}
            height={"28px"}
            color="#171923"
            fontStyle={"normal"}
          >
            Art Directing
          </Text>
          <Card
            width={{ base: "327px", md: "384px" }}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"stretch"}
            alignSelf={"stretch"}
            height={{ base: "308px", md: "248px" }}
            boxShadow={
              "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
            }
            borderRadius={"8px"}
          >
            <CardBody
              padding={{ base: "32px", md: "28px" }}
              gap={"24px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"stretch"}
              alignSelf={"stretch"}
            >
              <Text
                fontSize={"18px"}
                fontWeight={"400"}
                height={{ base: "84px", md: "56px" }}
                color="#718096"
                fontFamily={"Inter"}
                lineHeight={{ base: "28px" }}
                width={{ base: "263px" }}
              >
                Proin sapien ligula, aliquam eget enim ac, fringilla hendrerit
                nulla.
              </Text>
              <Box
                display={"flex"}
                flexDirection={"column"}
                height={"112px"}
                gap={"20px"}
                fontSize={"16px"}
                fontWeight={"500"}
                color="#718096"
                fontFamily={"Inter"}
                lineHeight={"24px"}
                fontStyle={"normal"}
              >
                <Text>
                  <PhoneIcon color="#718096"></PhoneIcon>
                  +123 (4567) 8910
                </Text>
                <Text>
                  <EmailIcon color="#718096"></EmailIcon> hello@example.com{" "}
                </Text>
                <Box display={"flex"}>
                  <Box
                    display={{ base: "flex" }}
                    flexDirection={{ base: "column" }}
                    justifyContent={{ base: "center", md: "flex-start" }}
                  >
                    <svg
                      width="16"
                      height="19"
                      viewBox="0 0 16 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3033 13.47L8 18.7733L2.69667 13.47C1.64779 12.4211 0.933489 11.0847 0.644107 9.62988C0.354725 8.17502 0.503256 6.66703 1.07092 5.29659C1.63858 3.92615 2.59987 2.75481 3.83324 1.9307C5.0666 1.1066 6.51665 0.666733 8 0.666733C9.48336 0.666733 10.9334 1.1066 12.1668 1.9307C13.4001 2.75481 14.3614 3.92615 14.9291 5.29659C15.4968 6.66703 15.6453 8.17502 15.3559 9.62988C15.0665 11.0847 14.3522 12.4211 13.3033 13.47ZM8 9.83333C8.44203 9.83333 8.86595 9.65774 9.17852 9.34518C9.49108 9.03262 9.66667 8.6087 9.66667 8.16667C9.66667 7.72464 9.49108 7.30072 9.17852 6.98816C8.86595 6.6756 8.44203 6.5 8 6.5C7.55798 6.5 7.13405 6.6756 6.82149 6.98816C6.50893 7.30072 6.33334 7.72464 6.33334 8.16667C6.33334 8.6087 6.50893 9.03262 6.82149 9.34518C7.13405 9.65774 7.55798 9.83333 8 9.83333Z"
                        fill="#718096"
                      />
                    </svg>
                  </Box>

                  <Box
                    display={{ base: "flex", md: "flex" }}
                    height={{ base: "48px" }}
                    flexDirection={{ base: "column", md: "row" }}
                    width={{ base: "154px", md: "252px" }}
                  >
                    <Box>
                      {" "}
                      <Text>120 Street Lorem &nbsp;</Text>
                    </Box>
                    <Box>
                      {" "}
                      <Text> Ipsum Sit Amet</Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </CardBody>
          </Card>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Form;
