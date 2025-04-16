import {
	Box,
	Button,
	Checkbox,
	Field,
	Flex,
	Input,
	Textarea,
} from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";

export const createAction = async ({ request }) => {
	const data = await request.formData();

	const task = {
		title: data.get("title"),
		description: data.get("description"),
		isPriority: data.get("isPriority") === "on",
	};
	console.log(task);

	return redirect("/");
};

export default function Create() {
	return (
		<Box maxW={"480px"}>
			<Form method="POST" action="/create">
				<Field.Root required mb="8">
					<Field.Label>Task name:</Field.Label>
					<Input type="text" name="title" />
					<Field.HelperText>Enter a descriptive task name.</Field.HelperText>
				</Field.Root>

				<Field.Root required mb="8">
					<Field.Label>Task description:</Field.Label>
					<Textarea
						placeholder="Enter a detailed description for the task..."
						name="description"
					></Textarea>
				</Field.Root>

				<Flex justify="space-between" align="center">
					<Checkbox.Root
						variant="solid"
						name="isPriority"
						colorPalette="purple"
					>
						<Checkbox.HiddenInput />
						<Checkbox.Control />
						<Checkbox.Label>Make this a priority</Checkbox.Label>
					</Checkbox.Root>

					<Button type="submit" colorPalette="purple">
						Submit
					</Button>
				</Flex>
			</Form>
		</Box>
	);
}
