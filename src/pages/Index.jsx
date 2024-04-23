// Complete the Index page component here
// Use chakra-ui for styling and layout
import { Box, SimpleGrid, Image, Text, IconButton, Flex } from "@chakra-ui/react";
import { FaDownload, FaShareAlt, FaHeart } from "react-icons/fa";

const Index = () => {
  // Sample images for the gallery
  const images = [
    { src: "https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBsYW5kc2NhcGV8ZW58MHx8fHwxNzEzODY5MDQ2fDA&ixlib=rb-4.0.3&q=80&w=1080", title: "Nature Landscape" },
    { src: "https://images.unsplash.com/photo-1529619768328-e37af76c6fe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbmlnaHR8ZW58MHx8fHwxNzEzODY5MDQ3fDA&ixlib=rb-4.0.3&q=80&w=1080", title: "City Night" },
    { src: "https://images.unsplash.com/photo-1615809265087-1416ccddd6ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHZpZXd8ZW58MHx8fHwxNzEzODY5MDQ3fDA&ixlib=rb-4.0.3&q=80&w=1080", title: "Mountain View" },
    { src: "https://images.unsplash.com/photo-1579551049826-7c13b6bc241c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBwYXRofGVufDB8fHx8MTcxMzg2OTA0N3ww&ixlib=rb-4.0.3&q=80&w=1080", title: "Forest Path" },
    { src: "https://images.unsplash.com/photo-1460627390041-532a28402358?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHN1bnNldHxlbnwwfHx8fDE3MTM4NjkwNDh8MA&ixlib=rb-4.0.3&q=80&w=1080", title: "Beach Sunset" },
    { src: "https://images.unsplash.com/photo-1503079789711-148472409b63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbm93eSUyMG1vdW50YWlufGVufDB8fHx8MTcxMzg2OTA0OHww&ixlib=rb-4.0.3&q=80&w=1080", title: "Snowy Mountain" },
  ];

  return (
    <Box p={5}>
      <Text fontSize="2xl" mb={4}>
        Image Gallery
      </Text>
      <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={10}>
        {images.map((image, index) => (
          <Box key={index} boxShadow="md" rounded="lg" overflow="hidden">
            <Box position="relative">
              <Image src={image.src} alt={image.title} />
              <Flex position="absolute" bottom="2" right="2" align="center">
                <IconButton aria-label="Download image" icon={<FaDownload />} size="sm" mr="2" />
                <IconButton aria-label="Share image" icon={<FaShareAlt />} size="sm" mr="2" />
                <IconButton aria-label="Like image" icon={<FaHeart />} size="sm" />
              </Flex>
              <Text p={2} fontSize="lg" position="absolute" bottom="0" left="2" bg="rgba(255, 255, 255, 0.8)" visibility="hidden" _groupHover={{ visibility: "visible" }}>
                {image.title}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;
