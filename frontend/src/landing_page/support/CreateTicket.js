import React from "react";

function CreateTicket() {
  return (
    <div className="conatiner">
      <div className="row p-5" style={{ marginLeft: "5px" }}>
        <div className="col p-5 mt-5 ">
          <div>
            <details
              className="border p-4"
              style={{ backgroundColor: "rgb(246, 241, 241)" }}
            >
              <summary className="p-1 ml-2">
                <i class="fa fa-plus-circle" aria-hidden="true" style={{ padding: "6px" }}></i>Account
                Opening
              </summary>
              <a href="" style={{ textDecoration: "none" }}>
                <ul className="">
                  <li>Resident individual</li>
                  <li>Minor</li>
                  <li>Non Resident Indian (NRI)</li>
                  <li>Company, Partnership, HUF and LLP</li>
                  <li>Glossary</li>
                </ul>
              </a>
            </details>
          </div>
          <div
            className="border p-4"
            style={{ backgroundColor: "rgb(246, 241, 241)" }}
          >
            <details className="">
              <summary>
                <i class="fa fa-user-circle-o" aria-hidden="true" style={{ padding: "6px" }} ></i>Your
                Zerodha Account
              </summary>
              <a href="" style={{ textDecoration: "none" }}>
                <ul>
                  <li>Your Profile</li>
                  <li>Account modification</li>
                  <li>
                    Client Master Report (CMR) and Depository Participant (DP)
                  </li>
                  <li>Nomination</li>
                  <li>Transfer and conversion of securities</li>
                </ul>
              </a>
            </details>
          </div>
          <div
            className="border p-4"
            style={{ backgroundColor: "rgb(246, 241, 241)" }}
          >
            <details className="">
              <summary>
                <i class="fa fa-leanpub" aria-hidden="true" style={{ padding: "6px" }} ></i>Kite
              </summary>
              <a href="" style={{ textDecoration: "none" }}>
                <ul>
                  <li>IPO</li>
                  <li>Trading FAQs</li>
                  <li>Margin Trading Facility (MTF) and Margins</li>
                  <li>Charts and orders</li>
                  <li>Alerts and Nudges</li>
                  <li>General</li>
                </ul>
              </a>
            </details>
          </div>
          <div
            className="border p-4"
            style={{ backgroundColor: "rgb(246, 241, 241)" }}
          >
            <details>
              <summary>
                <i class="fa fa-inr" aria-hidden="true" style={{ padding: "6px" }} ></i>
                Funds
              </summary>
              <a href="" style={{ textDecoration: "none" }}>
                <ul>
                  <li>Add money</li>
                  <li>Withdraw money</li>
                  <li>Add bank accounts</li>
                  <li>eMandates</li>
                </ul>
              </a>
            </details>
          </div>
          <div
            className="border p-4"
            style={{ backgroundColor: "rgb(246, 241, 241)" }}
          >
            <details className="">
              <summary>
                <i class="fa fa-at" aria-hidden="true" style={{ padding: "6px" }} ></i>
                Console
              </summary>
              <a href="" style={{ textDecoration: "none" }}>
                <ul>
                  <li>Portfolio</li>
                  <li>Funds statement</li>
                  <li>Corporate actions</li>
                  <li>Reports</li>
                  <li>Profile</li>
                  <li>Segments</li>
                </ul>
              </a>
            </details>
          </div>
          <div
            className="border p-4"
            style={{ backgroundColor: "rgb(246, 241, 241)" }}
          >
            <details className="">
              <summary>
                <i class="fa fa-adjust" aria-hidden="true" style={{ padding: "6px" }}></i>
                Coin
              </summary>
              <p>Quick links</p>
              <a href="" style={{ textDecoration: "none" }}>
                <ul>
                  <li>1. Track account opening</li>
                  <li>2. Track segment activation</li>
                  <li>3. Intraday margins</li>
                  <li>4. Kite user manual</li>
                  <li>5. Learn how to create a ticket</li>
                </ul>
              </a>
            </details>
          </div>
        </div>

        <div className="col-4 p-5 mt-5 ">
          <div className="col  ">
            <div className="" style={{ backgroundColor: "blue" }}></div>
            <div className="col">
              <p>Surveillance measure on scrips - February 2026</p>
              <p>Current Buybacks - February 2026</p>
            </div>
          </div>
          <div className="border mt-5">
            <div
              className="fs-5 p-3"
              style={{ backgroundColor: "rgb(246, 241, 241)" }}
            >
              Quick links
            </div>
            <a href="" style={{ textDecoration: "none" }}>
              <ol>
                <li>Track account opening</li>
                <li>Track segment activation</li>
                <li>Intraday margins</li>
                <li>Kite user manual</li>
                <li>Learn how to create a ticket</li>
              </ol>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
