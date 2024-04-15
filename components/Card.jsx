
import Link from "next/link";
import Image from "next/image";
import style from "./Card.module.css";

export default function Card({ data }) {
	const { name, images, tags } = data
	return (
		<Link href={`${name}`} className={style.container}>
			<img src={"/static/" + images[0]} className={style.image} loading="lazy" alt={name} />
			<div className={style.body}>
				<h3 className={style.name}>{name}</h3>
				<p className={style.description}>{data.description.slice(0, 115)}...</p>
				<div className={style.tags}>
					{tags.map((tag, index) => (
						<span key={index} className={style.tag}>{tag}</span>
					))}
				</div>
			</div>

		</Link>
	)
}