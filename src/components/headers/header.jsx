import { Box, Button, Container, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
        <Text>LOGO</Text>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="40px"
        >
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="category"
          >
            <Text fontSize="16px" fontWeight="500">
              Каталог курсов
            </Text>
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="/free">
            <Text fontSize="16px" fontWeight="500">
              Учиться бесплатно
            </Text>
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="media">
            <Text fontSize="16px" fontWeight="500">
              Медиа Нетологии
            </Text>
          </Link>
        </Box>
        <Button variant="unstyle" className="button-65">
          login
        </Button>
      </Box>
    </Container>
  );
}
