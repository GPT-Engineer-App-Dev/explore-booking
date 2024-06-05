import { Box, Button, Container, Flex, Grid, Heading, HStack, Image, Input, InputGroup, InputRightElement, Stack, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.600" color="white" p={4} justify="space-between" align="center">
        <Heading size="md">TravelBooking</Heading>
        <HStack spacing={8}>
          <Button variant="link" color="white">Home</Button>
          <Button variant="link" color="white">Destinations</Button>
          <Button variant="link" color="white">Bookings</Button>
          <Button variant="link" color="white">Contact</Button>
        </HStack>
        <Button colorScheme="teal" variant="outline">Sign In</Button>
      </Flex>

      {/* Hero Section */}
      <Box position="relative" height="60vh" bg="gray.800">
        <Image src="/images/hero.jpg" alt="Travel Destination" objectFit="cover" width="100%" height="100%" opacity={0.8} />
        <VStack position="absolute" top="0" left="0" right="0" bottom="0" justify="center" align="center" spacing={4} color="white">
          <Heading size="2xl">Discover Your Next Adventure</Heading>
          <InputGroup size="lg" width="50%">
            <Input placeholder="Search destinations, dates, travelers..." bg="white" color="black" />
            <InputRightElement>
              <Button h="1.75rem" size="sm" colorScheme="teal">Search</Button>
            </InputRightElement>
          </InputGroup>
          <Button colorScheme="teal" size="lg">Search</Button>
        </VStack>
      </Box>

      {/* Featured Destinations */}
      <Container maxW="container.xl" py={10}>
        <Heading size="lg" mb={6}>Featured Destinations</Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/images/destination1.jpg" alt="Destination 1" />
            <Box p={6}>
              <Heading size="md">Paris</Heading>
              <Text mt={2}>The city of lights and love.</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/images/destination2.jpg" alt="Destination 2" />
            <Box p={6}>
              <Heading size="md">Bali</Heading>
              <Text mt={2}>A tropical paradise.</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/images/destination3.jpg" alt="Destination 3" />
            <Box p={6}>
              <Heading size="md">New York</Heading>
              <Text mt={2}>The city that never sleeps.</Text>
            </Box>
          </Box>
        </Grid>
      </Container>

      {/* Testimonials */}
      <Box bg="gray.100" py={10}>
        <Container maxW="container.xl">
          <Heading size="lg" mb={6}>What Our Customers Say</Heading>
          <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
            <Box borderWidth="1px" borderRadius="lg" p={6} bg="white">
              <HStack spacing={4}>
                <Image borderRadius="full" boxSize="50px" src="/images/user1.jpg" alt="User 1" />
                <VStack align="start">
                  <Heading size="sm">John Doe</Heading>
                  <Text>"Amazing experience! Highly recommend."</Text>
                </VStack>
              </HStack>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" p={6} bg="white">
              <HStack spacing={4}>
                <Image borderRadius="full" boxSize="50px" src="/images/user2.jpg" alt="User 2" />
                <VStack align="start">
                  <Heading size="sm">Jane Smith</Heading>
                  <Text>"A trip to remember. Excellent service."</Text>
                </VStack>
              </HStack>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" p={6} bg="white">
              <HStack spacing={4}>
                <Image borderRadius="full" boxSize="50px" src="/images/user3.jpg" alt="User 3" />
                <VStack align="start">
                  <Heading size="sm">Alice Johnson</Heading>
                  <Text>"Loved every moment of it. Will book again!"</Text>
                </VStack>
              </HStack>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="blue.600" color="white" py={10}>
        <Container maxW="container.xl">
          <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
            <Box>
              <Heading size="md" mb={4}>TravelBooking</Heading>
              <Text>Contact us at: info@travelbooking.com</Text>
              <Text>Phone: +123 456 7890</Text>
            </Box>
            <Box>
              <Heading size="md" mb={4}>Quick Links</Heading>
              <Text>Privacy Policy</Text>
              <Text>Terms of Service</Text>
            </Box>
            <Box>
              <Heading size="md" mb={4}>Follow Us</Heading>
              <HStack spacing={4}>
                <Button as="a" href="https://facebook.com" aria-label="Facebook" leftIcon={<FaFacebook />}>Facebook</Button>
                <Button as="a" href="https://instagram.com" aria-label="Instagram" leftIcon={<FaInstagram />}>Instagram</Button>
                <Button as="a" href="https://twitter.com" aria-label="Twitter" leftIcon={<FaTwitter />}>Twitter</Button>
              </HStack>
            </Box>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;