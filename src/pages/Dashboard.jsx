import {
	Avatar,
	Box,
	Button,
	Card,
	Flex,
	Heading,
	HStack,
	Icon,
	Separator,
	SimpleGrid,
	Text,
} from "@chakra-ui/react";

import { FaEye, FaRegEdit } from "react-icons/fa";

import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
	const tasks = useLoaderData();

	return (
		<SimpleGrid gap={10} minChildWidth={"300px"}>
			{tasks &&
				tasks.map((task) => {
					return (
						<Card.Root
							key={task.id}
							borderTopWidth="20px"
							borderTopColor="purple.400"
							bg="white"
						>
							<Card.Header>
								<Text>
									<Flex gap={5}>
										<Avatar.Root>
											<Avatar.Fallback name={task.author} />
											<Avatar.Image src={task.img} />
										</Avatar.Root>
										<Box>
											<Heading as="h3" size="sm">
												{task.title}
											</Heading>
											<Text>by {task.author}</Text>
										</Box>
									</Flex>
								</Text>
							</Card.Header>

							<Card.Body color="gray.500">
								<Text>{task.description}</Text>
							</Card.Body>

							<Separator mb="8" borderColor={"gray.200"} />

							<Card.Footer>
								<HStack>
									<Button variant="ghost">
										<Icon as={FaEye} />
										Watch
									</Button>
									<Button variant="outline">
										<Icon as={FaRegEdit} />
										Comment
									</Button>
								</HStack>
							</Card.Footer>
						</Card.Root>
					);
				})}
		</SimpleGrid>
	);
}

export const tasksLoader = async () => {
	const res = await fetch("http://localhost:3000/tasks");
	return res.json();
};
