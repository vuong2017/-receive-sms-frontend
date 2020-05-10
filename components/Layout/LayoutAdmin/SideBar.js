import Link from 'next/link'
import React, { useState } from 'react';

const SideBar = () => {

    const [listPages,] = useState([
        {
            id: 1,
            title: "Dashboard",
            href: "/admin/dashboard",
            childrens: []
        },
        {
            id: 2,
            title: "TextNow",
            childrens: [
                {
                    id: 21,
                    title: "List Account TextNow",
                    href: "/admin/textnow/list-account-textnow"
                },
                {
                    id: 22,
                    title: "List Phone",
                    href: "/admin/textnow/list-phone"
                }
            ]
        },

    ])

    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Admin</div>
            </a>

            <hr className="sidebar-divider my-0" />

            {
                listPages.map(x => {
                    if (x.childrens.length) {
                        return (
                            <React.Fragment key={x.id}>
                                <li className="nav-item">
                                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                                        <i className="fas fa-fw fa-folder"></i>
                                        <span>{x.title}</span>
                                    </a>
                                    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                                        <div className="bg-white py-2 collapse-inner rounded">
                                            {
                                                x.childrens.map(sub => {
                                                    return (
                                                        <Link key={sub.id} href={sub.href}>
                                                            <a className="collapse-item">{sub.title}</a>
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </li>

                                <hr className="sidebar-divider" />
                            </React.Fragment>
                        )
                    }
                    return (
                        <React.Fragment key={x.id}>
                            <li className="nav-item">

                                <Link href={x.href}>
                                    <a className="nav-link" href="index.html">
                                        <i className="fas fa-fw fa-tachometer-alt"></i>
                                        <span>{x.title}</span></a>
                                </Link>
                            </li>
                            <hr className="sidebar-divider" />
                        </React.Fragment>
                    )
                })


            }
        </ul>
    )
}

export default SideBar;