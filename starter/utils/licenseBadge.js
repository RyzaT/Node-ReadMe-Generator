// This function will determine badges based on license selection.
const licenseBadge =  {
  
    "GNU AGPLv3":"[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
    "GNU GPLv3":"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "GNU LGPLv3":"[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
    "Mozilla":"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    "MIT":"[![License: MIT](https://img.shields.io/bower/l/mi?style=flat-square)](https://opensource.org/licenses/MIT)",
    "Apache":"[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "Boost":"[![License: Boost](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    "None":"[![License None](https://img.shields.io/badge/license-${license}-blue.svg)]",
   
  };
  

  
  module.exports = {
    licenseBadge: licenseBadge,
  };