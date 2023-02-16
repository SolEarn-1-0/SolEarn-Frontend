/** @format */

const Navbar = () => {
	return (
		<nav>
			<div className="navlogo">
				<h1>SolEarn</h1>
			</div>

			<div className="navlinks">
				<a href="/">Home</a>
				<a href="/">AboutUs</a>
				<a href="/">ContactUs</a>
			</div>

			<div className="navbtns">
				<button>SignIn</button>
				<button>SignUp</button>
			</div>
		</nav>
	);
};
export default Navbar;
