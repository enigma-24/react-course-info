import Part from './Part';
import Total from './Total';

export default function Content({ parts }) {
	return (
		<div>
			{parts.map((part) => (
				<Part key={part.id} part={part.name} exerciseCount={part.exercises} />
			))}
			<Total parts={parts} />
		</div>
	);
}
