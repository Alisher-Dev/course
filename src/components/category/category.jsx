import { Box, Button, Container, Input, Text } from "@chakra-ui/react";
import Category_kourse from "./category_kourse/category_kourse";

export default function Category() {
  return (
    <Container maxW="1400px" m="0 auto" p="10px 0" minH="60vh">
      <Box p={{ base: "10px 20px", md: "30px 50px" }}>
        <Text fontSize={{ base: "18px", md: "20px", lg: "24px", xl: "28px" }}>
          Все курсы
        </Text>
        <Box
          h={{ base: "35px", md: "45px", xl: "50px" }}
          w="100%"
          bg="gray.100"
          display="flex"
          alignItems="center"
          borderRadius={{ base: "5px", md: "10px" }}
          overflow="hidden"
          mt="10px"
        >
          <Input
            placeholder="Какой курс вам нужен?"
            h="100%"
            w="100%"
            variant="unstyle"
            bg="transparent"
            outline="none"
            border="none"
            fontSize={{ base: "13px", md: "14px", xl: "16px" }}
          />
          <Button
            variant="unstyle"
            fontSize={{ base: "13px", md: "14px", xl: "16px" }}
            color="white"
            h="100%"
            w={{ base: "120px", md: "22%" }}
            borderRadius="0px"
            className="button-65"
            bg="black"
            _hover={{ bg: "rgb(75, 75, 75)" }}
          >
            Найти курс
          </Button>
        </Box>
        <Box>
          <Category_kourse />
        </Box>
      </Box>
    </Container>
  );
}
