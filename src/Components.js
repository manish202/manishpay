import {Link, NavLink} from "react-router-dom";
import {useState} from "react";
function Signup(){
    return <div className="container my-5 bg-light py-4">
    <div className="row text-center">
        <div className="col-md-12 pb-2"><h3>sign up</h3></div>
        <div className="col-md-12 pb-2">
            <form autoComplete="off">
                <div className="col-12 mb-4">
                    <input type="email" className="form-control" placeholder="your email" />
                </div>
                <div className="col-12 mb-4">
                    <input type="password" className="form-control" placeholder="your password" />
                </div>
                <div className="col-12 mb-4">
                    <input type="password" className="form-control" placeholder="confirm password" />
                </div>
                <div className="col-12 mb-4">
                    <div className="form-check text-start">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">by checking you are agree with our terms & conditions.</label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">signup</button>
                </div>
            </form>
        </div>
    </div>
</div>
}
function Login(){
    return <div className="container my-5 bg-light py-4">
    <div className="row text-center">
        <div className="col-md-12 pb-2"><h3>login</h3></div>
        <div className="col-md-12 pb-2">
            <form autoComplete="off">
                <div className="col-12 mb-4">
                    <input type="email" className="form-control" placeholder="your email" />
                </div>
                <div className="col-12 mb-4">
                    <input type="password" className="form-control" placeholder="your password" />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">login</button>
                </div>
            </form>
        </div>
    </div>
</div>
}
function NavBar(){
    let [show,chshow] = useState(false);
    return <div className="container">
        <div className="row">
            <div className="col-md-3 logo">
                <Link to="/">Manish</Link>
                <i className="fas fa-bars" onClick={() => chshow(!show)}></i>
            </div>
            <div className="col-md-9">
                <nav className={show ? "active":""}>
                    <NavLink to="/">home</NavLink>
                    <NavLink to="/services">services</NavLink>
                    <NavLink to="/about">about</NavLink>
                    <NavLink to="/contact">contact</NavLink>
                    <NavLink to="/signup" className="my-btn">sign up</NavLink>
                    <NavLink to="/login" className="my-btn">log in</NavLink>
                </nav>
            </div>
        </div>
    </div>
}
function ImgBox(){
    return <div className="col-md-6">
    <img src="images/business.jpg" alt="" />
</div>
}
function Hero(){
    return <div className="container bg-light">
        <div className="row align-items-center hero py-3">
            <div className="col-md-6">
                <div className="box">
                    <h1>online payment made easy for you.</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                    <form autoComplete="off" className="my-form">
                        <label>get early access for you</label>
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="enter your email" />
                            <button className="btn btn-outline-secondary" type="submit">subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
            <ImgBox />
        </div>
    </div>
}
function SmallCard({title,icon}){
    return <div className="col-md-4">
    <div className="small-card">
        <i className={icon}></i>
        <h3>{title}</h3>
        <p>recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
</div>
}
function CardBox(){
    return <div className="container my-5 bg-light py-4">
    <div className="row text-center">
        <div className="col-md-12 pb-2"><h3>how does it work ?</h3></div>
        <SmallCard title="download app" icon="fas fa-download" />
        <SmallCard title="complete the instruction" icon="fas fa-comment" />
        <SmallCard title="receive your funds" icon="fas fa-hand-holding-usd" />
    </div>
</div>
}
function LongCard({title,data}){
    return <div>
    <h4>{title}</h4>
    <p>{data}</p>
</div>
}
function Steps({title}){
    return <div className="col-md-6">
    <div className="box pt-3">
        <h3>{title}</h3>
        <LongCard title="sign in" data="recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.recently with desktop publishing software like Aldus PageMaker." />
        <LongCard title="add your bank account" data="publishing software like Aldus PageMaker including versions of Lorem Ipsum.recently with desktop publishing software like Aldus PageMaker." />
        <LongCard title="send payment request" data="desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.recently with desktop publishing." />
        <a href="/" className="my-btn">learn more</a>
    </div>
</div>
}
function Services(){
    return(
        <>
            <div className="container bg-light my-5">
                <div className="row align-items-center hero py-3">
                    <ImgBox />
                    <Steps title="how to use the app ?" />
                </div>
            </div>
            <div className="container bg-light my-5">
                <div className="row align-items-center hero py-3">
                    <Steps title="world class support is available 24/7" />
                    <ImgBox />
                </div>
            </div>
        </>
    )
}
function About(){
    return <div className="container my-5 bg-light py-4">
    <div className="row text-center">
        <div className="col-md-12 pb-2"><h3>how does it work ?</h3></div>
        <SmallCard title="register for free" icon="fas fa-download" />
        <SmallCard title="verify your identity" icon="fas fa-comment" />
        <SmallCard title="add recipient's bank details" icon="fas fa-hand-holding-usd" />
        <SmallCard title="pay for your transfer" icon="fas fa-hand-holding-usd" />
        <SmallCard title="choose an amount to send" icon="fas fa-hand-holding-usd" />
        <SmallCard title="that's it" icon="fas fa-hand-holding-usd" />
    </div>
</div>
}
function Contact(){
    return <div className="container my-5 bg-light py-4">
    <div className="row text-center">
        <div className="col-md-12 pb-2"><h3>contact us</h3></div>
        <div className="col-md-12 pb-2">
            <form autoComplete="off">
                <div className="row mb-4">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <input type="number" className="form-control" placeholder="phone number" />
                    </div>
                    <div className="col">
                        <input type="email" className="form-control" placeholder="your email" />
                    </div>
                </div>
                <div className="col-12 mb-4">
                    <input type="text" className="form-control" placeholder="add address" />
                </div>
                <div className="col-12 mb-4">
                    <input type="text" className="form-control" placeholder="enter your message" />
                </div>
                <div className="col-12 mb-4">
                    <div className="form-check text-start">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">by checking you are agree with our terms & conditions.</label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>
}
function FootBox({title}){
    return <div className="col-md-3 foot-box">
        <h4>{title}</h4>
        <a href="/">about</a>
        <a href="/">about</a>
        <a href="/">about</a>
        <a href="/">about</a>
    </div>
}
function Footer(){
    return <div className="container mt-5 bg-light py-4">
    <div className="row text-center">
        <FootBox title="company" />
        <FootBox title="support" />
        <FootBox title="services" />
        <FootBox title="follow us" />
        <div className="col-12 p-3">All copyright &copy; 2022-23 received. design & developed by manish prajapati </div>
    </div>
</div>
}
function Home(){
    return(
        <>
            <Hero />
            <CardBox />
            <Services />
            <About />
            <Contact />
        </>
    )
}
function Error404(){
    return <h1>Oops ! Error 404 page not found.</h1>
}
export {NavBar,Footer,Home, Services, About, Contact, Signup, Login, Error404};