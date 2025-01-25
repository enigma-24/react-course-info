import Content from "./Content";
import Header from "./Header";

export default function Course({ course }) {
	return (
		<>
			<Header courseName={course.name} />
			<Content parts={course.parts} />
		</>
	);
}
