import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const Footer = () => (

    // <footer id="foot3" class="page-footer font-small cyan darken-3">

    //     <div id="extra">
    //         <div class="row">

    //             <div class="col-md-12 py-5">
    //                 <div class="mb-5 flex-center">

    //                     <a class="fb-ic">
    //                         <i class="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
    //                     </a>
    //                     <a class="tw-ic">
    //                         <i class="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
    //                     </a>
    //                     <a class="gplus-ic">
    //                         <i class="fa fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
    //                     </a>
    //                     <a class="li-ic">
    //                         <i class="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
    //                     </a>
    //                     <a class="ins-ic">
    //                         <i class="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
    //                     </a>
    //                     <a class="pin-ic">
    //                         <i class="fa fa-pinterest fa-lg white-text fa-2x"> </i>
    //                     </a>
    //                 </div>
    //             </div>

    //         </div>

    //         <div class="col-md-6 mb-4">

    //             <form class="input-group">
    //                 <input type="text" class="form-control form-control-sm" placeholder="Your email" aria-label="Your email" aria-describedby="basic-addon2"></input>
    //                 <div class="input-group-append">
    //                     <button class="btn btn-sm btn-outline-white" type="button">Sign up</button>
    //                 </div>
    //             </form>

    //         </div>

    //     </div>

    //     <div class="footer-copyright text-center py-3">© 2018 Copyright:
    // <a href="https://mdbootstrap.com/bootstrap-tutorial/"> fitnesstracker.com</a>
    //     </div>
    // </footer>

















    // <!-- Footer -->
    <footer id="foot3" class="page-footer font-small cyan darken-3">
        {/* <!-- Footer Elements --> */}
        <div class="container">
            {/* <!-- Grid row--> */}
            <div class="row">
                {/* <!-- Grid column --> */}
                <div class="col-md-12 py-5">
                    <div class="mb-5 flex-center">

                        {/* <!-- Facebook --> */}
                        <a class="fb-ic">
                            <i class="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                        {/* <!-- Twitter --> */}
                        <a class="tw-ic">
                            <i class="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                        {/* <!-- Google +--> */}
                        <a class="gplus-ic">
                            <i class="fa fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                        {/* <!--Linkedin --> */}
                        <a class="li-ic">
                            <i class="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                        {/* <!--Instagram--> */}
                        <a class="ins-ic">
                            <i class="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                        {/* <!--Pinterest--> */}
                        <a class="pin-ic">
                            <i class="fa fa-pinterest fa-lg white-text fa-2x"> </i>
                        </a>
                    </div>
                </div>
                {/* <!-- Grid column --> */}

            </div>
            {/* <!-- Grid row--> */}

        </div>
        {/* <!-- Footer Elements --> */}
        {/* <div class="col-md-6 mb-4">

            <form class="input-group">
                <input type="text" class="form-control form-control-sm" placeholder="Your email" aria-label="Your email" aria-describedby="basic-addon2">
                    <div class="input-group-append">
                        <button class="btn btn-sm btn-outline-white" type="button">Sign up</button>
                    </div>
                </input>
            </form>

        </div> */}

        {/* <!-- Copyright --> */}
        <div class="footer-copyright text-center py-3">
            © 2018 Copyright:
            <a href=""> 
            fitnesstracker.com
            </a>
        </div>
        {/* <!-- Copyright --> */}

    </footer>

        );

export default Footer;