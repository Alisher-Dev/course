import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SizeExample(props) {
  const [size, setSize] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  // const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']

  return (
    <>
      {props.sizes.map((size) => (
        <Button
          display={{ sm: "flex", md: "none" }}
          onClick={() => handleClick(size)}
          key={size}
          variant="unstyle"
          fontSize="22px"
          className="button-65"
        >
          =
        </Button>
      ))}

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody mt="40px">
            <Box display={{ base: "block", md: "none" }}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                onClick={() => onClose()}
                to="category"
              >
                <Text
                  fontSize="15px"
                  m="20px 0"
                  textAlign="center"
                  bg="gray.100"
                  _hover={{ bg: "gray.300" }}
                  p="10px 20px"
                  borderRadius="5px"
                  w="100%"
                  display="block"
                  fontWeight="500"
                >
                  Каталог курсов
                </Text>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                onClick={() => onClose()}
                to="/free"
              >
                <Text
                  fontSize="15px"
                  m="20px 0"
                  textAlign="center"
                  bg="gray.100"
                  _hover={{ bg: "gray.300" }}
                  p="10px 20px"
                  borderRadius="5px"
                  w="100%"
                  display="block"
                  fontWeight="500"
                >
                  Учиться бесплатно
                </Text>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                onClick={() => onClose()}
                to="media"
              >
                <Text
                  fontSize="15px"
                  m="20px 0"
                  textAlign="center"
                  bg="gray.100"
                  _hover={{ bg: "gray.300" }}
                  p="10px 20px"
                  borderRadius="5px"
                  w="100%"
                  display="block"
                  fontWeight="500"
                >
                  Медиа Нетологии
                </Text>
              </Link>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
