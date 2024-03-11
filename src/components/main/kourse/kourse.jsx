import { Box, Button, Grid, GridItem, Text } from "@chakra-ui/react";

export default function Kourse() {
  return (
    <Grid
      gridTemplateColumns={{
        sm: "auto auto",
        lg: "auto auto auto",
        xl: "auto auto auto auto",
      }}
      gap={{ base: "10px", xl: "20px" }}
      mt="20px"
    >
      <GridItem
        minH={{ base: "200px", xl: "200px" }}
        overflow="hidden"
        p="10px"
        _hover={{ border: "1px solid blue" }}
        border="1px solid transparent"
        w={{ lg: "100%", xl: "280px" }}
        m="0 auto"
        borderRadius="20px"
        bg="white"
        position="relative"
      >
        <Text color="black" fontSize={{ base: "18px", lg: "22px", xl: "25px" }}>
          Программи-рование
        </Text>
        <Box position="relative">
          <Text
            maxH="100px"
            overflow="hidden"
            color="black"
            fontSize={{ base: "14px", lg: "15px", xl: "17px" }}
            fontWeight="100"
            mt="10px"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ipsa
            doloremque aliquam a minima iusto corporis minus reprehenderit
            tenetur vel.
          </Text>
          <Box
            w="100%"
            h="100%"
            bottom={{ lg: "0px", xl: "30px" }}
            className="gradient"
          ></Box>
        </Box>
        <Button
          fontSize={{ base: "12px", lg: "13px", xl: "14px" }}
          fontWeight="200"
          variant="unstyle"
          position="absolute"
          bottom="0"
          left="0"
          w="100%"
          color="rgb(0,106,255)"
          bg="gray.100"
        >
          Всего (kourse.length) курса
        </Button>
      </GridItem>
      <GridItem
        minH={{ base: "200px", xl: "200px" }}
        overflow="hidden"
        p="10px"
        _hover={{ border: "1px solid blue" }}
        border="1px solid transparent"
        w={{ lg: "100%", xl: "280px" }}
        m="0 auto"
        borderRadius="20px"
        bg="white"
        position="relative"
      >
        <Text color="black" fontSize={{ base: "18px", lg: "22px", xl: "25px" }}>
          Программи-рование
        </Text>
        <Box position="relative">
          <Text
            maxH="100px"
            overflow="hidden"
            color="black"
            fontSize={{ base: "14px", lg: "15px", xl: "17px" }}
            fontWeight="100"
            mt="10px"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ipsa
            doloremque aliquam a minima iusto corporis minus reprehenderit
            tenetur vel.
          </Text>
          <Box
            w="100%"
            h="100%"
            bottom={{ lg: "0px", xl: "30px" }}
            className="gradient"
          ></Box>
        </Box>
        <Button
          fontSize={{ base: "12px", lg: "13px", xl: "14px" }}
          fontWeight="200"
          variant="unstyle"
          position="absolute"
          bottom="0"
          left="0"
          w="100%"
          color="rgb(0,106,255)"
          bg="gray.100"
        >
          Всего (kourse.length) курса
        </Button>
      </GridItem>
      <GridItem
        minH={{ base: "200px", xl: "200px" }}
        overflow="hidden"
        p="10px"
        _hover={{ border: "1px solid blue" }}
        border="1px solid transparent"
        w={{ lg: "100%", xl: "280px" }}
        m="0 auto"
        borderRadius="20px"
        bg="white"
        position="relative"
      >
        <Text color="black" fontSize={{ base: "18px", lg: "22px", xl: "25px" }}>
          Программи-рование
        </Text>
        <Box position="relative">
          <Text
            maxH="100px"
            overflow="hidden"
            color="black"
            fontSize={{ base: "14px", lg: "15px", xl: "17px" }}
            fontWeight="100"
            mt="10px"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ipsa
            doloremque aliquam a minima iusto corporis minus reprehenderit
            tenetur vel.
          </Text>
          <Box
            w="100%"
            h="100%"
            bottom={{ lg: "0px", xl: "30px" }}
            className="gradient"
          ></Box>
        </Box>
        <Button
          fontSize={{ base: "12px", lg: "13px", xl: "14px" }}
          fontWeight="200"
          variant="unstyle"
          position="absolute"
          bottom="0"
          left="0"
          w="100%"
          color="rgb(0,106,255)"
          bg="gray.100"
        >
          Всего (kourse.length) курса
        </Button>
      </GridItem>
      <GridItem
        minH={{ base: "200px", xl: "200px" }}
        overflow="hidden"
        p="10px"
        _hover={{ border: "1px solid blue" }}
        border="1px solid transparent"
        w={{ lg: "100%", xl: "280px" }}
        m="0 auto"
        borderRadius="20px"
        bg="white"
        position="relative"
      >
        <Text color="black" fontSize={{ base: "18px", lg: "22px", xl: "25px" }}>
          Программи-рование
        </Text>
        <Box position="relative">
          <Text
            maxH="100px"
            overflow="hidden"
            color="black"
            fontSize={{ base: "14px", lg: "15px", xl: "17px" }}
            fontWeight="100"
            mt="10px"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ipsa
            doloremque aliquam a minima iusto corporis minus reprehenderit
            tenetur vel.
          </Text>
          <Box
            w="100%"
            h="100%"
            bottom={{ lg: "0px", xl: "30px" }}
            className="gradient"
          ></Box>
        </Box>
        <Button
          fontSize={{ base: "12px", lg: "13px", xl: "14px" }}
          fontWeight="200"
          variant="unstyle"
          position="absolute"
          bottom="0"
          left="0"
          w="100%"
          color="rgb(0,106,255)"
          bg="gray.100"
        >
          Всего (kourse.length) курса
        </Button>
      </GridItem>
    </Grid>
  );
}
