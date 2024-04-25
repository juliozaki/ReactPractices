


export const AuthLayout = ({ children }) => {
    return (
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div id="card_bg_dark" className="card bg-dark text-white">
                        <div className="card-body p-4 text-center">
                            <div className="mb-md-2 mt-md-2 pb-2">

                                {children}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
