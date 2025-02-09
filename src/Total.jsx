export default function Total({ parts }) {
	return (
		<p>
			Total of {parts.reduce((total, part) => total + part.exercises, 0)}{' '}
			exercises
		</p>
	);
}
