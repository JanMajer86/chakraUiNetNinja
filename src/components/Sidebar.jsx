import { Icon, List, Link, Flex } from "@chakra-ui/react";
import { NavLink as RouterNavLink } from "react-router-dom";

// icons
import { MdCalendarViewMonth, MdEditSquare } from "react-icons/md";
import { IoIosContact } from "react-icons/io";

export default function Sidebar() {
	return (
		<List.Root listStyle="none" color="white" fontSize="1.2rem" gap="4">
			<List.Item>
				<Flex align="center" gap={1}>
					<Link
						as={RouterNavLink}
						to="/"
						color="whiteAlpha.900"
						_hover={{ textDecoration: "none", color: "gray.contrast" }}
					>
						<Icon
							as={MdCalendarViewMonth}
							boxSize={5}
							color="whiteAlpha.800"
							mt="3px"
						/>
						Dashboard
					</Link>
				</Flex>
			</List.Item>
			<List.Item>
				<Flex align="center" gap={1}>
					<Link
						as={RouterNavLink}
						to="/create"
						color="whiteAlpha.900"
						_hover={{ textDecoration: "none", color: "gray.contrast" }}
					>
						<Icon
							as={MdEditSquare}
							boxSize={5}
							color="whiteAlpha.800"
							mt="3px"
						/>
						New Task
					</Link>
				</Flex>
			</List.Item>
			<List.Item>
				<Flex align="center" gap={1}>
					<Link
						as={RouterNavLink}
						to="/profile"
						color="whiteAlpha.900"
						_hover={{ textDecoration: "none", color: "gray.contrast" }}
					>
						<Icon
							as={IoIosContact}
							boxSize={5}
							color="whiteAlpha.800"
							mt="3px"
						/>
						Profile
					</Link>
				</Flex>
			</List.Item>
		</List.Root>
	);
}
