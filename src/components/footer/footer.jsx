import { Box, Container, Image, Text } from "@chakra-ui/react";
import { FaTelegram } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box bg="black" mt="150px" color="white">
      <Container m="0 auto" maxW="80%" p="40px 0">
        <Box
          display="flex"
          gap="20px"
          textAlign={{ base: "center", md: "start" }}
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "unset" }}
        >
          <Box display="flex" flexDirection="column" gap="10px">
            <Text color="gray" fontWeight="500" fontSize="15px">
              ENVATO MARKET
            </Text>
            <Text fontWeight="500" cursor="pointer" fontSize="14px">
              Terms
            </Text>
            <Text fontWeight="500" cursor="pointer" fontSize="14px">
              Licenses
            </Text>
            <Text fontWeight="500" cursor="pointer" fontSize="14px">
              Market API
            </Text>
            <Text fontWeight="500" cursor="pointer" fontSize="14px">
              Become an affiliate
            </Text>
          </Box>
          <Box display="flex" flexDirection="column" gap="10px">
            <Text color="gray" fontWeight="500" fontSize="15px">
              HELP
            </Text>
            <Text fontWeight="500" cursor="pointer" fontSize="14px">
              Help Center
            </Text>
            <Text fontWeight="500" cursor="pointer" fontSize="14px">
              Authors
            </Text>
          </Box>
          <Box display="flex" flexDirection="column" gap="10px">
            <Text color="gray" fontWeight="500" fontSize="15px">
              OUR COMMUNITY
            </Text>
            <Text fontWeight="500" cursor="pointer" fontSize="14px">
              Community
            </Text>
            <Text fontWeight="500" cursor="pointer" fontSize="14px">
              Blog
            </Text>
            <Text fontWeight="500" cursor="pointer" fontSize="14px">
              Forums
            </Text>
            <Text fontWeight="500" cursor="pointer" fontSize="14px">
              Meetups
            </Text>
          </Box>
          <Box display="flex" flexDirection="column" gap="10px">
            <Text color="gray" fontWeight="500" fontSize="15px">
              MEET ENVATO
            </Text>
            <Text fontWeight="500" cursor="pointer" fontSize="14px">
              About Envato
            </Text>
            <Text fontWeight="500" cursor="pointer" fontSize="14px">
              Careers
            </Text>
            <Text fontWeight="500" cursor="pointer" fontSize="14px">
              Privacy Policy
            </Text>
            <Text fontWeight="500" cursor="pointer" fontSize="14px">
              Sitemap
            </Text>
          </Box>
          <Box display="flex" flexDirection="column" gap="10px">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap="10px"
              mt="20px"
              w={{ base: "100%", md: "80px" }}
            >
              <Link to="https://t.me/ALISH_20_06" target="_blank">
                <FaTelegram fontSize="30px" />
              </Link>
              <Link to="https://t.me/ALISH_20_06" target="_blank">
                <IoLogoInstagram fontSize="30px" />
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
