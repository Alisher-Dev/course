import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Image,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import Kourse from "./kourse/kourse";
import gamedesign from "../image/gamedesign.png";
import image from "../image/image.webp";
import FreeKourse from "./kourse/freekourse";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <Container maxW="1400px" m="0 auto">
      <Box
        mt="20px"
        minH={{ base: "260px", xl: "350px" }}
        className="cotolog-images"
        display="flex"
        flexDirection={{ base: "column", md: "unset" }}
        p={{ base: "10px 20px", md: "30px 50px" }}
        position="relative"
      >
        <Box
          w={{ base: "100%", md: "85%", xl: "65%" }}
          textAlign={{ base: "center", md: "start" }}
          p={{ base: "20px 0px", lg: "30px 5px", xl: "40px 20px" }}
        >
          <Text
            fontWeight="600"
            lineHeight={{ base: "28px", md: "30px", lg: "40px", xl: "50px" }}
            fontSize={{ base: "20px", md: "30px", lg: "38px", xl: "45px" }}
            color="white"
          >
            Нетология —<br /> образовательная
          </Text>
          <Box
            m={{ base: "10px auto", md: "30px 0", xl: "40px 0" }}
            w={{ sm: "160px", md: "180px", lg: "360px", xl: "420px" }}
            bg="white"
            display=""
            h={{ sm: "25px", md: "28px", lg: "55px", xl: "70px" }}
            borderRadius="20px"
            transform={{ lg: "rotate(-1.5deg)", xl: "rotate(-2deg)" }}
          >
            <Text
              ml="10px"
              transform={{ lg: "rotate(1.5deg)", xl: "rotate(2deg)" }}
              fontWeight="600"
              fontSize={{ base: "15px", md: "18px", lg: "38px", xl: "45px" }}
              position="relative"
              color="black"
            >
              платформа №1
            </Text>
          </Box>
          <Text
            fontWeight="500"
            fontSize={{ base: "15px", lg: "22px", xl: "25px" }}
            color="black"
          >
            <Tooltip
              maxW={{ base: "300px", lg: "600px" }}
              w="100%"
              fontSize={{ base: "13px", lg: "16px", xl: "18px" }}
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
        </Box>
        <Box
          position="relative"
          h={{ base: "220px", lg: "320px", xl: "400px" }}
          w={{ base: "100%", md: "50%", lg: "380px", xl: "450px" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
        >
          <Image
            src="https://netology.ru/_next/static/media/phone.42ed97e9.png"
            w={{ base: "260px", lg: "360px", xl: "400px" }}
            position="absolute"
          />
        </Box>
      </Box>

      <Box
        p="30px"
        borderRadius="5px"
        bg="rgb(235, 235, 235)"
        mt="40px"
        minH="200px"
      >
        <Text
          fontWeight="500"
          fontSize={{ base: "20px", md: "30px", lg: "38px", xl: "45px" }}
        >
          Направления обучения
        </Text>
        <Kourse />
        <Link to="category">
          <Button
            _hover={{ boxShadow: "rgba(0,0,0,.4) 0 0 10px inset" }}
            variant="unstyle"
            mt="25px"
            fontSize={{ base: "13px", xl: "16px" }}
            p={{ lg: "20px 50px", xl: "25px 60px" }}
            transition="all 0.3s ease"
            border="1px solid black"
            fontWeight="400"
          >
            Полный каталог
          </Button>
        </Link>
      </Box>

      <Box
        w="100%"
        minH={{ base: "140px", lg: "200px" }}
        mt="40px"
        borderRadius="5px"
        display={{ base: "none", md: "flex" }}
        gap="20px"
        className="linGrodient"
        p="10px"
      >
        <Image
          src={gamedesign}
          w={{ base: "250px", lg: "300px", xl: "350px" }}
          h={{ base: "140px", lg: "200px" }}
          objectFit="cover"
          borderRadius="10px"
        />
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Text
            bg="rgb(41,166,128)"
            w={{ base: "180px", lg: "220px", xl: "245px" }}
            p="3px 14px"
            borderRadius="30px"
            color="white"
            fontSize={{ base: "12px", lg: "16px", xl: "18px" }}
          >
            Курсы для Геймдизайн
          </Text>
          <Text
            p="10px 0"
            borderRadius="30px"
            fontSize={{ base: "18px", lg: "23px", xl: "26px" }}
            fontWeight="500"
          >
            Новое направление в 3d дизайн
          </Text>
          <Text
            borderRadius="30px"
            fontSize={{ base: "12px", lg: "14px", xl: "16px" }}
            fontWeight="500"
          >
            Образование для профессионалов в сфере дизайна и 2d и 3d
          </Text>
        </Box>
        <Button
          variant="unstyle"
          fontSize={{ base: "13px", xl: "16px" }}
          m={{
            base: "auto 20px auto auto",
            lg: "auto 35px auto auto",
            xl: "auto 50px auto auto",
          }}
          h={{ base: "40px", lg: "46px", xl: "50px" }}
          w="180px"
          className="button-65"
        >
          Подробнее
        </Button>
      </Box>

      <Box
        mt="40px"
        minH={{ base: "180px", md: "240px", xl: "350px" }}
        className="cotolog-images"
        p={{ base: "15px 25px", lg: "30px 50px" }}
        position="relative"
        textAlign={{ base: "center", md: "start" }}
      >
        <Text
          fontWeight="600"
          lineHeight={{ base: "28px", md: "30px", lg: "40px", xl: "50px" }}
          fontSize={{ base: "20px", md: "30px", lg: "38px", xl: "45px" }}
          color="white"
        >
          Если не знаете, <br /> что выбрать, пройдите
        </Text>
        <Box
          w={{ base: "250px", lg: "440px", xl: "500px" }}
          bg="white"
          m={{ base: "10px auto", md: "25px 0", xl: "35px 0" }}
          h={{ base: "26px", lg: "40px", xl: "45px" }}
          borderRadius="20px"
          transform="rotate(-0.5deg)"
        >
          <Text
            ml="10px"
            transform="rotate(0.5deg)"
            fontWeight="600"
            fontSize={{ base: "14px", lg: "26px", xl: "30px" }}
            position="relative"
            color="black"
          >
            профориентационный тест
          </Text>
        </Box>
        <Button
          variant="unstyle"
          w={{ base: "140px", md: "160px", lg: "350px", xl: "400px" }}
          h={{ base: "30px", md: "40px", xl: "50px" }}
          fontSize={{ base: "12px", xl: "16px" }}
          bg="rgb(53, 53, 53)"
          _hover={{ bg: "rgb(90, 90, 90)" }}
          className="button-65"
        >
          Пройти тест
        </Button>
        <Box display={{ base: "none", md: "flex" }}>
          <Image
            src={image}
            w={{ base: "140px", md: "170px", lg: "200px", xl: "255px" }}
            transform="rotate(8deg)"
            position="absolute"
            right={{ base: "60px", xl: "120px" }}
            top="0px"
          />
        </Box>
      </Box>

      <Box mt="40px">
        <Text
          lineHeight={{ lg: "40px", xl: "50px" }}
          fontSize={{ base: "20px", md: "30px", lg: "38px", xl: "45px" }}
          fontWeight="500"
        >
          Главный принцип наших курсов —<br />{" "}
          <span style={{ color: "blue" }}>люди рядом</span>
        </Text>
        <Grid
          gap={{ base: "20px", xl: "40px" }}
          mt="20px"
          gridTemplateColumns={{ base: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }}
          gridTemplateRows={{ base: "repeat(1, auto)", xl: "repeat(2, 250px)" }}
        >
          <GridItem
            overflow="hidden"
            border="1px solid gray"
            borderRadius="20px"
            p="20px"
            display="flex"
            flexDirection={{ lg: "column" }}
            rowSpan={{ base: "1", lg: "2" }}
            colSpan={{ base: "2", lg: "1" }}
          >
            <Image
              display={{ base: "none", md: "flex" }}
              src="https://pngimg.com/d/student_PNG143.png"
              w="100%"
              h="200px"
              objectFit="cover"
            />
            <Text
              fontSize={{ base: "13px", md: "15px", xl: "18px" }}
              mt={{ base: "0px", md: "20px" }}
            >
              Мы проводим тщательный отбор преподавателей Это действующие
              специалисты, которые помогут влиться в новую сферу —
              профессиональные, энергичные и общительные
            </Text>
          </GridItem>
          <GridItem
            overflow="hidden"
            border="1px solid gray"
            borderRadius="20px"
            p="20px"
          >
            <Text fontSize={{ base: "13px", md: "15px", xl: "18px" }}>
              В курсах нет лишней информации
            </Text>
            <Text fontSize={{ base: "13px", md: "15px", xl: "18px" }} mt="15px">
              Наши методисты сверяют учебные программы с требо-ваниями
              работодателей. Вы выйдете с умениями, востре-бованными на рынке
              труда
            </Text>
          </GridItem>
          <GridItem
            overflow="hidden"
            border="1px solid gray"
            borderRadius="20px"
            p="20px"
          >
            <Text fontSize={{ base: "13px", md: "15px", xl: "18px" }}>
              На курсах много практики с обратной связью
            </Text>
            <Text fontSize={{ base: "13px", md: "15px", xl: "18px" }} mt="15px">
              Задания — настоящие задачи специалистов. Если возникнут сложности,
              то помогут преподаватели, бывшие выпускники или одногруппники
            </Text>
          </GridItem>
          <GridItem
            overflow="hidden"
            border="1px solid gray"
            borderRadius="20px"
            p="20px"
            colSpan="2"
          >
            <Text fontSize={{ base: "13px", md: "15px", xl: "18px" }}>
              Вас сопровождает команда поддержки
            </Text>
            <Text fontSize={{ base: "13px", md: "15px", xl: "18px" }} mt="15px">
              Вопросы оперативно решаются в групповом чате или личном кабинете.
              Это даст опору и поможет быстрее достигнуть цели
            </Text>
          </GridItem>
        </Grid>
      </Box>

      <Box
        display={{ base: "none", md: "flex" }}
        minH={{ base: "150px", md: "280px" }}
        mt="40px"
        alignItems={{ base: "center", lg: "unset" }}
        flexDirection={{ base: "column", lg: "unset" }}
        justifyContent="space-between"
      >
        <Box w={{ base: "100%", lg: "65%" }} h="100%">
          <Text
            lineHeight={{ lg: "40px", xl: "50px" }}
            fontSize={{ base: "28px", lg: "38px", xl: "45px" }}
            fontWeight="500"
          >
            Помогаем найти <span style={{ color: "blue" }}>ту самую</span>{" "}
            работу
          </Text>
          <Text
            fontSize={{ base: "13px", md: "15px", xl: "18px" }}
            w="70%"
            mt="15px"
          >
            Вместе готовим резюме и портфолио, проводим тест-драйв собеседования
            и подбираем вакансии у наших партнёров
          </Text>
        </Box>
        <Box
          w="30%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
        >
          <Box position="absolute" w="130px" textAlign="center">
            <Text fontSize="26px">82%</Text>
            <Text fontSize="13px">
              выпускников находят работу по специальности, которой обучались на
              курсе
            </Text>
          </Box>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="250"
            height="250"
            viewBox="0 0 300 300"
            fill="none"
          >
            <circle cx="150" cy="150" r="150" fill="#F3F4F7" />
            <path
              d="M300 150C300 183.287 288.928 215.629 268.526 241.932C248.125 268.235 219.554 287.005 187.313 295.285C155.072 303.565 120.993 300.886 90.4417 287.669C59.8907 274.452 34.604 251.449 18.5637 222.281C2.52348 193.113 -3.35896 159.438 1.8428 126.56C7.04455 93.6814 23.035 63.4672 47.2958 40.6755C71.5567 17.8838 102.71 3.80948 135.849 0.66904C168.987 -2.4714 202.23 5.50044 230.34 23.3291L150 150H300Z"
              fill="url(#paint0_linear_2807_30495)"
            />
            <circle cx="150" cy="150" r="115" fill="white" />
            <defs>
              <linearGradient
                id="paint0_linear_2807_30495"
                x1="109.088"
                y1="13.9556"
                x2="250.784"
                y2="289.338"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#61E5AC" />
                <stop offset="0.423611" stopColor="#61DEC5" />
                <stop offset="1" stopColor="#0EA57F" />
              </linearGradient>
            </defs>
          </svg>
        </Box>
      </Box>

      <Box minH="280px" mt="40px">
        <Box w="65%" h="100%">
          <Text
            lineHeight={{ lg: "40px", xl: "50px" }}
            fontSize={{ base: "20px", md: "30px", lg: "38px", xl: "45px" }}
            fontWeight="500"
          >
            Начните с <span style={{ color: "blue" }}>бесплатных</span> курсов
          </Text>
          <Text fontSize={{ base: "13px", md: "15px", xl: "18px" }} mt="15px">
            Это короткие базовые курсы, которые дают основы знаний, возможность
            попробовать себя в профессиональной области и ознакомиться с нашим
            методом обучения
          </Text>
        </Box>
        <Box>
          <FreeKourse />
        </Box>
      </Box>
    </Container>
  );
}
