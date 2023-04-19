/** @format */

import {
	Group,
	Avatar,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";


export function UserButton(props) {
	return (
		<Group>
			<Avatar src={props.imagePath} radius="xl" />

			<div style={{ flex: 1 }} className="userbtncrd">
				<h1>{props.name}</h1>
				<p>{props.price}</p>
			</div>

			{<IconChevronRight size="0.9rem" stroke={1.5} />}
		</Group>
	);
}
