import React from "react";

type Props = {};

export default function Team({}: Props) {
    return (
        <div>
            <div
                className="h-screen/2 relative max-w-7xl pt-32 flex flex-col mx-auto justify-evenly items-center text-center md:text-left md:flex-row">
                <h3 className="absolute bottom-36 top-12 uppercase tracking-[20px] text-gray-500 text-2xl">
                    &nbsp;Advisors
                </h3>
                <div className="card w-52">
                    <figure className="px-10 ">
                        <img
                            src="images/team/susana.jpg"
                            alt="Susana Sargento Image"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title" style={{fontSize: 17}}>
                            Susana Sargento
                        </h2>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <a href="mailto:susana@ua.pt" target="_blank" style={{marginInline: 5}}>
                                <img src="images/icon/email.svg" style={{height: 20, width: 20}}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card w-52">
                    <figure className="px-10 ">
                        <img
                            src="images/team/pedro_rito.jpg"
                            alt="Pedro Rito Image"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title" style={{fontSize: 17}}>
                            Pedro Rito
                        </h2>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <a href="mailto:pedrorito@ua.pt" target="_blank" style={{marginInline: 5}}>
                                <img src="images/icon/email.svg" style={{height: 20, width: 20}}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card w-52">
                    <figure className="px-10 ">
                        <img
                            src="images/team/ana.jpg"
                            alt="Ana Almeida Image"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title" style={{fontSize: 17}}>
                            Ana Almeida
                        </h2>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <a href="mailto:anaa@ua.pt" target="_blank" style={{marginInline: 5}}>
                                <img src="images/icon/email.svg" style={{height: 20, width: 20}}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card w-52">
                    <figure className="px-10 ">
                        <img
                            src="images/team/hugo.jpg"
                            alt="Hugo Leal Image"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title" style={{fontSize: 17}}>
                            Hugo Leal
                        </h2>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <a href="mailto:hugolardosa@ua.pt" target="_blank" style={{marginInline: 5}}>
                                <img src="images/icon/email.svg" style={{height: 20, width: 20}}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card w-52">
                    <figure className="px-10 ">
                        <img
                            src="images/team/pedro_figueiredo.jpg"
                            alt="Pedro Figueiredo Image"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title" style={{fontSize: 17}}>
                            Pedro Figueiredo
                        </h2>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <a href="mailto:palexandre09@ua.pt" target="_blank" style={{marginInline: 5}}>
                                <img src="images/icon/email.svg" style={{height: 20, width: 20}}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="h-screen/2 relative max-w-7xl pt-32 flex flex-col mx-auto justify-evenly items-center text-center md:text-left md:flex-row">
                <h3 className="absolute bottom-36 top-12 uppercase tracking-[20px] text-gray-500 text-2xl">
                    &nbsp;Team
                </h3>
                <div className="card w-52">
                    <figure className="px-10 ">
                        <img
                            src="images/team/catarina.jpg"
                            alt="Catarina Costa Image"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title" style={{fontSize: 17}}>
                            Catarina Costa
                        </h2>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <a href="mailto:catarinateves02@ua.pt" target="_blank" style={{marginInline: 5}}>
                                <img src="images/icon/email.svg" style={{height: 20, width: 20}}/>
                            </a>
                            <a href="https://github.com/CatarinaCosta02" target="_blank" style={{marginInline: 5}}>
                                <img src="images/icon/github.svg" style={{height: 20, width: 20}}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card w-52">
                    <figure className="px-10 ">
                        <img
                            src="images/team/diogo.jpg"
                            alt="Diogo Paiva Image"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title" style={{fontSize: 17}}>
                            Diogo Paiva
                        </h2>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <a href="mailto:diogopaiva21@ua.pt" target="_blank" style={{marginInline: 5}}>
                                <img src="images/icon/email.svg" style={{height: 20, width: 20}}/>
                            </a>
                            <a href="https://github.com/DiogoPaiva21" target="_blank" style={{marginInline: 5}}>
                                <img src="images/icon/github.svg" style={{height: 20, width: 20}}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card w-52">
                    <figure className="px-10 ">
                        <img
                            src="images/team/goncalo.jpg"
                            alt="Gonçalo Silva Image"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title" style={{fontSize: 17}}>
                            Gonçalo Silva
                        </h2>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <a href="mailto:goncalo.silva02@ua.pt" target="_blank" style={{marginInline: 5}}>
                                <img src="images/icon/email.svg" style={{height: 20, width: 20}}/>
                            </a>
                            <a href="https://github.com/GoncaloSilva25" target="_blank" style={{marginInline: 5}}>
                                <img src="images/icon/github.svg" style={{height: 20, width: 20}}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card w-52">
                    <figure className="px-10 ">
                        <img
                            src="images/team/joao.jpg"
                            alt="João Fonseca Image"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title" style={{fontSize: 17}}>
                            João Fonseca
                        </h2>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <a href="mailto:joao.fonseca@ua.pt" target="_blank" style={{marginInline: 5}}>
                                <img src="images/icon/email.svg" style={{height: 20, width: 20}}/>
                            </a>
                            <a href="https://github.com/joaompfonseca" target="_blank" style={{marginInline: 5}}>
                                <img src="images/icon/github.svg" style={{height: 20, width: 20}}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card w-52">
                    <figure className="px-10 ">
                        <img
                            src="images/team/pedro.jpg"
                            alt="Pedro Rasinhas Image"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title" style={{fontSize: 17}}>
                            Pedro Rasinhas
                        </h2>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <a href="mailto:rasinhas@ua.pt" target="_blank" style={{marginInline: 5}}>
                                <img src="images/icon/email.svg" style={{height: 20, width: 20}}/>
                            </a>
                            <a href="https://github.com/r4sinhas" target="_blank" style={{marginInline: 5}}>
                                <img src="images/icon/github.svg" style={{height: 20, width: 20}}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
