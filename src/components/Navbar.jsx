import {
	Avatar,
	Box,
	Button,
	Center,
	Circle,
	defineStyle,
	Flex,
	Float,
	Heading,
	HStack,
	Spacer,
	Text,
} from "@chakra-ui/react";

import { Toaster, toaster } from "@/components/ui/toaster";

export default function Navbar() {
	const logoutToast = () =>
		toaster.create({
			description: "Logged out successfully",
			type: "info",
			duration: 3000,
		});

	const ringCss = defineStyle({
		outlineWidth: "2px",
		outlineColor: "colorPalette.500",
		outlineOffset: "2px",
		outlineStyle: "solid",
	});

	return (
		<Flex as="nav" p="10px" alignItems="center" color="black" mb="8">
			<Toaster />
			<Heading as="h1">Dojo Tasks</Heading>
			<Spacer />
			<HStack gap="20px">
				<Avatar.Root css={ringCss} colorPalette="purple">
					<Avatar.Fallback name="Mario" />
					<Avatar.Image src="/img/mario.png" />
					<Float placement="bottom-end" offsetX={1} offsetY={1}>
						<Center bg="teal.500" borderRadius="full" boxSize="16px">
							<Text fontSize="xs" color="white">
								3
							</Text>
						</Center>
					</Float>
				</Avatar.Root>

				<Text>mario@netninja.dev</Text>
				<Button colorPalette="purple" onClick={logoutToast}>
					Logout
				</Button>
			</HStack>
		</Flex>
	);
}
