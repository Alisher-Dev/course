import { Box, Button, Image, Text } from "@chakra-ui/react";
import notFound from "../image/notfound.png";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Box
      w="100%"
      h="90vh"
      display="flex"
      alignItems="center"
      gap="40px"
      justifyContent={{ base: "center", md: "space-evenly" }}
      flexDirection={{ base: "column", md: "unset" }}
    >
      <Box>
        <Text
          fontSize={{ base: "20px", md: "22px", lg: "26px", xl: "36px" }}
          fontWeight="600"
        >
          Ой...
        </Text>
        <Text
          w={{ base: "300px", md: "400px" }}
          fontSize={{ base: "13px", lg: "15px", xl: "18px" }}
          p="20px 0"
          fontWeight="500"
        >
          Страница не найдена, но вы можете перейти в каталог курсов и
          посмотреть другие программы
        </Text>
        <Link to="/navigation">
          <Button
            variant="unstyle"
            w="250px"
            fontSize={{ base: "13px", lg: "14px", xl: "16px" }}
            className="button-65"
          >
            Перейти в каталог курсов
          </Button>
        </Link>
      </Box>
      <Image
        src={notFound}
        w={{ base: "260px", md: "320px", lg: "400px", xl: "700px" }}
      />
    </Box>
  );
}
