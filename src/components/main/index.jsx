import { Box, Button, Container, Image, Text, Tooltip } from "@chakra-ui/react";
import Kourse from "./kourse/kourse";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <Container maxW="1400px" m="0 auto">
      <Box
        mt="20px"
        minH="350px"
        className="cotolog-images"
        p="30px 50px"
        position="relative"
      >
        <Text fontWeight="600" fontSize="45px" color="white">
          Нетология —<br /> образовательная
        </Text>
        <Box position="relative" p="35px 0">
          <Box
            w="400px"
            bg="white"
            h="65px"
            borderRadius="20px"
            transform="rotate(-2deg)"
            position="absolute"
          ></Box>
          <Text
            fontWeight="600"
            fontSize="45px"
            position="relative"
            color="black"
          >
            платформа №1
          </Text>
        </Box>
        <Text fontWeight="500" fontSize="25px" color="black">
          <Tooltip
            maxW="600px"
            boxShadow="rgba(0,0,0,.1) 0 4px 8px"
            borderRadius="5px"
            color="black"
            bg="white"
            p="10px"
            label="85% выпускников довольны обучением — это самый большой процент среди других популярных платформ"
            aria-label="A tooltip"
          >
            <span style={{ cursor: "pointer", textDecoration: "underline" }}>
              по доле выпускников
            </span>
          </Tooltip>
          , довольных обучением
        </Text>
        <Box>
          <Image
            src="https://netology.ru/_next/static/media/phone.42ed97e9.png"
            w="450px"
            position="absolute"
            right="120px"
            top="-20px"
          />
        </Box>
      </Box>
      <Box
        p="30px"
        borderRadius="5px"
        bg="rgb(235, 235, 235)"
        mt="20px"
        minH="200px"
      >
        <Text fontWeight="500" fontSize="40px">
          Направления обучения
        </Text>
        <Kourse />
        <Button
          variant="unstyle"
          mt="25px"
          boxShadow="rgba(0,0,0,.1) 0 0px 10px"
          fontSize="16px"
          bg="white"
          p="25px 60px"
          border="1px solid black"
          fontWeight="400"
        >
          Полный каталог
        </Button>
      </Box>
    </Container>
  );
}
