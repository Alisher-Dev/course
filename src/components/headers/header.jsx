import { Box, Button, Container, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SizeExample from "./menu/burgerMenu";

export default function Header() {
  return (
    <Container maxW="1800px" m="0 auto">
      <Box
        w="100%"
        h="65px"
        display="flex"
        boxShadow="rgba(157, 161, 165, 0.2) 0 5px 15px"
        alignItems="center"
        justifyContent="space-between"
        p="0 20px"
      >
        <Link to="/">
          <Text>LOGO</Text>
        </Link>
        <Box
          display={{ base: "none", md: "flex" }}
          alignItems="center"
          justifyContent="center"
          gap="40px"
        >
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="category"
          >
            <Text
              fontSize={{ sm: "12px", lg: "14px", xl: "16px" }}
              fontWeight="500"
            >
              Каталог курсов
            </Text>
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="/free">
            <Text
              fontSize={{ sm: "12px", lg: "14px", xl: "16px" }}
              fontWeight="500"
            >
              Учиться бесплатно
            </Text>
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="media">
            <Text
              fontSize={{ sm: "12px", lg: "14px", xl: "16px" }}
              fontWeight="500"
            >
              Медиа Нетологии
            </Text>
          </Link>
        </Box>
        <Box display="flex" gap="20px">
          <SizeExample sizes={["full"]} />
          <Button
            variant="unstyle"
            w={{ sm: "100px", lg: "140px", xl: "160px" }}
            fontSize={{ sm: "13x", lg: "14px", xl: "15px" }}
            className="button-65"
          >
            login
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
