import { Button, HStack, Icon, Tabs, List, Flex, Text } from "@chakra-ui/react";
import { LuFolder, LuUser } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoChatboxOutline } from "react-icons/io5";

export default function Profile() {
	return (
		<Tabs.Root
			defaultValue="info"
			mt="16"
			p="20px"
			colorPalette="purple"
			variant="enclosed"
		>
			<Tabs.List>
				<Tabs.Trigger
					_selected={{ color: "white", bg: "purple.400" }}
					value="info"
				>
					<Icon as={LuUser} />
					Account Info
				</Tabs.Trigger>
				<Tabs.Trigger
					_selected={{ color: "white", bg: "purple.400" }}
					value="history"
				>
					<Icon as={LuFolder} />
					Task History
				</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="info">
				<List.Root listStyle="none" fontSize="1rem" gap="4">
					<List.Item>
						<Flex align="center" gap={1}>
							<Icon as={CiMail} mt="3px" />
							<Text>Email: mario@netninja.dev</Text>
						</Flex>
					</List.Item>
					<List.Item>
						<Flex align="center" gap={1}>
							<Icon as={IoChatboxOutline} mt="3px" />
							<Text>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							</Text>
						</Flex>
					</List.Item>
					<List.Item>
						<Flex align="center" gap={1}>
							<Icon as={FaStar} mt="3px" />
							<Text>Lorem ipsum dolor sit amet.</Text>
						</Flex>
					</List.Item>
				</List.Root>
			</Tabs.Content>
			<Tabs.Content value="history">here is your tasks history</Tabs.Content>
		</Tabs.Root>
	);
}
