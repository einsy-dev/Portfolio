export default function ProjectPage({
  params: { name }
}: {
  params: { name: string };
}) {
  return <div>{name}</div>;
}
