import { Box, SimpleGrid } from "@chakra-ui/react";

export default function Dashboard() {
	// const boxStyles = {
	// 	p: "10px",
	// 	bg: "purple.400",
	// 	color: "white",
	// 	m: "10px",
	// 	textAlign: "center",
	// 	filter: "blur(2px)",
	// 	_hover: {
	// 		color: "black",
	// 		bg: "blue.200",
	// 		filter: "none",
	// 	},
	// };

	return (
		<SimpleGrid p="10px" columns={4} gap={10} minChildWidth={"250px"}>
			<Box h="50px" bg="whiteAlpha.500" border="1px solid"></Box>
			<Box h="50px" bg="whiteAlpha.500" border="1px solid"></Box>
			<Box h="50px" bg="whiteAlpha.500" border="1px solid"></Box>
			<Box h="50px" bg="whiteAlpha.500" border="1px solid"></Box>

			<Box h="50px" bg="whiteAlpha.500" border="1px solid"></Box>
			<Box h="50px" bg="whiteAlpha.500" border="1px solid"></Box>
			<Box h="50px" bg="whiteAlpha.500" border="1px solid"></Box>
			<Box h="50px" bg="whiteAlpha.500" border="1px solid"></Box>

			<Box h="50px" bg="whiteAlpha.500" border="1px solid"></Box>
			<Box h="50px" bg="whiteAlpha.500" border="1px solid"></Box>
			<Box h="50px" bg="whiteAlpha.500" border="1px solid"></Box>
			<Box h="50px" bg="whiteAlpha.500" border="1px solid"></Box>
		</SimpleGrid>
	);
}
