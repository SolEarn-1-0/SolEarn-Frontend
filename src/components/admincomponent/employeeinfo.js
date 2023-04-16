/** @format */

import {
	UnstyledButton,
	Group,
	Avatar,
	Text,
	createStyles,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
	user: {
		display: "block",
		width: "100%",
		padding: theme.spacing.md,
		color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

		"&:hover": {
			backgroundColor:
				theme.colorScheme === "dark"
					? theme.colors.dark[8]
					: theme.colors.gray[0],
		},
	},
}));

const employeeData = [
	{
		image:
			"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
		name: "Harriette Spoonlicker",
		email: "hspoonlicker@outlook.com",
	},
];

export function UserButton({
	image,
	name,
	email,
	icon,
	...others
}: UserButtonProps) {
	const { classes } = useStyles();

	return (
		<UnstyledButton className={classes.user} {...others}>
			<Group>
				<Avatar src={employeeData.image} radius="xl" />

				<div style={{ flex: 1 }}>
					<Text size="sm" weight={500}>
						{employeeData.name}
					</Text>

					<Text color="dimmed" size="xs">
						{employeeData.email}
					</Text>
				</div>

				{icon || <IconChevronRight size="0.9rem" stroke={1.5} />}
			</Group>
		</UnstyledButton>
	);
}
