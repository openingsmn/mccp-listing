import { IListingSubmission } from "@/typing/db";
import { format } from "date-fns";

export default function generateEmailTemplate(
  submisionData: IListingSubmission
): string {
  return /* HTML */ `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          * {
            padding: 0px;
            margin: 0px;
            box-sizing: border-box;
          }
          body {
            background-color: aliceblue;
          }
          .miflex {
            display: flex;
            align-items: center;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            padding: 0px 20px;
          }
          .mailcontainer .logo {
            text-align: center;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          }
          .miflex .label {
            width: 50%;
            border-right: 1px solid rgba(0, 0, 0, 0.1);
            padding: 20px;
          }
          .miflex .label h3 {
            font-size: 16px;
            font-weight: 500;
            font-family: system-ui;
          }
          .mailcontainer {
            width: 60%;
            margin: 50px auto;
            background: white;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            padding: 30px 0px;
            border-top: 15px solid black;
          }
          .values p {
            font-size: 15px;
            font-family: system-ui;
          }
          .values {
            padding: 20px;
            width: 50%;
          }
          @media (max-width: 768px) {
            .mailcontainer {
              width: 90%;
            }
            .miflex .values,
            .miflex .label {
              padding: 20px 10px;
            }
            .miflex .label h3 {
              font-size: 12px;
            }
            .miflex {
              padding: 0px 10px;
            }
          }
        </style>
        <title>Email</title>
      </head>
      <body>
        <div class="mailcontainer">
          <h1 style="text-align: center;">MCCP LISTINGS</h1>
          <div class="forminfo" style="margin-top: 20px;">
            <div class="miflex">
              <div class="label">
                <h3>Type Of Waiver</h3>
              </div>
              <div class="values"><p>${submisionData.waiverType}</p></div>
            </div>
            <div class="miflex">
              <div class="label">
                <h3>Specific Options</h3>
              </div>
              <div class="values">
                <p>${submisionData.waiverTypeSpecific}</p>
              </div>
            </div>
            <div class="miflex">
              <div class="label">
                <h3>Timeframe Needed</h3>
              </div>
              <div class="values"><p>${submisionData.timeframe}</p></div>
            </div>
            <div class="miflex">
              <div class="label">
                <h3>Type Of Housing Desired</h3>
              </div>
              <div class="values"><p>${submisionData.housingType}</p></div>
            </div>
            <div class="miflex">
              <div class="label">
                <h3>Full Name</h3>
              </div>
              <div class="values"><p>${submisionData.fullName}</p></div>
            </div>
            <div class="miflex">
              <div class="label">
                <h3>Date of Birth</h3>
              </div>
              <div class="values">
                <p>${format(submisionData.dateOfBirth, "PPP")}</p>
              </div>
            </div>
            <div class="miflex">
              <div class="label">
                <h3>PMI Number</h3>
              </div>
              <div class="values"><p>${submisionData.pmiNumber}</p></div>
            </div>
            <div class="miflex">
              <div class="label">
                <h3>Address</h3>
              </div>
              <div class="values">
                <p>
                  ${submisionData.address?.fullAddress
                    ? submisionData.address.fullAddress
                    : ""}
                  ${submisionData.address?.city
                    ? `<br /> ${submisionData.address.city}`
                    : ""}
                  ${submisionData.address?.postalCode
                    ? `<br /> ${submisionData.address.postalCode}`
                    : ""}
                </p>
              </div>
            </div>
            <div class="miflex">
              <div class="label">
                <h3>Email Address</h3>
              </div>
              <div class="values"><p>${submisionData.email}</p></div>
            </div>
            <div class="miflex">
              <div class="label">
                <h3>Religious & Cultural Preference(s)</h3>
              </div>
              <div class="values">
                <p>${submisionData.relegiousPref ?? ""}</p>
              </div>
            </div>
            <div class="miflex">
              <div class="label">
                <h3>Gender Identity</h3>
              </div>
              <div class="values"><p>${submisionData.gender ?? ""}</p></div>
            </div>
            <div class="miflex">
              <div class="label">
                <h3>Race/Ethnicity</h3>
              </div>
              <div class="values"><p>${submisionData.race ?? ""}</p></div>
            </div>
            <div class="miflex">
              <div class="label">
                <h3>
                  Medical Equipment, Devices, Adaptive Aides, Technology,
                  Specific Medical Needs
                </h3>
              </div>
              <div class="values">
                <p>${submisionData.equipementsNeeded}</p>
              </div>
            </div>
            <div class="miflex">
              <div class="label">
                <h3>Guardian Status</h3>
              </div>
              <div class="values"><p>${submisionData.guardianStatus}</p></div>
            </div>
            <div class="miflex">
              <div class="label">
                <h3>Current Living Situation</h3>
              </div>
              <div class="values"><p>${submisionData.livingSituation}</p></div>
            </div>
            <div class="miflex">
              <div class="label">
                <h3>Does this person have mobility concerns?</h3>
              </div>
              <div class="values">
                <p>${submisionData.mobility?.mobilityConcers ?? ""}</p>
              </div>
            </div>
            <div class="miflex">
              <div class="label">
                <h3>
                  Does this person use OR could they use any of the following to
                  assist with mobility/accessibility? (Cane, Walker, Wheelchair,
                  Scooter, Chair lift for stairs, Hoyer Lift) If yest please
                  list what is used below.
                </h3>
              </div>
              <div class="values">
                <p>${submisionData.mobility?.usedMobilityDevices ?? ""}</p>
              </div>
            </div>
            <div class="miflex">
              <div class="label">
                <h3>
                  Would they be open to moving into a home if they only had
                  access to one floor of the home, due to the limited
                  accessibility of the home?
                </h3>
              </div>
              <div class="values">
                <p>${submisionData.mobility?.adjustWithOneFloor ?? ""}</p>
              </div>
            </div>
            <div class="miflex">
              <div class="label">
                <h3>55+ ACCESSIBLE</h3>
              </div>
              <div class="values">
                <p>
                  ${submisionData.residentialOpenings?.accessible55P?.replaceAll(
                    "&&",
                    "<br />"
                  ) ?? ""}
                </p>
              </div>
            </div>
            <div class="miflex">
              <div class="label">
                <h3>55+ NOT ACCESSIBLE</h3>
              </div>
              <div class="values">
                <p>
                  ${submisionData.residentialOpenings?.notAccessible55P?.replaceAll(
                    "&&",
                    "<br />"
                  ) ?? ""}
                </p>
              </div>
            </div>
            <div class="miflex">
              <div class="label">
                <h3>18+ ACCESSIBLE</h3>
              </div>
              <div class="values">
                <p>
                  ${submisionData.residentialOpenings?.accessible18P?.replaceAll(
                    "&&",
                    "<br />"
                  ) ?? ""}
                </p>
              </div>
            </div>
            <div class="miflex">
              <div class="label">
                <h3>18+ NOT ACCESSIBLE</h3>
              </div>
              <div class="values">
                <p>
                  ${submisionData.residentialOpenings?.notAccessible18P?.replaceAll(
                    "&&",
                    "<br />"
                  ) ?? ""}
                </p>
              </div>
            </div>
            <div class="miflex">
              <div class="label">
                <h3>18+ NOT ACCESSIBLE- FEMALE ONLY</h3>
              </div>
              <div class="values">
                <p>
                  ${submisionData.residentialOpenings?.notAccessible18PFemaleOnly?.replaceAll(
                    "&&",
                    "<br />"
                  ) ?? ""}
                </p>
              </div>
            </div>
            <div class="miflex">
              <div class="label">
                <h3>
                  Waiver Case Manager: Company Name, Best Contact Number & Email
                  Address*
                </h3>
              </div>
              <div class="values">
                <p>${submisionData.teamContact?.caseManager ?? ""}</p>
              </div>
            </div>
            <div class="miflex">
              <div class="label">
                <h3>
                  Referring Party: Company Name, Best Contact Number & Email
                  Address*If different from Waiver Case Manager
                </h3>
              </div>
              <div class="values">
                <p>${submisionData.teamContact?.referrer ?? ""}</p>
              </div>
            </div>
            <div class="miflex">
              <div class="label">
                <h3>
                  Legal Representative or Guardian: Company Name, Best Contact
                  Number & Email Address
                </h3>
              </div>
              <div class="values">
                <p>${submisionData.teamContact?.legalRepresentative ?? ""}</p>
              </div>
            </div>
            <div class="miflex">
              <div class="label">
                <h3>
                  The Current CSSP & MNChoice Assessment below, or to our
                  Community Referral Coordinator
                </h3>
              </div>
              <div class="values"><p>${""}</p></div>
            </div>
            <div class="miflex">
              <div class="label">
                <h3>Signature</h3>
              </div>
              <div class="values"><p>${"No signatures provided."}</p></div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}
