import { Box, Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function FreeKourse() {
  return (
    <>
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap="40px"
      >
        <GridItem
          borderRadius="20px"
          maxW={{ base: "100%", sm: "380px" }}
          m="0 auto"
          overflow="hidden"
          mt="20px"
        >
          <Box w="100%" h={{ lg: "180px", xl: "200px" }}>
            <Image
              src="https://highload.today/wp-content/uploads/2022/11/Statya_Kto_takie_Frontend_razrabotchiki-scaled-e1669149446894.jpg"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>
          <Box w="100%" minH="150px" mt="10px" p="15px 0">
            <Text
              fontSize={{ base: "18px", lg: "20px", xl: "24px" }}
              fontWeight="500"
              borderBottom="1px solid gray"
              fontFamily="monospace"
              p="0 0 10px"
            >
              Профессии и языки программирования: что выбрать
            </Text>
            <Box
              mt="10px"
              display="flex"
              alignItems="center"
              gap="5px"
              justifyContent="space-between"
            >
              <Button
                variant="unstyle"
                w="50%"
                bg="black"
                fontSize={{ base: "13px", lg: "14px", xl: "16px" }}
                _hover={{ bg: "rgb(63, 63, 63)" }}
                className="button-65"
              >
                Учиться бесплатно
              </Button>
              <Button
                variant="unstyle"
                w="50%"
                bg="white"
                color="black"
                fontSize={{ base: "13px", lg: "14px", xl: "16px" }}
                _hover={{ bg: "white", border: "2px solid black" }}
                border="1px solid black"
                className="button-65"
              >
                Подробнее
              </Button>
            </Box>
          </Box>
        </GridItem>
        <GridItem
          borderRadius="20px"
          maxW={{ base: "100%", sm: "380px" }}
          m="0 auto"
          overflow="hidden"
          mt="20px"
        >
          <Box w="100%" h={{ lg: "180px", xl: "200px" }}>
            <Image
              src="https://highload.today/wp-content/uploads/2022/11/Statya_Kto_takie_Frontend_razrabotchiki-scaled-e1669149446894.jpg"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>
          <Box w="100%" minH="150px" mt="10px" p="15px 0">
            <Text
              fontSize={{ base: "18px", lg: "20px", xl: "24px" }}
              fontWeight="500"
              borderBottom="1px solid gray"
              fontFamily="monospace"
              p="0 0 10px"
            >
              Профессии и языки программирования: что выбрать
            </Text>
            <Box
              mt="10px"
              display="flex"
              alignItems="center"
              gap="5px"
              justifyContent="space-between"
            >
              <Button
                variant="unstyle"
                w="50%"
                bg="black"
                fontSize={{ base: "13px", lg: "14px", xl: "16px" }}
                _hover={{ bg: "rgb(63, 63, 63)" }}
                className="button-65"
              >
                Учиться бесплатно
              </Button>
              <Button
                variant="unstyle"
                w="50%"
                bg="white"
                color="black"
                fontSize={{ base: "13px", lg: "14px", xl: "16px" }}
                _hover={{ bg: "white", border: "2px solid black" }}
                border="1px solid black"
                className="button-65"
              >
                Подробнее
              </Button>
            </Box>
          </Box>
        </GridItem>
        <GridItem
          borderRadius="20px"
          maxW={{ base: "100%", sm: "380px" }}
          m="0 auto"
          overflow="hidden"
          mt="20px"
        >
          <Box w="100%" h={{ lg: "180px", xl: "200px" }}>
            <Image
              src="https://highload.today/wp-content/uploads/2022/11/Statya_Kto_takie_Frontend_razrabotchiki-scaled-e1669149446894.jpg"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>
          <Box w="100%" minH="150px" mt="10px" p="15px 0">
            <Text
              fontSize={{ base: "18px", lg: "20px", xl: "24px" }}
              fontWeight="500"
              borderBottom="1px solid gray"
              fontFamily="monospace"
              p="0 0 10px"
            >
              Профессии и языки программирования: что выбрать
            </Text>
            <Box
              mt="10px"
              display="flex"
              alignItems="center"
              gap="5px"
              justifyContent="space-between"
            >
              <Button
                variant="unstyle"
                w="50%"
                bg="black"
                fontSize={{ base: "13px", lg: "14px", xl: "16px" }}
                _hover={{ bg: "rgb(63, 63, 63)" }}
                className="button-65"
              >
                Учиться бесплатно
              </Button>
              <Button
                variant="unstyle"
                w="50%"
                bg="white"
                color="black"
                fontSize={{ base: "13px", lg: "14px", xl: "16px" }}
                _hover={{ bg: "white", border: "2px solid black" }}
                border="1px solid black"
                className="button-65"
              >
                Подробнее
              </Button>
            </Box>
          </Box>
        </GridItem>
      </Grid>
      <Link to="category">
        <Button
          mt="30px"
          variant="unstyle"
          w={{ base: "200px", lg: "280px", xl: "300px" }}
          h="50px"
          bg="white"
          color="black"
          fontSize={{ base: "13px", lg: "16px" }}
          _hover={{ bg: "white", boxShadow: "rgba(0,0,0,.5) 0 0 10px inset" }}
          border="1px solid black"
          className="button-65"
        >
          Каталог бесплатных курсов
        </Button>
      </Link>
    </>
  );
}
