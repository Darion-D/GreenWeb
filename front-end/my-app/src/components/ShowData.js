import styled from "styled-components";

const ShowData = (props) => {
    return (
        <div>
            <h1>adipiscing bibendum est</h1>
            <a href={props.url} target />

            <div>
                <p>
                    this web page is cleaner than <span>{props.cleanerThan}</span> of web pages tested
                </p>
            </div>

            <div>
                {/* icon */}
                <p>only<span>{props.grams} of CO2</span>is produced every time someone visits this web page</p>
            </div>

            <div>
                {/* icon */}
                <p>this web page appears to be running on <span>sustainable energy</span></p>
            </div>
            <button onClick={props.setDisplay('form page')} />
        </div>
    )
}

export default ShowData;

// {
//     "url": "https://www.wholegraindigital.com/",
//     "green": true,
//     "bytes": 443854,
//     "cleanerThan": 0.83,
//     "statistics": {
//         "adjustedBytes": 335109.77,
//         "energy": 0.0005633320052642376,
//         "co2": {
//             "grid": {
//                 "grams": 0.26758270250051286,
//                 "litres": 0.14882949913078525
//             },
//             "renewable": {
//                 "grams": 0.24250694721722435,
//                 "litres": 0.13488236404222018
//             }
//         }
//     }
// }