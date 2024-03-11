import { Box, Image, Text, color } from "@chakra-ui/react";
import { GrLike } from "react-icons/gr";

export default function Category_kourse() {
  return (
    <Box display="flex" alignItems="center" flexDirection="column" mt="20px">
      <Box
        w="100%"
        borderTop="1px solid gray"
        p={{ base: "10px 0", md: "20px 0" }}
        display="flex"
        bg="gray.100"
        cursor="pointer"
        flexDirection={{ base: "column", sm: "unset" }}
        alignItems="center"
        className="menu_category"
      >
        <Image
          src="https://t3.ftcdn.net/jpg/05/56/29/10/360_F_556291020_q2ieMiOCKYbtoLITrnt7qcSL1LJYyWrU.jpg"
          borderRadius="50%"
          h={{ base: "80px", md: "120px", xl: "150px" }}
          w={{ base: "80px", md: "120px", xl: "150px" }}
        />
        <Box
          ml={{ base: "0px", sm: "40px" }}
          w={{ base: "auto", sm: "700px" }}
          display="flex"
          gap="10px"
          mt={{ base: "10px", sm: "0px" }}
          justifyContent="space-between"
          flexDirection="column"
        >
          <Text
            fontSize={{ base: "11px", md: "12px" }}
            bg="gray.200"
            w="100px"
            textAlign="center"
            m={{ base: "0px auto", sm: "0px" }}
            p="5px 10px"
            borderRadius="20px"
          >
            профессия
          </Text>
          <Text
            fontSize={{ base: "14px", md: "20px", xl: "24px" }}
            className="text_category"
            textAlign={{ base: "center", sm: "start" }}
          >
            Специалист по информационной безопасности: расширенный курс
          </Text>
          <Text
            fontSize={{ base: "13px", md: "14px" }}
            textAlign={{ base: "center", sm: "start" }}
          >
            14 месяцев
          </Text>
        </Box>
        <Box display={{ base: "none", md: "flex" }} m="auto 40px auto auto">
          <GrLike size="24px" />
        </Box>
      </Box>
      <Box
        w="100%"
        borderTop="1px solid gray"
        p={{ base: "10px 0", md: "20px 0" }}
        display="flex"
        bg="gray.100"
        cursor="pointer"
        flexDirection={{ base: "column", sm: "unset" }}
        alignItems="center"
        className="menu_category"
      >
        <Image
          src="https://t3.ftcdn.net/jpg/05/56/29/10/360_F_556291020_q2ieMiOCKYbtoLITrnt7qcSL1LJYyWrU.jpg"
          borderRadius="50%"
          h={{ base: "80px", md: "120px", xl: "150px" }}
          w={{ base: "80px", md: "120px", xl: "150px" }}
        />
        <Box
          ml={{ base: "0px", sm: "40px" }}
          w={{ base: "auto", sm: "700px" }}
          display="flex"
          gap="10px"
          mt={{ base: "10px", sm: "0px" }}
          justifyContent="space-between"
          flexDirection="column"
        >
          <Text
            fontSize={{ base: "11px", md: "12px" }}
            bg="gray.200"
            w="100px"
            textAlign="center"
            m={{ base: "0px auto", sm: "0px" }}
            p="5px 10px"
            borderRadius="20px"
          >
            профессия
          </Text>
          <Text
            fontSize={{ base: "14px", md: "20px", xl: "24px" }}
            className="text_category"
            textAlign={{ base: "center", sm: "start" }}
          >
            Специалист по информационной безопасности: расширенный курс
          </Text>
          <Text
            fontSize={{ base: "13px", md: "14px" }}
            textAlign={{ base: "center", sm: "start" }}
          >
            14 месяцев
          </Text>
        </Box>
        <Box display={{ base: "none", md: "flex" }} m="auto 40px auto auto">
          <GrLike size="24px" />
        </Box>
      </Box>
    </Box>
  );
}
