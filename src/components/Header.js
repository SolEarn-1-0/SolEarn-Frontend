import Images from '../Images/E-Wallet.svg'
const Header = () => {
  return (
		<header>
			<div className="headerlft">
				<h1>
					The easiest way to automate your crypto <span>payment</span>
				</h1>
				<p>
					Solearn is the leading provider of solana, stablecoins &
					cryptocurrency payroll solutions powered on the solana blockchain.
					DAOs, Employees and freelancers can choose to be paid in their
					preferred mix of solana, cryptocurrency, and local currencies.
				</p>
				<button>Get Started</button>
			</div>

			<div className="headerrght">
				<img src={Images} alt="" />
			</div>
		</header>
	);
}

export default Header