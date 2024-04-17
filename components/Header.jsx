import style from "./Header.module.css"
export default function Header() {
	return (
		<header className={style.header}>
			<div className={style.logo_container}>
				{/* <img className={style.logo} src="/logo.png" alt="logo" /> */}
			</div>
		</header>
	)
}
