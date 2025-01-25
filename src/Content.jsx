import Part from './Part';

export default function Content({ parts }) {
	return (
		<div>
			<Part part={parts[0].name} exerciseCount={parts[0].exercises} />
			<Part part={parts[1].name} exerciseCount={parts[1].exercises} />
			<Part part={parts[2].name} exerciseCount={parts[2].exercises} />
		</div>
	);
}
