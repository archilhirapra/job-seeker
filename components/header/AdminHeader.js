import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavContent from "./HeaderNavContent";
import AdminNavContent from "./AdminHeaderContent";

const AdminHeader = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 10) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
    }, []);

    return (
        // <!-- Main Header-->
        <header
            className={`main-header  ${
                navbar ? "fixed-header animated slideInDown" : ""
            }`}
        >
            {/* <!-- Main box --> */}
            <div className="main-box">
                {/* <!--Nav Outer --> */}
                <div className="nav-outer">
                    <div className="logo-box">
                        <div className="logo">
                            <Link href="/">
                                <img src="/images/logo.svg" alt="brand" />
                            </Link>
                        </div>
                    </div>
                    {/* End .logo-box */}

                    <AdminNavContent />
                    {/* <!-- Main Menu End--> */}
                </div>
                {/* End .nav-outer */}
            </div>
        </header>
    );
};

export default AdminHeader;
